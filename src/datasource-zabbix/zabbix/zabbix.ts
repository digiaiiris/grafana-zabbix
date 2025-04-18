import _ from 'lodash';
import moment from 'moment';
import semver from 'semver';
import * as utils from '../utils';
import responseHandler from '../responseHandler';
import { CachingProxy } from './proxy/cachingProxy';
import { DBConnector } from './connectors/dbConnector';
import { ZabbixAPIConnector } from './connectors/zabbix_api/zabbixAPIConnector';
import { SQLConnector } from './connectors/sql/sqlConnector';
import { InfluxDBConnector } from './connectors/influxdb/influxdbConnector';
import { ZabbixConnector } from './types';
import { joinTriggersWithEvents, joinTriggersWithProblems } from '../problemsHandler';
import { ProblemDTO, ZBXItem, ZBXItemTag } from '../types';

interface AppsResponse extends Array<any> {
  appFilterEmpty?: boolean;
  hostids?: any[];
}

const REQUESTS_TO_PROXYFY = [
  'getHistory', 'getTrend', 'getGroups', 'getHosts', 'getApps', 'getItems', 'getMacros', 'getItemsByIDs',
  'getEvents', 'getAlerts', 'getHostAlerts', 'getAcknowledges', 'getITService', 'getSLA', 'getVersion', 'getProxies',
  'getEventAlerts', 'getExtendedEventData', 'getProblems', 'getEventsHistory', 'getTriggersByIds', 'getScripts',
  'getGlobalMacros', 'getValueMappings', 'getHostsByIDs', 'getMaintenances'
];

const REQUESTS_TO_CACHE = [
  'getGroups', 'getHosts', 'getApps', 'getItems', 'getMacros', 'getItemsByIDs', 'getITService', 'getProxies',
  'getGlobalMacros', 'getValueMappings', 'getHostsByIDs', 'getMaintenances'
];

const REQUESTS_TO_BIND = [
  'getHistory', 'getTrend', 'getMacros', 'getItemsByIDs', 'getEvents', 'getAlerts', 'getHostAlerts',
  'getAcknowledges', 'getITService', 'acknowledgeEvent', 'getProxies', 'getEventAlerts',
  'getExtendedEventData', 'getScripts', 'executeScript', 'getGlobalMacros', 'getValueMappings', 'getHostsByIDs'
];

export class Zabbix implements ZabbixConnector {
  enableDirectDBConnection: boolean;
  cachingProxy: CachingProxy;
  zabbixAPI: ZabbixAPIConnector;
  getHistoryDB: any;
  dbConnector: any;
  getTrendsDB: any;
  version: string;

  getHistory: (items, timeFrom, timeTill) => Promise<any>;
  getTrend: (items, timeFrom, timeTill) => Promise<any>;
  getItemsByIDs: (itemids) => Promise<any>;
  getEvents: (objectids, timeFrom, timeTo, showEvents, limit?) => Promise<any>;
  getAlerts: (itemids, timeFrom?, timeTo?) => Promise<any>;
  getHostAlerts: (hostids, applicationids, options?) => Promise<any>;
  getAcknowledges: (eventids) => Promise<any>;
  getITService: (serviceids?) => Promise<any>;
  acknowledgeEvent: (eventid, message) => Promise<any>;
  getProxies: () => Promise<any>;
  getEventAlerts: (eventids) => Promise<any>;
  getExtendedEventData: (eventids) => Promise<any>;
  getMacros: (hostids: any[]) => Promise<any>;
  getGlobalMacros: () => Promise<any>;
  getValueMappings: () => Promise<any>;
  getHostsByIDs: (hostids) => Promise<any>;

  constructor(options) {
    const {
      basicAuth,
      withCredentials,
      cacheTTL,
      enableDirectDBConnection,
      dbConnectionDatasourceId,
      dbConnectionDatasourceName,
      dbConnectionRetentionPolicy,
      datasourceId,
    } = options;

    this.enableDirectDBConnection = enableDirectDBConnection;

    // Initialize caching proxy for requests
    const cacheOptions = {
      enabled: true,
      ttl: cacheTTL
    };
    this.cachingProxy = new CachingProxy(cacheOptions);

    this.zabbixAPI = new ZabbixAPIConnector(basicAuth, withCredentials, datasourceId);

    this.proxifyRequests();
    this.cacheRequests();
    this.bindRequests();

    if (enableDirectDBConnection) {
      const connectorOptions: any = { dbConnectionRetentionPolicy };
      this.initDBConnector(dbConnectionDatasourceId, dbConnectionDatasourceName, connectorOptions)
      .then(() => {
        this.getHistoryDB = this.cachingProxy.proxifyWithCache(this.dbConnector.getHistory, 'getHistory', this.dbConnector);
        this.getTrendsDB = this.cachingProxy.proxifyWithCache(this.dbConnector.getTrends, 'getTrends', this.dbConnector);
      });
    }
  }

