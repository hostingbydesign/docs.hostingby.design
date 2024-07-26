"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[3254,8587],{5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(4334),s="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,i),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(3117),l=a(7294),s=a(4334),i=a(2466),r=a(6550),o=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[i,r]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,u]=h({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=o??p;return m({value:e,tabValues:s})?e:null})();(0,l.useEffect)((()=>{g&&r(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var g=a(2389),v="tabList__CuJ",k="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==r&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,s.Z)("tabs__item",k,i?.className,{"tabs__item--active":r===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function x(e){const t=b(e);return l.createElement("div",{className:(0,s.Z)("tabs-container",v)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return l.createElement(x,(0,n.Z)({key:String(t)},e))}},7017:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var n=a(3117),l=(a(7294),a(3905)),s=a(5532);const i={id:"box-basics",title:"Getting started with box",sidebar_label:"Getting started with box"},r=void 0,o={unversionedId:"application-hosting/getting-started/box-basics",id:"application-hosting/getting-started/box-basics",title:"Getting started with box",description:"box is a homegrown application that will help you install applications on your server and manage their services.",source:"@site/docs/application-hosting/getting-started/box-basics.mdx",sourceDirName:"application-hosting/getting-started",slug:"/application-hosting/getting-started/box-basics",permalink:"/application-hosting/getting-started/box-basics",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/getting-started/box-basics.mdx",tags:[],version:"current",frontMatter:{id:"box-basics",title:"Getting started with box",sidebar_label:"Getting started with box"},sidebar:"docs",previous:{title:"Dashboard",permalink:"/application-hosting/getting-started/dashboard"},next:{title:"Abuse handling",permalink:"/application-hosting/getting-started/abuse"}},u={},c=[{value:"Commands",id:"commands",level:2},{value:"help",id:"help",level:3},{value:"list",id:"list",level:3},{value:"install",id:"install",level:3},{value:"remove",id:"remove",level:3},{value:"chpasswd",id:"chpasswd",level:3},{value:"Service Management",id:"service-management",level:3},{value:"bw",id:"bw",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"box")," is a homegrown application that will help you install applications on your server and manage their services."),(0,l.kt)("p",null,"This is only available via ",(0,l.kt)("a",{parentName:"p",href:"./how-do-i-connect"},"SSH"),"."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("p",null,"In order to use the installer and management functions on your slot, you'll need to use the included management script: ",(0,l.kt)("inlineCode",{parentName:"p"},"box"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"box")," has several functions, which we'll go over here:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"help")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chpasswd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"service management")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bw"))),(0,l.kt)("h3",{id:"help"},"help"),(0,l.kt)("p",null,"The function of help is basic: provide you usage details on how to use box and the commands available to you."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"box help\n")),(0,l.kt)("h3",{id:"list"},"list"),(0,l.kt)("p",null,"This function lists the applications currently available for installation and a quick description of the application."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"box list\n")),(0,l.kt)("h3",{id:"install"},"install"),(0,l.kt)("p",null,"The commands used to install applications from the server. If you need help with specific commands, they are available on the application sub-pages here."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"box install rtorrent\n")),(0,l.kt)("h3",{id:"remove"},"remove"),(0,l.kt)("p",null,"The commands used to remove applications from the server. If you need help with specific commands, they are available on the application sub-pages here."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"box remove rtorrent\n")),(0,l.kt)("h3",{id:"chpasswd"},"chpasswd"),(0,l.kt)("p",null,"Use this command when you'd like to change your password. ",(0,l.kt)("inlineCode",{parentName:"p"},"chpasswd")," will change the password for SSH, FTP, HTTP and all officially supported applications."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"box chpasswd\n")),(0,l.kt)("h3",{id:"service-management"},"Service Management"),(0,l.kt)("p",null,"You can manipulate service status with ",(0,l.kt)("inlineCode",{parentName:"p"},"start/stop/restart/enble/disable"),". These commands will send the info straight to ",(0,l.kt)("inlineCode",{parentName:"p"},"systemctl"),"."),(0,l.kt)(s.default,{service:"wireguard",mdxType:"SystemdTabs"}),(0,l.kt)("h3",{id:"bw"},"bw"),(0,l.kt)("p",null,"You can get a picture of your current bandwidth usage for the month with this command."),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"box bw\n")))}d.isMDXComponent=!0},5532:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=a(3117),l=(a(7294),a(3905)),s=a(4866),i=a(5162),r=a(814);const o={},u=void 0,c={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"code"},(0,l.kt)(s.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"status",mdxType:"TabItem"},(0,l.kt)(r.Z,{children:"box status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(i.Z,{value:"start",mdxType:"TabItem"},(0,l.kt)(r.Z,{children:"box start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(i.Z,{value:"stop",mdxType:"TabItem"},(0,l.kt)(r.Z,{children:"box stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(i.Z,{value:"restart",mdxType:"TabItem"},(0,l.kt)(r.Z,{children:"box restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(i.Z,{value:"enable",mdxType:"TabItem"},(0,l.kt)(r.Z,{children:"box enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(i.Z,{value:"disable",mdxType:"TabItem"},(0,l.kt)(r.Z,{children:"box disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}h.isMDXComponent=!0}}]);