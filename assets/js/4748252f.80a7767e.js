"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[6848,8587],{5162:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(7294),r=n(6010),o="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},e)}},4866:function(t,e,n){n.d(e,{Z:function(){return w}});var a=n(3117),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(t){return function(t){return r.Children.map(t,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function d(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??p(n);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function m(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:n}=t;const a=(0,l.k6)(),o=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((t=>{if(!o)return;const e=new URLSearchParams(a.location.search);e.set(o,t),a.replace({...a.location,search:e.toString()})}),[o,a])]}function h(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,o=d(t),[i,l]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:o}))),[s,u]=b({queryString:n,groupId:a}),[p,h]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((t=>{n&&o.set(t)}),[n,o])]}({groupId:a}),g=(()=>{const t=s??p;return m({value:t,tabValues:o})?t:null})();(0,r.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!m({value:t,tabValues:o}))throw new Error(`Can't select invalid tab value=${t}`);l(t),u(t),h(t)}),[u,h,o]),tabValues:o}}var g=n(2389),f="tabList__CuJ",v="tabItem_LNqP";function k(t){let{className:e,block:n,selectedValue:l,selectValue:s,tabValues:u}=t;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=t=>{const e=t.currentTarget,n=c.indexOf(e),a=u[n].value;a!==l&&(p(e),s(a))},m=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},u.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:t=>c.push(t),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===e})}),n??e)})))}function y(t){let{lazy:e,children:n,selectedValue:a}=t;if(e){const t=n.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function q(t){const e=h(t);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(k,(0,a.Z)({},t,e)),r.createElement(y,(0,a.Z)({},t,e)))}function w(t){const e=(0,g.Z)();return r.createElement(q,(0,a.Z)({key:String(e)},t))}},8085:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905)),o=n(5532);const i={id:"qbittorrent",title:"qBittorrent",sidebar_label:"qBittorrent"},l=void 0,s={unversionedId:"application-hosting/applications/qbittorrent",id:"application-hosting/applications/qbittorrent",title:"qBittorrent",description:"qBittorrent is an open-source alternative utorrent. It's written in C++ and uses Boost, Qt toolkit, and the libtorrent library to deliver a fast torrent client.",source:"@site/docs/application-hosting/applications/qbittorrent.mdx",sourceDirName:"application-hosting/applications",slug:"/application-hosting/applications/qbittorrent",permalink:"/application-hosting/applications/qbittorrent",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/applications/qbittorrent.mdx",tags:[],version:"current",frontMatter:{id:"qbittorrent",title:"qBittorrent",sidebar_label:"qBittorrent"},sidebar:"docs",previous:{title:"Deluge",permalink:"/application-hosting/applications/deluge"},next:{title:"Autodl",permalink:"/application-hosting/applications/autodl"}},u={},c=[{value:"Intital Setup",id:"intital-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Connecting to other Software:",id:"connecting-to-other-software",level:2},{value:"Connecting to a remote client (i.e. Sonarr)",id:"connecting-to-a-remote-client-ie-sonarr",level:3},{value:"Command Line",id:"command-line",level:3},{value:"qBittorrent CLI",id:"qbittorrent-cli",level:4},{value:"Installation",id:"installation",level:5},{value:"qbittools",id:"qbittools",level:4},{value:"Installation",id:"installation-1",level:5},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:c};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"qBittorrent is an open-source alternative utorrent. It's written in C++ and uses Boost, Qt toolkit, and the libtorrent library to deliver a fast torrent client."),(0,r.kt)("h2",{id:"intital-setup"},"Intital Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"box install qbittorrent\n")),(0,r.kt)("p",null,"This will install a tuned qBittorrent client from HostingByDesign."),(0,r.kt)("h2",{id:"how-to-access"},"How to Access"),(0,r.kt)("p",null,"Accessing the web-gui is simple, just append /qbittorrent to the hostname you've been provisioned on. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<hostname.io>/qbittorrent/"),"."),(0,r.kt)("h2",{id:"service-management"},"Service Management"),(0,r.kt)("p",null,"Like all box configured applications, you can manage qBittorrent via SSH with box with start, stop, restart, enable and disable commands."),(0,r.kt)(o.default,{service:"qbittorrent",mdxType:"SystemdTabs"}),(0,r.kt)("h2",{id:"connecting-to-other-software"},"Connecting to other Software:"),(0,r.kt)("h3",{id:"connecting-to-a-remote-client-ie-sonarr"},"Connecting to a remote client (i.e. Sonarr)"),(0,r.kt)("p",null,"Open up the web-gui, as listed above. Click the settings gear icon located in the top left menu. Click Web UI, then copy the port number listed."),(0,r.kt)("p",null,"You can now connect to your qBittorrent instance through ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<hostname.io>:<qbittorrent-port>")," with normal qbittorrent authenication measures rather than nginx-forwarded plain http authenticaiton."),(0,r.kt)("h3",{id:"command-line"},"Command Line"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These tools are not officially supported. Please consider reaching out to ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/wv67teS"},"our Discord")," for unofficial community-driven support on tools listed below.")),(0,r.kt)("p",null,"Some of our community members have written CLI interfaces for qBittorrent. We've included them below, along with install methods for each."),(0,r.kt)("h4",{id:"qbittorrent-cli"},"qBittorrent CLI"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ludviglundgren/qbittorrent-cli"},"qBittorrent CLI")," is a very powerful CLI written in go. You can read about it's features in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fedarovich/qbittorrent-cli/wiki/command-reference"},"command reference"),". Essentially, it can"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add torrents to qBittorrent from file or magnet link. Useful in combination with autodl-irssi"),(0,r.kt)("li",{parentName:"ul"},"Reannounce torrents for troublesome trackers"),(0,r.kt)("li",{parentName:"ul"},"Set limits on how many simultaneously active downloads are allowed"),(0,r.kt)("li",{parentName:"ul"},"Import torrents with state from Deluge and rTorrent")),(0,r.kt)("h5",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl $(curl -sNL https://api.github.com/repos/ludviglundgren/qbittorrent-cli/releases/latest | grep -Po 'ht(.*)linux_amd64(.*)tar.gz') -L -o /tmp/qbittorrent-cli.tar.gz\ntar -xvf /tmp/qbittorrent-cli.tar.gz --exclude={CHANGELOG.md,README.md} -C ~/bin/\n")),(0,r.kt)("h4",{id:"qbittools"},"qbittools"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/AlexKM/qbittools"},"qbittools")," is a feature rich CLI for the management of torrents. Detailed examples of how to use the tools are in the ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/AlexKM/qbittools/-/blob/master/README.md#usage"},"Readme"),". Some features are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adding"),(0,r.kt)("li",{parentName:"ul"},"Unpausing torrents"),(0,r.kt)("li",{parentName:"ul"},"Automatic Tagging of all torrents"),(0,r.kt)("li",{parentName:"ul"},"Exporting torrents.")),(0,r.kt)("h5",{id:"installation-1"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Ls https://gitlab.com/AlexKM/qbittools/-/raw/master/install.sh | bash -s -- -o ~/bin/qbittools\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"qBittorrent can be troubleshooted by checking the logs. If you need help connecting to the server, please read the help article ",(0,r.kt)("a",{parentName:"p",href:"/application-hosting/getting-started/how-do-i-connect"},"here"),". You can view the log by SSHing into your server and running the following:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"less -r +G ~/.local/share/qBittorrent/logs/qbittorrent.log\n")),(0,r.kt)("p",{parentName:"admonition"},"To exit ",(0,r.kt)("inlineCode",{parentName:"p"},"less"),", press ",(0,r.kt)("inlineCode",{parentName:"p"},"q"),".")))}d.isMDXComponent=!0},5532:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905)),o=n(4866),i=n(5162),l=n(814);const s={},u=void 0,c={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function b(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"code"},(0,r.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"status",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"start",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"stop",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"restart",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"enable",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(i.Z,{value:"disable",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);