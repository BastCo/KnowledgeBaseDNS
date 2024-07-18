"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[17],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(a),y=n,g=c["".concat(d,".").concat(y)]||c[y]||p[y]||i;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=y;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},8044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(9668),n=(a(6540),a(5680));const i={title:"Overview",sidebar_position:1},o=void 0,s={unversionedId:"private-dns/overview",id:"private-dns/overview",title:"Overview",description:"With AdGuard DNS, you can set up your private DNS servers to resolve DNS requests and block ads, trackers, and malicious domains before they reach your device",source:"@site/docs/private-dns/overview.md",sourceDirName:"private-dns",slug:"/private-dns/overview",permalink:"/KnowledgeBaseDNS/private-dns/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"sidebar",previous:{title:"How to flush DNS cache",permalink:"/KnowledgeBaseDNS/public-dns/solving-problems/how-to-flush-dns-cache"},next:{title:"Overview",permalink:"/KnowledgeBaseDNS/private-dns/api/overview"}},d={},l=[{value:"General",id:"general",level:2},{value:"Why you need private AdGuard DNS",id:"why-you-need-private-adguard-dns",level:3},{value:"The difference between public and private AdGuard DNS",id:"the-difference-between-public-and-private-adguard-dns",level:3},{value:"How to set up private AdGuard DNS",id:"how-to-set-up-private-adguard-dns",level:2},{value:"For devices that support DoH, DoT, and DoQ",id:"for-devices-that-support-doh-dot-and-doq",level:3},{value:"For devices that do not support DoH, DoT, and DoQ",id:"for-devices-that-do-not-support-doh-dot-and-doq",level:3},{value:"Dedicated IP addresses",id:"dedicated-ip-addresses",level:4},{value:"Linked IP",id:"linked-ip",level:4},{value:"Private AdGuard DNS features",id:"private-adguard-dns-features",level:2},{value:"Statistics",id:"statistics",level:3},{value:"Traffic destination",id:"traffic-destination",level:3},{value:"Companies",id:"companies",level:3},{value:"Query log",id:"query-log",level:3},{value:"Server settings",id:"server-settings",level:2},{value:"Blocklists management",id:"blocklists-management",level:3},{value:"Security settings",id:"security-settings",level:3},{value:"Parental control",id:"parental-control",level:3},{value:"User rules",id:"user-rules",level:3},{value:"DNS-over-HTTPS with authentication",id:"dns-over-https-with-authentication",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Access settings",id:"access-settings",level:3}],u={toc:l},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"With AdGuard DNS, you can set up your private DNS servers to resolve DNS requests and block ads, trackers, and malicious domains before they reach your device"),(0,n.yg)("p",{parentName:"admonition"},"Quick link: ",(0,n.yg)("a",{parentName:"p",href:"https://agrd.io/download-dns"},"Try AdGuard DNS"))),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png",alt:"Private AdGuard DNS dashboard main"})),(0,n.yg)("h2",{id:"general"},"General"),(0,n.yg)("iframe",{width:"560",height:"315",class:"youtube-video",src:"https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.yg)("p",null,"Private AdGuard DNS offers all the advantages of a public AdGuard DNS server, including traffic encryption and domain blocklists. It also offers additional features such as flexible customization, DNS statistics, and Parental control. All these options are easily accessible and managed via a user-friendly dashboard."),(0,n.yg)("h3",{id:"why-you-need-private-adguard-dns"},"Why you need private AdGuard DNS"),(0,n.yg)("p",null,"Today, you can connect anything to the Internet: TVs, refrigerators, smart bulbs, or speakers. But along with the undeniable conveniences you get trackers and ads. A simple browser-based ad blocker will not protect you in this case, but AdGuard DNS, which you can set up to filter traffic, block content and trackers, has a system-wide effect."),(0,n.yg)("p",null,"At one time, the AdGuard product line included only ",(0,n.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/public-dns/overview"},"public AdGuard DNS")," and ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome"},"AdGuard Home"),". These solutions work fine for some users, but for others, the public AdGuard DNS lacks the flexibility of configuration, while the AdGuard Home lacks simplicity. That's where private AdGuard DNS comes into play. It has the best of both worlds: it offers customizability, control and information \u2014 all through a simple easy-to-use dashboard."),(0,n.yg)("h3",{id:"the-difference-between-public-and-private-adguard-dns"},"The difference between public and private AdGuard DNS"),(0,n.yg)("p",null,"Here is a simple comparison of features available in public and private AdGuard DNS."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Public AdGuard DNS"),(0,n.yg)("th",{parentName:"tr",align:null},"Private AdGuard DNS"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"DNS traffic encryption"),(0,n.yg)("td",{parentName:"tr",align:null},"DNS traffic encryption")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Pre-determined domain blocklists"),(0,n.yg)("td",{parentName:"tr",align:null},"Customizable domain blocklists")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"Custom DNS filtering rules with import/export feature")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"Request statistics (see where do your DNS requests go: which countries, which companies, etc.)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"Detailed query log")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"Parental control")))),(0,n.yg)("h2",{id:"how-to-set-up-private-adguard-dns"},"How to set up private AdGuard DNS"),(0,n.yg)("h3",{id:"for-devices-that-support-doh-dot-and-doq"},"For devices that support DoH, DoT, and DoQ"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Go to your ",(0,n.yg)("a",{parentName:"li",href:"https://agrd.io/download-dns"},"AdGuard DNS dashboard")," (if not logged in, log in using your AdGuard account)"),(0,n.yg)("li",{parentName:"ol"},"Click ",(0,n.yg)("em",{parentName:"li"},"Connect device")," and follow on-screen instructions")),(0,n.yg)("admonition",{title:"Supported platforms:",type:"note"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Android"),(0,n.yg)("li",{parentName:"ul"},"iOS"),(0,n.yg)("li",{parentName:"ul"},"Windows"),(0,n.yg)("li",{parentName:"ul"},"Mac"),(0,n.yg)("li",{parentName:"ul"},"Linux"),(0,n.yg)("li",{parentName:"ul"},"Routers"),(0,n.yg)("li",{parentName:"ul"},"Gaming consoles"),(0,n.yg)("li",{parentName:"ul"},"Smart TVs"))),(0,n.yg)("p",null,"Every device that you add in the AdGuard DNS panel has its own unique address that can be used if the device supports modern encrypted DNS protocols (DoH, DoT, and DoQ)."),(0,n.yg)("h3",{id:"for-devices-that-do-not-support-doh-dot-and-doq"},"For devices that do not support DoH, DoT, and DoQ"),(0,n.yg)("p",null,"If the device does not support encrypted DNS and you have to use plain DNS, there are two more ways to allow AdGuard DNS to recognize the device \u2014 use dedicated IP addresses or link device's IP address."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Use plain DNS addresses only if you have no other options: this reduces the security of DNS requests. If you decide to use plain DNS, we recommend that you choose dedicated IP addresses.")),(0,n.yg)("h4",{id:"dedicated-ip-addresses"},"Dedicated IP addresses"),(0,n.yg)("p",null,"For every device that you connect to AdGuard DNS, you'll be offered two dedicated IPv6 addresses that you can enter in your device settings. Using both IPv6 addresses is not mandatory, but often devices might request you to enter two IPv6 addresses."),(0,n.yg)("p",null,"When you connect to them, AdGuard DNS will be able to determine which particular device is sending DNS requests and display statistics for it. And you'll be able to configure DNS rules specifically for this device."),(0,n.yg)("p",null,"Unfortunately, not all service providers offer IPv6 support, and not all devices allow you to configure IPv6 addresses. If this is your case, you may have to rely on the Linked IP method."),(0,n.yg)("h4",{id:"linked-ip"},"Linked IP"),(0,n.yg)("p",null,'If you connect your device to AdGuard DNS via Linked IP, the service will count all plain DNS requests coming from that IP address towards that "device". With this connection method, you would have to reconnect manually or through a special program each time the device\'s IP changes, which happens after each reboot.'),(0,n.yg)("p",null,"The only requirement for linking IP is that ",(0,n.yg)("strong",{parentName:"p"},"it must be a residential IP address"),"."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"A residential IP address is an IP address assigned to a device connected to a residential ISP. It is typically associated with a physical location and is allocated to individual homes or apartments. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content.")),(0,n.yg)("p",null,"If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at ",(0,n.yg)("a",{parentName:"p",href:"mailto:support@adguard-dns.io"},"support@adguard-dns.io"),"."),(0,n.yg)("h2",{id:"private-adguard-dns-features"},"Private AdGuard DNS features"),(0,n.yg)("h3",{id:"statistics"},"Statistics"),(0,n.yg)("p",null,"In the ",(0,n.yg)("em",{parentName:"p"},"Statistics")," tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png",alt:"Private AdGuard DNS dashboard statistics"})),(0,n.yg)("h3",{id:"traffic-destination"},"Traffic destination"),(0,n.yg)("p",null,"This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png",alt:"Private AdGuard DNS dashboard traffic"})),(0,n.yg)("h3",{id:"companies"},"Companies"),(0,n.yg)("p",null,"This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png",alt:"Private AdGuard DNS dashboard companies"})),(0,n.yg)("h3",{id:"query-log"},"Query log"),(0,n.yg)("p",null,"This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png",alt:"Private AdGuard DNS dashboard query log"})),(0,n.yg)("h2",{id:"server-settings"},"Server settings"),(0,n.yg)("p",null,"This section features a range of settings allowing you to customize the operation of private AdGuard DNS, ensuring the Internet functions exactly as you desire."),(0,n.yg)("h3",{id:"blocklists-management"},"Blocklists management"),(0,n.yg)("p",null,"The ",(0,n.yg)("em",{parentName:"p"},"Blocklists")," feature allows you to specify which domains you want to block and which you don't. Choose from a variety of blocklists for different purposes."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png",alt:"Private AdGuard DNS dashboard blocklists"})),(0,n.yg)("h3",{id:"security-settings"},"Security settings"),(0,n.yg)("p",null,"Even if you're aware of all the tricks online scammers use, there's always a risk you'll accidentally click a malicious link. To protect yourself from such accidents, go to the ",(0,n.yg)("em",{parentName:"p"},"Security settings")," section and check the boxes next to the options listed there."),(0,n.yg)("p",null,"The ",(0,n.yg)("em",{parentName:"p"},"Block malicious, phishing, and scam domains")," feature will block domains found in the dedicated database. And the ",(0,n.yg)("em",{parentName:"p"},"Block newly registered domains")," will block all domains registered less than 30 days ago, which are often considered risky for your online privacy."),(0,n.yg)("h3",{id:"parental-control"},"Parental control"),(0,n.yg)("p",null,"To protect your child from online content you deem inappropriate, set up and activate the ",(0,n.yg)("em",{parentName:"p"},"Parental control"),' option. In addition to options such as "adult content" blocking and safe search, we\'ve added the ability to manually specify domains for blocking and set a schedule for the ',(0,n.yg)("em",{parentName:"p"},"Parental control")," to work accordingly."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png",alt:"Parental control"})),(0,n.yg)("h3",{id:"user-rules"},"User rules"),(0,n.yg)("p",null,"For cases where pre-installed blocklists with thousands of rules are not enough, we have a handy feature called ",(0,n.yg)("em",{parentName:"p"},"User rules"),". Here you can manually add custom rules to block/unblock a specific domain or import custom rule lists (see ",(0,n.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/general/dns-filtering-syntax"},"DNS filtering rules syntax"),"). You can export the lists."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png",alt:"Private AdGuard DNS dashboard user rules"})),(0,n.yg)("h3",{id:"dns-over-https-with-authentication"},"DNS-over-HTTPS with authentication"),(0,n.yg)("p",null,"DNS-over-HTTPS with authentication provides a login and password to connect to the server. This can limit access to unauthorized users and increase security."),(0,n.yg)("p",null,"To enable this feature, go to ",(0,n.yg)("em",{parentName:"p"},"Server settings")," \u2192 ",(0,n.yg)("em",{parentName:"p"},"Devices")," \u2192 ",(0,n.yg)("em",{parentName:"p"},"Settings")," and change the DNS server to the one with authentication. Select ",(0,n.yg)("em",{parentName:"p"},"Deny other protocols")," to disable alternative protocol usage, ensuring exclusive DNS-over-HTTPS authentication and blocking third-party access."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png",alt:"DNS-over-HTTPS with authentication"})),(0,n.yg)("h2",{id:"advanced"},"Advanced"),(0,n.yg)("p",null,"Here you can set the way AdGuard DNS must respond to blocked domains:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Default \u2014 zero IP address"),(0,n.yg)("li",{parentName:"ul"},"NXDOMAIN \u2014 the domain does not exist"),(0,n.yg)("li",{parentName:"ul"},"REFUSED \u2014 the server has refused to process the request"),(0,n.yg)("li",{parentName:"ul"},"Custom IP \u2014 you can manually specify an IP address")),(0,n.yg)("p",null,"Additionally, you can adjust the ",(0,n.yg)("em",{parentName:"p"},"Time to live")," (TTL) setting. This parameter defines the time period (in seconds) that a client device caches the response to a DNS request. A higher TTL means that even if a previously blocked domain is unblocked, it may still appear as blocked for a while. A TTL of 0 indicates that the device does not cache responses."),(0,n.yg)("p",null,"In the Advanced section, there are three options that can be customized:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Block access to iCloud Private Relay. Devices that use iCloud Private Relay may ignore DNS settings. Enabling this option ensures that AdGuard DNS can effectively protect your device."),(0,n.yg)("li",{parentName:"ul"},"Block Firefox canary domain. This setting prevents Firefox from automatically switching to its DoH resolver when AdGuard DNS is set as the system-wide DNS service."),(0,n.yg)("li",{parentName:"ul"},"Log IP addresses. If this option is enabled, IP addresses associated with incoming DNS requests will be recorded and displayed in the Query log.")),(0,n.yg)("h3",{id:"access-settings"},"Access settings"),(0,n.yg)("p",null,"Here you can manage an access to your DNS server by configuring the following settings:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Allowed clients. Specify which clients are permitted to use your DNS server. Please note that allowed clients are not counted in added access rules, only disallowed clients and domains")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/private/rules_added.png",alt:"Added rules"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Disallowed clients. List clients that are denied to use your DNS server"),(0,n.yg)("li",{parentName:"ul"},"Disallowed domains. Specify domain names that will be denied access to your DNS server. Wildcards and DNS filtering rules can also be listed here")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"If you only want to use DNS on certain AS numbers or IP addresses, you should block everything else in the Disallowed clients field. Simply allowing only the necessary numbers and addresses in the ",(0,n.yg)("em",{parentName:"p"},"Allowed clients")," field won\u2019t be enough.")),(0,n.yg)("p",null,"By setting up these options, you can control who uses your DNS server and prevent potential DDoS attacks. Requests that are not allowed will not appear in your Query log, and they are free of charge."))}p.isMDXComponent=!0}}]);