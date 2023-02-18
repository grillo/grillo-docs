"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,f=u["".concat(l,".").concat(k)]||u[k]||p[k]||i;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=k;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var d=2;d<i;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},99331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4,sidebar_label:"Add SeedLink stations"},s="Add SeedLink stations",a={unversionedId:"grillo-console/stations/add-seedlink-stations",id:"grillo-console/stations/add-seedlink-stations",title:"Add SeedLink stations",description:"You are able to add any SeedLink station to Grillo Console.",source:"@site/docs/grillo-console/stations/add-seedlink-stations.md",sourceDirName:"grillo-console/stations",slug:"/grillo-console/stations/add-seedlink-stations",permalink:"/docs/grillo-console/stations/add-seedlink-stations",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-console/stations/add-seedlink-stations.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Add SeedLink stations"},sidebar:"tutorialSidebar",previous:{title:"Configure Grillo Sensors",permalink:"/docs/grillo-console/stations/configure-grillo-sensors"},next:{title:"Modules",permalink:"/docs/category/modules"}},l={},d=[{value:"Add to SeedLink to Grillo Console",id:"add-to-seedlink-to-grillo-console",level:2},{value:"Configure SeedLink Server",id:"configure-seedlink-server",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-seedlink-stations"},"Add SeedLink stations"),(0,r.kt)("p",null,"You are able to add any SeedLink station to Grillo Console."),(0,r.kt)("h2",{id:"add-to-seedlink-to-grillo-console"},"Add to SeedLink to Grillo Console"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stations")," tab in the app, and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Station")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add station button",src:n(50325).Z,width:"1213",height:"736"})),(0,r.kt)("p",null,"Choose SeedLink Server:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add station button",src:n(45688).Z,width:"1218",height:"614"})),(0,r.kt)("h2",{id:"configure-seedlink-server"},"Configure SeedLink Server"),(0,r.kt)("p",null,"Having selected SeedLink server you can now add its details:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add station button",src:n(61106).Z,width:"1213",height:"736"})),(0,r.kt)("p",null,"The required details include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host")," This should be the URL address for the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")," The port number associated with your server's Host address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network")," This should be a short identifier for your seismic network. It should follow ",(0,r.kt)("a",{parentName:"li",href:"https://www.fdsn.org/networks/"},"FDSN conventions")," for Network Code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Latitude")," and ",(0,r.kt)("strong",{parentName:"li"},"Longitude")," These are required to locate your station.")))}p.isMDXComponent=!0},61106:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add seedlink details-3acb36a00d83874dbcafe49c6f568501.png"},45688:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add seedlink server-17a4ad8688b92c0435ac4677ec27f1d1.png"},50325:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-sensor-button-d592bfb0f4d77b1e585c51fb2872a247.jpg"}}]);