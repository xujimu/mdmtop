(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-342e2038"],{1:function(e,t){},2:function(e,t){},"23ba":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return u}));var r=a("b775");function n(e,t){var a="";return""!==t.groupName&&(a=a+"&groupName="+t.groupName),Object(r["a"])({url:"/group/search?page="+e.page+"&pageSize="+e.pageSize+a,method:"get"})}function l(e){return Object(r["a"])({url:"/group/addGroup",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/group/updateGroup",method:"post",data:e})}function i(){return Object(r["a"])({url:"/group/getMyGroupList",method:"get"})}function u(e){return Object(r["a"])({url:"/group/deleteGroup",method:"post",data:e})}},3:function(e,t){},4752:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"h",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"g",(function(){return d})),a.d(t,"i",(function(){return p}));var r=a("b775");function n(e,t){var a="";return""!==t.userId&&(a=a+"&userId="+t.userId),""!==t.email&&(a=a+"&email="+t.email),""!==t.account&&(a=a+"&account="+t.account),""!==t.userName&&(a=a+"&userName="+t.userName),""!==t.userPhone&&(a=a+"&userPhone="+t.userPhone),""!==t.userType&&(a=a+"&userType="+t.userType),Object(r["a"])({url:"/user/searchStaff?page="+e.page+"&pageSize="+e.pageSize+a,method:"get"})}function l(e){return Object(r["a"])({url:"/admin/addUserAmount",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/user/addStaff",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/user/updateStaff",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/user/assignStaffAmount",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/abmP7m/delete",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/user/allotAmount",method:"post",data:e})}function d(e,t){var a="";return""!==t.account&&(a=a+"&account="+t.account),Object(r["a"])({url:"/user/searchUserAddUser?page="+e.page+"&pageSize="+e.pageSize+a,method:"get"})}function p(e){return Object(r["a"])({url:"/user/userAddUser",method:"post",data:e})}},aa98:function(e,t,a){"use strict";a.d(t,"o",(function(){return u})),a.d(t,"r",(function(){return s})),a.d(t,"q",(function(){return c})),a.d(t,"m",(function(){return d})),a.d(t,"y",(function(){return p})),a.d(t,"z",(function(){return f})),a.d(t,"t",(function(){return m})),a.d(t,"w",(function(){return b})),a.d(t,"x",(function(){return v})),a.d(t,"j",(function(){return h})),a.d(t,"k",(function(){return y})),a.d(t,"v",(function(){return x})),a.d(t,"h",(function(){return S})),a.d(t,"a",(function(){return D})),a.d(t,"u",(function(){return k})),a.d(t,"g",(function(){return _})),a.d(t,"i",(function(){return j})),a.d(t,"c",(function(){return U})),a.d(t,"n",(function(){return $})),a.d(t,"d",(function(){return L})),a.d(t,"l",(function(){return C})),a.d(t,"B",(function(){return M})),a.d(t,"f",(function(){return T})),a.d(t,"e",(function(){return E})),a.d(t,"A",(function(){return F})),a.d(t,"C",(function(){return J})),a.d(t,"b",(function(){return Q})),a.d(t,"s",(function(){return B})),a.d(t,"p",(function(){return H}));var r=a("c7eb"),n=a("1da1"),l=(a("d3b7"),a("b775")),o=a("376d"),i=a("2b0e");function u(e,t){var a="";return""!==t.abmStatus.value&&(a=a+"&abmStatus="+t.abmStatus.value),""!==t.controlStatus.value&&(a=a+"&controlStatus="+t.controlStatus.value),""!==t.lostMode.value&&(a=a+"&lostMode="+t.lostMode.value),""!==t.activationLock.value&&(a=a+"&activationLock="+t.activationLock.value),""!==t.serialNumber&&(a=a+"&serialNumber="+t.serialNumber),""!==t.userId&&(a=a+"&userId="+t.userId),""!==t.noOnlineTime.value&&(a=a+"&noOnlineTime="+t.noOnlineTime.value),""!==t.deviceMdm.disableErase.value&&(a=a+"&deviceMdm.disableErase="+t.deviceMdm.disableErase.value),Object(l["a"])({url:"/admin/adminSearchDevice?page="+e.page+"&pageSize="+e.pageSize+a,method:"get"})}function s(e,t){var a="";return""!==t.abmStatus.value&&(a=a+"&abmStatus="+t.abmStatus.value),""!==t.controlStatus.value&&(a=a+"&controlStatus="+t.controlStatus.value),""!==t.lostMode.value&&(a=a+"&lostMode="+t.lostMode.value),""!==t.activationLock.value&&(a=a+"&activationLock="+t.activationLock.value),""!==t.serialNumber&&(a=a+"&serialNumber="+t.serialNumber),""!==t.noOnlineTime.value&&(a=a+"&noOnlineTime="+t.noOnlineTime.value),""!==t.userName&&(a=a+"&userName="+t.userName),""!==t.userPhone&&(a=a+"&userPhone="+t.userPhone),""!==t.deviceMdm.disableErase.value&&(a=a+"&deviceMdm.disableErase="+t.deviceMdm.disableErase.value),Object(l["a"])({url:"/deviceInfo/search?page="+e.page+"&pageSize="+e.pageSize+a,method:"get"})}function c(e){return Object(l["a"])({url:"/deviceInfo/getDeviceInfo",method:"post",data:e})}function d(){return Object(l["a"])({url:"/deviceInfo/exportDevice",method:"post"})}function p(e){return Object(l["a"])({url:"/deviceInfo/updateAccessAppAuth",method:"post",data:e})}function f(e){return Object(l["a"])({url:"/deviceInfo/updateAccessAuth",method:"post",data:e})}function m(e){return Object(l["a"])({url:"/deviceInfo/lockMsgUpdate",method:"post",data:e})}function b(e){return Object(l["a"])({url:"/deviceInfo/setWp",method:"post",data:e})}function v(e,t){var a="";return""!==t.taskName&&(a=a+"&taskName="+t.taskName),""!==t.deviceId&&(a=a+"&deviceId="+t.deviceId),t.isCheckInfo?a+="&isCheckInfo=0":a+="&isCheckInfo=1",Object(l["a"])({url:"/task/search?page="+e.page+"&pageSize="+e.pageSize+a,method:"get"})}function g(){return new Promise((function(e,t){var a=i["default"].extend(o["a"]),r=new a({el:document.createElement("div")});document.body.appendChild(r.$el),r.$on("password-correct",(function(t){e(t)})),r.$on("cancel",(function(){t(new Error("用户取消了密码输入"))})),r.open()}))}function h(e){return Object(l["a"])({url:"/deviceInfo/enableLostMode",method:"post",data:e})}function y(e){return Object(l["a"])({url:"/deviceInfo/enableTimeLostMode",method:"post",data:e})}function x(e){return Object(l["a"])({url:"/deviceInfo/resetAuth",method:"post",data:e})}function S(e){return w.apply(this,arguments)}function w(){return w=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/disableLostMode",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function D(e){return V.apply(this,arguments)}function V(){return V=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/abmClose",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}function k(e){return I.apply(this,arguments)}function I(){return I=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/removeMobileFile",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function _(e){return O.apply(this,arguments)}function O(){return O=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/disableErase",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function j(e){return A.apply(this,arguments)}function A(){return A=Object(n["a"])(Object(r["a"])().mark((function e(t){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l["a"])({url:"/deviceInfo/enableErase",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function U(e){return N.apply(this,arguments)}function N(){return N=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/clearPasscode",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function $(e){return P.apply(this,arguments)}function P(){return P=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/getActivationLockSkipCode",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function L(e){return q.apply(this,arguments)}function q(){return q=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/controlClose",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function C(e){return z.apply(this,arguments)}function z(){return z=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/eraseDevice",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function M(e){return Object(l["a"])({url:"/deviceInfo/updateIos",method:"post",data:e})}function T(e){return Object(l["a"])({url:"/deviceInfo/deviceActivateLockOpen",method:"post",data:e})}function E(e){return G.apply(this,arguments)}function G(){return G=Object(n["a"])(Object(r["a"])().mark((function e(t){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.abrupt("return",Object(l["a"])({url:"/deviceInfo/deviceActivateLockClose",method:"post",data:t,headers:{authPassword:a}}));case 4:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function F(e){return Object(l["a"])({url:"/deviceInfo/updateDevice",method:"post",data:e})}function J(e){return Object(l["a"])({url:"/deviceInfo/updateDeviceInfo",method:"post",data:e})}function Q(e){return Object(l["a"])({url:"/deviceInfo/allotDevice",method:"post",data:e})}function B(e){return Object(l["a"])({url:"/deviceInfo/getLocation?deviceId="+e,method:"get"})}function H(e){return Object(l["a"])({url:"/deviceInfo/getHomeInfo?exTime="+e,method:"get"})}},cfe7:function(e,t,a){"use strict";a.r(t);var r,n,l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticStyle:{"max-width":"95%","margin-top":"20px","margin-left":"20px"}},[a("div",{staticStyle:{display:"inline-block"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("是否丢失")]),a("el-select",{attrs:{clearable:"",placeholder:"是否丢失"},model:{value:e.query.lostMode.value,callback:function(t){e.$set(e.query.lostMode,"value",t)},expression:"query.lostMode.value"}},e._l(e.query.lostMode.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("监管状态")]),a("el-select",{attrs:{clearable:"",placeholder:"监管状态"},model:{value:e.query.controlStatus.value,callback:function(t){e.$set(e.query.controlStatus,"value",t)},expression:"query.controlStatus.value"}},e._l(e.query.controlStatus.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("abm状态")]),a("el-select",{attrs:{clearable:"",placeholder:"abm状态"},model:{value:e.query.abmStatus.value,callback:function(t){e.$set(e.query.abmStatus,"value",t)},expression:"query.abmStatus.value"}},e._l(e.query.abmStatus.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("激活锁")]),a("el-select",{attrs:{clearable:"",placeholder:"激活锁"},model:{value:e.query.activationLock.value,callback:function(t){e.$set(e.query.activationLock,"value",t)},expression:"query.activationLock.value"}},e._l(e.query.activationLock.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("p"),a("div",{staticStyle:{display:"inline-block","margin-left":"0px","margin-top":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold","margin-left":"0px"}},[e._v("序列号")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{clearable:"",placeholder:""},model:{value:e.query.serialNumber,callback:function(t){e.$set(e.query,"serialNumber",t)},expression:"query.serialNumber"}})],1),a("div",{staticStyle:{display:"inline-block","margin-left":"0px","margin-top":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold","margin-left":"0px"}},[e._v("用户名")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{clearable:"",placeholder:""},model:{value:e.query.userName,callback:function(t){e.$set(e.query,"userName",t)},expression:"query.userName"}})],1),a("div",{staticStyle:{display:"inline-block","margin-left":"0px","margin-top":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold","margin-left":"0px"}},[e._v("手机号")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{clearable:"",placeholder:""},model:{value:e.query.userPhone,callback:function(t){e.$set(e.query,"userPhone",t)},expression:"query.userPhone"}})],1),a("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("离线时间")]),a("el-select",{attrs:{clearable:"",placeholder:"离线时间"},model:{value:e.query.noOnlineTime.value,callback:function(t){e.$set(e.query.noOnlineTime,"value",t)},expression:"query.noOnlineTime.value"}},e._l(e.query.noOnlineTime.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchDevice}},[e._v("搜索")]),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-export"},on:{click:e.exportDevice}},[e._v("导出报表")]),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-export"},on:{click:e.reStore}},[e._v("重置")])],1)]),a("el-card",{staticStyle:{"max-width":"95%","margin-top":"10px","margin-left":"20px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{"empty-text":"暂无数据",stripe:"",border:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"},data:e.page.data}},[a("el-table-column",{attrs:{prop:"serialNumber",label:"序列号",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{attrs:{type:"primary"},on:{click:function(a){return e.getDeviceInfo(t.row.deviceId)}}},[e._v(e._s(t.row.serialNumber))])]}}])}),a("el-table-column",{attrs:{prop:"description",label:"设备型号",width:"180"}}),a("el-table-column",{attrs:{prop:"abmStatus",label:"abm状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.abmStatus?a("el-tag",{attrs:{type:"danger"}},[e._v("未注册")]):a("el-tag",{attrs:{type:"success"}},[e._v("已注册")])]}}])}),a("el-table-column",{attrs:{prop:"activationLock",label:"激活锁",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.activationLock?a("el-tag",{attrs:{type:"danger"}},[e._v("已关闭")]):a("el-tag",{attrs:{type:"success"}},[e._v("已开启")])]}}])}),a("el-table-column",{attrs:{prop:"lostMode",label:"丢失模式",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.lostMode?a("el-tag",{attrs:{type:"danger"}},[e._v("已关闭")]):e._e(),1===t.row.lostMode?a("el-tag",{attrs:{type:"success"}},[e._v("已开启")]):e._e(),2===t.row.lostMode?a("el-tag",{attrs:{type:"danger"}},[e._v("待丢失")]):e._e(),3===t.row.lostMode?a("el-tag",{attrs:{type:"danger"}},[e._v("待解除")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"controlStatus",label:"监管状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.controlStatus?a("el-tag",{attrs:{type:"danger"}},[e._v("已脱管")]):a("el-tag",{attrs:{type:"success"}},[e._v("监管中")])]}}])}),a("el-table-column",{attrs:{prop:"deviceLastCallDateFormat",label:"最后通讯时间",width:"180"}}),a("el-table-column",{attrs:{prop:"os",label:"系统版本",width:"180"}}),a("el-table-column",{attrs:{prop:"userName",label:"用户名",width:"180"}}),a("el-table-column",{attrs:{prop:"userPhone",label:"手机号",width:"180"}}),a("el-table-column",{attrs:{prop:"groupName",label:"分组",width:"180"}}),a("el-table-column",{attrs:{prop:"createTime",label:"添加时间",width:"180"}}),a("el-table-column",{attrs:{prop:"whoUserAccount",label:"所属账号",width:"180"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.updateUserInfo(!0,t.row)}}},[e._v("修改设备信息")]),2===e.$store.state.user.userInfo.user.userType?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.allotDevice(!0,t.row)}}},[e._v("分配归属")]):e._e()]}}])})],1),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"empty-text":"暂无数据",background:"","current-page":e.page.page,"page-sizes":[5,10,20,50],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1),a("el-dialog",{attrs:{title:"分配归属",visible:e.allotDeviceVar.dig,width:"30%","before-close":function(){e.allotDeviceVar.dig=!1}},on:{"update:visible":function(t){return e.$set(e.allotDeviceVar,"dig",t)}}},[a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("设备Id")]),a("el-tag",[e._v(e._s(e.allotDeviceVar.deviceId))])],1),a("br"),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("序列号")]),a("el-tag",[e._v(e._s(e.allotDeviceVar.serialNumber))])],1),a("br"),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"7px"}},[e._v("设备归属")]),a("el-tag",[e._v(e._s(e.allotDeviceVar.allotUserAccount))])],1),a("div",[a("Staff",{on:{updateInfo:e.updateInfo}})],1),a("p"),a("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:function(t){return e.allotDevice(!1,null)}}},[e._v("确认分配")])],1),a("el-dialog",{attrs:{title:"修改设备信息",visible:e.updateUserInfoVar.dig,width:"30%","before-close":function(){e.updateUserInfoVar.dig=!1}},on:{"update:visible":function(t){return e.$set(e.updateUserInfoVar,"dig",t)}}},[a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("用户姓名")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"用户姓名"},model:{value:e.updateUserInfoVar.userName,callback:function(t){e.$set(e.updateUserInfoVar,"userName",t)},expression:"updateUserInfoVar.userName"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("手机号码")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"手机号码"},model:{value:e.updateUserInfoVar.userPhone,callback:function(t){e.$set(e.updateUserInfoVar,"userPhone",t)},expression:"updateUserInfoVar.userPhone"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("备注信息")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"备注"},model:{value:e.updateUserInfoVar.remark,callback:function(t){e.$set(e.updateUserInfoVar,"remark",t)},expression:"updateUserInfoVar.remark"}})],1),a("div",[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("设备分组")]),a("el-select",{attrs:{clearable:"",placeholder:"分组"},model:{value:e.groupList.value,callback:function(t){e.$set(e.groupList,"value",t)},expression:"groupList.value"}},e._l(e.groupList.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("p"),a("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:function(t){return e.updateUserInfo(!1,null)}}},[e._v("确认修改")])],1)],1)},o=[],i=(a("b680"),a("ac1f"),a("5319"),a("ba0f"),a("aa98")),u=a("23ba"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticStyle:{"max-width":"95%","margin-top":"20px","margin-left":"20px"}},[a("div",{staticStyle:{display:"inline-block","margin-left":"0px","margin-top":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold","margin-left":"0px"}},[e._v("账号")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"账号"},model:{value:e.query.account,callback:function(t){e.$set(e.query,"account",t)},expression:"query.account"}})],1),a("div",{staticStyle:{display:"inline-block","margin-left":"0px","margin-top":"20px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchQuery}},[e._v("搜索")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"empty-text":"暂无数据",stripe:"",border:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"},data:e.page.data}},[a("el-table-column",{attrs:{prop:"account",label:"账号"}}),a("el-table-column",{attrs:{prop:"userName",label:"用户名"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.allotDevice(t.row)}}},[e._v("分配")])]}}])})],1),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"empty-text":"暂无数据",background:"","current-page":e.page.page,"page-sizes":[5,10,20,50],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1),a("el-dialog",{attrs:{title:"修改",visible:e.updateDataVar.dig,width:"30%","before-close":function(){e.updateDataVar.dig=!1}},on:{"update:visible":function(t){return e.$set(e.updateDataVar,"dig",t)}}},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("状态")]),a("el-select",{attrs:{clearable:"",placeholder:"状态"},model:{value:e.updateDataVar.status,callback:function(t){e.$set(e.updateDataVar,"status",t)},expression:"updateDataVar.status"}},e._l(e.status.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("共享商家额度")]),a("el-select",{attrs:{clearable:"",placeholder:"共享额度"},model:{value:e.updateDataVar.shareAmount,callback:function(t){e.$set(e.updateDataVar,"shareAmount",t)},expression:"updateDataVar.shareAmount"}},e._l(e.shareAmount.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("设备权限")]),a("el-select",{attrs:{clearable:"",placeholder:"设备权限"},model:{value:e.updateDataVar.staffDeviceAuth,callback:function(t){e.$set(e.updateDataVar,"staffDeviceAuth",t)},expression:"updateDataVar.staffDeviceAuth"}},e._l(e.staffDeviceAuth.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("登录密码")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"登录密码"},model:{value:e.updateDataVar.password,callback:function(t){e.$set(e.updateDataVar,"password",t)},expression:"updateDataVar.password"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("二级密码")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"二级密码"},model:{value:e.updateDataVar.authPassword,callback:function(t){e.$set(e.updateDataVar,"authPassword",t)},expression:"updateDataVar.authPassword"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("用户名")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"用户名"},model:{value:e.updateDataVar.userName,callback:function(t){e.$set(e.updateDataVar,"userName",t)},expression:"updateDataVar.userName"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("手机号")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"手机号"},model:{value:e.updateDataVar.userPhone,callback:function(t){e.$set(e.updateDataVar,"userPhone",t)},expression:"updateDataVar.userPhone"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px",color:"red"}},[e._v("备注: 留空则不修改")])]),a("p"),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateData(null,!1)}}},[e._v("确认修改")])],1),a("el-dialog",{attrs:{title:"新增",visible:e.addDataVar.dig,width:"30%","before-close":function(){e.addDataVar.dig=!1}},on:{"update:visible":function(t){return e.$set(e.addDataVar,"dig",t)}}},[a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("账号")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"账号"},model:{value:e.addDataVar.account,callback:function(t){e.$set(e.addDataVar,"account",t)},expression:"addDataVar.account"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("邮箱")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"邮箱"},model:{value:e.addDataVar.email,callback:function(t){e.$set(e.addDataVar,"email",t)},expression:"addDataVar.email"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("密码")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"密码"},model:{value:e.addDataVar.password,callback:function(t){e.$set(e.addDataVar,"password",t)},expression:"addDataVar.password"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("用户名")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"用户名"},model:{value:e.addDataVar.userName,callback:function(t){e.$set(e.addDataVar,"userName",t)},expression:"addDataVar.userName"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("手机号")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"手机号"},model:{value:e.addDataVar.userPhone,callback:function(t){e.$set(e.addDataVar,"userPhone",t)},expression:"addDataVar.userPhone"}})],1),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[e._v("设备权限")]),a("el-select",{attrs:{clearable:"",placeholder:"设备权限"},model:{value:e.addDataVar.staffDeviceAuth,callback:function(t){e.$set(e.addDataVar,"staffDeviceAuth",t)},expression:"addDataVar.staffDeviceAuth"}},e._l(e.staffDeviceAuth.tab,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("p"),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addData(!1)}}},[e._v("保存")])],1),a("el-dialog",{attrs:{title:"添加数量",visible:e.addUserAmountVar.dig,width:"30%","before-close":function(){e.addUserAmountVar.dig=!1}},on:{"update:visible":function(t){return e.$set(e.addUserAmountVar,"dig",t)}}},[a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("添加数量")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"添加数量"},model:{value:e.addUserAmountVar.amount,callback:function(t){e.$set(e.addUserAmountVar,"amount",t)},expression:"addUserAmountVar.amount"}})],1),a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("备注")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"备注"},model:{value:e.addUserAmountVar.remark,callback:function(t){e.$set(e.addUserAmountVar,"remark",t)},expression:"addUserAmountVar.remark"}})],1),a("p"),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addUserAmount(null,!1)}}},[e._v("保存")])],1),a("el-dialog",{attrs:{title:"分配数量",visible:e.assignStaffAmountVar.dig,width:"30%","before-close":function(){e.assignStaffAmountVar.dig=!1}},on:{"update:visible":function(t){return e.$set(e.assignStaffAmountVar,"dig",t)}}},[a("div",[a("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[e._v("添加数量")]),a("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"分配数量"},model:{value:e.assignStaffAmountVar.amount,callback:function(t){e.$set(e.assignStaffAmountVar,"amount",t)},expression:"assignStaffAmountVar.amount"}})],1),a("p"),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.assignStaffAmount(null,!1)}}},[e._v("保存")])],1)],1)},c=[],d=(a("27aa"),a("4752")),p={computed:{},components:{searchDataApi:d["f"],updateDataApi:d["h"],deleteDataApi:d["e"],addDataApi:d["a"],addUserAmountApi:d["b"],assignStaffAmountApi:d["d"]},created:function(){r=this,console.log("创建"),r.searchData()},methods:{allotDevice:function(e){console.log("分配"),this.$emit("updateInfo",e)},handleSizeChange:function(e){console.log("每页 ".concat(e," 条")),r.page.pageSize=e,r.page.page=1,r.searchData()},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),r.page.page=e,r.searchData()},searchData:function(){Object(d["f"])(r.page,r.query).then((function(e){r.page=e.data}))},searchQuery:function(){this.page.page=1,Object(d["f"])(r.page,r.query).then((function(e){r.page=e.data}))},deleteData:function(e){r.deleteDataVar.userId=e,Object(d["e"])(r.deleteDataVar).then((function(e){r.searchData()}))},addUserAmount:function(e,t){t?(r.addUserAmountVar.dig=!0,r.addUserAmountVar.userId=e):Object(d["b"])(r.addUserAmountVar).then((function(e){r.addUserAmountVar.dig=!1,r.searchData()}))},addData:function(e){e?r.addDataVar.dig=!0:Object(d["a"])(r.addDataVar).then((function(e){r.addDataVar.dig=!1,r.searchData()}))},updateData:function(e,t){t?(r.updateDataVar.dig=!0,r.updateDataVar.userId=e.userId,r.updateDataVar.status="",r.updateDataVar.authPassword="",r.updateDataVar.password="",r.updateDataVar.shareAmount="",r.updateDataVar.staffDeviceAuth="",r.updateDataVar.userName=e.userName,r.updateDataVar.userPhone=e.userPhone):Object(d["h"])(r.updateDataVar).then((function(e){r.updateDataVar.dig=!1,r.searchData()}))},assignStaffAmount:function(e,t){t?(r.assignStaffAmountVar.dig=!0,r.assignStaffAmountVar.userId=e.userId,r.assignStaffAmountVar.amount=""):Object(d["d"])(r.assignStaffAmountVar).then((function(e){r.assignStaffAmountVar.dig=!1,r.searchData()}))}},data:function(){return{page:{pages:0,page:1,pageSize:5,total:0,data:[{}]},addDataVar:{dig:!1,password:"",userType:"",status:"",region:"",email:"",account:"",authPassword:"",amount:"",userName:"",userPhone:"",staffDeviceAuth:""},addUserAmountVar:{dig:!1,userId:"",amount:0,remark:""},updateDataVar:{dig:!1,userId:"",status:"",authPassword:"",password:"",amount:"",shareAmount:"",userName:"",userPhone:"",staffDeviceAuth:""},assignStaffAmountVar:{dig:!1,userId:"",amount:""},query:{userId:"",createTime:"",updateTime:"",lastLoginTime:"",lastLoginIp:"",userType:"",status:"",region:"",email:"",account:"",amount:"",userName:"",userPhone:"",bossUserId:""},deleteDataVar:{userId:""},userType:{tab:[{value:2,label:"普通用户"}],value:""},shareAmount:{tab:[{value:1,label:"是"},{value:0,label:"否"}],value:""},status:{tab:[{value:1,label:"正常"},{value:0,label:"封禁"}],value:""},staffDeviceAuth:{tab:[{value:1,label:"所有设备"},{value:0,label:"仅自己"}],value:""}}}},f=p,m=a("2877"),b=Object(m["a"])(f,s,c,!1,null,"2c36550c",null),v=b.exports,g={computed:{},components:{getList:i["r"],updateUserInfoApi:i["C"],getMyGroupAllApi:u["c"],exportDeviceApi:i["m"],allotDeviceApi:i["b"],Staff:v},created:function(){n=this,console.log("创建");var e=this.$store.state.user.deviceInfoData;this.$store.state.user.deviceInfoDataIsCache?(console.log("数据不为空不缓存"),n.page=e.page,n.updateUserInfoVar=e.updateUserInfoVar,n.groupList=e.groupList,n.query=e.query):(console.log("数据为空不缓存"),n.getDeviceList(),n.getMyGroupAll())},methods:{updateInfo:function(e){console.log("收到点击"),console.log(e),n.allotDeviceVar.allotUserId=e.userId,n.allotDeviceVar.allotUserAccount=e.account},calculateTimeDifference:function(e){console.log(123);var t=new Date(e.replace(/-/g,"/")),a=new Date,r=a-t,n=(r/36e5).toFixed(2);return n},reStore:function(){n.query={userPhone:"",userName:"",abmStatus:{tab:[{value:0,label:"未注册"},{value:1,label:"已注册"}],value:""},controlStatus:{tab:[{value:0,label:"已脱管"},{value:1,label:"监管中"}],value:""},lostMode:{tab:[{value:0,label:"未开启"},{value:1,label:"已开启"}],value:""},activationLock:{tab:[{value:0,label:"已关闭"},{value:1,label:"已开启"}],value:""},serialNumber:"",noOnlineTime:{tab:[{value:60,label:"1小时"},{value:300,label:"5小时"},{value:720,label:"12小时"},{value:1440,label:"1天"},{value:4320,label:"3天"},{value:10080,label:"一周"},{value:43200,label:"一个月"}],value:""},deviceMdm:{disableErase:{tab:[{value:0,label:"已关闭"},{value:1,label:"已开启"}],value:""}}}},handleSizeChange:function(e){console.log("每页 ".concat(e," 条")),n.page.pageSize=e,n.page.page=1,n.getDeviceList()},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),n.page.page=e,n.getDeviceList()},getDeviceList:function(){Object(i["r"])(n.page,n.query).then((function(e){n.page=e.data}))},getMyGroupAll:function(){Object(u["c"])().then((function(e){var t=e.data;n.groupList.tab=[];for(var a=0;a<t.length;a++)console.log(t[a]),n.groupList.tab.push({value:t[a].groupId,label:t[a].groupName})}))},searchDevice:function(){n.page.page=1,Object(i["r"])(n.page,n.query).then((function(e){n.page=e.data}))},exportDevice:function(){Object(i["m"])().then((function(e){window.location.href=e.data}))},getDeviceInfo:function(e){this.$store.state.user.deviceInfoData.page=n.page,this.$store.state.user.deviceInfoData.updateUserInfoVar=n.updateUserInfoVar,this.$store.state.user.deviceInfoData.groupList=n.groupList,this.$store.state.user.deviceInfoData.query=n.query,this.$store.state.user.deviceInfoDataIsCache=!0,this.$router.push("/device/list/info/index?deviceId=".concat(e))},updateUserInfo:function(e,t){e?(console.log("出"),n.updateUserInfoVar.dig=!0,n.updateUserInfoVar.deviceId=t.deviceId,n.updateUserInfoVar.userName=t.userName,n.updateUserInfoVar.userPhone=t.userPhone,n.updateUserInfoVar.remark=t.remark,n.groupList.value=t.groupId,""==t.groupName&&(n.groupList.value="")):(n.updateUserInfoVar.groupId=n.groupList.value,Object(i["C"])(n.updateUserInfoVar).then((function(e){n.updateUserInfoVar.dig=!1,n.getDeviceList()})))},allotDevice:function(e,t){e?(n.allotDeviceVar.dig=!0,n.allotDeviceVar.deviceId=t.deviceId,n.allotDeviceVar.serialNumber=t.serialNumber,n.allotDeviceVar.allotUserId=t.userId,n.allotDeviceVar.allotUserAccount=t.whoUserAccount):Object(i["b"])(n.allotDeviceVar).then((function(e){n.allotDeviceVar.dig=!1,n.getDeviceList()}))}},data:function(){return{page:{pages:0,page:1,pageSize:5,total:0,data:[{deviceId:"b0c8af1013a14e168f5af60e559b85b6",udid:"00008020-000A59891A81002E",mdmStatus:"TokenUpdate"}]},updateUserInfoVar:{dig:!1,deviceId:"",userName:"",userPhone:"",remark:"",groupId:""},allotDeviceVar:{dig:!1,deviceId:"",allotUserId:"",serialNumber:"",allotUserAccount:""},groupList:{tab:[{value:0,label:"未开启"}],value:""},query:{userPhone:"",userName:"",abmStatus:{tab:[{value:0,label:"未注册"},{value:1,label:"已注册"}],value:""},controlStatus:{tab:[{value:0,label:"已脱管"},{value:1,label:"监管中"}],value:""},lostMode:{tab:[{value:0,label:"未开启"},{value:1,label:"已开启"},{value:2,label:"待丢失"},{value:3,label:"待解除"}],value:""},activationLock:{tab:[{value:0,label:"已关闭"},{value:1,label:"已开启"}],value:""},serialNumber:"",noOnlineTime:{tab:[{value:60,label:"1小时"},{value:300,label:"5小时"},{value:720,label:"12小时"},{value:1440,label:"1天"},{value:4320,label:"3天"},{value:10080,label:"一周"},{value:43200,label:"一个月"}],value:""},deviceMdm:{disableErase:{tab:[{value:0,label:"已关闭"},{value:1,label:"已开启"}],value:""}}}}}},h=g,y=Object(m["a"])(h,l,o,!1,null,"caddfc5a",null);t["default"]=y.exports}}]);