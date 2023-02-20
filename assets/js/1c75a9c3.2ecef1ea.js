"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),p=o,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},86476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:3,sidebar_label:"SeedLink Server"},l="SeedLink Server",i={unversionedId:"grillo-console/modules/data_management_modules/seedlink_server",id:"grillo-console/modules/data_management_modules/seedlink_server",title:"SeedLink Server",description:"This module captures all data from the Ingest Module stream and publishes it as a SeedLink Server. This can be used to relay the data stream from the cloud to a local server.",source:"@site/docs/grillo-console/modules/data_management_modules/seedlink_server.md",sourceDirName:"grillo-console/modules/data_management_modules",slug:"/grillo-console/modules/data_management_modules/seedlink_server",permalink:"/docs/grillo-console/modules/data_management_modules/seedlink_server",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-console/modules/data_management_modules/seedlink_server.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"SeedLink Server"},sidebar:"tutorialSidebar",previous:{title:"Archive Data Stream",permalink:"/docs/grillo-console/modules/data_management_modules/archive_data"},next:{title:"Technical Computing",permalink:"/docs/category/technical-computing"}},s={},d=[{value:"Configuration",id:"configuration",level:3}],c={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seedlink-server"},"SeedLink Server"),(0,o.kt)("p",null,"This module captures all data from the Ingest Module stream and publishes it as a SeedLink Server. This can be used to relay the data stream from the cloud to a local server."),(0,o.kt)("mermaid",{value:"flowchart TB\n   A([Ingest Module])--\x3e|Data Stream| Cp([<font color=333333><b>SeedLink Server</b>]) --\x3e id1[Local Server]\n   style Cp fill:#99CCFF"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To find the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ip Address")," (Host Address) and ",(0,o.kt)("inlineCode",{parentName:"p"},"Port")," for this new SeedLink Server, open the logs for the module:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select station type",src:r(70854).Z,width:"1450",height:"757"})),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Seedlink server")),(0,o.kt)("p",null,(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Verbose")," ","[boolean]",": ",(0,o.kt)("inlineCode",{parentName:"li"},"Logs")," are printed in when set to true")))))}m.isMDXComponent=!0},70854:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/seedlink server-99e9e8ef1822ff393fb80478fda592e5.png"}}]);