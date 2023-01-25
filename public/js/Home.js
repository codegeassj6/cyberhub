"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Home"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_Post_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/Post.vue */ "./resources/js/components/templates/Post.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      message: '',
      datas: null
    };
  },
  components: {
    Post: _templates_Post_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: [],
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    updateMessage: function updateMessage(e) {
      this.message = e.target.innerText;
    },
    postMessage: function postMessage() {
      var _this = this;
      if (this.message) {
        var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
          method: 'POST',
          params: {
            message: this.message
          },
          url: "/api/post/store",
          headers: {
            Authorization: AuthStr
          }
        }).then(function (res) {
          document.getElementById('editable').innerHTML = '';
          _this.message = '';
          _this.getPost();
        })["catch"](function (err) {});
      }
    },
    getPost: function getPost() {
      var _this2 = this;
      if (this.currentUser) {
        var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
          method: 'get',
          url: "/api/post",
          headers: {
            Authorization: AuthStr
          }
        }).then(function (res) {
          _this2.datas = res.data.data;
        })["catch"](function (err) {});
      }
    }
  },
  watch: {
    // $data: {
    //     handler: function(val, oldVal) {
    //         console.log('watcher: ',val);
    //     },
    //     deep: true
    // }
  },
  updated: function updated() {},
  mounted: function mounted() {
    this.getPost();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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

//import name from './

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {},
  props: [],
  computed: {},
  methods: {},
  watch: {
    $data: {
      handler: function handler(val, oldVal) {
        console.log('watcher: ', val);
      },
      deep: true
    }
  },
  updated: function updated() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Comment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue */ "./resources/js/components/templates/Comment.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  components: {
    Comment: _Comment_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['datas'],
  computed: {},
  methods: {},
  watch: {
    $data: {
      handler: function handler(val, oldVal) {
        console.log('watcher: ', val);
      },
      deep: true
    }
  },
  updated: function updated() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#carouselintro img[data-v-f2b6376c]  {\n    height: 600px;\n}\n#carouselintro[data-v-f2b6376c] {\n    margin-top: 26px;\n}\n.name[data-v-f2b6376c] {\n    font-size: 20px;\n}\n.btn-status[data-v-f2b6376c] {\n    padding: 0 !important;\n}\n.border-post[data-v-f2b6376c] {\n    border: 1px solid #e1e1e1;\n}\n#editable[data-v-f2b6376c] {\n    min-height: 100px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.border-post[data-v-038d89e1] {\n    border: 1px solid #e1e1e1;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_038d89e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_038d89e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_038d89e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f2b6376c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/templates/Comment.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/templates/Comment.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Comment_vue_vue_type_template_id_396a43a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue?vue&type=template&id=396a43a4&scoped=true& */ "./resources/js/components/templates/Comment.vue?vue&type=template&id=396a43a4&scoped=true&");
/* harmony import */ var _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/Comment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comment_vue_vue_type_template_id_396a43a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Comment_vue_vue_type_template_id_396a43a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "396a43a4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/Comment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/templates/Post.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/templates/Post.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Post_vue_vue_type_template_id_038d89e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.vue?vue&type=template&id=038d89e1&scoped=true& */ "./resources/js/components/templates/Post.vue?vue&type=template&id=038d89e1&scoped=true&");
/* harmony import */ var _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/Post.vue?vue&type=script&lang=js&");
/* harmony import */ var _Post_vue_vue_type_style_index_0_id_038d89e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css& */ "./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Post_vue_vue_type_template_id_038d89e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Post_vue_vue_type_template_id_038d89e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "038d89e1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/Post.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/Comment.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/templates/Comment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/Post.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/templates/Post.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Post.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_038d89e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/templates/Comment.vue?vue&type=template&id=396a43a4&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/templates/Comment.vue?vue&type=template&id=396a43a4&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_396a43a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_396a43a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_396a43a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comment.vue?vue&type=template&id=396a43a4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=template&id=396a43a4&scoped=true&");


/***/ }),

