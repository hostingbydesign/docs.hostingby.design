---
id: jdownloader
title: Install JDownloader 2 Headless
sidebar_label: Install JDownloader
---

JDownloader is a download manager, written in Java, which allows automatic download of groups of files from one-click hosting sites. While not explicitly supported by HostingByDesign, it's easy to setup yourself in your user environment without the need for root or other system packages.

## Setup and Installation

Grab an install link from [here](http://privatelink.de/?http://jdownloader.org/jdownloader2). Download the "Jar" for any OS which supports Java.

You'll need to get the file to your slot since you can't download mega files directly to your slot. (yet!)

Make a directory in your home folder called `jd` and upload the file there (using FTP, scp or sftp).

Once the file has been moved to your slot, open SSH and go to the jd directory:

```
cd ~/jd
```

Run the following command until JDownloader prompts you for you my.jdownloader credentials:

```
java -jar JDownloader.jar -norestart
```

If you don't have a my.jdownloader.org account, sign up here: https://my.jdownloader.org

Now, enter your credentials in the waiting prompt in your SSH terminal.

When done, you should now see your slot online in my.jdownloader. Kill this running process with `control-c`.

## Setting up the background service

All that's left is to make a systemd-user service and enable it so that it runs in the background without any babysitting:

```
mkdir -p ~/.config/systemd/user
nano ~/.config/systemd/user/jdownloader.service
```

In that file, place the following:

```
[Unit]
Description=JDownloader Service
After=network.target

[Service]
Environment=JD_HOME=%h/jd
ExecStart=/usr/bin/java -Djava.awt.headless=true -jar %h/jd/JDownloader.jar

[Install]
WantedBy=multi-user.target
```

Reload your systemd user daemon:

```
systemctl --user daemon-reload
```

Enable and start the service now:

```
systemctl enable --now --user jdownloader
```

You can now check the status of jdownloader with

```
systemctl status --user jdownloader
```

If everything worked properly, jdownloader should now be running on your slot and visible on the site https://my.jdownloader.org
