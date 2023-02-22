"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),u=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(r),p=n,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return r?l.createElement(f,i(i({ref:t},c),{},{components:r})):l.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:n,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}p.displayName="MDXCreateElement"},42751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var l=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1,sidebar_label:"Alerts"},i="Alerts",a={unversionedId:"grillo-console/modules/alert modules/alerts",id:"grillo-console/modules/alert modules/alerts",title:"Alerts",description:"Alerts module distributes alerts to via various channels. Currently implemented channels include publishing to Twitter or Email. Let us know if you are interested in implementation of other publishing channels.",source:"@site/docs/grillo-console/modules/alert modules/alerts.md",sourceDirName:"grillo-console/modules/alert modules",slug:"/grillo-console/modules/alert modules/alerts",permalink:"/docs/grillo-console/modules/alert modules/alerts",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-console/modules/alert modules/alerts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Alerts"},sidebar:"tutorialSidebar",previous:{title:"Structural Health Monitoring",permalink:"/docs/grillo-console/modules/technical_computing/shm"},next:{title:"Relay Control",permalink:"/docs/grillo-console/modules/alert modules/relay_control"}},s={},u=[{value:"Configuration",id:"configuration",level:3}],c={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"alerts"},"Alerts"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Alerts")," module distributes alerts to via various channels. Currently implemented channels include publishing to Twitter or Email. Let us know if you are interested in implementation of other publishing channels."),(0,n.kt)("mermaid",{value:"flowchart TB\n   B([Other Modules])--\x3e|Alert| C([<font color=333333><b>Alerts</b>]) --\x3e D[Twitter] & E[Email]\n   style C fill:#99CCFF"}),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"General")),(0,n.kt)("p",null,(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Verbose")," ","[boolean]",": If true, ",(0,n.kt)("inlineCode",{parentName:"li"},"Logs")," are printed out")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Twitter alert")),(0,n.kt)("p",null,(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Send alert")," ","[boolean]",": If set to true, alert message id going to be published on Twitter"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Consumer key")," ","[string]",": Twitter API consumer key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Consumer secret")," ","[string]",": Twitter API consumer secret"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Access token")," ","[string]",": Twitter API access token"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Access token secret")," ","[string]",": Twitter API access token secret")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Email alert")),(0,n.kt)("p",null,(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Send alert")," ","[boolean]",": If set to true, alert message id going to be delivered via email"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"List of addressees")," ","[list]",": Comma separated list of e-mail addresses ")))))}d.isMDXComponent=!0}}]);