  initDBConnector(datasourceId, datasourceName, options) {
    return DBConnector.loadDatasource(datasourceId, datasourceName)
    .then(ds => {
      const connectorOptions: any = { datasourceId, datasourceName };
      if (ds.type === 'influxdb') {
        connectorOptions.retentionPolicy = options.dbConnectionRetentionPolicy;
        this.dbConnector = new InfluxDBConnector(connectorOptions);
      } else {
        this.dbConnector = new SQLConnector(connectorOptions);
      }
      return this.dbConnector;
    });
  }

  proxifyRequests() {
    for (const request of REQUESTS_TO_PROXYFY) {
      this.zabbixAPI[request] = this.cachingProxy.proxify(this.zabbixAPI[request], request, this.zabbixAPI);
    }
  }

  cacheRequests() {
    for (const request of REQUESTS_TO_CACHE) {
      this.zabbixAPI[request] = this.cachingProxy.cacheRequest(this.zabbixAPI[request], request, this.zabbixAPI);
    }
  }

  bindRequests() {
    for (const request of REQUESTS_TO_BIND) {
      this[request] = this.zabbixAPI[request].bind(this.zabbixAPI);
    }
  }

  /**
   * Perform test query for Zabbix API and external history DB.
   * @return {object} test result object:
   * ```
   *    {
   *      zabbixVersion,
   *      dbConnectorStatus: {
   *        dsType,
   *        dsName
   *      }
   *    }
   * ```
   */
  testDataSource() {
    let zabbixVersion;
    let dbConnectorStatus;
    return this.getVersion()
    .then(version => {
      zabbixVersion = version;
      return this.getAllGroups();
    })
    .then(() => {
      if (this.enableDirectDBConnection) {
        return this.dbConnector.testDataSource();
      } else {
        return Promise.resolve();
      }
    })
    .catch(error => {
      return Promise.reject(error);
    })
    .then(testResult => {
      if (testResult) {
        dbConnectorStatus = {
          dsType: this.dbConnector.datasourceTypeName,
          dsName: this.dbConnector.datasourceName
        };
      }
      return { zabbixVersion, dbConnectorStatus };
    });
  }

  async getVersion() {
    if (!this.version) {
      if (this.zabbixAPI.version) {
        this.version = this.zabbixAPI.version;
      } else {
        this.version = await this.zabbixAPI.initVersion();
      }
    }
    return this.version;
  }

  supportsApplications() {
    const version = this.version || this.zabbixAPI.version;
    return version ? semver.lt(version, '5.4.0') : true;
  }

  supportSLA() {
    const version = this.version || this.zabbixAPI.version;
    return version ? semver.gte(version, '6.0.0') : true;
  }

  isZabbix54OrHigher() {
    const version = this.version || this.zabbixAPI.version;
    return version ? semver.gte(version, '5.4.0') : false;
  }

  getItemsFromTarget(target, options) {
    const parts = ['group', 'host', 'application', 'itemTag', 'item'];
    const filters = _.map(parts, p => target[p].filter);
    return this.getItems(...filters, options);
  }

  getHostsFromTarget(target) {
    const parts = ['group', 'host', 'application'];
    const filters = _.map(parts, p => target[p].filter);
    return Promise.all([
      this.getHosts(...filters),
      this.getApps(...filters),
    ]).then(results => {
      const hosts = results[0];
      let apps: AppsResponse = results[1];
      if (apps.appFilterEmpty) {
        apps = [];
      }
      return [hosts, apps];
    });
  }

  getAllGroups() {
    return this.zabbixAPI.getGroups();
  }

  getGroups(groupFilter) {
    return this.getAllGroups()
    .then(groups => findByFilter(groups, groupFilter));
  }

  /**
   * Get list of host belonging to given groups.
   */
  getAllHosts(groupFilter) {
    return this.getGroups(groupFilter)
    .then(groups => {
      const groupids = _.map(groups, 'groupid');
      return this.zabbixAPI.getHosts(groupids);
    });
  }

  getHosts(groupFilter?, hostFilter?) {
    return this.getAllHosts(groupFilter)
    .then(hosts => findByFilter(hosts, hostFilter));
  }

  getMaintenances(hostids: string[], groupids?: number[]) {
    return this.zabbixAPI.getMaintenances(hostids, groupids);
  }

