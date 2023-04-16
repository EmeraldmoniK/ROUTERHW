(function(){"use strict";var e={8346:function(e,n,t){var r=t(9242),o=t(3396);const i={class:"wrapper"};function u(e,n,t,r,u,a){const c=(0,o.up)("Navbar"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c,{links:u.links},null,8,["links"]),(0,o.Wm)(s)])}var a=t(7139);const c={class:"nav"},s={class:"container"},l={class:"nav__container"},f={class:"list"};function d(e,n,t,r,i,u){const d=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",c,[(0,o._)("div",s,[(0,o._)("div",l,[(0,o.Wm)(d,{to:"/",class:"logo"},{default:(0,o.w5)((()=>[(0,o.Uk)("Logo")])),_:1}),(0,o._)("ul",f,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.links,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.url},[(0,o.Wm)(d,{to:e.url,class:"link"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.title),1)])),_:2},1032,["to"])])))),128))])])])])}var p={props:{links:{type:Array}}},m=t(89);const v=(0,m.Z)(p,[["render",d]]);var h=v,b={components:{Navbar:h},data(){return{links:[{title:"Главная",url:"/"},{title:"Users",url:"/users"},{title:"Todos",url:"/todos"},{title:"Posts",url:"/posts"},{title:"О нас",url:"/about"}]}}};const g=(0,m.Z)(b,[["render",u]]);var y=g,k=t(2483);const w={class:"container"},O=(0,o._)("h1",null,"НАШИ КЛИЕНТЫ ВО ВКЛАДКЕ Users",-1),_=[O];function C(e,n,t,r,i,u){return(0,o.wg)(),(0,o.iD)("div",w,_)}var j={};const A=(0,m.Z)(j,[["render",C]]);var E=A;const P=(0,k.p7)({history:(0,k.PO)(),routes:[{path:"/",name:"HomePage",component:E},{path:"/users",name:"Users",component:()=>t.e(733).then(t.bind(t,5733))},{path:"/users/:id",name:"UserItem",component:()=>t.e(967).then(t.bind(t,2967))},{path:"/todos",name:"Todos",component:()=>t.e(683).then(t.bind(t,5683))},{path:"/posts",name:"Posts",component:()=>t.e(997).then(t.bind(t,5997))},{path:"/about",name:"AboutPage",component:()=>t.e(796).then(t.bind(t,6796))},{path:"/about/:id",name:"CarItem",component:()=>t.e(423).then(t.bind(t,6423))},{path:"/:catchAll(.*)",name:"404",component:()=>t.e(184).then(t.bind(t,5184))}]});(0,r.ri)(y).use(P).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{184:"15c62af5",423:"1f565912",683:"1f704eef",733:"64a96a8a",796:"94e03de0",967:"3de6d9bb",997:"6671949c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".a3f5d3ff.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="cli:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/ROUTERHW/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var u=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={184:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(n&&n(r);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkcli"]=self["webpackChunkcli"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8346)}));r=t.O(r)})();
//# sourceMappingURL=app.e22058ba.js.map