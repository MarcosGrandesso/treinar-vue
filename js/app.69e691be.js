(function(){"use strict";var t={782:function(t,e,n){var r=n(144),s=n(1096),i=n(3250),o=n(6715),a=n(5057),u=n(2469),l=n(3551),c=n(5234),p=function(){var t=this,e=t._self._c;return e(s.Z,[e(i.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(u.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(u.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(c.Z),e(o.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release irra")]),e(a.Z,[t._v("mdi-open-in-new")])],1)],1),e(l.Z,[e("GithubVue")],1)],1)},f=[],h=n(6035),d=function(){var t=this,e=t._self._c;return e(h.Z,[e("GithubRepo")],1)},g=[],v=n(4177),m=n(4437),b=n(5294),y=n(6069),w=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,{staticClass:"text-center"},[e(m.Z,{attrs:{cols:"6"}},[e(v.Z,{attrs:{items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login"},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(m.Z,{attrs:{cols:"6"}},[e(y.Z,{attrs:{items:t.repolist,"item-text":"name",loading:t.repoloading,label:"Selecione o repositorio","return-object":"","single-line":""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1),e("div",[e(o.Z,{on:{click:t.vai}},[t._v(" Vai ")])],1)],1)},Z=[];const _={async search_users(t){const e=await fetch(`https://api.github.com/search/users?q=${t}`);return await e.json()},async lista_repos(t,e=!1){e||(e=1);const n=await fetch(`https://api.github.com/users/${t}/repos?page=${e}`);return await n.json()}};let j=null;var k={data:()=>({repo:null,user:null,userlist:[],repolist:[],repoloading:!1,userloading:!1,usersearch:null}),methods:{procuraUsersDebounced(){j&&clearTimeout(j),this.debounceUser=setTimeout((()=>{this.getUser(),j=null}),760)},async listaRepositorios(){this.repoloading=!0;const t=await _.lista_repos(this.user);this.repolist=t,this.repoloading=!1},async getUser(){console.log("perguntei "+this.usersearch),this.userloading=!0;const t=await _.search_users(this.usersearch);this.userlist=t.items,this.userloading=!1}},watch:{usersearch(){this.procuraUsersDebounced()},user(){this.listaRepositorios(this.user)},repo(){console.log(this.repo)}}},x=k,O=n(1001),C=(0,O.Z)(x,w,Z,!1,null,null,null),P=C.exports,T={components:{GithubRepo:P},data:()=>({})},S=T,R=(0,O.Z)(S,d,g,!1,null,null,null),U=R.exports,V={name:"App",components:{GithubVue:U},data:()=>({})},G=V,$=(0,O.Z)(G,p,f,!1,null,null,null),M=$.exports,D=n(2250);r.ZP.use(D.Z);var L=new D.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:L,render:t=>t(M)}).$mount("#app")}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,s,i){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],s=t[c][1],i=t[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,i<o&&(o=i));if(a){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,i,o=r[0],a=r[1],u=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(u)var c=u(n)}for(e&&e(r);l<o.length;l++)i=o[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},r=self["webpackChunkgithub_viewer"]=self["webpackChunkgithub_viewer"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(782)}));r=n.O(r)})();
//# sourceMappingURL=app.69e691be.js.map