  /**
   * Get list of applications belonging to given groups and hosts.
   */
  async getAllApps(groupFilter, hostFilter) {
    await this.getVersion();
    if (!this.supportsApplications()) {
      return [];
    }

    return this.getHosts(groupFilter, hostFilter)
    .then(hosts => {
      const hostids = _.map(hosts, 'hostid');
      return this.zabbixAPI.getApps(hostids);
    });
  }

  async getApps(groupFilter?, hostFilter?, appFilter?): Promise<AppsResponse> {
    await this.getVersion();
    const skipAppFilter = !this.supportsApplications();

    return this.getHosts(groupFilter, hostFilter)
    .then(hosts => {
      const hostids = _.map(hosts, 'hostid');
      if (appFilter && !skipAppFilter) {
        return this.zabbixAPI.getApps(hostids)
        .then(apps => filterByQuery(apps, appFilter));
      } else {
        const appsResponse: AppsResponse = hostids;
        appsResponse.hostids = hostids;
        appsResponse.appFilterEmpty = true;
        return Promise.resolve(appsResponse);
      }
    });
  }

  async getItemTags(groupFilter?, hostFilter?, itemTagFilter?) {
    const items = await this.getAllItems(groupFilter, hostFilter, null, null, {});
    let tags: ZBXItemTag[] = _.flatten(items.map((item: ZBXItem) => {
      if (item.tags) {
        return item.tags;
      } else {
        return [];
      }
    }));
    tags = _.uniqBy(tags, t => t.tag + t.value || '');
    const tagsStr = tags.map(t => ({ name: utils.itemTagToString(t) }));
    return findByFilter(tagsStr, itemTagFilter);
  }

  async getAllItems(groupFilter, hostFilter, appFilter, itemTagFilter, options: any = {}) {
    const apps = await this.getApps(groupFilter, hostFilter, appFilter);
    let items: any[];

    if (this.isZabbix54OrHigher()) {
      items = await this.zabbixAPI.getItems(apps.hostids, undefined, options.itemtype);
      if (itemTagFilter) {
        items = filterItemsByTag(items, itemTagFilter);
      }
    } else {
      if (apps.appFilterEmpty) {
        items = await this.zabbixAPI.getItems(apps.hostids, undefined, options.itemtype);
      } else {
        const appids = _.map(apps, 'applicationid');
        items = await this.zabbixAPI.getItems(undefined, appids, options.itemtype);
      }
    }

    if (!options.showDisabledItems) {
      items = _.filter(items, { 'status': '0' });
    }

    return await this.expandUserMacro(items, false);
  }

  expandUserMacro(items, isTriggerItem) {
    const hostids = getHostIds(items);
    // Don't try to fetch host macros if no hostids are given
    if (hostids && hostids.length > 0) {
      // Fetch also parent template host ids
      return this.zabbixAPI.getHostsByIDs(hostids)
        .then((parentHosts: any) => {
          parentHosts.map((host: any) => {
            if (host.parentTemplates) {
              host.parentTemplates.map((template: any) => {
                if (hostids.indexOf(template.templateid) === -1) {
                  hostids.push(template.templateid);
                }
              });
            }
          });
          return this.getMacros(hostids)
          .then(macros => {
            _.forEach(items, item => {
              if (utils.containsMacro(isTriggerItem ? item.url : item.name)) {
                if (isTriggerItem) {
                  item.url = utils.replaceMacro(item, macros, isTriggerItem, parentHosts);
                } else {
                  item.name = utils.replaceMacro(item, macros);
                }
              }
            });
            return this.getGlobalMacros().then(globalMacros => {
              return this.getExpandedGlobalMacros(globalMacros, items, isTriggerItem);
            });
          });
        });
    } else {
      return this.getGlobalMacros().then(globalMacros => {
        return this.getExpandedGlobalMacros(globalMacros, items, isTriggerItem);
      });
    }
  }

  getExpandedGlobalMacros(globalMacros, items, isTriggerItem) {
    _.forEach(items, item => {
      if (utils.containsMacro(isTriggerItem ? item.url : item.name)) {
        if (isTriggerItem) {
          item.url = utils.replaceMacro(item, globalMacros, isTriggerItem);
        } else {
          item.name = utils.replaceMacro(item, globalMacros);
        }
      }
    })
    return items;
  }

  getItems(groupFilter?, hostFilter?, appFilter?, itemTagFilter?, itemFilter?, options = {}) {
    return this.getAllItems(groupFilter, hostFilter, appFilter, itemTagFilter, options)
    .then(items => filterByQuery(items, itemFilter));
  }

