"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[1228,8587],{6950:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return p}});var a=n(3117),s=(n(7294),n(3905)),i=n(5532);const o={id:"nzbget",title:"nzbGet",sidebar_label:"nzbGet"},l=void 0,r={unversionedId:"application-hosting/applications/nzbget",id:"application-hosting/applications/nzbget",title:"nzbGet",description:"NZBGet is a binary downloader, which downloads files from Usenet based on information given in nzb-files.",source:"@site/docs/application-hosting/applications/nzbget.mdx",sourceDirName:"application-hosting/applications",slug:"/application-hosting/applications/nzbget",permalink:"/application-hosting/applications/nzbget",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/applications/nzbget.mdx",tags:[],version:"current",frontMatter:{id:"nzbget",title:"nzbGet",sidebar_label:"nzbGet"},sidebar:"docs",previous:{title:"Resilio (bt)Sync",permalink:"/application-hosting/applications/btsync"},next:{title:"SABnzbd",permalink:"/application-hosting/applications/sabnzbd"}},c={},p=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Connect to other clients",id:"connect-to-other-clients",level:2}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"NZBGet is a binary downloader, which downloads files from Usenet based on information given in nzb-files."),(0,s.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,s.kt)("p",null,"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,s.kt)("a",{parentName:"p",href:"/application-hosting/getting-started/how-do-i-connect"},"here"),"."),(0,s.kt)("p",null,"Installing nzbGet is easy. Simply issue the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"box install nzbget\n")),(0,s.kt)("p",null,"This command will configure nzbgGet for your user."),(0,s.kt)("h2",{id:"how-to-access"},"How to Access"),(0,s.kt)("p",null,"After installation, you can access nzbGet at the url: ",(0,s.kt)("inlineCode",{parentName:"p"},"https://<yourhostname.io>/nzbget")),(0,s.kt)("h2",{id:"service-management"},"Service Management"),(0,s.kt)("p",null,"Like all box configured applications, you can manage nzbGet via SSH with box with start, stop, restart, enable and disable commands."),(0,s.kt)(i.default,{service:"nzbget",mdxType:"SystemdTabs"}),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"If you are unfamiliar with nzbGet, please check out their ",(0,s.kt)("a",{parentName:"p",href:"https://nzbget.net/documentation"},"documentation")," for assistance in getting your news groups setup or learning how to setup post-processing."),(0,s.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,s.kt)("p",null,"The general settings for connecting nzbget to other clients are as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Host: 127.0.0.1\nControl Port: 443\nURL Base: nzbget\nSSL: ON\nUsername: <your slot username>\nPassword: <your slot password>\n")),(0,s.kt)("admonition",{title:"Tip",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"In some applications, such as Sonarr and Radarr, you may need to enable ",(0,s.kt)("strong",{parentName:"p"},"Advanced Settings")," to see the option to change ",(0,s.kt)("strong",{parentName:"p"},"URL Base"),".")))}u.isMDXComponent=!0},5532:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=n(3117),s=(n(7294),n(3905)),i=n(4866),o=n(5162),l=n(814);const r={},c=void 0,p={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[],m={toc:u};function b(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"code"},(0,s.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"status",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"start",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"stop",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"restart",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"enable",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"disable",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);