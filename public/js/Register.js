"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Register"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/auth */ "./resources/js/helpers/auth.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        fname: null,
        lname: null,
        email: null,
        password: null,
        confirm: null
      },
      error: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm: ""
      }
    };
  },
  components: {},
  props: [],
  computed: {},
  methods: {
    register: function register() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        axios({
          method: "post",
          params: {
            first_name: _this.form.fname,
            last_name: _this.form.lname,
            email: _this.form.email,
            password: _this.form.password,
            confirm: _this.form.confirm
          },
          url: "/api/auth/register"
        }).then(function (res) {
          _this.authenticate();
          // this.$router.push("/login");
        })["catch"](function (err) {
          _this.error.first_name = err.response.data.first_name;
          _this.error.last_name = err.response.data.last_name;
          _this.error.email = err.response.data.email;
          _this.error.password = err.response.data.password;
          _this.error.confirm = err.response.data.confirm;
          reject(err);
        });
      });
    },
    authenticate: function authenticate() {
      var _this2 = this;
      this.$store.dispatch("login");
      (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_0__.login)(this.form).then(function (res) {
        _this2.$store.commit("loginSuccess", res);
        var AuthStr = "Bearer ".concat(_this2.$store.getters.currentUser.token);
        axios({
          method: "get",
          url: "/api/cart/",
          headers: {
            Authorization: AuthStr
          }
        }).then(function (res) {
          _this2.$store.commit("mutateCartCount", res.data.cart_count);
        })["catch"](function (err) {});
        _this2.$router.push('/');
      })["catch"](function (error) {
        _this2.$store.commit("loginFailed", {
          error: error
        });
      });
    }
  },
  // watch: {
  //   $data: {
  //     handler: function (val, oldVal) {
  //       console.log("watcher: ", val);
  //     },
  //     deep: true,
  //   },
  // },
  updated: function updated() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* .container {\r\n    margin-top: 100px;\r\n    max-width: 900px;\r\n}\r\n\r\n.p-10 {\r\n    padding: 40px 80px;\r\n} */\n.gradient-custom-3[data-v-d4f9cbe2] {\r\n  /* fallback for old browsers */\r\n  background: #84fab0;\r\n\r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n\r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  background: linear-gradient(\r\n    to right,\r\n    rgba(132, 250, 176, 0.5),\r\n    rgba(143, 211, 244, 0.5)\r\n  );\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_d4f9cbe2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_d4f9cbe2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_d4f9cbe2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/auth/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/auth/Register.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_d4f9cbe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=d4f9cbe2&scoped=true& */ "./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_d4f9cbe2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css& */ "./resources/js/components/auth/Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_d4f9cbe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_d4f9cbe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d4f9cbe2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/auth/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/auth/Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_d4f9cbe2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=style&index=0&id=d4f9cbe2&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_d4f9cbe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_d4f9cbe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_d4f9cbe2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=d4f9cbe2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "vh-100" }, [
      _c(
        "div",
        {
          staticClass:
            "mask space-intro d-flex align-items-center h-100 gradient-custom-3 pb-5",
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              {
                staticClass:
                  "row d-flex justify-content-center align-items-center h-100",
              },
              [
                _c(
                  "div",
                  { staticClass: "col-12 col-md-9 col-lg-7 col-xl-6" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card",
                        staticStyle: { "border-radius": "15px" },
                      },
                      [
                        _c("div", { staticClass: "card-body p-5" }, [
                          _c(
                            "h2",
                            { staticClass: "text-uppercase text-center mb-3" },
                            [
                              _vm._v(
                                "\n                  Create an account\n                "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "form",
                            {
                              on: {
                                submit: function ($event) {
                                  $event.preventDefault()
                                  return _vm.register.apply(null, arguments)
                                },
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "form-outline mb-4" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-label",
                                      attrs: { for: "form3Example1cg" },
                                    },
                                    [_vm._v("First Name:")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.fname,
                                        expression: "form.fname",
                                      },
                                    ],
                                    staticClass: "form-control form-control-lg",
                                    attrs: {
                                      type: "text",
                                      id: "form3Example1cg",
                                      required: "",
                                    },
                                    domProps: { value: _vm.form.fname },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "fname",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.error.first_name,
                                    function (message, index) {
                                      return _c(
                                        "span",
                                        {
                                          key: index,
                                          staticClass: "text-danger",
                                        },
                                        [_vm._v(_vm._s(message))]
                                      )
                                    }
                                  ),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-outline mb-4" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-label",
                                      attrs: { for: "form4Example1cg" },
                                    },
                                    [_vm._v("Last Name")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.lname,
                                        expression: "form.lname",
                                      },
                                    ],
                                    staticClass: "form-control form-control-lg",
                                    attrs: {
                                      type: "text",
                                      id: "form4Example1cg",
                                      required: "",
                                    },
                                    domProps: { value: _vm.form.lname },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "lname",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.error.last_name,
                                    function (message, index) {
                                      return _c(
                                        "span",
                                        {
                                          key: index,
                                          staticClass: "text-danger",
                                        },
                                        [_vm._v(_vm._s(message))]
                                      )
                                    }
                                  ),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-outline mb-4" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-label",
                                      attrs: { for: "form3Example3cg" },
                                    },
                                    [_vm._v("Your Email")]
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
                                    staticClass: "form-control form-control-lg",
                                    attrs: {
                                      type: "email",
                                      id: "form3Example3cg",
                                      required: "",
                                    },
                                    domProps: { value: _vm.form.email },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "email",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.error.email,
                                    function (message, index) {
                                      return _c(
                                        "span",
                                        {
                                          key: index,
                                          staticClass: "text-danger",
                                        },
                                        [_vm._v(_vm._s(message))]
                                      )
                                    }
                                  ),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-outline mb-4" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-label",
                                      attrs: { for: "form3Example4cg" },
                                    },
                                    [_vm._v("Password")]
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
                                    staticClass: "form-control form-control-lg",
                                    attrs: {
                                      type: "password",
                                      id: "form3Example4cg",
                                      required: "",
                                    },
                                    domProps: { value: _vm.form.password },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "password",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.error.password,
                                    function (message, index) {
                                      return _c(
                                        "span",
                                        {
                                          key: index,
                                          staticClass: "text-danger",
                                        },
                                        [_vm._v(_vm._s(message))]
                                      )
                                    }
                                  ),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-outline mb-4" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-label",
                                      attrs: { for: "form3Example4cdg" },
                                    },
                                    [_vm._v("Repeat password")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.confirm,
                                        expression: "form.confirm",
                                      },
                                    ],
                                    staticClass: "form-control form-control-lg",
                                    attrs: {
                                      type: "password",
                                      id: "form3Example4cdg",
                                      required: "",
                                    },
                                    domProps: { value: _vm.form.confirm },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "confirm",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.error.confirm,
                                    function (message, index) {
                                      return _c(
                                        "span",
                                        {
                                          key: index,
                                          staticClass: "text-danger",
                                        },
                                        [_vm._v(_vm._s(message))]
                                      )
                                    }
                                  ),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _vm._m(0),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-center text-muted mt-5 mb-0",
                                },
                                [
                                  _vm._v(
                                    "\n                    Have already an account?\n                    "
                                  ),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "fw-bold text-body",
                                      attrs: { to: "/login" },
                                    },
                                    [_c("u", [_vm._v("Login here")])]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
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
    return _c("div", { staticClass: "d-flex justify-content-center" }, [
      _c(
        "button",
        {
          staticClass:
            "btn btn-primary btn-block btn-lg text-white bg-gradient",
          attrs: { type: "submit" },
        },
        [_vm._v("\n                      Register\n                    ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);