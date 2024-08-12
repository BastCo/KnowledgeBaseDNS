"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[511],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(9668),a=(n(6540),n(5680));const o={},s="How to create your own DNS stamp for Secure DNS",i={unversionedId:"miscellaneous/create-dns-stamp",id:"miscellaneous/create-dns-stamp",title:"How to create your own DNS stamp for Secure DNS",description:"This guide will show you how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents your queries from being intercepted or manipulated by malicious actors.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/miscellaneous/create-dns-stamp.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/create-dns-stamp",permalink:"/KnowledgeBaseDNS/zh-CN/miscellaneous/create-dns-stamp",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/miscellaneous/create-dns-stamp.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"\u81f4\u8c22",permalink:"/KnowledgeBaseDNS/zh-CN/miscellaneous/acknowledgements"}},l={},p=[{value:"Introduction to DNS stamps",id:"introduction-to-dns-stamps",level:2},{value:"Choosing the protocol",id:"choosing-the-protocol",level:2},{value:"Creating a DNS stamp",id:"creating-a-dns-stamp",level:2},{value:"Obtaining the certificate hash",id:"obtaining-the-certificate-hash",level:3},{value:"Using the DNS stamp",id:"using-the-dns-stamp",level:2},{value:"Example of creating a DNS stamp",id:"example-of-creating-a-dns-stamp",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"how-to-create-your-own-dns-stamp-for-secure-dns"},"How to create your own DNS stamp for Secure DNS"),(0,a.yg)("p",null,"This guide will show you how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents your queries from being intercepted or manipulated by malicious actors."),(0,a.yg)("p",null,"Secure DNS usually uses ",(0,a.yg)("inlineCode",{parentName:"p"},"tls://"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"https://"),", or ",(0,a.yg)("inlineCode",{parentName:"p"},"quic://")," URLs. This is sufficient for most users and is the recommended way."),(0,a.yg)("p",null,"However, if you need additional security, like pre-resolved server IPs and certificate pinning by hash, you may generate your own DNS stamp."),(0,a.yg)("h2",{id:"introduction-to-dns-stamps"},"Introduction to DNS stamps"),(0,a.yg)("p",null,"DNS stamps are short strings that contain all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data."),(0,a.yg)("p",null,"DNS stamps allow you to customize Secure DNS settings beyond the usual URLs. In particular, they allow you to specify hard-coded server addresses, use certificate hashing, and so on. These features make DNS stamps a more robust and versatile option for configuring Secure DNS settings."),(0,a.yg)("h2",{id:"choosing-the-protocol"},"Choosing the protocol"),(0,a.yg)("p",null,"Types of Secure DNS include ",(0,a.yg)("inlineCode",{parentName:"p"},"DNS-over-HTTPS (DoH)"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"DNS-over-QUIC (DoQ)"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"DNS-over-TLS (DoT)"),", and some others. Choosing one of these protocols depends on the context in which you'll be using them."),(0,a.yg)("h2",{id:"creating-a-dns-stamp"},"Creating a DNS stamp"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Open the ",(0,a.yg)("a",{parentName:"p",href:"https://dnscrypt.info/stamps/"},"DNSCrypt Stamp Calculator"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Depending on the chosen protocol, select the corresponding protocol from the dropdown menu (DoH, DoT, or DoQ).")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Fill in the necessary fields:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"IP address"),": Enter the IP address of the DNS server. If you are using the DoT or DoQ protocol, make sure that you have specified the appropriate port as well.")),(0,a.yg)("admonition",{parentName:"li",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This field is optional and should be used with caution: using this option may disrupt the Internet on IPv6-only networks.")))),(0,a.yg)("p",null,":::"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"- **Hashes**: Enter the SHA256 digest of one of the TBS certificates found in the validation chain. If the DNS server you are using provides a ready-made hash, find and copy it. Otherwise, you can obtain it by following the instructions in the [*Obtaining the Certificate Hash*](#obtaining-the-certificate-hash) section.\n\n:::note\n\nThis field is optional\n")),(0,a.yg)("p",null,":::"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'- **Host name**: Enter the host name of the DNS server. This field is used for server name verification in DoT and DoQ protocols.\n\n- For **DoH**:\n  - **Path**: Enter the path for performing DoH requests. This is usually `"/dns-query"`, but your provider may provide a different path.\n\n-     For **DoT and DoQ**:\n  - There are usually no specific fields for these protocols in this tool. Just make sure the port specified in the resolver address is the correct port.\n\n- In the **Properties** section, you can check the relevant properties if they are known and applicable to your DNS server.\n')),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Your stamp will be automatically generated and you will see it in the ",(0,a.yg)("strong",{parentName:"li"},"Stamp")," field.")),(0,a.yg)("h3",{id:"obtaining-the-certificate-hash"},"Obtaining the certificate hash"),(0,a.yg)("p",null,"To fill in the ",(0,a.yg)("strong",{parentName:"p"},"Hashes of the server's certificate")," field, you can use the following command, replacing ",(0,a.yg)("inlineCode",{parentName:"p"},"<IP_ADDRESS>"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"<PORT>"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"<SERVER_NAME>")," with the corresponding values for your DNS server:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256\n")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"The result of the hash command may change over time as the server's certificate is updated. Therefore, if your DNS stamp suddenly stops working, you may need to recalculate the hash of the certificate and generate a new stamp. Regularly updating your DNS stamp will help ensure the continued secure operation of your Secure DNS service.")),(0,a.yg)("h2",{id:"using-the-dns-stamp"},"Using the DNS stamp"),(0,a.yg)("p",null,"You now have your own DNS stamp that you can use to set up Secure DNS. This stamp can be entered into AdGuard and AdGuard VPN for enhanced internet privacy and security."),(0,a.yg)("h2",{id:"example-of-creating-a-dns-stamp"},"Example of creating a DNS stamp"),(0,a.yg)("p",null,"Let's go through an example of creating a stamp for AdGuard DNS using DoT:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Open the ",(0,a.yg)("a",{parentName:"p",href:"https://dnscrypt.info/stamps/"},"DNSCrypt Stamp Calculator"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Select the DNS-over-TLS (DoT) protocol.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Fill in the following fields:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"IP address"),": Enter the IP address and port of the DNS server. In this case, it's ",(0,a.yg)("inlineCode",{parentName:"p"},"94.140.14.14:853"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Host name"),": Enter the host name of the DNS server. In this case, it's ",(0,a.yg)("inlineCode",{parentName:"p"},"dns.adguard-dns.com"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Hashes"),": Execute the command"))),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256\n")),(0,a.yg)("p",{parentName:"li"},"The result is ",(0,a.yg)("inlineCode",{parentName:"p"},"1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8")," Paste this SHA256 hash of the server's certificate into the field.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Leave the Properties section blank.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Your stamp will be automatically generated and you will see it in the ",(0,a.yg)("strong",{parentName:"p"},"Stamp")," field."))))}d.isMDXComponent=!0}}]);