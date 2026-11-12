# Zabbix plugin for Grafana

## Digia Iiris version

This is the Digia Iiris version of the grafana-zabbix plugin. It contains the Zabbix data source
(`iiris-zabbix-datasource`) and the Zabbix Problems panel (`iiris-zabbix-triggers-panel`), both with
Iiris specific changes, such as the active incidents list layout, Finnish and English texts based on
the `iiris_language` setting, and Iiris defaults for new Problems panels.

### Building a release

Run the release build from the repository root:

```bash
./iiris-build --release
```

The script needs `docker` and an authenticated `gcloud` (`gcloud auth login --update-adc`). It
reads the plugin signing token and allowed root URLs from the GCP secrets
`ci-grafana-access-policy-token` and `ci-grafana-plugin-rooturls` in project `digia-iiris-dev`,
then builds, signs and packages the plugin inside Docker (`Dockerfile.iiris-build`) so the backend
binary matches Grafana's runtime.

The result is `iiris-zabbix-plugin.tar.gz`. Upload it to the GitHub release; the consuming
repository downloads the archive by this exact name. Use `--tar <file>` instead of `--release` to write the
archive under another name for testing, or run the script without options to only build the image.

### Local development

Select Node.js with nvm (`nvm use`, version from `.nvmrc`), then use the Makefile targets, for
example `make install`, `make dist` and `make test`.

---

[![Version](https://badge.fury.io/gh/grafana%2Fgrafana-zabbix.svg)](https://github.com/grafana/grafana-zabbix/releases)
[![Change Log](https://img.shields.io/badge/change-log-blue.svg?style=flat)](https://github.com/grafana/grafana-zabbix/blob/main/CHANGELOG.md)
[![Docs](https://img.shields.io/badge/docs-latest-red.svg?style=flat)](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/)

![Dashboard](https://user-images.githubusercontent.com/4932851/53799185-e1cdc700-3f4a-11e9-9cb4-8330f501b32e.png)

## Features

- Select multiple metrics [by using Regex](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/guides/#multiple-items-on-one-graph)
- Create interactive and reusable dashboards with [template variables](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/guides/templating/)
- Show events on graphs with [Annotations](http://docs.grafana.org/reference/annotations/)
- Display active problems with Triggers panel
- Transform and shape your data with [metric processing functions](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/reference/functions/) (Avg, Median, Min, Max, Multiply, Summarize, Time shift, Alias)
- Find problems faster with [Alerting](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/reference/alerting/) feature
- Mix metrics from multiple data sources in the same dashboard or even graph
- Discover and share [dashboards](https://grafana.com/dashboards) in the official library

See all features overview and dashboards examples at Grafana-Zabbix [Live demo](http://play.grafana-zabbix.org) site.
Visit [plugins page](https://grafana.com/plugins) at [grafana.com](http://grafana.com) and check out available Grafana data sources, panels and [dashboards](https://grafana.com/dashboards?dataSource=alexanderzobnin-zabbix-datasource).

## Installation

Install by using `grafana-cli`

```sh
grafana-cli plugins install alexanderzobnin-zabbix-app
```

Or see more installation options in [docs](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/installation/).

## Getting started

First, [configure](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/configuration/) Zabbix data source. Then you can create your first dashboard with step-by-step [Getting started guide](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/guides/).

## Documentation

- [About](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/)
- [Installation](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/installation)
- [Getting Started](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/guides)
- [Templating](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/guides/templating)
- [Alerting](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/reference/alerting/)
- [Metric processing functions](https://grafana.com/docs/plugins/alexanderzobnin-zabbix-app/latest/reference/functions/)

## Community Resources, Feedback, and Support

- Found a bug? Want a new feature? Feel free to open an [issue](https://github.com/grafana/grafana-zabbix/issues/new).
- Have a question? You also can open issue, but for questions, it would be better to use [Grafana Community](https://community.grafana.com/) portal.
