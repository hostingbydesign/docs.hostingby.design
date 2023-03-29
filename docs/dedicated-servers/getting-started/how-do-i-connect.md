---
id: how-do-i-connect
title: How do I connect to the server?
sidebar_label: How do I connect to the server?
---

In order to connect to your server at HostingByDesign, you'll need to access your server via SSH. Never done that before? Fear not! Read on to find out more.

## Step-by-step guide (Linux/OS X)

Connecting to your server via Linux or OSX is trivial:

1. Open a terminal
2. Type: `ssh <username>@<hostname>`

   eg: `ssh dan@1.d.itsby.design`

3. You may receive a warning about the host key. Type "yes" to verify.
4. Enter your password
5. Done!

## Step-by-step guide (PuTTY)

1. If you don't already have PuTTY installed, you can grab it [here](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html). Once downloaded, click the .exe and follow the instructions to install.

2. Once installed you can enter your server details including username and password

:::note
If you don't know what your username and password are, check your email. You should have received an email with the title "Your HostingByDesign dedicated server is ready!". This email contains basic access information for your server.
:::

3. On first login you may be presented with a warning - this is to confirm that the server identity is correct.

4. From there user your username and password to log in. If you are successful you should see a default Linux command prompt, and can now install applications.
