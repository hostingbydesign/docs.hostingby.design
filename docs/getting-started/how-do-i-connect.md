---
id: how-do-i-connect
title: How do I connect to the server?
sidebar_label: How do I connect to the server?
---

In order to connect to your slot at Seedbox.io.net, you'll need to access your slot via SSH. Never done that before? Fear not! Read on to find out more.

## Step-by-step guide (Linux/OS X)

Connecting to your slot via Linux or OSX is trivial:
1. Open a terminal
2. Type: `ssh <username>@<hostname>`

    eg: `ssh liara@app02.seedbox.io`

3. You may receive a warning about the host key. Type "yes" to verify.
4. Enter your password
5. Done!

## Step-by-step guide (PuTTY)

1. If you don't already have PuTTY installed, you can grab it [here](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html). Once downloaded, click the .exe and follow the instructions to install.

2. Once installed you can enter your server details including username and password

:::note
If you don't know what your username and password are, check your email. You should have received an email with the title "Your Seedbox.io slot is ready!". This email contains basic access information for your slot.
:::

3. On first login you may be presented with a warning - this is to confirm that the server identity is correct.

4. From there user your username and password to log in. If you are successful you should see a default Linux command prompt, and can now install applications.

```
Linux ---.Seedbox.io 4.19.45-xanmod23 #1.190523 SMP PREEMPT Thu May 23 08:39:11 -03 2019 x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
liara@---:~$ 
```