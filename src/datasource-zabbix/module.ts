import { DataSourcePlugin } from '@grafana/data';
import { loadPluginCss } from '@grafana/runtime';
import { ZabbixDatasource } from './datasource';
import { ZabbixQueryController } from './query.controller';
import { ZabbixVariableQueryEditor } from './components/VariableQueryEditor';
import { ConfigEditor } from './components/ConfigEditor';
import './add-metric-function.directive';
import './metric-function-editor.directive';

class ZabbixAnnotationsQueryController {
  static templateUrl = 'datasource-zabbix/partials/annotations.editor.html';
}

ZabbixQueryController.templateUrl = 'datasource-zabbix/partials/query.editor.html';

loadPluginCss({
  dark: 'plugins/iiris-zabbix-triggers-panel/css/grafana-zabbix.dark.css',
  light: 'plugins/iiris-zabbix-triggers-panel/css/grafana-zabbix.light.css'
});

export const plugin = new DataSourcePlugin(ZabbixDatasource)
  .setConfigEditor(ConfigEditor)
  .setQueryCtrl(ZabbixQueryController)
  .setAnnotationQueryCtrl(ZabbixAnnotationsQueryController)
  .setVariableQueryEditor(ZabbixVariableQueryEditor);
