"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[5125,8587],{5162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),o=n(4334),i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(3117),o=n(7294),i=n(4334),r=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??p;return h({value:e,tabValues:i})?e:null})();(0,o.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var f=n(2389),g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},r,{className:(0,i.Z)("tabs__item",v,r?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",g)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},1943:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var a=n(3117),o=(n(7294),n(3905)),i=n(5532);const r={id:"lounge",title:"The Lounge",sidebar_label:"Lounge"},s=void 0,l={unversionedId:"application-hosting/applications/lounge",id:"application-hosting/applications/lounge",title:"The Lounge",description:"The Lounge is self-hosted web IRC client for the modern world.",source:"@site/docs/application-hosting/applications/lounge.mdx",sourceDirName:"application-hosting/applications",slug:"/application-hosting/applications/lounge",permalink:"/application-hosting/applications/lounge",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/applications/lounge.mdx",tags:[],version:"current",frontMatter:{id:"lounge",title:"The Lounge",sidebar_label:"Lounge"},sidebar:"docs",previous:{title:"Lidarr",permalink:"/application-hosting/applications/lidarr"},next:{title:"Medusa",permalink:"/application-hosting/applications/medusa"}},u={},c=[{value:"How to Access",id:"how-to-access",level:2},{value:"Adding IRC Server",id:"adding-irc-server",level:2},{value:"Service Management",id:"service-management",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Lounge is self-hosted web IRC client for the modern world."),(0,o.kt)("admonition",{title:"Due to unforseen issues we've had to pull support for this app temporarily until we have resolved the problems :::",type:"caution"},(0,o.kt)("h2",{parentName:"admonition",id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",{parentName:"admonition"},"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,o.kt)("a",{parentName:"p",href:"/application-hosting/getting-started/how-do-i-connect"},"here"),"."),(0,o.kt)("p",{parentName:"admonition"},"Installing The Lounge on your slot is easy. Simply issue the following command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"box install thelounge\n")),(0,o.kt)("p",{parentName:"admonition"},"Installation will take a few moments. Once it's done, you'll receive a notice that the installation is complete and the installer will let you know where you can access the application. For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://app02.hostingby.design/thelounge"),".\nA link to access the application will also appear in your Swizzin Panel.")),(0,o.kt)("p",null,'Upgrading your The Lounge instance is a simple process, login to the webui/dashboard we provide for your service, find the "Service info" section in the page you are presented with, from there simply click "Restart" next to The Lounge, that will restart the app and also check for updates, please note that we are usually 2-3 days behind on updates!\n:::'),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"You can access The Lounge by clicking the link in your Swizzin Panel. If you require the personalized port The Lounge runs for you, you can get it with this command:\n",(0,o.kt)("inlineCode",{parentName:"p"},"cat ~/.install/.thelounge.lock")),(0,o.kt)("h2",{id:"adding-irc-server"},"Adding IRC Server"),(0,o.kt)("p",null,"On your first login you will be presented with a screen where you can add IRC Servers and Channels to join.\nSimply add the Server, for example irc.libera.chat, the port and possible password.\nThen fill in the Nick, Nickname and Channels you wish to join, for example #thelounge."),(0,o.kt)("p",null,"After you have filled in the necessary information, just click Connect.  You can add multiple servers and channels, which will then be displayed on the left hand side of the screen."),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"Like all box configured applications, you can manage The Lounge via SSH with box with start, stop, restart, enable and disable commands."),(0,o.kt)(i.default,{service:"thelounge",mdxType:"SystemdTabs"}))}d.isMDXComponent=!0},5532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(3117),o=(n(7294),n(3905)),i=n(4866),r=n(5162),s=n(814);const l={},u=void 0,c={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],h={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(r.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(r.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(r.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(r.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(r.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0}}]);