webpackJsonp([6],{QnRz:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("cLQA");var i=function(){return e.mock({tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{show:!1},series:[{name:"业务指标",type:"gauge",radius:"100%",min:0,max:10,startAngle:270,endAngle:0,axisLine:{show:!1,lineStyle:{color:[[.2,"#f35235"],[.4,"#efc942"],[.6,"#3cd681"],[1,"#green"]],width:13}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},itemStyle:{color:"#1a1a1a"},detail:{show:!1},data:[{"value|1-10":0}]}]})},r=s("cLQA");var c=function(){return r.mock({xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{show:!0},series:[{"data|7":["@natural(2, 1000)"],type:"line",smooth:!0,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#70f8d0"},{offset:1,color:"#49bd9a"}],globalCoord:!1}},lineStyle:{color:"#70f8d0"},itemStyle:{color:"#10bd88",borderWidth:3}}]})},o=s("cLQA");var n=function(){return o.mock({"data|3":[{"icon|+1":["fa-gears","fa-universal-access","fa-lock"],"title|+1":["Technology","Accessbility","Security"],"percent|2-9":0}]})},l={name:"",data:function(){return{gauge1:{},activity:{},progress:[]}},methods:{getData:function(){this.gauge1=i(),this.activity=c(),this.progress=n().data},setIntervalData:function(){var t=this;setInterval(function(){t.getData()},700)}},mounted:function(){this.getData(),this.setIntervalData()},created:function(){}},d={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"dashBoard"}},[s("header",[t._v("Dashboard")]),t._v(" "),s("main",[s("div",{staticClass:"dashTop"},[s("div",{staticClass:"dashLeft"},[s("div",{staticClass:"dashGauge"},[s("li",{staticClass:"dashGaugeItem chartSection"},[s("h1",{staticClass:"chartTitle"},[t._v("Your Business")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("chart",{staticClass:"chart",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.gauge1}})],1)]),t._v(" "),s("li",{staticClass:"dashGaugeItem chartSection"},[s("h1",{staticClass:"chartTitle"},[t._v("Your Business")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("chart",{staticClass:"chart",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.gauge1}})],1)])]),t._v(" "),s("ul",{staticClass:"dashProgress"},t._l(t.progress,function(a,e){return s("li",{staticClass:"progressItem"},[s("i",{staticClass:"progressIcon fa",class:a.icon}),t._v(" "),s("span",{staticClass:"progressTitle"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"progress"},[s("div",{style:"width:"+10*a.percent+"%"}),t._v(" "),s("span",{staticClass:"percent"},[t._v(t._s(a.percent)+"/10")])])])}))]),t._v(" "),s("div",{staticClass:"dashRight chartSection"},[s("h1",{staticClass:"chartTitle"},[t._v("Latest Activities")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("chart",{staticClass:"chart",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.activity}})],1)])]),t._v(" "),s("div",{staticClass:"dashBottom"},t._l(4,function(a,e){return s("li",{staticClass:"block"},[t._v("\n        sadfasdf\n      ")])}))])])},staticRenderFns:[]};var h=s("vSla")(l,d,!1,function(t){s("qMP9")},"data-v-27c80c8e",null);a.default=h.exports},qMP9:function(t,a){}});
//# sourceMappingURL=6.2e9e5d50bf8bb55047be.js.map