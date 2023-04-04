"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[494],{3867:(t,e,a)=>{a.d(e,{Z:()=>n});var r=a(3645),s=a.n(r)()((function(t){return t[1]}));s.push([t.id,".gradient-custom-3[data-v-64392211]{background:#84fab0;background:linear-gradient(90deg,rgba(132,250,176,.5),rgba(143,211,244,.5))}",""]);const n=s},2408:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});const r={data:function(){return{fname:null,lname:null,email:null,password:null,confirm:null,error:{first_name:"",last_name:"",email:"",password:"",confirm:""}}},components:{},props:[],computed:{},methods:{register:function(){var t=this;return new Promise((function(e,a){axios({method:"post",params:{first_name:t.fname,last_name:t.lname,email:t.email,password:t.password,confirm:t.confirm},url:"/api/auth/register"}).then((function(e){e(response.data),t.$router.push("/login")})).catch((function(e){t.error.first_name=e.response.data.first_name,t.error.last_name=e.response.data.last_name,t.error.email=e.response.data.email,t.error.password=e.response.data.password,t.error.confirm=e.response.data.confirm,a(e)}))}))}},watch:{$data:{handler:function(t,e){console.log("watcher: ",t)},deep:!0}},updated:function(){},mounted:function(){}};var s=a(3379),n=a.n(s),o=a(3867),l={insert:"head",singleton:!1};n()(o.Z,l);o.Z.locals;const i=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"vh-100"},[a("div",{staticClass:"mask space-intro d-flex align-items-center h-100 gradient-custom-3 pb-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row d-flex justify-content-center align-items-center h-100"},[a("div",{staticClass:"col-12 col-md-9 col-lg-7 col-xl-6"},[a("div",{staticClass:"card",staticStyle:{"border-radius":"15px"}},[a("div",{staticClass:"card-body p-5"},[a("h2",{staticClass:"text-uppercase text-center mb-3"},[t._v("\n                  Create an account\n                ")]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[a("div",{staticClass:"form-outline mb-4"},[a("label",{staticClass:"form-label",attrs:{for:"form3Example1cg"}},[t._v("First Name:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fname,expression:"fname"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"form3Example1cg",required:""},domProps:{value:t.fname},on:{input:function(e){e.target.composing||(t.fname=e.target.value)}}}),t._v(" "),t._l(t.error.first_name,(function(e,r){return a("span",{key:r,staticClass:"text-danger"},[t._v(t._s(e))])}))],2),t._v(" "),a("div",{staticClass:"form-outline mb-4"},[a("label",{staticClass:"form-label",attrs:{for:"form4Example1cg"}},[t._v("Last Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lname,expression:"lname"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"form4Example1cg",required:""},domProps:{value:t.lname},on:{input:function(e){e.target.composing||(t.lname=e.target.value)}}}),t._v(" "),t._l(t.error.last_name,(function(e,r){return a("span",{key:r,staticClass:"text-danger"},[t._v(t._s(e))])}))],2),t._v(" "),a("div",{staticClass:"form-outline mb-4"},[a("label",{staticClass:"form-label",attrs:{for:"form3Example3cg"}},[t._v("Your Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",id:"form3Example3cg",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t._l(t.error.email,(function(e,r){return a("span",{key:r,staticClass:"text-danger"},[t._v(t._s(e))])}))],2),t._v(" "),a("div",{staticClass:"form-outline mb-4"},[a("label",{staticClass:"form-label",attrs:{for:"form3Example4cg"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"form3Example4cg",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._l(t.error.password,(function(e,r){return a("span",{key:r,staticClass:"text-danger"},[t._v(t._s(e))])}))],2),t._v(" "),a("div",{staticClass:"form-outline mb-4"},[a("label",{staticClass:"form-label",attrs:{for:"form3Example4cdg"}},[t._v("Repeat password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm,expression:"confirm"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"form3Example4cdg",required:""},domProps:{value:t.confirm},on:{input:function(e){e.target.composing||(t.confirm=e.target.value)}}}),t._v(" "),t._l(t.error.confirm,(function(e,r){return a("span",{key:r,staticClass:"text-danger"},[t._v(t._s(e))])}))],2),t._v(" "),t._m(0),t._v(" "),a("p",{staticClass:"text-center text-muted mt-5 mb-0"},[t._v("\n                    Have already an account?\n                    "),a("router-link",{staticClass:"fw-bold text-body",attrs:{to:"/login"}},[a("u",[t._v("Login here")])])],1)])])])])])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("button",{staticClass:"btn btn-primary btn-block btn-lg text-white",attrs:{type:"submit"}},[t._v("\n                      Register\n                    ")])])}],!1,null,"64392211",null).exports}}]);