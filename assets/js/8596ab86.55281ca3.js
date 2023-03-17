"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[895],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return n?t.createElement(d,a(a({ref:r},u),{},{components:n})):t.createElement(d,a({ref:r},u))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},154:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const i={sidebar_position:6},a="Flashing a Grillo Sensor",l={unversionedId:"grillo-sensors/flashing_sensor",id:"grillo-sensors/flashing_sensor",title:"Flashing a Grillo Sensor",description:"If you need to upgrade to a new firmware version you can do this via the Grillo Console. However if you need to use a specialized firmware version, you may need to do this locally.",source:"@site/docs/grillo-sensors/flashing_sensor.md",sourceDirName:"grillo-sensors",slug:"/grillo-sensors/flashing_sensor",permalink:"/grillo-sensors/flashing_sensor",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-sensors/flashing_sensor.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Connecting your Sensor",permalink:"/grillo-sensors/connecting_sensor"},next:{title:"Navigating the UI",permalink:"/grillo-console/navigating"}},s={},c=[{value:"Local Firmware Flashing",id:"local-firmware-flashing",level:2}],u={toc:c},p="wrapper";function f(e){let{components:r,...n}=e;return(0,o.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flashing-a-grillo-sensor"},"Flashing a Grillo Sensor"),(0,o.kt)("p",null,"If you need to upgrade to a new firmware version you can do this ",(0,o.kt)("a",{parentName:"p",href:"/grillo-console/stations/configure-grillo-sensors"},"via the Grillo Console"),". However if you need to use a specialized firmware version, you may need to do this locally."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Only use if you know which firmware you wish to use. Using this may break your device and lose connection.")),(0,o.kt)("h2",{id:"local-firmware-flashing"},"Local Firmware Flashing"),(0,o.kt)("p",null,"There are a few steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Obtain the necessary ",(0,o.kt)("inlineCode",{parentName:"li"},".bin")," file from Grillo. "),(0,o.kt)("li",{parentName:"ul"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/esphome/esphome-flasher/releases/tag/1.4.0"},"ESPHome Flasher software")," for your OS."),(0,o.kt)("li",{parentName:"ul"},"Connect your sensor via USB to your computer. If you are using a Grillo Air, please make sure you have also disconnected it from power, or it may become damaged."),(0,o.kt)("li",{parentName:"ul"},"Flash your device with ESPHome Flasher")),(0,o.kt)("p",null,"To use ESPHome Flasher just select the firmware file, select the sensor USB port, and press upload."))}f.isMDXComponent=!0}}]);