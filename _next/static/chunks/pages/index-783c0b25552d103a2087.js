_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{Dtc0:function(n,t,e){"use strict";e.r(t);var a=e("q1tI"),r=e.n(a),i=e("v7Hm"),l=e("wx14"),o=e("R6Vw"),c=e.n(o),s=e("wZsY"),u=e("zHD3"),f=e("+p43"),g=e("vG+z"),d=e("rGDf"),m=e("MAJE"),b=e("YWfn"),h=e("ZMKu"),p=e("ma3e"),y=r.a.createElement,v=function(n){var t=h.b.custom(s.a),e=h.b.custom(u.a),a=Object(f.b)().colorMode,r=[{name:"instagram",url:"https://instagram.com/ailabtelkom",icon:y(p.e,null)},{name:"github",url:"https://github.com/ailabtelkom",icon:y(p.d,null)},{name:"line",url:"http://line.me/ti/p/~jhf7225t",icon:y(p.f,null)},{name:"medium",url:"https://medium.com/ailab-telu",icon:y(p.h,null)}],o={start:{y:20,opacity:0},end:{y:0,opacity:1}};return y(i.a,Object(l.a)({h:"100vh",className:c.a.bgAnimation,_before:"dark"==a&&{filter:"invert(80%)"}},n),y(t,{initial:"start",animate:"end",exit:"exit",variants:{start:{y:30,opacity:0,transition:{staggerChildren:.2}},end:{y:0,opacity:1,transition:{staggerChildren:.2}},exit:{opacity:0,transition:{duration:.1}}},h:"full",alignItems:"center",justifyContent:{base:"center",lg:"unset"},direction:{base:"column",lg:"row"},m:"auto",maxW:[null,null,"2xl","5xl"]},y(i.a,{p:"6"},y(g.a,{shadow:"lg",rounded:"full",src:"img/logo-lg.png",fallbackSrc:"https://raw.githubusercontent.com/ailabtelkom/ailabtelkom.github.io/master/public/img/logo-lg.png",w:{base:"200px",lg:"xl"},alt:"Artificial Intelligence logo"})),y(i.a,{p:"2",textAlign:{base:"center",lg:"unset"}},y(d.a,null,"Artificial Intelligence Laboratory "),y(m.a,null,"AI Lab is a research laboratory under the Intelligence, Computing and Multimedia (ICM) research group. We stand in the Informatics Faculty at Telkom University."),y(s.a,{direction:"row",mt:4,justifyContent:{default:"center",lg:"unset"}},r.map((function(n,t){return y(e,{key:t,variants:o,href:n.url,isExternal:!0},y(b.a,{colorScheme:"yellow","aria-label":n.name,icon:n.icon}))}))))))},O=r.a.createElement;t.default=function(){return O(i.a,{style:{overflowY:"scroll",height:"100vh",scrollSnapType:"y mandatory"}},O(v,{style:{scrollSnapAlign:"start"}}))}},H0SL:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("Dtc0")}])},R6Vw:function(n,t,e){n.exports={bgAnimation:"Jumbotron_bgAnimation__2154X",slide:"Jumbotron_slide__2Rq-8"}},YWfn:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var a=e("pr4h"),r=e("q1tI"),i=e("3L07"),l=e("sKyC");function o(){return(o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}var c=Object(l.a)((function(n,t){var{icon:e,children:a,isRound:l,"aria-label":c}=n,s=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,["icon","children","isRound","aria-label"]),u=e||a,f=r.isValidElement(u)?r.cloneElement(u,{"aria-hidden":!0,focusable:!1}):null;return r.createElement(i.a,o({padding:"0",borderRadius:l?"full":"md",ref:t,"aria-label":c},s),f)}));a.a&&(c.displayName="IconButton")},rGDf:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var a=e("q1tI"),r=e("sKyC"),i=e("4jWa"),l=e("CRla"),o=e("U6LL"),c=e("epLR"),s=e("pr4h");function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}var f=Object(r.a)((function(n,t){var e=Object(i.b)("Heading",n),r=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(Object(l.d)(n),["className"]);return a.createElement(o.a.h2,u({ref:t,className:Object(c.a)("chakra-heading",n.className)},r,{__css:e}))}));s.a&&(f.displayName="Heading")},"vG+z":function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var a=e("sKyC"),r=e("U6LL"),i=e("BXwj"),l=e("pr4h"),o=e("q1tI"),c=e("zlS4");function s(n){var{src:t,srcSet:e,onLoad:a,onError:r,crossOrigin:i,sizes:l,ignoreFallback:s}=n,[u,f]=Object(o.useState)(()=>t?"loading":"pending");Object(o.useEffect)(()=>{f(t?"loading":"pending")},[t]);var g=Object(o.useRef)(),d=Object(o.useCallback)(()=>{if(t){m();var n=new Image;n.src=t,i&&(n.crossOrigin=i),e&&(n.srcset=e),l&&(n.sizes=l),n.onload=n=>{m(),f("loaded"),null==a||a(n)},n.onerror=n=>{m(),f("failed"),null==r||r(n)},g.current=n}},[t,i,e,l,a,r]),m=()=>{g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return Object(c.a)(()=>{if(!s)return"loading"===u&&d(),()=>{m()}},[u,d,s]),s?"loaded":u}function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function f(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}var g=o.forwardRef((function(n,t){var{htmlWidth:e,htmlHeight:a}=n,r=f(n,["htmlWidth","htmlHeight"]);return o.createElement("img",u({width:e,height:a,ref:t},r))})),d=Object(a.a)((function(n,t){var{fallbackSrc:e,fallback:a,src:l,align:c,fit:d,loading:m,ignoreFallback:b,crossOrigin:h}=n,p=f(n,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),y=null!=m||b,v=s(u({},n,{ignoreFallback:y})),O=u({ref:t,objectFit:d,objectPosition:c},y?p:Object(i.d)(p,["onError","onLoad"]));return"loaded"!==v?a||o.createElement(r.a.img,u({as:g,className:"chakra-image__placeholder",src:e},O)):o.createElement(r.a.img,u({as:g,src:l,crossOrigin:h,loading:m,className:"chakra-image"},O))}));l.a&&(d.displayName="Image")},wx14:function(n,t,e){"use strict";function a(){return(a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}e.d(t,"a",(function(){return a}))}},[["H0SL",0,1,4,2,3]]]);