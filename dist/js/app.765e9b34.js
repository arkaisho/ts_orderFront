(function(e){function t(t){for(var r,s,u=t[0],i=t[1],c=t[2],p=0,f=[];p<u.length;p++)s=u[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s={components:{}},u=s,i=n("2877"),c=Object(i["a"])(u,o,a,!1,null,null,null),l=c.exports,p=n("8c4f"),f=(n("d3b7"),n("2f62")),m=n("bc3a"),d=n.n(m),v=d.a.create({baseURL:"https://ts-confectionery.herokuapp.com",headers:{"Content-Type":"application/json"}});v.interceptors.request.use((function(e){var t=y.state.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));var h=v;r["a"].use(f["a"]);var b={token:null,user:{}},g={DEFINIR_USUARIO_LOGADO:function(e,t){var n=t.token,r=t.user;e.token=n,e.user=r},DESLOGAR_USUARIO:function(e){e.token=null,e.user={}}},_={efetuarLogin:function(e,t){var n=e.commit;return new Promise((function(e,r){h.post("/login",t).then((function(t){n("DEFINIR_USUARIO_LOGADO",{token:t.data.access_token,user:t.data.user}),e(t.data)})).catch((function(e){r(e)}))}))}},y=new f["a"].Store({state:b,mutations:g,actions:_}),w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"jumbotron mt-2"},[n("h1",{staticClass:"display-4"},[e._v("Bem-vindo!")])])])}],j={name:"home"},x=j,k=Object(i["a"])(x,w,O,!1,null,null,null),L=k.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Login")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.efetuarLogin(t)}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"text"}},[e._v("Login")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"senha"}},[e._v("Senha")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),n("button",{staticClass:"btn btn-primary brn-block",attrs:{type:"submit"}},[e._v("Logar")])])])},S=[],$={data:function(){return{user:{username:"",password:""}}},methods:{efetuarLogin:function(){var e=this;this.$store.dispatch("efetuarLogin",this.user).then((function(){return e.$router.push({name:"main"})}))}}},C=$,E=Object(i["a"])(C,P,S,!1,null,null,null),A=E.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Bem vindo ")])},R=[],U={name:"Main"},D=U,M=Object(i["a"])(D,I,R,!1,null,null,null),N=M.exports;r["a"].use(p["a"]);var T=[{path:"",name:"home",component:L},{path:"/login",name:"login",component:A,meta:{publica:!0}},{path:"/main",name:"main",component:N}],B=new p["a"]({routes:T});B.beforeEach((function(e,t,n){if(!e.meta.publica&&!y.state.token)return n({path:"/login"});n()}));var G=B;n("4989"),n("ab8b");r["a"].config.productionTip=!1,r["a"].prototype.$http=h,new r["a"]({router:G,store:y,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.765e9b34.js.map