"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Save"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Save.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Save.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_SaveListing_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/SaveListing.vue */ "./resources/js/components/templates/SaveListing.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      input_file: "",
      isUploading: false,
      saves: ""
    };
  },
  components: {
    SaveListing: _templates_SaveListing_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: [],
  computed: {},
  methods: {
    dragOver: function dragOver(e) {
      e.preventDefault();
      this.$refs.dropbox.classList.add("shadow", "border-5");
    },
    dragLeave: function dragLeave() {
      this.$refs.dropbox.classList.remove("shadow", "border-5");
    },
    dropped: function dropped(e) {
      e.preventDefault();
      if (e.dataTransfer.files[0].size > 20480000) {
        this.$parent.notification.message.push("File is too large. Only 20MB allowed!");
        return;
      }
      this.input_file = e.dataTransfer.files[0];
      this.isUploading = true;
    },
    inputFile: function inputFile(e) {
      if (e.target.files[0].size > 20480000) {
        this.$parent.notification.message.push("File is too large. Only 20MB allowed!");
        return;
      }
      this.input_file = e.target.files[0] || e.dataTransfer.files[0];
      this.isUploading = true;
    },
    UploadFile: function UploadFile() {
      var _this = this;
      var formData = new FormData();
      formData.append("file", this.input_file);
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios.post("/api/save", formData, {
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this.isUploading = false;
        _this.input_file = "";
        _this.saves = res.data;
      })["catch"](function (err) {});
    },
    cancelUpload: function cancelUpload() {
      this.isUploading = false;
    }
  },
  updated: function updated() {},
  mounted: function mounted() {
    var _this2 = this;
    var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
    axios({
      method: "get",
      url: "/api/save",
      headers: {
        Authorization: AuthStr
      }
    }).then(function (res) {
      _this2.saves = res.data;
    })["catch"](function (err) {});
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/SaveListing.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/SaveListing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

//import name from './

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {},
  props: ["saves"],
  computed: {},
  methods: {
    download: function download(data) {
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "get",
        url: "/api/save/" + data.id,
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {})["catch"](function (err) {});
    },
    deleteSave: function deleteSave(data) {
      var _this = this;
      this.saves.forEach(function (elem, index) {
        if (elem.id == data.id) {
          _this.saves.splice(index, 1);
        }
      });
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "delete",
        url: "/api/save/" + data.id,
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {})["catch"](function (err) {});
    }
  },
  watch: {
    $data: {
      handler: function handler(val, oldVal) {
        console.log("watcher: ", val);
      },
      deep: true
    }
  },
  updated: function updated() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/Save.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Save.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Save_vue_vue_type_template_id_281631e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Save.vue?vue&type=template&id=281631e8& */ "./resources/js/components/Save.vue?vue&type=template&id=281631e8&");
/* harmony import */ var _Save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Save.vue?vue&type=script&lang=js& */ "./resources/js/components/Save.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Save_vue_vue_type_template_id_281631e8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Save_vue_vue_type_template_id_281631e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Save.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/templates/SaveListing.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/templates/SaveListing.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SaveListing_vue_vue_type_template_id_cc1e3ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveListing.vue?vue&type=template&id=cc1e3ad4&scoped=true& */ "./resources/js/components/templates/SaveListing.vue?vue&type=template&id=cc1e3ad4&scoped=true&");
/* harmony import */ var _SaveListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaveListing.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/SaveListing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SaveListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaveListing_vue_vue_type_template_id_cc1e3ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SaveListing_vue_vue_type_template_id_cc1e3ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cc1e3ad4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/SaveListing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Save.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Save.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Save.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Save.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/SaveListing.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/templates/SaveListing.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SaveListing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/SaveListing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Save.vue?vue&type=template&id=281631e8&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Save.vue?vue&type=template&id=281631e8& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Save_vue_vue_type_template_id_281631e8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Save_vue_vue_type_template_id_281631e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Save_vue_vue_type_template_id_281631e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Save.vue?vue&type=template&id=281631e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Save.vue?vue&type=template&id=281631e8&");


/***/ }),

/***/ "./resources/js/components/templates/SaveListing.vue?vue&type=template&id=cc1e3ad4&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/templates/SaveListing.vue?vue&type=template&id=cc1e3ad4&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveListing_vue_vue_type_template_id_cc1e3ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveListing_vue_vue_type_template_id_cc1e3ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveListing_vue_vue_type_template_id_cc1e3ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SaveListing.vue?vue&type=template&id=cc1e3ad4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/SaveListing.vue?vue&type=template&id=cc1e3ad4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Save.vue?vue&type=template&id=281631e8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Save.vue?vue&type=template&id=281631e8& ***!
  \****************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-8" },
            [
              _c(
                "div",
                {
                  staticClass: "d-flex justify-content-center mb-3",
                  attrs: { id: "myId" },
                },
                [
                  _c(
                    "label",
                    {
                      ref: "dropbox",
                      staticClass: "pointer border border-info",
                      attrs: { for: "input_upload" },
                      on: { dragover: _vm.dragOver, dragleave: _vm.dragLeave },
                    },
                    [
                      _c("div", { staticClass: "card border-0" }, [
                        _c(
                          "div",
                          {
                            staticClass: "m-auto bg-muted text-center",
                            staticStyle: {
                              height: "200px",
                              padding: "50px",
                              width: "450px",
                            },
                            on: { drop: _vm.dropped },
                          },
                          [
                            _c("input", {
                              staticClass: "d-none",
                              attrs: {
                                type: "file",
                                id: "input_upload",
                                accept: ".zip,.rar,.7zip",
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.inputFile($event)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa fa-upload fa-5x text-primary",
                            }),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.isUploading
                ? _c("div", { staticClass: "d-flex mb-4" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-primary",
                          on: { click: _vm.UploadFile },
                        },
                        [_vm._v("\n                Upload\n              ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          on: { click: _vm.cancelUpload },
                        },
                        [
                          _c("i", { staticClass: "fa fa-close" }),
                          _vm._v(" Cancel\n              "),
                        ]
                      ),
                    ]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("SaveListing", { attrs: { saves: _vm.saves } }),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [_vm._v("s")]),
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
    return _c("div", { staticClass: "progress flex-fill mt-2 me-4" }, [
      _c(
        "div",
        {
          staticClass:
            "progress-bar progress-bar-striped progress-bar-animated",
          staticStyle: { width: "0%" },
        },
        [_vm._v("\n                0%\n              ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/SaveListing.vue?vue&type=template&id=cc1e3ad4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/SaveListing.vue?vue&type=template&id=cc1e3ad4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "list-group" },
      _vm._l(_vm.saves, function (save, index) {
        return _c("li", { key: index, staticClass: "list-group-item" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("div", { staticClass: "me-2 bg-outline-info" }, [
              _vm._v(_vm._s(save.file_name)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-auto" }, [
              _c("span", { staticClass: "me-3" }, [
                _vm._v(_vm._s(save.created_at)),
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "text-primary me-2",
                  attrs: { href: "#!" },
                  on: {
                    click: function ($event) {
                      return _vm.download(save)
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-download" }),
                  _vm._v(" Download"),
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "text-danger",
                  attrs: { href: "#!" },
                  on: {
                    click: function ($event) {
                      return _vm.deleteSave(save)
                    },
                  },
                },
                [_c("i", { staticClass: "fa fa-trash-o" }), _vm._v(" Delete")]
              ),
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