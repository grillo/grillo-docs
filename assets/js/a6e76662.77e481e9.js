"use strict";(self.webpackChunkgrillo_docs=self.webpackChunkgrillo_docs||[]).push([[2442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,f=u["".concat(a,".").concat(g)]||u[g]||p[g]||i;return n?o.createElement(f,l(l({ref:t},d),{},{components:n})):o.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,sidebar_label:"Add Grillo Sensors"},l="Add Grillo Sensors",s={unversionedId:"grillo-console/add-grillo-sensors",id:"grillo-console/add-grillo-sensors",title:"Add Grillo Sensors",description:"Grillo sensors can be easily connected to the Grillo Console with a few clicks.",source:"@site/docs/grillo-console/add-grillo-sensors.md",sourceDirName:"grillo-console",slug:"/grillo-console/add-grillo-sensors",permalink:"/grillo-console/add-grillo-sensors",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Add Grillo Sensors"},sidebar:"defaultSidebar",previous:{title:"Navigating the UI",permalink:"/grillo-console/navigating"},next:{title:"Configure Grillo Sensors",permalink:"/grillo-console/configure-grillo-sensors"}},a={},c=[{value:"Connect your device",id:"connect-your-device",level:2},{value:"Add to Grillo Console",id:"add-to-grillo-console",level:2}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-grillo-sensors"},"Add Grillo Sensors"),(0,r.kt)("p",null,"Grillo sensors can be easily connected to the Grillo Console with a few clicks."),(0,r.kt)("h2",{id:"connect-your-device"},"Connect your device"),(0,r.kt)("p",null,"First, you will want your device to be connected to the cloud. This is done by powering it on and waiting until the onboard LEDs start blinking every second.\nNow you are ready to activate it."),(0,r.kt)("h2",{id:"add-to-grillo-console"},"Add to Grillo Console"),(0,r.kt)("p",null,"Once you are logged in, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sensors")," tab in the app, and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Station")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add station button",src:n(7646).Z,width:"1044",height:"189"})),(0,r.kt)("p",null,"Choose Grillo sensor:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select station type",src:n(4397).Z,width:"1098",height:"366"})),(0,r.kt)("p",null,"Choose from a list of devices that are registered to your acount, and then fill in the station information for this device:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add station details",src:n(334).Z,width:"1040",height:"630"})),(0,r.kt)("p",null,"Once this is all done, after a minute or so you should see your sensor as active in your sensor list:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add station details",src:n(6975).Z,width:"1327",height:"556"})),(0,r.kt)("p",null,"Here you can confirm that the deviceID (",(0,r.kt)("inlineCode",{parentName:"p"},"Mac Address"),"), as printed on your sensor, is the same one that is being shown."),(0,r.kt)("p",null,"It is recommended you don't change the firmware version unless you know what you are doing!"))}u.isMDXComponent=!0},334:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-sensor-details-27f3bd4f2aa735e43bfaf884c2ae52a1.png"},7646:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-station-button-4d1c7e898fc7f58c723ba1746ec836e3.png"},4397:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/select-station-type-614b176c70fe17e31d23e374e8567627.png"},6975:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sensor-active-33bb22b66ab94b9952af3bf2a1cc8719.png"}}]);