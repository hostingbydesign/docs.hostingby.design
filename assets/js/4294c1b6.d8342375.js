"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[3670,8587],{5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),o=a(4334),r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(3117),o=a(7294),r=a(4334),i=a(2466),s=a(6550),l=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,u]=b({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=l??d;return m({value:e,tabValues:r})?e:null})();(0,o.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var f=a(2389),g="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(d(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",k,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g)},o.createElement(v,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return o.createElement(w,(0,n.Z)({key:String(t)},e))}},6148:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=a(3117),o=(a(7294),a(3905)),r=a(2076),i=a(5532);const s={id:"ombi",title:"Ombi",sidebar_label:"Ombi"},l=void 0,u={unversionedId:"application-hosting/applications/ombi",id:"application-hosting/applications/ombi",title:"Ombi",description:"Ombi is a self-hosted web application that automatically gives your shared Plex or Emby users the ability to request content by themselves! Ombi can be linked to multiple TV Show and Movie DVR tools to create a seamless end-to-end experience for your users.",source:"@site/docs/application-hosting/applications/ombi.mdx",sourceDirName:"application-hosting/applications",slug:"/application-hosting/applications/ombi",permalink:"/application-hosting/applications/ombi",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/applications/ombi.mdx",tags:[],version:"current",frontMatter:{id:"ombi",title:"Ombi",sidebar_label:"Ombi"},sidebar:"docs",previous:{title:"nzbGet",permalink:"/application-hosting/applications/nzbget"},next:{title:"Plex",permalink:"/application-hosting/applications/plex"}},c={},d=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Connect to other clients",id:"connect-to-other-clients",level:2},{value:"Sonarr",id:"sonarr",level:3},{value:"Medusa",id:"medusa",level:3},{value:"Radarr",id:"radarr",level:3}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ombi is a self-hosted web application that automatically gives your shared Plex or Emby users the ability to request content by themselves! Ombi can be linked to multiple TV Show and Movie DVR tools to create a seamless end-to-end experience for your users."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,o.kt)("a",{parentName:"p",href:"/application-hosting/getting-started/how-do-i-connect"},"here"),"."),(0,o.kt)("p",null,"Installing Ombi is easy. Simply issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"box install ombi\n")),(0,o.kt)("p",null,"This command will configure ombi for your user."),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"After installation, Ombi will be availabe at the following web address: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.io>/<username>/ombi")),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"Like all box configured applications, you can manage Ombi via SSH with box with start, stop, restart, enable and disable commands."),(0,o.kt)(i.default,{service:"ombi",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"On the first run of Ombi, there will be a brief setup wizard. In order to configure Ombi with Plex, simply choose Plex from the media server options and login to your account with your ",(0,o.kt)("strong",{parentName:"p"},"plex")," username and password. Ombi should now automatically be configured for use with the Plex instance on your server."),(0,o.kt)("p",null,"If you have further questions about settings and configurations of Ombi, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tidusjar/Ombi/wiki"},"Ombi Wiki"),"."),(0,o.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,o.kt)(r.default,{mdxType:"Subnet"}),(0,o.kt)("h3",{id:"sonarr"},"Sonarr"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select Sonarr from the TV Dropdown under settings."),(0,o.kt)("li",{parentName:"ol"},"In order to configure Sonarr, you must first have a root folder setup. If you haven't set up any root folders in Sonarr, please add a show and setup your Sonarr root show directory first."),(0,o.kt)("li",{parentName:"ol"},"Use the following configuration:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Enable: checked\nHostname or IP: <subnet IP>\nPort: <Sonarr port>\nAPI Key: <API key from dashboard>\nBase URL: sonarr\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Load Qualities")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Load Folders"),". Your settings should load successfully."),(0,o.kt)("li",{parentName:"ol"},"Choose your default quality and folder settings for shows added through Ombi."),(0,o.kt)("li",{parentName:"ol"},"Submit")),(0,o.kt)("h3",{id:"medusa"},"Medusa"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select SickRage from the TV Dropdown under settings."),(0,o.kt)("li",{parentName:"ol"},"Use the following configuration:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Enable: checked\nHostname or IP: <subnet IP>\nPort: <your medusa port>\nAPI Key: <your medusa API key>\nBase URL: medusa\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Choose a default quality profile."),(0,o.kt)("li",{parentName:"ol"},"Submit")),(0,o.kt)("h3",{id:"radarr"},"Radarr"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select Radarr from the Movie Dropdown under settings."),(0,o.kt)("li",{parentName:"ol"},"In order to configure Radarr, you must first have a root folder setup. If you haven't set up any root folders in Radarr, please add a show and setup your Sonarr root show directory first."),(0,o.kt)("li",{parentName:"ol"},"Use the following configuration:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Enable: checked\nHostname or IP: <subnet IP>\nPort: <Radarr port>\nAPI Key: <API key from dashboard>\nBase URL: radarr\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Load Qualities")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Load Folders"),". Your settings should load successfully."),(0,o.kt)("li",{parentName:"ol"},"Choose your default quality and folder settings for Movies added through Ombi."),(0,o.kt)("li",{parentName:"ol"},"Submit")))}m.isMDXComponent=!0},2076:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var n=a(3117),o=(a(7294),a(3905));const r={},i=void 0,s={unversionedId:"application-hosting/snippets/subnet",id:"application-hosting/snippets/subnet",title:"subnet",description:"To get your subnet IP, SSH into your server and run:",source:"@site/docs/application-hosting/snippets/subnet.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/subnet",permalink:"/application-hosting/snippets/subnet",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/subnet.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[],c={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To get your subnet IP, SSH into your server and run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.install/subnet.lock\n"))))}d.isMDXComponent=!0},5532:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(3117),o=(a(7294),a(3905)),r=a(4866),i=a(5162),s=a(814);const l={},u=void 0,c={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(r.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(i.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(i.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(i.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(i.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(i.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);