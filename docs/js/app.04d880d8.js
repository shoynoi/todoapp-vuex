(function(t){function e(e){for(var o,d,i=e[0],r=e[1],c=e[2],l=0,f=[];l<i.length;l++)d=i[l],Object.prototype.hasOwnProperty.call(s,d)&&s[d]&&f.push(s[d][0]),s[d]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(o=!1)}o&&(a.splice(e--,1),t=d(d.s=n[0]))}return t}var o={},s={app:0},a=[];function d(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=t,d.c=o,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)d.d(n,o,function(e){return t[e]}.bind(null,o));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),s=n.n(o);s.a},4460:function(t,e,n){},4678:function(t,e,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id="4678"},"48e8":function(t,e,n){},4922:function(t,e,n){"use strict";var o=n("8c8f"),s=n.n(o);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Todoリスト")]),n("TodoList"),n("TodoInput")],1)},a=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("div",{staticClass:"search"},[n("TodoFilter",{attrs:{options:t.options,name:"filters"},model:{value:t.current,callback:function(e){t.current=t._n(e)},expression:"current"}},[t._v("\n      "+t._s(t.computedTodos.length)+"件を表示中\n    ")]),n("TodoSort",{on:{sort:t.sortTodos}})],1),n("table",[t._m(0),n("tbody",t._l(t.computedTodos,(function(e){return n("TodoItem",{key:e.id,attrs:{todo:e}},[t._v(t._s(t.labels[e.status]))])})),1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"id"},[t._v("ID")]),n("th",{staticClass:"todo"},[t._v("TODO")]),n("th",{staticClass:"deadline"},[t._v("期日")]),n("th",{staticClass:"status"},[t._v("状態")]),n("th",{staticClass:"button"},[t._v("-")])])])}],r=n("bd86"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{class:{done:t.todo.status}},[n("th",[t._v(t._s(t.todo.id))]),n("td",{staticClass:"td-content",class:{editingContent:t.todo===t.editedContent}},[n("div",{staticClass:"view"},[n("label",{on:{click:t.editTodo}},[t._v(t._s(t.todo.content))])]),n("input",{directives:[{name:"todo-focus",rawName:"v-todo-focus",value:t.todo===t.editedContent,expression:"todo === editedContent"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.todo.content},on:{blur:t.doneEditContent,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEditContent(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEditContent(e)}}})]),n("td",{staticClass:"deadline",class:{editingDeadline:t.todo===t.editedDeadline}},[n("div",{staticClass:"view"},[n("label",{on:{click:t.editDeadline}},[t._v(t._s(t._f("formatDeadline")(t.todo.deadline)))])]),n("input",{directives:[{name:"todo-focus",rawName:"v-todo-focus",value:t.todo===t.editedDeadline,expression:"todo === editedDeadline"}],staticClass:"edit",attrs:{type:"date",min:t.today()},domProps:{value:t.todo.deadline},on:{blur:t.doneEditDeadline,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEditDeadline(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEditDeadline(e)}}})]),n("td",{staticClass:"status"},[n("button",{on:{click:function(e){return t.changeStatus(t.todo)}}},[t._t("default")],2)]),n("td",{staticClass:"button"},[n("button",{on:{click:function(e){return t.removeTodo(t.todo)}}},[t._v("削除")])])])},u=[],l=(n("8e6e"),n("ac6a"),n("456d"),n("2f62")),f=n("c1df"),b=n.n(f),j={methods:{today:function(){return b()().format("YYYY-MM-DD")}},filters:{formatDeadline:function(t){var e=b()(t);return""===t?"なし":e.year()===b()().year()?e.format("M月D日"):e.format("YYYY年M月D日")}}};function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={name:"TodoItem",props:{todo:Object},data:function(){return{editedContent:"",editedDeadline:""}},methods:m({},Object(l["b"])(["changeStatus","removeTodo"]),{editTodo:function(){1!==this.todo.status&&(this.beforeEditCache=this.todo.content,this.editedContent=this.todo)},editDeadline:function(){1!==this.todo.status&&(this.beforeEditCache=this.todo.deadline,this.editedDeadline=this.todo)},doneEditContent:function(t){if(("Enter"===t.key||"blur"===t.type)&&this.editedContent){this.editedContent=null;var e=t.target.value.trim();this.$store.dispatch("editContent",{todo:this.todo,content:e}),e||this.cancelEditContent()}},cancelEditContent:function(){this.editedContent=null,this.todo.content=this.beforeEditCache},doneEditDeadline:function(t){if(("Enter"===t.key||"blur"===t.type)&&this.editedDeadline){this.editedDeadline=null;var e=t.target.value;this.$store.dispatch("editDeadline",{todo:this.todo,deadline:e})}},cancelEditDeadline:function(){this.editedDeadline=null,this.todo.deadline=this.beforeEditCache}}),directives:{"todo-focus":function(t,e){e.value&&t.focus()}},mixins:[j]},h=v,y=(n("4922"),n("2877")),g=Object(y["a"])(h,c,u,!1,null,"766ada84",null),k=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"condition"},[t._l(t.options,(function(e){return n("label",{key:e.id},[n("input",{attrs:{type:"radio",name:t.name},domProps:{value:e.value,checked:t.value===e.value},on:{input:t.updateValue}}),n("span",[t._v(t._s(e.label))])])})),t._t("default")],2)},O=[],T=(n("c5f6"),{name:"TodoFilter",props:{options:Array,name:String,value:Number},methods:{updateValue:function(t){this.$emit("input",t.target.value)}}}),C=T,w=(n("b50c"),Object(y["a"])(C,_,O,!1,null,"6a9e3a1f",null)),D=w.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sort"},[n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.sortOrder,expression:"sortOrder",modifiers:{number:!0}}],attrs:{id:"sort"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var n="_value"in e?e._value:e.value;return t._n(n)}));t.sortOrder=e.target.multiple?n:n[0]},function(e){return t.$emit("sort",t.sortOrder)}]}},[n("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v("並び替え")]),t._l(t.sortOptions,(function(e){return n("option",{key:e.id,domProps:{value:e.value}},[t._v("\n      "+t._s(e.label)+"\n    ")])}))],2)])},x=[],z={name:"TodoSort",data:function(){return{sortOrder:0,sortOptions:[{id:1,value:1,label:"標準"},{id:2,value:2,label:"期限"}]}}},P=z,S=(n("c81b"),Object(y["a"])(P,E,x,!1,null,"f2d3a74a",null)),$=S.exports,I={name:"TodoList",data:function(){return{options:[{id:1,value:-1,label:"すべて"},{id:2,value:0,label:"作業中"},{id:3,value:1,label:"完了"}],current:-1}},methods:{sortTodos:function(t){this.$store.dispatch("sortTodos",t)}},computed:{computedTodos:function(){return this.$store.state.todos.filter((function(t){return this.current<0||this.current===t.status}),this)},labels:function(){return this.options.reduce((function(t,e){return Object.assign(t,Object(r["a"])({},e.value,e.label))}),{})}},components:{TodoItem:k,TodoFilter:D,TodoSort:$}},N=I,M=(n("c53b"),Object(y["a"])(N,d,i,!1,null,"212236ca",null)),Y=M.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("新規Todo")]),n("form",{staticClass:"add-form",on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"form-content",attrs:{type:"text",placeholder:"タスクを入力"},domProps:{value:t.newTodo},on:{input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.deadline,expression:"deadline"}],staticClass:"form-deadline",attrs:{type:"date",min:t.today()},domProps:{value:t.deadline},on:{input:function(e){e.target.composing||(t.deadline=e.target.value)}}}),n("button",{attrs:{type:"submit",disabled:t.isButtonDisabled()}},[t._v("追加")])])])},J=[],L={name:"TodoInput",data:function(){return{newTodo:"",deadline:""}},methods:{isButtonDisabled:function(){return!this.newTodo.trim().length},addTodo:function(){var t=this.newTodo&&this.newTodo.trim();t&&(this.$store.dispatch("addTodo",{content:t,deadline:this.deadline}),this.newTodo="")}},mixins:[j]},q=L,A=(n("cd61"),n("7065"),Object(y["a"])(q,F,J,!1,null,"0e07d490",null)),B=A.exports,G={name:"app",components:{TodoList:Y,TodoInput:B}},U=G,V=(n("034f"),Object(y["a"])(U,s,a,!1,null,null,null)),H=V.exports;n("55dd");o["a"].use(l["a"]);var K="todos-vuejs",Q=function(t){t.subscribe((function(t,e){var n=e.todos;localStorage.setItem(K,JSON.stringify(n))}))},R=new l["a"].Store({strict:!0,state:{todos:JSON.parse(localStorage.getItem(K)||"[]")},mutations:{addTodo:function(t,e){t.todos.push(e)},removeTodo:function(t,e){var n=t.todos.indexOf(e);t.todos.splice(n,1)},editTodo:function(t,e){var n=e.todo,o=e.content,s=void 0===o?n.content:o,a=e.deadline,d=void 0===a?n.deadline:a,i=e.status,r=void 0===i?n.status:i;n.content=s,n.deadline=d,n.status=r},sortTodos:function(t,e){return 1===e?t.todos.sort((function(t,e){return t.id-e.id})):2===e?t.todos.sort((function(t,e){return""===t.deadline?1:""===e.deadline?-1:t.deadline===e.deadline?0:b()(t.deadline).diff(b()(e.deadline))})):void 0}},actions:{addTodo:function(t,e){var n=t.commit,o=t.getters,s=e.content,a=e.deadline;n("addTodo",{id:o.maxId+1,content:s,deadline:a,status:0})},removeTodo:function(t,e){var n=t.commit;n("removeTodo",e)},editContent:function(t,e){var n=t.commit,o=e.todo,s=e.content;n("editTodo",{todo:o,content:s})},editDeadline:function(t,e){var n=t.commit,o=e.todo,s=e.deadline;n("editTodo",{todo:o,deadline:s})},changeStatus:function(t,e){var n=t.commit,o=e.status?0:1;n("editTodo",{todo:e,status:o})},sortTodos:function(t,e){var n=t.commit;n("sortTodos",e)}},getters:{maxId:function(t){return t.todos?t.todos.reduce((function(t,e){return t.id>e.id?t.id:e.id}),0):0}},plugins:[Q]});o["a"].config.productionTip=!1,new o["a"]({store:R,render:function(t){return t(H)}}).$mount("#app")},"64a9":function(t,e,n){},"6f8b":function(t,e,n){},7065:function(t,e,n){"use strict";var o=n("4460"),s=n.n(o);s.a},"8c8f":function(t,e,n){},"99fa":function(t,e,n){},a16a:function(t,e,n){},b50c:function(t,e,n){"use strict";var o=n("6f8b"),s=n.n(o);s.a},c53b:function(t,e,n){"use strict";var o=n("48e8"),s=n.n(o);s.a},c81b:function(t,e,n){"use strict";var o=n("a16a"),s=n.n(o);s.a},cd61:function(t,e,n){"use strict";var o=n("99fa"),s=n.n(o);s.a}});
//# sourceMappingURL=app.04d880d8.js.map