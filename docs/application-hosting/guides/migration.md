---
id: migration
title: Migrate Data between App Slots
sidebar_label: Data Migration Between Slots
---

If you want to migrate your data from one Application Slot to another, this guide will go over the process of how to achieve this. This tutorial will also cover migrating a couple of the most commonly used applications.

## Data Migration

To move the data, we will be using rsync. The steps below will go over the process:

1. SSH to your slot you want to move your data from, check [here](../getting-started/how-do-i-connect.md) for a tutorial on how to connect via SSH.
2. As the move can take quite a long time to finish, depending on the amount of data, it's best to use a screen session where it can run without the need to leave your SSH client open:
    2.1. Type: `screen -S migrate`
    2.2. To disconnect from the screen session, press **Ctrl+A+D** together on your keyboard.
    2.3. To reconnect to the screen session, type: `screen -r migrate`
3. Once you are in the screen session, the command to start the migration of your data is:
    3.1. `rsync -avH --info=progress2 -e "ssh -c aes128-ctr -o Compression=no" /home/<username>/Downloads/ <username>@XX.ein.itsby.design:/home/<username>/Downloads/`
    3.2. You will be asked to trust the certificate, so type yes and press Enter. Then input/paste the password of your destination slot and let the data move process finish. You can use Step 2.2. to disconnect from the screen session.
    3.3. With the command above, you will move the contents of a Folder called Downloads on your old slot to a folder called Downloads on your new slot. Just replace <username> with your username and XX.ein... with the domain of your new slot.

:::caution
Do not move your whole home folder, for example /home/jiiikoo/ as this will break things on the destination slot. Always move singular folders, like in the example above. 
:::

If you require assistance with the process, please do not hesitate to open a [Ticket](https://my.hostingby.design/submitticket.php).

## How to Migrate a few Commonly Used Applications

### Sonarr

Migrating your Sonarr database is really simple:
1. Install Sonarr on your destination Slot.
2. Turn Sonarr off from your Swizzin Panel by clicking the switch and wait for it to turn red.
3. Connect via FTP to your source Slot.
   3.1. Navigate to the folder `/home/<username>/.config/Sonarr/`
   3.2. Download the file called `sonarr.db`, do not move any other files.
4. FTP into the Destination slot.
   4.1. Navigate into the `/home/<username>/.config/Sonarr/` folder.
   4.2. Move the `sonarr.db` file and overwrite the existing one. 
5. Login to your Swizzin panel and turn Sonarr on.

### Radarr

Migrating Radarr is almost the same as how to migrate Sonarr.
1. Install Radar on your destination Slot.
2. Turn Radarr off from your Swizzin Panel by clicking the switch and wait for it to turn red.
3. Connect via FTP to your source Slot.
   3.1. Navigate to the folder `/home/<username>/.config/Radarr/`
   3.2. Download the file called `radarr.db`, do not move any other files.
4. FTP into the Destination slot.
   4.1. Navigate into the `/home/<username>/.config/Radarr/` folder.
   4.2. Move the `radarr.db` file and overwrite the existing one.
5. Login to your Swizzin panel and turn Radarr on.
