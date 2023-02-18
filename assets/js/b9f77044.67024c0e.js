"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=n,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64920:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:2,sidebar_label:"Archive Data Stream"},i="Archive Data Stream",l={unversionedId:"grillo-console/modules/data_management_modules/archive_data",id:"grillo-console/modules/data_management_modules/archive_data",title:"Archive Data Stream",description:"This module captures all data from the Ingest Module stream and stores it in an archive, ready for future analysis or downloading.",source:"@site/docs/grillo-console/modules/data_management_modules/archive_data.md",sourceDirName:"grillo-console/modules/data_management_modules",slug:"/grillo-console/modules/data_management_modules/archive_data",permalink:"/docs/grillo-console/modules/data_management_modules/archive_data",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-console/modules/data_management_modules/archive_data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Archive Data Stream"},sidebar:"tutorialSidebar",previous:{title:"Ingest Data",permalink:"/docs/grillo-console/modules/data_management_modules/ingest_data"},next:{title:"SeedLink Server",permalink:"/docs/grillo-console/modules/data_management_modules/seedlink_server"}},s={},c=[],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"archive-data-stream"},"Archive Data Stream"),(0,n.kt)("p",null,"This module captures all data from the Ingest Module stream and stores it in an archive, ready for future analysis or downloading.\nBy default, data is archived in counts. In configuration you can remove the effect of the instrument response or sensitivity and archive data in acceleration or velocity units."),(0,n.kt)("mermaid",{value:"flowchart TB\n   B([Ingest Data])--\x3e|Data Stream| Cp([Archive Data]) --\x3e id1[(Archive)]\n   style Cp fill:#1b62d4"}))}u.isMDXComponent=!0}}]);