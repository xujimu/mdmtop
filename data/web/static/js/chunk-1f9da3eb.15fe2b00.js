(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f9da3eb"],{3221:function(t,a,e){"use strict";e.r(a);var r,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-card",{staticStyle:{"max-width":"95%","margin-top":"20px","margin-left":"20px"}},[e("div",{staticStyle:{display:"inline-block","margin-left":"0px","margin-top":"20px"}},[e("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold","margin-left":"0px"}},[t._v("账号")]),e("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"账号"},model:{value:t.query.account,callback:function(a){t.$set(t.query,"account",a)},expression:"query.account"}})],1),e("div",{staticStyle:{display:"inline-block","margin-left":"0px","margin-top":"20px"}},[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchData}},[t._v("搜索")]),e("el-button",{attrs:{type:"success"},on:{click:function(a){return t.addData(!0)}}},[t._v("新增")])],1)]),e("el-card",{staticStyle:{"max-width":"95%","margin-top":"10px","margin-left":"20px"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{"empty-text":"暂无数据",stripe:"",border:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"},data:t.page.data}},[e("el-table-column",{attrs:{prop:"userId",label:"用户id"}}),e("el-table-column",{attrs:{prop:"account",label:"账号"}}),e("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),e("el-table-column",{attrs:{prop:"amount",label:"剩余设备数量"}}),e("el-table-column",{attrs:{prop:"createTime",label:"添加时间"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.addUserAmount(a.row.userId,!0)}}},[t._v("分配数量")])]}}])})],1),e("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"empty-text":"暂无数据",background:"","current-page":t.page.page,"page-sizes":[5,10,20,50],"page-size":t.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1),e("el-dialog",{attrs:{title:"修改",visible:t.updateDataVar.dig,width:"30%","before-close":function(){t.updateDataVar.dig=!1}},on:{"update:visible":function(a){return t.$set(t.updateDataVar,"dig",a)}}},[e("div",{staticStyle:{"margin-bottom":"20px"}},[e("span",{staticClass:"el-form-item__label",staticStyle:{"font-weight":"bold"}},[t._v("状态")]),e("el-select",{attrs:{clearable:"",placeholder:"状态"},model:{value:t.updateDataVar.status,callback:function(a){t.$set(t.updateDataVar,"status",a)},expression:"updateDataVar.status"}},t._l(t.status.tab,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("div",[e("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[t._v("登录密码")]),e("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"登录密码"},model:{value:t.updateDataVar.password,callback:function(a){t.$set(t.updateDataVar,"password",a)},expression:"updateDataVar.password"}})],1),e("div",[e("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[t._v("二级密码")]),e("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"二级密码"},model:{value:t.updateDataVar.authPassword,callback:function(a){t.$set(t.updateDataVar,"authPassword",a)},expression:"updateDataVar.authPassword"}})],1),e("div",[e("span",{staticStyle:{"font-weight":"bold","margin-right":"20px",color:"red"}},[t._v("备注: 留空则不修改")])]),e("p"),e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.updateData(null,!1)}}},[t._v("确认修改")])],1),e("el-dialog",{attrs:{title:"新增",visible:t.addDataVar.dig,width:"30%","before-close":function(){t.addDataVar.dig=!1}},on:{"update:visible":function(a){return t.$set(t.addDataVar,"dig",a)}}},[e("div",[e("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[t._v("账号")]),e("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"账号"},model:{value:t.addDataVar.account,callback:function(a){t.$set(t.addDataVar,"account",a)},expression:"addDataVar.account"}})],1),e("div",[e("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[t._v("邮箱")]),e("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"邮箱"},model:{value:t.addDataVar.email,callback:function(a){t.$set(t.addDataVar,"email",a)},expression:"addDataVar.email"}})],1),e("div",[e("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[t._v("密码")]),e("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"密码"},model:{value:t.addDataVar.password,callback:function(a){t.$set(t.addDataVar,"password",a)},expression:"addDataVar.password"}})],1),e("p"),e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.addData(!1)}}},[t._v("保存")])],1),e("el-dialog",{attrs:{title:"分配数量",visible:t.addUserAmountVar.dig,width:"30%","before-close":function(){t.addUserAmountVar.dig=!1}},on:{"update:visible":function(a){return t.$set(t.addUserAmountVar,"dig",a)}}},[e("div",[e("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[t._v("分配数量")]),e("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"添加数量"},model:{value:t.addUserAmountVar.amount,callback:function(a){t.$set(t.addUserAmountVar,"amount",a)},expression:"addUserAmountVar.amount"}})],1),e("div",[e("span",{staticStyle:{"font-weight":"bold","margin-right":"20px"}},[t._v("备注")]),e("el-input",{staticStyle:{width:"200px","margin-right":"20px","margin-bottom":"20px"},attrs:{placeholder:"备注"},model:{value:t.addUserAmountVar.remark,callback:function(a){t.$set(t.addUserAmountVar,"remark",a)},expression:"addUserAmountVar.remark"}})],1),e("p"),e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.addUserAmount(null,!1)}}},[t._v("保存")])],1)],1)},i=[],o=(e("27aa"),e("4752")),s={computed:{},components:{allotAmountApi:o["c"],userAddUserApi:o["i"],searchUserAddUser:o["g"]},created:function(){r=this,console.log("创建"),r.searchData()},methods:{handleSizeChange:function(t){console.log("每页 ".concat(t," 条")),r.page.pageSize=t,r.page.page=1,r.searchData()},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),r.page.page=t,r.searchData()},searchData:function(){Object(o["g"])(r.page,r.query).then((function(t){r.page=t.data}))},addUserAmount:function(t,a){a?(r.addUserAmountVar.dig=!0,r.addUserAmountVar.userId=t):Object(o["c"])(r.addUserAmountVar).then((function(t){r.addUserAmountVar.dig=!1,r.searchData()}))},addData:function(t){t?r.addDataVar.dig=!0:Object(o["i"])(r.addDataVar).then((function(t){r.addDataVar.dig=!1,r.searchData()}))},updateData:function(t,a){a&&(r.updateDataVar.dig=!0,r.updateDataVar.userId=t.userId,r.updateDataVar.status="",r.updateDataVar.authPassword="",r.updateDataVar.password="")}},data:function(){return{page:{pages:0,page:1,pageSize:5,total:0,data:[{}]},addDataVar:{dig:!1,password:"",userType:"",status:"",region:"",email:"",account:"",authPassword:"",amount:"",userName:"",userPhone:""},addUserAmountVar:{dig:!1,userId:"",amount:0,remark:""},updateDataVar:{dig:!1,userId:"",status:"",authPassword:"",password:"",amount:""},query:{userId:"",createTime:"",updateTime:"",lastLoginTime:"",lastLoginIp:"",userType:"",status:"",region:"",email:"",account:"",amount:"",userName:"",userPhone:"",bossUserId:""},deleteDataVar:{userId:""},userType:{tab:[{value:2,label:"普通用户"}],value:""},status:{tab:[{value:1,label:"正常"},{value:0,label:"封禁"}],value:""}}}},u=s,l=e("2877"),d=Object(l["a"])(u,n,i,!1,null,"1a9dfa6c",null);a["default"]=d.exports},4752:function(t,a,e){"use strict";e.d(a,"f",(function(){return n})),e.d(a,"b",(function(){return i})),e.d(a,"a",(function(){return o})),e.d(a,"h",(function(){return s})),e.d(a,"d",(function(){return u})),e.d(a,"e",(function(){return l})),e.d(a,"c",(function(){return d})),e.d(a,"g",(function(){return c})),e.d(a,"i",(function(){return p}));var r=e("b775");function n(t,a){var e="";return""!==a.userId&&(e=e+"&userId="+a.userId),""!==a.email&&(e=e+"&email="+a.email),""!==a.account&&(e=e+"&account="+a.account),""!==a.userName&&(e=e+"&userName="+a.userName),""!==a.userPhone&&(e=e+"&userPhone="+a.userPhone),""!==a.userType&&(e=e+"&userType="+a.userType),Object(r["a"])({url:"/user/searchStaff?page="+t.page+"&pageSize="+t.pageSize+e,method:"get"})}function i(t){return Object(r["a"])({url:"/admin/addUserAmount",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/user/addStaff",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/user/updateStaff",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/user/assignStaffAmount",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/abmP7m/delete",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/user/allotAmount",method:"post",data:t})}function c(t,a){var e="";return""!==a.account&&(e=e+"&account="+a.account),Object(r["a"])({url:"/user/searchUserAddUser?page="+t.page+"&pageSize="+t.pageSize+e,method:"get"})}function p(t){return Object(r["a"])({url:"/user/userAddUser",method:"post",data:t})}}}]);