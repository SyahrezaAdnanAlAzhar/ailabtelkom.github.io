_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{AUk8:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("nOHt"),c=r("AesL"),i=r("v7Hm"),u=r("E+Us"),s=r("9ixD"),f=a.a.createElement;t.default=function(){var e=Object(o.useRouter)();return Object(n.useEffect)((function(){e.push("/resources/nlp")}),[]),f(i.a,{pt:"80px",px:{default:6,md:0}},f(s.b,{title:"Resources"}),f(c.a,{href:"/resources/nlp",route:!0},"Redirecting to ",f(u.a,null,"/resources/nlp")))}},AesL:function(e,t,r){"use strict";var n=r("wx14"),a=r("rePB"),o=r("Ff2n"),c=r("q1tI"),i=r.n(c),u=r("YFqc"),s=r.n(u),f=r("+p43"),l=r("zHD3"),p=i.a.createElement;function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t=e.route,r=e.href,a=e.linkAs,c=(e.nextProps,e.children),i=e.isExternal,u=Object(o.a)(e,["route","href","linkAs","nextProps","children","isExternal"]),d=Object(f.b)().colorMode,v=b(b({},u),{},{color:u.color||("dark"===d?"blue.300":"blue.500"),children:c});return t?p(s.a,{as:a,href:r,passHref:!0},p(l.a,v)):p(l.a,Object(n.a)({href:r},v,{isExternal:i}))};v.defaultProps={route:!1,isExternal:!0},t.a=v},"E+Us":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("sKyC"),a=r("4jWa"),o=r("CRla"),c=r("U6LL"),i=r("epLR"),u=r("pr4h"),s=r("q1tI");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=Object(n.a)((function(e,t){var r=Object(a.b)("Code",e),n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(Object(o.d)(e),["className"]);return s.createElement(c.a.code,f({ref:t,className:Object(i.a)("chakra-code",e.className)},n,{__css:f({display:"inline-block"},r)}))}));u.a&&(l.displayName="Code")},Ff2n:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("zLVn");function a(e,t){if(null==e)return{};var r,a,o=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var o,c=a(r("q1tI")),i=r("elyg"),u=r("nOHt"),s=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var r=o||(f?o=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),s.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,r,n){(0,i.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),l[t+"%"+r]=!0)}var b=function(e){var t=!1!==e.prefetch,r=c.default.useState(),a=n(r,2),o=a[0],s=a[1],b=(0,u.useRouter)(),v=b&&b.pathname||"/",O=c.default.useMemo((function(){var t=(0,i.resolveHref)(v,e.href,!0),r=n(t,2),a=r[0],o=r[1];return{href:a,as:e.as?(0,i.resolveHref)(v,e.as):o||a}}),[v,e.href,e.as]),h=O.href,y=O.as;c.default.useEffect((function(){if(t&&f&&o&&o.tagName&&(0,i.isLocalURL)(h)&&!l[h+"%"+y])return p(o,(function(){d(b,h,y)}))}),[t,o,h,y,b]);var j=e.children,g=e.replace,w=e.shallow,m=e.scroll;"string"===typeof j&&(j=c.default.createElement("a",null,j));var E=c.Children.only(j),x={ref:function(e){e&&s(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,b,h,y,g,w,m)}};return t&&(x.onMouseEnter=function(e){(0,i.isLocalURL)(h)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),d(b,h,y,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(x.href=(0,i.addBasePath)((0,i.addLocale)(y,b&&b.locale,b&&b.defaultLocale))),c.default.cloneElement(E,x)};t.default=b},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},v7Hm:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("U6LL"),a=r("sKyC"),o=r("pr4h"),c=r("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var s=Object(n.a)("div");o.a&&(s.displayName="Box");var f=Object(a.a)((function(e,t){var{size:r,centerContent:n=!0}=e,a=u(e,["size","centerContent"]),o=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return c.createElement(s,i({ref:t,boxSize:r,__css:i({},o,{flexShrink:0,flexGrow:0})},a))}));o.a&&(f.displayName="Square");var l=Object(a.a)((function(e,t){var{size:r}=e,n=u(e,["size"]);return c.createElement(f,i({size:r,ref:t,borderRadius:"9999px"},n))}));o.a&&(l.displayName="Circle")},w5fj:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources",function(){return r("AUk8")}])},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},zHD3:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("sKyC"),a=r("4jWa"),o=r("CRla"),c=r("U6LL"),i=r("q1tI"),u=r("epLR"),s=r("pr4h");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=Object(n.a)((e,t)=>{var r=Object(a.b)("Link",e),n=Object(o.d)(e),{className:s,isExternal:l}=n,p=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(n,["className","isExternal"]);return i.createElement(c.a.a,f({target:l?"_blank":void 0,rel:l?"noopener noreferrer":void 0,ref:t,className:Object(u.a)("chakra-link",s)},p,{__css:r}))});s.a&&(l.displayName="Link")},zLVn:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))}},[["w5fj",0,1,2,4,5]]]);