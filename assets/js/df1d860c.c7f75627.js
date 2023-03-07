"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),k=i,f=u["".concat(l,".").concat(k)]||u[k]||p[k]||r;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},99331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:40,sidebar_label:"Add SeedLink stations"},a="Add SeedLink stations",s={unversionedId:"grillo-console/stations/add-seedlink-stations",id:"grillo-console/stations/add-seedlink-stations",title:"Add SeedLink stations",description:"You are able to add any SeedLink station to Grillo Console.",source:"@site/docs/grillo-console/stations/add-seedlink-stations.md",sourceDirName:"grillo-console/stations",slug:"/grillo-console/stations/add-seedlink-stations",permalink:"/grillo-console/stations/add-seedlink-stations",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-console/stations/add-seedlink-stations.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"Add SeedLink stations"},sidebar:"tutorialSidebar",previous:{title:"Configure Grillo Sensors",permalink:"/grillo-console/stations/configure-grillo-sensors"},next:{title:"Deactivate stations",permalink:"/grillo-console/stations/removing_stations"}},l={},d=[{value:"Add to SeedLink to Grillo Console",id:"add-to-seedlink-to-grillo-console",level:2},{value:"Configure SeedLink Server",id:"configure-seedlink-server",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-seedlink-stations"},"Add SeedLink stations"),(0,i.kt)("p",null,"You are able to add any SeedLink station to Grillo Console."),(0,i.kt)("h2",{id:"add-to-seedlink-to-grillo-console"},"Add to SeedLink to Grillo Console"),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stations")," tab in the app, and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Station")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add station button",src:n(50325).Z,width:"1213",height:"736"})),(0,i.kt)("p",null,"Choose SeedLink Server:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add station button",src:n(45688).Z,width:"1218",height:"614"})),(0,i.kt)("h2",{id:"configure-seedlink-server"},"Configure SeedLink Server"),(0,i.kt)("p",null,"Having selected SeedLink server you can now add its details:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add station button",src:n(61106).Z,width:"1213",height:"736"})),(0,i.kt)("p",null,"The required details include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Host")," This should be the URL address for the server. ",(0,i.kt)("inlineCode",{parentName:"li"},"Port")," The port number associated with your server's Host address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Network"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Station")," as the identifier of the seismic station. You can find the existing ones at the ",(0,i.kt)("a",{parentName:"li",href:"https://www.fdsn.org/networks/"},"FDSN website"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Latitude")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Longitude")," These are required to locate your station.")))}p.isMDXComponent=!0},61106:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add seedlink details-3acb36a00d83874dbcafe49c6f568501.png"},45688:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add seedlink server-17a4ad8688b92c0435ac4677ec27f1d1.png"},50325:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-sensor-button-d592bfb0f4d77b1e585c51fb2872a247.jpg"}}]);