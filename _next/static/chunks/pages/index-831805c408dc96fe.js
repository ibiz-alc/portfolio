(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},227:function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.getDomainLocale=function(e,s,r,t){return!1},("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},1551:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var t=r(2648).Z,a=r(7273).Z,l=t(r(7294)),i=r(1978),n=r(2139),o=r(7795),c=r(670),d=r(4465),h=r(2692),p=r(8245),m=r(9246),g=r(227),u=r(3468);let x=new Set;function f(e,s,r,t,a){if(a||n.isLocalURL(s)){if(!t.bypassPrefetchedCheck){let a=void 0!==t.locale?t.locale:"locale"in e?e.locale:void 0,l=s+"%"+r+"%"+a;if(x.has(l))return;x.add(l)}Promise.resolve(e.prefetch(s,r,t)).catch(e=>{})}}function j(e){return"string"==typeof e?e:o.formatUrl(e)}let b=l.default.forwardRef(function(e,s){let r,t;let{href:o,as:x,children:b,prefetch:_,passHref:v,replace:y,shallow:w,scroll:k,locale:N,onClick:H,onMouseEnter:z,onTouchStart:M,legacyBehavior:E=!1}=e,C=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,E&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let P=!1!==_,S=l.default.useContext(h.RouterContext),I=l.default.useContext(p.AppRouterContext),L=null!=S?S:I,A=!S,{href:O,as:D}=l.default.useMemo(()=>{if(!S){let e=j(o);return{href:e,as:x?j(x):e}}let[e,s]=i.resolveHref(S,o,!0);return{href:e,as:x?i.resolveHref(S,x):s||e}},[S,o,x]),R=l.default.useRef(O),T=l.default.useRef(D);E&&(t=l.default.Children.only(r));let U=E?t&&"object"==typeof t&&t.ref:s,[B,J,F]=m.useIntersection({rootMargin:"200px"}),K=l.default.useCallback(e=>{(T.current!==D||R.current!==O)&&(F(),T.current=D,R.current=O),B(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[D,U,O,F,B]);l.default.useEffect(()=>{L&&J&&P&&f(L,O,D,{locale:N},A)},[D,O,J,N,P,null==S?void 0:S.locale,L,A]);let q={ref:K,onClick(e){E||"function"!=typeof H||H(e),E&&t.props&&"function"==typeof t.props.onClick&&t.props.onClick(e),L&&!e.defaultPrevented&&function(e,s,r,t,a,i,o,c,d,h){let{nodeName:p}=e.currentTarget,m="A"===p.toUpperCase();if(m&&(function(e){let s=e.currentTarget,r=s.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!n.isLocalURL(r)))return;e.preventDefault();let g=()=>{"beforePopState"in s?s[a?"replace":"push"](r,t,{shallow:i,locale:c,scroll:o}):s[a?"replace":"push"](t||r,{forceOptimisticNavigation:!h})};d?l.default.startTransition(g):g()}(e,L,O,D,y,w,k,N,A,P)},onMouseEnter(e){E||"function"!=typeof z||z(e),E&&t.props&&"function"==typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),L&&(P||!A)&&f(L,O,D,{locale:N,priority:!0,bypassPrefetchedCheck:!0},A)},onTouchStart(e){E||"function"!=typeof M||M(e),E&&t.props&&"function"==typeof t.props.onTouchStart&&t.props.onTouchStart(e),L&&(P||!A)&&f(L,O,D,{locale:N,priority:!0,bypassPrefetchedCheck:!0},A)}};if(c.isAbsoluteUrl(D))q.href=D;else if(!E||v||"a"===t.type&&!("href"in t.props)){let e=void 0!==N?N:null==S?void 0:S.locale,s=(null==S?void 0:S.isLocaleDomain)&&g.getDomainLocale(D,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);q.href=s||u.addBasePath(d.addLocale(D,e,null==S?void 0:S.defaultLocale))}return E?l.default.cloneElement(t,q):l.default.createElement("a",Object.assign({},C,q),r)});s.default=b,("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},9246:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){let{rootRef:s,rootMargin:r,disabled:o}=e,c=o||!l,[d,h]=t.useState(!1),p=t.useRef(null),m=t.useCallback(e=>{p.current=e},[]);t.useEffect(()=>{if(l){if(c||d)return;let e=p.current;if(e&&e.tagName){let t=function(e,s,r){let{id:t,observer:a,elements:l}=function(e){let s;let r={root:e.root||null,margin:e.rootMargin||""},t=n.find(e=>e.root===r.root&&e.margin===r.margin);if(t&&(s=i.get(t)))return s;let a=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let s=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;s&&r&&s(r)})},e);return s={id:r,observer:l,elements:a},n.push(r),i.set(r,s),s}(r);return l.set(e,s),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),i.delete(t);let e=n.findIndex(e=>e.root===t.root&&e.margin===t.margin);e>-1&&n.splice(e,1)}}}(e,e=>e&&h(e),{root:null==s?void 0:s.current,rootMargin:r});return t}}else if(!d){let e=a.requestIdleCallback(()=>h(!0));return()=>a.cancelIdleCallback(e)}},[c,r,s,d,p.current]);let g=t.useCallback(()=>{h(!1)},[]);return[m,d,g]};var t=r(7294),a=r(4686);let l="function"==typeof IntersectionObserver,i=new Map,n=[];("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},4186:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return g}});var t=r(5893),a=r(3428),l=r.n(a),i=r(9008),n=r.n(i),o=r(7953),c=r.n(o),d=r(1664),h=r.n(d);let p="/Portfolio",m=new Date().getFullYear()-1991;function g(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:"Portfolio"}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://kit.fontawesome.com/ae0af40f93.css",crossOrigin:"anonymous"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"})]}),(0,t.jsxs)("main",{className:c().main,children:[(0,t.jsx)("div",{className:c().bg}),(0,t.jsxs)("div",{className:"".concat(c().my_self," ").concat(c().my_self1),children:[(0,t.jsx)("h1",{className:l().className,style:{fontWeight:"800",fontSize:"2rem"},children:"Verasit Wisitsophon"}),(0,t.jsx)("i",{className:"cib-evernote"}),(0,t.jsxs)("p",{className:l().className,children:["I'm ",(0,t.jsx)("span",{style:{color:"blue",fontSize:"2rem"},children:"Mobile Developer"})]}),(0,t.jsxs)("div",{className:c().my_social,children:[(0,t.jsx)(h(),{href:"https://github.com/ibiz-alc",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("div",{className:c().github})}),(0,t.jsx)(h(),{href:"https://www.linkedin.com/in/emanym/",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("div",{className:c().linkedin})})]})]}),(0,t.jsx)("section",{className:c().about,children:(0,t.jsx)("div",{className:"grid grid-cols-12",children:(0,t.jsxs)("div",{className:"col-start-2 col-span-10 mt-10",children:[(0,t.jsx)("h1",{style:{marginTop:"5rem"},children:"About"}),(0,t.jsx)("p",{children:"I like to code, like the world of Mobile Application. I love creating cool things and helping people develop awesome things. Also, my main thing is that I am good at building beautiful app interfaces. For me, making useful stuff for people is really important. That's why I always want to create beautiful user experience using modern technologies for this reason I spend a lot of time learning about it"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 tablet:grid-cols-12 gap-4 mt-6",children:[(0,t.jsx)("div",{className:"tablet:col-span-12 laptop:col-span-4",children:(0,t.jsx)("img",{src:"".concat(p,"/profile.png"),alt:""})}),(0,t.jsxs)("div",{className:"tablet:col-span-12 laptop:col-span-8",children:[(0,t.jsx)("h3",{className:"tablet:text-center tablet:ml-0 laptop:text-left laptop:ml-24",children:"Mobile Developer"}),(0,t.jsxs)("div",{className:"grid grid-cols-6",children:[(0,t.jsx)("div",{className:"col-span-12 laptop:col-start-1 laptop:col-end-3",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bi bi-chevron-left ".concat(c().fill_color)}),(0,t.jsx)("b",{children:"Birthday:"})," 11 December 1991"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bi bi-chevron-left"}),(0,t.jsx)("b",{children:"Degree:"})," Bachelor"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bi bi-chevron-left"}),(0,t.jsx)("b",{children:"Phone:"})," 082-328-4664"]})]})}),(0,t.jsx)("div",{className:"col-span-12 laptop:col-end-6 laptop:col-span-3",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bi bi-chevron-left"}),(0,t.jsx)("b",{children:"Age:"})," ",m]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bi bi-chevron-left"}),(0,t.jsx)("b",{children:"E-mail:"})," vwsp.y.am@gmail.com"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bi bi-chevron-left"}),(0,t.jsx)("b",{children:"City:"})," Nonthaburi"]})]})})]})]})]})]})})}),(0,t.jsx)("section",{className:"".concat(c().skills),children:(0,t.jsx)("div",{className:"grid grid-cols-12",children:(0,t.jsxs)("div",{className:"col-start-2 col-span-10 mt-10",children:[(0,t.jsx)("h1",{children:"Skill"}),(0,t.jsxs)("div",{className:"grid tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-2 laptop:gap-4 laptop:mt-6",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 laptop:mr-4",children:[(0,t.jsxs)("div",{className:c().progress,children:[(0,t.jsxs)("span",{className:c().skill,children:["Kotlin ",(0,t.jsx)("i",{className:c().val,children:"95%"})]}),(0,t.jsx)("div",{className:c()["progress-bar-wrap"],children:(0,t.jsx)("div",{className:c()["progress-bar"],role:"progressbar","aria-valuenow":70,"aria-valuemin":0,"aria-valuemax":100,style:{width:"95%"}})})]}),(0,t.jsxs)("div",{className:c().progress,children:[(0,t.jsxs)("span",{className:c().skill,children:["Jetpack Compose ",(0,t.jsx)("i",{className:c().val,children:"95%"})]}),(0,t.jsx)("div",{className:c()["progress-bar-wrap"],children:(0,t.jsx)("div",{className:c()["progress-bar"],role:"progressbar","aria-valuenow":70,"aria-valuemin":0,"aria-valuemax":100,style:{width:"95%"}})})]}),(0,t.jsxs)("div",{className:c().progress,children:[(0,t.jsxs)("span",{className:c().skill,children:["HTML ",(0,t.jsx)("i",{className:c().val,children:"100%"})]}),(0,t.jsx)("div",{className:c()["progress-bar-wrap"],children:(0,t.jsx)("div",{className:c()["progress-bar"],role:"progressbar","aria-valuenow":70,"aria-valuemin":0,"aria-valuemax":100,style:{width:"100%"}})})]})]}),(0,t.jsxs)("div",{className:"grid tablet:grid-cols-1 laptop:ml-4",children:[(0,t.jsxs)("div",{className:c().progress,children:[(0,t.jsxs)("span",{className:c().skill,children:["Flutter ",(0,t.jsx)("i",{className:c().val,children:"90%"})]}),(0,t.jsx)("div",{className:c()["progress-bar-wrap"],children:(0,t.jsx)("div",{className:c()["progress-bar"],role:"progressbar","aria-valuenow":70,"aria-valuemin":0,"aria-valuemax":100,style:{width:"90%"}})})]}),(0,t.jsxs)("div",{className:c().progress,children:[(0,t.jsxs)("span",{className:c().skill,children:["Swift ",(0,t.jsx)("i",{className:c().val,children:"60%"})]}),(0,t.jsx)("div",{className:c()["progress-bar-wrap"],children:(0,t.jsx)("div",{className:c()["progress-bar"],role:"progressbar","aria-valuenow":70,"aria-valuemin":0,"aria-valuemax":100,style:{width:"50%"}})})]}),(0,t.jsxs)("div",{className:c().progress,children:[(0,t.jsxs)("span",{className:c().skill,children:["TypeScript ",(0,t.jsx)("i",{className:c().val,children:"70%"})]}),(0,t.jsx)("div",{className:c()["progress-bar-wrap"],children:(0,t.jsx)("div",{className:c()["progress-bar"],role:"progressbar","aria-valuenow":70,"aria-valuemin":0,"aria-valuemax":100,style:{width:"70%"}})})]})]})]})]})})}),(0,t.jsx)("section",{className:c().resume,children:(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"grid grid-cols-12 mt-6",children:(0,t.jsxs)("div",{className:"col-start-2 col-span-10 mt-10",children:[(0,t.jsx)("h1",{children:"Resume"}),(0,t.jsxs)("div",{className:"grid tablet:grid-cols-1 laptop:grid-cols-2 gap-4 mt-6",children:[(0,t.jsxs)("div",{className:"".concat(c()["resume-content-summary"]," grid tablet:grid-cols-1 mr-4 self-start"),children:[(0,t.jsx)("h3",{className:c()["resume-title"],children:"Sumary"}),(0,t.jsxs)("div",{className:"".concat(c()["resume-item"]," ").concat(c()["pb-0"]),children:[(0,t.jsx)("h4",{children:"Verasit Wisitsophon"}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:"10+ years of experience mobile application."})}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Android Java"}),(0,t.jsx)("li",{children:"Kotlin"}),(0,t.jsx)("li",{children:"Jetpack Compose"}),(0,t.jsx)("li",{children:"Flutter & Dart"}),(0,t.jsx)("li",{children:"Swift"}),(0,t.jsx)("li",{children:"Python"}),(0,t.jsx)("li",{children:"Next.js"}),(0,t.jsx)("li",{children:"Node.js"}),(0,t.jsx)("li",{children:"React"})]})]}),(0,t.jsx)("h3",{className:c()["resume-title"],children:"Education"}),(0,t.jsxs)("div",{className:"".concat(c()["resume-item"]),children:[(0,t.jsx)("h4",{children:"Bachelor’s Degree Faculty of Business Administration"}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:"Major Information System"})}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:"Rajamangala University of Technology Krungthep."})})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 laptop:ml-4",children:[(0,t.jsx)("h3",{className:c()["resume-title"],children:"Professional Experience"}),(0,t.jsxs)("div",{className:"".concat(c()["resume-item1"]),children:[(0,t.jsx)("h4",{children:"Lead Android Developer"}),(0,t.jsx)("h5",{children:"2020 - Present"}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:"Thaivivat, Bangkok"})}),(0,t.jsxs)("ul",{className:"list-disc",children:[(0,t.jsx)("li",{children:"Lead development team in the design, coaching, development, coding, testing, and debugging of applications to deliver both quality and capacity."}),(0,t.jsx)("li",{children:"Work closely with business units (UI-UX, Manager, Backend) to understand their requirements and provide these in technical terms for the development team."}),(0,t.jsx)("li",{children:"Responsible for the architect, design, and ongoing development configure applications to meet business process and application requirements."}),(0,t.jsx)("li",{children:"Review new and existing codes to identify areas of improvement."}),(0,t.jsx)("li",{children:"Make core library use of team."})]}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:(0,t.jsx)("b",{children:"Kotlin & Jetpack Compose"})})}),(0,t.jsx)("div",{className:"".concat(c()["image-container"]),children:(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.thaivivat.superapp",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/tvi.webp"),alt:"tvi",width:48,height:48})})}),(0,t.jsx)("p",{className:"mt-2",children:(0,t.jsx)("em",{children:(0,t.jsx)("b",{children:"Jetpack Compose"})})}),(0,t.jsx)("div",{className:"".concat(c()["image-container"]),children:(0,t.jsx)("img",{src:"".concat(p,"/claim_app.png"),alt:"claim_app",width:48,height:48})})]}),(0,t.jsxs)("div",{className:"".concat(c()["resume-item1"]),children:[(0,t.jsx)("h4",{children:"Senior Android DEVELOPER"}),(0,t.jsx)("h5",{children:"Jun 2015 - May 2020"}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:"Buzzebees, Bangkok"})}),(0,t.jsxs)("ul",{className:"list-disc",children:[(0,t.jsx)("li",{children:"Be a part of an android team, work in cross functional model and agile development."}),(0,t.jsx)("li",{children:"Work on assigned task and review other developers code to ensure code quality."}),(0,t.jsx)("li",{children:"Attend a retrospective meeting to update work progress and problem encountered during the week."}),(0,t.jsx)("li",{children:"Make core library use of team"})]}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:(0,t.jsx)("b",{children:"Kotlin & Java, etc."})})}),(0,t.jsxs)("div",{className:"".concat(c()["image-container"]),children:[(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.samsung.th.galaxyappcenter&hl=en&gl=US",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/galaxy_reward.png"),alt:"galaxy_reward",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.samsung.privilege&hl=th&gl=US",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/galaxy_gift.png"),alt:"galaxy_gift",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.truecoffee",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/true.png"),alt:"true",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=th.co.crie.tron2.android",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/dtac.webp"),alt:"webp",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.greyhound",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/greyhound.png"),alt:"greyhound",width:48,height:48})}),(0,t.jsx)("img",{src:"".concat(p,"/bzb.png"),alt:"bzb",width:48,height:48}),(0,t.jsx)("img",{src:"".concat(p,"/reward_buzz.png"),alt:"reward_buzz",width:48,height:48}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.beerlao",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/beerlao.png"),alt:"beerlao",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://apps.apple.com/th/app/healthy-living/id1120542025",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/hl.png"),alt:"hl",width:48,height:48})}),(0,t.jsx)("img",{src:"".concat(p,"/synnex.png"),alt:"synnex",width:48,height:48}),(0,t.jsx)("img",{src:"".concat(p,"/get_van.png"),alt:"get_van",width:48,height:48}),(0,t.jsx)("img",{src:"".concat(p,"/what_sale.png"),alt:"what_sale",width:48,height:48}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.tgfone",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/tg.png"),alt:"tg",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.blackmores",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/blackmore.png"),alt:"blackmore",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.mama",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/spc.png"),alt:"spc",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.mbk",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/mbk.png"),alt:"mbk",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.megabangna",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/mega_bangna.png"),alt:"mega_bangna",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.oceanlife",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/ocean_life.png"),alt:"ocean_life",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.enfa.geniusbaby",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/mj.png"),alt:"mj",width:48,height:48})}),(0,t.jsx)("img",{src:"".concat(p,"/splus.png"),alt:"splus",width:48,height:48}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.royalcanin",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/royal_canin.png"),alt:"royal_canin",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.sme",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/sme.png"),alt:"sme",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.apps.MyXL",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/xl.png"),alt:"xl",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.yamahareward",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/yamaha.png"),alt:"yamaha",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.lawson",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/lawson.webp"),alt:"lawson",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.burgerking",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/burger_king.webp"),alt:"burger_king",width:48,height:48})})]}),(0,t.jsx)("p",{className:"mt-2",children:(0,t.jsx)("em",{children:(0,t.jsx)("b",{children:"Flutter, etc."})})}),(0,t.jsxs)("div",{className:"".concat(c()["image-container"]),children:[(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.pea.peavolta",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/pea_volta.webp"),alt:"pea_volta",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.cloudpos.stamp",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/bzb_merchant.webp"),alt:"bzb_merchant",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.bzbs.buzzpos",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/bzb_pos.webp"),alt:"bzb_pos",width:48,height:48})}),(0,t.jsx)(h(),{href:"https://play.google.com/store/apps/details?id=com.koithe.app.th",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:"".concat(p,"/koite.png"),alt:"koite",width:48,height:48})})]})]}),(0,t.jsxs)("div",{className:"".concat(c()["resume-item1"]),children:[(0,t.jsx)("h4",{children:"Android Developer"}),(0,t.jsx)("h5",{children:"Jan 2014 - May 2015"}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:"Excel Australasia, Bangkok"})}),(0,t.jsxs)("ul",{className:"list-disc",children:[(0,t.jsx)("li",{children:"Analyse and planing to process a system."}),(0,t.jsx)("li",{children:"Evaluation period to work"}),(0,t.jsx)("li",{children:"Design and develop interactive, database-oriented UI, UX Android."})]}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:(0,t.jsx)("b",{children:"Java + Kotlin"})})}),(0,t.jsxs)("div",{className:"".concat(c()["image-container"]),children:[(0,t.jsx)("img",{src:"".concat(p,"/eunic.png"),alt:"eunic",width:48,height:48}),(0,t.jsx)("img",{src:"".concat(p,"/thailand_exhibition.png"),alt:"thailand_exhibition",width:48,height:48}),(0,t.jsx)("img",{src:"".concat(p,"/tree_condo.webp"),alt:"tree_condo",width:48,height:48}),(0,t.jsx)("img",{src:"".concat(p,"/kaset_brand.png"),alt:"kaset_brand",width:48,height:48})]})]}),(0,t.jsxs)("div",{className:"".concat(c()["resume-item1"]),children:[(0,t.jsx)("h4",{children:"Android Developer"}),(0,t.jsx)("h5",{children:"May 2013 - Jan 2014"}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:"Devsense, Bangkok"})}),(0,t.jsx)("ul",{className:"list-disc",children:(0,t.jsx)("li",{children:"Manage and optimize all the mobile"})}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:(0,t.jsx)("b",{children:"Java"})})}),(0,t.jsxs)("div",{className:"".concat(c()["image-container"]),children:[(0,t.jsx)("img",{src:"".concat(p,"/ruindy.webp"),alt:"ruindy",width:48,height:48}),(0,t.jsx)("img",{src:"".concat(p,"/watson_th.webp"),alt:"watson_th",width:48,height:48}),(0,t.jsx)("img",{src:"".concat(p,"/suraj_intergold.webp"),alt:"suraj_intergold",width:48,height:48}),(0,t.jsx)("img",{src:"".concat(p,"/aec.png"),alt:"aec",width:48,height:48})]})]})]})]})]})})})})]})]})}},3428:function(e){e.exports={style:{fontFamily:"'__Inter_6408e8', '__Inter_Fallback_6408e8'",fontStyle:"normal"},className:"__className_6408e8"}},7953:function(e){e.exports={main:"Home_main__nLjiQ",bg:"Home_bg__MDUv5",my_self:"Home_my_self__K_1UA",my_self1:"Home_my_self1__lQyxf",my_social:"Home_my_social__mBqh4",twitter:"Home_twitter___Knxt",github:"Home_github__cSqgs",linkedin:"Home_linkedin__C5Gm_",clearfix:"Home_clearfix__5zRFN","image-container":"Home_image-container__b66kn",about:"Home_about__6Y_1_",skills:"Home_skills__4wVZl",resume:"Home_resume__c0I_i",fnt_start:"Home_fnt_start__8xgoz",progress:"Home_progress__RoFtq",skill:"Home_skill__m7LLJ",val:"Home_val__rOZ5N","progress-bar-wrap":"Home_progress-bar-wrap__ArZf5","progress-bar":"Home_progress-bar__PqEbw","resume-content-summary":"Home_resume-content-summary__SUApm","resume-item":"Home_resume-item__Jm86T","resume-item1":"Home_resume-item1__cTHpw","resume-title":"Home_resume-title__rUWrZ","pb-0":"Home_pb-0__xGQwt",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9"}},9008:function(e,s,r){e.exports=r(3121)},1664:function(e,s,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);