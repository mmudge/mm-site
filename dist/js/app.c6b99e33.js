(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],o[i]&&d.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"93b01975"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),r=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b53":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=(n("15f5"),n("bb71"));n("da64");a["a"].use(o["a"],{iconfont:"fa"});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Nav",{attrs:{appName:e.appName}}),n("v-content",[n("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"side-nav"}},[n("v-container",{staticClass:"card-container",attrs:{fluid:""}},[n("v-layout",{staticClass:"card-layout",attrs:{column:"","justify-center":""}},[e._l(e.navDropItems,function(t,a){return[n("v-card",{key:a,staticClass:"nav-card",class:t.theme,attrs:{flat:"",to:t.link}},[n("h1",[e._v(e._s(t.title.toUpperCase()))])])]})],2)],1)],1)])},s=[],u={name:"Nav",props:["appName"],data:function(){return{drawer:!0,navDropItems:[{title:"About me",link:"/about",theme:"red-card"},{title:"Portfolio",link:"/portfolio",theme:"purple-card"},{title:"Contact",link:"/contact",theme:"blue-card"}]}},computed:{},methods:{}},l=u,f=(n("9ae0"),n("2877")),d=n("6544"),p=n.n(d),m=n("b0af"),v=n("a523"),b=n("a722"),h=Object(f["a"])(l,c,s,!1,null,"f941b06a",null),g=h.exports;p()(h,{VCard:m["a"],VContainer:v["a"],VLayout:b["a"]});var y={name:"App",components:{Nav:g},data:function(){return{appName:"Michael Mudge | Web Developer"}}},k=y,w=(n("5c0b"),n("7496")),C=n("549c"),O=Object(f["a"])(k,r,i,!1,null,null,null),_=O.exports;p()(O,{VApp:w["a"],VContent:C["a"]});var j=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("vue-particles",{staticStyle:{position:"fixed",height:"100vh",width:"100vw"},attrs:{color:"#fff",particleOpacity:.5,particlesNumber:55,shapeType:"edge",particleSize:2,linesColor:"#fff",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:180,moveSpeed:1,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),n("v-container",{staticClass:"flex-center header-content"},[n("div",[n("p",{staticClass:"line-item line-one"},[e._v("HELLO")]),n("p",{staticClass:"line-item line-two"},[e._v("I'M MIKE")]),n("p",{staticClass:"line-item line-three"},[e._v("I'M A WEB DEVELOPER")]),n("p",{staticClass:"line-item line-four"},[e._v("WITH A PASSION FOR")]),n("p",{staticClass:"line-item line-five"},[e._v("CODE, DESIGN, & SOFTWARE")])])])],1)},P=[],S={name:"Home",components:{}},x=S,I=(n("d4f4"),Object(f["a"])(x,E,P,!1,null,"3e15ad18",null)),M=I.exports;p()(I,{VContainer:v["a"]}),a["a"].use(j["a"]);var A=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/portfolio",name:"portfolio",component:function(){return n.e("about").then(n.bind(null,"c9e5"))}},{path:"/contact",name:"contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}}]}),N=n("2f62");a["a"].use(N["a"]);var D=new N["a"].Store({state:{cast:[{name:"David Mudge",img:n("83df"),role:"Actor & Producer",bio:"Professional actor and part time pro surfer. I enjoy making movies and long walks on the beach.",social:{fb:"facebook.come/davidmudge",insta:"instagram.com/themudgeman"}},{name:"Hayden T",img:n("83df"),role:"Actor",bio:"Professional actor and part time pro surfer. I enjoy making movies and long walks on the beach.",social:{fb:"facebook.come/davidmudge",insta:"instagram.com/themudgeman"}},{name:"Conner K",img:n("83df"),role:"Actor",bio:"Professional actor and part time pro surfer. I enjoy making movies and long walks on the beach.",social:{fb:"facebook.come/davidmudge",insta:"instagram.com/themudgeman"}},{name:"Richard Z",img:n("83df"),role:"Director",bio:"Professional actor and part time pro surfer. I enjoy making movies and long walks on the beach.",social:{fb:"facebook.come/davidmudge",insta:"instagram.com/themudgeman"}}]},mutations:{},actions:{}}),T=n("98c9");a["a"].use(T["a"]),a["a"].config.productionTip=!1,new a["a"]({router:A,store:D,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("6879"),o=n.n(a);o.a},6879:function(e,t,n){},"83df":function(e,t,n){e.exports=n.p+"img/d-headshot.ddfd1350.jpg"},"9ae0":function(e,t,n){"use strict";var a=n("0b53"),o=n.n(a);o.a},b77a:function(e,t,n){},d4f4:function(e,t,n){"use strict";var a=n("b77a"),o=n.n(a);o.a}});
//# sourceMappingURL=app.c6b99e33.js.map