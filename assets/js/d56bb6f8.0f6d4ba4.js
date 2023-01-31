"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[9286],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9314:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(3117),o=(r(7294),r(3905));const i={id:"kodi",title:"How to stream via Kodi/XBMC",sidebar_label:"Stream via Kodi/XBMC"},a=void 0,s={unversionedId:"shared-storage/applications/kodi",id:"shared-storage/applications/kodi",title:"How to stream via Kodi/XBMC",description:"With these instructions, you can easily stream the content from your seedbox via Kodi/XBMC.",source:"@site/docs/shared-storage/applications/kodi.mdx",sourceDirName:"shared-storage/applications",slug:"/shared-storage/applications/kodi",permalink:"/shared-storage/applications/kodi",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/docs/shared-storage/applications/kodi.mdx",tags:[],version:"current",frontMatter:{id:"kodi",title:"How to stream via Kodi/XBMC",sidebar_label:"Stream via Kodi/XBMC"},sidebar:"docs",previous:{title:"ruTorrent plugins",permalink:"/shared-storage/applications/rutorrent-plugins"},next:{title:"Transdroid/Transdrone",permalink:"/shared-storage/applications/transdroid"}},l={},c=[],d={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With these instructions, you can easily stream the content from your seedbox via Kodi/XBMC."),(0,o.kt)("p",null,"Steps to set it up:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select Videos in the Kodi main menu"),(0,o.kt)("li",{parentName:"ol"},"Select 'Files'"),(0,o.kt)("li",{parentName:"ol"},"Select 'Add Videos...'"),(0,o.kt)("li",{parentName:"ol"},"Click the 'Browse' button"),(0,o.kt)("li",{parentName:"ol"},"Select 'Add network location...' in the bottom"),(0,o.kt)("li",{parentName:"ol"},"Fill out the fields as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Protocol: Web server directory (HTTPS)\nServer address:\xa0XXX.hostingby.design\xa0(XXX is to be replaced with your seedbox username)\nRemote path: files\nUsername: <seedbox username>\nPassword: <seedbox password>\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Once filled out, click 'OK'"),(0,o.kt)("li",{parentName:"ol"},"In the 'Enter a name for this media source', you can give source a description name such as 'Seedbox files'. Once done click the 'OK' button")),(0,o.kt)("p",null,"Now the 'Seedbox files' should appear as a file entry in the video source list. Simply click it, and you will have a complete view of the content of your seedbox."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTES FOR USERS WITH BUFFERING")),(0,o.kt)("p",null,"In some cases you see short periods of buffering, the reason for this is that KODI is not caching any data but simply streaming as it needs to."),(0,o.kt)("p",null,"Sometimes you will have scenes where the need for data is higher than the speed you can download new material from the server, in those cases buffering will occur, to get around this it is possible to let KODI cache more data to avoid buffering in scenes which require a higher bandwidth."),(0,o.kt)("p",null,"You can read more about how to do it on the KODI website here:\xa0",(0,o.kt)("a",{parentName:"p",href:"http://kodi.wiki/view/HOW-TO:Modify_the_video_cache"},"http://kodi.wiki/view/HOW-TO:Modify_the_video_cache")))}u.isMDXComponent=!0}}]);