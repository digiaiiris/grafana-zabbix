import { AppPlugin } from '@grafana/data';
import { loadPluginCss } from '@grafana/runtime';

loadPluginCss({
  dark: 'plugins/iiris-zabbix-triggers-panel/styles/dark.css',
  light: 'plugins/iiris-zabbix-triggers-panel/styles/light.css',
});

export const plugin = new AppPlugin<{}>();
