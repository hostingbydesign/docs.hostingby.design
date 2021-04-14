---
id: d2r
title: Export Deluge torrents to rTorrent
sidebar_label: Deluge to rTorrent
---

Deluge (v1 especially) isn't known for being the best optimized client out there, especially when you start to add a lot of torrents to your client. Thus, it can be beneficial to move torrents which have finished racing in Deluge over to rTorrent to seed in a client that is better optimized for resource usage. If only there were some way to trigger this automatically...

Enter the Deluge to rTorrent script!

## Install the Dependencies

First off, this method requires `rtxmlrpc` from the pyrocore tools suite, so let's go ahead and grab that now!

```
mkdir -p ~/bin ~/.local
git clone "https://github.com/pyroscope/pyrocore.git" ~/.local/pyroscope
~/.local/pyroscope/update-to-head.sh
```

Perl requires a dependency for rtorrent-fastresume so let's grab that too:
```
cpan -fi Convert:Bencode_XS

```

Please be aware that the tests run by the build of this module *can randomly fail*. You can probably safely ignore this.

The setup will probably ask a few prompts:

```
Would you like to configure as much as possible automatically? [yes] yes
What approach do you want? (Choose 'local::lib', 'sudo' or 'manual')
[local::lib]
Would you like me to append that to /home/username/.bashrc now? [yes] yes
```

Make sure you choose local::lib -- you don't have sudo permissions!

Now ensure all the changes we just made are loaded in your path and current session:

```
echo "export PATH=~/bin:~/.local/bin:${PATH}" >> ~/.bashrc
source ~/.bashrc
```

Create the pyrocore config to prevent errors being thrown at you:

```
pyroadmin --create-config
```

## Setup the Scripts Responsible for the Work

If it does not exist, create the `~/bin` folder and change to the directory:

```
mkdir ~/bin
cd bin
```

Grab the supporting scripts and set execute permissions:

```
wget https://raw.githubusercontent.com/Danlabs/kb-scripts/master/deluge-to-rtorrent/d2r.sh
wget https://raw.githubusercontent.com/Danlabs/kb-scripts/master/deluge-to-rtorrent/rfr.pl
chmod +x d2r.sh
chmod +x rfr.pl
```

As a Seedbox.io customer, you should not need to alter anything in either script.

## Add the Script to Execute

Now in Deluge, you'll need to enable the execute plugin and add `~/bin/d2r.sh` as an execute script on torrent completion. If this is your first time enabling the excute plugin, don't forget to restart deluge! (`box restart deluged`)

By default, the script is set to wait for 900 seconds (15 minutes) before moving your files. You are welcome to change this value at the top of the script.
