---
id: bazarr
title: Bazarr
sidebar_label: Bazarr
---

Bazarr is a companion application to Sonarr and Radarr. It manages and downloads subtitles based on your requirements. You define your preferences by TV show or movie and Bazarr takes care of everything for you.

## Initial Setup

First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article [here](../getting-started/how-do-i-connect.md).

Installing Bazarr is easy. Simply issue the following command:

```plaintext main
box install bazarr
```

This command will configure bazarr for your user.

## How to Access

Once setup, bazarr will be available at the link `https://<hostname.io>/bazarr`


## Service Management

Like all box configured applications, you can manage Bazarr via SSH with box with start, stop, restart, enable and disable commands.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```plaintext
box start bazarr
```
<!--Stop-->
```plaintext
box stop bazarr
```
<!--Restart-->
```plaintext
box restart bazarr
```
<!--Enable-->
```plaintext
box enable bazarr
```
<!--Disable-->
```plaintext
box disable bazarr
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

You'll need to do a bit of configuration to setup Bazarr with your subtitle providers; however, if you installed Sonarr and/or Radarr prior to installing Bazarr, we've done our best to streamline the configuration process by pre-configuring the connections to these apps for you.

### First run

If you've already got Sonarr or Radarr installed, you'll skip the setup wizard. Nifty!

You'll still need to setup your subtitles provider. Go to `Settings > Subtitles`. Select a provider, enter your credentials. Scroll down the page to `Subtitle Languages` and add your preferred languages. Click Save. Bazarr should now be ready to go!


If you haven't installed Sonarr or Radarr yet, you'll be greeted by a setup wizard. You shouldn't need to edit any details on the `General` page; however, if the `URL Base` field is empty, make sure you enter: `/bazarr/` (note the leading and trailing slashes). Click `Next`.

On the `Subtitles` page, choose a provider and set at least one language. You won't be able to proceed with the wizard until you've set these basics.

### Connect to *darr apps
If Sonarr or Radarr weren't setup when you installed, you can still manually configure the connection to these apps. To add a media client, go to `Settings > Sonarr` or `Settings > Radarr`.

<!--DOCUSAURUS_CODE_TABS-->
<!--Sonarr-->
```plaintext
IP: <subnet IP>
Port: <sonarr port>
Base URL: /sonarr
API Key: <sonarr API>
```

<!--Radarr-->
```plaintext
IP: <subnet IP>
Port: <radarr port>
Base URL: /radarr
API Key: <radarr API>
```
<!--END_DOCUSAURUS_CODE_TABS-->

:::tip Tip
Forgot your subnet, API key or port? No worries, here are oneliners you can submit from SSH:

Subnet:
```bash
cat ~/.install/subnet.lock
```

Sonarr:
```bash
cat ~/.config/NzbDrone/config.xml | grep -e \<Api -e \<Port
```
Radarr:
```bash
cat ~/.config/Radarr/config.xml | grep -e \<Api -e \<Port
```
:::

### More info

If you need further help, please refer to the [Bazarr Wiki](https://github.com/morpheus65535/bazarr/wiki).