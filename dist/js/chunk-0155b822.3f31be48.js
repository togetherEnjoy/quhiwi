(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0155b822"],{3284:function(t,e,a){"use strict";var s=a("a0a0"),i=a.n(s);i.a},a0a0:function(t,e,a){},c33d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"immig_more"},[a("supplier",{attrs:{item:t.item,athor:t.athor,two:t.two,id:t.id,url:t.url,params1:"countryNum",params2:"immigrationType"}}),a("div",[a("con",{ref:"con",attrs:{simpleName:t.simpleName,head_img:t.head_img,hot:t.hot,typeOf:2,id:t.id,showFoot:!1,showCity:t.showCity,sourceDescription:t.sourceDescription}})],1)],1)},i=[],n=a("f8af"),r=a("6430"),o={data:function(){return{item:["国家","移民项目"],athor:[],two:[{name:"技术移民",id:1},{name:"投资移民",id:2}],simpleName:"",head_img:"",hot:"",id:this.$route.query.id,showCity:this.$route.query.showCity,sourceDescription:this.$route.query.sourceDescription,url:"/dhr/client/immigrant/support"}},methods:{getMenu:function(){var t=this;this.$fetch("/dhr/client/migrate/menu").then(function(e){"0000"==e.ErrCode&&(t.athor=e.Result.country)})},showToast:function(){var t=this.$refs.con;t.eject()}},created:function(){this.getMenu()},components:{supplier:n["a"],con:r["a"]}},c=o,l=a("2877"),u=Object(l["a"])(c,s,i,!1,null,"25d677b2",null);e["default"]=u.exports},f8af:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"supplier_box"},[a("smenu",{attrs:{item:t.item,showCity:!1,athor:t.athor,two:t.two,params1:t.params1,params2:t.params2},on:{get_result:t.get_result}}),Object.keys(t.result_data).length>0?a("div",{staticClass:"sx_result"},[a("h3",[t._v("筛选结果")]),a("div",{staticClass:"condition"},t._l(t.result_data,function(e,s){return""!=e.html?a("div",{key:s,staticClass:"sel"},[""!=e.html?a("p",{attrs:{typed:e.type}},[a("span",[t._v(t._s(e.html))]),a("i",[a("span",{on:{click:function(e){return e.target!==e.currentTarget?null:t.empty(e)}}})])]):t._e()]):t._e()}),0)]):t._e(),Object.keys(t.result_data).length>0?a("div",{staticClass:"thinklike",on:{click:t.emptyall}},[a("span"),t._v("\n    清空所有条件\n  ")]):t._e(),a("div",{staticClass:"supplier"},[Object.keys(t.result_data).length>0?a("h3",{staticClass:"like"},[t._v("猜您喜欢")]):t._e(),a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",offset:10},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.allListData,function(e,s){return a("div",{key:s,staticClass:"s_item"},[a("div",{staticClass:"heads_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.headPortrait,expression:"item.headPortrait"}]})]),a("div",{staticClass:"text"},[a("h3",[t._v(t._s(e.companyName))]),a("p",[t._v("咨询量："+t._s(e.actualNumber))])]),a("div",{staticClass:"func"},[a("span",{on:{click:function(a){t.zixun(),t.clickRate(e.id)}}},[a("i",{staticClass:"email"})]),a("span",{staticClass:"pb",on:{click:function(a){return t.clickRate(e.id)}}},[a("a",{staticClass:"phone",attrs:{href:"tel:"+e.phone}})])])])}),0)],1)],1)},i=[],n=a("92d9"),r=a("2708"),o={mixins:[r["c"],r["a"]],props:{item:{type:Array},athor:{type:Array},two:{type:Array},myPhone:{},id:{},url:{},params1:{},params2:{}},data:function(){return{merchant_data:[]}},methods:{onLoad:function(){this.getAllList(this.result_data)},zixun:function(){this.$parent.showToast()}},components:{smenu:n["a"]}},c=o,l=(a("3284"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,"76270f05",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-0155b822.3f31be48.js.map