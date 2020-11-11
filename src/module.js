import './sass/grafana-zabbix.dark.scss';
import './sass/grafana-zabbix.light.scss';

import {ZabbixAppConfigCtrl} from './app_config_ctrl/config';
import {loadPluginCss} from 'grafana/app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/iiris-zabbix-triggers-panel/css/grafana-zabbix.dark.css',
  light: 'plugins/iiris-zabbix-triggers-panel/css/grafana-zabbix.light.css'
});

export {
  ZabbixAppConfigCtrl as ConfigCtrl
};
