"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ResetPassword"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import name from './

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      token: "",
      form: {
        password: 'jhonreyj6',
        confirm_password: 'jhonreyj6'
      }
    };
  },
  components: {},
  props: {},
  computed: {},
  methods: {
    changePass: function changePass() {
      axios({
        method: 'patch',
        params: {
          password: this.form.password,
          confirm_password: this.form.confirm_password,
          access_token: this.token
        },
        url: "/api/reset/password"
      }).then(function (res) {
        console.log(res.data);
      })["catch"](function (err) {});
    }
  },
  watch: {
    $data: {
      handler: function handler(val, oldVal) {
        console.log("watcher: ", val);
      },
      deep: true
    },
    $props: {
      handler: function handler(val, oldVal) {
        console.log("watcher: ", val);
      },
      deep: true
    },
    some_prop: function some_prop() {
      //do something if some_prop updated
    }
  },
  updated: function updated() {},
  beforeMounted: function beforeMounted() {},
  mounted: function mounted() {
    var _this = this;
    axios({
      method: "get",
      url: "/api/reset/password/".concat(this.$route.query.access_token)
    }).then(function (res) {
      _this.token = res.data;
    })["catch"](function (err) {});
  }
});

/***/ }),

/***/ "./resources/js/components/auth/ResetPassword.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/auth/ResetPassword.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_41baacce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=41baacce&scoped=true& */ "./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce&scoped=true&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_41baacce_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResetPassword_vue_vue_type_template_id_41baacce_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "41baacce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/ResetPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/ResetPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41baacce_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41baacce_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41baacce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=template&id=41baacce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/ResetPassword.vue?vue&type=template&id=41baacce&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "space-intro" }, [
    _c("div", { staticClass: "container d-flex flex-column" }, [
      _c(
        "div",
        { staticClass: "row align-items-center justify-content-center" },
        [
          _c("div", { staticClass: "col-sm-12 col-md-10 col-lg-6 col-xl-5" }, [
            _c("div", { staticClass: "card shadow-sm" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.changePass.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        { staticClass: "form-label", attrs: { for: "pass" } },
                        [_vm._v("Password:")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.password,
                            expression: "form.password",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          id: "pass",
                          placeholder: "New Password",
                        },
                        domProps: { value: _vm.form.password },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "password", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        { staticClass: "form-label", attrs: { for: "cpass" } },
                        [_vm._v("Confrim Password:")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.confirm_password,
                            expression: "form.confirm_password",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          id: "cpass",
                          placeholder: "Repeat password",
                        },
                        domProps: { value: _vm.form.confirm_password },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "confirm_password",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "span",
                      [
                        _vm._v("Don't have an account?\n                "),
                        _c("router-link", { attrs: { to: "/register" } }, [
                          _vm._v("Click here to register."),
                        ]),
                      ],
                      1
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-4" }, [
      _c("h5", [_vm._v("Enter new password")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3 d-grid" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("\n                  Change Password\n                ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);