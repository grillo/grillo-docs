"use strict";(self.webpackChunkgrillo_docs=self.webpackChunkgrillo_docs||[]).push([[84],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:12},l="Create a Document",i={unversionedId:"grillo-web/create-a-document",id:"grillo-web/create-a-document",title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/grillo-web/create-a-document.md",sourceDirName:"grillo-web",slug:"/grillo-web/create-a-document",permalink:"/grillo-docs/grillo-web/create-a-document",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"defaultSidebar",previous:{title:"Add Grillo Sensors",permalink:"/grillo-docs/grillo-web/add-grillo-sensors"},next:{title:"Markdown Features",permalink:"/grillo-docs/grillo-web/markdown-features"}},s={},c=[{value:"Create your first Doc",id:"create-your-first-doc",level:2},{value:"Configure the Sidebar",id:"configure-the-sidebar",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-document"},"Create a Document"),(0,o.kt)("p",null,"Documents are ",(0,o.kt)("strong",{parentName:"p"},"groups of pages")," connected through:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},"sidebar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"previous/next navigation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"versioning"))),(0,o.kt)("h2",{id:"create-your-first-doc"},"Create your first Doc"),(0,o.kt)("p",null,"Create a Markdown file at ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/hello.md"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,o.kt)("p",null,"A new document is now available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/hello"},"http://localhost:3000/docs/hello"),"."),(0,o.kt)("h2",{id:"configure-the-sidebar"},"Configure the Sidebar"),(0,o.kt)("p",null,"Docusaurus automatically ",(0,o.kt)("strong",{parentName:"p"},"creates a sidebar")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,o.kt)("p",null,"Add metadata to customize the sidebar label and position:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md" {1-4}',title:'"docs/hello.md"',"{1-4}":!0},"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,o.kt)("p",null,"It is also possible to create your sidebar explicitly in ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebars.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  tutorialSidebar: [\n    'intro',\n    // highlight-next-line\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n};\n")))}p.isMDXComponent=!0}}]);