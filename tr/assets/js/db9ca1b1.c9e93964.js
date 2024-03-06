"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[745],{4137:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,c=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(c,l(l({ref:t},k),{},{components:n})):a.createElement(c,l({ref:t},k))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(3117),r=n(102),i=(n(7294),n(4137)),l=["components"],o={title:"Genel Bak\u0131\u015f",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:3},p=void 0,d={unversionedId:"private-dns/api/overview",id:"private-dns/api/overview",title:"Genel Bak\u0131\u015f",description:"\x3c!--",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/private-dns/api/overview.md",sourceDirName:"private-dns/api",slug:"/private-dns/api/overview",permalink:"/KnowledgeBaseDNS/tr/private-dns/api/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/api/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Genel Bak\u0131\u015f",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"sidebar",previous:{title:"Genel Bak\u0131\u015f",permalink:"/KnowledgeBaseDNS/tr/private-dns/overview"},next:{title:"Referans",permalink:"/KnowledgeBaseDNS/tr/private-dns/api/reference"}},k={},s=[{value:"Kimlik Do\u011frulama",id:"kimlik-do\u011frulama",level:2},{value:"Generate Access token",id:"generate-access-token",level:3},{value:"\xd6rnek istek",id:"\xf6rnek-istek",level:4},{value:"\xd6rnek yan\u0131t",id:"\xf6rnek-yan\u0131t",level:4},{value:"Yenileme Belirtecinden Eri\u015fim Belirteci Olu\u015fturma",id:"yenileme-belirtecinden-eri\u015fim-belirteci-olu\u015fturma",level:3},{value:"\xd6rnek istek",id:"\xf6rnek-istek-1",level:4},{value:"\xd6rnek yan\u0131t",id:"\xf6rnek-yan\u0131t-1",level:4},{value:"Revoking a Refresh Token",id:"revoking-a-refresh-token",level:3},{value:"\u0130stek \xd6rne\u011fi",id:"i\u0307stek-\xf6rne\u011fi",level:4},{value:"API&#39;ye eri\u015fim",id:"apiye-eri\u015fim",level:3},{value:"API",id:"api",level:2},{value:"Referans",id:"referans",level:3},{value:"OpenAPI \xf6zellikleri",id:"openapi-\xf6zellikleri",level:3},{value:"Changelog",id:"changelog",level:3},{value:"Geri Bildirim",id:"geri-bildirim",level:2}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"AdGuard DNS, uygulamalar\u0131n\u0131z\u0131 entegre etmek i\xe7in kullanabilece\u011finiz bir REST API sa\u011flar."),(0,i.kt)("h2",{id:"kimlik-do\u011frulama"},"Kimlik Do\u011frulama"),(0,i.kt)("h3",{id:"generate-access-token"},"Generate Access token"),(0,i.kt)("p",null,"Make a POST request for the following URL with the given params to generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/oauth_token")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parametre"),(0,i.kt)("th",{parentName:"tr",align:"left"},"A\xe7\u0131klama"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"kullan\u0131c\u0131 ad\u0131")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Hesap e-postas\u0131")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"parola")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Hesap parolas\u0131")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mfa_token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u0130ki Fakt\xf6rl\xfc kimlik do\u011frulama belirteci (hesap ayarlar\u0131nda etkinle\u015ftirilmi\u015fse)")))),(0,i.kt)("p",null,"Yan\u0131t olarak hem ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," hem de ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," al\u0131rs\u0131n\u0131z."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," s\xfcresi belirli bir saniye sonra dolar (yan\u0131ttaki ",(0,i.kt)("inlineCode",{parentName:"p"},"expires_in")," parametresiyle temsil edilir). ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," kullanarak yeni bir ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," olu\u015fturabilirsiniz (Bak\u0131n\u0131z: ",(0,i.kt)("inlineCode",{parentName:"p"},"Yenileme Belirtecinden Eri\u015fim Belirteci Olu\u015fturma"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," kal\u0131c\u0131d\u0131r. To revoke a ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),", refer: ",(0,i.kt)("inlineCode",{parentName:"p"},"Revoking a Refresh Token"),"."))),(0,i.kt)("h4",{id:"\xf6rnek-istek"},"\xd6rnek istek"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'username=user%40adguard.com' \\\n    -d 'password=********' \\\n    -d 'mfa_token=727810'\n")),(0,i.kt)("h4",{id:"\xf6rnek-yan\u0131t"},"\xd6rnek yan\u0131t"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",\n  "token_type": "bearer",\n  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",\n  "expires_in": 2620978\n}\n')),(0,i.kt)("h3",{id:"yenileme-belirtecinden-eri\u015fim-belirteci-olu\u015fturma"},"Yenileme Belirtecinden Eri\u015fim Belirteci Olu\u015fturma"),(0,i.kt)("p",null,"Eri\u015fim belirte\xe7lerinin ge\xe7erlili\u011fi s\u0131n\u0131rl\u0131d\u0131r. S\xfcresi doldu\u011funda, uygulaman\u0131z yeni bir ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh token")," talep etmek i\xe7in ",(0,i.kt)("inlineCode",{parentName:"p"},"access token")," kullanmas\u0131 gerekecektir."),(0,i.kt)("p",null,"Make the following POST request with the given params to get a new access token:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/oauth_token")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parametre"),(0,i.kt)("th",{parentName:"tr",align:"left"},"A\xe7\u0131klama"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"refresh_token")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"REFRESH TOKEN")," kullan\u0131larak yeni bir eri\u015fim belirteci olu\u015fturulmal\u0131d\u0131r.")))),(0,i.kt)("h4",{id:"\xf6rnek-istek-1"},"\xd6rnek istek"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'\n")),(0,i.kt)("h4",{id:"\xf6rnek-yan\u0131t-1"},"\xd6rnek yan\u0131t"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",\n  "token_type": "bearer",\n  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",\n  "expires_in": 2627999\n}\n')),(0,i.kt)("h3",{id:"revoking-a-refresh-token"},"Revoking a Refresh Token"),(0,i.kt)("p",null,"To revoke a refresh token, make the following POST request with the given params:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/revoke_token")),(0,i.kt)("h4",{id:"i\u0307stek-\xf6rne\u011fi"},"\u0130stek \xd6rne\u011fi"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \\\n    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parametre"),(0,i.kt)("th",{parentName:"tr",align:"left"},"A\xe7\u0131klama"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"refresh_token")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"REFRESH TOKEN")," which is to be revoked")))),(0,i.kt)("h3",{id:"apiye-eri\u015fim"},"API'ye eri\u015fim"),(0,i.kt)("p",null,"Once the access and the refresh tokens are generated, API calls can be made by passing the access token in the header."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ba\u015fl\u0131k ad\u0131 ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization")," olmal\u0131d\u0131r"),(0,i.kt)("li",{parentName:"ul"},"Ba\u015fl\u0131k de\u011feri ",(0,i.kt)("inlineCode",{parentName:"li"},"Bearer {access_token}")," olmal\u0131d\u0131r")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"referans"},"Referans"),(0,i.kt)("p",null,"L\xfctfen referans y\xf6ntemlerine ",(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/tr/private-dns/api/reference"},"buradan")," bak\u0131n."),(0,i.kt)("h3",{id:"openapi-\xf6zellikleri"},"OpenAPI \xf6zellikleri"),(0,i.kt)("p",null,"OpenAPI specification is available at ",(0,i.kt)("a",{parentName:"p",href:"https://api.adguard-dns.io/static/swagger/openapi.json"},"https://api.adguard-dns.io/static/swagger/openapi.json"),"."),(0,i.kt)("p",null,"Kullan\u0131labilir API y\xf6ntemlerinin listesini g\xf6r\xfcnt\xfclemek i\xe7in farkl\u0131 ara\xe7lar kullanabilirsiniz. \xd6rne\u011fin, bu dosyay\u0131 ",(0,i.kt)("a",{parentName:"p",href:"https://editor.swagger.io/"},"https://editor.swagger.io/")," adresinde a\xe7abilirsiniz."),(0,i.kt)("h3",{id:"changelog"},"Changelog"),(0,i.kt)("p",null,"The complete AdGuard DNS API changelog is available on ",(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/tr/private-dns/api/changelog"},"this page"),"."),(0,i.kt)("h2",{id:"geri-bildirim"},"Geri Bildirim"),(0,i.kt)("p",null,"If you would like this API to be extended with new methods, please email us to ",(0,i.kt)("inlineCode",{parentName:"p"},"devteam@adguard.com")," and let us know what you would like to be added."))}m.isMDXComponent=!0}}]);