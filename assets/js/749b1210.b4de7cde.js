"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[6779],{5162:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),s=a(4334),n="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(n,l),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(3117),s=a(7294),n=a(4334),l=a(2466),u=a(6550),o=a(1980),i=a(7392),c=a(12);function d(e){return function(e){return s.Children.map(e,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:s}}=e;return{value:t,label:a,attributes:r,default:s}}))}function p(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=p(e),[l,u]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[o,i]=m({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,c.Nk)(a);return[r,(0,s.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),h=(()=>{const e=o??d;return b({value:e,tabValues:n})?e:null})();(0,s.useEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!b({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,n]),tabValues:n}}var h=a(2389),v="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==u&&(d(t),o(r))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:p},l,{className:(0,n.Z)("tabs__item",y,l?.className,{"tabs__item--active":u===t})}),a??t)})))}function T(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=f(e);return s.createElement("div",{className:(0,n.Z)("tabs-container",v)},s.createElement(k,(0,r.Z)({},e,t)),s.createElement(T,(0,r.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return s.createElement(g,(0,r.Z)({key:String(t)},e))}},432:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=a(3117),s=(a(7294),a(3905)),n=a(4866),l=a(5162),u=a(814);const o={},i=void 0,c={unversionedId:"appslots/snippets/systemdtabs",id:"appslots/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/appslots/snippets/systemdtabs.mdx",sourceDirName:"appslots/snippets",slug:"/appslots/snippets/systemdtabs",permalink:"/appslots/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/docs/appslots/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],b={toc:p};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"code"},(0,s.kt)(n.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,s.kt)(u.Z,{children:"box status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,s.kt)(u.Z,{children:"box start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,s.kt)(u.Z,{children:"box stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,s.kt)(u.Z,{children:"box restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,s.kt)(u.Z,{children:"box enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,s.kt)(u.Z,{children:"box disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0}}]);