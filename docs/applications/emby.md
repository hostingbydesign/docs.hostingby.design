---
id: emby
title: Emby
sidebar_label: Emby
---

Take your home videos, music, and photos with you wherever you go, even offline with Emby Mobile Sync. Emby mobile apps are available for Android, iPhone, iPad, Windows Phone and Windows Tablets.

Or sit back and enjoy Emby from the living room. Emby apps are available for Android TV, Amazon Fire TV, Chromecast, Roku, Xbox, Home Theater Computers, and more.


## Initial Setup

First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article [here](../getting-started/how-do-i-connect.md).

Installing emby is easy. Simply issue the following command:

```plaintext main
box install emby
```

This command will configure an emby docker container for your user.

## How to Access

Emby can be accessed from your browser at `https://<hostname.io>/<username>/emby/`. You'll need to visit this address to finish the installation wizard. Please do this step before moving on.

### Emby Connect

Due to the reverse proxy setup, you'll need to add your server manually to Emby Connect if you want to use Emby through the centralized service. Follow the steps to get your Emby connected:

1. Get to the server select screen (this is the default screen)
2. Click add server
3. Enter `https://<hostname.io>/<username>/emby/` in the hostname field
4. Leave the port field blank
5. Click Connect
6. Enter your user and password
7. Click finish

Emby is now connected!

## Service Management

Like all box configured applications, you can manage emby via SSH with box with start, stop, restart, enable and disable commands.

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```plaintext
box start emby
```
<!--Stop-->
```plaintext
box stop emby
```
<!--Restart-->
```plaintext
box restart emby
```
<!--Enable-->
```plaintext
box enable emby
```
<!--Disable-->
```plaintext
box disable emby
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

When you load up Emby for the first time, you'll be greeted by the setup wizard. Setup is fairly straightforward. We've already gone ahead and added your two basic media libraries for you.

### Libraries

During the setup of Emby, we added two folders to your home directory and created a corresponding Library in Emby:

- TV Shows > `~/media/TV Shows`
- Movies > `~/media/Movies`

These correspond to two different locations in your emby container:

- TV Shows > `/data/media/TV Shows`
- Movies > `/data/media/Movies`

If you are needing to create a custom folder to your Library (in the instance of rclone or plexdrive), you will find that your entire home directory has been mounted under the /data folder of your Emby instance.

## Further setup

While not covered in this documentation, there are further guides and documentations on the [Emby Forum](https://emby.media/community/index.php?/forum/24-tutorials-and-guides/)