  getItemValues(groupFilter?, hostFilter?, appFilter?, itemFilter?, options: any = {}) {
    return this.getItems(groupFilter, hostFilter, appFilter, null, itemFilter, options).then(items => {
      let timeRange = [moment().subtract(2, 'h').unix(), moment().unix()];
      if (options.range) {
        timeRange = [options.range.from.unix(), options.range.to.unix()];
      }
      const [timeFrom, timeTo] = timeRange;

      return this.zabbixAPI.getHistory(items, timeFrom, timeTo).then(history => {
        if (history) {
          const values = _.uniq(history.map(v => v.value));
          return values.map(value => ({ name: value }));
        } else {
          return [];
        }
      });
    });
  }

  getITServices(itServiceFilter) {
    return this.zabbixAPI.getITService()
    .then(itServices => findByFilter(itServices, itServiceFilter));
  }

  getProblems(groupFilter, hostFilter, appFilter, proxyFilter?, options?): Promise<ProblemDTO[]> {
    const promises = [
      this.getGroups(groupFilter),
      this.getHosts(groupFilter, hostFilter),
      this.getApps(groupFilter, hostFilter, appFilter)
    ];

    return Promise.all(promises)
    .then(results => {
      const [filteredGroups, filteredHosts, filteredApps] = results;
      const query: any = {};

      if (appFilter) {
        query.applicationids = _.flatten(_.map(filteredApps, 'applicationid'));
      }
      if (hostFilter && hostFilter !== '/.*/') {
        query.hostids = _.map(filteredHosts, 'hostid');
      }
      if (groupFilter) {
        query.groupids = _.map(filteredGroups, 'groupid');
      }

      return query;
    })
    .then(query => this.zabbixAPI.getProblems(query.groupids, query.hostids, query.applicationids, options))
    .then(problems => {
      const triggerids = problems?.map(problem => problem.objectid);
      return Promise.all([
        Promise.resolve(problems),
        this.zabbixAPI.getTriggersByIds(triggerids)
      ]);
    })
    .then(([problems, triggers]) => joinTriggersWithProblems(problems, triggers))
    .then(triggers => this.filterTriggersByProxy(triggers, proxyFilter))
    .then(triggers => this.expandUserMacro.bind(this)(triggers, true));
  }

  getProblemsHistory(groupFilter, hostFilter, appFilter, proxyFilter?, options?): Promise<ProblemDTO[]> {
    const { valueFromEvent } = options;

    const promises = [
      this.getGroups(groupFilter),
      this.getHosts(groupFilter, hostFilter),
      this.getApps(groupFilter, hostFilter, appFilter)
    ];

    return Promise.all(promises)
    .then(results => {
      const [filteredGroups, filteredHosts, filteredApps] = results;
      const query: any = {};

      if (appFilter) {
        query.applicationids = _.flatten(_.map(filteredApps, 'applicationid'));
      }
      if (hostFilter) {
        query.hostids = _.map(filteredHosts, 'hostid');
      }
      if (groupFilter) {
        query.groupids = _.map(filteredGroups, 'groupid');
      }

      return query;
    })
    .then(query => this.zabbixAPI.getEventsHistory(query.groupids, query.hostids, query.applicationids, options))
    .then(problems => {
      const triggerids = problems?.map(problem => problem.objectid);
      return Promise.all([Promise.resolve(problems), this.zabbixAPI.getTriggersByIds(triggerids)]);
    })
    .then(([problems, triggers]) => joinTriggersWithEvents(problems, triggers, { valueFromEvent }))
    .then(triggers => this.filterTriggersByProxy(triggers, proxyFilter))
    .then(triggers => this.expandUserMacro.bind(this)(triggers, true));
  }

  filterTriggersByProxy(triggers, proxyFilter) {
    return this.getFilteredProxies(proxyFilter)
    .then(proxies => {
      if (proxyFilter && proxyFilter !== '/.*/' && triggers) {
        const proxy_ids = proxies.map(proxy => proxy.proxyid);
        triggers = triggers.filter(trigger => {
          for (let i = 0; i < trigger.hosts.length; i++) {
            const host = trigger.hosts[i];
            if (proxy_ids.includes(host.proxy_hostid)) {
              return true;
            }
          }
          return false;
        });
      }
      return triggers;
    });
  }

  getFilteredProxies(proxyFilter) {
    return this.zabbixAPI.getProxies()
    .then(proxies => {
      proxies.forEach(proxy => proxy.name = proxy.host);
      return findByFilter(proxies, proxyFilter);
    });
  }

