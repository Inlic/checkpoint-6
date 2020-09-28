(function(t){function e(e){for(var s,r,n=e[0],c=e[1],l=e[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0383":function(t,e,a){"use strict";var s=a("7505"),o=a.n(s);o.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v("Bug Tracker!")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("bc3a"),l=a.n(c),u=a("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},p=d,g=a("2877"),m=Object(g["a"])(p,r,n,!1,null,null,null),v=m.exports,f={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:v}},h=f,b=(a("5c0b"),Object(g["a"])(h,o,i,!1,null,null,null)),C=b.exports,w=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid d-flex flex-column justify-content-center"},[t._m(0),a("div",{staticClass:"row"},[t.profile.email?a("div",{staticClass:"card offset-1 col-10 mt-2 p-1 border-success"},[a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.addBug(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"form-control mx-2",attrs:{type:"text",placeholder:"New Bug Title",required:""},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control mx-2",attrs:{type:"text",placeholder:"New Bug Description"},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}}),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Create Bug Report")])])]):t._e()]),a("div",{staticClass:"row card-body"},[a("table",{staticClass:"table table-striped offset-1 col-10"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Bug Report Title")]),a("th",{attrs:{scope:"col"}},[t._v("Creator")]),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Status "),a("i",{staticClass:"fa-eye-slash",class:{fas:t.fillEye,far:!t.fillEye},on:{click:t.hideClosed}})]),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Last Modified Date "),a("i",{staticClass:"fas fa-sort",on:{click:t.dateSort}})])]),a("tbody",t._l(t.bugs,(function(e){return a("tr",{directives:[{name:"show",rawName:"v-show",value:e.closed!==t.closed,expression:"bug.closed !== closed"}],key:e.id},[a("td",[a("h4",[a("router-link",{staticClass:"text-primary",attrs:{to:{name:"bug-details",params:{id:e.id}}}},[t._v(t._s(e.title))])],1)]),a("td",[a("h5",[t._v(t._s(e.creatorEmail))])]),a("td",{staticClass:"text-center"},[a("h5",[e.closed?a("span",{staticClass:"text-warning"},[t._v("Closed")]):a("span",{staticClass:"text-danger"},[t._v("Open")])])]),a("td",{staticClass:"text-center"},[a("h5",[t._v(t._s(new Date(e.updatedAt).toLocaleDateString("en-US")))])])])})),0)])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h1",{staticClass:"card offset-1 col-10 text-dark border-success my-2 pb-1"},[t._v("Reported Bugs")])])}],x={name:"home",mounted(){this.$store.dispatch("getBugs")},data(){return{newBug:{description:"",title:""},closed:"",fillEye:!0,sort:!1}},computed:{profile(){return this.$store.state.profile},bugs(){return this.$store.state.bugs}},methods:{addBug(){this.$store.dispatch("addBug",this.newBug),this.newBug={title:"",description:""}},hideClosed(){""===this.closed?(this.closed=!0,this.fillEye=!1):(this.closed="",this.fillEye=!0)},dateSort(){!1===this.sort?this.bugs.sort((t,e)=>{let a=new Date(t.updatedAt),s=new Date(e.updatedAt);return this.sort=!0,a-s}):this.bugs.sort((t,e)=>{let a=new Date(t.updatedAt),s=new Date(e.updatedAt);return this.sort=!1,s-a})}}},B=x,$=(a("e668"),Object(g["a"])(B,_,y,!1,null,null,null)),N=$.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},A=[],P={name:"Profile",computed:{profile(){return this.$store.state.profile}}},E=P,T=(a("0383"),Object(g["a"])(E,D,A,!1,null,"59c2bb44",null)),k=T.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-details container-fluid text-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 card"},[a("h1",{staticClass:"text-primary"},[t._v(t._s(t.bug.title))]),a("div",{staticClass:"offset-4 col-4 card mb-2"},[a("h2",[t._v("Bug Status: "),a("span",{class:{"text-warning":t.bug.closed,"text-danger":!t.bug.closed}},[t._v(t._s(t.bug.closed?"Closed":"Open"))])]),t.bug.closedDate?a("h2",[t._v("Closed on: "+t._s(new Date(t.bug.closedDate).toLocaleDateString("en-US")))]):t._e()]),a("h6",{staticClass:"text-warning"},[t._v("Created By: "+t._s(t.bug.creatorEmail))]),a("div",{staticClass:"col-12 card-body"},[a("p",[t._v(t._s(t.bug.description))])]),t.isCreator&&0==t.bug.closed?a("div",{staticClass:"offset-3 col-6 p-2"},[a("i",{staticClass:"fa fa-pencil-alt mb-1",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editToggle=!t.editToggle}}},[t._v(" Click to Edit Bug Content")]),t.editToggle?a("div",[a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.editActiveBug(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bugData.title,expression:"bugData.title"}],staticClass:"form-control mx-2",attrs:{type:"text",placeholder:"New Bug Title...","aria-describedby":"helpId"},domProps:{value:t.bugData.title},on:{input:function(e){e.target.composing||t.$set(t.bugData,"title",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bugData.description,expression:"bugData.description"}],staticClass:"form-control mx-2",attrs:{type:"text",placeholder:"New Bug Text...","aria-describedby":"helpId"},domProps:{value:t.bugData.description},on:{input:function(e){e.target.composing||t.$set(t.bugData,"description",e.target.value)}}}),a("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Edit Bug")])])]):t._e()]):t._e(),t.isCreator&&0==t.bug.closed?a("div",{staticClass:"col-12 mb-2"},[a("button",{staticClass:"btn btn-danger",on:{click:t.closeBug}},[t._v("Close Bug")])]):t._e(),t.profile.email?a("div",{staticClass:"col-12 card"},[a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.createNote(e)}}},[a("div",{staticClass:"form-group m-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your Note Here...","aria-describedby":"helpId"},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}})]),t._m(0)])]):t._e(),a("div",{staticClass:"col-12 text-center"},[a("h1",{staticClass:"text-primary"},[t._v("Notes")]),a("ul",{staticClass:"list-group"},t._l(t.notes,(function(t){return a("note-component",{key:t.id,attrs:{noteProp:t}})})),1)])])])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-success m-1",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])}],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"post-component col-12 border list-group-item"},[a("h5",{staticClass:"card-title text-dark"},[a("span",{staticClass:"text-warning"},[t._v("User: "+t._s(t.noteProp.creatorEmail))])]),a("span",[t._v("Note Status: "),a("span",{staticClass:"text-danger"},[t._v(t._s(t.noteProp.flagged))])]),a("div",{staticClass:"card-body"},[a("p",[t._v(t._s(t.noteProp.content))])]),t.isCreator?a("div",[a("div",{staticClass:"offset-3 col-6 p-3"},[a("i",{staticClass:"fa fa-pencil-alt mb-1",attrs:{"aria-hidden":"true"},on:{click:function(e){t.noteToggle=!t.noteToggle}}},[t._v(" Click to Edit Note Content")]),t.noteToggle?a("div",[a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.editNote(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.noteData.content,expression:"noteData.content"}],staticClass:"form-control mx-2",attrs:{type:"text",placeholder:"Comment Text...","aria-describedby":"helpId"},domProps:{value:t.noteData.content},on:{input:function(e){e.target.composing||t.$set(t.noteData,"content",e.target.value)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.noteData.flagged,expression:"noteData.flagged"}],staticClass:"form-control mx-2",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.noteData,"flagged",e.target.multiple?a:a[0])}}},[a("option",[t._v("pending")]),a("option",[t._v("completed")]),a("option",[t._v("rejected")])]),a("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Edit Note")])])]):t._e()]),a("div",[a("button",{staticClass:"btn btn-danger",on:{click:t.deleteNote}},[t._v("Delete Note")])])]):t._e()])},H=[],I={name:"note-component",props:["noteProp"],data(){return{noteData:{},noteToggle:!1}},methods:{deleteNote(){this.$store.dispatch("deleteNote",this.noteProp.id)},editNote(){this.noteData.id=this.noteProp.id,this.$store.dispatch("editActiveNotes",this.noteData)}},computed:{profile(){return this.$store.state.profile},isCreator(){return this.profile.email==this.noteProp.creatorEmail}}},M=I,U=Object(g["a"])(M,S,H,!1,null,null,null),L=U.exports,R={name:"bug-details",data(){return{bugData:{},newNote:{},editToggle:!1}},mounted(){this.$store.dispatch("getActiveBug",this.$route.params.id),this.$store.dispatch("getActiveBugNotes",this.$route.params.id)},methods:{closeBug(){this.bugData.id=this.bug.id,this.$store.dispatch("closeBug",this.bugData.id)},editActiveBug(){this.bugData.id=this.bug.id,this.bugData.closed=this.bug.closed,this.$store.dispatch("editActiveBug",this.bugData)},createNote(){let t={content:this.newNote.content,bug:this.$route.params.id,creatorEmail:this.profile.email,flagged:"pending"};this.$store.dispatch("createNote",t)}},computed:{bugs(){return this.$store.state.bugs},bug(){return this.$store.state.activebug},notes(){return this.$store.state.activenotes},profile(){return this.$store.state.profile},isCreator(){return this.profile.email==this.bug.creatorEmail}},components:{noteComponent:L}},Y=R,Q=(a("f7ef"),Object(g["a"])(Y,O,j,!1,null,null,null)),z=Q.exports;s["a"].use(w["a"]);const J=[{path:"/",name:"Home",component:N},{path:"/bugs/:id",name:"bug-details",component:z,beforeEnter:u["b"]},{path:"/profile",name:"Profile",component:k,beforeEnter:u["b"]}],W=new w["a"]({routes:J});var q=W,G=a("2f62"),K=a("ac68"),Z=a.n(K);class F{static async sweetDelete(t="Are you sure you want to delete this?",e="Yes, delete it!",a="This item will be gone."){try{let s=await Z.a.fire({title:t,text:a,icon:"error",showCancelButton:!0,confirmButtonColor:"#ff0039",cancelButtonColor:"#3fb618",confirmButtonText:e});if(s.value)return!0}catch(s){}}static toast(t="You did a thing",e=3e3){Z.a.fire({title:t,icon:"success",timer:e,toast:!0,position:"top-right",showConfirmButton:!1})}}let V=location.host.includes("localhost")?"http://localhost:3000/":"/";const X=l.a.create({baseURL:V+"api",timeout:3e3,withCredentials:!0});s["a"].use(G["a"]);var tt=new G["a"].Store({state:{profile:{},bugs:[],activenotes:[],activebug:{}},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activebug=e},setActiveBugNotes(t,e){t.activenotes=e},removeNote(t,e){t.activenotes=t.activenotes.filter(t=>t.id!=e)}},actions:{setBearer({},t){X.defaults.headers.authorization=t},resetBearer(){X.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await X.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getBugs({commit:t}){try{let e=await X.get("bugs");t("setBugs",e.data)}catch(e){console.error(e)}},async addBug({commit:t,state:e},a){try{let s=await X.post("bugs",a);t("setBugs",[...e.bugs,s.data]),q.push({name:"bug-details",params:{id:s.data._id}})}catch(s){console.error(s)}},async getActiveBug({commit:t},e){try{let a=await X.get("bugs/"+e);t("setActiveBug",a.data)}catch(a){console.error(a)}},async editActiveBug({commit:t},e){try{let a=await X.put("bugs/"+e.id,e);t("setActiveBug",a.data)}catch(a){console.error(a)}},async closeBug({commit:t},e){try{if(await F.sweetDelete("This Bug will be closed.","Yes, close it!","Are you sure you want to close this bug?")){let a=await X.delete("bugs/"+e);t("setActiveBug",a.data)}}catch(a){console.error(a)}},async getActiveBugNotes({commit:t},e){try{let a=await X.get("bugs/"+e+"/notes");t("setActiveBugNotes",a.data)}catch(a){console.error(a)}},async createNote({commit:t,state:e},a){try{let s=await X.post("notes",a);t("setActiveBugNotes",[...e.activenotes,s.data])}catch(s){console.error(s)}},async editActiveNotes({commit:t,state:e},a){try{let s=await X.put("notes/"+a.id,a),o=e.activenotes.findIndex(t=>t.id==a.id);e.activenotes.splice(o,1,s.data),t("setActiveBugNotes",e.activenotes)}catch(s){console.error(s)}},async deleteNote({commit:t},e){try{await F.sweetDelete("This Note will be deleted.","Yes, delete it!","This note will be deleted.")&&(await X.delete("notes/"+e),t("removeNote",e))}catch(a){console.error(a)}}}});const et="forestlogin223.us.auth0.com",at="https://AuthCheckApi.com",st="t9ZTG6p58iyE5ncgtnpMQv65PT3QKsQE";s["a"].use(u["a"],{domain:et,clientId:st,audience:at,onRedirectCallback:t=>{q.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:q,store:tt,render:function(t){return t(C)}}).$mount("#app")},"57cb":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},7505:function(t,e,a){},"9c0c":function(t,e,a){},e668:function(t,e,a){"use strict";var s=a("57cb"),o=a.n(s);o.a},f7ef:function(t,e,a){"use strict";var s=a("fd60"),o=a.n(s);o.a},fd60:function(t,e,a){}});