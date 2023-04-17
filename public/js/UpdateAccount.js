"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["UpdateAccount"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpdateAccount.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpdateAccount.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        birthday: "",
        contact: "",
        address: "",
        email: "",
        file: "",
        boolUpload: true,
        photo: ""
      },
      user: "",
      error: {
        birthday: "",
        first_name: "",
        last_name: "",
        contact: ""
      }
    };
  },
  components: {},
  props: [],
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    },
    getProfilePicture: function getProfilePicture() {
      return "/storage/user/" + this.user.id + "/img/" + this.user.profile_img;
    }
  },
  methods: {
    updateProfile: function updateProfile(e) {
      e.target.setAttribute("disabled", true);
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "post",
        params: {
          username: this.form.username,
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          birthday: this.form.birthday,
          contact: this.form.contact,
          address: this.form.address
        },
        url: "/api/account/update",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        e.target.removeAttribute("disabled");
      })["catch"](function (err) {});
    },
    // trigger the input file
    uploadTriggerInput: function uploadTriggerInput() {
      var elem = document.getElementById("input_upload");
      if (elem && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        elem.dispatchEvent(evt);
      }
    },
    inputFile: function inputFile(e) {
      this.form.file = e.target.files[0] || e.dataTransfer.files[0];
      if (this.form.file) {
        this.form.boolUpload = false;
        // this.previewImage(this.form.file);
        document.getElementById("myPhoto").src = URL.createObjectURL(this.form.file);
      }
    },
    cancelUpload: function cancelUpload() {
      this.form.file = null;
      this.form.boolUpload = true;
      document.getElementById("myPhoto").src = this.form.photo;
    },
    uploadImage: function uploadImage() {
      var _this = this;
      var formData = new FormData();
      formData.set("image", this.form.file);
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios.post("/api/account/update/image", formData, {
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this.form.boolUpload = true;
        // mutate user profile imaage
      })["catch"](function (error) {});
    },
    getAuthUserDetails: function getAuthUserDetails() {
      var _this2 = this;
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "get",
        url: "/api/auth/me",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this2.user = res.data;
        _this2.form.first_name = res.data.first_name;
        _this2.form.last_name = res.data.last_name;
        _this2.form.email = res.data.email;
        _this2.form.address = res.data.address;
        _this2.form.contact = res.data.contact;
        _this2.form.birthday = res.data.birthday;
        _this2.form.photo = res.data.profile_img ? _this2.getProfilePicture : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
      })["catch"](function (err) {});
    }
  },
  updated: function updated() {},
  mounted: function mounted() {
    this.getAuthUserDetails();
  }
});

/***/ }),

/***/ "./resources/js/components/UpdateAccount.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/UpdateAccount.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateAccount_vue_vue_type_template_id_3f47e26e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateAccount.vue?vue&type=template&id=3f47e26e& */ "./resources/js/components/UpdateAccount.vue?vue&type=template&id=3f47e26e&");
/* harmony import */ var _UpdateAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateAccount.vue?vue&type=script&lang=js& */ "./resources/js/components/UpdateAccount.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateAccount_vue_vue_type_template_id_3f47e26e___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateAccount_vue_vue_type_template_id_3f47e26e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UpdateAccount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UpdateAccount.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/UpdateAccount.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpdateAccount.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UpdateAccount.vue?vue&type=template&id=3f47e26e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/UpdateAccount.vue?vue&type=template&id=3f47e26e& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_template_id_3f47e26e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_template_id_3f47e26e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateAccount_vue_vue_type_template_id_3f47e26e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateAccount.vue?vue&type=template&id=3f47e26e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpdateAccount.vue?vue&type=template&id=3f47e26e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpdateAccount.vue?vue&type=template&id=3f47e26e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpdateAccount.vue?vue&type=template&id=3f47e26e& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "col-xl-4" }, [
              _c("div", { staticClass: "card mb-4 mb-xl-0" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v("Profile Picture"),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body text-center" },
                  [
                    _c("img", {
                      staticClass: "img-account-profile rounded-circle mb-2",
                      attrs: {
                        width: "300",
                        height: "300",
                        src: _vm.form.photo,
                        id: "myPhoto",
                        alt: "",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "small font-italic text-muted mb-4" },
                      [
                        _vm._v(
                          "\n                  JPG or PNG no larger than 5 MB\n                "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "d-none",
                      attrs: {
                        type: "file",
                        id: "input_upload",
                        accept: "image/png, image/jpg, image/jpeg",
                      },
                      on: { change: _vm.inputFile },
                    }),
                    _vm._v(" "),
                    _vm.form.boolUpload
                      ? [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary bg-gradient",
                              attrs: { type: "button" },
                              on: { click: _vm.uploadTriggerInput },
                            },
                            [
                              _vm._v(
                                "\n                    Upload Image\n                  "
                              ),
                            ]
                          ),
                        ]
                      : [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              attrs: { type: "button" },
                              on: { click: _vm.cancelUpload },
                            },
                            [
                              _vm._v(
                                "\n                    Cancel\n                  "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: { click: _vm.uploadImage },
                            },
                            [
                              _vm._v(
                                "\n                    Upload\n                  "
                              ),
                            ]
                          ),
                        ],
                  ],
                  2
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-8" }, [
              _c("div", { staticClass: "card mb-4" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v("Account Details"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("form", [
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
                          disabled: "",
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
                          attrs: { type: "date" },
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
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "small mb-1",
                          attrs: { for: "inputUsername" },
                        },
                        [_vm._v("Address")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.address,
                            expression: "form.address",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Enter your Address",
                        },
                        domProps: { value: _vm.form.address },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary bg-gradient",
                        attrs: { type: "button" },
                        on: { click: _vm.updateProfile },
                      },
                      [
                        _vm._v(
                          "\n                    Save changes\n                  "
                        ),
                      ]
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);