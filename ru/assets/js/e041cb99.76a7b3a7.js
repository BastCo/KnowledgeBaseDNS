"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[64],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=g(a),y=r,m=s["".concat(l,".").concat(y)]||s[y]||u[y]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var g=2;g<i;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},1187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var n=a(9668),r=(a(6540),a(5680));const i={title:"\u041e\u0431\u0437\u043e\u0440",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:3},o=void 0,p={unversionedId:"private-dns/api/overview",id:"private-dns/api/overview",title:"\u041e\u0431\u0437\u043e\u0440",description:"\x3c!--",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/private-dns/api/overview.md",sourceDirName:"private-dns/api",slug:"/private-dns/api/overview",permalink:"/KnowledgeBaseDNS/ru/private-dns/api/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/api/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u041e\u0431\u0437\u043e\u0440",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"sidebar",previous:{title:"\u041e\u0431\u0437\u043e\u0440",permalink:"/KnowledgeBaseDNS/ru/private-dns/overview"},next:{title:"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e API",permalink:"/KnowledgeBaseDNS/ru/private-dns/api/reference"}},l={},g=[{value:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",id:"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",level:2},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0442\u043e\u043a\u0435\u043d\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430",level:4},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u044b\u0439 \u0442\u043e\u043a\u0435\u043d",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0442\u043e\u043a\u0435\u043d\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430-\u0447\u0435\u0440\u0435\u0437-\u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u044b\u0439-\u0442\u043e\u043a\u0435\u043d",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-1",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-1",level:4},{value:"\u041e\u0442\u0437\u044b\u0432 \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u0442\u043e\u043a\u0435\u043d\u0430",id:"\u043e\u0442\u0437\u044b\u0432-\u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u043e\u0433\u043e-\u0442\u043e\u043a\u0435\u043d\u0430",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-2",level:4},{value:"Authorization endpoint",id:"authorization-endpoint",level:3},{value:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a API",id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0434\u043e\u0441\u0442\u0443\u043f\u0430-\u043a-api",level:3},{value:"API",id:"api",level:2},{value:"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e API",id:"\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e-\u043f\u043e-api",level:3},{value:"\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f OpenAPI",id:"\u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f-openapi",level:3},{value:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0432\u0435\u0440\u0441\u0438\u0439",id:"\u0438\u0441\u0442\u043e\u0440\u0438\u044f-\u0432\u0435\u0440\u0441\u0438\u0439",level:3},{value:"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c",id:"\u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f-\u0441\u0432\u044f\u0437\u044c",level:2}],d={toc:g},s="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"AdGuard DNS \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 REST API, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445."),(0,r.yg)("h2",{id:"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"},"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"),(0,r.yg)("h3",{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0442\u043e\u043a\u0435\u043d\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"),(0,r.yg)("p",null,"Make a POST request for the following URL with the given params to generate the ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token"),":"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/oauth_token")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"\u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Email")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"\u043f\u0430\u0440\u043e\u043b\u044c")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u041f\u0430\u0440\u043e\u043b\u044c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"mfa_token"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u0422\u043e\u043a\u0435\u043d \u0434\u0432\u0443\u0445\u0444\u0430\u043a\u0442\u043e\u0440\u043d\u043e\u0439 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 (\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430)")))),(0,r.yg)("p",null,"\u0412 \u043e\u0442\u0432\u0435\u0442 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token")," \u0438 ",(0,r.yg)("inlineCode",{parentName:"p"},"refresh_token"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"access_token")," \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434 (\u0441\u0440\u043e\u043a \u0443\u043a\u0430\u0437\u0430\u043d \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,r.yg)("inlineCode",{parentName:"p"},"expires_in"),"). \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,r.yg)("inlineCode",{parentName:"p"},"refresh_token")," (\u0421\u043c.: ",(0,r.yg)("inlineCode",{parentName:"p"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u044b\u0439 \u0442\u043e\u043a\u0435\u043d"),").")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"refresh_token")," \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0438 \u0437\u0430\u0442\u0435\u043c \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f. \u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c ",(0,r.yg)("inlineCode",{parentName:"p"},"refresh_token"),", \u0441\u043c.: ",(0,r.yg)("inlineCode",{parentName:"p"},"\u041e\u0442\u0437\u044b\u0432 \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u0442\u043e\u043a\u0435\u043d\u0430"),"."))),(0,r.yg)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'username=user%40adguard.com' \\\n    -d 'password=********' \\\n    -d 'mfa_token=727810'\n")),(0,r.yg)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",\n  "token_type": "bearer",\n  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",\n  "expires_in": 2620978\n}\n')),(0,r.yg)("h3",{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0442\u043e\u043a\u0435\u043d\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430-\u0447\u0435\u0440\u0435\u0437-\u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u044b\u0439-\u0442\u043e\u043a\u0435\u043d"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u044b\u0439 \u0442\u043e\u043a\u0435\u043d"),(0,r.yg)("p",null,"\u0422\u043e\u043a\u0435\u043d\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438\u043c\u0435\u044e\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. Once it expires, your app will have to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"refresh token")," to request for a new ",(0,r.yg)("inlineCode",{parentName:"p"},"access token"),"."),(0,r.yg)("p",null,"\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 POST-\u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0430:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/oauth_token")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"refresh_token")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"\u041f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u044b\u0439 \u0442\u043e\u043a\u0435\u043d"),", \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d \u043d\u043e\u0432\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0430.")))),(0,r.yg)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'\n")),(0,r.yg)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",\n  "token_type": "bearer",\n  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",\n  "expires_in": 2627999\n}\n')),(0,r.yg)("h3",{id:"\u043e\u0442\u0437\u044b\u0432-\u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u043e\u0433\u043e-\u0442\u043e\u043a\u0435\u043d\u0430"},"\u041e\u0442\u0437\u044b\u0432 \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u0442\u043e\u043a\u0435\u043d\u0430"),(0,r.yg)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u044b\u0439 \u0442\u043e\u043a\u0435\u043d, \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 POST-\u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/revoke_token")),(0,r.yg)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \\\n    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"refresh_token")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"\u041f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u043c\u044b\u0439 \u0442\u043e\u043a\u0435\u043d"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0431\u0440\u043e\u0448\u0435\u043d")))),(0,r.yg)("h3",{id:"authorization-endpoint"},"Authorization endpoint"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"To access this endpoint, you need to contact us at ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"mailto:devteam@adguard.com"},"devteam@adguard.com")),". Please describe the reason and use cases for this endpoint, as well as provide the redirect URI. Upon approval, you will receive a unique client identifier, which should be used for the ",(0,r.yg)("strong",{parentName:"p"},"client_id")," parameter.")),(0,r.yg)("p",null,"The ",(0,r.yg)("strong",{parentName:"p"},"/oapi/v1/oauth_authorize")," endpoint is used to interact with the resource owner and get the authorization to access the protected resource."),(0,r.yg)("p",null,"The service redirects you to AdGuard to authenticate (if you are not already logged in) and then back to your application."),(0,r.yg)("p",null,"The request parameters of the ",(0,r.yg)("strong",{parentName:"p"},"/oapi/v1/oauth_authorize")," endpoint are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"response_type")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Tells the authorization server which grant to execute")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"client_id")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The ID of the OAuth client that asks for authorization")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"redirect_uri")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Contains a URL. A successful response from this endpoint results in a redirect to this URL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"state")),(0,r.yg)("td",{parentName:"tr",align:"left"},"An opaque value used for security purposes. If this request parameter is set in the request, it is returned to the application as part of the ",(0,r.yg)("strong",{parentName:"td"},"redirect_uri"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"aid")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Affiliate identifier")))),(0,r.yg)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82\n")),(0,r.yg)("p",null,"To inform the authorization server which grant type to use, the ",(0,r.yg)("strong",{parentName:"p"},"response_type")," request parameter is used as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For the Implicit grant, use ",(0,r.yg)("strong",{parentName:"li"},"response_type=token")," to include an access token.")),(0,r.yg)("p",null,"A successful response is ",(0,r.yg)("strong",{parentName:"p"},"302 Found"),", which triggers a redirect to ",(0,r.yg)("strong",{parentName:"p"},"redirect_uri")," (which is a request parameter). The response parameters are embedded in the fragment component (the part after ",(0,r.yg)("inlineCode",{parentName:"p"},"#"),") of the ",(0,r.yg)("strong",{parentName:"p"},"redirect_uri")," parameter in the ",(0,r.yg)("strong",{parentName:"p"},"Location")," header."),(0,r.yg)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"HTTP/1.1 302 Found\nLocation: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82\n")),(0,r.yg)("h3",{id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0434\u043e\u0441\u0442\u0443\u043f\u0430-\u043a-api"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a API"),(0,r.yg)("p",null,"Once the access and the refresh tokens are generated, API calls can be made by passing the access token in the header."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u0418\u043c\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ",(0,r.yg)("inlineCode",{parentName:"li"},"Authorization")),(0,r.yg)("li",{parentName:"ul"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ",(0,r.yg)("inlineCode",{parentName:"li"},"Bearer {access_token}"))),(0,r.yg)("h2",{id:"api"},"API"),(0,r.yg)("h3",{id:"\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e-\u043f\u043e-api"},"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e API"),(0,r.yg)("p",null,"Please see the methods reference ",(0,r.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ru/private-dns/api/reference"},"here"),"."),(0,r.yg)("h3",{id:"\u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f-openapi"},"\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f OpenAPI"),(0,r.yg)("p",null,"\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f OpenAPI \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,r.yg)("a",{parentName:"p",href:"https://api.adguard-dns.io/static/swagger/openapi.json"},"https://api.adguard-dns.io/static/swagger/openapi.json"),"."),(0,r.yg)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 API. For instance, you can open this file in ",(0,r.yg)("a",{parentName:"p",href:"https://editor.swagger.io/"},"https://editor.swagger.io/"),"."),(0,r.yg)("h3",{id:"\u0438\u0441\u0442\u043e\u0440\u0438\u044f-\u0432\u0435\u0440\u0441\u0438\u0439"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0432\u0435\u0440\u0441\u0438\u0439"),(0,r.yg)("p",null,"The complete AdGuard DNS API changelog is available on ",(0,r.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ru/private-dns/api/changelog"},"this page"),"."),(0,r.yg)("h2",{id:"\u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f-\u0441\u0432\u044f\u0437\u044c"},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"),(0,r.yg)("p",null,"If you would like this API to be extended with new methods, please email us to ",(0,r.yg)("inlineCode",{parentName:"p"},"devteam@adguard.com")," and let us know what you would like to be added."))}u.isMDXComponent=!0}}]);