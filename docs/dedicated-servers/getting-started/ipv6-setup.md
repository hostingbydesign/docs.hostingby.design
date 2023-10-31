---
id: ipv6-setup
title: Setup IPv6
sidebar_label: Setup IPv6
---

## Prerequisites
To be able to setup an IPv6 for your server, you have to have one assigned to your server. To do this, please open a [Ticket](https://my.hostingby.design/submitticket.php) and we will provide the necessary information for you.

## Setting it up on the Server (Debian 11 / Swizzin Suite) 

- SSH to your server and elevate your user to root with `sudo su -`. 
- Type: `nano /etc/network/interfaces`
You will see something similar to this:
```
iface ens1f0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.192
        network XXX.XXX.XXX.XXX
        broadcast XXX.XXX.XXX.XXX
        gateway XXX.XXX.XXX.XXX
        dns-search dedi.leaseweb.net
        dns-nameservers 23.19.53.53 23.19.52.52

auto ens1f1
iface ens1f1 inet dhcp
        mtu 9000
```
You will have to slightly modify it to add IPv6:
```
iface ens1f0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.192
        network XXX.XXX.XXX.XXX
        broadcast XXX.XXX.XXX.XXX
        gateway XXX.XXX.XXX.XXX
        dns-search dedi.leaseweb.net
        dns-nameservers 23.19.53.53 23.19.52.52

iface ens1f0 inet6 static
	address: <your IPv6 Info from the Ticket>
	netmask 64
	gateway: <your Gateway info from the Ticket>

auto ens1f1
iface ens1f1 inet dhcp
```
:::tip Please Note
The part where it says ens1f0 in the above example can read eno0 or something else as well. So please use the same NIC identifier as your IPv4 uses for this to work.
:::

After you have modified the file, issue `ctrl+x`, then press Y to save and then Enter to close  and save the file. 

Now you will need to just run `sudo service networking restart`. NOTE: This step can take sometime to finish and during this time, your SSH output will not update. Wait for your prompt to come back on, typically this takes a minute or two.

When you gain access to the prompt again, issue `ping6 ipv6.google.com` and check you have IPv6 connectivity.

If you have issues or questions regarding setting IPv6 on your dedicated server, please do not hesitate to open a [Ticket](https://my.hostingby.design/submitticket.php).