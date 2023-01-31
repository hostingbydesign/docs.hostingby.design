---
id: mount-service
title: How to mount service locally (Linux)
sidebar_label: Mount service (Linux)
---

:::warning
THIS GUIDE IS A USER WRITTEN GUIDE, SEEDBOX.IO CANNOT GUARANTEE THIS IS STABLE AND WORKING AS INTENDED! ONLY ATTEMPT THIS IF YOU ARE AN EXPERIENCED USER THAT CAN DEBUG THIS ON YOUR OWN!
:::

On-Demand SFTP remote path mapping
Tested OS : Ubuntu 18.04, Ubuntu 16.04.4,

Packages required: sshfs, sshpass, fuse

**For a single use remote mapping (Connection will be lost upon reboot or if SFTP connection is dropped)**

```bash
sudo sshfs <username>@<seedbox_id>.seedbox.io:/ <mount path>
# ie
$ mkdir ~/seedbox
$ sshfs psbXXXXX@psbXXXXX.seedbox.io:/ ~/seedbox/
```

Enter your password when prompted, accessing the `~/seedbox` folder

Note: you can add -o allow_other to enable other users/daemons to access this share, and -o sshfs_debug to output any additional information. If your SSH port has been altered to non-custom 22, you can specify the port via -p 2222 etc.

**Configuring automatic on-demand mapping**

Once you know a single use sshfs session works, you can set it up for automatic logon via systemd.

Create an sshpass shell script to automate the password prompt ie:

```bash
$ sudoedit /opt/seedbox.sh
!/bin/bash
sshpass -p <seedbox_password> ssh $\*
```

edit the system /etc/fstab to add your mount (uid/gid to match the user id of mount owner)

```bash
$ sudoedit /etc/fstab
sshfs#<username>@<seedbox_id>.seedbox.io:/ <mount path> fuse ssh_command=/opt/seedbox.sh,uid=<gid>,gid=<gid>,users,idmap=user,x-systemd.automount,noatime,allow_other,netdev,auto_cache,reconnect 0 0
```

- `<username>` = your seedbox's username ie psbXXXXX
- `<seedbox_id>` = your seedbox's hostname ie psbXXXXX
- `<mount path>` = Your mount location, ie, /mnt/seedbox
- `<uid>` = system user id of the mount owner (preferabley a daemon user, sonarr/radarr etc)
- `<gid>` = system group id of the mount owner (preferabley a daemon user, sonarr/radarr etc)

activate the auto mount (once) via:

```bash
$ sudo systemctl daemon-reload
$ sudo systemctl restart (mount path).automount
```
