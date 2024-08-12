"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[568],{5680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>y});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return t?n.createElement(y,o(o({ref:a},d),{},{components:t})):n.createElement(y,o({ref:a},d))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2055:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(9668),r=(t(6540),t(5680));const i={title:"Getting started",sidebar_position:2},o=void 0,l={unversionedId:"adguard-home/getting-started",id:"adguard-home/getting-started",title:"Getting started",description:"Installation",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-home/getting-started.md",sourceDirName:"adguard-home",slug:"/adguard-home/getting-started",permalink:"/KnowledgeBaseDNS/es/adguard-home/getting-started",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/adguard-home/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Getting started",sidebar_position:2},sidebar:"sidebar",previous:{title:"Resumen",permalink:"/KnowledgeBaseDNS/es/adguard-home/overview"},next:{title:"Preguntas frecuentes",permalink:"/KnowledgeBaseDNS/es/adguard-home/faq"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Official releases",id:"official-releases",level:3},{value:"Notes",id:"notes",level:4},{value:"Docker and Snap",id:"docker-and-snap",level:3},{value:"Other",id:"other",level:3},{value:"First start",id:"first-time",level:2},{value:"Running as a service",id:"service",level:2},{value:"Logs",id:"logs",level:3},{value:"Updating",id:"update",level:2},{value:"Manual update",id:"manual-update",level:3},{value:"Docker, Home Assistant, and Snapcraft updates",id:"docker-home-assistant-and-snapcraft-updates",level:3},{value:"Command-line update",id:"command-line-update",level:3},{value:"Configuring devices",id:"configure-devices",level:2},{value:"Router",id:"router",level:3},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"Running without superuser",id:"running-without-superuser",level:2},{value:"Granting the necessary capabilities (Linux only)",id:"granting-the-necessary-capabilities-linux-only",level:3},{value:"Changing the DNS listen port",id:"changing-the-dns-listen-port",level:3},{value:"Limitations",id:"limitations",level:2}],d={toc:p},u="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("h3",{id:"official-releases"},"Official releases"),(0,r.yg)("p",null,"Download the archive with the binary file for your operating system from the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/releases/latest"},"latest stable release page"),". The full list of supported platforms as well as links to beta and edge (unstable) releases can be found on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/wiki/Platforms"},"our platforms page"),"."),(0,r.yg)("p",null,"To install AdGuard Home as a service, extract the archive, enter the ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome")," directory, and run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardHome -s install\n")),(0,r.yg)("h4",{id:"notes"},"Notes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Users of ",(0,r.yg)("strong",{parentName:"p"},"Fedora Linux")," and its derivatives: install AdGuard Home in the ",(0,r.yg)("inlineCode",{parentName:"p"},"/usr/local/bin")," directory. Failure to do so may cause issues with SELinux and permissions. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353"},"issue 765")," and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/issues/3281"},"issue 3281"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Users of ",(0,r.yg)("strong",{parentName:"p"},"macOS 10.15 Catalina")," and newer should place the AdGuard Home working directory inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"/Applications")," directory."))),(0,r.yg)("h3",{id:"docker-and-snap"},"Docker and Snap"),(0,r.yg)("p",null,"We also provide an ",(0,r.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/adguard/adguardhome"},"official AdGuard Home docker image")," and an ",(0,r.yg)("a",{parentName:"p",href:"https://snapcraft.io/adguard-home"},"official Snap Store package")," for experienced users."),(0,r.yg)("h3",{id:"other"},"Other"),(0,r.yg)("p",null,"Some other unofficial options include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/hassio-addons/addon-adguard-home"},"Home Assistant add-on")," maintained by ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/frenck"},"@frenck"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/kongfl888/luci-app-adguardhome"},"OpenWrt LUCI app")," maintained by ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/kongfl888"},"@kongfl888"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://www.archlinux.org/"},"Arch Linux"),", ",(0,r.yg)("a",{parentName:"p",href:"https://archlinuxarm.org/"},"Arch Linux ARM"),", and other Arch-based OSs, may build via the ",(0,r.yg)("a",{parentName:"p",href:"https://aur.archlinux.org/packages/adguardhome/"},(0,r.yg)("inlineCode",{parentName:"a"},"adguardhome")," package")," in the ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/Arch_User_Repository"},"AUR")," maintained by ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/graysky2"},"@graysky2"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://git.cloudron.io/cloudron/adguard-home-app"},"Cloudron app")," maintained by ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/gramakri"},"@gramakri"),"."))),(0,r.yg)("h2",{id:"first-time"},"First start"),(0,r.yg)("p",null,"First of all, check your firewall settings. To install and use AdGuard Home, the following ports and protocols must be available:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"3000/TCP for the initial installation;"),(0,r.yg)("li",{parentName:"ul"},"80/TCP for the web interface;"),(0,r.yg)("li",{parentName:"ul"},"53/UDP for the DNS server.")),(0,r.yg)("p",null,"You may need to open additional ports for protocols other than plain DNS, such as DNS-over-HTTPS."),(0,r.yg)("p",null,"DNS servers bind to port 53, which requires superuser privileges most of the time, ",(0,r.yg)("a",{parentName:"p",href:"#running-without-superuser"},"see below"),". Therefore, on Unix systems, you will need to run it with ",(0,r.yg)("inlineCode",{parentName:"p"},"sudo")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"doas")," in terminal:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./AdGuardHome\n")),(0,r.yg)("p",null,"On Windows, run ",(0,r.yg)("inlineCode",{parentName:"p"},"cmd.exe")," or PowerShell with admin privileges and run ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome.exe")," from there."),(0,r.yg)("p",null,"When you run AdGuard Home for the first time, it starts listening on ",(0,r.yg)("inlineCode",{parentName:"p"},"0.0.0.0:3000")," and prompts you to open it in your browser:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-none"},"AdGuard Home is available at the following addresses:\ngo to http://127.0.0.1:3000\ngo to http://[::1]:3000\n[\u2026]\n")),(0,r.yg)("p",null,"There you will go through the initial configuration wizard."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png",alt:"AdGuard Home network interface selection screen"})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png",alt:"AdGuard Home user creation screen"})),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/es/adguard-home/running-securely"},"our article on running AdGuard Home securely")," for guidance on how to select the initial configuration that fits you best."),(0,r.yg)("h2",{id:"service"},"Running as a service"),(0,r.yg)("p",null,"The next step would be to register AdGuard Home as a system service (aka daemon). To install AdGuard Home as a service, run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./AdGuardHome -s install\n")),(0,r.yg)("p",null,"On Windows, run ",(0,r.yg)("inlineCode",{parentName:"p"},"cmd.exe")," with admin privileges and run ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome.exe -s install")," to register a Windows service."),(0,r.yg)("p",null,"Here are the other commands you might need to control the service:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"AdGuardHome -s uninstall"),": Uninstall the AdGuard Home service."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"AdGuardHome -s start"),": Start the service."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"AdGuardHome -s stop"),": Stop the service."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"AdGuardHome -s restart"),": Restart the service."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"AdGuardHome -s status"),": Show the current service status.")),(0,r.yg)("h3",{id:"logs"},"Logs"),(0,r.yg)("p",null,"By default, the logs are written to ",(0,r.yg)("inlineCode",{parentName:"p"},"stderr")," when you run AdGuard Home in a terminal. If you run it as a service, the log output depends on the platform:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"On macOS, the log is written to ",(0,r.yg)("inlineCode",{parentName:"p"},"/var/log/AdGuardHome.*.log")," files.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"On other Unixes, the log is written to ",(0,r.yg)("inlineCode",{parentName:"p"},"syslog")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"journald"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"On Windows, the log is written to the Windows event log."))),(0,r.yg)("p",null,"You can change this behavior in the AdGuard Home ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration"},"configuration file"),"."),(0,r.yg)("h2",{id:"update"},"Updating"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png",alt:"An example of an update notification"})),(0,r.yg)("p",null,"When a new version is released, AdGuard Home\u2019s UI shows a notification message and the ",(0,r.yg)("em",{parentName:"p"},"Update now")," button. Click this button, and AdGuard Home will be automatically updated to the latest version. Your current AdGuard Home executable file is saved inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"backup")," directory along with the current configuration file, so you can revert the changes, if necessary."),(0,r.yg)("h3",{id:"manual-update"},"Manual update"),(0,r.yg)("p",null,"In case the button isn\u2019t shown or an automatic update has failed, you can update manually. We have a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#manual-update"},"detailed guide on manual updates"),", but in short:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download the new AdGuard Home package.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Extract it to a temporary directory.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Replace the old AdGuard Home executable file with the new one.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart AdGuard Home."))),(0,r.yg)("h3",{id:"docker-home-assistant-and-snapcraft-updates"},"Docker, Home Assistant, and Snapcraft updates"),(0,r.yg)("p",null,"Auto-updates for Docker, Hass.io/Home Assistant, and Snapcraft installations are disabled. Update the image instead."),(0,r.yg)("h3",{id:"command-line-update"},"Command-line update"),(0,r.yg)("p",null,"To update AdGuard Home package without the need to use Web API run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardHome --update\n")),(0,r.yg)("h2",{id:"configure-devices"},"Configuring devices"),(0,r.yg)("h3",{id:"router"},"Router"),(0,r.yg)("p",null,"This setup will automatically cover all devices connected to your home router, and you won\u2019t need to configure each of them manually."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open the preferences for your router. Usually, you can access it from your browser via a URL, such as ",(0,r.yg)("a",{parentName:"p",href:"http://192.168.0.1/"},"http://192.168.0.1/")," or ",(0,r.yg)("a",{parentName:"p",href:"http://192.168.1.1/"},"http://192.168.1.1/"),". You may be prompted to enter a password. If you don\u2019t remember it, you can often reset the password by pressing a button on the router itself, but be aware that if this procedure is chosen, you will probably lose the entire router configuration. If your router requires an app to set it up, please install the app on your phone or PC and use it to access the router\u2019s settings.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Find the DHCP/DNS settings. Look for the DNS letters next to a field that allows two or three sets of numbers, each divided into four groups of one to three digits.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enter your AdGuard Home server addresses there.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On some router types, a custom DNS server cannot be set up. In that case, setting up AdGuard Home as a DHCP server may help. Otherwise, you should consult your router manual to learn how to customize DNS servers on your specific router model."))),(0,r.yg)("h3",{id:"windows"},"Windows"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("em",{parentName:"p"},"Control Panel")," from the Start menu or Windows search.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Go to ",(0,r.yg)("em",{parentName:"p"},"Network and Internet")," and then to ",(0,r.yg)("em",{parentName:"p"},"Network and Sharing Center"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On the left side of the screen, find the ",(0,r.yg)("em",{parentName:"p"},"Change adapter settings")," button and click it.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select your active connection, right-click it and choose ",(0,r.yg)("em",{parentName:"p"},"Properties"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Find ",(0,r.yg)("em",{parentName:"p"},"Internet Protocol Version 4 (TCP/IPv4)")," (or, for IPv6, ",(0,r.yg)("em",{parentName:"p"},"Internet Protocol Version 6 (TCP/IPv6)"),") in the list, select it, and then click ",(0,r.yg)("em",{parentName:"p"},"Properties")," again.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Choose ",(0,r.yg)("em",{parentName:"p"},"Use the following DNS server addresses")," and enter your AdGuard Home server addresses."))),(0,r.yg)("h3",{id:"macos"},"macOS"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click the Apple icon and go to ",(0,r.yg)("em",{parentName:"p"},"System Preferences"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("em",{parentName:"p"},"Network"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select the first connection in your list and click ",(0,r.yg)("em",{parentName:"p"},"Advanced"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select the DNS tab and enter your AdGuard Home server addresses."))),(0,r.yg)("h3",{id:"android"},"Android"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Instructions for Android devices may differ depending on the OS version and the manufacturer.")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"From the Android menu home screen, tap ",(0,r.yg)("em",{parentName:"p"},"Settings"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Tap ",(0,r.yg)("em",{parentName:"p"},"Wi-Fi")," on the menu. The screen with all of the available networks will be displayed (it is impossible to set custom DNS for mobile connection).")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Long press the network you\u2019re connected to and tap ",(0,r.yg)("em",{parentName:"p"},"Modify Network"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On some devices, you may need to check the box for ",(0,r.yg)("em",{parentName:"p"},"Advanced")," to see more settings. To adjust your Android DNS settings, you will need to change the IP settings from ",(0,r.yg)("em",{parentName:"p"},"DHCP")," to ",(0,r.yg)("em",{parentName:"p"},"Static"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Change set DNS 1 and DNS 2 values to your AdGuard Home server addresses."))),(0,r.yg)("h3",{id:"ios"},"iOS"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"From the home screen, tap ",(0,r.yg)("em",{parentName:"p"},"Settings"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select ",(0,r.yg)("em",{parentName:"p"},"Wi-Fi")," from the left menu (it is impossible to configure DNS for mobile networks).")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Tap the name of the currently active network.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("em",{parentName:"p"},"DNS")," field, enter your AdGuard Home server addresses."))),(0,r.yg)("h2",{id:"running-without-superuser"},"Running without superuser"),(0,r.yg)("p",null,"You can run AdGuard Home without superuser privileges, but you must either grant the binary a capability (on Linux) or instruct it to use a different port (all platforms)."),(0,r.yg)("h3",{id:"granting-the-necessary-capabilities-linux-only"},"Granting the necessary capabilities (Linux only)"),(0,r.yg)("p",null,"Using this method requires the ",(0,r.yg)("inlineCode",{parentName:"p"},"setcap")," utility. You may need to install it using your Linux distribution\u2019s package manager."),(0,r.yg)("p",null,"To allow AdGuard Home running on Linux to listen on port 53 without superuser privileges and bind its DNS servers to a particular interface, run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome\n")),(0,r.yg)("p",null,"Then run ",(0,r.yg)("inlineCode",{parentName:"p"},"./AdGuardHome")," as an unprivileged user."),(0,r.yg)("h3",{id:"changing-the-dns-listen-port"},"Changing the DNS listen port"),(0,r.yg)("p",null,"To configure AdGuard Home to listen on a port that does not require superuser privileges, stop AdGuard Home, open ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome.yaml")," in your editor, and find these lines:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"dns:\n    # \u2026\n    port: 53\n")),(0,r.yg)("p",null,"You can change the port to anything above 1024 to avoid requiring superuser privileges."),(0,r.yg)("h2",{id:"limitations"},"Limitations"),(0,r.yg)("p",null,"Some file systems don\u2019t support the ",(0,r.yg)("inlineCode",{parentName:"p"},"mmap(2)")," system call required by the statistics system. See also ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/issues/1188"},"issue 1188"),"."),(0,r.yg)("p",null,"You can resolve this issue:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"either by supplying the ",(0,r.yg)("inlineCode",{parentName:"p"},"--work-dir DIRECTORY")," arguments to the ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome")," binary. This option will tell AGH to use another directory for all its files instead of the default ",(0,r.yg)("inlineCode",{parentName:"p"},"./data")," directory.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"or by creating symbolic links pointing to another file system that supports ",(0,r.yg)("inlineCode",{parentName:"p"},"mmap(2)")," (e.g. tmpfs):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db\nln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db\n")))))}g.isMDXComponent=!0}}]);