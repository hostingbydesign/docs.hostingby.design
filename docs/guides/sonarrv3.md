---
id: sonarrv3
title: Install Sonarr V3
sidebar_label: Install Sonarr V3
---

Sonarr v3 as a package has been a hotly requested feature for inclusion with Seedbox.io. However, until Sonarr v3 reaches stable, it will not be an officially supported package. However, you're still able to run Sonarr v3 (without support). The following commands should help you get Sonarr v3 up and running.

:::warning Warning!
This guide is no longer required as Sonarr v3 support has been added to Seedbox.io!

This guide is intended to be used on the hosted services at Seedbox.io.net. This guide may work for you otherwise, but it is not intended for you.
:::

## Install Sonarr

To prepare your environment for use with V3, make sure the Sonarr (v2) package is already installed. If it is already installed, you may skip this stetp

```bash
box install sonarr
```

## Stop and Disable Sonarr

You must stop Sonarr v2 to release the port to bind Sonarr v3 to. We need to disable Sonarr v2 from automatically starting in case of reboot, otherwise there will likely be a port conflict which will cause your new service to fail.

```bash
box stop sonarr
box disable sonarr
```

## Install Sonarr V3 and copy the configuration

First we need to grab the latest portable tarball of Sonarr v3 from the phantom-develop repository.

Go to the latest version and find the link with `.linux.tar.gz` in the filename. Likely the top file. Right-click on the link and click "Copy Link Location"

Back on the server, use wget to download the file. Find the [link yourself](http://download.sonarr.tv/v3/phantom-develop) or:

```bash
latest=$(curl -s http://download.sonarr.tv/v3/phantom-develop/ | tac | grep -m1 a | grep -oP '\d+\.\d+\.\d+\.\d+' | sort -u)
wget http://download.sonarr.tv/v3/phantom-develop/${latest}/Sonarr.phantom-develop.${latest}.linux.tar.gz
```

Untar the directory:

```bash
tar xvf Sonarr.*.tar.gz
```

Copy your data from `~/.config/NzbDrone` to `~/.config/Sonarr`

```bash
cp -a ~/.config/NzbDrone ~/.config/Sonarr
```

Now, Sonarr v3 is ready to be used.

## Install a systemd --user service to manage the service

In order to allow easy execution of the software and to let it bring up the application automatically if the server ever reboots, a systemd user service will make your life a bit easier.

First, make sure the systemd user directory exists:

```bash
mkdir -p ~/.config/systemd/user
```

Now make the service and paste in the details.

```bash
nano ~/.config/systemd/user/sonarr.service
```
Paste the following into this file:
```
[Unit]
Description=Sonarr v3
After=syslog.target network.target

[Service]
Type=simple
Environment="TMPDIR=%h/.tmp"
Environment="MONO_GC_PARAMS=max-heap-size=1500M"
ExecStart=/usr/bin/mono %h/Sonarr/Sonarr.exe -nobrowser
WorkingDirectory=%h
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Save and quit the file (control-o, enter, control-x).

## Managing the systemd user service

With the systemd user service in place, you can now use `systemctl --user` commands to manipulate the service:

To start the service now and enable the service on boot:

```bash
systemctl enable --now --user sonarr
```

To check the status of the service:

```bash
systemctl status --user sonarr
```

You can also use commands such as `start`, `stop`, `restart`, `disable`, etc. Just don't forget the `--user` argument!

If you make any modifications to the service, don't forget to reload the daemon with `systemctl --user daemon-reload`