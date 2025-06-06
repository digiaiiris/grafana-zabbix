import React, { PureComponent, CSSProperties } from 'react';
import classNames from 'classnames';
import { ProblemsPanelOptions, GFTimeRange } from '../../types';
import { AckProblemData } from '../AckModal';
import AlertCard from './AlertCard';
import { ProblemDTO, ZBXTag } from '../../../datasource-zabbix/types';
import { DataSourceRef } from '@grafana/data';
import { getSeverityOptions } from '../../triggers_panel_ctrl';
import _ from 'lodash';

const SORT_BY_PRIORITY = 'priority';
const SORT_BY_TIMESTAMP = 'lastchange';


export interface AlertListProps {
  problems: ProblemDTO[];
  panelOptions: ProblemsPanelOptions;
  loading?: boolean;
  timeRange?: GFTimeRange;
  pageSize?: number;
  fontSize?: number;
  onProblemAck?: (problem: ProblemDTO, data: AckProblemData) => void;
  onTagClick?: (tag: ZBXTag, datasource: string, ctrlKey?: boolean, shiftKey?: boolean) => void;
  texts: any;
}

interface AlertListState {
  page: number;
  currentProblems: ProblemDTO[];
  filteredProblems: ProblemDTO[];
  textFilter: string;
  priorityFilter: number;
  categoryFilter: string;
  hideAlertsInMaintenance: boolean;
  hideAlertsWithTestTag: boolean;
  sortOption: string;
  amountOfAlertsInMaintenance: number;
  amountOfAlertsWithTestTag: number;
}

