"use strict";(self["webpackChunkcli"]=self["webpackChunkcli"]||[]).push([[683],{5683:function(t,e,o){o.r(e),o.d(e,{default:function(){return w}});var s=o(3396),i=o(7139);const n={class:"container"},l={key:0,class:"main__cars"},c={key:1};function a(t,e,o,a,d,r){return(0,s.wg)(),(0,s.iD)("div",n,[d.todos?((0,s.wg)(),(0,s.iD)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.todos,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"main__cars-item",key:t.id},[(0,s._)("p",null,"ID: "+(0,i.zw)(t.id),1),(0,s._)("p",null,"Title: "+(0,i.zw)(t.title),1),(0,s._)("p",null,"completed: "+(0,i.zw)(t.completed),1)])))),128))])):((0,s.wg)(),(0,s.iD)("div",c," Идет загрузка... "))])}var d={data(){return{todos:null}},created(){this.getTodos()},methods:{async getTodos(){let t=await fetch("https://jsonplaceholder.typicode.com/todos"),e=await t.json();this.todos=e}}},r=o(89);const u=(0,r.Z)(d,[["render",a]]);var w=u}}]);
//# sourceMappingURL=683.1f704eef.js.map