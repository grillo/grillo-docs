"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const l={sidebar_position:5},a="Connecting your Sensor",i={unversionedId:"grillo-sensors/connecting_sensor",id:"grillo-sensors/connecting_sensor",title:"Connecting your Sensor",description:"To connect your Grillo sensor to Grillo Console please follow the relevant steps for your sensor type:",source:"@site/docs/grillo-sensors/connecting_sensor.md",sourceDirName:"grillo-sensors",slug:"/grillo-sensors/connecting_sensor",permalink:"/grillo-sensors/connecting_sensor",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-sensors/connecting_sensor.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Grillo Connect",permalink:"/grillo-sensors/grillo_connect"},next:{title:"Flashing a Grillo Sensor",permalink:"/grillo-sensors/flashing_sensor"}},s={},u=[{value:"Add Station to Grillo Console",id:"add-station-to-grillo-console",level:2},{value:"Problems?",id:"problems",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-your-sensor"},"Connecting your Sensor"),(0,r.kt)("p",null,"To connect your Grillo sensor to Grillo Console please follow the relevant steps for your sensor type:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If connecting by Wi-Fi or Ethernet, your local area network (LAN) must be able to dynamically assign your device an IP address by DHCP. If your network only permits for static IP addresses, please speak with your network manager to resolve this.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Cellular")),(0,r.kt)("p",null,(0,r.kt)("p",null,"In order to connect your sensor to cellular internet, please ensure that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are at a location with cellular connectivity that offers CAT-M LTE, NB IoT or GSM network. For a quick reference you can follow ",(0,r.kt)("a",{parentName:"li",href:"https://www.gsma.com/iot/mobile-iot-commercial-launches/"},"this list")," but you may need to contact the service provider for detailed info, or your telcom may not be shown here or updated."),(0,r.kt)("li",{parentName:"ul"},"You have a SIM card with an active data plan. Based on the station setup (sampling rate, on trigger vs. continuous mode) the sensor will consume between 100 MB to 5 GB of data per month.")),(0,r.kt)("p",null,"To connect your station:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure SIM is inserted in the device and cellular antenna is connected."),(0,r.kt)("li",{parentName:"ol"},"Power-up your sensor."),(0,r.kt)("li",{parentName:"ol"},"Wait a minute or so its LED should start blinking. This means it is successfully sending data to the cloud.")),(0,r.kt)("p",null,"If the sensor does not start blinking, the connection was not successful. In such a case, follow these instructions."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure SIM is inserted in the device and cellular antenna is connected."),(0,r.kt)("li",{parentName:"ol"},"Power-up your sensor."),(0,r.kt)("li",{parentName:"ol"},"Wait a few seconds until a Wi-Fi network appears with an SSID that starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"Grillo-")," (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"Grillo-XXXXXX"),"). Connect your phone to this network, a startup page should show up automatically."),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Setup"),". Fill your APN details, and (optionally) the Network mode and Data Trasfer mode (",(0,r.kt)("inlineCode",{parentName:"li"},"1")," if you wish to choose it, ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," if you don't). Check out ",(0,r.kt)("a",{parentName:"li",href:"/faq/stations"},"how to find APN details")," and ",(0,r.kt)("a",{parentName:"li",href:"/faq/stations"},"how to set up network mode")," in FAQ if you are unsure about the setup."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Save")," and wait for a success confirmation message."),(0,r.kt)("li",{parentName:"ol"},"Wait a minute or so, the sensor's LED should start blinking. This means it is successfully sending data to the cloud.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Wi-Fi")),(0,r.kt)("p",null,(0,r.kt)("p",null,"The local Wi-Fi network must be 2.4Ghz (5Ghz will not work). Please ensure that 2.4Ghz is available before installing the Grillo Connect sensor in this location."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Power-up your sensor."),(0,r.kt)("li",{parentName:"ol"},"Wait a few seconds until a Wi-Fi network appears with an SSID that starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"Grillo-")," (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"Grillo-XXXXXX"),"). Connect your phone to this network, a startup page should show up automatically."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("inlineCode",{parentName:"li"},"Configure Wi-Fi")," page, choose the SSID and enter Password for the local Wi-Fi network you want the sensor to connect to."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"Save")," and wait for a success confirmation message."),(0,r.kt)("li",{parentName:"ol"},"Wait a minute or so, the sensor's LED should start blinking. This means it is successfully sending data to the cloud.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Ethernet LAN")),(0,r.kt)("p",null,(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Plug an ethernet cable to your sensor."),(0,r.kt)("li",{parentName:"ol"},"Power on your sensor."),(0,r.kt)("li",{parentName:"ol"},"Wait a minute or so its LED should start blinking. This means it is successfully sending data to the cloud.")))),(0,r.kt)("h2",{id:"add-station-to-grillo-console"},"Add Station to Grillo Console"),(0,r.kt)("p",null,"Once your sensor is connected to the cloud, you need to ",(0,r.kt)("a",{parentName:"p",href:"/docs/grillo-console/stations/add-grillo-sensors"},"add it as a station")," in Grillo Console."),(0,r.kt)("h2",{id:"problems"},"Problems?"),(0,r.kt)("p",null,"If you have issues connecting your sensor, please check out ",(0,r.kt)("a",{parentName:"p",href:"/faq/stations"},"FAQ"),". If you don't find the answer there, please contact us."))}d.isMDXComponent=!0}}]);