/***/ "./resources/js/components/templates/Post.vue?vue&type=template&id=038d89e1&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/templates/Post.vue?vue&type=template&id=038d89e1&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_038d89e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_038d89e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_038d89e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Post.vue?vue&type=template&id=038d89e1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=template&id=038d89e1&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      !_vm.currentUser
        ? [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
          ]
        : [
            _c("div", { staticClass: "container space-intro" }, [
              _c("div", { staticClass: "row d-flex" }, [
                _c(
                  "div",
                  { staticClass: "col-md-8" },
                  [
                    _c("div", { staticClass: "card mb-4" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c(
                          "div",
                          { staticClass: "d-flex flex-wrap mb-2 border-post" },
                          [
                            _c("div", {
                              staticClass: "p-2 flex-fill",
                              attrs: {
                                id: "editable",
                                contenteditable: "true",
                              },
                              on: { keyup: _vm.updateMessage },
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "d-flex" }, [
                          _vm._m(4),
                          _vm._v(" "),
                          _vm._m(5),
                          _vm._v(" "),
                          _vm._m(6),
                          _vm._v(" "),
                          _c("div", { staticClass: "p-2 ms-auto" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary px-4",
                                on: { click: _vm.postMessage },
                              },
                              [_vm._v("Post")]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("Post", { attrs: { datas: _vm.datas } }),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(7),
              ]),
            ]),
          ],
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "carousel slide",
        attrs: { id: "carouselintro", "data-bs-ride": "carousel" },
      },
      [
        _c("div", { staticClass: "carousel-indicators" }, [
          _c("button", {
            staticClass: "active",
            attrs: {
              type: "button",
              "data-bs-target": "#carouselintro",
              "data-bs-slide-to": "0",
              "aria-current": "true",
              "aria-label": "Slide 1",
            },
          }),
          _vm._v(" "),
          _c("button", {
            attrs: {
              type: "button",
              "data-bs-target": "#carouselintro",
              "data-bs-slide-to": "1",
              "aria-label": "Slide 2",
            },
          }),
          _vm._v(" "),
          _c("button", {
            attrs: {
              type: "button",
              "data-bs-target": "#carouselintro",
              "data-bs-slide-to": "2",
              "aria-label": "Slide 3",
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "carousel-inner" }, [
          _c("div", { staticClass: "carousel-item active" }, [
            _c("img", {
              staticClass: "d-block w-100",
              attrs: { src: "/img/car1.jpg", alt: "..." },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-caption d-none d-md-block" }, [
              _c("h5", [_vm._v("First slide label")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Some representative placeholder content for the first slide."
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c("img", {
              staticClass: "d-block w-100",
              attrs: { src: "/img/car2.jpg", alt: "..." },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-caption d-none d-md-block" }, [
              _c("h5", [_vm._v("Second slide label")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Some representative placeholder content for the second slide."
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c("img", {
              staticClass: "d-block w-100",
              attrs: { src: "/img/car3.jpg", alt: "..." },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-caption d-none d-md-block" }, [
              _c("h5", [_vm._v("Third slide label")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Some representative placeholder content for the third slide."
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "carousel-control-prev",
            attrs: {
              type: "button",
              "data-bs-target": "#carouselintro",
              "data-bs-slide": "prev",
            },
          },
          [
            _c("span", {
              staticClass: "carousel-control-prev-icon",
              attrs: { "aria-hidden": "true" },
            }),
            _vm._v(" "),
            _c("span", { staticClass: "visually-hidden" }, [
              _vm._v("Previous"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "carousel-control-next",
            attrs: {
              type: "button",
              "data-bs-target": "#carouselintro",
              "data-bs-slide": "next",
            },
          },
          [
            _c("span", {
              staticClass: "carousel-control-next-icon",
              attrs: { "aria-hidden": "true" },
            }),
            _vm._v(" "),
            _c("span", { staticClass: "visually-hidden" }, [_vm._v("Next")]),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "d-flex" }, [
        _c(
          "div",
          { staticClass: "p-4 bg-info flex-fill text-white text-center" },
          [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("i", {
                  staticClass: "fa fa-keyboard-o text-primary",
                  staticStyle: { "font-size": "100px" },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _vm._v(
                  "\n                            Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat. Consectetur esse deserunt in amet minim reprehenderit Lorem non. Incididunt in veniam irure ipsum eu Lorem consectetur mollit consequat. Dolore duis id id Lorem est enim do pariatur cillum nulla nostrud ex laboris. Consectetur cillum labore proident excepteur nisi sint proident adipisicing nostrud. Enim deserunt proident proident sit.\n                        "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _c("div", { staticClass: "btn btn-primary" }, [
                  _vm._v("Browse Games"),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "p-4 bg-primary flex-fill text-white text-center" },
          [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("i", {
                  staticClass: "fa fa-coffee text-primary",
                  staticStyle: { "font-size": "100px" },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _vm._v(
                  "\n                            Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat. Consectetur esse deserunt in amet minim reprehenderit Lorem non. Incididunt in veniam irure ipsum eu Lorem consectetur mollit consequat. Dolore duis id id Lorem est enim do pariatur cillum nulla nostrud ex laboris. Consectetur cillum labore proident excepteur nisi sint proident adipisicing nostrud. Enim deserunt proident proident sit.\n                        "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _c("div", { staticClass: "btn btn-info text-white" }, [
                  _vm._v("Buy Food or Drinks"),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "p-4 bg-info flex-fill text-white text-center" },
          [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("i", {
                  staticClass: "fa fa-print text-primary",
                  staticStyle: { "font-size": "100px" },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body text-dark" }, [
                _vm._v(
                  "\n                            Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat. Consectetur esse deserunt in amet minim reprehenderit Lorem non. Incididunt in veniam irure ipsum eu Lorem consectetur mollit consequat. Dolore duis id id Lorem est enim do pariatur cillum nulla nostrud ex laboris. Consectetur cillum labore proident excepteur nisi sint proident adipisicing nostrud. Enim deserunt proident proident sit.\n                        "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _c("div", { staticClass: "btn btn-primary px-4" }, [
                  _vm._v("Print"),
                ]),
              ]),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("h3", { staticClass: "text-center" }, [_vm._v("Our Shop Location")]),
      _vm._v(" "),
      _c("div", { staticClass: "card p-4 mb-4" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("img", {
              staticClass: "img",
              attrs: { src: "/img/GoogleMapTA.webp", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "text-center mt-4" }, [
              _c("h3", [_vm._v("Lapu-lapu, San Pedro")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center mt-4" }, [
              _vm._v(
                "\n                            Consequat non sunt dolor eiusmod consequat. Deserunt nulla excepteur culpa esse excepteur id cupidatat mollit. Est nulla non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in qui voluptate laborum et do amet consectetur tempor commodo nisi. Fugiat magna deserunt adipisicing irure esse eu consequat duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt quis officia quis officia reprehenderit nisi.\n                        "
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card p-4 mb-4" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("img", {
              staticClass: "img",
              attrs: { src: "/img/GoogleMapTA.webp", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "text-center mt-4" }, [
              _c("h3", [_vm._v("Bangus,San Pedro")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center mt-4" }, [
              _vm._v(
                "\n                            Consequat non sunt dolor eiusmod consequat. Deserunt nulla excepteur culpa esse excepteur id cupidatat mollit. Est nulla non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in qui voluptate laborum et do amet consectetur tempor commodo nisi. Fugiat magna deserunt adipisicing irure esse eu consequat duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt quis officia quis officia reprehenderit nisi.\n                        "
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card p-4 mb-4" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("img", {
              staticClass: "img",
              attrs: { src: "/img/GoogleMapTA.webp", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "text-center mt-4" }, [
              _c("h3", [_vm._v("Bagdhad, San Vicente")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center mt-4" }, [
              _vm._v(
                "\n                            Consequat non sunt dolor eiusmod consequat. Deserunt nulla excepteur culpa esse excepteur id cupidatat mollit. Est nulla non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in qui voluptate laborum et do amet consectetur tempor commodo nisi. Fugiat magna deserunt adipisicing irure esse eu consequat duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt quis officia quis officia reprehenderit nisi.\n                        "
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-4" }, [
      _c("h3", [_vm._v("Our PC Setup")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card" }, [
              _c("img", {
                staticClass: "card-img-top img",
                attrs: { src: "/img/pcbundle.jpg", alt: "pcbundle" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Ryzen 5 5600 / Rx 6600"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-text mb-2" }, [
                  _c("div", [_vm._v("Motherboard: A320m MSI")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Ram: 2x8gb DDR4 3200mhz")]),
                  _vm._v(" "),
                  _c("div", [_vm._v('Monitor: Lenovo 24" IPS')]),
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-primary", attrs: { href: "#" } },
                  [_vm._v("View full specs")]
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card" }, [
              _c("img", {
                staticClass: "card-img-top img",
                attrs: { src: "/img/pcbundle.jpg", alt: "pcbundle" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Ryzen 5 5500 / Rx 580 8gb"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-text mb-2" }, [
                  _c("div", [_vm._v("Motherboard: A320m Gigabyte")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Ram: 2x8gb DDR4 3200mhz")]),
                  _vm._v(" "),
                  _c("div", [_vm._v('Monitor: BenQ 24" IPS')]),
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-primary", attrs: { href: "#" } },
                  [_vm._v("View full specs")]
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card" }, [
              _c("img", {
                staticClass: "card-img-top img",
                attrs: { src: "/img/pcbundle.jpg", alt: "pcbundle" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Intel I3 9100F / Rx 5500XT 8gb"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-text mb-2" }, [
                  _c("div", [_vm._v("Motherboard: A320m MSI")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Ram: 2x8gb DDR4 3200mhz")]),
                  _vm._v(" "),
                  _c("div", [_vm._v('Monitor: Lenovo 24" IPS')]),
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-primary", attrs: { href: "#" } },
                  [_vm._v("View full specs")]
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card" }, [
              _c("img", {
                staticClass: "card-img-top img",
                attrs: { src: "/img/pcbundle.jpg", alt: "pcbundle" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Ryzen 5 3400G / Vega 11"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-text mb-2" }, [
                  _c("div", [_vm._v("Motherboard: A320m Asus")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Ram: 2x8gb DDR4 3200mhz")]),
                  _vm._v(" "),
                  _c("div", [_vm._v('Monitor: Lenovo 24" IPS')]),
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-primary", attrs: { href: "#" } },
                  [_vm._v("View full specs")]
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 mt-4" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card" }, [
              _c("img", {
                staticClass: "card-img-top img",
                attrs: { src: "/img/pcbundle.jpg", alt: "pcbundle" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Ryzen 5 2400G / Vega 7"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-text mb-2" }, [
                  _c("div", [_vm._v("Motherboard: A320m Asus")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Ram: 2x8gb DDR4 3200mhz")]),
                  _vm._v(" "),
                  _c("div", [_vm._v('Monitor: Lenovo 24" IPS')]),
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-primary", attrs: { href: "#" } },
                  [_vm._v("View full specs")]
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 mt-4" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card" }, [
              _c("img", {
                staticClass: "card-img-top img",
                attrs: { src: "/img/pcbundle.jpg", alt: "pcbundle" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Ryzen 3 3200G / Vega 8"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-text mb-2" }, [
                  _c("div", [_vm._v("Motherboard: A320m Asus")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Ram: 2x8gb DDR4 3200mhz")]),
                  _vm._v(" "),
                  _c("div", [_vm._v('Monitor: Lenovo 24" IPS')]),
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-primary", attrs: { href: "#" } },
                  [_vm._v("View full specs")]
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 mt-4" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card" }, [
              _c("img", {
                staticClass: "card-img-top img",
                attrs: { src: "/img/pcbundle.jpg", alt: "pcbundle" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Ryzen 5 2200G / Vega 8"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-text mb-2" }, [
                  _c("div", [_vm._v("Motherboard: A320m Asus")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Ram: 2x8gb DDR4 3200mhz")]),
                  _vm._v(" "),
                  _c("div", [_vm._v('Monitor: Lenovo 24" IPS')]),
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-primary", attrs: { href: "#" } },
                  [_vm._v("View full specs")]
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 mt-4" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card" }, [
              _c("img", {
                staticClass: "card-img-top img",
                attrs: { src: "/img/pcbundle.jpg", alt: "pcbundle" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Athlon 3000G / Vega 3"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-text mb-2" }, [
                  _c("div", [_vm._v("Motherboard: A320m Asus")]),
                  _vm._v(" "),
                  _c("div", [_vm._v("Ram: 2x8gb DDR4 3200mhz")]),
                  _vm._v(" "),
                  _c("div", [_vm._v('Monitor: Lenovo 24" IPS')]),
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn btn-primary", attrs: { href: "#" } },
                  [_vm._v("View full specs")]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2" }, [
      _c("a", { staticClass: "text-dark", attrs: { href: "#!" } }, [
        _c("i", { staticClass: "fa fa-smile-o fa-lg" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2" }, [
      _c("a", { staticClass: "text-dark", attrs: { href: "#!" } }, [
        _c("i", { staticClass: "fa fa-file-photo-o fa-lg" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2" }, [
      _c("a", { staticClass: "text-dark", attrs: { href: "#!" } }, [
        _c("i", { staticClass: "fa fa-file-video-o fa-lg" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "card-title" }, [
            _vm._v(
              "\n                                Ads\n                            "
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-text" }, [_vm._v("s")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=template&id=396a43a4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=template&id=396a43a4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "d-flex flex-row mb-2" }, [
        _c("img", {
          staticClass: "rounded-image",
          attrs: {
            src: "https://i.imgur.com/9AZ2QX1.jpg",
            width: "50",
            height: "50",
          },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-column ms-3" }, [
          _c("span", { staticClass: "name" }, [_vm._v("Daniel Frozer")]),
          _vm._v(" "),
          _c("small", { staticClass: "comment-text" }, [
            _vm._v("I like this alot! thanks alot"),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex flex-row align-items-center status" },
            [
              _c("small", [_vm._v("Like")]),
              _vm._v(" "),
              _c("small", [_vm._v("Reply")]),
              _vm._v(" "),
              _c("small", [_vm._v("Translate")]),
              _vm._v(" "),
              _c("small", [_vm._v("18 mins")]),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "card-footer border-0 px-3 py-3",
          staticStyle: { "background-color": "#f8f9fa" },
        },
        [
          _c("div", { staticClass: "d-flex flex-start w-100" }, [
            _c("img", {
              staticClass: "rounded-circle shadow-1-strong me-3",
              attrs: {
                src: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp",
                alt: "avatar",
                width: "40",
                height: "40",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "form-outline w-100" }, [
              _c("div", { staticClass: "d-flex flex-wrap border-post" }, [
                _c("div", {
                  staticClass: "p-2 flex-fill bg-white",
                  attrs: { contenteditable: "true" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "float-end mb-3 mt-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-sm",
                attrs: { type: "button" },
              },
              [_vm._v("Post comment")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-outline-primary btn-sm",
                attrs: { type: "button" },
              },
              [_vm._v("Cancel")]
            ),
          ]),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=template&id=038d89e1&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=template&id=038d89e1&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    _vm._l(_vm.datas, function (data, index) {
      return _c("div", { key: index, staticClass: "card mb-3 shadow" }, [
        _c("div", { staticClass: "d-flex justify-content-between p-2 px-3" }, [
          _c("div", { staticClass: "d-flex flex-row align-items-center" }, [
            _c("img", {
              attrs: {
                src:
                  "/storage/user/" +
                  data.user.id +
                  "/img/" +
                  data.user.profile_img,
                height: "50",
                width: "50",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-column ms-2" }, [
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v(
                  _vm._s(data.user.first_name) +
                    " " +
                    _vm._s(data.user.last_name) +
                    " "
                ),
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-mute" }, [_vm._v("20 mins")]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(0, true),
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "img",
          attrs: { src: "https://i.imgur.com/xhzhaGA.jpg", height: "300" },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "p-2" }, [
          _c("pre", { staticClass: "text-justify" }, [
            _vm._v(_vm._s(data.message)),
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm._m(1, true),
          _vm._v(" "),
          _vm._m(2, true),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "comments" }, [_c("Comment")], 1),
        ]),
      ])
    }),
    0
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-row mt-1 ellipsis" }, [
      _c("i", { staticClass: "fa fa-ellipsis-h" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "btn-group d-flex mb-2", attrs: { role: "group" } },
      [
        _c(
          "a",
          { staticClass: "btn btn-outline-primary w-100", attrs: { href: "" } },
          [_c("i", { staticClass: "fa fa-thumbs-up" }), _vm._v(" Like")]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "btn btn-outline-primary w-100", attrs: { href: "" } },
          [
            _c("i", { staticClass: "fa fa-commenting-o" }),
            _vm._v(" 2 Comments"),
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "btn btn-outline-primary w-100", attrs: { href: "" } },
          [_c("i", { staticClass: "fa fa-share" }), _vm._v(" Share")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex justify-content-between align-items-center" },
      [
        _c(
          "div",
          { staticClass: "d-flex flex-row icons d-flex align-items-center" },
          [
            _c("i", { staticClass: "fa fa-heart" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-smile-o ms-2" }),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-row muted-color" }, [
          _c("span", [_vm._v("2 comments")]),
          _vm._v(" "),
          _c("span", { staticClass: "ms-2" }, [_vm._v("Share")]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);