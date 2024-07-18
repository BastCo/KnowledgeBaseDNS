"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[657],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),o=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(d.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=o(t),m=a,y=g["".concat(d,".").concat(m)]||g[m]||u[m]||l;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=t(9668),a=(t(6540),t(5680));const l={title:"Oversigt",sidebar_position:1},i=void 0,s={unversionedId:"dns-client/overview",id:"dns-client/overview",title:"Oversigt",description:"Hvad er AdGuard DNS Client?",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/dns-client/overview.md",sourceDirName:"dns-client",slug:"/dns-client/overview",permalink:"/KnowledgeBaseDNS/da/dns-client/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/dns-client/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Oversigt",sidebar_position:1},sidebar:"sidebar",previous:{title:"Sikker ops\xe6tning af AdGuard Home",permalink:"/KnowledgeBaseDNS/da/adguard-home/running-securely"},next:{title:"Ops\xe6tningsfil",permalink:"/KnowledgeBaseDNS/da/dns-client/configuration"}},d={},o=[{value:"Hvad er AdGuard DNS Client?",id:"hvad-er-adguard-dns-client",level:2},{value:"Hurtigstart",id:"start",level:2},{value:"Komme i gang",id:"start-basic",level:2},{value:"UNIX-agtig operativsystemer",id:"start-basic-unix",level:3},{value:"Windows",id:"start-basic-win",level:3},{value:"Kommandolinjemuligheder",id:"opts",level:2},{value:"Hj\xe6lp",id:"opts-help",level:3},{value:"Tjeneste",id:"opts-service",level:3},{value:"Udf\xf8rlig",id:"opts-verbose",level:3},{value:"Version",id:"opts-version",level:3},{value:"Ops\xe6tning",id:"conf",level:2},{value:"Fil",id:"conf-file",level:3},{value:"Afslutningskoder",id:"exit-codes",level:2}],p={toc:o},g="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"hvad-er-adguard-dns-client"},"Hvad er AdGuard DNS Client?"),(0,a.yg)("p",null,"En krydsplatforms, letv\xe6gts DNS-klient til ",(0,a.yg)("a",{parentName:"p",href:"https://adguard-dns.io"},"AdGuard DNS"),". Den fungerer som en DNS-server, der videresender DNS-foresp\xf8rgsler til de korresponderende upstream-opl\xf8sere."),(0,a.yg)("h2",{id:"start"},"Hurtigstart"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"AdGuard DNS Client er stadig i betastadiet. Den kan v\xe6re ustabil.")),(0,a.yg)("p",null,"Underst\xf8ttede operativsystemer:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Linux"),(0,a.yg)("li",{parentName:"ul"},"macOS"),(0,a.yg)("li",{parentName:"ul"},"Windows")),(0,a.yg)("p",null,"Underst\xf8ttede CPU-arkitekturer:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"64-bit ARM"),(0,a.yg)("li",{parentName:"ul"},"AMD64"),(0,a.yg)("li",{parentName:"ul"},"i386")),(0,a.yg)("h2",{id:"start-basic"},"Komme i gang"),(0,a.yg)("h3",{id:"start-basic-unix"},"UNIX-agtig operativsystemer"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Download og udpak ",(0,a.yg)("inlineCode",{parentName:"p"},".tar.gz"),"- eller ",(0,a.yg)("inlineCode",{parentName:"p"},".zip"),"-arkivet fra ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardDNSClient/releases"},"udgivelsessiden"),"."),(0,a.yg)("admonition",{parentName:"li",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"P\xe5 macOS er det afg\xf8rende, at globalt installerede daemons ejes af ",(0,a.yg)("inlineCode",{parentName:"p"},"root")," (se ","[",(0,a.yg)("inlineCode",{parentName:"p"},"launchd"),"-dokumentationen]","[","launchd-krav]), s\xe5 den eksekverbare ",(0,a.yg)("inlineCode",{parentName:"p"},"AdGuardDNSClient")," skal placeres i mappen ",(0,a.yg)("inlineCode",{parentName:"p"},"/Applications/")," eller dens undermappe."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Install\xe9r den som en tjeneste ved at eksekvere:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardDNSClient -s install -v\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Redig\xe9r ops\xe6tningsfilen ",(0,a.yg)("inlineCode",{parentName:"p"},"config.yaml"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Start tjenesten:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardDNSClient -s start -v\n")))),(0,a.yg)("p",null,"For at tjekke, at det virker, brug et hvilket som helst DNS-kontrolv\xe6rkt\xf8j. F.eks. ved at bruge ",(0,a.yg)("inlineCode",{parentName:"p"},"nslookup"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"nslookup -debug 'www.example.com' '127.0.0.1'\n")),(0,a.yg)("h3",{id:"start-basic-win"},"Windows"),(0,a.yg)("p",null,"Download og install\xe9r blot vha. MSI-installationsprogrammet fra ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardDNSClient/releases"},"udgivelsessiden"),"."),(0,a.yg)("p",null,"For at tjekke, at det virker, brug et hvilket som helst DNS-kontrolv\xe6rkt\xf8j. F.eks. ved at bruge ",(0,a.yg)("inlineCode",{parentName:"p"},"nslookup.exe"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'nslookup -debug "www.example.com" "127.0.0.1"\n')),(0,a.yg)("h2",{id:"opts"},"Kommandolinjemuligheder"),(0,a.yg)("p",null,"Hver valgmulighed tilsides\xe6tter den korresponderende v\xe6rdi fra ops\xe6tningsfilen og milj\xf8et."),(0,a.yg)("h3",{id:"opts-help"},"Hj\xe6lp"),(0,a.yg)("p",null,"Valgmulighed ",(0,a.yg)("inlineCode",{parentName:"p"},"-h")," f\xe5r AdGuard DNS Client til at udskrive en hj\xe6lpemeddelelse til standardoutput og afslutte med en succes-statuskode."),(0,a.yg)("h3",{id:"opts-service"},"Tjeneste"),(0,a.yg)("p",null,"Mulighed ",(0,a.yg)("inlineCode",{parentName:"p"},"-s <value>")," angiver OS-tjenestehandlingen. Gyldige v\xe6rdier er:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"install"),": Installerer AdGuard DNS Client som en tjeneste"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"restart"),": Genstarter den k\xf8rende AdGuard DNS Client-tjeneste"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"start"),": Starter den installerede AdGuard DNS Client-tjeneste"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"status"),": Viser statussen p\xe5 den installerede AdGuard DNS Client-tjeneste"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"stop"),": Stopper den k\xf8rende AdGuard DNS Client"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"uninstall"),": Afinstallerer AdGuard DNS Client-tjenesten")),(0,a.yg)("h3",{id:"opts-verbose"},"Udf\xf8rlig"),(0,a.yg)("p",null,"Valgmulighed ",(0,a.yg)("inlineCode",{parentName:"p"},"-v")," aktiverer det udf\xf8rlige logoutput."),(0,a.yg)("h3",{id:"opts-version"},"Version"),(0,a.yg)("p",null,"Valgmulighed ",(0,a.yg)("inlineCode",{parentName:"p"},"--version")," f\xe5r AdGuard DNS Client til at udskrive versionen p\xe5 den eksekverbare ",(0,a.yg)("inlineCode",{parentName:"p"},"AdGuardDNSClient")," til standardoutput og afslutte med en succes-statuskode."),(0,a.yg)("h2",{id:"conf"},"Ops\xe6tning"),(0,a.yg)("h3",{id:"conf-file"},"Fil"),(0,a.yg)("p",null,"YAML-ops\xe6tningsfilen er beskrevet i ",(0,a.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/da/dns-client/configuration"},"sin egen artikel"),", og der findes ogs\xe5 en eksempel-ops\xe6tningsfil ",(0,a.yg)("inlineCode",{parentName:"p"},"config.dist.yaml"),".  Visse ops\xe6tningsparametre kan ogs\xe5 tilsides\xe6ttes vha. ",(0,a.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/da/dns-client/environment"},"environment"),"."),(0,a.yg)("h2",{id:"exit-codes"},"Afslutningskoder"),(0,a.yg)("p",null,"Der er et nogle forskellige afslutningskoder, som kan vises under forskellige fejltilstande:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"0"),": Fuldf\xf8rt og afsluttet, ingen fejl.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"1"),": Intern fejl, h\xf8jst sandsynligt en fejlops\xe6tning.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"2"),": Forkert kommandolinjeargument eller -v\xe6rdi."))))}u.isMDXComponent=!0}}]);