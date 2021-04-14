---
id: tautulli
title: Tautulli
sidebar_label: Tautulli
---

A Python based monitoring and tracking tool for Plex Media Server.

## Initial Setup

First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article [here](../getting-started/how-do-i-connect.md).

Installing Tautulli is easy. Simply issue the following command:

```plaintext main
box install plexpy
```

This command will configure Tautulli for your user.

## How to Access

Once Tautulli has been installed, you can access it from your browser at `https://<hostname.io>/plexpy`.

## Service Management

Like all box configured applications, you can manage Tautulli via SSH with box with start, stop, restart, enable and disable commands.

import SystemdTabs from '../snippets/systemdtabs.mdx';

<SystemdTabs service="tautulli"/>

## Configuration

Upon visiting your Tautulli dashboard for the first time, the welcome wizard will run.

1. Sign in with Plex
2. Input settings for Plex:
```plaintext main
Plex IP: 127.0.0.1
Post: <your plex port>
```
3. Run through the rest of the wizard.
4. Tautulli is now connected to Plex.