export default class AlertList extends PureComponent<AlertListProps, AlertListState> {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      currentProblems: [],
      filteredProblems: [],
      textFilter: '',
      priorityFilter: -1,
      categoryFilter: 'all',
      hideAlertsInMaintenance: props.panelOptions.hideAlertsInMaintenanceByDefault,
      hideAlertsWithTestTag: props.panelOptions.hideAlertsWithTestTagByDefault,
      sortOption: props.panelOptions.sortProblems || SORT_BY_TIMESTAMP,
      amountOfAlertsInMaintenance: 0,
      amountOfAlertsWithTestTag: 0,
    };
  }

  componentDidMount(): void {
    const { textFilter, priorityFilter, categoryFilter, hideAlertsInMaintenance, hideAlertsWithTestTag, sortOption } = this.state;
    if (this.props.problems) {
      const filteredProblems = this.getFilteredProblems(textFilter, priorityFilter, categoryFilter, hideAlertsInMaintenance, hideAlertsWithTestTag, sortOption);
      const amountOfAlertsInMaintenance = this.getAmountOfAlertsInMaintenance(this.props.problems);
      const amountOfAlertsWithTestTag = this.getAmountOfAlertsWithTestTag(this.props.problems);
      this.setState({ filteredProblems, amountOfAlertsInMaintenance, amountOfAlertsWithTestTag });
    }
  }

  componentDidUpdate(prevProps: Readonly<AlertListProps>, prevState: Readonly<AlertListState>, snapshot?: any): void {
    const { textFilter, priorityFilter, categoryFilter, hideAlertsInMaintenance, hideAlertsWithTestTag, sortOption } = this.state;
    if (!_.isEqual(this.props.problems, prevProps.problems) && this.props.problems) {
      const filteredProblems = this.getFilteredProblems(textFilter, priorityFilter, categoryFilter, hideAlertsInMaintenance, hideAlertsWithTestTag, sortOption);
      const amountOfAlertsInMaintenance = this.getAmountOfAlertsInMaintenance(this.props.problems);
      const amountOfAlertsWithTestTag = this.getAmountOfAlertsWithTestTag(this.props.problems);
      this.setState({ filteredProblems, amountOfAlertsInMaintenance, amountOfAlertsWithTestTag });
    }
  }

  getCurrentProblems(page: number, sortOption: string) {
    const { pageSize } = this.props;
    const { filteredProblems } = this.state;
    const start = pageSize * page;
    const end = Math.min(pageSize * (page + 1), filteredProblems.length);
    return filteredProblems.slice(start, end);
  }

  handlePageChange = (newPage: number) => {
    const items = this.getCurrentProblems(newPage, this.state.sortOption);
    this.setState({
      page: newPage,
      currentProblems: items,
    });
  }


  handleTagClick = (tag: ZBXTag, datasource: string, ctrlKey?: boolean, shiftKey?: boolean) => {
    if (this.props.onTagClick) {
      this.props.onTagClick(tag, datasource, ctrlKey, shiftKey);
    }
  }

  handleProblemAck = (problem: ProblemDTO, data: AckProblemData) => {
    return this.props.onProblemAck(problem, data);
  }

  getFilteredProblems = (textFilter: string, priorityFilter: number, categoryFilter: string, maintenanceFilter: boolean, testTagFilter: boolean, sortOption: string) => {
    const textFilterLowerCase = textFilter.toLowerCase();
    let filteredProblems = this.props.problems.filter((problem: ProblemDTO) => {
      return (
        (problem.comments.toLowerCase().indexOf(textFilterLowerCase) > -1 ||
        problem.description.toLowerCase().indexOf(textFilterLowerCase) > -1) &&
        (priorityFilter === -1 || problem.severity === priorityFilter.toString()) &&
        (categoryFilter === 'all' || problem.opdata === categoryFilter) &&
        (!maintenanceFilter || problem.hosts.length === 0 || !problem.hosts.some((h) => h.maintenance_status === '1')) &&
        (!testTagFilter || !problem.tags || !problem.tags.some((e) => e.tag === 'test'))
      );
    });
    if (sortOption === SORT_BY_PRIORITY) {
      filteredProblems = _.orderBy(filteredProblems, ['severity'], ['desc']);
    } else {
      filteredProblems = _.orderBy(filteredProblems, ['timestamp'], ['desc']);
    }
    return filteredProblems;
  }

  filterByText = (event: any) => {
    const textFilter = event.target.value;
    const filteredProblems = this.getFilteredProblems(textFilter, this.state.priorityFilter, this.state.categoryFilter,
      this.state.hideAlertsInMaintenance, this.state.hideAlertsWithTestTag, this.state.sortOption);
    this.setState({ textFilter, filteredProblems, page: 0 });
  }

  filterByPriority = (event: any) => {
    const priorityFilter = parseInt(event.target.value, 10);
    const filteredProblems = this.getFilteredProblems(this.state.textFilter, priorityFilter, this.state.categoryFilter,
      this.state.hideAlertsInMaintenance, this.state.hideAlertsWithTestTag, this.state.sortOption);
    this.setState({ priorityFilter, filteredProblems, page: 0 });
  }

  filterByCategory = (event: any) => {
    const categoryFilter = event.target.value;
    const filteredProblems = this.getFilteredProblems(this.state.textFilter, this.state.priorityFilter, categoryFilter,
      this.state.hideAlertsInMaintenance, this.state.hideAlertsWithTestTag, this.state.sortOption);
    this.setState({ categoryFilter, filteredProblems, page: 0 });
  }

  filterByMaintenance = () => {
    const hideAlertsInMaintenance = !this.state.hideAlertsInMaintenance;
    const filteredProblems = this.getFilteredProblems(this.state.textFilter, this.state.priorityFilter,
      this.state.categoryFilter, hideAlertsInMaintenance, this.state.hideAlertsWithTestTag, this.state.sortOption);
    this.setState({ hideAlertsInMaintenance, filteredProblems, page: 0 });
  }

  filterByTestTag = () => {
    const hideAlertsWithTestTag = !this.state.hideAlertsWithTestTag;
    const filteredProblems = this.getFilteredProblems(this.state.textFilter, this.state.priorityFilter,
      this.state.categoryFilter, this.state.hideAlertsInMaintenance, hideAlertsWithTestTag, this.state.sortOption);
    this.setState({ hideAlertsWithTestTag, filteredProblems, page: 0 });
  }

  onChangeSortOption = (event: any) => {
    const sortOption = event.target.value;
    const filteredProblems = this.getFilteredProblems(this.state.textFilter, this.state.priorityFilter,
      this.state.categoryFilter, this.state.hideAlertsInMaintenance, this.state.hideAlertsWithTestTag, sortOption);
    this.setState({ sortOption, filteredProblems, page: 0 });
  }

  getAmountOfAlertsInMaintenance = (problems: any[]) => {
    let amount = 0;
    problems.forEach((problem: any) => {
      if (problem.hosts.length > 0 && problem.hosts[0].maintenance_status === '1') {
        amount++;
      }
    });
    return amount;
  }

  getAmountOfAlertsWithTestTag = (problems: any[]) => {
    let amount = 0;
    problems.forEach((problem: any) => {
      if (problem.tags) {
        for (let tag of problem.tags) {
          if (tag.tag === 'test') {
            amount++;
            break;
          }
        };
      }
    });
  return amount;
  }

  render() {
    const { problems, panelOptions, texts } = this.props;
    const { filteredProblems, hideAlertsInMaintenance, hideAlertsWithTestTag, amountOfAlertsInMaintenance, amountOfAlertsWithTestTag } = this.state;
    const currentProblems = this.getCurrentProblems(this.state.page, this.state.sortOption);
    let fontSize = parseInt(panelOptions.fontSize.slice(0, panelOptions.fontSize.length - 1), 10);
    fontSize = fontSize && fontSize !== 100 ? fontSize : null;
    const alertListClass = classNames('alert-rule-list', { [`font-size--${fontSize}`]: fontSize });
    const severityOptions = getSeverityOptions(texts);
    severityOptions.unshift({ value: -1, label: texts.selectPriority });
    const categoryOptions = [{ value: 'all', label: texts.selectCategory }];
    problems.forEach((problem: ProblemDTO) => {
      if (categoryOptions.findIndex((category: any) => category.value === problem.opdata) === -1 && problem.opdata) {
        categoryOptions.push({ value: problem.opdata, label: problem.opdata });
      }
    });
    const sortOptions = [
      { value: SORT_BY_PRIORITY, label: `${texts.sortBy}: ${texts.priority}` },
      { value: SORT_BY_TIMESTAMP, label: `${texts.sortBy}: ${texts.startTime}` }
    ];

    return (
      <div className="triggers-panel-container" key="alertListContainer">
        {!panelOptions.hideAlertFilters ? <div className="triggers-panel-filters">
          <input type="text" onChange={(event) => this.filterByText(event)} placeholder={texts.search} />
          <select onChange={(event) => this.onChangeSortOption(event)} defaultValue={this.state.sortOption}>
            {sortOptions.map((option: any, index: number) => <option key={index} value={option.value}>{option.label}</option>)}
          </select>
          <select onChange={(event) => this.filterByPriority(event)}>
            {severityOptions.map((option: any, index: number) => <option key={index} value={option.value}>{option.label}</option>)}
          </select>
          <select onChange={(event) => this.filterByCategory(event)}>
            {categoryOptions.map((option: any, index: number) => <option key={index} value={option.value}>{option.label}</option>)}
          </select>
          <div className={'checkbox-filter ' + (amountOfAlertsInMaintenance === 0 ? 'disabled' : '')}>
            <input
              type="checkbox"
              id="showMaintenance"
              defaultChecked={hideAlertsInMaintenance}
              onChange={() => this.filterByMaintenance()}
              disabled={amountOfAlertsInMaintenance === 0}
            />
            <label htmlFor="showMaintenance">
              {`${texts.hideAlertsInMaintenance} ${amountOfAlertsInMaintenance}${texts.pieces}`}
            </label>
          </div>
          <div className={'checkbox-filter ' + (amountOfAlertsWithTestTag === 0 ? 'disabled' : '')}>
            <input
              type="checkbox"
              id="hideTestTags"
              defaultChecked={hideAlertsWithTestTag}
              onChange={() => this.filterByTestTag()}
              disabled={amountOfAlertsWithTestTag === 0}
            />
            <label htmlFor="hideTestTags">
              {`${texts.hideAlertsWithTestTag} ${amountOfAlertsWithTestTag}${texts.pieces}`}
            </label>
          </div>
        </div> : null }
        <section className="card-section card-list-layout-list">
          <ol className={alertListClass}>
            {currentProblems.map((problem, index) =>
              <AlertCard
                key={`${problem.triggerid}-${problem.eventid}-${(problem.datasource as DataSourceRef)?.uid || problem.datasource}-${index}`}
                problem={problem}
                panelOptions={panelOptions}
                onTagClick={this.handleTagClick}
                onProblemAck={this.handleProblemAck}
                texts={texts}
                idx={index}
              />
            )}
          </ol>
        </section>
        {(currentProblems.length === 0
          ? <div className="no-data-container">{texts.noActiveAlerts}</div>
          : null)
        }
        <div className="triggers-panel-footer" key="alertListFooter">
          <PaginationControl
            itemsLength={filteredProblems.length}
            pageSize={this.props.pageSize}
            pageIndex={this.state.page}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

interface PaginationControlProps {
  itemsLength: number;
  pageIndex: number;
  pageSize: number;
  onPageChange: (index: number) => void;
}

class PaginationControl extends PureComponent<PaginationControlProps> {

  handlePageChange = (index: number) => () => {
    this.props.onPageChange(index);
  }

  render() {
    const { itemsLength, pageIndex, pageSize } = this.props;
    const pageCount = Math.ceil(itemsLength / pageSize);
    if (pageCount === 1) {
      return <ul></ul>;
    }

    const startPage = Math.max(pageIndex - 3, 0);
    const endPage = Math.min(pageCount, startPage + 9);


    const pageLinks = [];
    for (let i = startPage; i < endPage; i++) {
      const pageLinkClass = classNames('triggers-panel-page-link', 'pointer', { 'active': i === pageIndex });
      const value = i + 1;
      const pageLinkElem = (
        <li key={value.toString()}>
          <a className={pageLinkClass} onClick={this.handlePageChange(i)}>{value}</a>
        </li>
      );
      pageLinks.push(pageLinkElem);
    }

    return (
      <ul>
        {pageLinks}
      </ul>
    );
  }
}
