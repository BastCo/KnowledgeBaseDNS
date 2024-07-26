"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[11],{5680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>y});var l=a(6540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,l,i=function(e,n){if(null==e)return{};var a,l,i={},t=Object.keys(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=l.createContext({}),s=function(e){var n=l.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},g=function(e){var n=s(e.components);return l.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,d=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=i,y=u["".concat(d,".").concat(c)]||u[c]||p[c]||t;return a?l.createElement(y,r(r({ref:n},g),{},{components:a})):l.createElement(y,r({ref:n},g))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,r=new Array(t);r[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<t;s++)r[s]=a[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7307:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>s});var l=a(9668),i=(a(6540),a(5680));const t={title:"Changelog",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:3},r=void 0,o={unversionedId:"private-dns/api/changelog",id:"private-dns/api/changelog",title:"Changelog",description:"\x3c!--",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/private-dns/api/changelog.md",sourceDirName:"private-dns/api",slug:"/private-dns/api/changelog",permalink:"/KnowledgeBaseDNS/fr/private-dns/api/changelog",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/api/changelog.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Changelog",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"sidebar",previous:{title:"Reference",permalink:"/KnowledgeBaseDNS/fr/private-dns/api/reference"},next:{title:"Known issues",permalink:"/KnowledgeBaseDNS/fr/private-dns/solving-problems/known-issues"}},d={},s=[{value:"v1.9 (11 July 2024)",id:"v19-11-july-2024",level:2},{value:"v1.8",id:"v18",level:2},{value:"v1.7",id:"v17",level:2},{value:"v1.6",id:"v16",level:2},{value:"v1.5",id:"v15",level:2},{value:"Model for safebrowsing settings changed",id:"model-for-safebrowsing-settings-changed",level:3},{value:"Model for saving server settings changed",id:"model-for-saving-server-settings-changed",level:3},{value:"v1.4",id:"v14",level:2},{value:"v1.3",id:"v13",level:2},{value:"v1.2",id:"v12",level:2},{value:"v1.1",id:"v11",level:2},{value:"v1.0",id:"v10",level:2}],g={toc:s},u="wrapper";function p(e){let{components:n,...a}=e;return(0,i.yg)(u,(0,l.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This article contains the changelog for ",(0,i.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/fr/private-dns/api/overview"},"AdGuard DNS API"),"."),(0,i.yg)("h2",{id:"v19-11-july-2024"},"v1.9 (11 July 2024)"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added automatic device connection functionality:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"New DNS server setting \u2014 ",(0,i.yg)("inlineCode",{parentName:"li"},"auto_connect_devices_enabled"),", allowing approval for auto-connecting devices through a specific link type"),(0,i.yg)("li",{parentName:"ul"},"New field in Device \u2014 ",(0,i.yg)("inlineCode",{parentName:"li"},"auto_device"),", indicating that the device is automatically connected"))),(0,i.yg)("li",{parentName:"ul"},"Replaced ",(0,i.yg)("inlineCode",{parentName:"li"},"int")," with ",(0,i.yg)("inlineCode",{parentName:"li"},"long")," for ",(0,i.yg)("inlineCode",{parentName:"li"},"queries")," in CategoryQueriesStats, for ",(0,i.yg)("inlineCode",{parentName:"li"},"used")," in AccountLimits, and for ",(0,i.yg)("inlineCode",{parentName:"li"},"blocked")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"queries")," in QueriesStats")),(0,i.yg)("h2",{id:"v18"},"v1.8"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Released on April 20, 2024")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added support for DNS-over-HTTPS with authentication:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"New operation \u2014 reset DNS-over-HTTPS password for device"),(0,i.yg)("li",{parentName:"ul"},"New device setting \u2014 ",(0,i.yg)("inlineCode",{parentName:"li"},"detect_doh_auth_only"),". Disables all DNS connection methods except DNS-over-HTTPS with authentication"),(0,i.yg)("li",{parentName:"ul"},"New field in Device DNSAddresses \u2014 ",(0,i.yg)("inlineCode",{parentName:"li"},"dns_over_https_with_auth_url"),". Indicates the URL to use when connecting using DNS-over-HTTPS with authentication")))),(0,i.yg)("h2",{id:"v17"},"v1.7"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Released on March 11, 2024")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added dedicated IPv4 addresses functionality:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Dedicated IPv4 addresses can now be used on devices for DNS server configuration"),(0,i.yg)("li",{parentName:"ul"},"Dedicated IPv4 address is now associated with the device it is linked to, so that queries made to this address are logged for that device"))),(0,i.yg)("li",{parentName:"ul"},"Added new operations:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"List all available dedicated IPv4 addresses"),(0,i.yg)("li",{parentName:"ul"},"Allocate new dedicated IPv4 address"),(0,i.yg)("li",{parentName:"ul"},"Link an available IPv4 address to a device"),(0,i.yg)("li",{parentName:"ul"},"Unlink an IPv4 address from a device"),(0,i.yg)("li",{parentName:"ul"},"Request info on dedicated addresses associated with a device"))),(0,i.yg)("li",{parentName:"ul"},"Added new limits to Account limits:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"dedicated_ipv4")," \u2014 provides information about the amount of already allocated dedicated IPv4 addresses, as well as the limit on them"))),(0,i.yg)("li",{parentName:"ul"},"Removed deprecated field of DNSServerSettings:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"safebrowsing_enabled"))))),(0,i.yg)("h2",{id:"v16"},"v1.6"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Released on January 22, 2024")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'Added new section "Access settings" for DNS profiles (',(0,i.yg)("inlineCode",{parentName:"p"},"access_settings"),"). By customizing these fields, you\u2019ll be able to protect your AdGuard DNS server from unauthorized access:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"allowed_clients")," \u2014 here you can specify which clients can use your DNS server. This field will have priority over the ",(0,i.yg)("inlineCode",{parentName:"li"},"blocked_clients")," field"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"blocked_clients")," \u2014 here you can specify which clients are not allowed to use your DNS server"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"blocked_domain_rules")," \u2014 here you can specify which domains are not allowed to access your DNS server, as well as define such domains with wildcard and DNS filtering rules"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Added new limits to Account limits:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"access_rules")," provides the sum of currently used ",(0,i.yg)("inlineCode",{parentName:"li"},"blocked_clients")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"blocked_domain_rules")," values, as well as the limit on access rules"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"user_rules")," shows the amount of created user rules, as well as the limit on them"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Added new setting: ",(0,i.yg)("inlineCode",{parentName:"p"},"ip_log_enabled")," for the ability to log client IP addresses and domains.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Added new error code ",(0,i.yg)("inlineCode",{parentName:"p"},"FIELD_REACHED_LIMIT")," to indicate when limits have been reached:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"For the total number of ",(0,i.yg)("inlineCode",{parentName:"li"},"blocked_clients")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"blocked_domain_rules")," in access settings"),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"rules")," in custom user rules settings")))),(0,i.yg)("h2",{id:"v15"},"v1.5"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Released on June 16, 2023")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added new setting ",(0,i.yg)("inlineCode",{parentName:"li"},"block_nrd")," and group all security-related settings to one place.")),(0,i.yg)("h3",{id:"model-for-safebrowsing-settings-changed"},"Model for safebrowsing settings changed"),(0,i.yg)("p",null,"From"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "enabled": true\n}\n')),(0,i.yg)("p",null,"To:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "enabled": true,\n   "block_dangerous_domains": true,\n   "block_nrd": false\n}\n')),(0,i.yg)("p",null,"where ",(0,i.yg)("inlineCode",{parentName:"p"},"enabled")," is now control all settings in group, ",(0,i.yg)("inlineCode",{parentName:"p"},"block_dangerous_domains"),' is previous model field "enabled" and ',(0,i.yg)("inlineCode",{parentName:"p"},"block_nrd")," is settings for filtering newly registered domains."),(0,i.yg)("h3",{id:"model-for-saving-server-settings-changed"},"Model for saving server settings changed"),(0,i.yg)("p",null,"From:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "protection_enabled" : true,\n  "safebrowsing_enabled" : true,\n  ..\n}\n')),(0,i.yg)("p",null,"to:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "protection_enabled" : true,\n  "safebrowsing_settings" : {\n     "enabled": true,\n     "block_dangerous_domains": true,\n     "block_nrd": false\n  }\n  ..\n}\n')),(0,i.yg)("p",null,"here new field ",(0,i.yg)("inlineCode",{parentName:"p"},"safebrowsing_settings")," is used instead of deprecated ",(0,i.yg)("inlineCode",{parentName:"p"},"safebrowsing_enabled"),", whose value stored in ",(0,i.yg)("inlineCode",{parentName:"p"},"block_dangerous_domains"),"."),(0,i.yg)("h2",{id:"v14"},"v1.4"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Released on March 29, 2023")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added configurable option for blocking response: default (0.0.0.0), REFUSED, NXDOMAIN or custom IP-address.")),(0,i.yg)("h2",{id:"v13"},"v1.3"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Released on December 13, 2022")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added method to get account limits.")),(0,i.yg)("h2",{id:"v12"},"v1.2"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Released on October 14, 2022")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added new protocol types DNS and DNSCRYPT. Deprecating the PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP and DNSCRYPT_UDP that will be removed later.")),(0,i.yg)("h2",{id:"v11"},"v1.1"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Released on July 07, 2022")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added methods to retrieve statistics by time, domains, companies and devices."),(0,i.yg)("li",{parentName:"ul"},"Added method for updating device settings."),(0,i.yg)("li",{parentName:"ul"},"Fixed required fields definition.")),(0,i.yg)("h2",{id:"v10"},"v1.0"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Released on February 22, 2022")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added authentication."),(0,i.yg)("li",{parentName:"ul"},"CRUD operations with devices and DNS servers."),(0,i.yg)("li",{parentName:"ul"},"Query log."),(0,i.yg)("li",{parentName:"ul"},"Downloading DOT and DOT .mobileconfig."),(0,i.yg)("li",{parentName:"ul"},"Filter Lists and Web-Services.")))}p.isMDXComponent=!0}}]);