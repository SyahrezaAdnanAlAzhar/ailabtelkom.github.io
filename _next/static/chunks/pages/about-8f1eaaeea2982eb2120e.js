(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{24836:function(a,i,e){"use strict";e.d(i,{E:function(){return u}});var t=e(24284),n=e(87850),r=e(19570),s=e(69739),o=e(67294),l=e(64249);function m(){return(m=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a}).apply(this,arguments)}function c(a,i){if(null==a)return{};var e,t,n={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],i.indexOf(e)>=0||(n[e]=a[e]);return n}var d=o.forwardRef(((a,i)=>{var{htmlWidth:e,htmlHeight:t,alt:n}=a,r=c(a,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",m({width:e,height:t,ref:i,alt:n},r))})),u=(0,t.G)(((a,i)=>{var{fallbackSrc:e,fallback:t,src:s,align:u,fit:h,loading:g,ignoreFallback:p,crossOrigin:f}=a,b=c(a,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),y=null!=g||p,w=function(a){var{src:i,srcSet:e,onLoad:t,onError:n,crossOrigin:r,sizes:s,ignoreFallback:m}=a,[c,d]=(0,o.useState)("pending");(0,o.useEffect)((()=>{d(i?"loading":"pending")}),[i]);var u=(0,o.useRef)(),h=(0,o.useCallback)((()=>{if(i){g();var a=new Image;a.src=i,r&&(a.crossOrigin=r),e&&(a.srcset=e),s&&(a.sizes=s),a.onload=a=>{g(),d("loaded"),null==t||t(a)},a.onerror=a=>{g(),d("failed"),null==n||n(a)},u.current=a}}),[i,r,e,s,t,n]),g=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,l.G)((()=>{if(!m)return"loading"===c&&h(),()=>{g()}}),[c,h,m]),m?"loaded":c}(m({},a,{ignoreFallback:y})),x=m({ref:i,objectFit:h,objectPosition:u},y?b:(0,r.CE)(b,["onError","onLoad"]));return"loaded"!==w?t||o.createElement(n.m$.img,m({as:d,className:"chakra-image__placeholder",src:e},x)):o.createElement(n.m$.img,m({as:d,src:s,crossOrigin:f,loading:g,className:"chakra-image"},x))}));s.Ts&&(u.displayName="Image")},97812:function(a,i,e){"use strict";e.d(i,{i:function(){return u}});var t=e(24284),n=e(28726),r=e(64620),s=e(87850),o=e(90785),l=e(69739),m=e(67294);function c(){return(c=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a}).apply(this,arguments)}function d(a,i){if(null==a)return{};var e,t,n={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],i.indexOf(e)>=0||(n[e]=a[e]);return n}var u=(0,t.G)(((a,i)=>{var e=(0,n.m)("Divider",a),{borderLeftWidth:t,borderBottomWidth:l,borderTopWidth:u,borderRightWidth:h,borderWidth:g,borderStyle:p,borderColor:f}=e,b=d(e,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),y=(0,r.Lr)(a),{className:w,orientation:x="horizontal",__css:k}=y,v=d(y,["className","orientation","__css"]),j={vertical:{borderLeftWidth:t||h||g||"1px",height:"100%"},horizontal:{borderBottomWidth:l||u||g||"1px",width:"100%"}};return m.createElement(s.m$.hr,c({ref:i,"aria-orientation":x},v,{__css:c({},b,{border:"0",borderColor:f,borderStyle:p},j[x],k),className:(0,o.cx)("chakra-divider",w)}))}));l.Ts&&(u.displayName="Divider")},85535:function(a,i,e){"use strict";e.d(i,{r:function(){return m}});var t=e(24284),n=e(87850),r=e(69739),s=e(67294);function o(){return(o=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a}).apply(this,arguments)}function l(a,i){if(null==a)return{};var e,t,n={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],i.indexOf(e)>=0||(n[e]=a[e]);return n}var m=(0,t.G)(((a,i)=>{var{area:e,templateAreas:t,gap:r,rowGap:m,columnGap:c,column:d,row:u,autoFlow:h,autoRows:g,templateRows:p,autoColumns:f,templateColumns:b}=a,y=l(a,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),w={display:"grid",gridArea:e,gridTemplateAreas:t,gridGap:r,gridRowGap:m,gridColumnGap:c,gridAutoColumns:f,gridColumn:d,gridRow:u,gridAutoFlow:h,gridAutoRows:g,gridTemplateRows:p,gridTemplateColumns:b};return s.createElement(n.m$.div,o({ref:i,__css:w},y))}));r.Ts&&(m.displayName="Grid")},58469:function(a,i,e){"use strict";e.d(i,{X:function(){return d}});var t=e(24284),n=e(28726),r=e(64620),s=e(87850),o=e(90785),l=e(69739),m=e(67294);function c(){return(c=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a}).apply(this,arguments)}var d=(0,t.G)(((a,i)=>{var e=(0,n.m)("Heading",a),t=function(a,i){if(null==a)return{};var e,t,n={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],i.indexOf(e)>=0||(n[e]=a[e]);return n}((0,r.Lr)(a),["className"]);return m.createElement(s.m$.h2,c({ref:i,className:(0,o.cx)("chakra-heading",a.className)},t,{__css:e}))}));l.Ts&&(d.displayName="Heading")},7879:function(a,i,e){"use strict";e.d(i,{M:function(){return m}});var t=e(24284),n=e(69739),r=e(14848),s=e(67294),o=e(85535);function l(){return(l=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a}).apply(this,arguments)}var m=(0,t.G)(((a,i)=>{var e,t,{columns:m,spacingX:c,spacingY:d,spacing:u,minChildWidth:h}=a,g=function(a,i){if(null==a)return{};var e,t,n={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],i.indexOf(e)>=0||(n[e]=a[e]);return n}(a,["columns","spacingX","spacingY","spacing","minChildWidth"]),p=h?(t=h,(0,r.XQ)(t,(a=>{return(0,n.Ft)(a)?null:"repeat(auto-fit, minmax("+(i=a,((0,n.hj)(i)?i+"px":i)+", 1fr))");var i}))):(e=m,(0,r.XQ)(e,(a=>(0,n.Ft)(a)?null:"repeat("+a+", minmax(0, 1fr))")));return s.createElement(o.r,l({ref:i,gap:u,columnGap:c,rowGap:d,templateColumns:p},g))}));n.Ts&&(m.displayName="SimpleGrid")},30532:function(a,i){"use strict";i.Z=[{name:"Ade Romadhony",position:"Laboratory Coordinator",image:"https://dummyimage.com/500x500/eee/fff&text=AR",social:{linkedin:"https://id.linkedin.com/in/ade-romadhony-8a302668"}},{name:"Muhammad Alfhi Saputra",position:"Lab.Assistant Coordinator",image:"/assets/images/aslab20/alfhi.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MAS",social:{linkedin:"https://id.linkedin.com/in/alfhisa",github:"https://github.com/alfhi24",instagram:"https://www.instagram.com/alfhisa_/"}},{name:"Kartika Putri Dwi Atmojo",position:"Secretary",image:"/assets/images/aslab20/tika.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=KPD",social:{instagram:"https://www.instagram.com/dwi.kartikaputri/"}},{name:"Muhammad Farrel",position:"Treasurer",image:"/assets/images/aslab20/farel.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MFR",social:{github:"https://github.com/muhammadfarrel",instagram:"https://www.instagram.com/mfarrell___/"}},{name:"Dimitri Irfan Dzidny",position:"Internal",image:"/assets/images/aslab20/dimit.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=DID",social:{linkedin:"https://id.linkedin.com/in/dimitriirfan",github:"https://github.com/dimitriirfan",instagram:"https://www.instagram.com/dimitriirfann/"}},{name:"Anvaqta Tangguh Wisesa",position:"Inventory \ud83d\ude0e",image:"/assets/images/aslab20/vaq.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=ATW",social:{linkedin:"https://id.linkedin.com/in/anvaqta",github:"https://github.com/svspicious",instagram:"https://www.instagram.com/anvaqta/"}},{name:"Adriansyah Dwi Rendragraha",position:"Focus Group",image:"/assets/images/aslab20/adri.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=ADR",social:{linkedin:"https://www.linkedin.com/in/adriansyahdr?originalSubdomain=id",instagram:"https://www.instagram.com/adriansyah.d.r/"}},{name:"Dimas Bayu Nugraha",position:"Study Group",image:"/assets/images/aslab20/dimba.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=DBN",social:{linkedin:"https://id.linkedin.com/in/dimbay76"}},{name:"Kriesna Bayu Pratama",position:"Media",image:"/assets/images/aslab20/kris.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=KBP",social:{instagram:"https://www.instagram.com/kriesnapratama/"}}]},30809:function(a,i){"use strict";i.Z=[{name:"Ade Romadhony",position:"Laboratory Coordinator",image:"https://dummyimage.com/500x500/eee/fff&text=AR",social:{linkedin:"https://id.linkedin.com/in/ade-romadhony-8a302668"}},{name:"I Nengah Dharma Pradnyandita",position:"Lab.Assistant Coordinator",image:"/assets/images/aslab21/dharma.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=IND",social:{linkedin:"https://id.linkedin.com/in/i-nengah-dharma-pradnyandita-05628b1a3/",github:"https://github.com/nengahdharmaa/",instagram:"https://www.instagram.com/nengahdharmaa/",email:"mailto:nengahdharmaa@gmail.com"}},{name:"Nisa Maulia Azahra",position:"Secretary",image:"/assets/images/aslab21/nisa.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=NMA",social:{linkedin:"https://id.linkedin.com/in/nisamaulia/",github:"https://github.com/nisamaulia/",instagram:"https://www.instagram.com/nisa_maulia/"}},{name:"Ni Made Dwipadini Puspitarini",position:"Treasurer",image:"/assets/images/aslab21/dini.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=NMD",social:{linkedin:"https://id.linkedin.com/in/dinipuspitarini/",github:"https://github.com/dinipuspitarini/",instagram:"https://www.instagram.com/dinipuspitharini/"}},{name:"Maiza Radhiya",position:"Internal",image:"/assets/images/aslab21/maiza.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MR",social:{linkedin:"https://id.linkedin.com/in/maizaradhiya/",github:"https://github.com/maizaradhiya/",instagram:"https://www.instagram.com/mzrdh/"}},{name:"Bagja 9102 Kurniawan",position:"\ud83d\udc31 External \ud83d\ude3c",image:"/assets/images/aslab21/bagja.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=BK",social:{linkedin:"https://id.linkedin.com/in/bagja9102/",github:"https://github.com/Bagja9102Kurniawan/",instagram:"https://www.instagram.com/mochi_oreo_/",email:"mailto:bagjakurniawan@student.telkomuniversity.ac.id"}},{name:"Muhammad Zaky Aonillah",position:"Focus Group",image:"/assets/images/aslab21/zaky.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MZA",social:{linkedin:"https://id.linkedin.com/in/mhmdzaky/",github:"https://github.com/mhmdzakyy/",instagram:"https://www.instagram.com/mhmdzakyy/"}},{name:"Haydar Rizaldy Putera Prayudi",position:"Study Group",image:"/assets/images/aslab21/haydar.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=HRP",social:{linkedin:"https://id.linkedin.com/in/haydar-rizaldy-putera-prayudi/",github:"https://github.com/HaydarRizaldy/",instagram:"https://www.instagram.com/haydar_rizaldy/"}},{name:"M Alif Naufal Yasin",position:"Inventory \u2615",image:"/assets/images/aslab21/alif.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MAN",social:{linkedin:"https://id.linkedin.com/in/alifnaufalyasin/",github:"https://github.com/alifnaufalyasin/",instagram:"https://www.instagram.com/alifnaufal_yasin/",email:"mailto:alifnaufalyasin@student.telkomuniversity.ac.id"}},{name:"Kaenova Mahendra Auditama",position:"Media",image:"/assets/images/aslab21/kae.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=KMA",social:{linkedin:"https://id.linkedin.com/in/kaenova/",github:"https://github.com/kaenova/",instagram:"https://www.instagram.com/kaenovama/"}}]},92813:function(a,i,e){"use strict";e.r(i),e.d(i,{default:function(){return j}});var t=e(85893),n=e(67294),r=e(40980),s=e(88091),o=e(24836),l=e(58469),m=e(48406),c=e(97812),d=e(7879),u=e(39629),h=e(65969),g=e(37349),p=e(12731),f=e(89583),b=e(5434),y=function(a){var i=a.dataAslab,e=(0,u.E)(s.xu),n=(0,r.useColorModeValue)("white","gray.700"),c={start:{y:20,opacity:0},end:{y:0,opacity:1}};return(0,t.jsx)(d.M,{columns:{base:2,lg:4},spacing:4,children:i.map((function(a,i){return(0,t.jsxs)(e,{backgroundColor:n,whileHover:{scale:1.02},whileTap:{scale:.98},variants:c,borderWidth:"1px",children:[(0,t.jsx)(o.E,{alt:a.name,src:a.image,fallbackSrc:a.fallback,maxH:"300px",mx:"auto"}),(0,t.jsx)(l.X,{as:"h4",fontSize:"lg",children:a.name}),(0,t.jsx)(m.x,{children:a.position}),(0,t.jsxs)(g.Kq,{direction:"row",justifyContent:"center",my:"2",children:[a.social.linkedin&&(0,t.jsx)(h.Z,{href:a.social.linkedin,children:(0,t.jsx)(p.h,{size:"sm",colorScheme:"yellow","aria-label":"LinkedIn",icon:(0,t.jsx)(f.ltd,{})})}),a.social.github&&(0,t.jsx)(h.Z,{href:a.social.github,children:(0,t.jsx)(p.h,{size:"sm",colorScheme:"yellow","aria-label":"Github",icon:(0,t.jsx)(f.hJX,{})})}),a.social.instagram&&(0,t.jsx)(h.Z,{href:a.social.instagram,children:(0,t.jsx)(p.h,{size:"sm",colorScheme:"yellow","aria-label":"Instagram",icon:(0,t.jsx)(f.Zf_,{})})}),a.social.email&&(0,t.jsx)(h.Z,{href:a.social.email,children:(0,t.jsx)(p.h,{size:"sm",colorScheme:"yellow","aria-label":"Email",icon:(0,t.jsx)(b.ixJ,{})})})]})]},i)}))})},w=[{name:"Study Group",desc:"Activities in this group includes studying the introduction of AI, exploring AI trends in industry and its research applications. In this study group, the members are taught a number of methods used in AI, so that later on, it can be used as their basic knowledge that can be developed in a lot of work that are related to AI.",image:"/img/undraw_pair_programming_njlp.svg"},{name:"Focus Group",desc:" This group-aims to conduct advanced AI research and publish its findings to academic journals or present it to academic conferences. In this round of year, the themes would be Computer Vision(CV) and Natural Language Processing(NLP).",image:"/img/undraw_images_aef7.svg"},{name:"Training/Workshop",desc:"Other than study and research activities, as our contribution to the society, we held some training and workshop in fields of Artificial Intelligence to reach people or students beyond the member of this lab.",image:"/img/undraw_predictive_analytics_kf9n.svg"}],x=e(30809),k=e(30532),v=e(2962),j=function(){var a=(0,u.E)(s.xu),i=((0,r.useColorMode)().colorMode,(0,r.useColorModeValue)("white","gray.700")),e={start:{y:20,opacity:0},end:{y:0,opacity:1}};return(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)(v.PB,{title:"About",description:"About Artificial Intelligence Laboratory Telkom University"}),(0,t.jsxs)(a,{initial:"start",animate:"end",variants:{start:{y:20,opacity:0,transition:{staggerChildren:.25}},end:{y:0,opacity:1,transition:{staggerChildren:.25}},exit:{opacity:0,transition:{duration:.1}}},maxW:[null,null,"2xl","5xl"],m:"auto",py:"50px",textAlign:"center",children:[(0,t.jsx)(o.E,{mt:"2",alt:"First Meet AILAB 2020",src:"/img/firstmeet2020.jpg",fallbackSrc:"/img/firstmeet2020.jpg?lqip"}),(0,t.jsxs)(s.xu,{px:{base:6,md:0},children:[(0,t.jsx)(l.X,{mt:"2",fontSize:{base:"2xl",lg:"3xl"},children:"About Artificial Intelligence Laboratory Telkom University"}),(0,t.jsxs)(m.x,{mt:"2",children:["AI Lab is a research laboratory under the Intelligence, Computing and Multimedia (ICM) research group. We stand in the Informatics Faculty at Telkom University. As a research-focused Lab, we held several main activities to fulfill our duty, such as Focus Group, Study Group, and Workshop. We located at"," ",(0,t.jsx)(h.Z,{href:"https://goo.gl/maps/JkPuorDbXQPJktyy8",isExternal:!0,children:"North Kultubai Building room E107 Telkom University"}),"."]}),(0,t.jsx)(c.i,{mt:"2",mb:"4"}),(0,t.jsx)(l.X,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mb:"4",children:"Our activities"}),(0,t.jsx)(d.M,{columns:{base:1,lg:3},spacing:4,children:w.map((function(n,r){return(0,t.jsxs)(a,{backgroundColor:i,whileHover:{scale:1.02},whileTap:{scale:.98},p:"2",variants:e,borderWidth:"1px",children:[(0,t.jsx)(o.E,{alt:n.name,src:n.image,fallbackSrc:n.fallback,loading:"lazy",maxH:"100px",mx:"auto"}),(0,t.jsx)(l.X,{as:"h4",fontSize:"lg",children:n.name}),(0,t.jsx)(m.x,{p:"2",textAlign:"justify",children:n.desc})]},r)}))}),(0,t.jsx)(l.X,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mt:"8",mb:"4",children:"Meet The Eliza 2021 Gang \ud83d\udc4a\ud83d\ude0e"}),(0,t.jsx)(y,{dataAslab:x.Z})]}),(0,t.jsxs)(s.xu,{px:{base:6,md:0},children:[(0,t.jsx)(l.X,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mt:"8",mb:"4",children:"Meet The Integer 2020 Gang \ud83d\udc4a\ud83d\ude0e"}),(0,t.jsx)(y,{dataAslab:k.Z})]})]})]})}},90841:function(a,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return e(92813)}])}},function(a){a.O(0,[228,774,888,179],(function(){return i=90841,a(a.s=i);var i}));var i=a.O();_N_E=i}]);