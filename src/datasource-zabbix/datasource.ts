import _ from 'lodash';
import config from 'grafana/app/core/config';
import { contextSrv } from 'grafana/app/core/core';
import * as dateMath from 'grafana/app/core/utils/datemath';
import * as utils from './utils';
import * as migrations from './migrations';
import * as metricFunctions from './metricFunctions';
import * as c from './constants';
import dataProcessor from './dataProcessor';
import responseHandler from './responseHandler';
import problemsHandler from './problemsHandler';
import { Zabbix } from './zabbix/zabbix';
import { ZabbixAPIError } from './zabbix/connectors/zabbix_api/zabbixAPIConnector';
import { ProblemDTO, ShowProblemTypes, VariableQueryTypes, ZabbixDSOptions, ZabbixMetricsQuery } from './types';
import { BackendSrvRequest, getBackendSrv, getTemplateSrv, toDataQueryResponse } from '@grafana/runtime';
import {
  DataFrame,
  dataFrameFromJSON,
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  FieldType,
  isDataFrame,
  LoadingState
} from '@grafana/data';

export class ZabbixDatasource extends DataSourceApi<ZabbixMetricsQuery, ZabbixDSOptions> {
  name: string;
  basicAuth: any;
  withCredentials: any;

  trends: boolean;
  trendsFrom: string;
  trendsRange: string;
  cacheTTL: any;
  disableReadOnlyUsersAck: boolean;
  disableDataAlignment: boolean;
  enableDirectDBConnection: boolean;
  dbConnectionDatasourceId: number;
  dbConnectionDatasourceName: string;
  dbConnectionRetentionPolicy: string;
  enableDebugLog: boolean;
  datasourceId: number;
  zabbix: Zabbix;

  replaceTemplateVars: (target: any, scopedVars?: any) => any;

  /** @ngInject */
  constructor(instanceSettings: DataSourceInstanceSettings<ZabbixDSOptions>, private templateSrv) {
    super(instanceSettings);

    this.templateSrv = templateSrv;
    this.enableDebugLog = config.buildInfo.env === 'development';

    // Use custom format for template variables
    this.replaceTemplateVars = _.partial(replaceTemplateVars, this.templateSrv);

    // General data source settings
    this.datasourceId = instanceSettings.id;
    this.name = instanceSettings.name;
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;

    const jsonData = migrations.migrateDSConfig(instanceSettings.jsonData);

    // Use trends instead history since specified time
    this.trends = jsonData.trends;
    this.trendsFrom = jsonData.trendsFrom || '7d';
    this.trendsRange = jsonData.trendsRange || '4d';

    // Set cache update interval
    const ttl = jsonData.cacheTTL || '1h';
    this.cacheTTL = utils.parseInterval(ttl);

    // Other options
    this.disableReadOnlyUsersAck = jsonData.disableReadOnlyUsersAck;
    this.disableDataAlignment = jsonData.disableDataAlignment;

    // Direct DB Connection options
    this.enableDirectDBConnection = jsonData.dbConnectionEnable || false;
    this.dbConnectionDatasourceId = jsonData.dbConnectionDatasourceId;
    this.dbConnectionDatasourceName = jsonData.dbConnectionDatasourceName;
    this.dbConnectionRetentionPolicy = jsonData.dbConnectionRetentionPolicy;

    const zabbixOptions = {
      basicAuth: this.basicAuth,
      withCredentials: this.withCredentials,
      cacheTTL: this.cacheTTL,
      enableDirectDBConnection: this.enableDirectDBConnection,
      dbConnectionDatasourceId: this.dbConnectionDatasourceId,
      dbConnectionDatasourceName: this.dbConnectionDatasourceName,
      dbConnectionRetentionPolicy: this.dbConnectionRetentionPolicy,
      datasourceId: this.datasourceId,
    };

    this.zabbix = new Zabbix(zabbixOptions);
  }

  ////////////////////////
  // Datasource methods //
  ////////////////////////

