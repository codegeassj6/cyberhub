"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["EditAccount"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditAccount.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditAccount.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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

//import name from './'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        username: '',
        first_name: '',
        last_name: '',
        birthday: '',
        contact: '',
        location: ''
      }
    };
  },
  components: {},
  props: [],
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    updateProfile: function updateProfile() {
      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'get',
        params: {
          username: 1,
          first_name: form.first_name,
          last_name: form.last_name,
          birthday: form.birthday,
          contact: form.contact,
          location: form.location
        },
        url: "/api/account/update",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        console.log(res.data.data);
      })["catch"](function (err) {});
    }
  },
  watch: {
    $data: {
      handler: function handler(val, oldVal) {
        console.log('watcher: ', val);
      },
      deep: true
    }
  },
  updated: function updated() {},
  mounted: function mounted() {
    this.form.first_name = this.currentUser.first_name;
    this.form.last_name = this.currentUser.last_name;
    this.form.email = this.currentUser.email;
  }
});

/***/ }),

/***/ "./resources/js/components/EditAccount.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/EditAccount.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditAccount_vue_vue_type_template_id_ffd4d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditAccount.vue?vue&type=template&id=ffd4d3b0&scoped=true& */ "./resources/js/components/EditAccount.vue?vue&type=template&id=ffd4d3b0&scoped=true&");
/* harmony import */ var _EditAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditAccount.vue?vue&type=script&lang=js& */ "./resources/js/components/EditAccount.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditAccount_vue_vue_type_template_id_ffd4d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditAccount_vue_vue_type_template_id_ffd4d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ffd4d3b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditAccount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditAccount.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/EditAccount.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditAccount.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditAccount.vue?vue&type=template&id=ffd4d3b0&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/EditAccount.vue?vue&type=template&id=ffd4d3b0&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAccount_vue_vue_type_template_id_ffd4d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAccount_vue_vue_type_template_id_ffd4d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAccount_vue_vue_type_template_id_ffd4d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditAccount.vue?vue&type=template&id=ffd4d3b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditAccount.vue?vue&type=template&id=ffd4d3b0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditAccount.vue?vue&type=template&id=ffd4d3b0&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditAccount.vue?vue&type=template&id=ffd4d3b0&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "space-intro" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "container-xl px-4 mt-4" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-8" }, [
              _c("div", { staticClass: "card mb-4" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v("Account Details"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("form", [
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "small mb-1",
                          attrs: { for: "inputUsername" },
                        },
                        [_vm._v("Username")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.username,
                            expression: "form.username",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Enter your username",
                        },
                        domProps: { value: _vm.form.username },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "username", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row gx-3 mb-3" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "label",
                          {
                            staticClass: "small mb-1",
                            attrs: { for: "inputFirstName" },
                          },
                          [_vm._v("First name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.first_name,
                              expression: "form.first_name",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter your first name",
                          },
                          domProps: { value: _vm.form.first_name },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "first_name",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "label",
                          {
                            staticClass: "small mb-1",
                            attrs: { for: "inputLastName" },
                          },
                          [_vm._v("Last name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.last_name,
                              expression: "form.last_name",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter your last name",
                            value: "Luna",
                          },
                          domProps: { value: _vm.form.last_name },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "last_name",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "small mb-1",
                          attrs: { for: "inputEmailAddress" },
                        },
                        [_vm._v("Email address")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          placeholder: "Enter your email address",
                        },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row gx-3 mb-3" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "label",
                          {
                            staticClass: "small mb-1",
                            attrs: { for: "inputPhone" },
                          },
                          [_vm._v("Phone number")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.contact,
                              expression: "form.contact",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter your phone number",
                          },
                          domProps: { value: _vm.form.contact },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "contact", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "label",
                          {
                            staticClass: "small mb-1",
                            attrs: { for: "inputBirthday" },
                          },
                          [_vm._v("Birthday")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.birthday,
                              expression: "form.birthday",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "date",
                            placeholder: "Enter your birthday",
                          },
                          domProps: { value: _vm.form.birthday },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "birthday",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                      },
                      [_vm._v("Save changes")]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-4" }, [
      _c("div", { staticClass: "card mb-4 mb-xl-0" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("Profile Picture")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body text-center" }, [
          _c("img", {
            staticClass: "img-account-profile rounded-circle mb-2",
            attrs: {
              src: "http://bootdey.com/img/Content/avatar/avatar1.png",
              alt: "",
            },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "small font-italic text-muted mb-4" }, [
            _vm._v("JPG or PNG no larger than 5 MB"),
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "button" } },
            [_vm._v("Upload new image")]
          ),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);