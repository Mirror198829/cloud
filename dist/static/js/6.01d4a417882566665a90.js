webpackJsonp([6],{"+u9k":function(t,a){},QnRz:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("cLQA");var i=function(){return e.mock({tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{show:!1},series:[{name:"业务指标",type:"gauge",radius:"100%",min:0,max:10,startAngle:270,endAngle:0,axisLine:{show:!1,lineStyle:{color:[[.2,"#f35235"],[.4,"#efc942"],[.6,"#3cd681"],[1,"#green"]],width:13}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},itemStyle:{color:"#1a1a1a"},detail:{show:!1},data:[{"value|1-10":0}]}]})},r=s("cLQA");var c=function(){return r.mock({xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{show:!0},series:[{"data|7":["@natural(2, 1000)"],type:"line",smooth:!0,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#70f8d0"},{offset:1,color:"#49bd9a"}],globalCoord:!1}},lineStyle:{color:"#70f8d0"},itemStyle:{color:"#10bd88",borderWidth:3}}]})},o=s("cLQA");var l=function(){return o.mock({"data|3":[{"icon|+1":["fa-gears","fa-universal-access","fa-lock"],"title|+1":["Technology","Accessbility","Security"],"percent|2-9":0}]})},n=s("cLQA");var h=function(){return n.mock({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告","Tv"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["周一"],show:!1}],yAxis:[{type:"value"}],"series|4":[{"name|+1":["直接访问","邮件营销","联盟广告","Tv"],type:"bar","data|4":["@natural(2, 400)"],itemStyle:{"color|+1":["#abe8d6","#63dcb9","#21c397","#2e9675"]}}]})},d=s("cLQA");var v=function(){return d.mock({tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},"series|3":[{name:["邮件营销","联盟广告","搜索引擎"],type:"line",lineStyle:{"color|+1":["#fbe18d","#21c392","#4579de"]},"data|7":["@natural(2, 400)"]}]})},u=s("cLQA");var p=function(){return u.mock({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎","百度","谷歌","必应","其他"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],"series|3":[{"name|+1":["邮件营销","联盟广告","视频广告"],type:"bar",stack:"广告",itemStyle:{"color|+1":["#21c392","#4579de","#fbe18d"]},"data|7":["@natural(2, 50)"]}]})},g=s("cLQA");var y=function(){return g.mock({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{x:"center",y:"top",data:["infor1","infor2","infor3"]},calculable:!0,series:[{name:"面积模式",type:"pie",roseType:"area","data|3":[{"value|1-10":0,"name|+1":["infor1","infor2","infor3"],itemStyle:{"color|+1":["#a2e6d1","#369a7e","#d4d5d9"]}}]}]})},f={name:"",data:function(){return{gauge1:{},activity:{},progress:[],bar:{},line:{},stack:{},pie:{}}},methods:{getData:function(){this.gauge1=i(),this.activity=c(),this.progress=l().data,this.bar=h(),this.line=v(),this.stack=p(),this.pie=y()},setIntervalData:function(){var t=this;setInterval(function(){t.getData()},700)}},mounted:function(){this.getData(),this.setIntervalData()},created:function(){}},C={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"dashBoard"}},[s("header",[t._v("Dashboard")]),t._v(" "),s("main",[s("div",{staticClass:"dashTop"},[s("div",{staticClass:"dashLeft"},[s("div",{staticClass:"dashGauge"},[s("li",{staticClass:"dashGaugeItem chartSection"},[s("h1",{staticClass:"chartTitle"},[t._v("Your Business")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("chart",{staticClass:"chart",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.gauge1}})],1)]),t._v(" "),s("li",{staticClass:"dashGaugeItem chartSection"},[s("h1",{staticClass:"chartTitle"},[t._v("Your Business")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("chart",{staticClass:"chart",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.gauge1}})],1)])]),t._v(" "),s("ul",{staticClass:"dashProgress"},t._l(t.progress,function(a,e){return s("li",{staticClass:"progressItem"},[s("i",{staticClass:"progressIcon fa",class:a.icon}),t._v(" "),s("span",{staticClass:"progressTitle"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"progress"},[s("div",{style:"width:"+10*a.percent+"%"}),t._v(" "),s("span",{staticClass:"percent"},[t._v(t._s(a.percent)+"/10")])])])}))]),t._v(" "),s("div",{staticClass:"dashRight chartSection"},[s("h1",{staticClass:"chartTitle"},[t._v("Latest Activities")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("chart",{staticClass:"chart",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.activity}})],1)])]),t._v(" "),s("div",{staticClass:"dashBottom"},[s("li",{staticClass:"block chartSection"},[s("h1",{staticClass:"chartTitle"},[t._v("Aesthetics")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("chart",{staticClass:"chart",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.bar}})],1)]),t._v(" "),s("li",{staticClass:"block chartSection"},[s("h1",{staticClass:"chartTitle"},[t._v("Navigation")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("chart",{staticClass:"chart",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.pie}})],1)]),t._v(" "),s("li",{staticClass:"block chartSection"},[s("h1",{staticClass:"chartTitle"},[t._v("Speed")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("chart",{staticClass:"chart",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.stack}})],1)]),t._v(" "),s("li",{staticClass:"block chartSection"},[s("h1",{staticClass:"chartTitle"},[t._v("Searchbility")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("chart",{staticClass:"chart",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.line}})],1)])])])])},staticRenderFns:[]};var b=s("vSla")(f,C,!1,function(t){s("+u9k")},"data-v-293dd014",null);a.default=b.exports}});
//# sourceMappingURL=6.01d4a417882566665a90.js.map