"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Game"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Game.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Game.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_PaginateButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/PaginateButton.vue */ "./resources/js/components/templates/PaginateButton.vue");
/* harmony import */ var _templates_Star_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/Star.vue */ "./resources/js/components/templates/Star.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      games: ""
    };
  },
  components: {
    PaginateButton: _templates_PaginateButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Star: _templates_Star_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: [],
  computed: {},
  methods: {
    limitText: function limitText(input, _int) {
      if (input.length > _int) {
        return input.substring(0, _int) + "...";
      }
      return input;
    },
    nextPage: function nextPage(url) {
      var _this = this;
      axios({
        method: "get",
        url: url
      }).then(function (res) {
        _this.games = res.data;
      })["catch"](function (err) {});
    },
    prevPage: function prevPage(url) {
      var _this2 = this;
      axios({
        method: "get",
        url: url
      }).then(function (res) {
        _this2.games = res.data;
      })["catch"](function (err) {});
    },
    goToPage: function goToPage(url, page) {
      var _this3 = this;
      axios({
        method: "get",
        url: "".concat(url, "?page=").concat(page)
      }).then(function (res) {
        _this3.games = res.data;
      })["catch"](function (err) {});
    },
    getGames: function getGames() {
      var _this4 = this;
      axios({
        method: "get",
        url: "/api/games/"
      }).then(function (res) {
        _this4.games = res.data;
      })["catch"](function (err) {
        console.log(err.response.message);
      });
    }
  },
  updated: function updated() {},
  mounted: function mounted() {
    this.getGames();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {},
  props: ['paginate_data'],
  computed: {},
  methods: {
    next: function next(url) {
      this.$parent.nextPage(url);
    },
    prev: function prev(url) {
      this.$parent.prevPage(url);
    },
    redirect: function redirect(url, page) {
      this.$parent.goToPage(url, page);
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
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

//import name from './

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {},
  props: ['rating'],
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-link[data-v-eaeb5fec] {\r\n    cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.fa-star[data-v-24dcce93] {\r\n    color: rgb(233, 233, 12);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_style_index_0_id_eaeb5fec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_style_index_0_id_eaeb5fec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_style_index_0_id_eaeb5fec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_style_index_0_id_24dcce93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_style_index_0_id_24dcce93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_style_index_0_id_24dcce93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Game.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Game.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Game_vue_vue_type_template_id_3a2c79dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.vue?vue&type=template&id=3a2c79dd&scoped=true& */ "./resources/js/components/Game.vue?vue&type=template&id=3a2c79dd&scoped=true&");
/* harmony import */ var _Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.vue?vue&type=script&lang=js& */ "./resources/js/components/Game.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Game_vue_vue_type_template_id_3a2c79dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Game_vue_vue_type_template_id_3a2c79dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3a2c79dd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Game.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/templates/PaginateButton.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/templates/PaginateButton.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaginateButton_vue_vue_type_template_id_eaeb5fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginateButton.vue?vue&type=template&id=eaeb5fec&scoped=true& */ "./resources/js/components/templates/PaginateButton.vue?vue&type=template&id=eaeb5fec&scoped=true&");
/* harmony import */ var _PaginateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginateButton.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/PaginateButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _PaginateButton_vue_vue_type_style_index_0_id_eaeb5fec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css& */ "./resources/js/components/templates/PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PaginateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginateButton_vue_vue_type_template_id_eaeb5fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaginateButton_vue_vue_type_template_id_eaeb5fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "eaeb5fec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/PaginateButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/templates/Star.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/templates/Star.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Star_vue_vue_type_template_id_24dcce93_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Star.vue?vue&type=template&id=24dcce93&scoped=true& */ "./resources/js/components/templates/Star.vue?vue&type=template&id=24dcce93&scoped=true&");
/* harmony import */ var _Star_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Star.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/Star.vue?vue&type=script&lang=js&");
/* harmony import */ var _Star_vue_vue_type_style_index_0_id_24dcce93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css& */ "./resources/js/components/templates/Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Star_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Star_vue_vue_type_template_id_24dcce93_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Star_vue_vue_type_template_id_24dcce93_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "24dcce93",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/Star.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Game.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Game.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/PaginateButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/templates/PaginateButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginateButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/Star.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/templates/Star.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Star.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/templates/PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_style_index_0_id_eaeb5fec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=style&index=0&id=eaeb5fec&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/templates/Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/templates/Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_style_index_0_id_24dcce93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=style&index=0&id=24dcce93&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Game.vue?vue&type=template&id=3a2c79dd&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Game.vue?vue&type=template&id=3a2c79dd&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_3a2c79dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_3a2c79dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_template_id_3a2c79dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=template&id=3a2c79dd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Game.vue?vue&type=template&id=3a2c79dd&scoped=true&");


/***/ }),

/***/ "./resources/js/components/templates/PaginateButton.vue?vue&type=template&id=eaeb5fec&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/templates/PaginateButton.vue?vue&type=template&id=eaeb5fec&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_template_id_eaeb5fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_template_id_eaeb5fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_template_id_eaeb5fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginateButton.vue?vue&type=template&id=eaeb5fec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=template&id=eaeb5fec&scoped=true&");


