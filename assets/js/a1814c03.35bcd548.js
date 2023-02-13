"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[329],{1347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return u}});var o=n(3117),l=(n(7294),n(3905));const a={id:"flexget",title:"Install Flexget RSS Manager",sidebar_label:"Install Flexget"},i=void 0,r={unversionedId:"appslots/guides/flexget",id:"appslots/guides/flexget",title:"Install Flexget RSS Manager",description:"FlexGet is a multipurpose automation tool for all of your media",source:"@site/docs/appslots/guides/flexget.md",sourceDirName:"appslots/guides",slug:"/appslots/guides/flexget",permalink:"/appslots/guides/flexget",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/appslots/guides/flexget.md",tags:[],version:"current",frontMatter:{id:"flexget",title:"Install Flexget RSS Manager",sidebar_label:"Install Flexget"},sidebar:"docs",previous:{title:"Deluge to rTorrent",permalink:"/appslots/guides/d2r"},next:{title:"Making Torrents with mktorrent",permalink:"/appslots/guides/mktorrent"}},s={},u=[{value:"Installing Flexget",id:"installing-flexget",level:2},{value:"Configuring Flexget",id:"configuring-flexget",level:2},{value:"Setting up systemd services",id:"setting-up-systemd-services",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"FlexGet is a multipurpose automation tool for all of your media"),(0,l.kt)("p",null,"Support for torrents, nzbs, podcasts, comics, TV, movies, RSS, HTML, CSV, and more."),(0,l.kt)("h2",{id:"installing-flexget"},"Installing Flexget"),(0,l.kt)("p",null,"Installing Flexget can easily be done through the creation of a python virtual environment. A virtual environment is the perfect option on a shared server as you can easily pull in any and all of the required dependencies you need to run your application without affecting other users on the server."),(0,l.kt)("p",null,"So to begin, we will create a new python virtual environment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd ~\npython3 -m venv flexget\n")),(0,l.kt)("p",null,"Enter the venv and install required packages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd flexget/bin\n./pip install flexget\n## Optional if using deluge\n./pip install deluge-client\n")),(0,l.kt)("h2",{id:"configuring-flexget"},"Configuring Flexget"),(0,l.kt)("p",null,"Now that Flexget is installed to the virtual environment, we need to configure Flexget to tell it what we want to process and how we want to process it."),(0,l.kt)("p",null,"Add your config.yml to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/flexget/config.yml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir -p ~/.config/flexget\nnano ~/.config/flexget/config.yml\n")),(0,l.kt)("p",null,"The config will be up to you. For complex configurations, you can reference the ",(0,l.kt)("a",{parentName:"p",href:"https://flexget.com/Plugins"},"plugin guide")," on the Flexget website. Here is a sample config to get you started:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tasks:\n  mycustomtask:\n    rss: http://myrssfeed.com/feed.xml\n    accept_all: yes\n    deluge:\n      port: 11111 (deluge daemon port)\n      host: 127.0.0.1\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"There are also plugins for rTorrent, sabnzbd, nzbget, Sonarr, Radarr, etc -- I would highly recommend checking out the plugin guide for more info! The above is just the very basics of what can be accomplished via Flexget.")),(0,l.kt)("p",null,"The above task will scrape the ",(0,l.kt)("inlineCode",{parentName:"p"},"feed.xml")," at myrssfeed.com and send ",(0,l.kt)("em",{parentName:"p"},"every new match")," it finds to Deluge. Filtering can be more complex than simply ",(0,l.kt)("inlineCode",{parentName:"p"},"accept_all"),"; however, for any complex tasks you should consult the documentation for specifics on how best to do them. ",(0,l.kt)("inlineCode",{parentName:"p"},"accept_all")," works best in the case of pre-filtered feeds, i.e. those that you have setup with custom rules on your tracker in question."),(0,l.kt)("h2",{id:"setting-up-systemd-services"},"Setting up systemd services"),(0,l.kt)("p",null,"With the configuration has been set, it's time to set a ",(0,l.kt)("inlineCode",{parentName:"p"},"systemd --user")," timer and the coupled service file to go along with it. The timer will make sure that Flexget keeps running and will also ensure that it gets started in the event that the server reboots."),(0,l.kt)("p",null,"If the directory ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/systemd/user")," doesn't already exist, it's time to create that now:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir -p ~/.config/systemd/user\n")),(0,l.kt)("p",null,"Now we must create our timer file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nano ~/.config/systemd/user/flexget.timer\n")),(0,l.kt)("p",null,"Inside that file, paste the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Run flexget every 5 minutes\n\n[Timer]\nOnCalendar=*:0/5\n\n[Install]\nWantedBy=timers.target\n")),(0,l.kt)("p",null,"You are welcome to change ",(0,l.kt)("inlineCode",{parentName:"p"},"OnCalendar")," to something sorter (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"OnCalendar=minutely")," for once a minute); however be aware that not all trackers like being hammered for RSS feeds every minute and may result in an IP ban. Please consult your tracker documentation before setting the limit this low. More advanced ",(0,l.kt)("inlineCode",{parentName:"p"},"OnCalendar")," notation can be found ",(0,l.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.time.html#"},"here")," in the systemd documentation."),(0,l.kt)("p",null,"Save and exit this file. Now we must write the associated service file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nano ~/.config/systemd/user/flexget.service\n")),(0,l.kt)("p",null,"Inside this file, place the following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Run flexget\n\n[Service]\nExecStart=%h/flexget/bin/flexget execute --no-cache\n")),(0,l.kt)("p",null,"Make sure the user daemon has been reloaded:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"systemctl --user daemon-reload\n")),(0,l.kt)("p",null,"Now start and enable your timer (no need to enable the service!)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"systemctl enable --now --user flexget.timer\n")),(0,l.kt)("p",null,"If you run ",(0,l.kt)("inlineCode",{parentName:"p"},"systemctl --user status flexget.timer")," you should see some information about the last time the timer was execute and the countdown until the next execution."),(0,l.kt)("p",null,"If you run ",(0,l.kt)("inlineCode",{parentName:"p"},"systemctl --user status flexget.service")," you should see any potential debug information you might need about any issues."),(0,l.kt)("p",null,"You can also run ",(0,l.kt)("inlineCode",{parentName:"p"},"~/flexget/bin/flexget execute")," directly from the command line to trigger the same command have its outputs dumped to your current terminal session for debugging."),(0,l.kt)("p",null,"Finally, don't forget to checkout the ",(0,l.kt)("a",{parentName:"p",href:"https://flexget.com/Plugins"},"Flexget Plugins")," for an indepth overview on how to configure ",(0,l.kt)("em",{parentName:"p"},"all")," the various options available to you."))}d.isMDXComponent=!0}}]);