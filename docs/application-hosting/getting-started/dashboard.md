---
id: dashboard
title: Dashboard
sidebar_label: Dashboard
---

The dashboard is a graphical user interface which provides a central location for you to keep an eye on server statisics, personal usage information and your services.

## How to Access

The dashboard is available at the web root for the server you've been assigned to:

`https://<hostname.hostingby.design>`

## Features

### Application Links

On the left side of the dashboard, you'll find quick links to the currently installed applications on your slot. No need to remember the endpoints and ports yourself!

### Server Statistics

The dashboard provides metrics for server load, CPU usage, and the current network metrics for upload and download speeds.

:::tip
The dashboard might indicate high load %'s, in most cases it's normal and not a reason to worry unless your performance is being affected. As a customer you only need to worry about disk utilization whic you can check with:
```iostat -xm 5 $(findmnt $HOME | awk '{ print $2 }' | tail -n1 | cut -d[ -f1)```
:::

### Personal Usage Statistics

You can find your disk quota and bandwidth quota here.

### Service Management

You can see at a glance whether or not your services are currently running. You can also start and stop services directly from the panel, if you just need to quickly restart a service without SSHing into your slot.
