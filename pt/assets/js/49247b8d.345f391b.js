"use strict";(self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[]).push([[728],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>N});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,N=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return t?n.createElement(N,o(o({ref:a},d),{},{components:t})):n.createElement(N,o({ref:a},d))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},733:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const i={id:"bnsa",title:"BNSA",sidebar_label:"BNSA - Algoritmo de Sele\xe7\xe3o Negativa Bin\xe1ria",sidebar_position:2,pagination_next:null,keywords:["Bin\xe1rio","classifica\xe7\xe3o","anomalias","not self","affinity threshold"]},o="BNSA (Algoritmo de Sele\xe7\xe3o Negativa Bin\xe1ria).",l={unversionedId:"aisp-techniques/Negative Selection/bnsa",id:"aisp-techniques/Negative Selection/bnsa",title:"BNSA",description:"A classe `BNSA` tem a finalidade de classifica\xe7\xe3o e identifica\xe7\xe3o de anomalias atrav\xe9s do m\xe9todo self e not self .",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/aisp-techniques/Negative Selection/BNSA.md",sourceDirName:"aisp-techniques/Negative Selection",slug:"/aisp-techniques/Negative Selection/bnsa",permalink:"/pt/docs/aisp-techniques/Negative Selection/bnsa",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"bnsa",title:"BNSA",sidebar_label:"BNSA - Algoritmo de Sele\xe7\xe3o Negativa Bin\xe1ria",sidebar_position:2,pagination_next:null,keywords:["Bin\xe1rio","classifica\xe7\xe3o","anomalias","not self","affinity threshold"]},sidebar:"tutorialSidebar",previous:{title:"RNSA - Algoritmo de Sele\xe7\xe3o Negativa de Valor Real",permalink:"/pt/docs/aisp-techniques/Negative Selection/rnsa"}},s={},p=[{value:"Fun\xe7\xe3o fit(...)",id:"fun\xe7\xe3o-fit",level:3},{value:"Fun\xe7\xe3o predict(...)",id:"fun\xe7\xe3o-predict",level:3},{value:"Fun\xe7\xe3o score(...):",id:"fun\xe7\xe3o-score",level:3},{value:"M\xe9todos privados",id:"m\xe9todos-privados",level:2},{value:"Fun\xe7\xe3o __slice_index_list_by_class(...):",id:"fun\xe7\xe3o-__slice_index_list_by_class",level:3}],d={toc:p},c="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bnsa-algoritmo-de-sele\xe7\xe3o-negativa-bin\xe1ria"},"BNSA (Algoritmo de Sele\xe7\xe3o Negativa Bin\xe1ria)."),(0,r.kt)("p",null,"A classe ",(0,r.kt)("inlineCode",{parentName:"p"},"BNSA")," tem a finalidade de classifica\xe7\xe3o e identifica\xe7\xe3o de anomalias atrav\xe9s do m\xe9todo self e not self . "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"BNSA(self, N: int = 100, aff_thresh: int = 0.05, r_s: float = 0.0001, k: int = 1, metric: str = 'euclidean', seed: int = None):\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"N")," (",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"): Quantidade de detectores. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"aff_thresh")," (",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"): A vari\xe1vel ('affinity threshold') representa a porcentagem de n\xe3o similaridade entre a c\xe9lula T e as amostras pr\xf3prias. O valor padr\xe3o \xe9 de 10% (0,1), enquanto que o valor de 1,0 representa 100% de n\xe3o similaridade."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Definir uma porcentagem de diferen\xe7a muito alta pode resultar na incapacidade de gerar detectores para n\xe3o-pr\xf3prio."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"max_discards")," (",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"): Este par\xe2metro indica o n\xfamero m\xe1ximo de descartes de detectores em sequ\xeancia, que tem como objetivo evitar um\nposs\xedvel loop infinito caso seja definido um raio que n\xe3o seja poss\xedvel gerar detectores do n\xe3o-pr\xf3prio. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"seed")," (",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"): Semente para a gera\xe7\xe3o rand\xf4mica dos valores nos detectores. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Outras vari\xe1veis iniciadas:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"detectors")," (",(0,r.kt)("inlineCode",{parentName:"p"},"dict"),"): Esta vari\xe1vel armazena uma lista de detectores por classe.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"classes")," (",(0,r.kt)("inlineCode",{parentName:"p"},"npt.NDArray"),"): lista de classes de sa\xedda."))),(0,r.kt)("h3",{id:"fun\xe7\xe3o-fit"},"Fun\xe7\xe3o fit(...)"),(0,r.kt)("p",null,"A fun\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"fit(...)")," gera os detectores para os n\xe3o pr\xf3prios com rela\xe7\xe3o \xe0s amostras:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def fit(self, X: npt.NDArray, y: npt.NDArray):\n")),(0,r.kt)("p",null,"Nela \xe9 realizado o treinamento de acordo com ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),", usando o m\xe9todo de sele\xe7\xe3o negativa(",(0,r.kt)("inlineCode",{parentName:"p"},"NegativeSelect"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Os par\xe2metros de entrada s\xe3o:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X"),": array com as caracter\xedsticas das amostras com ",(0,r.kt)("strong",{parentName:"li"},"N")," amostras (linhas) e ",(0,r.kt)("strong",{parentName:"li"},"N")," caracter\xedsticas  (colunas), normalizados para valores entre ","[0, 1]",". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y"),": array com as classes de sa\xeddas disposto em ",(0,r.kt)("strong",{parentName:"li"},"N")," amostras que s\xe3o relacionadas ao ",(0,r.kt)("inlineCode",{parentName:"li"},"X"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verbose"),": booleano com valor default ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),", determina se o feedback da gera\xe7\xe3o dos detectores ser\xe1 printado.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Retorna a inst\xe2ncia da classe.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fun\xe7\xe3o-predict"},"Fun\xe7\xe3o predict(...)"),(0,r.kt)("p",null,"A fun\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"predict(...)")," realiza a previs\xe3o das classes utilizando os detectores gerados:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def predict(self, X: npt.NDArray) -> npt.NDArray:\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"O par\xe2metro de entrada:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X"),": array  com as caracter\xedsticas para a previs\xe3o, com ",(0,r.kt)("strong",{parentName:"li"},"N")," amostras (Linhas) e ",(0,r.kt)("strong",{parentName:"li"},"N")," colunas.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Retorna:")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"C"),": Um array de previs\xe3o com as classes de sa\xedda para as caracter\xedsticas informadas. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"None"),": se n\xe3o houver detectores.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fun\xe7\xe3o-score"},"Fun\xe7\xe3o score(...):"),(0,r.kt)("p",null,'A fun\xe7\xe3o "score(...)" calcula a precis\xe3o do modelo treinado por meio da realiza\xe7\xe3o de previs\xf5es e do c\xe1lculo da acur\xe1cia.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def score(self, X: npt.NDArray, y: list) -> float:\n")),(0,r.kt)("p",null,"retorna a acur\xe1cia, do tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"m\xe9todos-privados"},"M\xe9todos privados"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fun\xe7\xe3o-__slice_index_list_by_class"},"Fun\xe7\xe3o __slice_index_list_by_class(...):"),(0,r.kt)("p",null,"A fun\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"__slice_index_list_by_class(...)"),", separa os \xedndices das linhas conforme a classe de sa\xedda, para percorrer o array de amostra, apenas nas posi\xe7\xf5es que a sa\xedda for a classe que est\xe1 sendo treinada:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __slice_index_list_by_class(self, y: npt.NDArray) -> dict:\n")),(0,r.kt)("p",null,"Retorna um dicionario com as classes como chave e os \xedndices em ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," das amostras."),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);