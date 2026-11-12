import _ from 'lodash';
import { dateMath } from '@grafana/data';
import { DataQuery } from '@grafana/schema';
import * as utils from '../datasource/utils';
import { ProblemDTO } from 'datasource/types';

export function isNewProblem(problem: ProblemDTO, highlightNewerThan: string): boolean {
  try {
    const highlightIntervalMs = utils.parseInterval(highlightNewerThan);
    const durationSec = Date.now() - problem.timestamp * 1000;
    return durationSec < highlightIntervalMs;
  } catch (e) {
    return false;
  }
}

const DEFAULT_TIME_FORMAT = 'DD MMM YYYY HH:mm:ss';

export function formatLastChange(lastchangeUnix: number, customFormat?: string) {
  const date = new Date(lastchangeUnix * 1000);
  const timestamp = dateMath.parse(date);
  const format = customFormat || DEFAULT_TIME_FORMAT;
  const lastchange = timestamp!.format(format);
  return lastchange;
}

export const getNextRefIdChar = (queries: DataQuery[]): string => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nextLetter = _.find(letters, (refId) => {
    return _.every(queries, (other) => {
      return other.refId !== refId;
    });
  });
  return nextLetter || 'A';
};

const HOST_MACRO_FIELDS = ['url', 'name', 'description', 'comments'] as const;

// Zabbix leaves {HOST.HOST} and {HOST.NAME} unexpanded in some trigger fields, so expand them from the first host.
export function expandHostMacros(problem: ProblemDTO): ProblemDTO {
  const host = problem.hosts?.[0];
  if (!host) {
    return problem;
  }
  const expanded = { ...problem };
  for (const field of HOST_MACRO_FIELDS) {
    const value = expanded[field];
    if (value) {
      expanded[field] = value.replace(/\{HOST\.HOST\}/g, () => host.host).replace(/\{HOST\.NAME\}/g, () => host.name);
    }
  }
  return expanded;
}

export function getSeverityOptions(texts: { [index: string]: string }) {
  return [
    { value: 0, label: texts.unknown },
    { value: 1, label: texts.info },
    { value: 2, label: texts.minor },
    { value: 3, label: texts.average },
    { value: 4, label: texts.major },
    { value: 5, label: texts.critical },
  ];
}
