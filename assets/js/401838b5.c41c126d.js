"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[2477],{7570:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=n(3117),a=(n(7294),n(3905)),r=n(4866),s=n(5162),i=n(814);const l={},d=void 0,u={unversionedId:"application-hosting/snippets/clients",id:"application-hosting/snippets/clients",title:"clients",description:"To add a download client, go to Settings > Download Client. Make sure Advanced Settings are shown and click Add Client.",source:"@site/docs/application-hosting/snippets/clients.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/clients",permalink:"/application-hosting/snippets/clients",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/clients.mdx",tags:[],version:"current",frontMatter:{}},p={},c=[],m={toc:c};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To add a download client, go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings > Download Client"),". Make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," are shown and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Client"),"."),(0,a.kt)(r.Z,{defaultValue:"rutorrent",values:[{label:"ruTorrent",value:"rutorrent"},{label:"Deluge",value:"deluge"},{label:"qBittorrent",value:"qbittorrent"},{label:"NZBGet",value:"nzbget"},{label:"SABnzbd",value:"sabnzbd"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"rutorrent",mdxType:"TabItem"},(0,a.kt)(i.Z,{children:"Name: rTorrent\nrTorrent host: 127.0.0.1\nPort: 443\nURL Path: /rutorrent/plugins/httprpc/action.php\nUse SSL: ON\nUsername: <your username>\nPassword: <your password>\nAdd label to torrent: TV (or anything else you desire)\nOptional - Downloaded files location: <custom directory>\nNOTE: If you have errors adding rTorrent to Sonarr, please try going to Settings > General and disable certificate validation for localhost addresses",className:"plaintext",mdxType:"CodeBlock"})),(0,a.kt)(s.Z,{value:"deluge",mdxType:"TabItem"},(0,a.kt)(i.Z,{children:"Name: Deluge\nHost: 127.0.0.1\nPost: <deluge web port>\nDeluge Password: <your password>\nAdd label to torrent: TV (or anything else you desire)\n* label plugin must be enabled in Deluge if you add a label\nSSL: OFF",className:"plaintext",mdxType:"CodeBlock"})),(0,a.kt)(s.Z,{value:"qbittorrent",mdxType:"TabItem"},(0,a.kt)(i.Z,{children:"Name: qBittorrent\nHost: 127.0.0.1\nPost: <qbittorrent web port>\nUsername: <your username>\nPassword: <your password>\nCategory: TV (or anything else you desire)\nSSL: OFF",className:"plaintext",mdxType:"CodeBlock"})),(0,a.kt)(s.Z,{value:"nzbget",mdxType:"TabItem"},(0,a.kt)(i.Z,{children:"Name: NZBget\nNZBget host: 127.0.0.1\nport: 443\nURL Base: nzbget\nConnect using HTTPS: ON\nnzbget username: <your username>\nnzbget Password: <your password>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in nzbGet",className:"plaintext",mdxType:"CodeBlock"})),(0,a.kt)(s.Z,{value:"sabnzbd",mdxType:"TabItem"},(0,a.kt)(i.Z,{children:"Name: SABnzbd\nSABnzbd host: 127.0.0.1\nport: 443\nUse SSL: ON\nURL Base: /<yourusername>/sabnzbd\nAPI Key: <yourapikey>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in SABnzbd",className:"plaintext",mdxType:"CodeBlock"}))))}b.isMDXComponent=!0}}]);