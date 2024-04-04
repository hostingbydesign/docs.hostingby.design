"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[1129,8587],{5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(6010),r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(3117),l=a(7294),r=a(6010),i=a(2466),s=a(6550),o=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=o??p;return m({value:e,tabValues:r})?e:null})();(0,l.useEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var b=a(2389),y="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",g,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",y)},l.createElement(v,(0,n.Z)({},e,t)),l.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return l.createElement(T,(0,n.Z)({key:String(t)},e))}},9748:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var n=a(3117),l=(a(7294),a(3905)),r=a(5532);const i={id:"jellyfin",title:"Jellyfin",sidebar_label:"Jellyfin"},s=void 0,o={unversionedId:"application-hosting/applications/jellyfin",id:"application-hosting/applications/jellyfin",title:"Jellyfin",description:"Jellyfin is a self-hosted AV streaming platform. It is a FOSS fork of the Emby project.",source:"@site/docs/application-hosting/applications/jellyfin.mdx",sourceDirName:"application-hosting/applications",slug:"/application-hosting/applications/jellyfin",permalink:"/application-hosting/applications/jellyfin",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/applications/jellyfin.mdx",tags:[],version:"current",frontMatter:{id:"jellyfin",title:"Jellyfin",sidebar_label:"Jellyfin"},sidebar:"docs",previous:{title:"Jackett",permalink:"/application-hosting/applications/jackett"},next:{title:"Lidarr",permalink:"/application-hosting/applications/lidarr"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Access",id:"access",level:2},{value:"Library management",id:"library-management",level:2},{value:"User management",id:"user-management",level:2},{value:"Service management",id:"service-management",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Jellyfin is a self-hosted AV streaming platform. It is a FOSS fork of the Emby project."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You can install Jellyfin using the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo box install jellyfin\n")),(0,l.kt)("admonition",{title:"Finish install in browser",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Please make sure to finish the setup of the application through the web browser, and create your admin user.")),(0,l.kt)("h2",{id:"access"},"Access"),(0,l.kt)("p",null,"You can access jellyfin through ",(0,l.kt)("inlineCode",{parentName:"p"},"https://appxx.lw.hostingby.design/<yourusername>/jellyfin"),"."),(0,l.kt)("h2",{id:"library-management"},"Library management"),(0,l.kt)("p",null,"By default, you home directory will be mounted in Jellyfin as ",(0,l.kt)("inlineCode",{parentName:"p"},"/data/"),". There you will find all of the files from your home directory. If you setup an application like l3uddz autoscan with the *arrs, you may need to use a ",(0,l.kt)("inlineCode",{parentName:"p"},"rewrite rule")," to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"/home/username")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"/data"),"."),(0,l.kt)("h2",{id:"user-management"},"User management"),(0,l.kt)("p",null,"Jellyfin manages its users in a separate database. Please use the Web-UI to manage users and media."),(0,l.kt)("h2",{id:"service-management"},"Service management"),(0,l.kt)(r.default,{service:"jellyfin",mdxType:"SystemdTabs"}),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,'If you were early-access to the apprange and have been experiencing issues with Jellyfin, please change your transcode hardware acceleration to "none".'),(0,l.kt)("p",null,"Jellyfin has a general ",(0,l.kt)("a",{parentName:"p",href:"https://jellyfin.org/docs/general/administration/troubleshooting.html"},"Troubleshooting guide")," which we highly suggest you follow first in case you have any issues."),(0,l.kt)("p",null,"If you recently reinstalled Jellyfin, you may need to clear your cookies and cache for your appbox url to properly access the web interface."),(0,l.kt)("p",null,"If all else fails, consider putting in a ",(0,l.kt)("a",{parentName:"p",href:"https://my.hostingby.design/submitticket.php?step=2&deptid=2"},"ticket"),"."))}d.isMDXComponent=!0},5532:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=a(3117),l=(a(7294),a(3905)),r=a(4866),i=a(5162),s=a(814);const o={},u=void 0,c={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"code"},(0,l.kt)(r.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"status",mdxType:"TabItem"},(0,l.kt)(s.Z,{children:"box status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(i.Z,{value:"start",mdxType:"TabItem"},(0,l.kt)(s.Z,{children:"box start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(i.Z,{value:"stop",mdxType:"TabItem"},(0,l.kt)(s.Z,{children:"box stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(i.Z,{value:"restart",mdxType:"TabItem"},(0,l.kt)(s.Z,{children:"box restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(i.Z,{value:"enable",mdxType:"TabItem"},(0,l.kt)(s.Z,{children:"box enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,l.kt)(i.Z,{value:"disable",mdxType:"TabItem"},(0,l.kt)(s.Z,{children:"box disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}h.isMDXComponent=!0}}]);