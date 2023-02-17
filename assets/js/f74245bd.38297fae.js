"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:5,sidebar_label:"Redirect Data Flow"},i="Redirect Data Flow",l={unversionedId:"how-to/redirect_data",id:"how-to/redirect_data",title:"Redirect Data Flow",description:"You can redirect the data flow and stream all data to your own system. This is done by starting a Seedlink Server that offers Grillo Sensor data in real time.",source:"@site/docs/how-to/redirect_data.md",sourceDirName:"how-to",slug:"/how-to/redirect_data",permalink:"/docs/how-to/redirect_data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to/redirect_data.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Redirect Data Flow"},sidebar:"tutorialSidebar",previous:{title:"Archive Data",permalink:"/docs/how-to/archive_data"},next:{title:"FAQ",permalink:"/docs/category/faq"}},c={},s=[],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"redirect-data-flow"},"Redirect Data Flow"),(0,n.kt)("p",null,"You can redirect the data flow and stream all data to your own system. This is done by starting a Seedlink Server that offers Grillo Sensor data in real time."),(0,n.kt)("mermaid",{value:"flowchart TB\n   A([Grillo Sensor]) --\x3e C([Ingest Data]) --\x3e D([Seedlink Server]) --\x3e E([Outside World])\n   style C fill:#1b62d4\n   style D fill:#1b62d4"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",null,"Ingest Data")," module ingests data from Grillo Sensors and prepares them from processing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",null,"Seedlink Server")," starts seedlink server")))}p.isMDXComponent=!0}}]);