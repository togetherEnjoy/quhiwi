(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d54586a"],{5374:function(t,a,s){"use strict";var i=s("7e78"),e=s.n(i);e.a},"7e78":function(t,a,s){},cfc2:function(t,a,s){"use strict";s.r(a);var i,e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"studytour_detail"},[s("div",{staticClass:"ser_img_wrap"},[s("div",{staticClass:"card_item"},[s("div",{staticClass:"imgs"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.List_data.coverImg,expression:"List_data.coverImg"}]})])])]),s("div",{staticClass:"tour_det"},[s("div",{staticClass:"tour_det_t"},[s("div",{staticClass:"tit"},[s("span",[t._v(t._s(t.List_data.subTitle))]),t._v("\n        | "+t._s(t.List_data.title)+"\n      ")]),s("p",{staticClass:"price"},[t._v("\n        价格：\n        "),s("i",[t._v("￥"+t._s(t.List_data.price))]),s("span",[t._v(t._s(t.List_data.days)+"天")])])]),s("div",{staticClass:"tour_det_b"},[s("div",{staticClass:"left"},[s("p",[t._v("\n          行程天数:\n          "),s("span",[t._v(t._s(t.List_data.days)+"天")])]),s("p",[t._v("\n          出发城市:\n          "),s("span",[t._v(t._s(t.List_data.departureCity))])])]),s("div",{staticClass:"right"},[s("p",[s("i",[t._v("年龄")]),t._v(":\n          "),s("span",[t._v(t._s(t.List_data.ages)+"岁")])]),s("p",[t._v("\n          出行日期:\n          "),s("span",[t._v(t._s(t._UTCformat(t.List_data.startTime))+"-"+t._s(t._UTCformat(t.List_data.endTime).substr(5)))])])])])]),s("div",{ref:"wipe",staticClass:"project"},[s("van-tabs",{attrs:{"title-active-color":"#ED2530","line-height":1},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[s("van-tab",{attrs:{title:"详细行程"}},[s("div",{staticClass:"xcbox"},t._l(t.detailedDescription,function(a,i){return s("div",{key:i,staticClass:"day"},[s("p",[s("span",{staticClass:"whatday"},[t._v(t._s(a.daytitle))])]),s("p",{staticClass:"context"},[t._v("课程主题 | 澳洲初印象 全体学员于飞机起飞前三小时到机场集合，于机场集合出发，搭乘国际航班飞往布里斯班，启程澳大利亚亲子研学之旅！")])])}),0)]),s("van-tab",{attrs:{title:"费用说明"}},[s("div",{staticClass:"fybox"},[s("div",{domProps:{innerHTML:t._s(t.List_data.costDescription)}})])]),s("van-tab",{attrs:{title:"行前准备"}},[s("div",{staticClass:"fybox"},[s("div",{domProps:{innerHTML:t._s(t.List_data.preparation)}})])]),s("van-tab",{attrs:{title:"常见问题"}},[s("div",{staticClass:"fybox"},[s("div",{domProps:{innerHTML:t._s(t.List_data.question)}})])])],1)],1),s("con",{attrs:{simpleName:"海外网"}})],1)},n=[],c=s("bd86"),d=(s("bda7"),s("5e46")),r=(s("7f7f"),s("da3c"),s("0b33")),o=s("336f");s("28a5");function l(t){return t.split("T")[0]}var _={props:{},data:function(){return{active:0,List_data:{},detailedDescription:{}}},created:function(){var t=this;this.$nextTick(function(){t.getTourDetail()})},methods:{getTourDetail:function(){var t=this,a=this.$route.params.id;this.$fetch("/dhr/client/study_tour/".concat(a)).then(function(a){"0000"==a.ErrCode&&(t.List_data=a.Result,t.detailedDescription=JSON.parse(a.Result.detailedDescription)),console.log(t.List_data),console.log(t.detailedDescription)})},_UTCformat:function(t){return l(t)}},components:(i={},Object(c["a"])(i,r["a"].name,r["a"]),Object(c["a"])(i,d["a"].name,d["a"]),Object(c["a"])(i,"con",o["a"]),i)},v=_,p=(s("5374"),s("2877")),u=Object(p["a"])(v,e,n,!1,null,"df056210",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0d54586a.208b6052.js.map