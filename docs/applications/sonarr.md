---
id: sonarr
title: Sonarr
sidebar_label: Sonarr
---

Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.

## Initial Setup

First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article [here](../getting-started/how-do-i-connect.md).

Installing Sonarr is easy. Simply issue the following command:

```plaintext main
box install sonarr
```

This command will configure sonarr for your user.

## How to Access

Once setup, sonarr will be available at the link `https://<hostname.io>/sonarr`


## Service Management

Like all box configured applications, you can manage Sonarr via SSH with box with start, stop, restart, enable and disable commands.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```plaintext
box start sonarr
```
<!--Stop-->
```plaintext
box stop sonarr
```
<!--Restart-->
```plaintext
box restart sonarr
```
<!--Enable-->
```plaintext
box enable sonarr
```
<!--Disable-->
```plaintext
box disable sonarr
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Out of the box, Sonarr comes with very little configuration. Following are some basic tasks to help get your client up and running:

### Add a new show (and your first root directory)

1. At the top, click series.
2. Click the button `+ Add Series`
3. Type the name of the show you want to add
4. Under `Path`, choose `Add a new path`. Enter the path for the folder you wish to add your Sonarr shows to and click the green checkmark to add the directory.
  - e.g. `"/home/<username>/media/TV Shows"`
5. Change the other settings to your own needs
6. Click the green + to add the show.

### Connect download clients
To add a download client, go to `Settings > Download Client`. Make sure `Advanced Settings` are shown and click `Add Client`.

<!--DOCUSAURUS_CODE_TABS-->
<!--rTorrent-->
```plaintext
Name: rTorrent
rTorrent host: 127.0.0.1
Port: 443
URL Path: /rutorrent/plugins/httprpc/action.php
Use SSL: ON
Username: <your username>
Password: <your password>
Add label to torrent: TV (or anything else you desire)
Optional - Downloaded files location: <custom directory>
NOTE: If you have errors adding rTorrent to Sonarr, please try going to Settings > General and disable certificate validation for localhost addresses
```

<!--Deluge (via Web)-->
```plaintext
Name: Deluge
Host: 127.0.0.1
Post: <deluge web port>
Deluge Password: <your password>
Add label to torrent: TV (or anything else you desire)
* label plugin must be enabled in Deluge if you add a label
SSL: OFF
```

<!--nzbGet-->
```plaintext
NZBget host: 127.0.0.1
port: 443
URL Base: nzbget
Connect using HTTPS: ON
nzbget username: <your username>
nzbget Password: <your password>
Add label to torrent: Series (or anything else you desire)
* label must exist under "Categories" in nzbGet
```
<!--END_DOCUSAURUS_CODE_TABS-->

Since Sonarr v3, you will now need to disable certificate validation for localhost domains as well if you are connecting to port 443. You can find this setting in **Settings > General**.

### Add an indexer with Jackett
Sonarr only supports a few trackers out of the box, but the indexers can be expanded by using the application [Jackett](jackett.md). To add an indexer with Jackett, use the following steps.

:::note
By default, when receivng the torznab feed from Jackett, it will need to be modified to be connected with the application. The default link looks like:

```plaintext
https://app02.seedbox.io/jackett/api/v2.0/indexers/yourtracker/results/torznab/
```

We need to edit this link to **remove https** and **add the port number**. Thus, if your port number was `12345`, your editted URL would look like this:

```plaintext
http://app02.seedbox.io:12345/jackett/api/v2.0/indexers/yourtracker/results/torznab/
```
:::

1. Go to `Settings > Indexers` and click `+` to add a new indexer.
2. Under `Torrent` choose `Torznab`
3. Use the settings:
```plaintext main
Name: <tracker name>
URL: <click copy torznab feed in jackett and modify as per above>
API: <copy and paste from jackett UI>
```
4. Click `Test`. If all is good, click `Save`.

### Other tasks

You may wish to further alter your setup by setting quality profiles or setting up post-processing so that media is automatically transferred to your Sonarr library when your torrents are completed. If you need further help, you can refer to the [Sonarr Wiki](https://github.com/Sonarr/Sonarr/wiki).