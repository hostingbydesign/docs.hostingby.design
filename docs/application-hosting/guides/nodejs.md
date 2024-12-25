---
id: nodejs
title: How to install Node.js
sidebar_label: Install Node.js
---

Node.js is a JavaScript runtime and is required to run some applications. It comes with NPM (node package manage). You can learn more about Node.js and NPM on the [official documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs).

You may be tempt to use `apt` to install Node.js on your app slot, but that would require a root privileges and you won't have.

Node.js official documentation is updated and it's driving new users to use version management tools such as [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm). One of the advantages to use a version management tool is that it doesn't require root acces.

You are free to choose between [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm). For this guide we choose [fnm](https://github.com/Schniz/fnm).

## Installing fnm

The follow script will create the necessary folders, download, extract and set permission using the [latest available](https://github.com/Schniz/fnm/releases) fnm version:

```bash
mkdir -p ~/.local/bin
source ~/.profile

curl -L -O https://github.com/Schniz/fnm/releases/latest/download/fnm-linux.zip
unzip -o -d ~/.local/bin fnm-linux.zip && rm fnm-linux.zip
chmod u+x ~/.local/bin/fnm

mkdir -p ~/.local/share/bash-completion/completions
fnm completions --shell bash > ~/.local/share/bash-completion/completions/fnm
source ~/.local/share/bash-completion/completions/fnm
```

To have it ready to use, we need to load the necessary variables. Add it to `.bashrc` file:

```bash
echo '
# enable fnm multishell
if [ -x ~/.local/bin/fnm ]; then
    eval "$(fnm env --shell bash)"
fi
' >> ~/.bashrc
source ~/.bashrc
```

## Installing Node.js (and NPM)

After having fnm working you only need to install a Node.js version (NPM is included). We recommend LTS (long term support):

```bash
fnm install lts/latest
```

Since there are no other versions installed it will became the default:

```bash
node -v
npm -v
npx --yes cowsay 'HostingByDesign is awesome'
```

Check out [official documentation](https://github.com/Schniz/fnm/blob/master/docs/commands.md) for available commands and usage.
