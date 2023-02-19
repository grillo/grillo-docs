"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4,sidebar_label:"Archive Data"},i="Archive Data",c={unversionedId:"how-to/archive_data",id:"how-to/archive_data",title:"Archive Data",description:"You can simply archive all sensor data and use them for your own analysis. The archived data can be accessed in Download Manager tab in the Event section.",source:"@site/docs/how-to/archive_data.md",sourceDirName:"how-to",slug:"/how-to/archive_data",permalink:"/docs/how-to/archive_data",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/how-to/archive_data.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Archive Data"},sidebar:"tutorialSidebar",previous:{title:"Advanced Structural Monitoring Solution",permalink:"/docs/how-to/advanced_structural_monitoring"},next:{title:"Redirect Data Flow",permalink:"/docs/how-to/redirect_data"}},l={},s=[],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"archive-data"},"Archive Data"),(0,a.kt)("p",null,"You can simply archive all sensor data and use them for your own analysis. The archived data can be accessed in ",(0,a.kt)("inlineCode",{parentName:"p"},"Download Manager")," tab in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Event")," section."),(0,a.kt)("mermaid",{value:"flowchart TB\n   A[Grillo Sensor] & B[SeedLink Sensor] --\x3e C([<font color=333333><b>Ingest Data</b>]) --\x3e D([<font color=333333><b>Data Archive</b>]) --\x3e E[(Archive)] --\x3e F[Query archive in Data Manager]\n   style C fill:#99CCFF\n   style D fill:#99CCFF"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ingest Data")," module ingests data from Grillo Sensors and prepares them from processing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Data Archive")," module archives data in MSEED format")))}u.isMDXComponent=!0}}]);