  /**
   * Query panel data. Calls for each panel in dashboard.
   * @param  {Object} request   Contains time range, targets and other info.
   * @return {Object} Grafana metrics object with timeseries data for each target.
   */
  query(request: DataQueryRequest<ZabbixMetricsQuery>) {
    // Migrate old targets
    const requestTargets = request.targets.map(t => {
      // Prevent changes of original object
      const target = _.cloneDeep(t);
      return migrations.migrate(target);
    });

    const backendResponsePromise = this.backendQuery({ ...request, targets: requestTargets });
    const dbConnectionResponsePromise = this.dbConnectionQuery({ ...request, targets: requestTargets });
    const frontendResponsePromise = this.frontendQuery({ ...request, targets: requestTargets });

    return Promise.all([backendResponsePromise, dbConnectionResponsePromise, frontendResponsePromise])
    .then(rsp => {
      // Merge backend and frontend queries results
      const [backendRes, dbConnectionRes, frontendRes] = rsp;
      if (dbConnectionRes.data) {
        backendRes.data = backendRes.data.concat(dbConnectionRes.data);
      }
      if (frontendRes.data) {
        backendRes.data = backendRes.data.concat(frontendRes.data);
      }

      return {
        data: backendRes.data,
        state: LoadingState.Done,
        key: request.requestId,
      };
    });
  }

