import { ProblemDTO } from '../datasource/types';
import { expandHostMacros } from './utils';

describe('expandHostMacros', () => {
  const hosts = [
    { hostid: '1', host: 'srv-01', name: 'Server 1' },
    { hostid: '2', host: 'srv-02', name: 'Server 2' },
  ];

  it('expands {HOST.HOST} and {HOST.NAME} from the first host in all supported fields', () => {
    const problem = {
      hosts,
      url: 'https://example.com/d/abc?var-host={HOST.HOST}',
      name: '{HOST.NAME} is down',
      description: '{HOST.NAME} is down',
      comments: 'Check {HOST.HOST} ({HOST.NAME}), then {HOST.HOST} again',
    } as ProblemDTO;

    expect(expandHostMacros(problem)).toMatchObject({
      url: 'https://example.com/d/abc?var-host=srv-01',
      name: 'Server 1 is down',
      description: 'Server 1 is down',
      comments: 'Check srv-01 (Server 1), then srv-01 again',
    });
    expect(problem.name).toBe('{HOST.NAME} is down');
  });

  it('inserts host values literally', () => {
    const problem = { hosts: [{ hostid: '1', host: 'a$&b', name: 'n' }], name: '{HOST.HOST}' } as ProblemDTO;
    expect(expandHostMacros(problem).name).toBe('a$&b');
  });

  it('leaves the problem unchanged when it has no hosts', () => {
    const problem = { hosts: [], name: '{HOST.NAME} is down' } as unknown as ProblemDTO;
    expect(expandHostMacros(problem).name).toBe('{HOST.NAME} is down');
  });
});
