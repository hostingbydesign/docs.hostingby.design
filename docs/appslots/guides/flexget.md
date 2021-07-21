---
id: flexget
title: Install Flexget RSS Manager
sidebar_label: Install Flexget
---

FlexGet is a multipurpose automation tool for all of your media

Support for torrents, nzbs, podcasts, comics, TV, movies, RSS, HTML, CSV, and more.

## Installing Flexget

Installing Flexget can easily be done through the creation of a python virtual environment. A virtual environment is the perfect option on a shared server as you can easily pull in any and all of the required dependencies you need to run your application without affecting other users on the server.

So to begin, we will create a new python virtual environment:

```
cd ~
python3 -m venv flexget
```

Enter the venv and install required packages

```
cd flexget/bin
./pip install flexget
## Optional if using deluge
./pip install deluge-client
```

## Configuring Flexget

Now that Flexget is installed to the virtual environment, we need to configure Flexget to tell it what we want to process and how we want to process it.

Add your config.yml to `~/.config/flexget/config.yml`

```
mkdir -p ~/.config/flexget
nano ~/.config/flexget/config.yml
```

The config will be up to you. For complex configurations, you can reference the [plugin guide](https://flexget.com/Plugins) on the Flexget website. Here is a sample config to get you started:

```
tasks:
  mycustomtask:
    rss: http://myrssfeed.com/feed.xml
    accept_all: yes
    deluge:
      port: 11111 (deluge daemon port)
      host: 127.0.0.1
```

:::note
There are also plugins for rTorrent, sabnzbd, nzbget, Sonarr, Radarr, etc -- I would highly recommend checking out the plugin guide for more info! The above is just the very basics of what can be accomplished via Flexget.
:::

The above task will scrape the `feed.xml` at myrssfeed.com and send _every new match_ it finds to Deluge. Filtering can be more complex than simply `accept_all`; however, for any complex tasks you should consult the documentation for specifics on how best to do them. `accept_all` works best in the case of pre-filtered feeds, i.e. those that you have setup with custom rules on your tracker in question.

## Setting up systemd services

With the configuration has been set, it's time to set a `systemd --user` timer and the coupled service file to go along with it. The timer will make sure that Flexget keeps running and will also ensure that it gets started in the event that the server reboots.

If the directory `~/.config/systemd/user` doesn't already exist, it's time to create that now:

```
mkdir -p ~/.config/systemd/user
```

Now we must create our timer file:

```
nano ~/.config/systemd/user/flexget.timer
```

Inside that file, paste the following:

```
[Unit]
Description=Run flexget every 5 minutes

[Timer]
OnCalendar=*:0/5

[Install]
WantedBy=timers.target
```

You are welcome to change `OnCalendar` to something sorter (e.g. `OnCalendar=minutely` for once a minute); however be aware that not all trackers like being hammered for RSS feeds every minute and may result in an IP ban. Please consult your tracker documentation before setting the limit this low. More advanced `OnCalendar` notation can be found [here](https://www.freedesktop.org/software/systemd/man/systemd.time.html#) in the systemd documentation.

Save and exit this file. Now we must write the associated service file:

```
nano ~/.config/systemd/user/flexget.service
```

Inside this file, place the following

```
[Unit]
Description=Run flexget

[Service]
ExecStart=%h/flexget/bin/flexget execute --no-cache
```

Make sure the user daemon has been reloaded:

```
systemctl --user daemon-reload
```

Now start and enable your timer (no need to enable the service!)

```
systemctl enable --now --user flexget.timer
```

If you run `systemctl --user status flexget.timer` you should see some information about the last time the timer was execute and the countdown until the next execution.

If you run `systemctl --user status flexget.service` you should see any potential debug information you might need about any issues.

You can also run `~/flexget/bin/flexget execute` directly from the command line to trigger the same command have its outputs dumped to your current terminal session for debugging.

Finally, don't forget to checkout the [Flexget Plugins](https://flexget.com/Plugins) for an indepth overview on how to configure _all_ the various options available to you.
