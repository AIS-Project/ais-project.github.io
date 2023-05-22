"use strict";(self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[]).push([[390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=r(7462),n=r(7294),o=r(3905),i=r(6010);const s={cardSpace:"cardSpace_YSC2",space:"space_a4Hk",subTitle:"subTitle_FEyr"};function l(e){let{name:t,date:r,description:a,githubUrl:o,lattesUrl:l}=e;return n.createElement("div",{className:(0,i.Z)("col col--5",s.cardSpace)},n.createElement("div",{className:"card card--full-height"},n.createElement("div",{className:"card__header"},n.createElement("div",{className:"avatar avatar--vertical"},n.createElement("img",{className:"avatar__photo avatar__photo--xl",src:`${o}.png`,alt:`${t}'s avatar`}),n.createElement("div",{className:"avatar__intro"},n.createElement("h3",{className:s.space},t),n.createElement("h6",{className:s.subTitle},r)))),n.createElement("div",{className:"card__body "},a),n.createElement("div",{className:"card__footer text--center"},n.createElement("div",{className:"button-group button-group--block"},o&&n.createElement("a",{className:"button button--secondary",href:o},"GitHub"),l&&n.createElement("a",{className:"button button--secondary",href:l},"Lattes")))))}const c={sidebar_position:3,pagination_prev:null},u="About us",p={unversionedId:"About us",id:"About us",title:"About us",description:"History",source:"@site/docs/About us.mdx",sourceDirName:".",slug:"/About us",permalink:"/docs/About us",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,pagination_prev:null},sidebar:"tutorialSidebar"},d={},m=[{value:"History",id:"history",level:2},{value:"Team of collaborators",id:"team-of-collaborators",level:2},{value:"Coordinator",id:"coordinator",level:3},{value:"Students",id:"students",level:3}],b={toc:m},f="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-us"},"About us"),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("p",null,"The AISP, or Artificial Immune Systems Package, had its origins in a research project at the IFNMG (Federal Institute of Northern Minas Gerais) on the Salinas campus. Starting on May 2, 2022, with the aim of starting the creation of an open software package that allows the application, study and popularization of techniques belonging to the area of artificial immune systems."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"team-of-collaborators"},"Team of collaborators"),(0,o.kt)("h3",{id:"coordinator"},"Coordinator"),(0,o.kt)("div",{className:"row padding-horiz--md"},(0,o.kt)(l,{name:"Alison Zille Lopes",date:"2022",githubUrl:"https://github.com/alisonzille",lattesUrl:"http://lattes.cnpq.br/3294097090760981",mdxType:"TeamUser"})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"students"},"Students"),(0,o.kt)("div",{className:"row padding-horiz--md"},(0,o.kt)(l,{name:"Jo\xe3o Paulo",date:"2022-2023",description:"I was tasked with implementing version 0.1, which features the BNSA and RNSA negative selection classes, including fixed and variable radius versions.",githubUrl:"https://github.com/Joao-Paulo-Silva",lattesUrl:"http://lattes.cnpq.br/2561057724411407",mdxType:"TeamUser"})))}h.isMDXComponent=!0}}]);