  getHistoryTS(items, timeRange, request) {
    const [timeFrom, timeTo] = timeRange;
    if (this.enableDirectDBConnection) {
      return this.getHistoryDB(items, timeFrom, timeTo, request)
      .then(history => responseHandler.dataResponseToTimeSeries(history, items, request));
    } else {
      return this.zabbixAPI.getHistory(items, timeFrom, timeTo)
      .then(history => responseHandler.handleHistory(history, items));
    }
  }

  getTrends(items, timeRange, request) {
    const [timeFrom, timeTo] = timeRange;
    if (this.enableDirectDBConnection) {
      return this.getTrendsDB(items, timeFrom, timeTo, request)
      .then(history => responseHandler.dataResponseToTimeSeries(history, items, request));
    } else {
      const valueType = request.consolidateBy || request.valueType;
      return this.zabbixAPI.getTrend(items, timeFrom, timeTo)
      .then(history => responseHandler.handleTrends(history, items, valueType))
      .then(responseHandler.sortTimeseries); // Sort trend data, issue #202
    }
  }

  getHistoryText(items, timeRange, target) {
    const [timeFrom, timeTo] = timeRange;
    if (items.length) {
      return this.zabbixAPI.getHistory(items, timeFrom, timeTo)
      .then(history => {
        if (target.resultFormat === 'table') {
          return responseHandler.handleHistoryAsTable(history, items, target);
        } else {
          return responseHandler.handleText(history, items, target);
        }
      });
    } else {
      return Promise.resolve([]);
    }
  }

  async getSLA(itservices, timeRange, target, options) {
    const itServiceIds = _.map(itservices, 'serviceid');
    if (this.supportSLA()) {
      const slaResponse = await this.zabbixAPI.getSLA60(itServiceIds, timeRange, options);
      return _.map(itServiceIds, serviceid => {
        const itservice = _.find(itservices, { 'serviceid': serviceid });
        return responseHandler.handleSLAResponse(itservice, target.slaProperty, slaResponse);
      });
    }
    const slaResponse = await this.zabbixAPI.getSLA(itServiceIds, timeRange, options);
    return _.map(itServiceIds, serviceid => {
      const itservice = _.find(itservices, { 'serviceid': serviceid });
      return responseHandler.handleSLAResponse(itservice, target.slaProperty, slaResponse);
    });
  }
}

///////////////////////////////////////////////////////////////////////////////

/**
 * Find group, host, app or item by given name.
 * @param  list list of groups, apps or other
 * @param  name visible name
 * @return      array with finded element or empty array
 */
function findByName(list, name) {
  const finded = _.find(list, { 'name': name });
  if (finded) {
    return [finded];
  } else {
    return [];
  }
}

/**
 * Different hosts can contains applications and items with same name.
 * For this reason use _.filter, which return all elements instead _.find,
 * which return only first finded.
 * @param  {[type]} list list of elements
 * @param  {[type]} name app name
 * @return {[type]}      array with finded element or empty array
 */
function filterByName(list, name) {
  const finded = _.filter(list, { 'name': name });
  if (finded) {
    return finded;
  } else {
    return [];
  }
}

function filterByRegex(list, regex) {
  const filterPattern = utils.buildRegex(regex);
  return _.filter(list, (zbx_obj) => {
    return filterPattern.test(zbx_obj.name);
  });
}

function findByFilter(list, filter) {
  if (utils.isRegex(filter)) {
    return filterByRegex(list, filter);
  } else {
    return findByName(list, filter);
  }
}

function filterByQuery(list, filter) {
  if (utils.isRegex(filter)) {
    return filterByRegex(list, filter);
  } else {
    return filterByName(list, filter);
  }
}

function getHostIds(items) {
  const hostIds = _.map(items, item => {
    return _.map(item.hosts, 'hostid');
  });
  return _.uniq(_.flatten(hostIds));
}

function filterItemsByTag(items: any[], itemTagFilter: string) {
  if (utils.isRegex(itemTagFilter)) {
    const filterPattern = utils.buildRegex(itemTagFilter);
    return items.filter((item) => {
      if (item.tags) {
        const tags: string[] = item.tags.map(t => utils.itemTagToString(t));
        return tags.some((tag) => {
          return filterPattern.test(tag);
        });
      } else {
        return false;
      }
    });
  } else {
    return items.filter(item => {
      if (item.tags) {
        const tags: string[] = item.tags.map(t => utils.itemTagToString(t));
        return tags.includes(itemTagFilter);
      } else {
        return false;
      }
    });
  }
}
