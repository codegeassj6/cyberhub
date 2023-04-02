"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["PostPage"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      currentFile: '',
      post: ''
    };
  },
  components: {
    Post: _templates_Post_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['page'],
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    prevImage: function prevImage(data) {
      if (this.currentFile != 0) {
        this.currentFile--;
      }
    },
    nextImage: function nextImage(data) {
      if (data.get_attach_files.length - 1 > this.currentFile) {
        this.currentFile++;
      }
    },
    goBack: function goBack(e) {
      if (e.target.id == 'go_back' || e.keyCode == 27) {
        this.$router.back();
      }
    },
    getFileFormat: function getFileFormat(fileName) {
      var re = /(?:\.([^.]+))?$/;
      var ext = re.exec(fileName)[1];
      return ext.trim();
    }
  },
  watch: {
    $data: {
      handler: function handler(val, oldVal) {
        console.log('Watch PostPage: ', val);
      },
      deep: true
    }
  },
  updated: function updated() {},
  // deactivated() {
  //     // when you visit the page it will save the previous image so we will destroy it
  //     this.$destroy();
  // },
  mounted: function mounted() {
    var _this = this;
    this.page ? this.currentFile = this.page : 0;
    var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
    axios({
      method: 'get',
      url: "/api/post/show/".concat(this.$route.params.id),
      headers: {
        Authorization: AuthStr
      }
    }).then(function (res) {
      _this.post = res.data;
      console.log(_this.post);
    })["catch"](function (err) {});
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.padding-intro[data-v-2a25f53a] {\r\n    padding-top: 80px;\n}\n.img-height[data-v-2a25f53a] {\r\n    height: 80vh;\n}\n.absolute-center-left[data-v-2a25f53a] {\r\n    left: 1%;\r\n    top: 45%;\n}\n.absolute-center-right[data-v-2a25f53a] {\r\n    right: 1%;\r\n    top: 45%;\n}\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_id_2a25f53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_id_2a25f53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_id_2a25f53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/PostPage.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/PostPage.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostPage_vue_vue_type_template_id_2a25f53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostPage.vue?vue&type=template&id=2a25f53a&scoped=true& */ "./resources/js/components/PostPage.vue?vue&type=template&id=2a25f53a&scoped=true&");
/* harmony import */ var _PostPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostPage.vue?vue&type=script&lang=js& */ "./resources/js/components/PostPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _PostPage_vue_vue_type_style_index_0_id_2a25f53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css& */ "./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostPage_vue_vue_type_template_id_2a25f53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PostPage_vue_vue_type_template_id_2a25f53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2a25f53a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PostPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PostPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/PostPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_id_2a25f53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/PostPage.vue?vue&type=template&id=2a25f53a&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/PostPage.vue?vue&type=template&id=2a25f53a&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_template_id_2a25f53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_template_id_2a25f53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_template_id_2a25f53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostPage.vue?vue&type=template&id=2a25f53a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=template&id=2a25f53a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=template&id=2a25f53a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=template&id=2a25f53a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      "div",
      {
        staticClass: "bg-dark vh-100",
        attrs: { id: "go_back" },
        on: {
          click: function ($event) {
            return _vm.goBack($event)
          },
          keydown: function ($event) {
            return _vm.goBack($event)
          },
        },
      },
      _vm._l(_vm.post.data, function (data, index) {
        return _c("div", { key: index, staticClass: "container" }, [
          _c("div", { staticClass: "padding-intro" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "card-title border-bottom" }, [
                  _c("div", { staticClass: "d-flex" }, [
                    _c("div", { staticClass: "mb-1" }, [
                      _c(
                        "a",
                        {
                          staticClass: "text-secondary h4",
                          attrs: { role: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.$router.back()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "fa fa-arrow-circle-left" }),
                          _vm._v(
                            " Go back\n                                    "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-text" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-8" }, [
                      _c(
                        "div",
                        { staticClass: "card" },
                        _vm._l(data.get_attach_files, function (file, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "position-relative" },
                            [
                              _vm.currentFile == index
                                ? _c("div", [
                                    _vm.getFileFormat(file.file_link) ==
                                      "jpg" ||
                                    _vm.getFileFormat(file.file_link) ==
                                      "jpeg" ||
                                    _vm.getFileFormat(file.file_link) == "png"
                                      ? _c("img", {
                                          staticClass: "img-height w-100",
                                          attrs: {
                                            src:
                                              "/storage/post/file/" +
                                              file.file_link,
                                            alt: "",
                                          },
                                        })
                                      : _c(
                                          "video",
                                          {
                                            staticClass:
                                              "w-100 img-height bg-dark",
                                            attrs: { controls: "" },
                                          },
                                          [
                                            _c("source", {
                                              attrs: {
                                                src:
                                                  "/storage/post/file/" +
                                                  file.file_link,
                                                type: "video/mp4",
                                              },
                                            }),
                                          ]
                                        ),
                                    _vm._v(" "),
                                    _vm.currentFile > 0
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "position-absolute mx-0 absolute-center-left",
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "text-secondary p-3",
                                                attrs: { role: "button" },
                                                on: { click: _vm.prevImage },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fa fa-arrow-left fa-2x",
                                                }),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.currentFile + 1 !=
                                    data.get_attach_files.length
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "position-absolute mx-0 absolute-center-right",
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "text-secondary p-3",
                                                attrs: { role: "button" },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.nextImage(data)
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fa fa-arrow-right fa-2x",
                                                }),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ])
                                : _vm._e(),
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      data.get_attach_files
                        ? _c("div", { staticClass: "text-center mt-1 h5" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.currentFile + 1) +
                                " / " +
                                _vm._s(data.get_attach_files.length) +
                                "\n                                    "
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-4 pe-2 ps-0" },
                      [_c("Post", { attrs: { datas: _vm.post } })],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);