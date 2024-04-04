"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[9425,2477,8587],{5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(3117),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var g=n(2389),f="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},5758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905)),o=n(5532),l=n(7570);const i={id:"prowlarr",title:"Prowlarr",sidebar_label:"Prowlarr"},s=void 0,u={unversionedId:"application-hosting/applications/prowlarr",id:"application-hosting/applications/prowlarr",title:"Prowlarr",description:"Prowlarr is an indexer manager/proxy built on the popular *arr .net/reactjs base stack to integrate with your various PVR apps. Prowlarr supports management of both Torrent Trackers and Usenet Indexers. It integrates seamlessly with Lidarr, Mylar3, Radarr, Readarr, and Sonarr offering complete management of your indexers with no per app Indexer setup required (we do it all).",source:"@site/docs/application-hosting/applications/prowlarr.mdx",sourceDirName:"application-hosting/applications",slug:"/application-hosting/applications/prowlarr",permalink:"/application-hosting/applications/prowlarr",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/applications/prowlarr.mdx",tags:[],version:"current",frontMatter:{id:"prowlarr",title:"Prowlarr",sidebar_label:"Prowlarr"},sidebar:"docs",previous:{title:"plex-tunnel",permalink:"/application-hosting/applications/plex-tunnel"},next:{title:"Radarr",permalink:"/application-hosting/applications/radarr"}},d={},c=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add a new Indexer",id:"add-a-new-indexer",level:3},{value:"Connect download clients",id:"connect-download-clients",level:3},{value:"Add Arrs",id:"add-arrs",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Prowlarr is an indexer manager/proxy built on the popular *arr .net/reactjs base stack to integrate with your various PVR apps. Prowlarr supports management of both Torrent Trackers and Usenet Indexers. It integrates seamlessly with Lidarr, Mylar3, Radarr, Readarr, and Sonarr offering complete management of your indexers with no per app Indexer setup required (we do it all)."),(0,r.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,r.kt)("p",null,"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,r.kt)("a",{parentName:"p",href:"/application-hosting/getting-started/how-do-i-connect"},"here"),"."),(0,r.kt)("p",null,"Installing Prowlarr is easy. Simply issue the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"box install prowlarr\n")),(0,r.kt)("p",null,"This command will configure Prowlarr for your user."),(0,r.kt)("h2",{id:"how-to-access"},"How to Access"),(0,r.kt)("admonition",{title:'On initial launch it is critical that you setup authentication to "Forms based" logins when asked to setup credentials!',type:"caution"}),(0,r.kt)("p",null,"After Prowlarr has been installed, it will be available for access at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<hostname.io>/prowlarr"),"."),(0,r.kt)("h2",{id:"service-management"},"Service Management"),(0,r.kt)("p",null,"Like all box configured applications, you can manage Prowlarr via SSH with box with start, stop, restart, enable and disable commands."),(0,r.kt)(o.default,{service:"prowlarr",mdxType:"SystemdTabs"}),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Out of the box, Prowlarr comes with very little configuration. Following are some basic tasks to help get your client up and running:"),(0,r.kt)("h3",{id:"add-a-new-indexer"},"Add a new Indexer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"At the top, click Add Indexer."),(0,r.kt)("li",{parentName:"ol"},"Type the name of the indexer you want to add"),(0,r.kt)("li",{parentName:"ol"},"Enter the appropriate details")),(0,r.kt)("h3",{id:"connect-download-clients"},"Connect download clients"),(0,r.kt)("p",null,'First, navigate to the settings page in the sidebar, then click "Download Clients". Client specific info is available below. You may need to know your subnet to configure correctly. You may retrieve this by logging into your slot via ssh and entering the command ',(0,r.kt)("inlineCode",{parentName:"p"},"cat $HOME/.install/subnet.lock"),' or by going to the general menu in prowlarr, clicking "show advanced", then look at the bind address.'),(0,r.kt)(l.default,{mdxType:"Clients"}),(0,r.kt)("h3",{id:"add-arrs"},"Add Arrs"),(0,r.kt)("p",null,"Prowlarr supports Lidarr, Mylar3, Radarr, Readarr, and Sonarr. You may add these apps by navigating to the settings in Prowlarr."),(0,r.kt)("p",null,'You need to know your subnet to configure correctly. Go to the Settings -> General menu in the arr, click "show advanced", then copy the bind address and port. To configure the app itself,'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the settings page in Prowlarr, then select the Apps menu item."),(0,r.kt)("li",{parentName:"ol"},"In the top left, click show advanced."),(0,r.kt)("li",{parentName:"ol"},'Under "Applications", click the + button.'),(0,r.kt)("li",{parentName:"ol"},"Select the application you wish to sync your indexers to."),(0,r.kt)("li",{parentName:"ol"},"Enter the subnet ip like the following for prowlarr:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"`http://subnet:port/prowlarr/"))),(0,r.kt)("li",{parentName:"ol"},"Enter the subnet ip like the following for any of the supported apps you have installed via box:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"`http://subnet:port/appname/"))),(0,r.kt)("li",{parentName:"ol"},"Repeat as neccesary.")))}m.isMDXComponent=!0},7570:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905)),o=n(4866),l=n(5162),i=n(814);const s={},u=void 0,d={unversionedId:"application-hosting/snippets/clients",id:"application-hosting/snippets/clients",title:"clients",description:"To add a download client, go to Settings > Download Client. Make sure Advanced Settings are shown and click Add Client.",source:"@site/docs/application-hosting/snippets/clients.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/clients",permalink:"/application-hosting/snippets/clients",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/clients.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To add a download client, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > Download Client"),". Make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," are shown and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Client"),"."),(0,r.kt)(o.Z,{defaultValue:"rutorrent",values:[{label:"ruTorrent",value:"rutorrent"},{label:"Deluge",value:"deluge"},{label:"qBittorrent",value:"qbittorrent"},{label:"NZBGet",value:"nzbget"},{label:"SABnzbd",value:"sabnzbd"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"rutorrent",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"Name: rTorrent\nrTorrent host: 127.0.0.1\nPort: 443\nURL Path: /rutorrent/plugins/httprpc/action.php\nUse SSL: ON\nUsername: <your username>\nPassword: <your password>\nAdd label to torrent: TV (or anything else you desire)\nOptional - Downloaded files location: <custom directory>\nNOTE: If you have errors adding rTorrent to Sonarr, please try going to Settings > General and disable certificate validation for localhost addresses",className:"plaintext",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"deluge",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"Name: Deluge\nHost: 127.0.0.1\nPost: <deluge web port> (cat ~/.config/deluge/web.conf | grep port)\nDeluge Password: <your password>\nAdd label to torrent: TV (or anything else you desire)\n* label plugin must be enabled in Deluge if you add a label\nSSL: OFF",className:"plaintext",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"qbittorrent",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"Name: qBittorrent\nHost: <subnet ip> (In older cases: 127.0.0.1 - you can get your subnet IP by SSH'ing into your server and running `cat .install/subnet.lock`)\nPost: <qbittorrent web port>\nUsername: <your username>\nPassword: <your password>\nCategory: TV (or anything else you desire)\nSSL: OFF",className:"plaintext",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"nzbget",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"Name: NZBget\nNZBget host: 127.0.0.1\nport: 443\nURL Base: nzbget\nConnect using HTTPS: ON\nnzbget username: <your username>\nnzbget Password: <your password>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in nzbGet",className:"plaintext",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"sabnzbd",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"Name: SABnzbd\nSABnzbd host: 127.0.0.1\nport: 443\nUse SSL: ON\nURL Base: /<yourusername>/sabnzbd\nAPI Key: <yourapikey>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in SABnzbd",className:"plaintext",mdxType:"CodeBlock"}))))}b.isMDXComponent=!0},5532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905)),o=n(4866),l=n(5162),i=n(814);const s={},u=void 0,d={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"code"},(0,r.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"box status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"box start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"box stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"box restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"box enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,r.kt)(i.Z,{children:"box disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);