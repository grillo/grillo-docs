"use strict";(self.webpackChunkgrillo_docs=self.webpackChunkgrillo_docs||[]).push([[8744],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(r),p=a,f=u["".concat(s,".").concat(p)]||u[p]||c[p]||o;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,sidebar_label:"Ingest Data"},l="Ingest Data module",i={unversionedId:"grillo-console/modules/data management modules/Ingest Data module",id:"grillo-console/modules/data management modules/Ingest Data module",title:"Ingest Data module",description:"This module is typically enabled by default. It consumes data in real-time from your Grillo sensor or SeedLink server, converts it to MiniSeed format, and makes it available to other modules as a data stream.",source:"@site/docs/grillo-console/modules/data management modules/Ingest Data module.md",sourceDirName:"grillo-console/modules/data management modules",slug:"/grillo-console/modules/data management modules/Ingest Data module",permalink:"/grillo-console/modules/data management modules/Ingest Data module",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Ingest Data"},sidebar:"defaultSidebar",previous:{title:"Data Management Modules",permalink:"/category/data-management-modules"},next:{title:"Archive Data Stream Module",permalink:"/grillo-console/modules/data management modules/Archive Data Stream Module"}},s={},m=[],d={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ingest-data-module"},"Ingest Data module"),(0,a.kt)("p",null,"This module is typically enabled by default. It consumes data in real-time from your Grillo sensor or SeedLink server, converts it to ",(0,a.kt)("inlineCode",{parentName:"p"},"MiniSeed")," format, and makes it available to other modules as a data stream."),(0,a.kt)("mermaid",{value:"flowchart LR\n   A([Grillo Sensor]) & B([SeedLink Server])--\x3e Cp[[Ingest Data Module]]\n   style Cp fill:#f9f"}))}u.isMDXComponent=!0}}]);