(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,e,n){t.exports=n(253)},172:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=172},174:function(t,e,n){"use strict";var r=n(56);n.n(r).a},175:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,"\n.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.__nuxt-error-page .error{max-width:450px\n}\n.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px\n}\n.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px\n}\n.__nuxt-error-page a{color:#7f828b!important;text-decoration:none\n}\n.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px\n}",""])},185:function(t,e,n){"use strict";var r=n(57);n.n(r).a},186:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,"\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999\n}",""])},192:function(t,e,n){"use strict";var r=n(58);n.n(r).a},193:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,"\nhtml{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box\n}\n*,:after,:before{box-sizing:border-box;margin:0\n}\n.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px\n}\n.button--green:hover{color:#fff;background-color:#3b8070\n}\n.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px\n}\n.button--grey:hover{color:#fff;background-color:#35495e\n}",""])},253:function(t,e,n){"use strict";n.r(e);n(94),n(101),n(104);var r=n(30),o=n.n(r),a=(n(67),n(68),n(151),n(4)),i=n.n(a),s=(n(105),n(48),n(107),n(106),n(156),n(168),n(0)),u=(n(114),n(172)),c=u.keys();function l(t){var e=u(t);return e.default?e.default:e}var p={},f=!0,h=!1,d=void 0;try{for(var x,m=c[Symbol.iterator]();!(f=(x=m.next()).done);f=!0){var v=x.value;p[v.replace(/^\.\//,"").replace(/\.(mjs|js)$/,"")]=l(v)}}catch(t){h=!0,d=t}finally{try{f||null==m.return||m.return()}finally{if(h)throw d}}var g=p,y=n(31),b=n.n(y),_=n(135),w=n.n(_),C=n(91),k=function(){return n.e(1).then(n.bind(null,270)).then(function(t){return t.default||t})},$=function(){return n.e(2).then(n.bind(null,271)).then(function(t){return t.default||t})},E=function(){return n.e(3).then(n.bind(null,269)).then(function(t){return t.default||t})};s.default.use(C.a),window.history.scrollRestoration="manual";var R=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var S=n(136),j=n.n(S).a,T={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};A.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var p={};O.forEach(function(t){"function"==typeof c[t]&&(p[t]=c[t].bind(a))});var f=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(a,t)};var h=[t("router-view",r)];return void 0!==o.keepAlive&&(h=[t("keep-alive",h)]),t("transition",{props:l,on:p},h)}},A=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],O=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],N={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},q={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},P=(n(174),n(21)),M=Object(P.a)(q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);M.options.__file="nuxt-error.vue";var D=M.exports,L=(n(176),n(177),n(179),n(181),n(182),n(184),function(){return{}});function z(t,e){var n=t.options.data||L;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),b()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function I(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function U(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function B(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function J(t){return Promise.all(B(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[o]=I(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function H(t){return K.apply(this,arguments)}function K(){return(K=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:return t.abrupt("return",b()({},e,{meta:U(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function F(t,e){return Q.apply(this,arguments)}function Q(){return(Q=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=nt(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,H(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,H(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function V(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function X(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function G(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?Z:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,p=a[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(l=s(p[f]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=Y.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var p=t[a],f=n[2],h=n[3],d=n[4],x=n[5],m=n[6],v=n[7];i&&(r.push(i),i="");var g=null!=f&&null!=p&&p!==f,y="+"===m||"*"===m,b="?"===m||"*"===m,_=n[2]||s,w=d||x;r.push({name:h||o++,prefix:f||"",delimiter:_,optional:b,repeat:y,partial:g,asterisk:!!v,pattern:w?et(w):v?".*":"[^"+tt(_)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function W(t,e){var n={},r=b()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var Y=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Z(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function tt(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function et(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function nt(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var rt={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||G(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:T,NuxtError:D}},ot={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"#fff",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},at=(n(185),Object(P.a)(ot,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,null,null,null));at.options.__file="nuxt-loading.vue";var it=at.exports,st=(n(187),n(192),Object(P.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,null,null,null));st.options.__file="default.vue";var ut={_default:st.exports},ct={head:{title:"navgation",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My amazing Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=t("transition",{props:{name:"layout",mode:"out-in"}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&ut["_"+t]||(t="default"),this.layoutName=t,this.layout=ut["_"+t],this.layout},loadLayout:function(t){return t&&ut["_"+t]||(t="default"),Promise.resolve(ut["_"+t])}},components:{NuxtLoading:it}},lt=n(137),pt=n.n(lt),ft=n(138),ht=n.n(ft),dt=function(){s.default.use(pt.a,{locale:ht.a})};s.default.component(j.name,j),s.default.component(T.name,T),s.default.component(N.name,N),s.default.component(rt.name,rt),s.default.use(w.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var xt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function mt(){return(mt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new C.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:R,routes:[{path:"/about",component:k,name:"about"},{path:"/demo/timer",component:$,name:"demo-timer"},{path:"/",component:E,name:"index"}],fallback:!1});case 2:return n=t.sent,r=b()({router:n,nuxt:{defaultTransition:xt,transitions:[xt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},xt,{name:t}):Object.assign({},xt,t):xt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},ct),o=e?e.next:function(t){return r.router.push(t)},e?a=n.resolve(e.url).route:(i=X(n.options.base),a=n.resolve(i).route),t.next=8,F(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.default[n]||(s.default[n]=!0,s.default.use(function(){s.default.prototype.hasOwnProperty(t)||Object.defineProperty(s.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof dt){t.next=12;break}return t.next=12,dt(r.context,u);case 12:t.next=15;break;case 15:return t.abrupt("return",{app:r,router:n});case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var vt,gt,yt=[],bt=window.__NUXT__||{};function _t(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function wt(t,e,n){return Ct.apply(this,arguments)}function Ct(){return(Ct=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!vt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?W(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,J(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function kt(t,e){return bt.serverRendered&&e&&z(t,e),t._Ctor=t,t}function $t(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof g[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():V(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Et(t,e,n){return Rt.apply(this,arguments)}function Rt(){return(Rt=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,l,p,f,h,d,x,m,v,g,y,b,_=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return yt=e===n?[]:U(n,o=[]).map(function(t,e){return G(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){n.path===t.path&&_.$loading.finish&&_.$loading.finish(),n.path!==t.path&&_.$loading.pause&&_.$loading.pause(),a||(a=!0,r(t))},t.next=7,F(vt,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=vt.nuxt.dateErr,this._hadError=!!vt.nuxt.err,(c=U(e,u=[])).length){t.next=25;break}return t.next=14,$t.call(this,c,vt.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof D.layout?D.layout(vt.context):D.layout);case 18:return l=t.sent,t.next=21,$t.call(this,c,vt.context,l);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return vt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(_t(c,e,n)),t.prev=27,t.next=30,$t.call(this,c,vt.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!vt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(p=c[0].options.layout)&&(p=p(vt.context)),t.next=38,this.loadLayout(p);case 38:return p=t.sent,t.next=41,$t.call(this,c,vt.context,p);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!vt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,h=!0,d=!1,x=void 0,t.prev=50,m=c[Symbol.iterator]();case 52:if(h=(v=m.next()).done){t.next=64;break}if("function"==typeof(g=v.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(vt.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,x=t.t0;case 70:t.prev=70,t.prev=71,h||null==m.return||m.return();case 73:if(t.prev=73,!d){t.next=76;break}throw x;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=G(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,_._pathChanged&&_._queryChanged||t._path!==yt[n])t._dataRefresh=!0;else if(!_._pathChanged&&_._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return _._diffQuery[t]}))}if(!_._hadError&&_._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var c=V(t.options.asyncData,vt.context).then(function(e){z(t,e),_.$loading.increase&&_.$loading.increase(s)});o.push(c)}if(_.$loading.manual=!1===t.options.loading,i){var l=t.options.fetch(vt.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){_.$loading.increase&&_.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return yt=[],y=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||y||500,w=t.t2,s.default.config.errorHandler&&s.default.config.errorHandler(w),"function"==typeof(b=D.layout)&&(b=b(vt.context)),t.next=108,this.loadLayout(b);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var w},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function St(t,e){B(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.default.extend(t))._Ctor=t,n.components[r]=t),t})}function jt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?D.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(vt.context)),this.setLayout(e)}function Tt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.default.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=U(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.default.set(t.$data,r,n[r])}}),jt.call(n,t)})}function At(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),gt.afterEach(function(e,n){s.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Ot(){return(Ot=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return vt=e.app,gt=e.router,t.next=4,Promise.all((void 0,c=X((u=gt).options.base,u.options.mode),B(u.match(c),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=kt(I(e),bt.data?bt.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.default(vt),o=bt.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),s.default.nextTick(function(){At(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(_t(n,gt.currentRoute)),yt=gt.currentRoute.matched.map(function(t){return G(t.path)(gt.currentRoute.params)})),r.$loading={},bt.error&&r.error(bt.error),gt.beforeEach(wt.bind(r)),gt.beforeEach(Et.bind(r)),gt.afterEach(St),gt.afterEach(Tt.bind(r)),!bt.serverRendered){t.next=22;break}return a(),t.abrupt("return");case 22:Et.call(r,gt.currentRoute,gt.currentRoute,function(t){if(!t)return St(gt.currentRoute,gt.currentRoute),jt.call(r,gt.currentRoute),void a();gt.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.default.config,{silent:!0,performance:!1}),function(t){return mt.apply(this,arguments)}().then(function(t){return Ot.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},56:function(t,e,n){var r=n(175);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(41).default)("45b1ddea",r,!0,{sourceMap:!1})},57:function(t,e,n){var r=n(186);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(41).default)("fd547dac",r,!0,{sourceMap:!1})},58:function(t,e,n){var r=n(193);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(41).default)("371b8fbf",r,!0,{sourceMap:!1})}},[[140,6,4,5]]]);