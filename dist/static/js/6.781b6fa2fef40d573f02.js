webpackJsonp([6],{Njx3:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("cLQA");var i=function(){return e.mock({"data|6":[{"percent|1-99":0,"title|+1":["工作空间（个）","私有网络","映像（个）","路由器","容器服务","云主机（个）"]}]})},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"subBtnWrap"},[a("ul",{staticClass:"btnLst"},t._l(t.tabLst,function(s,e){return a("li",{staticClass:"btnItem",class:{active:0==e}},[t._v(t._s(s))])}))])},staticRenderFns:[]};var n=a("vSla")({name:"consoleTab",props:{tabLst:{required:!0}},data:function(){return{}},methods:{},mounted:function(){},created:function(){}},c,!1,function(t){a("VtDL")},"data-v-4183a2ec",null).exports,l=a("cLQA").mock({"data|10":[{name:"@name",date:"@date()",timeOut:"@date()","status|1":["过期","有效","无效"]}]}),r={name:"",components:{consoleTab:n},data:function(){return{matterLst:[{icon:"fa-calendar",num:10,title:"订单待办",color:"#fcc6a7"},{icon:"fa-calendar-o",num:134,title:"工单待办",color:"#ee7d90"},{icon:"fa-rmb",num:187,title:"待付款",color:"#34d3f1"},{icon:"fa-money",num:20,title:"优惠券",color:"#f25f6a"}],resLst:[],tabLst:["所有","我管理的","我参与的"],productTabLst:["所有","有效","开通","过期"],productLst:[]}},methods:{getRes:function(){this.resLst=i().data}},mounted:function(){this.getRes(),this.productLst=l.data},created:function(){}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"conOverview"}},[a("ul",{attrs:{id:"matter"}},[t._m(0),t._v(" "),t._l(t.matterLst,function(s,e){return a("li",{staticClass:"matterBlock matterItem"},[a("div",{staticClass:"icon",style:{backgroundColor:s.color}},[a("i",{staticClass:"fa matterIcon",class:s.icon})]),t._v(" "),a("div",{staticClass:"matterRight"},[a("p",{staticClass:"matterNum"},[t._v(t._s(s.num))]),t._v(" "),a("p",{staticClass:"matterTitle"},[t._v(t._s(s.title))])])])})],2),t._v(" "),a("div",{attrs:{id:"main"}},[a("div",{staticClass:"project mainItem"},[t._m(1),t._v(" "),a("console-tab",{attrs:{tabLst:t.tabLst}}),t._v(" "),a("ul",{staticClass:"projectLst"},t._l(9,function(s,e){return a("li",{staticClass:"projectItem"},[a("div",{staticClass:"prjItemLeft"}),t._v(" "),t._m(2,!0)])}))],1),t._v(" "),a("div",{staticClass:"resource mainItem"},[t._m(3),t._v(" "),a("ul",{staticClass:"rscLst"},t._l(t.resLst,function(s){return a("li",{staticClass:"rscItem"},[a("h3",{staticClass:"rscTitle"},[t._v(t._s(s.title))]),t._v(" "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progressActive",style:{width:s.percent+"%"}})])])}))])]),t._v(" "),a("div",{attrs:{id:"product"}},[a("h3",{staticClass:"proTitle"},[t._v("已购商品")]),t._v(" "),a("console-tab",{attrs:{tabLst:t.productTabLst}}),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",border:"",data:t.productLst}},[a("el-table-column",{attrs:{label:"产品名称"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("span",{staticStyle:{color:"#34d3f1"}},[t._v(t._s(s.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"生效时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"timeOut",label:"过期时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("i",{staticClass:"fa fa-edit tableIcon"}),t._v(" "),a("i",{staticClass:"fa fa-trash tableIcon"})]}}])})],1)],1)],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"userInfo matterItem"},[a("div",{staticClass:"userDetail"},[a("div",{staticClass:"userImg"}),t._v(" "),a("span",{staticClass:"userName"},[t._v("Admin")])]),t._v(" "),a("div",{staticClass:"userInfoRight"},[a("p",{staticClass:"userInfoNum"},[a("span",{staticStyle:{"font-size":"14px"}},[t._v("余额")]),t._v("  "),a("span",{staticStyle:{"font-size":"20px"}},[t._v("￥160")])]),t._v(" "),a("div",{staticClass:"userBtn"},[t._v("立即充值")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"subHead"},[s("h1",{staticClass:"subHeadTitle"},[this._v("我的项目")]),this._v(" "),s("div",{staticClass:"subHeadBtn"},[this._v("创建项目")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"prjItemRight"},[s("p",{staticClass:"prjT1"},[this._v("Cloud hosting")]),this._v(" "),s("p",{staticClass:"prjT2"},[this._v("Kavien")]),this._v(" "),s("p",{staticClass:"prjT3"},[this._v("woke data")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"subHead"},[s("h1",{staticClass:"subHeadTitle"},[this._v("资源配额使用情况")]),this._v(" "),s("div",{staticClass:"subHeadBtn"},[this._v("申请配额")])])}]};var u=a("vSla")(r,o,!1,function(t){a("YnUY")},"data-v-58e59388",null);s.default=u.exports},VtDL:function(t,s){},YnUY:function(t,s){}});
//# sourceMappingURL=6.781b6fa2fef40d573f02.js.map