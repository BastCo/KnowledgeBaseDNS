"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[462],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=g(t),u=i,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var g=2;g<o;g++)a[g]=t[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var r=t(9668),i=(t(6540),t(5680));const o={title:"Environment",sidebar_position:3},a=void 0,l={unversionedId:"dns-client/environment",id:"dns-client/environment",title:"Environment",description:"AdGuard DNS Client uses environment variables to store part of the configuration. The rest of the configuration is stored in the configuration file.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/dns-client/environment.md",sourceDirName:"dns-client",slug:"/dns-client/environment",permalink:"/KnowledgeBaseDNS/de/dns-client/environment",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/dns-client/environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Environment",sidebar_position:3},sidebar:"sidebar",previous:{title:"Configuration file",permalink:"/KnowledgeBaseDNS/de/dns-client/configuration"},next:{title:"Updating the Knowledge Base",permalink:"/KnowledgeBaseDNS/de/miscellaneous/update-kb"}},s={},g=[{value:"<code>LOG_OUTPUT</code>",id:"LOG_OUTPUT",level:2},{value:"<code>LOG_FORMAT</code>",id:"LOG_FORMAT",level:2},{value:"<code>LOG_TIMESTAMP</code>",id:"LOG_TIMESTAMP",level:2},{value:"<code>VERBOSE</code>",id:"VERBOSE",level:2}],p={toc:g},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"AdGuard DNS Client uses ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Environment_variable"},"environment variables")," to store part of the configuration. The rest of the configuration is stored in the ",(0,i.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/de/dns-client/configuration"},"configuration file"),"."),(0,i.yg)("h2",{id:"LOG_OUTPUT"},(0,i.yg)("inlineCode",{parentName:"h2"},"LOG_OUTPUT")),(0,i.yg)("p",null,"The log destination, must be an absolute path to the file or one of the special values. See the ",(0,i.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/de/dns-client/configuration#log"},"logging configuration description")," in the article about the configuration file."),(0,i.yg)("p",null,"This environment variable overrides the ",(0,i.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/de/dns-client/configuration#log"},(0,i.yg)("inlineCode",{parentName:"a"},"log.output"))," field in the configuration file."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Default:")," ",(0,i.yg)("strong",{parentName:"p"},"Unset.")),(0,i.yg)("h2",{id:"LOG_FORMAT"},(0,i.yg)("inlineCode",{parentName:"h2"},"LOG_FORMAT")),(0,i.yg)("p",null,"The format for log entries. See the ",(0,i.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/de/dns-client/configuration#log"},"logging configuration description")," in the article about the configuration file."),(0,i.yg)("p",null,"This environment variable overrides the ",(0,i.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/de/dns-client/configuration#log"},(0,i.yg)("inlineCode",{parentName:"a"},"log.format"))," field in the configuration file."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Default:")," ",(0,i.yg)("strong",{parentName:"p"},"Unset.")),(0,i.yg)("h2",{id:"LOG_TIMESTAMP"},(0,i.yg)("inlineCode",{parentName:"h2"},"LOG_TIMESTAMP")),(0,i.yg)("p",null,"When set to ",(0,i.yg)("inlineCode",{parentName:"p"},"1"),", log entries have a timestamp. When set to ",(0,i.yg)("inlineCode",{parentName:"p"},"0"),", log entries don\u2019t have it."),(0,i.yg)("p",null,"This environment variable overrides the ",(0,i.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/de/dns-client/configuration#log"},(0,i.yg)("inlineCode",{parentName:"a"},"log.timestamp"))," field in the configuration file."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Default:")," ",(0,i.yg)("strong",{parentName:"p"},"Unset.")),(0,i.yg)("h2",{id:"VERBOSE"},(0,i.yg)("inlineCode",{parentName:"h2"},"VERBOSE")),(0,i.yg)("p",null,"When set to ",(0,i.yg)("inlineCode",{parentName:"p"},"1"),", enable verbose logging. When set to ",(0,i.yg)("inlineCode",{parentName:"p"},"0"),", disable it."),(0,i.yg)("p",null,"This environment variable overrides the ",(0,i.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/de/dns-client/configuration#log"},(0,i.yg)("inlineCode",{parentName:"a"},"log.verbose"))," field in the configuration file."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Default:")," ",(0,i.yg)("strong",{parentName:"p"},"Unset.")))}c.isMDXComponent=!0}}]);