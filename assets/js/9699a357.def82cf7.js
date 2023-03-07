"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=m(n),d=o,g=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:o,l[1]=r;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:5,sidebar_label:"Event location and magnitude calculation: GaMMA method"},l="Event location and magnitude calculation: GaMMA method",r={unversionedId:"grillo-console/modules/technical_computing/location_gamma",id:"grillo-console/modules/technical_computing/location_gamma",title:"Event location and magnitude calculation: GaMMA method",description:"Module currently in development.",source:"@site/docs/grillo-console/modules/technical_computing/location_gamma.md",sourceDirName:"grillo-console/modules/technical_computing",slug:"/grillo-console/modules/technical_computing/location_gamma",permalink:"/grillo-console/modules/technical_computing/location_gamma",draft:!1,editUrl:"https://github.com/grillo/grillo-docs/tree/main/docs/grillo-console/modules/technical_computing/location_gamma.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Event location and magnitude calculation: GaMMA method"},sidebar:"tutorialSidebar",previous:{title:"Event location and magnitude calculation: Grid search method",permalink:"/grillo-console/modules/technical_computing/location_grid"},next:{title:"Public Earthquake Catalog",permalink:"/grillo-console/modules/technical_computing/public_catalogue"}},c={},m=[{value:"Configuration",id:"configuration",level:3}],u={toc:m},s="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"event-location-and-magnitude-calculation-gamma-method"},"Event location and magnitude calculation: GaMMA method"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Module currently in development.")),(0,o.kt)("p",null,"The module performs seismic association and location via the ",(0,o.kt)("a",{parentName:"p",href:"https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2021JB023249"},"GaMMA method."),". It starts with associating ",(0,o.kt)("inlineCode",{parentName:"p"},"Pick")," objects and calculates event magnitude based on ",(0,o.kt)("inlineCode",{parentName:"p"},"Amplitude")," readings of the P-wave ",(0,o.kt)("a",{parentName:"p",href:"https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2007JB005386"},"peak ground displacement"),"."),(0,o.kt)("p",null,"The module creates ",(0,o.kt)("inlineCode",{parentName:"p"},"Event")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Alert")," objects that are passed to subsequent modules, such as those for alerting."),(0,o.kt)("mermaid",{value:"flowchart TB\n   B([Other Modules])--\x3e|Pick, Amplitude| Cp([<font color=333333><b>Event location and magnitude</b>]) --\x3e|Event, Alert| D([Other Modules])\n   style Cp fill:#99CCFF"}),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"RTCatalogue")),(0,o.kt)("p",null,(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Use Amplitude")," ","[boolean]",": Use amplitudes and calculate magnitude"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dbscan eps")," ","[float]",": The time window length for pick catalogue scan"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dbscan min samples")," ","[integer]",": Minimum number of picks to scan"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Min picks per eq")," ","[integer]",": Minimum number of picks associated with an event"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Max sigma11")," ","[float, seconds]",": Maximum time sigma"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Max sigma22")," ","[float, seconds]",": Maximum amplitude sigma"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Max sigma12")," ","[float, seconds]",": Maximum time x amplitude sigma"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pvel")," ","[float, km/s]",": Constant P-wave velocity"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Verbose")," ","[boolean]",": ",(0,o.kt)("inlineCode",{parentName:"li"},"Logs")," are printed in when set to true")))))}p.isMDXComponent=!0}}]);