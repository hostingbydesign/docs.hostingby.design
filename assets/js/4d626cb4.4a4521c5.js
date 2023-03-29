"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[8026,2477,8587],{5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(3117),r=a(7294),o=a(6010),i=a(2466),l=a(6550),s=a(1980),d=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,d]=h({queryString:a,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var k=a(2389),g="tabList__CuJ",f="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==l&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",f,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},5329:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=a(3117),r=(a(7294),a(3905)),o=a(5532),i=a(7570);const l={id:"radarr",title:"Radarr",sidebar_label:"Radarr"},s=void 0,d={unversionedId:"application-hosting/applications/radarr",id:"application-hosting/applications/radarr",title:"Radarr",description:"Radarr is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent.",source:"@site/docs/application-hosting/applications/radarr.mdx",sourceDirName:"application-hosting/applications",slug:"/application-hosting/applications/radarr",permalink:"/application-hosting/applications/radarr",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/applications/radarr.mdx",tags:[],version:"current",frontMatter:{id:"radarr",title:"Radarr",sidebar_label:"Radarr"},sidebar:"docs",previous:{title:"Sonarr",permalink:"/application-hosting/applications/sonarr"},next:{title:"Lidarr",permalink:"/application-hosting/applications/lidarr"}},u={},c=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add a new show (and your first root directory)",id:"add-a-new-show-and-your-first-root-directory",level:3},{value:"Connect download clients",id:"connect-download-clients",level:3},{value:"Add an indexer with Jackett",id:"add-an-indexer-with-jackett",level:3},{value:"Other tasks",id:"other-tasks",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Radarr is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent."),(0,r.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,r.kt)("p",null,"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,r.kt)("a",{parentName:"p",href:"/application-hosting/getting-started/how-do-i-connect"},"here"),"."),(0,r.kt)("p",null,"Installing Radarr is easy. Simply issue the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"box install radarr\n")),(0,r.kt)("p",null,"This command will configure radarr for your user."),(0,r.kt)("h2",{id:"how-to-access"},"How to Access"),(0,r.kt)("p",null,"After Radarr has been installed, it will be available for access at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<hostname.io>/radarr"),"."),(0,r.kt)("h2",{id:"service-management"},"Service Management"),(0,r.kt)("p",null,"Like all box configured applications, you can manage Radarr via SSH with box with start, stop, restart, enable and disable commands."),(0,r.kt)(o.default,{service:"radarr",mdxType:"SystemdTabs"}),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Out of the box, Radarr comes with very little configuration. Following are some basic tasks to help get your client up and running:"),(0,r.kt)("h3",{id:"add-a-new-show-and-your-first-root-directory"},"Add a new show (and your first root directory)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"At the top, click series."),(0,r.kt)("li",{parentName:"ol"},"Click the button ",(0,r.kt)("inlineCode",{parentName:"li"},"+ Add Movie")),(0,r.kt)("li",{parentName:"ol"},"Type the name of the show you want to add"),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Path"),", choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Add a new path"),". Enter the path for the folder you wish to add your Sonarr shows to and click the green checkmark to add the directory.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/home/<username>/media/Movies"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Change the other settings to your own needs"),(0,r.kt)("li",{parentName:"ol"},"Click the green + to add the show.")),(0,r.kt)("h3",{id:"connect-download-clients"},"Connect download clients"),(0,r.kt)(i.default,{mdxType:"Clients"}),(0,r.kt)("h3",{id:"add-an-indexer-with-jackett"},"Add an indexer with Jackett"),(0,r.kt)("p",null,"Radarr only supports a few trackers out of the box, but the indexers can be expanded by using the application ",(0,r.kt)("a",{parentName:"p",href:"/application-hosting/applications/jackett"},"Jackett"),". To add an indexer with Jackett, use the following steps."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, when receivng the torznab feed from Jackett, it will need to be modified to be connected with the application. The default link looks like:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://app02.hostingby.design/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")),(0,r.kt)("p",{parentName:"admonition"},"We need to edit this link to ",(0,r.kt)("strong",{parentName:"p"},"remove https")," and ",(0,r.kt)("strong",{parentName:"p"},"add the port number"),". Thus, if your port number was ",(0,r.kt)("inlineCode",{parentName:"p"},"12345"),", your editted URL would look like this:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"http://app02.hostingby.design:12345/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings > Indexers")," and click ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," to add a new indexer."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Torrent")," choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Torznab")),(0,r.kt)("li",{parentName:"ol"},"Use the settings:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Name: <tracker name>\nURL: <click copy torznab feed in jackett and modify as per above>\nAPI: <copy and paste from jackett UI>\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Test"),". If all is good, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Save"),".")),(0,r.kt)("h3",{id:"other-tasks"},"Other tasks"),(0,r.kt)("p",null,"You may wish to further alter your setup by setting quality profiles or setting up post-processing so that media is automatically transferred to your Radarr library when your torrents are completed. If you need further help, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Radarr/Radarr/wiki"},"Radarr Wiki"),"."))}m.isMDXComponent=!0},7570:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905)),o=a(4866),i=a(5162),l=a(814);const s={},d=void 0,u={unversionedId:"application-hosting/snippets/clients",id:"application-hosting/snippets/clients",title:"clients",description:"To add a download client, go to Settings > Download Client. Make sure Advanced Settings are shown and click Add Client.",source:"@site/docs/application-hosting/snippets/clients.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/clients",permalink:"/application-hosting/snippets/clients",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/clients.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To add a download client, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > Download Client"),". Make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," are shown and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Client"),"."),(0,r.kt)(o.Z,{defaultValue:"rutorrent",values:[{label:"ruTorrent",value:"rutorrent"},{label:"Deluge",value:"deluge"},{label:"qBittorrent",value:"qbittorrent"},{label:"NZBGet",value:"nzbget"},{label:"SABnzbd",value:"sabnzbd"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"rutorrent",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"Name: rTorrent\nrTorrent host: 127.0.0.1\nPort: 443\nURL Path: /rutorrent/plugins/httprpc/action.php\nUse SSL: ON\nUsername: <your username>\nPassword: <your password>\nAdd label to torrent: TV (or anything else you desire)\nOptional - Downloaded files location: <custom directory>\nNOTE: If you have errors adding rTorrent to Sonarr, please try going to Settings > General and disable certificate validation for localhost addresses",className:"plaintext",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"deluge",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"Name: Deluge\nHost: 127.0.0.1\nPost: <deluge web port>\nDeluge Password: <your password>\nAdd label to torrent: TV (or anything else you desire)\n* label plugin must be enabled in Deluge if you add a label\nSSL: OFF",className:"plaintext",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"qbittorrent",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"Name: qBittorrent\nHost: 127.0.0.1\nPost: <qbittorrent web port>\nUsername: <your username>\nPassword: <your password>\nCategory: TV (or anything else you desire)\nSSL: OFF",className:"plaintext",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"nzbget",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"Name: NZBget\nNZBget host: 127.0.0.1\nport: 443\nURL Base: nzbget\nConnect using HTTPS: ON\nnzbget username: <your username>\nnzbget Password: <your password>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in nzbGet",className:"plaintext",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"sabnzbd",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"Name: SABnzbd\nSABnzbd host: 127.0.0.1\nport: 443\nUse SSL: ON\nURL Base: /<yourusername>/sabnzbd\nAPI Key: <yourapikey>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in SABnzbd",className:"plaintext",mdxType:"CodeBlock"}))))}h.isMDXComponent=!0},5532:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905)),o=a(4866),i=a(5162),l=a(814);const s={},d=void 0,u={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"code"},(0,r.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"status",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"start",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"stop",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"restart",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"enable",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"disable",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}h.isMDXComponent=!0}}]);