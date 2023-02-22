"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4990],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return t?n.createElement(d,l(l({ref:r},p),{},{components:t})):n.createElement(d,l({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=g;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},76251:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const i={sidebar_position:3},l="Grillo Air",a={unversionedId:"grillo-sensors/grillo_air",id:"grillo-sensors/grillo_air",title:"Grillo Air",description:"Grillo Air is a low-cost accelerometer that streams real-time data to Grillo Console using cellular or Wi-Fi connection, without any additional digitizers or radios.",source:"@site/docs/grillo-sensors/grillo_air.md",sourceDirName:"grillo-sensors",slug:"/grillo-sensors/grillo_air",permalink:"/es/docs/grillo-sensors/grillo_air",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-sensors/grillo_air.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting a Grillo Sensor",permalink:"/es/docs/grillo-sensors/getting_grillo_sensor"},next:{title:"Grillo Connect",permalink:"/es/docs/grillo-sensors/grillo_connect"}},s={},c=[{value:"Specifications",id:"specifications",level:3},{value:"Connecting the sensor",id:"connecting-the-sensor",level:3}],p={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grillo-air"},"Grillo Air"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Grillo Air")," is a low-cost accelerometer that streams real-time data to ",(0,o.kt)("strong",{parentName:"p"},"Grillo Console")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"cellular")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Wi-Fi")," connection, without any additional digitizers or radios."),(0,o.kt)("h3",{id:"specifications"},"Specifications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Low-noise MEMs accelerometer, configurable range (\xb12, 4, 8g) and sampling rate (31, 62, 125 sps, higher upon request)"),(0,o.kt)("li",{parentName:"ul"},"Fast dual-core 32-bit microcontroller. Works like an appliance without needing to boot operating system or use SD-cards."),(0,o.kt)("li",{parentName:"ul"},"Connectivity: Wi-Fi, Cellular CAT-M LTE, NB IoT, GSM (radios are integrated)"),(0,o.kt)("li",{parentName:"ul"},"Timing via a custom NTP service"),(0,o.kt)("li",{parentName:"ul"},"Size: 20x9x7 cm, weight: 330 g"),(0,o.kt)("li",{parentName:"ul"},"2 slots for battery type 18650, allows for backup power"),(0,o.kt)("li",{parentName:"ul"},"Internal data backup on microSD card"),(0,o.kt)("li",{parentName:"ul"},"Powered by 5V USB (suggested minimum 2A) or 5V barrel connector"),(0,o.kt)("li",{parentName:"ul"},"Solar panel controller and connector (available on request)")),(0,o.kt)("h3",{id:"connecting-the-sensor"},"Connecting the sensor"),(0,o.kt)("p",null,"Follow the instructions for ",(0,o.kt)("inlineCode",{parentName:"p"},"Wi-Fi")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Cellular")," at the ",(0,o.kt)("a",{parentName:"p",href:"connecting_sensor"},"Connecting your Sensor")," page."))}m.isMDXComponent=!0}}]);