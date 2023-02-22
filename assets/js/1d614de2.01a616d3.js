"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:10,sidebar_label:"Stations"},a="Stations FAQ",l={unversionedId:"faq/stations",id:"faq/stations",title:"Stations FAQ",description:"My station appears not active in the Grillo Console.",source:"@site/docs/faq/stations.md",sourceDirName:"faq",slug:"/faq/stations",permalink:"/docs/faq/stations",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/faq/stations.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Stations"},sidebar:"tutorialSidebar",previous:{title:"Redirect Data Flow",permalink:"/docs/how-to/redirect_data"},next:{title:"Console",permalink:"/docs/faq/console"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stations-faq"},"Stations FAQ"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"My station appears not active in the Grillo Console.")),(0,r.kt)("p",null,(0,r.kt)("p",null,"Please follow the flow below."),(0,r.kt)("mermaid",{value:"graph TB\n   B{{Is the sensor blinking blue?}}\n   B --\x3e|No| C(<font color=333333><b>Restart the sensor\\nor follow the instructions\\nin `Connecting your sensor`</b>)\n   B --\x3e|Yes| D(<font color=333333><b>Restart ingestion module\\nin Grillo Console and wait\\na few minutes</b>)\n   D --\x3e H{{Did it help?}}\n   C --\x3e H\n   H --\x3e|Yes| I(<font color=333333><b>Great!</b>)\n   H --\x3e|No| J(<font color=333333><b>Contact Grillo Support</b>)\n\n   style D fill:#99CCFF\n   style C fill:#99CCFF\n   style I fill:#99CCFF\n   style J fill:#99CCFF"}))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"How do I find network APN details?")),(0,r.kt)("p",null,(0,r.kt)("p",null,"You can find APN details of your network by inserting the SIM card into your phone. On iPhone, follow these steps to get the APN details. Steps are similar on Android OS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apn_iphone",src:n(23117).Z,width:"2282",height:"1484"})))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"How do I set up Network mode and Data transmission mode?")),(0,r.kt)("p",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Grillo Air")," can connect to either 2G (GSM) network, or LTE network Nb-IoT or CAT-M (also sometimes referred to as LTE-M). Grillo sensor should choose the best available option automatically. If not, you may need to define the desired option in APN setup after the sensor boots-up."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To force the GSM option, set ",(0,r.kt)("inlineCode",{parentName:"li"},"GSM")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"LTE")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")),(0,r.kt)("li",{parentName:"ul"},"To force either ",(0,r.kt)("inlineCode",{parentName:"li"},"Nb-IoT")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"CAT-M"),", set the desired one to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," and the other to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," ")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"How many stations can be associated with one account?")),(0,r.kt)("p",null,(0,r.kt)("p",null,"The currrent limit is 200 stations. Please contact us if you need to onboard more stations."))))}d.isMDXComponent=!0},23117:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/apn_iphone2-d7516cf98099ed8edee8fe5c714ac012.png"}}]);