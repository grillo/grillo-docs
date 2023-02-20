"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:20,sidebar_label:"Console"},i="Console",l={unversionedId:"faq/console",id:"faq/console",title:"Console",description:"This module captures all data from the Ingest Module stream and stores it in an archive, ready for future analysis or downloading.",source:"@site/docs/faq/console.md",sourceDirName:"faq",slug:"/faq/console",permalink:"/docs/faq/console",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/faq/console.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Console"},sidebar:"tutorialSidebar",previous:{title:"Stations",permalink:"/docs/faq/stations"},next:{title:"Billing",permalink:"/docs/faq/billing"}},s={},c=[{value:"Configuration",id:"configuration",level:3}],u={toc:c},f="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"console"},"Console"),(0,o.kt)("p",null,"This module captures all data from the Ingest Module stream and stores it in an archive, ready for future analysis or downloading.\nBy default, data is archived in counts. In configuration you can remove the effect of the instrument response or sensitivity and archive data in acceleration or velocity units."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Archive")),(0,o.kt)("p",null,(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Verbose")," ","[boolean]",": If true, ",(0,o.kt)("inlineCode",{parentName:"li"},"Logs")," are printed out")))))}p.isMDXComponent=!0}}]);