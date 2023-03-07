"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2995],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),c=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),f=r,g=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return o?n.createElement(g,l(l({ref:t},d),{},{components:o})):n.createElement(g,l({ref:t},d))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},31291:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={sidebar_position:20,sidebar_label:"Add Grillo Sensors"},l="Add Grillo Sensors",s={unversionedId:"grillo-console/stations/add-grillo-sensors",id:"grillo-console/stations/add-grillo-sensors",title:"Add Grillo Sensors",description:"Grillo sensors can be easily connected to the Grillo Console with a few clicks.",source:"@site/docs/grillo-console/stations/add-grillo-sensors.md",sourceDirName:"grillo-console/stations",slug:"/grillo-console/stations/add-grillo-sensors",permalink:"/es/grillo-console/stations/add-grillo-sensors",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-console/stations/add-grillo-sensors.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Add Grillo Sensors"},sidebar:"tutorialSidebar",previous:{title:"Introduction to Stations",permalink:"/es/grillo-console/stations/introduction"},next:{title:"Configure Grillo Sensors",permalink:"/es/grillo-console/stations/configure-grillo-sensors"}},a={},c=[{value:"Connect your device",id:"connect-your-device",level:2},{value:"Add to Grillo Console",id:"add-to-grillo-console",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-grillo-sensors"},"Add Grillo Sensors"),(0,r.kt)("p",null,"Grillo sensors can be easily connected to the Grillo Console with a few clicks."),(0,r.kt)("h2",{id:"connect-your-device"},"Connect your device"),(0,r.kt)("p",null,"First, you will want your device to be connected to the cloud. Please follow the instructions for ",(0,r.kt)("a",{parentName:"p",href:"../../grillo-sensors/connecting_sensor"},"connecting your sensor"),"."),(0,r.kt)("h2",{id:"add-to-grillo-console"},"Add to Grillo Console"),(0,r.kt)("p",null,"Once you are logged in, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stations")," tab in the app, and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Station")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add station button",src:o(50325).Z,width:"1213",height:"736"})),(0,r.kt)("p",null,"Choose Grillo sensor:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select station type",src:o(99371).Z,width:"1213",height:"679"})),(0,r.kt)("p",null,"Choose from a list of devices that are registered to your acount, and then fill in the station information for this device:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add station details",src:o(47105).Z,width:"1040",height:"630"})),(0,r.kt)("p",null,"The required details include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Network")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Station")," code as a unique identifier for your seismic station. Codes should follow ",(0,r.kt)("a",{parentName:"li",href:"https://www.fdsn.org/"},"FDSN conventions")," - preferably two letters for the network, 4-5 alphanumeric code for the station code. All letters should be capital."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Latitude")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Longitude"),". These are required to locate your station.")),(0,r.kt)("p",null,"Once this is all done, after a minute or so you should see your sensor as active in your sensor list:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add station details",src:o(64502).Z,width:"1213",height:"736"})),(0,r.kt)("p",null,"Here you can confirm that the deviceID (",(0,r.kt)("inlineCode",{parentName:"p"},"Mac Address"),"), as printed on your sensor, is the same one that is being shown."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add station details",src:o(55999).Z,width:"1327",height:"556"})))}p.isMDXComponent=!0},47105:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add-sensor-details-27f3bd4f2aa735e43bfaf884c2ae52a1.png"},99371:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add-grillo-device-button-aafd8b40133bf6d9f2fc3cbf6a5cc9fe.jpg"},50325:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add-sensor-button-d592bfb0f4d77b1e585c51fb2872a247.jpg"},55999:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mac-correct-b8748a82f4b2c9139c0260e9f9daa390.jpg"},64502:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/station-online-238afbf48d435ecf1b555943fa100214.jpg"}}]);