  async backendQuery(request: DataQueryRequest<any>): Promise<DataQueryResponse> {
    const { intervalMs, maxDataPoints, range, requestId } = request;
    const targets = request.targets.filter(this.isBackendTarget);

    // Add range variables
    request.scopedVars = Object.assign({}, request.scopedVars, utils.getRangeScopedVars(request.range));

    const queries = _.compact(targets.map((query) => {
      // Don't request for hidden targets
      if (query.hide) {
        return null;
      }

      this.replaceTargetVariables(query, request);

      return {
        ...query,
        datasourceId: this.datasourceId,
        intervalMs,
        maxDataPoints,
      };
    }));

    // Return early if no queries exist
    if (!queries.length) {
      return Promise.resolve({ data: [] });
    }

    const body: any = { queries };

    if (range) {
      body.range = range;
      body.from = range.from.valueOf().toString();
      body.to = range.to.valueOf().toString();
    }

    let rsp: any;
    try {
      rsp = await getBackendSrv().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: body,
        requestId,
      }).toPromise();
    } catch (err) {
      return toDataQueryResponse(err);
    }

    const resp = toDataQueryResponse(rsp);
    this.sortByRefId(resp);
    this.applyFrontendFunctions(resp, request);
    responseHandler.convertZabbixUnits(resp);
    if (responseHandler.isConvertibleToWide(resp.data)) {
      console.log('Converting response to the wide format');
      resp.data = responseHandler.convertToWide(resp.data);
    }

    return resp;
  }

  async frontendQuery(request: DataQueryRequest<any>): Promise<DataQueryResponse> {
    const frontendTargets = request.targets.filter(t => !(this.isBackendTarget(t) || this.isDBConnectionTarget(t)));
    const promises = _.map(frontendTargets, target => {
      // Don't request for hidden targets
      if (target.hide) {
        return [];
      }

      // Add range variables
      request.scopedVars = Object.assign({}, request.scopedVars, utils.getRangeScopedVars(request.range));
      this.replaceTargetVariables(target, request);
      const timeRange = this.buildTimeRange(request, target);

      // Metrics or Text query
      if (!target.queryType || target.queryType === c.MODE_METRICS || target.queryType === c.MODE_TEXT) {
        // Don't send request if group/host/item doesn't exist or all filters are empty
        if (!target.group || !target.host || !target.item || 
          (target.queryType > -1 && !(target.group || {}).filter && !(target.host || {}).filter && !(target.item || {}).filter)) {
          return [];
        }
        return this.queryTextData(target, timeRange);
      } else if (target.queryType === c.MODE_ITSERVICE) {
        // IT services query
        return this.queryITServiceData(target, timeRange, request);
      } else if (target.queryType === c.MODE_TRIGGERS) {
        // Triggers query
        return this.queryTriggersData(target, timeRange);
      } else if (target.queryType === c.MODE_PROBLEMS) {
        // Problems query
        return this.queryProblems(target, timeRange, request);
      } else {
        return [];
      }
    });

    // Data for panel (all targets)
    return Promise.all(_.flatten(promises))
    .then(_.flatten)
    .then(data => {
      if (data && data.length > 0 && isDataFrame(data[0]) && !utils.isProblemsDataFrame(data[0])) {
        data = responseHandler.alignFrames(data);
        if (responseHandler.isConvertibleToWide(data)) {
          console.log('Converting response to the wide format');
          data = responseHandler.convertToWide(data);
        }
      }
      return { data };
    });
  }

  async dbConnectionQuery(request: DataQueryRequest<any>): Promise<DataQueryResponse> {
    const targets = request.targets.filter(this.isDBConnectionTarget);

    const queries = _.compact(targets.map((target) => {
      // Don't request for hidden targets
      if (target.hide) {
        return [];
      }

      // Add range variables
      request.scopedVars = Object.assign({}, request.scopedVars, utils.getRangeScopedVars(request.range));
      this.replaceTargetVariables(target, request);
      const timeRange = this.buildTimeRange(request, target);
      const useTrends = this.isUseTrends(timeRange);

      if (!target.queryType || target.queryType === c.MODE_METRICS) {
        return this.queryNumericData(target, timeRange, useTrends, request);
      } else if (target.queryType === c.MODE_ITEMID) {
        // Item ID query
        if (!target.itemids) {
          return [];
        }
        return this.queryItemIdData(target, timeRange, useTrends, request);
      } else {
        return [];
      }
    }));

    const promises: Promise<DataQueryResponse> = Promise.all(queries)
    .then(_.flatten)
    .then(data => ({ data }));

    return promises;
  }

  buildTimeRange(request, target) {
    let timeFrom = Math.ceil(dateMath.parse(request.range.from) / 1000);
    let timeTo = Math.ceil(dateMath.parse(request.range.to) / 1000);

    // Apply Time-related functions (timeShift(), etc)
    const timeFunctions = bindFunctionDefs(target.functions, 'Time');
    if (timeFunctions.length) {
      const [time_from, time_to] = utils.sequence(timeFunctions)([timeFrom, timeTo]);
      timeFrom = time_from;
      timeTo = time_to;
    }
    return [timeFrom, timeTo];
  }

  /**
   * Query target data for Metrics
   */
  async queryNumericData(target, timeRange, useTrends, request): Promise<any> {
    const getItemOptions = {
      itemtype: 'num'
    };

    const items = await this.zabbix.getItemsFromTarget(target, getItemOptions);

    const queryStart = new Date().getTime();
    const result = await this.queryNumericDataForItems(items, target, timeRange, useTrends, request);
    const queryEnd = new Date().getTime();

    if (this.enableDebugLog) {
      console.log(`Datasource::Performance Query Time (${this.name}): ${queryEnd - queryStart}`);
    }

    return this.handleBackendPostProcessingResponse(result, request, target);
  }

  /**
   * Query history for numeric items
   */
  async queryNumericDataForItems(items, target: ZabbixMetricsQuery, timeRange, useTrends, request) {
    let history;
    request.valueType = this.getTrendValueType(target);
    request.consolidateBy = getConsolidateBy(target) || request.valueType;

    if (useTrends) {
      history = await this.zabbix.getTrends(items, timeRange, request);
    } else {
      history = await this.zabbix.getHistoryTS(items, timeRange, request);
    }

    const range = {
      from: timeRange[0],
      to: timeRange[1],
    };
    return await this.invokeDataProcessingQuery(history, target, range);
  }

  async invokeDataProcessingQuery(timeSeriesData, query, timeRange) {
    // Request backend for data processing
    const requestOptions: BackendSrvRequest = {
      url: `/api/datasources/${this.datasourceId}/resources/db-connection-post`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      hideFromInspector: false,
      data: {
        series: timeSeriesData,
        query,
        timeRange,
      },
    };

    const response: any = await getBackendSrv().fetch<any>(requestOptions).toPromise();
    return response.data;
  }

  handleBackendPostProcessingResponse(response, request, target) {
    const frames = [];
    for (const frameJSON of response) {
      const frame = dataFrameFromJSON(frameJSON);
      frame.refId = target.refId;
      frames.push(frame);
    }

    const resp = { data: frames };
    this.sortByRefId(resp);
    this.applyFrontendFunctions(resp, request);
    if (responseHandler.isConvertibleToWide(resp.data)) {
      console.log('Converting response to the wide format');
      resp.data = responseHandler.convertToWide(resp.data);
    }

    return resp.data;
  }

  getTrendValueType(target) {
    // Find trendValue() function and get specified trend value
    const trendFunctions = _.map(metricFunctions.getCategories()['Trends'], 'name');
    const trendValueFunc = _.find(target.functions, func => {
      return _.includes(trendFunctions, func.def.name);
    });
    return trendValueFunc ? trendValueFunc.params[0] : "avg";
  }

  sortByRefId(response: DataQueryResponse) {
    response.data.sort((a, b) => {
      if (a.refId < b.refId) {
        return -1;
      } else if (a.refId > b.refId) {
        return 1;
      }
      return 0;
    });
  }

  applyFrontendFunctions(response: DataQueryResponse, request: DataQueryRequest<any>) {
    for (let i = 0; i < response.data.length; i++) {
      const frame: DataFrame = response.data[i];
      const target = getRequestTarget(request, frame.refId);

      // Apply alias functions
      const aliasFunctions = bindFunctionDefs(target.functions, 'Alias');
      utils.sequence(aliasFunctions)(frame);
    }
    return response;
  }

  /**
   * Query target data for Text
   */
  queryTextData(target, timeRange) {
    const options = {
      itemtype: 'text'
    };
    return this.zabbix.getItemsFromTarget(target, options)
    .then(items => {
      return this.zabbix.getHistoryText(items, timeRange, target);
    })
    .then(result => {
      if (target.resultFormat !== 'table') {
        return result.map(s => responseHandler.seriesToDataFrame(s, target, [], FieldType.string));
      }
      return result;
    });
  }

  /**
   * Query target data for Item ID
   */
  queryItemIdData(target, timeRange, useTrends, options) {
    let itemids = target.itemids;
    itemids = this.templateSrv.replace(itemids, options.scopedVars, zabbixItemIdsTemplateFormat);
    itemids = _.map(itemids.split(','), itemid => itemid.trim());

    if (!itemids) {
      return [];
    }

    return this.zabbix.getItemsByIDs(itemids)
    .then(items => {
      return this.queryNumericDataForItems(items, target, timeRange, useTrends, options);
    });
  }

  /**
   * Query target data for IT Services
   */
  async queryITServiceData(target, timeRange, request) {
    // Don't show undefined and hidden targets
    if (target.hide || (!target.itservice && !target.itServiceFilter) || !target.slaProperty) {
      return [];
    }

    let itServiceFilter;
    request.isOldVersion = target.itservice && !target.itServiceFilter;

    if (request.isOldVersion) {
      // Backward compatibility
      itServiceFilter = '/.*/';
    } else {
      itServiceFilter = this.replaceTemplateVars(target.itServiceFilter, request.scopedVars);
    }

    request.slaInterval = target.slaInterval;

    let itservices = await this.zabbix.getITServices(itServiceFilter);
    if (request.isOldVersion) {
      itservices = _.filter(itservices, { 'serviceid': target.itservice?.serviceid });
    }
    const itservicesdp = await this.zabbix.getSLA(itservices, timeRange, target, request);
    const backendRequest = responseHandler.itServiceResponseToTimeSeries(itservicesdp, target.slaInterval);
    const processedResponse = await this.invokeDataProcessingQuery(backendRequest, target, {});
    return this.handleBackendPostProcessingResponse(processedResponse, request, target);
  }

  queryTriggersData(target, timeRange) {
    const [timeFrom, timeTo] = timeRange;
    return this.zabbix.getHostsFromTarget(target)
    .then(results => {
      const [hosts, apps] = results;
      if (hosts.length) {
        const hostids = _.map(hosts, 'hostid');
        const appids = _.map(apps, 'applicationid');
        const options = {
          minSeverity: target.triggers.minSeverity,
          acknowledged: target.triggers.acknowledged,
          count: target.triggers.count,
          timeFrom: timeFrom,
          timeTo: timeTo
        };
        const groupFilter = target.group.filter;
        return Promise.all([
          this.zabbix.getHostAlerts(hostids, appids, options),
          this.zabbix.getGroups(groupFilter)
        ])
        .then(([triggers, groups]) => {
          return responseHandler.handleTriggersResponse(triggers, groups, timeRange);
        });
      } else {
        return Promise.resolve([]);
      }
    });
  }

  queryProblems(target: ZabbixMetricsQuery, timeRange, options) {
    const [timeFrom, timeTo] = timeRange;
    const userIsEditor = contextSrv.isEditor || contextSrv.isGrafanaAdmin;

    let proxies;
    let showAckButton = true;

    const showProblems = target.showProblems || ShowProblemTypes.Problems;
    const showProxy = target.options.hostProxy;

    const getProxiesPromise = showProxy ? this.zabbix.getProxies() : () => [];
    showAckButton = !this.disableReadOnlyUsersAck || userIsEditor;

    // Replace template variables
    const groupFilter = this.replaceTemplateVars(target.group?.filter, options.scopedVars);
    const hostFilter = this.replaceTemplateVars(target.host?.filter, options.scopedVars);
    const appFilter = this.replaceTemplateVars(target.application?.filter, options.scopedVars);
    const proxyFilter = this.replaceTemplateVars(target.proxy?.filter, options.scopedVars);

    const triggerFilter = this.replaceTemplateVars(target.trigger?.filter, options.scopedVars);
    const tagsFilter = this.replaceTemplateVars(target.tags?.filter, options.scopedVars);

    const replacedTarget = {
      ...target,
      trigger: { filter: triggerFilter },
      tags: { filter: tagsFilter },
    };

    // replaceTemplateVars() builds regex-like string, so we should trim it.
    const tagsFilterStr = tagsFilter.replace('/^', '').replace('$/', '');
    const tags = utils.parseTags(tagsFilterStr);
    tags.forEach(tag => {
      // Zabbix uses {"tag": "<tag>", "value": "<value>", "operator": "<operator>"} format, where 1 means Equal
      tag.operator = 1;
    });

    const problemsOptions: any = {
      recent: showProblems === ShowProblemTypes.Recent,
      minSeverity: target.options?.minSeverity,
      limit: target.options?.limit,
    };

    if (tags && tags.length) {
      problemsOptions.tags = tags;
    }

    if (target.options?.acknowledged === 0 || target.options?.acknowledged === 1) {
      problemsOptions.acknowledged = !!target.options?.acknowledged;
    }

    if (target.options?.minSeverity) {
      let severities = [0, 1, 2, 3, 4, 5].filter(v => v >= target.options?.minSeverity);
      if (target.options?.severities) {
        severities = severities.filter(v => target.options?.severities.includes(v));
      }
      problemsOptions.severities = severities;
    }

    let getProblemsPromise: Promise<ProblemDTO[]>;
    if (showProblems === ShowProblemTypes.History || target.options?.useTimeRange) {
      problemsOptions.timeFrom = timeFrom;
      problemsOptions.timeTo = timeTo;
      getProblemsPromise = this.zabbix.getProblemsHistory(groupFilter, hostFilter, appFilter, proxyFilter, problemsOptions);
    } else {
      getProblemsPromise = this.zabbix.getProblems(groupFilter, hostFilter, appFilter, proxyFilter, problemsOptions);
    }

    const problemsPromises = Promise.all([
      getProblemsPromise,
      getProxiesPromise
    ])
    .then(([problems, sourceProxies]) => {
      proxies = _.keyBy(sourceProxies, 'proxyid');
      return problems;
    })
    .then(problems => problemsHandler.setMaintenanceStatus(problems))
    .then(problems => problemsHandler.setAckButtonStatus(problems, showAckButton))
    .then(problems => problemsHandler.filterTriggersPre(problems, replacedTarget))
    .then(problems => problemsHandler.sortProblems(problems, target))
    .then(problems => problemsHandler.addTriggerDataSource(problems, target))
    .then(problems => problemsHandler.addTriggerHostProxy(problems, proxies));

    return problemsPromises.then(problems => {
      const problemsDataFrame = problemsHandler.toDataFrame(problems);
      return problemsDataFrame;
    });
  }

  /**
   * Test connection to Zabbix API and external history DB.
   */
  async testDatasource() {
    try {
      const { zabbixVersion, dbConnectorStatus } = await this.zabbix.testDataSource();
      let message = `Zabbix API version: ${zabbixVersion}`;
      if (dbConnectorStatus) {
        message += `, DB connector type: ${dbConnectorStatus.dsType}`;
      }
      return {
        status: "success",
        title: "Success",
        message: message
      };
    } catch (error) {
      if (error instanceof ZabbixAPIError) {
        return {
          status: "error",
          title: error.message,
          message: error.message
        };
      } else if (error.data && error.data.message) {
        return {
          status: "error",
          title: "Zabbix Client Error",
          message: error.data.message
        };
      } else if (typeof (error) === 'string') {
        return {
          status: "error",
          title: "Unknown Error",
          message: error
        };
      } else {
        console.log(error);
        return {
          status: "error",
          title: "Connection failed",
          message: "Could not connect to given url"
        };
      }
    }
  }

  ////////////////
  // Templating //
  ////////////////

  /**
   * Find metrics from templated request.
   *
   * @param  {string} query Query from Templating
   * @param options
   * @return {string}       Metric name - group, host, app or item or list
   *                        of metrics in "{metric1, metric2,..., metricN}" format.
   */
  metricFindQuery(query, options) {
    let resultPromise;
    let queryModel = _.cloneDeep(query);

    if (!query) {
      return Promise.resolve([]);
    }

    if (typeof query === 'string') {
      // Backward compatibility
      queryModel = utils.parseLegacyVariableQuery(query);
    }

    for (const prop of ['group', 'host', 'application', 'itemTag', 'item']) {
      queryModel[prop] = this.replaceTemplateVars(queryModel[prop], {});
    }

    const { group, host, application, item } = queryModel;

    switch (queryModel.queryType) {
      case VariableQueryTypes.Group:
        resultPromise = this.zabbix.getGroups(queryModel.group);
        break;
      case VariableQueryTypes.Host:
        resultPromise = this.zabbix.getHosts(queryModel.group, queryModel.host);
        break;
      case VariableQueryTypes.Application:
        resultPromise = this.zabbix.getApps(queryModel.group, queryModel.host, queryModel.application);
        break;
      case VariableQueryTypes.ItemTag:
        resultPromise = this.zabbix.getItemTags(queryModel.group, queryModel.host, queryModel.itemTag);
        break;
      case VariableQueryTypes.Item:
        resultPromise = this.zabbix.getItems(queryModel.group, queryModel.host, queryModel.application, null, queryModel.item);
        break;
      case VariableQueryTypes.ItemValues:
        const range = options?.range;
        resultPromise = this.zabbix.getItemValues(group, host, application, item, { range });
        break;
      default:
        resultPromise = Promise.resolve([]);
        break;
    }

    return resultPromise.then(metrics => {
      return _.map(metrics, formatMetric);
    });
  }

  targetContainsTemplate(target: ZabbixMetricsQuery): boolean {
    const templateSrv = getTemplateSrv() as any;
    return (
      templateSrv.variableExists(target.group?.filter) ||
      templateSrv.variableExists(target.host?.filter) ||
      templateSrv.variableExists(target.application?.filter) ||
      templateSrv.variableExists(target.itemTag?.filter) ||
      templateSrv.variableExists(target.item?.filter) ||
      templateSrv.variableExists(target.proxy?.filter) ||
      templateSrv.variableExists(target.trigger?.filter) ||
      templateSrv.variableExists(target.textFilter) ||
      templateSrv.variableExists(target.itServiceFilter)
    );
  }

  /////////////////
  // Annotations //
  /////////////////

  annotationQuery(options) {
    const timeRange = options.range || options.rangeRaw;
    const timeFrom = Math.ceil(dateMath.parse(timeRange.from) / 1000);
    const timeTo = Math.ceil(dateMath.parse(timeRange.to) / 1000);
    const annotation = options.annotation;

    // Show all triggers
    const problemsOptions: any = {
      value: annotation.showOkEvents ? ['0', '1'] : '1',
      valueFromEvent: true,
      timeFrom,
      timeTo,
    };

    if (annotation.minseverity) {
      const severities = [0, 1, 2, 3, 4, 5].filter(v => v >= Number(annotation.minseverity));
      problemsOptions.severities = severities;
    }

    const groupFilter = this.replaceTemplateVars(annotation.group, {});
    const hostFilter = this.replaceTemplateVars(annotation.host, {});
    const appFilter = this.replaceTemplateVars(annotation.application, {});
    const proxyFilter = undefined;

    return this.zabbix.getProblemsHistory(groupFilter, hostFilter, appFilter, proxyFilter, problemsOptions)
    .then(problems => {
      // Filter triggers by description
      const problemName = this.replaceTemplateVars(annotation.trigger, {});
      if (utils.isRegex(problemName)) {
        problems = _.filter(problems, p => {
          return utils.buildRegex(problemName).test(p.description);
        });
      } else if (problemName) {
        problems = _.filter(problems, p => {
          return p.description === problemName;
        });
      }

      // Hide acknowledged events if option enabled
      if (annotation.hideAcknowledged) {
        problems = _.filter(problems, p => {
          return !p.acknowledges?.length;
        });
      }

      return _.map(problems, p => {
        const formattedAcknowledges = utils.formatAcknowledges(p.acknowledges);

        let annotationTags: string[] = [];
        if (annotation.showHostname) {
          annotationTags = _.map(p.hosts, 'name');
        }

        return {
          title: p.value === '1' ? 'Problem' : 'OK',
          time: p.timestamp * 1000,
          annotation: annotation,
          text: p.name + formattedAcknowledges,
          tags: annotationTags,
        };
      });
    });
  }

  // Replace template variables
  replaceTargetVariables(target, options) {
    const parts = ['group', 'host', 'application', 'itemTag', 'item', 'trigger'];
    _.forEach(parts, p => {
      if (target[p] && target[p].filter) {
        const hasVars = this.checkForTemplateVariables(target[p].filter, this.templateSrv.getVariables());
        if (hasVars) {
          const origValue = target[p].filter;
          target[p].filter = this.replaceTemplateVars(target[p].filter, options.scopedVars);
          if (origValue !== target[p].filter) {
            // Set RegExp-filters to '/.*/' when filter uses magic keyword '<MATCH_ALL>'
            // NOTE: replaceTemplateVars method call changes filters to '/^...$/' syntax
            if (target[p].filter !== 'group' && target[p].filter === '/^<MATCH_ALL>$/') {
              target[p].filter = '/.*/';
            }
          }
        }
        // Set normal text filters to '/.*/' when filter uses magic keyword '<MATCH_ALL>'
        else if (target[p].filter !== 'group' && target[p].filter === '<MATCH_ALL>') {
          target[p].filter = '/.*/';
        }
      }
    });

    if (target.textFilter) {
      target.textFilter = this.replaceTemplateVars(target.textFilter, options.scopedVars);
    }

    if (target.itemids) {
      target.itemids = this.templateSrv.replace(target.itemids, options.scopedVars, zabbixItemIdsTemplateFormat);
    }

    _.forEach(target.functions, func => {
      func.params = _.map(func.params, param => {
        if (typeof param === 'number') {
          return +this.templateSrv.replace(param.toString(), options.scopedVars);
        } else {
          return this.templateSrv.replace(param, options.scopedVars);
        }
      });
    });
  }

  checkForTemplateVariables(fieldText: string, scopedVars: any[]) {
    return scopedVars.some((variable: any) => (
      fieldText.indexOf('$' + variable.name) > -1 || fieldText.indexOf('${' + variable.name + '}') > -1
    ));
  }

  isUseTrends(timeRange) {
    const [timeFrom, timeTo] = timeRange;
    const useTrendsFrom = Math.ceil(dateMath.parse('now-' + this.trendsFrom) / 1000);
    const useTrendsRange = Math.ceil(utils.parseInterval(this.trendsRange) / 1000);
    const useTrends = this.trends && (
      (timeFrom < useTrendsFrom) ||
      (timeTo - timeFrom > useTrendsRange)
    );
    return useTrends;
  }

  isBackendTarget = (target: any): boolean => {
    if (this.enableDirectDBConnection) {
      return false;
    }

    return target.queryType === c.MODE_METRICS ||
      target.queryType === c.MODE_ITEMID;
  };

  isDBConnectionTarget = (target: any): boolean => {
    return this.enableDirectDBConnection &&
      (target.queryType === c.MODE_METRICS || target.queryType === c.MODE_ITEMID);
  };
}

