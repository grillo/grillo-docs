"use strict";(self.webpackChunkgrillo_docs=self.webpackChunkgrillo_docs||[]).push([[3602],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(t),p=o,f=c["".concat(s,".").concat(p)]||c[p]||m[p]||a;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3831:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3,sidebar_label:"SeedLink Server"},l="SeedLink Server Module",i={unversionedId:"grillo-console/modules/data management modules/SeedLink Server",id:"grillo-console/modules/data management modules/SeedLink Server",title:"SeedLink Server Module",description:"This module captures all data from the Ingest Module stream and publishes it as a SeedLink Server. This can be used to relay the data stream from the cloud to an on-premise server.",source:"@site/docs/grillo-console/modules/data management modules/SeedLink Server.md",sourceDirName:"grillo-console/modules/data management modules",slug:"/grillo-console/modules/data management modules/SeedLink Server",permalink:"/grillo-console/modules/data management modules/SeedLink Server",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"SeedLink Server"},sidebar:"defaultSidebar",previous:{title:"Archive Data Stream Module",permalink:"/grillo-console/modules/data management modules/Archive Data Stream Module"},next:{title:"Seismology Modules",permalink:"/category/seismology-modules"}},s={},d=[],u={toc:d};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seedlink-server-module"},"SeedLink Server Module"),(0,o.kt)("p",null,"This module captures all data from the Ingest Module stream and publishes it as a SeedLink Server. This can be used to relay the data stream from the cloud to an on-premise server."),(0,o.kt)("mermaid",{value:"flowchart LR\n   B[Ingest Module]--\x3e Cp[[SeedLink Server Module]] --\x3e id1[Local Server]"}))}c.isMDXComponent=!0}}]);