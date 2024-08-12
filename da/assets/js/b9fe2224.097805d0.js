"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[29],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>u});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(r),f=a,u=g["".concat(o,".").concat(f)]||g[f]||m[f]||l;return r?n.createElement(u,s(s({ref:t},d),{},{components:r})):n.createElement(u,s({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[g]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(9668),a=(r(6540),r(5680));const l={},s="S\xe5dan opretter eget DNS-stempel til Sikker DNS",i={unversionedId:"miscellaneous/create-dns-stamp",id:"miscellaneous/create-dns-stamp",title:"S\xe5dan opretter eget DNS-stempel til Sikker DNS",description:"Denne guide viser dig, hvordan et eget DNS-stempel til sikker DNS oprettes. Sikker DNS er en tjeneste, der forbedrer internetsikkerhed og fortrolighed ved at kryptere DNS-foresp\xf8rgslerne. Dette forhindrer foresp\xf8rgslerne i at blive opsnappet eller manipuleret af ondsindede akt\xf8rer.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/miscellaneous/create-dns-stamp.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/create-dns-stamp",permalink:"/KnowledgeBaseDNS/da/miscellaneous/create-dns-stamp",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/miscellaneous/create-dns-stamp.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tilskrivninger og Anerkendelser",permalink:"/KnowledgeBaseDNS/da/miscellaneous/acknowledgements"}},o={},p=[{value:"Introduktion til DNS-stempler",id:"introduktion-til-dns-stempler",level:2},{value:"Valg af protokol",id:"valg-af-protokol",level:2},{value:"Oprettelse af et DNS-stempel",id:"oprettelse-af-et-dns-stempel",level:2},{value:"Indhentning af certifikat-hash",id:"indhentning-af-certifikat-hash",level:3},{value:"Brug af DNS-stemplet",id:"brug-af-dns-stemplet",level:2},{value:"Eksempel p\xe5 oprettelse af et DNS-stempel",id:"eksempel-p\xe5-oprettelse-af-et-dns-stempel",level:2}],d={toc:p},g="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"s\xe5dan-opretter-eget-dns-stempel-til-sikker-dns"},"S\xe5dan opretter eget DNS-stempel til Sikker DNS"),(0,a.yg)("p",null,"Denne guide viser dig, hvordan et eget DNS-stempel til sikker DNS oprettes. Sikker DNS er en tjeneste, der forbedrer internetsikkerhed og fortrolighed ved at kryptere DNS-foresp\xf8rgslerne. Dette forhindrer foresp\xf8rgslerne i at blive opsnappet eller manipuleret af ondsindede akt\xf8rer."),(0,a.yg)("p",null,"Secure DNS usually uses ",(0,a.yg)("inlineCode",{parentName:"p"},"tls://"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"https://"),", or ",(0,a.yg)("inlineCode",{parentName:"p"},"quic://")," URLs. Dette er tilstr\xe6kkeligt for de fleste brugere og er den anbefalede m\xe5de."),(0,a.yg)("p",null,"Har man brug for yderligere sikkerhed, som f.eks. forudopl\xf8ste server-IP'er og certifikat pinning med hash, kan man generere sit eget DNS-stempel."),(0,a.yg)("h2",{id:"introduktion-til-dns-stempler"},"Introduktion til DNS-stempler"),(0,a.yg)("p",null,"DNS-stempler er korte strenge indeholdende alle de n\xf8dvendige oplysninger for at oprette forbindelse til en sikker DNS-server. De forenkler processen med at ops\xe6tte sikker DNS, da brugeren ikke beh\xf8ver at angive alle disse data manuelt."),(0,a.yg)("p",null,"DNS-stempler muligg\xf8r tilpasning af Sikker DNS-indstillinger ud over de s\xe6dvanlige URL'er. De giver is\xe6r mulighed for at angive faste (hard-koded) serveradresser, bruge certifikat-hashing mv. Disse funktioner g\xf8r DNS-stempler til en mere robust og alsidig mulighed til ops\xe6tning af Sikker DNS-indstillinger."),(0,a.yg)("h2",{id:"valg-af-protokol"},"Valg af protokol"),(0,a.yg)("p",null,"Types of Secure DNS include ",(0,a.yg)("inlineCode",{parentName:"p"},"DNS-over-HTTPS (DoH)"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"DNS-over-QUIC (DoQ)"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"DNS-over-TLS (DoT)"),", and some others. Valget af en af disse protokoller afh\xe6nger af brugskonteksten."),(0,a.yg)("h2",{id:"oprettelse-af-et-dns-stempel"},"Oprettelse af et DNS-stempel"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\xc5bn ",(0,a.yg)("a",{parentName:"p",href:"https://dnscrypt.info/stamps/"},"DNSCrypt Stamp Calculator"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Afh\xe6ngigt af den valgte protokol, v\xe6lg den korresponderende protokol fra rullemenuen (DoH, DoT eller DoQ).")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Udfyld de n\xf8dvendige felter:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"IP-adresse"),": Angiv DNS-serverens IP-adresse. Bruges DoT- eller DoQ-protokollen, s\xe5 s\xf8rg for, at den relevante port ligeledes er angivet.")),(0,a.yg)("admonition",{parentName:"li",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Dette felt er valgfrit og b\xf8r bruges med forsigtighed: Brug af denne indstilling kan afbryde internet p\xe5 IPv6-netv\xe6rk.")))),(0,a.yg)("p",null,":::"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"- **Hashes**: Angiv SHA256-sammendraget for et af de TBS-certifikater, der findes i valideringsk\xe6den. Leverer den anvendte DNS-server en f\xe6rdig hash, s\xe5 find og kopi\xe9r denne. Ellers kan den hentes ved at f\xf8lge vejledningen i afsnittet [*Hentning af Certifikat Hash'en*](#obtaining-the-certificate-hash).\n\n:::note\n\nDette felt er valgfrit\n")),(0,a.yg)("p",null,":::"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'- **V\xe6rtsnavn**: Angiv DNS-serverens v\xe6rtsnavn. Dette felt bruges til bekr\xe6ftelse af servernavnet i DoT- og DoQ-protokoller.\n\n- For **DoH**:\n  - **Sti**: Angiv stien til udf\xf8relse af DoH-foresp\xf8rgsler. Dette er normalt `"/dns-query"`, men din udbyder kan bruge en anden sti.\n\n-     For **DoT og DoQ**:\n  - Der er normalt ingen bestemte felter til disse protokoller i dette v\xe6rkt\xf8j. S\xf8rg blot for, at den i opl\xf8seradressen angivne port ogs\xe5 er den korrekte port.\n\n- I afsnittet **Egenskaber** kan de relevante egenskaber markeres, s\xe5fremt de er kendte og relevante for DNS-serveren.\n')),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Dit stempel genereres automatisk og vil fremg\xe5 i feltet ",(0,a.yg)("strong",{parentName:"li"},"Stamp"),".")),(0,a.yg)("h3",{id:"indhentning-af-certifikat-hash"},"Indhentning af certifikat-hash"),(0,a.yg)("p",null,"For at udfylde ",(0,a.yg)("strong",{parentName:"p"},"hash'ene for serverens certifikat"),"-felt kan flg. kommando bruges, hvor ",(0,a.yg)("inlineCode",{parentName:"p"},"<IP_ADDRESS>"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"<PORT>"),"og ",(0,a.yg)("inlineCode",{parentName:"p"},"<SERVER_NAME>")," erstattes med de korresponderende v\xe6rdier for din DNS-server:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servernavn <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256\n")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Resultatet af hash-kommandoen kan \xe6ndre sig over tid i takt med, at serverens certifikat opdateres. Holder DNS-stemplet derfor pludselig op holder op med at virke, skal certifikat-hash'en muligvis genberegnes og et nyt stempel genereres. Regelm\xe6ssig opdatering af DNS-stemplet vil medvirke til at sikre den fortsatte sikre drift af Sikker DNS-tjenesten.")),(0,a.yg)("h2",{id:"brug-af-dns-stemplet"},"Brug af DNS-stemplet"),(0,a.yg)("p",null,"Du har nu dit eget DNS-stempel, som kan bruges til at ops\xe6tte Sikker DNS. Dette stempel kan angives i AdGuard og AdGuard VPN for forbedret internetfortrolighed og sikkerhed."),(0,a.yg)("h2",{id:"eksempel-p\xe5-oprettelse-af-et-dns-stempel"},"Eksempel p\xe5 oprettelse af et DNS-stempel"),(0,a.yg)("p",null,"Lad os se p\xe5 et eksempel p\xe5 oprettelsen af et stempel til AdGuard DNS vha. DoT:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\xc5bn ",(0,a.yg)("a",{parentName:"p",href:"https://dnscrypt.info/stamps/"},"DNSCrypt Stamp Calculator"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"V\xe6lg protokollen DNS-over-TLS (DoT).")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Udfyld flg. felter:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"IP-adresse"),": Angiv DNS-serverens IP-adresse og port. I dette eksempel ",(0,a.yg)("inlineCode",{parentName:"p"},"94.140.14.14:853"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"V\xe6rtsnavn"),": Angiv DNS-serverens v\xe6rtsnavn. I dette eksempel ",(0,a.yg)("inlineCode",{parentName:"p"},"dns.adguard-dns.com"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Hashes"),": Eksekv\xe9r kommandoen"))),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256\n")),(0,a.yg)("p",{parentName:"li"},"Resultatet er ",(0,a.yg)("inlineCode",{parentName:"p"},"1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8")," Inds\xe6t denne SHA256-hash af serverens certifikat i feltet.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Lad afsnittet Egenskaber st\xe5 tomt.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Dit stempel genereres automatisk og vil fremg\xe5 i feltet ",(0,a.yg)("strong",{parentName:"p"},"Stamp"),"."))))}m.isMDXComponent=!0}}]);