(function(e){function t(t){for(var o,n,c=t[0],l=t[1],i=t[2],s=0,f=[];s<c.length;s++)n=c[s],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],o=!0,n=1;n<r.length;n++){var c=r[n];0!==a[c]&&(o=!1)}o&&(u.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},n={1:0},a={1:0},u=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{2:"5c7fc2fb",3:"6215be3c",4:"f847846e"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={2:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var o="css/"+({}[e]||e)+"."+{2:"54258001",3:"31d6cfe0",4:"31d6cfe0"}[e]+".css",a=l.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===o||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],s=i.getAttribute("data-href");if(s===o||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete n[e],d.parentNode.removeChild(d),r(u)},d.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){n[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,r){o=a[e]=[t,r]}));t.push(o[2]=u);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var f=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=s;u.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"0047":function(e,t,r){},"2f39":function(e,t,r){"use strict";r.r(t);r("e6cf"),r("5319"),r("7d6e"),r("e54f"),r("985d"),r("0047"),r("b6d8");var o=r("2b0e"),n=r("1f91"),a=r("42d2"),u=r("b05d");o["a"].use(u["a"],{config:{},lang:n["a"],iconSet:a["a"]});var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},l=[],i=r("60a3"),s=function(e,t,r,o){var n,a=arguments.length,u=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)u=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(u=(a<3?n(u):a>3?n(t,r,u):n(t,r))||u);return a>3&&u&&Object.defineProperty(t,r,u),u};let f=class extends i["d"]{};f=s([i["a"]],f);var d=f,g=d,p=r("2877"),m=Object(p["a"])(g,c,l,!1,null,null,null),b=m.exports,h=r("2f62"),v=r("bfa9");function y(){return{prop:!0,lang:"pt-br",backgroundColor:"#ccc",fontColor:"#000",backgroundImage:null}}var w=y;const C={setLang({commit:e},t){e("mutateLang",t)},setBackgroundColor({commit:e},t){e("mutateBackgroundColor",t)},setBackgroundImage({commit:e},t){e("mutateBackgroundImage",t)},setFontColor({commit:e},t){e("mutateFontColor",t)}};var k=C;const P={getProp(e){return e.prop},getLang(e){return e.lang},getBackgroundColor(e){return e.backgroundColor},getBackgroundImage(e){return e.backgroundImage},getFontColor(e){return e.fontColor}};var O=P;const j={mutateLang(e,t){e.lang=t},mutateBackgroundColor(e,t){e.backgroundColor=t},mutateBackgroundImage(e,t){e.backgroundImage=t},mutateFontColor(e,t){e.fontColor=t}};var B=j;const _={namespaced:!0,actions:k,getters:O,mutations:B,state:w};var S=_;const E=new v["a"]({key:"clockApp",storage:window.localStorage});var x=function(){o["a"].use(h["a"]);const e=new h["a"].Store({modules:{config:S},plugins:[E.plugin],strict:!1});return e},T=r("4bde"),I=r("8c4f");const L=[{path:"/",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"8b24"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"e51e"))}];var F=L,A=Object(T["route"])((function({Vue:e}){e.use(I["a"]);const t=new I["a"]({scrollBehavior:()=>({x:0,y:0}),routes:F,mode:"hash",base:""});return t})),N=async function(){const e="function"===typeof x?await x({Vue:o["a"]}):x,t="function"===typeof A?await A({Vue:o["a"],store:e}):A;e.$router=t;const r={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:r,store:e,router:t}},V={currentTime:"Current Time:",version:"Version",configuration:{changeBackground:"Change Image",title:"Configuration",language:"Language",backgroundColor:"Background Color",fontColor:"Font Color"}},R={currentTime:"Horário Corrente:",version:"Versão",configuration:{changeBackground:"Alterar Imagem",title:"Configuração",language:"Idioma",backgroundColor:"Cor de Fundo",fontColor:"Cor da Fonte"}},q=r("3f93");q["b"].EN_US;var M={"en-us":V,"pt-br":R},U=r("a925");const D=x();o["a"].use(U["a"]);const $=new U["a"]({locale:D.state.config.lang,fallbackLocale:"en-us",silentFallbackWarn:!0,messages:M});var H=Object(T["boot"])((({app:e})=>{e.i18n=$})),J=r("bc3a"),K=r.n(J),Q=Object(T["boot"])((({Vue:e})=>{e.prototype.$axios=K.a})),W=r("9ce1");const z="";async function G(){const{app:e,store:t,router:r}=await N();let n=!1;const a=e=>{n=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},u=window.location.href.replace(window.location.origin,""),c=[H,Q,W["default"]];for(let i=0;!1===n&&i<c.length;i++)if("function"===typeof c[i])try{await c[i]({app:e,router:r,store:t,Vue:o["a"],ssrContext:null,redirect:a,urlPath:u,publicPath:z})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&new o["a"](e)}G()},"3f93":function(e,t,r){"use strict";var o;r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return n})),function(e){e["EN_US"]="en-us",e["PT_BR"]="pt-br"}(o||(o={}));const n=[{value:o.EN_US,label:"English"},{value:o.PT_BR,label:"Português"}]}});