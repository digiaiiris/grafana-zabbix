# Zabbix plugin for Grafana
This is Digia Iiris version of grafana-zabbix plugin. The plugin contains Zabbix-datasource and Zabbix Problems Panel. There are Iiris specific changes to both of these.

## Creating a New Release of grafana-zabbix Plugin
Start by creating a new branch for a new release:
```
git checkout -b iiris-release-4.2.8-2-branch iiris-release-4.2.8-1-branch
git push -u origin iiris-release-4.2.8-2-branch
```
Create a new feature branch for your task, e.g.
```
git checkout -b feature/IISCRUM-2796 iiris-release-4.2.8-2-branch
git push -u origin feature/IISCRUM-2796
```
Make your changes and create a pull request in GitHub and when that is merged you can create a new release.

To build grafana-zabbix panel, go to it's folder and run:
`make dist`

Compiled version is in dist-folder and that is included in grafana-zabbix repo because Grafana's Docker build will fetch the compiled version from there.
Before releasing you need to sign the plugin with instructions below and copy to MANIFEST.txt to Iiris-repos Grafana-folder where Dockerfile is located.
Create a new tag by leaving the 'branch' postfix away.
`iiris-release-4.2.8-2`

## What is MANIFEST.txt
MANIFEST.txt is the signature file iiris-grafana-zabbix panel or any Grafana plugin. Manifest is created to dist-folder during sign process.
If iiris-grafana-zabbix panel is updated, you need to re-create the MANIFEST.txt and copy the new file to Grafana-folder where Docker file is located.

## Signing grafana-zabbix plugin
Go to the iiris-grafana-zabbix folder and run:
```
export GRAFANA_ACCESS_POLICY_TOKEN=<GRAFANA_ACCESS_POLICY_TOKEN>
npx @grafana/toolkit plugin:sign --rootUrls <URL1> <URL2> <URL3>
```
The newly created MANIFEST.txt can be found from dist-folder. Copy it to this same folder with Dockerfile at the same as you change the new GRAFANA_ZABBIX_BRANCH address in Dockerfile. Create a new commit to Iiris-repo Develop-branch with description, e.g.: 'grafana-zabbix updated to iiris-release-4.2.8-2'.