function bindFunctionDefs(functionDefs, category) {
  const aggregationFunctions = _.map(metricFunctions.getCategories()[category], 'name');
  const aggFuncDefs = _.filter(functionDefs, func => {
    return _.includes(aggregationFunctions, func.def.name);
  });

  return _.map(aggFuncDefs, func => {
    const funcInstance = metricFunctions.createFuncInstance(func.def, func.params);
    return funcInstance.bindFunction(dataProcessor.metricFunctions);
  });
}

function getConsolidateBy(target) {
  let consolidateBy;
  const funcDef = _.find(target.functions, func => {
    return func.def.name === 'consolidateBy';
  });
  if (funcDef && funcDef.params && funcDef.params.length) {
    consolidateBy = funcDef.params[0];
  }
  return consolidateBy;
}

function formatMetric(metricObj) {
  return {
    text: metricObj.name,
    expandable: false
  };
}

/**
 * Custom formatter for template variables.
 * Default Grafana "regex" formatter returns
 * value1|value2
 * This formatter returns
 * (value1|value2)
 * This format needed for using in complex regex with
 * template variables, for example
 * /CPU $cpu_item.*time/ where $cpu_item is system,user,iowait
 */
export function zabbixTemplateFormat(value) {
  if (typeof value === 'string') {
    return utils.escapeRegex(value);
  }

  const escapedValues = _.map(value, utils.escapeRegex);
  return '(' + escapedValues.join('|') + ')';
}

function zabbixItemIdsTemplateFormat(value) {
  if (typeof value === 'string') {
    return value;
  }
  return value.join(',');
}

/**
 * If template variables are used in request, replace it using regex format
 * and wrap with '/' for proper multi-value work. Example:
 * $variable selected as a, b, c
 * We use filter $variable
 * $variable    -> a|b|c    -> /a|b|c/
 * /$variable/  -> /a|b|c/  -> /a|b|c/
 */
function replaceTemplateVars(templateSrv, target, scopedVars) {
  let replacedTarget = templateSrv.replace(target, scopedVars, zabbixTemplateFormat);
  if (target && target !== replacedTarget && !utils.isRegex(replacedTarget)) {
    replacedTarget = '/^' + replacedTarget + '$/';
  }
  return replacedTarget;
}

export function base64StringToArrowTable(text: string) {
  const b64 = atob(text);
  const arr = Uint8Array.from(b64, (c) => {
    return c.charCodeAt(0);
  });
  return arr;
}

function getRequestTarget(request: DataQueryRequest<any>, refId: string): any {
  for (let i = 0; i < request.targets.length; i++) {
    const target = request.targets[i];
    if (target.refId === refId) {
      return target;
    }
  }
  return null;
}
