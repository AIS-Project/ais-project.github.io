"use strict";(self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[]).push([[745],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:e},c),{},{components:n})):a.createElement(h,i({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4045:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,title:"Instalation",sidebar_label:"Instalation",lastUpdatedAt:"2023/05/30",author:"Jo\xe3o Paulo",showLastUpdateAuthor:!0,showLastUpdateTime:!0,last_update:{date:"2023/05/30",author:"Jo\xe3o Paulo"}},i="**Installation**",l={unversionedId:"Getting Started/instalation",id:"Getting Started/instalation",title:"Instalation",description:"This page contains information about the dependencies needed by the package, how to install it and how to import the modules.",source:"@site/docs/Getting Started/instalation.md",sourceDirName:"Getting Started",slug:"/Getting Started/instalation",permalink:"/docs/Getting Started/instalation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Instalation",sidebar_label:"Instalation",lastUpdatedAt:"2023/05/30",author:"Jo\xe3o Paulo",showLastUpdateAuthor:!0,showLastUpdateTime:!0,last_update:{date:"2023/05/30",author:"Jo\xe3o Paulo"}},sidebar:"tutorialSidebar",previous:{title:"Artificial Immune Systems Package.",permalink:"/docs/intro"},next:{title:"Using the BNSA",permalink:"/docs/Getting Started/basic use/BNSA"}},s={},p=[{value:"<strong>Dependencies:</strong>",id:"dependencies",level:2},{value:"<strong>User installation</strong>",id:"user-installation",level:2},{value:"<strong>How to import the Techniques</strong>",id:"how-to-import-the-techniques",level:2}],c={toc:p},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},(0,r.kt)("strong",{parentName:"h1"},"Installation")),(0,r.kt)("p",null,"This page contains information about the dependencies needed by the package, how to install it and how to import the modules."),(0,r.kt)("h2",{id:"dependencies"},(0,r.kt)("strong",{parentName:"h2"},"Dependencies:")),(0,r.kt)("p",null,"The module requires installation of ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"python 3.8.10")," or higher."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Packages"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"numpy"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2265 1.23.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"scipy"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2265 1.8.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"tqdm"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2265 4.64.1"))))),(0,r.kt)("h2",{id:"user-installation"},(0,r.kt)("strong",{parentName:"h2"},"User installation")),(0,r.kt)("p",null,"The simplest way to install AISP is using ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install aisp\n")),(0,r.kt)("h2",{id:"how-to-import-the-techniques"},(0,r.kt)("strong",{parentName:"h2"},"How to import the Techniques")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from aisp.NSA import RNSA, BNSA\n\nnsa = RNSA(N=300, r=0.05)\n")))}u.isMDXComponent=!0}}]);