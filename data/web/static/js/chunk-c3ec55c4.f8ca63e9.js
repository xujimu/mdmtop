(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3ec55c4"],{1148:function(e,t,a){"use strict";var r=a("a691"),n=a("1d80");e.exports="".repeat||function(e){var t=String(n(this)),a="",l=r(e);if(l<0||l==1/0)throw RangeError("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(a+=t);return a}},"23ba":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return i}));var r=a("b775");function n(e,t){var a="";return""!==t.groupName&&(a=a+"&groupName="+t.groupName),Object(r["a"])({url:"/group/search?page="+e.page+"&pageSize="+e.pageSize+a,method:"get"})}function l(e){return Object(r["a"])({url:"/group/addGroup",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/group/updateGroup",method:"post",data:e})}function u(){return Object(r["a"])({url:"/group/getMyGroupList",method:"get"})}function i(e){return Object(r["a"])({url:"/group/deleteGroup",method:"post",data:e})}},"408a":function(e,t,a){var r=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},aa98:function(e,t,a){"use strict";a.d(t,"m",(function(){return i})),a.d(t,"p",(function(){return c})),a.d(t,"o",(function(){return s})),a.d(t,"k",(function(){return d})),a.d(t,"v",(function(){return p})),a.d(t,"w",(function(){return b})),a.d(t,"r",(function(){return v})),a.d(t,"t",(function(){return f})),a.d(t,"u",(function(){return m})),a.d(t,"h",(function(){return g})),a.d(t,"i",(function(){return y})),a.d(t,"s",(function(){return x})),a.d(t,"f",(function(){return w})),a.d(t,"e",(function(){return S})),a.d(t,"g",(function(){return O})),a.d(t,"a",(function(){return j})),a.d(t,"l",(function(){return q})),a.d(t,"b",(function(){return M})),a.d(t,"j",(function(){return D})),a.d(t,"y",(function(){return $})),a.d(t,"d",(function(){return V})),a.d(t,"c",(function(){return P})),a.d(t,"x",(function(){return E})),a.d(t,"z",(function(){return A})),a.d(t,"q",(function(){return T})),a.d(t,"n",(function(){return F}));var r=a("c7eb"),n=a("1da1"),l=(a("d3b7"),a("b775")),o=a("376d"),u=a("2b0e");function i(e,t){var a="";return""!==t.abmStatus.value&&(a=a+"&abmStatus="+t.abmStatus.value),""!==t.controlStatus.value&&(a=a+"&controlStatus="+t.controlStatus.value),""!==t.lostMode.value&&(a=a+"&lostMode="+t.lostMode.value),""!==t.activationLock.value&&(a=a+"&activationLock="+t.activationLock.value),""!==t.serialNumber&&(a=a+"&serialNumber="+t.serialNumber),""!==t.userId&&(a=a+"&userId="+t.userId),""!==t.noOnlineTime.value&&(a=a+"&noOnlineTime="+t.noOnlineTime.value),""!==t.deviceMdm.disableErase.value&&(a=a+"&deviceMdm.disableErase="+t.deviceMdm.disableErase.value),Object(l["a"])({url:"/admin/adminSearchDevice?page="+e.page+"&pageSize="+e.pageSize+a,method:"get"})}function c(e,t){var a="";return""!==t.abmStatus.value&&(a=a+"&abmStatus="+t.abmStatus.value),""!==t.controlStatus.value&&(a=a+"&controlStatus="+t.controlStatus.value),""!==t.lostMode.value&&(a=a+"&lostMode="+t.lostMode.value),""!==t.activationLock.value&&(a=a+"&activationLock="+t.activationLock.value),""!==t.serialNumber&&(a=a+"&serialNumber="+t.serialNumber),""!==t.noOnlineTime.value&&(a=a+"&noOnlineTime="+t.noOnlineTime.value),""!==t.userName&&(a=a+"&userName="+t.userName),""!==t.userPhone&&(a=a+"&userPhone="+t.userPhone),""!==t.deviceMdm.disableErase.value&&(a=a+"&deviceMdm.disableErase="+t.deviceMdm.disableErase.value),Object(l["a"])({url:"/deviceInfo/search?page="+e.page+"&pageSize="+e.pageSize+a,method:"get"})}function s(e){return Object(l["a"])({url:"/deviceInfo/getDeviceInfo",method:"post",data:e})}function d(){return Object(l["a"])({url:"/deviceInfo/exportDevice",method:"post"})}function p(e){return Object(l["a"])({url:"/deviceInfo/updateAccessAppAuth",method:"post",data:e})}function b(e){return Object(l["a"])({url:"/deviceInfo/updateAccessAuth",method:"post",data:e})}function v(e){return Object(l["a"])({url:"/deviceInfo/lockMsgUpdate",method:"post",data:e})}function f(e){return Object(l["a"])({url:"/deviceInfo/setWp",method:"post",data:e})}function m(e,t){var a="";return""!==t.taskName&&(a=a+"&taskName="+t.taskName),""!==t.deviceId&&(a=a+"&deviceId="+t.deviceId),t.isCheckInfo?a+="&isCheckInfo=0":a+="&isCheckInfo=1",Object(l["a"])({url:"/task/search?page="+e.page+"&pageSize="+e.pageSize+a,method:"get"})}function h(){return new Promise((function(e,t){var a=u["default"].extend(o["a"]),r=new a({el:document.createElement("div")});document.body.appendChild(r.$el),r.$on("password-correct",(function(t){e(t)})),r.$on("cancel",(function(){t(new Error("用户取消了密码输入"))})),r.open()}))}function g(e){return Object(l["a"])({url:"/deviceInfo/enableLostMode",method:"post",data:e})}function y(e){return Object(l["a"])({url:"/deviceInfo/enableTimeLostMode",method:"post",data:e})}function x(e){return Object(l["a"])({url:"/deviceInfo/resetAuth",method:"post",data:e})}function w(e){return k.apply(this,arguments)}function k(){return k=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/disableLostMode",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function S(e){return I.apply(this,arguments)}function I(){return I=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/disableErase",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function O(e){return _.apply(this,arguments)}function _(){return _=Object(n["a"])(Object(r["a"])().mark((function e(t){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l["a"])({url:"/deviceInfo/enableErase",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function j(e){return L.apply(this,arguments)}function L(){return L=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/clearPasscode",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function q(e){return N.apply(this,arguments)}function N(){return N=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/getActivationLockSkipCode",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function M(e){return U.apply(this,arguments)}function U(){return U=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/controlClose",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function D(e){return C.apply(this,arguments)}function C(){return C=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/eraseDevice",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function $(e){return Object(l["a"])({url:"/deviceInfo/updateIos",method:"post",data:e})}function V(e){return Object(l["a"])({url:"/deviceInfo/deviceActivateLockOpen",method:"post",data:e})}function P(e){return z.apply(this,arguments)}function z(){return z=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/deviceActivateLockClose",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function E(e){return Object(l["a"])({url:"/deviceInfo/updateDevice",method:"post",data:e})}function A(e){return Object(l["a"])({url:"/deviceInfo/updateDeviceInfo",method:"post",data:e})}function T(e){return Object(l["a"])({url:"/deviceInfo/getLocation?deviceId="+e,method:"get"})}function F(e){return Object(l["a"])({url:"/deviceInfo/getHomeInfo?exTime="+e,method:"get"})}},b680:function(e,t,a){"use strict";var r=a("23e7"),n=a("a691"),l=a("408a"),o=a("1148"),u=a("d039"),i=1..toFixed,c=Math.floor,s=function(e,t,a){return 0===t?a:t%2===1?s(e,t-1,a*e):s(e*e,t/2,a)},d=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},p=i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){i.call({})}));r({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,a,r,u,i=l(this),p=n(e),b=[0,0,0,0,0,0],v="",f="0",m=function(e,t){var a=-1,r=t;while(++a<6)r+=e*b[a],b[a]=r%1e7,r=c(r/1e7)},h=function(e){var t=6,a=0;while(--t>=0)a+=b[t],b[t]=c(a/e),a=a%e*1e7},g=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==b[e]){var a=String(b[e]);t=""===t?a:t+o.call("0",7-a.length)+a}return t};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return String(i);if(i<0&&(v="-",i=-i),i>1e-21)if(t=d(i*s(2,69,1))-69,a=t<0?i*s(2,-t,1):i/s(2,t,1),a*=4503599627370496,t=52-t,t>0){m(0,a),r=p;while(r>=7)m(1e7,0),r-=7;m(s(10,r,1),0),r=t-1;while(r>=23)h(1<<23),r-=23;h(1<<r),m(1,1),h(2),f=g()}else m(0,a),m(1<<-t,0),f=g()+o.call("0",p);return p>0?(u=f.length,f=v+(u<=p?"0."+o.call("0",p-u)+f:f.slice(0,u-p)+"."+f.slice(u-p))):f=v+f,f}})},cfe7:function(e,t,a){"use strict";a.r(t);var r,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticStyle:{"max-width":"95%","margin-top":"20px","margin-left":"20px"}},[a("div",{staticStyle:{display:"inline-block"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("是否丢失")]),a("el-select",{attrs:{clearable:"",placeholder:"是否丢失"},model:{value:e.query.lostMode.value,callback:function(t){e.$set(e.query.lostMode,"value",t)},expression:"query.lostMode.value"}},e._l(e.query.lostMode.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("监管状态")]),a("el-select",{attrs:{clearable:"",placeholder:"监管状态"},model:{value:e.query.controlStatus.value,callback:function(t){e.$set(e.query.controlStatus,"value",t)},expression:"query.controlStatus.value"}},e._l(e.query.controlStatus.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("abm状态")]),a("el-select",{attrs:{clearable:"",placeholder:"abm状态"},model:{value:e.query.abmStatus.value,callback:function(t){e.$set(e.query.abmStatus,"value",t)},expression:"query.abmStatus.value"}},e._l(e.query.abmStatus.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("激活锁")]),a("el-select",{attrs:{clearable:"",placeholder:"激活锁"},model:{value:e.query.activationLock.value,callback:function(t){e.$set(e.query.activationLock,"value",t)},expression:"query.activationLock.value"}},e._l(e.query.activationLock.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("退出远程管理限制")]),a("el-select",{attrs:{clearable:"",placeholder:"退出远程管理限制"},model:{value:e.query.deviceMdm.disableErase.value,callback:function(t){e.$set(e.query.deviceMdm.disableErase,"value",t)},expression:"query.deviceMdm.disableErase.value"}},e._l(e.query.deviceMdm.disableErase.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("p"),a("div",{staticStyle:{display:"inline-block","margin-left":"0px","margin-top":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold","margin-left":"0px"}},[e._v("序列号")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{clearable:"",placeholder:""},model:{value:e.query.serialNumber,callback:function(t){e.$set(e.query,"serialNumber",t)},expression:"query.serialNumber"}})],1),a("div",{staticStyle:{display:"inline-block","margin-left":"0px","margin-top":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold","margin-left":"0px"}},[e._v("用户名")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{clearable:"",placeholder:""},model:{value:e.query.userName,callback:function(t){e.$set(e.query,"userName",t)},expression:"query.userName"}})],1),a("div",{staticStyle:{display:"inline-block","margin-left":"0px","margin-top":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold","margin-left":"0px"}},[e._v("手机号")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{clearable:"",placeholder:""},model:{value:e.query.userPhone,callback:function(t){e.$set(e.query,"userPhone",t)},expression:"query.userPhone"}})],1),a("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("离线时间")]),a("el-select",{attrs:{clearable:"",placeholder:"离线时间"},model:{value:e.query.noOnlineTime.value,callback:function(t){e.$set(e.query.noOnlineTime,"value",t)},expression:"query.noOnlineTime.value"}},e._l(e.query.noOnlineTime.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchDevice}},[e._v("搜索")]),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-export"},on:{click:e.exportDevice}},[e._v("导出报表")]),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-export"},on:{click:e.reStore}},[e._v("重置")])],1)]),a("el-card",{staticStyle:{"max-width":"95%","margin-top":"10px","margin-left":"20px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{"empty-text":"暂无数据",stripe:"",border:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"},data:e.page.data}},[a("el-table-column",{attrs:{prop:"serialNumber",label:"序列号",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{attrs:{type:"primary"},on:{click:function(a){return e.getDeviceInfo(t.row.deviceId)}}},[e._v(e._s(t.row.serialNumber))])]}}])}),a("el-table-column",{attrs:{prop:"description",label:"设备型号",width:"180"}}),a("el-table-column",{attrs:{prop:"abmStatus",label:"abm状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.abmStatus?a("el-tag",{attrs:{type:"danger"}},[e._v("未注册")]):a("el-tag",{attrs:{type:"success"}},[e._v("已注册")])]}}])}),a("el-table-column",{attrs:{prop:"activationLock",label:"激活锁",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.activationLock?a("el-tag",{attrs:{type:"danger"}},[e._v("已关闭")]):a("el-tag",{attrs:{type:"success"}},[e._v("已开启")])]}}])}),a("el-table-column",{attrs:{prop:"lostMode",label:"丢失模式",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.lostMode?a("el-tag",{attrs:{type:"danger"}},[e._v("已关闭")]):e._e(),1===t.row.lostMode?a("el-tag",{attrs:{type:"success"}},[e._v("已开启")]):e._e(),2===t.row.lostMode?a("el-tag",{attrs:{type:"danger"}},[e._v("待丢失")]):e._e(),3===t.row.lostMode?a("el-tag",{attrs:{type:"danger"}},[e._v("待解除")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"controlStatus",label:"监管状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.controlStatus?a("el-tag",{attrs:{type:"danger"}},[e._v("已脱管")]):a("el-tag",{attrs:{type:"success"}},[e._v("监管中")])]}}])}),a("el-table-column",{attrs:{prop:"deviceLastCallDateFormat",label:"最后通讯时间",width:"180"}}),a("el-table-column",{attrs:{prop:"os",label:"系统版本",width:"180"}}),a("el-table-column",{attrs:{prop:"userName",label:"用户名",width:"180"}}),a("el-table-column",{attrs:{prop:"userPhone",label:"手机号",width:"180"}}),a("el-table-column",{attrs:{prop:"groupName",label:"分组",width:"180"}}),a("el-table-column",{attrs:{prop:"createTime",label:"添加时间",width:"180"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.updateUserInfo(!0,t.row)}}},[e._v("修改设备信息")])]}}])})],1),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"empty-text":"暂无数据",background:"","current-page":e.page.page,"page-sizes":[5,10,20,50],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1),a("el-dialog",{attrs:{title:"修改设备信息",visible:e.updateUserInfoVar.dig,width:"30%","before-close":function(){e.updateUserInfoVar.dig=!1}},on:{"update:visible":function(t){return e.$set(e.updateUserInfoVar,"dig",t)}}},[a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("用户姓名")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"用户姓名"},model:{value:e.updateUserInfoVar.userName,callback:function(t){e.$set(e.updateUserInfoVar,"userName",t)},expression:"updateUserInfoVar.userName"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("手机号码")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"手机号码"},model:{value:e.updateUserInfoVar.userPhone,callback:function(t){e.$set(e.updateUserInfoVar,"userPhone",t)},expression:"updateUserInfoVar.userPhone"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("备注信息")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"备注"},model:{value:e.updateUserInfoVar.remark,callback:function(t){e.$set(e.updateUserInfoVar,"remark",t)},expression:"updateUserInfoVar.remark"}})],1),a("div",[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("设备分组")]),a("el-select",{attrs:{clearable:"",placeholder:"分组"},model:{value:e.groupList.value,callback:function(t){e.$set(e.groupList,"value",t)},expression:"groupList.value"}},e._l(e.groupList.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("p"),a("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:function(t){return e.updateUserInfo(!1,null)}}},[e._v("确认修改")])],1)],1)},l=[],o=(a("b680"),a("ac1f"),a("5319"),a("aa98")),u=a("23ba"),i={computed:{},components:{getList:o["p"],updateUserInfoApi:o["z"],getMyGroupAllApi:u["c"],exportDeviceApi:o["k"]},created:function(){r=this,console.log("创建");var e=this.$store.state.user.deviceInfoData;this.$store.state.user.deviceInfoDataIsCache?(console.log("数据不为空不缓存"),r.page=e.page,r.updateUserInfoVar=e.updateUserInfoVar,r.groupList=e.groupList,r.query=e.query):(console.log("数据为空不缓存"),r.getDeviceList(),r.getMyGroupAll())},methods:{calculateTimeDifference:function(e){console.log(123);var t=new Date(e.replace(/-/g,"/")),a=new Date,r=a-t,n=(r/36e5).toFixed(2);return n},reStore:function(){r.query={userPhone:"",userName:"",abmStatus:{tab:[{value:0,label:"未注册"},{value:1,label:"已注册"}],value:""},controlStatus:{tab:[{value:0,label:"已脱管"},{value:1,label:"监管中"}],value:""},lostMode:{tab:[{value:0,label:"未开启"},{value:1,label:"已开启"}],value:""},activationLock:{tab:[{value:0,label:"已关闭"},{value:1,label:"已开启"}],value:""},serialNumber:"",noOnlineTime:{tab:[{value:60,label:"1小时"},{value:300,label:"5小时"},{value:720,label:"12小时"},{value:1440,label:"1天"},{value:4320,label:"3天"},{value:10080,label:"一周"},{value:43200,label:"一个月"}],value:""},deviceMdm:{disableErase:{tab:[{value:0,label:"已关闭"},{value:1,label:"已开启"}],value:""}}}},handleSizeChange:function(e){console.log("每页 ".concat(e," 条")),r.page.pageSize=e,r.page.page=1,r.getDeviceList()},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),r.page.page=e,r.getDeviceList()},getDeviceList:function(){Object(o["p"])(r.page,r.query).then((function(e){r.page=e.data}))},getMyGroupAll:function(){Object(u["c"])().then((function(e){var t=e.data;r.groupList.tab=[];for(var a=0;a<t.length;a++)console.log(t[a]),r.groupList.tab.push({value:t[a].groupId,label:t[a].groupName})}))},searchDevice:function(){r.page.page=1,Object(o["p"])(r.page,r.query).then((function(e){r.page=e.data}))},exportDevice:function(){Object(o["k"])().then((function(e){window.location.href=e.data}))},getDeviceInfo:function(e){this.$store.state.user.deviceInfoData.page=r.page,this.$store.state.user.deviceInfoData.updateUserInfoVar=r.updateUserInfoVar,this.$store.state.user.deviceInfoData.groupList=r.groupList,this.$store.state.user.deviceInfoData.query=r.query,this.$store.state.user.deviceInfoDataIsCache=!0,this.$router.push("/device/list/info/index?deviceId=".concat(e))},updateUserInfo:function(e,t){e?(console.log("出"),r.updateUserInfoVar.dig=!0,r.updateUserInfoVar.deviceId=t.deviceId,r.updateUserInfoVar.userName=t.userName,r.updateUserInfoVar.userPhone=t.userPhone,r.updateUserInfoVar.remark=t.remark,r.groupList.value=t.groupId,""==t.groupName&&(r.groupList.value="")):(r.updateUserInfoVar.groupId=r.groupList.value,Object(o["z"])(r.updateUserInfoVar).then((function(e){r.updateUserInfoVar.dig=!1,r.getDeviceList()})))}},data:function(){return{page:{pages:0,page:1,pageSize:5,total:0,data:[{deviceId:"b0c8af1013a14e168f5af60e559b85b6",udid:"00008020-000A59891A81002E",mdmStatus:"TokenUpdate"}]},updateUserInfoVar:{dig:!1,deviceId:"",userName:"",userPhone:"",remark:"",groupId:""},groupList:{tab:[{value:0,label:"未开启"}],value:""},query:{userPhone:"",userName:"",abmStatus:{tab:[{value:0,label:"未注册"},{value:1,label:"已注册"}],value:""},controlStatus:{tab:[{value:0,label:"已脱管"},{value:1,label:"监管中"}],value:""},lostMode:{tab:[{value:0,label:"未开启"},{value:1,label:"已开启"}],value:""},activationLock:{tab:[{value:0,label:"已关闭"},{value:1,label:"已开启"}],value:""},serialNumber:"",noOnlineTime:{tab:[{value:60,label:"1小时"},{value:300,label:"5小时"},{value:720,label:"12小时"},{value:1440,label:"1天"},{value:4320,label:"3天"},{value:10080,label:"一周"},{value:43200,label:"一个月"}],value:""},deviceMdm:{disableErase:{tab:[{value:0,label:"已关闭"},{value:1,label:"已开启"}],value:""}}}}}},c=i,s=a("2877"),d=Object(s["a"])(c,n,l,!1,null,"79b66bd8",null);t["default"]=d.exports}}]);