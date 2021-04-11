---
id: plex-tunnel
title: plex-tunnel
sidebar_label: plex-tunnel
---

plex-tunnel is a simple configuration to help reroute your plex traffic through a VPS of your choosing, to help improve routing on your Plex streams.

## Initial Setup
:::caution
In order to setup the Plex tunnel, you need to setup your own external VPS. **This is not provided by us. It must be provided by you.** This tunnel is just an option to allow you to setup **your own** route to the server, rather than relying on the peering of the server to your ISP.
:::

Once you have a VPS you like, you need to connect to your slot via SSH to run the setup. If you need help connecting to the server, please read the help article [here](../getting-started/how-do-i-connect.md).

Installing the plex tunnel is easy. Simply issue the following command:

```plaintext main
box install plex-tunnel
```
You will need to following information:

- The IP of your VPS
- The SSH port to connect to your VPS (default `22`)
- The username you wish to create a connection with
- Whether or not the user has root/sudo access

:::note
If you don't supply a root or sudo user, you'll have to change the configuration of your SSH daemon on your tunnel VPS manually.

1. Add the line: `GatewayPorts yes` to `/etc/ssh/sshd_config`
2. Restart your ssh daemon: `sudo systemctl restart sshd`
:::


## How to Access

Once the tunnel has been created, you'll no longer be able to access Plex from the original hostname of your Seedbox.io slot. You'll only be able to access it from the plex.tv dashboard or directly from the VPS (e.g. `https://<VPSIP>:32400`)

## Service Management

Like all box configured applications, you can the tunnel via SSH with box with start, stop, restart, enable and disable commands.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```plaintext
box start plex-tunnel
```
<!--Stop-->
```plaintext
box stop plex-tunnel
```
<!--Restart-->
```plaintext
box restart plex-tunnel
```
<!--Enable-->
```plaintext
box enable plex-tunnel
```
<!--Disable-->
```plaintext
box disable plex-tunnel
```
<!--END_DOCUSAURUS_CODE_TABS-->