/***/ }),

/***/ "./resources/js/components/templates/Star.vue?vue&type=template&id=24dcce93&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/templates/Star.vue?vue&type=template&id=24dcce93&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_template_id_24dcce93_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_template_id_24dcce93_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_template_id_24dcce93_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Star.vue?vue&type=template&id=24dcce93&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=template&id=24dcce93&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Game.vue?vue&type=template&id=3a2c79dd&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Game.vue?vue&type=template&id=3a2c79dd&scoped=true& ***!
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
  return _c("div", [
    _c("div", { staticClass: "container space-intro mb-150" }, [
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.games.data, function (game, index) {
          return _c("div", { key: index, staticClass: "col-lg-2" }, [
            _c("div", { staticClass: "card mb-4" }, [
              _c("img", {
                staticClass: "card-img-top",
                attrs: {
                  src: game.image,
                  alt: "Card image",
                  height: "200",
                  title: game.name,
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "h5",
                  {
                    staticClass: "card-title text-truncate",
                    attrs: { title: game.name },
                  },
                  [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.limitText(game.name, 14)) +
                        "\n            "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-text mb-2" },
                  [
                    _c("Star", { attrs: { rating: game.rating } }),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "mb-2",
                        staticStyle: {
                          height: "90px",
                          "word-wrap": "break-word",
                          "overflow-y": "hidden",
                        },
                        attrs: { title: game.genre },
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.limitText(game.genre, 80)) +
                            "\n              "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { href: game.trailer_link, target: "_blank" },
                    },
                    [_vm._v("Watch Trailer")]
                  ),
                ]),
              ]),
            ]),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-row-reverse" },
        [_c("PaginateButton", { attrs: { paginate_data: _vm.games } })],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=template&id=eaeb5fec&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/PaginateButton.vue?vue&type=template&id=eaeb5fec&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "ul",
      { staticClass: "pagination mb-4" },
      [
        _c("li", { staticClass: "page-item" }, [
          _c(
            "a",
            {
              staticClass: "page-link",
              on: {
                click: function ($event) {
                  return _vm.prev(_vm.paginate_data.prev_page_url)
                },
              },
            },
            [_vm._v("Previous")]
          ),
        ]),
        _vm._v(" "),
        _vm._l(_vm.paginate_data.last_page, function (index) {
          return _c(
            "li",
            {
              key: index,
              staticClass: "page-item",
              class: index == _vm.paginate_data.current_page ? "active" : null,
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  on: {
                    click: function ($event) {
                      return _vm.redirect(_vm.paginate_data.path, index)
                    },
                  },
                },
                [_vm._v(_vm._s(index))]
              ),
            ]
          )
        }),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c(
            "a",
            {
              staticClass: "page-link",
              on: {
                click: function ($event) {
                  return _vm.next(_vm.paginate_data.next_page_url)
                },
              },
            },
            [_vm._v("Next")]
          ),
        ]),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=template&id=24dcce93&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Star.vue?vue&type=template&id=24dcce93&scoped=true& ***!
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
  return _c("div", [
    _vm.rating === 5
      ? _c("div", [
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.rating == 4.5
      ? _c("div", [
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-half" }),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.rating == 4.5
      ? _c("div", [
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-half-full" }),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.rating == 4
      ? _c("div", [
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-o" }),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.rating == 3.5
      ? _c("div", [
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-half-full" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-o" }),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.rating == 3
      ? _c("div", [
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-o" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-o" }),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.rating == 2.5
      ? _c("div", [
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-half-full" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-o" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-o" }),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.rating == 2
      ? _c("div", [
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-o" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-o" }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-star-o" }),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);