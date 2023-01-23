(function(){"use strict";var t={9878:function(t,e,n){var r=n(144),s=n(1096),i=n(3250),u=n(6715),o=n(5057),a=n(2469),c=n(3551),l=n(5234),f=function(){var t=this,e=t._self._c;return e(s.Z,[e(i.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(a.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(a.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(l.Z),e(u.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release irra")]),e(o.Z,[t._v("mdi-open-in-new")])],1)],1),e(c.Z,[e("GithubVue")],1)],1)},h=[],d=n(4437),p=n(6035),v=n(5294),g=function(){var t=this,e=t._self._c;return e(p.Z,[e(v.Z,{staticClass:"text-center"},[e(d.Z,{attrs:{cols:"12"}},[e("GithubRepo")],1)],1)],1)},m=[],b=n(9810),y=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,{attrs:{items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login"},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),e("div",[e(u.Z,{on:{click:t.vai}},[t._v(" Vai ")])],1)],1)},Z=[];const w={search_users(t){return fetch(`https://api.github.com/search/users?q=${t}`).then((t=>t.json()))}};let _=null;var k={data:()=>({user:null,userlist:[],userloading:!1,usersearch:null}),methods:{procuraUsersDebounced(){_&&clearTimeout(_),this.debounceUser=setTimeout((()=>{this.getUser(),_=null}),760)},getUser(){console.log("perguntei "+this.usersearch),this.userloading=!0,w.search_users(this.usersearch).then((t=>{this.userlist=t.items,this.userloading=!1}))}},watch:{usersearch(){this.procuraUsersDebounced()}}},O=k,j=n(1001),x=(0,j.Z)(O,y,Z,!1,null,null,null),C=x.exports,P={components:{GithubRepo:C},data:()=>({})},T=P,S=(0,j.Z)(T,g,m,!1,null,null,null),U=S.exports,V={name:"App",components:{GithubVue:U},data:()=>({})},G=V,M=(0,j.Z)(G,f,h,!1,null,null,null),R=M.exports,D=n(2250);r.ZP.use(D.Z);var L=new D.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:L,render:t=>t(R)}).$mount("#app")}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,s,i){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],s=t[l][1],i=t[l][2];for(var o=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(o=!1,i<u&&(u=i));if(o){t.splice(l--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,i,u=r[0],o=r[1],a=r[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(a)var l=a(n)}for(e&&e(r);c<u.length;c++)i=u[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkgithub_viewer"]=self["webpackChunkgithub_viewer"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9878)}));r=n.O(r)})();
//# sourceMappingURL=app.c427253f.js.map