(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0145c195"],{"8b98":function(t,e,n){"use strict";n("a65c")},a65c:function(t,e,n){},cde2:function(t,e,n){"use strict";n.r(e);var s,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card",staticStyle:{width:"800px","margin-left":"50px","margin-top":"20px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("系统设置")]),n("span",{staticStyle:{color:"red"}},[t._v(": 谨慎操作")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.saveSys}},[t._v("保存")])],1),n("div",{staticClass:"text item"},[t._v(" 离线多久自动启用丢失模式 /秒 0则不启用 :"),n("el-input",{staticStyle:{width:"200px","margin-left":"20px","margin-bottom":"0px"},model:{value:t.settings.noOnlineAutoLostTime,callback:function(e){t.$set(t.settings,"noOnlineAutoLostTime",e)},expression:"settings.noOnlineAutoLostTime"}})],1),n("div",{staticClass:"text item"},[t._v(" 离线丢失丢失消息 :"),n("el-input",{staticStyle:{width:"200px","margin-left":"20px","margin-bottom":"0px"},model:{value:t.settings.noOnlineAutoLostMsg,callback:function(e){t.$set(t.settings,"noOnlineAutoLostMsg",e)},expression:"settings.noOnlineAutoLostMsg"}})],1),n("div",{staticClass:"text item"},[t._v(" 离线丢失丢失描述 :"),n("el-input",{staticStyle:{width:"200px","margin-left":"20px","margin-bottom":"0px"},model:{value:t.settings.noOnlineAutoLostDesc,callback:function(e){t.$set(t.settings,"noOnlineAutoLostDesc",e)},expression:"settings.noOnlineAutoLostDesc"}})],1),n("div",{staticClass:"text item"},[t._v(" 离线丢失联系手机 :"),n("el-input",{staticStyle:{width:"200px","margin-left":"20px","margin-bottom":"0px"},model:{value:t.settings.noOnlineAutoLostPhone,callback:function(e){t.$set(t.settings,"noOnlineAutoLostPhone",e)},expression:"settings.noOnlineAutoLostPhone"}})],1)])],1)},o=[],a=n("b775");function l(){return Object(a["a"])({url:"/userSettings/getSetting",method:"post"})}function c(t){return Object(a["a"])({url:"/userSettings/saveSetting",method:"post",data:t})}var u={components:{getSettingApi:l,saveSettingApi:c},name:"User",data:function(){return{settings:{noOnlineAutoLostTime:"",noOnlineAutoLostMsg:"",noOnlineAutoLostDesc:"",noOnlineAutoLostPhone:""}}},beforeCreate:function(){},created:function(){s=this,s.getSys()},methods:{getSys:function(){l().then((function(t){s.settings=t.data}))},saveSys:function(){c(s.settings).then((function(t){s.$msg("保存成功",1)}))}}},r=u,g=(n("8b98"),n("2877")),p=Object(g["a"])(r,i,o,!1,null,"39efc77e",null);e["default"]=p.exports}}]);