"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[195],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),g=a,v=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return t?r.createElement(v,l(l({ref:n},u),{},{components:t})):r.createElement(v,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},300:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=t(3117),a=t(102),i=(t(7294),t(4137)),l=["components"],o={title:"Changelog",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:3},s=void 0,d={unversionedId:"private-dns/api/changelog",id:"private-dns/api/changelog",title:"Changelog",description:"\x3c!--",source:"@site/docs/private-dns/api/changelog.md",sourceDirName:"private-dns/api",slug:"/private-dns/api/changelog",permalink:"/KnowledgeBaseDNS/it/private-dns/api/changelog",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/api/changelog.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Changelog",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"sidebar",previous:{title:"Reference",permalink:"/KnowledgeBaseDNS/it/private-dns/api/reference"},next:{title:"Known issues",permalink:"/KnowledgeBaseDNS/it/private-dns/solving-problems/known-issues"}},u={},c=[{value:"v1.5",id:"v15",level:2},{value:"Model for safebrowsing settings changed",id:"model-for-safebrowsing-settings-changed",level:3},{value:"Model for saving server settings changed",id:"model-for-saving-server-settings-changed",level:3},{value:"v1.4",id:"v14",level:2},{value:"v1.3",id:"v13",level:2},{value:"v1.2",id:"v12",level:2},{value:"v1.1",id:"v11",level:2},{value:"v1.0",id:"v10",level:2}],p={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article contains the changelog for ",(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/it/private-dns/api/overview"},"AdGuard DNS API"),"."),(0,i.kt)("h2",{id:"v15"},"v1.5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added new setting ",(0,i.kt)("inlineCode",{parentName:"li"},"block_nrd")," and group all security-related settings to one place.")),(0,i.kt)("h3",{id:"model-for-safebrowsing-settings-changed"},"Model for safebrowsing settings changed"),(0,i.kt)("p",null,"From"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "enabled": true\n}\n')),(0,i.kt)("p",null,"To:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "enabled": true,\n   "block_dangerous_domains": true,\n   "block_nrd": false\n}\n')),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," is now control all settings in group, ",(0,i.kt)("inlineCode",{parentName:"p"},"block_dangerous_domains"),' is previous model field "enabled" and ',(0,i.kt)("inlineCode",{parentName:"p"},"block_nrd")," is settings for filtering newly registered domains."),(0,i.kt)("h3",{id:"model-for-saving-server-settings-changed"},"Model for saving server settings changed"),(0,i.kt)("p",null,"From:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protection_enabled" : true,\n  "safebrowsing_enabled" : true,\n  ..\n}\n')),(0,i.kt)("p",null,"to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protection_enabled" : true,\n  "safebrowsing_settings" : {\n     "enabled": true,\n     "block_dangerous_domains": true,\n     "block_nrd": false\n  }\n  ..\n}\n')),(0,i.kt)("p",null,"here new field ",(0,i.kt)("inlineCode",{parentName:"p"},"safebrowsing_settings")," is used instead of deprecated ",(0,i.kt)("inlineCode",{parentName:"p"},"safebrowsing_enabled"),", whose value stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"block_dangerous_domains"),"."),(0,i.kt)("h2",{id:"v14"},"v1.4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added configurable option for blocking response: default (0.0.0.0), REFUSED, NXDOMAIN or custom IP-address.")),(0,i.kt)("h2",{id:"v13"},"v1.3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added method to get account limits.")),(0,i.kt)("h2",{id:"v12"},"v1.2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added new protocol types DNS and DNSCRYPT. Deprecating the PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP and DNSCRYPT_UDP that will be removed later.")),(0,i.kt)("h2",{id:"v11"},"v1.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added methods to retrieve statistics by time, domains, companies and devices."),(0,i.kt)("li",{parentName:"ul"},"Added method for updating device settings."),(0,i.kt)("li",{parentName:"ul"},"Fixed required fields definition.")),(0,i.kt)("h2",{id:"v10"},"v1.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added authentication."),(0,i.kt)("li",{parentName:"ul"},"CRUD operations with devices and DNS servers."),(0,i.kt)("li",{parentName:"ul"},"Query log."),(0,i.kt)("li",{parentName:"ul"},"Downloading DOT and DOT .mobileconfig."),(0,i.kt)("li",{parentName:"ul"},"Filter Lists and Web-Services.")))}g.isMDXComponent=!0}}]);