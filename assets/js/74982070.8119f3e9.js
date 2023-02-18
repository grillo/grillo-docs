"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[506],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>b});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return o?n.createElement(b,l(l({ref:t},s),{},{components:o})):n.createElement(b,l({ref:t},s))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<r;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},40272:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const r={sidebar_position:6,sidebar_label:"Public Earthquake Catalog"},l="Public Earthquake Catalog",c={unversionedId:"grillo-console/modules/technical_computing/public_catalogue",id:"grillo-console/modules/technical_computing/public_catalogue",title:"Public Earthquake Catalog",description:"The module enables you to obtain any seismic catalogue available via the FDSN service. The module updates the catalogue periodically and creates Event and Alert (optionally) objects that can be used by subsequent modules.",source:"@site/docs/grillo-console/modules/technical_computing/public_catalogue.md",sourceDirName:"grillo-console/modules/technical_computing",slug:"/grillo-console/modules/technical_computing/public_catalogue",permalink:"/docs/grillo-console/modules/technical_computing/public_catalogue",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-console/modules/technical_computing/public_catalogue.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Public Earthquake Catalog"},sidebar:"tutorialSidebar",previous:{title:"Event location and magnitude calculation: GaMMA method",permalink:"/docs/grillo-console/modules/technical_computing/location_gamma"},next:{title:"Structural Health Monitoring",permalink:"/docs/grillo-console/modules/technical_computing/shm"}},i={},u=[],s={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"public-earthquake-catalog"},"Public Earthquake Catalog"),(0,a.kt)("p",null,"The module enables you to obtain any seismic catalogue available via the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.obspy.org/packages/obspy.clients.fdsn.html"},"FDSN service"),". The module updates the catalogue periodically and creates ",(0,a.kt)("inlineCode",{parentName:"p"},"Event")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Alert")," (optionally) objects that can be used by subsequent modules. "),(0,a.kt)("mermaid",{value:"flowchart TB\n   B([Public Earthquake Catalog])--\x3e|Event, Alert| C([Other Modules])\n   style B fill:#1b62d4"}))}d.isMDXComponent=!0}}]);