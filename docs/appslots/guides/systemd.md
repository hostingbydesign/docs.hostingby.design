---
id: systemd
title: Systemd (Startup) Services
sidebar: Systemd Services
---

For users asking for ways to start custom apps as services on boot or just more easily, I recommend `systemd --user` services for this job.

Systemd can be used in `user` mode without need to call sudo to make changes to service states.

User services can be stored like this:

```
~/.config/systemd/user/foo.service
```

Just `mkdir -p ~/.config/systemd/user` if it does not exist

Once there, this service file can be called like any normal systemd service but with the `--user` argument.

```
systemctl enable --now --user foo.service
```

foo.service would now attempt to be running in your user's context. You can check it with

```
systemctl status --user foo.service
```

Some notes about service files:

- Do not include the user or group variables. The systemd service will fail if you specify anything because the service implicitly runs as your user.
- Unless you are bound to the subnet port, do not forget authentication!
- If you are using an rc port, consider binding it to your subnet IP. You can easily communicate with your subnet ip via CLI
- At least, choose a unique port. Consider binding to your subnet port whenever possible (fun fact: subnet bound ports are accessible from your wireguard VPN)
- You need to start your mounts before the media center apps start, so you can try either a `Before=plex@tjmack` or a `PostStart=/usr/bin/sudo box restart plex`
