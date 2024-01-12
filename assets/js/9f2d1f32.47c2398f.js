"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[5837,8587],{5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),o=a(6010),r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(3117),o=a(7294),r=a(6010),i=a(2466),s=a(6550),l=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,u]=h({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=l??d;return m({value:e,tabValues:r})?e:null})();(0,o.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var f=a(2389),g="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(d(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",v,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=b(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g)},o.createElement(k,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(T,(0,n.Z)({key:String(t)},e))}},4798:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=a(3117),o=(a(7294),a(3905)),r=a(5532);const i={id:"autodl",title:"Autodl",sidebar_label:"Autodl"},s=void 0,l={unversionedId:"application-hosting/applications/autodl",id:"application-hosting/applications/autodl",title:"Autodl",description:"autodl-irssi is a plugin for irssi that monitors IRC announce channels and downloads torrent files based on user-defined filters.",source:"@site/docs/application-hosting/applications/autodl.mdx",sourceDirName:"application-hosting/applications",slug:"/application-hosting/applications/autodl",permalink:"/application-hosting/applications/autodl",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/applications/autodl.mdx",tags:[],version:"current",frontMatter:{id:"autodl",title:"Autodl",sidebar_label:"Autodl"},sidebar:"docs",previous:{title:"Autobrr",permalink:"/application-hosting/applications/autobrr"},next:{title:"rTorrent",permalink:"/application-hosting/applications/rtorrent"}},u={},c=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"autodl-irssi is a plugin for irssi that monitors IRC announce channels and downloads torrent files based on user-defined filters."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,o.kt)("a",{parentName:"p",href:"/application-hosting/getting-started/how-do-i-connect"},"here"),"."),(0,o.kt)("p",null,"Installing autodl is easy. Simply issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"box install autodl\n")),(0,o.kt)("p",null,"This command will configure autodl and the associated ruTorrent plugin."),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"Autodl is a plugin for the console IRC client, ",(0,o.kt)("inlineCode",{parentName:"p"},"irssi"),". Thus, autodl doesn't have a graphical user interface of its own. You can either add rules with the ruTorrent plugin (the only GUI option), or write them by hand in the file: ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.autodl/autodl.cfg")),(0,o.kt)("p",null,"You can attach directly to the running irssi screen with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"screen -r irssi\n")),(0,o.kt)("p",null,"To detach again, press: ",(0,o.kt)("inlineCode",{parentName:"p"},"control-a, control-d")),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"Like all box configured applications, you can manage autodl via SSH with box with start, stop, restart, enable and disable commands."),(0,o.kt)(r.default,{service:"autodl",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Configuration options for the GUI client can be found ",(0,o.kt)("a",{parentName:"p",href:"https://code.google.com/archive/p/rutorrent/wikis/PluginAutodlirssi.wiki#Usage"},"here"),'. The options will be found under the header "Usage".'),(0,o.kt)("p",null,"If you don't want to use the ruTorrent plugin and would prefer to configure the configuration files by hand, you can read the ",(0,o.kt)("a",{parentName:"p",href:"https://autodl-community.github.io/autodl-irssi/configuration/overview/"},"autodl-irssi documentation")," for an in-depth review of the available options."))}p.isMDXComponent=!0},5532:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(3117),o=(a(7294),a(3905)),r=a(4866),i=a(5162),s=a(814);const l={},u=void 0,c={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(r.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(i.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(i.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(i.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(i.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(i.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"box disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}h.isMDXComponent=!0}}]);