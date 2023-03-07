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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      image: [],
      attach_exist: false,
      attach_images: [],
      form_data: '',
      posts: '',
      edit_data: '',
      edit: {
        attachment: []
      }
    };
  },
  components: {
    Post: _templates_Post_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {},
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    uploadTriggerInput: function uploadTriggerInput() {
      var elem = this.$refs.input_upload;
      if (elem && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        elem.dispatchEvent(evt);
      }
    },
    postMessage: function postMessage() {
      var _this = this;
      console.log(document.getElementById('editable').innerText);
      if (document.getElementById('editable').innerText.length || this.form_data) {
        var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
          method: 'POST',
          params: {
            message: document.getElementById('editable').innerText,
            image: this.form_data
          },
          data: this.form_data,
          url: "/api/post",
          headers: {
            Authorization: AuthStr
          }
        }).then(function (res) {
          _this.attach_exist = false;
          _this.form_data = '';
          document.getElementById('editable').innerHTML = '';
          _this.message = '';
          _this.posts = res.data;
        })["catch"](function (err) {
          console.log(err.data);
        });
      }
    },
    attachImage: function attachImage(e) {
      this.attach_exist = true;
      if (this.$refs.input_upload.files.length) {
        this.attach_images = [];
        var formData = new FormData();
        for (var index = 0; index < this.$refs.input_upload.files.length; index++) {
          this.attach_images.push(URL.createObjectURL(this.$refs.input_upload.files[index]));
          formData.append('image[]', this.$refs.input_upload.files[index]);
        }
        this.form_data = formData;
      }
    },
    removeAttachInPost: function removeAttachInPost(img) {
      var index = this.attach_images.indexOf(img);
      if (index > -1) {
        this.attach_images.splice(index, 1);
      }
    },
    removeAttachInEdit: function removeAttachInEdit(e, img) {
      this.edit.attachment.push(img.id);
      var index = this.edit_data.get_attach_images.indexOf(img);
      if (index > -1) {
        this.edit_data.get_attach_images.splice(index, 1);
      }
    },
    emitFromChild: function emitFromChild(data) {
      this.edit_data = data;
      this.edit.attachment = [];
      // document.getElementById('editable_modal').innerText = this.edit_data.message;
      // this.$refs.edit_modal_contenteditable.innerText = this.edit_data.message;
    },
    editPost: function editPost(data) {
      console.log(document.getElementById('editable_modal').innerText);
      return;
      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'patch',
        params: {
          message: this.$refs.edit_modal_contenteditable.innerText,
          image: this.edit.attachment
        },
        url: "/api/post/".concat(data.id),
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {})["catch"](function (err) {});
    }
  },
  watch: {
    $data: {
      handler: function handler(val, oldVal) {
        console.log('Watch Home: ', val);
      },
      deep: true
    }
  },
  updated: function updated() {},
  beforeMount: function beforeMount() {},
  // create prev route data (this.prevRoute)
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.prevRoute = from;
    });
  },
  // activated() {
  //     console.log('activate');
  // },
  // deactivated() {
  //     console.log('deactivate');
  // },
  mounted: function mounted() {
    var _this2 = this;
    if (this.$store.getters.currentUser.token) {
      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'get',
        params: {
          id: 1
        },
        url: "/api/post",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this2.posts = res.data;
      })["catch"](function (err) {});
    }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      comments: '',
      edit: {
        comment: ''
      }
    };
  },
  components: {},
  props: ['post_id'],
  computed: {
    profileImage: function profileImage() {
      return this.$store.getters.currentUser.profile_img ? '/storage/user/' + this.$store.getters.currentUser.id + '/img/' + this.$store.getters.currentUser.profile_img : 'https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp';
    }
  },
  methods: {
    postComment: function postComment(post_id) {
      var _this = this;
      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'post',
        params: {
          post_id: this.post_id,
          comment: document.getElementById("content_".concat(post_id)).innerText
        },
        url: "/api/comment",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        document.getElementById("content_".concat(post_id)).innerText = '';
        _this.comments.push(res.data);
      })["catch"](function (err) {});
    },
    likeComment: function likeComment(e, data) {
      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'post',
        params: {
          id: data.id
        },
        url: "/api/comment/like",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        if (e.target.classList.contains('text-secondary')) {
          e.target.classList.remove('text-secondary');
          e.target.classList.add('text-primary');
        } else {
          e.target.classList.remove('text-primary');
          e.target.classList.add('text-secondary');
        }
      })["catch"](function (err) {});
    },
    deleteComment: function deleteComment(comment) {
      var _this2 = this;
      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'delete',
        url: "/api/comment/".concat(comment.id),
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this2.comments.forEach(function (elem, index) {
          if (elem.id == comment.id) {
            _this2.comments.splice(index, 1);
          }
        });
      })["catch"](function (err) {});
    },
    editComment: function editComment(post_id) {
      var _this3 = this;
      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'patch',
        params: {
          message: document.getElementById("content_".concat(post_id)).innerText
        },
        url: "/api/comment/".concat(this.edit.comment.id),
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this3.comments.forEach(function (elem, index) {
          if (elem == _this3.edit.comment) {
            _this3.comments[index].message = document.getElementById("content_".concat(post_id)).innerText;
          }
        });
        _this3.edit.comment = '';
        document.getElementById("content_".concat(post_id)).innerText = '';
      })["catch"](function (err) {});
    },
    initEditComment: function initEditComment(comment, post_id) {
      this.edit.comment = comment;
      comment.edit_mode = 1;
      document.getElementById("content_".concat(post_id)).innerText = comment.message;
    },
    cancelEditComment: function cancelEditComment(post_id) {
      document.getElementById("content_".concat(post_id)).innerText = '';
      // comment.edit_mode = 0;
      this.edit.comment = '';
    }
  },
  watch: {
    $data: {
      handler: function handler(val, oldVal) {
        console.log('Watch Comment: ', val);
      },
      deep: true
    }
  },
  updated: function updated() {},
  beforeMount: function beforeMount() {
    var _this4 = this;
    var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
    axios({
      method: 'get',
      params: {
        post_id: this.post_id
      },
      url: "/api/comment/",
      headers: {
        Authorization: AuthStr
      }
    }).then(function (res) {
      _this4.comments = res.data;
    })["catch"](function (err) {});
  },
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      // datas: '',
    };
  },
  components: {
    Comment: _Comment_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['datas'],
  computed: {},
  methods: {
    computedPostImage: function computedPostImage(image_link) {
      return "/storage/post/img/".concat(image_link);
    },
    likePost: function likePost(e, data) {
      // if(e.target.classList.contains('text-primary')) {
      //     e.target.classList.remove('text-primary');
      // } else {
      //     e.target.classList.add('text-primary');
      // }

      data.authLikes = !data.authLikes;
      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'post',
        params: {
          id: data.id
        },
        url: "/api/post/like",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {})["catch"](function (err) {});
    },
    deletePost: function deletePost(data) {
      var _this = this;
      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'delete',
        url: "/api/post/".concat(data.id),
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        // this.datas.forEach((elem, index) => {console.log(elem);
        //     if(elem.id == data.id) {
        //         this.datas.splice(index, 1);
        //     }
        // });
        _this.datas.data.forEach(function (elem, index) {
          if (elem.id == data.id) {
            _this.datas.data.splice(index, 1);
          }
        });
      })["catch"](function (err) {});
    },
    emitDataByClick: function emitDataByClick(data) {
      this.$emit('clicked', data);
    }
  },
  watch: {
    $data: {
      handler: function handler(val, oldVal) {
        console.log('Watch Post: ', val);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#carouselintro img[data-v-f2b6376c]  {\n    height: 600px;\n}\n#carouselintro[data-v-f2b6376c] {\n    margin-top: 26px;\n}\n.name[data-v-f2b6376c] {\n    font-size: 20px;\n}\n.btn-status[data-v-f2b6376c] {\n    padding: 0 !important;\n}\n.min-100[data-v-f2b6376c] {\n    min-height: 100px;\n}\n.dropbox-img[data-v-f2b6376c] {\n    height: 150px;\n}\n.dropbox-img img[data-v-f2b6376c] {\n    height: 100%;\n}\n.img_attach_remove[data-v-f2b6376c] {\n    right: 0%;\n    top: 0%;\n    color: #ffffff;\n}\n\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-comment[data-v-396a43a4] {\n    background: #f1f1f1;\n}\n", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.border-post[data-v-038d89e1] {\n    border: 1px solid #e1e1e1;\n}\n.attach_image[data-v-038d89e1] {\n    height: 350px;\n}\n.position-absolute[data-v-038d89e1] {\n    top: 50%;\n    left: 50%;\n    right: 0;\n}\n.btn-outline-secondary[data-v-038d89e1]:hover {\n    background: #ffffff;\n    color: #0d6efd !important;\n}\n\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_396a43a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_396a43a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_396a43a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Comment_vue_vue_type_style_index_0_id_396a43a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css& */ "./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_396a43a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css&");


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
                      _vm._m(4),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _vm._m(5),
                        _vm._v(" "),
                        _c(
                          "div",
                          { class: _vm.attach_exist ? "d-flex" : "d-none" },
                          [
                            _c("div", { staticClass: "flex-fill" }, [
                              _c(
                                "div",
                                { staticClass: "d-flex" },
                                _vm._l(
                                  _vm.attach_images,
                                  function (img, index) {
                                    return _c(
                                      "div",
                                      {
                                        key: index,
                                        staticClass:
                                          "card w-25 position-relative dropbox-img me-2",
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "img",
                                          attrs: { src: img, alt: "" },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "position-absolute img_attach_remove",
                                          },
                                          [
                                            _c("button", {
                                              staticClass:
                                                "btn btn-close border bg-primary",
                                              on: {
                                                click: function ($event) {
                                                  return _vm.removeAttachInPost(
                                                    img
                                                  )
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    )
                                  }
                                ),
                                0
                              ),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-footer text-muted" }, [
                        _c("div", { staticClass: "d-flex" }, [
                          _vm._m(6),
                          _vm._v(" "),
                          _c("div", [
                            _c("div", {}, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-light px-4 btn-sm",
                                  attrs: { type: "button" },
                                  on: { click: _vm.uploadTriggerInput },
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-file-image-o fa-lg",
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                ref: "input_upload",
                                staticClass: "d-none",
                                attrs: {
                                  type: "file",
                                  accept: "image/png, image/jpg, image/jpeg",
                                  multiple: "",
                                },
                                on: { change: _vm.attachImage },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "ms-auto" }, [
                            _c("div", {}, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-primary btn-sm px-5 shadow",
                                  on: { click: _vm.postMessage },
                                },
                                [_vm._v("Post")]
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("Post", {
                      attrs: { datas: _vm.posts },
                      on: { clicked: _vm.emitFromChild },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal", attrs: { id: "editModal" } }, [
              _c("div", { staticClass: "modal-dialog modal-lg" }, [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "div",
                      { staticClass: "card-body" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-column mb-2 rounded border",
                          },
                          [
                            _c(
                              "div",
                              {
                                ref: "edit_modal_contenteditable",
                                staticClass:
                                  "div-like-pre flex-fill p-2 min-100",
                                attrs: {
                                  contenteditable: "true",
                                  id: "editable_modal",
                                },
                              },
                              [_vm._v(_vm._s(_vm.edit_data.message))]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _vm._l(
                          _vm.edit_data.get_attach_images,
                          function (img, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                                ref: "display_attachment",
                                refInFor: true,
                                staticClass:
                                  "card d-inline-flex w-25 position-relative dropbox-img",
                              },
                              [
                                _c("img", {
                                  staticClass: "img",
                                  attrs: {
                                    src: "/storage/post/img/" + img.image_link,
                                    alt: "",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "position-absolute img_attach_remove",
                                  },
                                  [
                                    _c("button", {
                                      staticClass:
                                        "btn btn-close border bg-primary",
                                      on: {
                                        click: function ($event) {
                                          return _vm.removeAttachInEdit(
                                            $event,
                                            img
                                          )
                                        },
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            )
                          }
                        ),
                      ],
                      2
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button", "data-bs-dismiss": "modal" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.editPost(_vm.edit_data)
                          },
                        },
                      },
                      [_vm._v("Save")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { type: "button", "data-bs-dismiss": "modal" },
                      },
                      [_vm._v("Cancel")]
                    ),
                  ]),
                ]),
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
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "h6" }, [_vm._v("What's up")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex flex-column mb-2 rounded border" },
      [
        _c("div", {
          staticClass: "flex-fill p-2 min-100",
          attrs: { id: "editable", contenteditable: "true" },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-light px-2 btn-sm dropdown-toggle",
          attrs: { type: "button", "data-bs-toggle": "dropdown" },
        },
        [_c("i", { staticClass: "fa fa-smile-o fa-lg" })]
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "dropdown-menu" }, [
        _c("li", [
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _vm._v("Link 1"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _vm._v("Link 2"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _vm._v("Link 3"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Modal Heading")]),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: { type: "button", "data-bs-dismiss": "modal" },
      }),
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
  return _c(
    "div",
    [
      _vm._l(_vm.comments, function (comment, index) {
        return _c("div", { key: index }, [
          _c("div", { staticClass: "d-flex flex-row mb-2" }, [
            _c("img", {
              staticClass: "rounded-image",
              attrs: {
                src:
                  "/storage/user/" +
                  comment.user_details.id +
                  "/img/" +
                  comment.user_details.profile_img,
                width: "50",
                height: "50",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex" }, [
              _c("div", { staticClass: "d-flex flex-column ms-3" }, [
                _c("span", { staticClass: "name" }, [
                  _vm._v(
                    _vm._s(
                      comment.user_details.first_name +
                        " " +
                        comment.user_details.last_name
                    )
                  ),
                ]),
                _vm._v(" "),
                _c("pre", { staticClass: "comment-text" }, [
                  _vm._v(_vm._s(comment.message)),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex flex-row align-items-center" },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "me-2",
                        class: comment.authLikes
                          ? "text-primary"
                          : "text-secondary",
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.likeComment($event, comment)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                            Like\n                        "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "me-2 text-secondary",
                        attrs: { role: "button" },
                      },
                      [_vm._v("Reply")]
                    ),
                    _vm._v(" "),
                    _c("small", [_vm._v("18 mins")]),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ms-auto" }, [
              _c("div", { staticClass: "dropdown dropdown-menu-end" }, [
                _vm._m(0, true),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "dropdown-menu",
                    attrs: { "aria-labelledby": "triggerId" },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.initEditComment(comment, _vm.post_id)
                          },
                        },
                      },
                      [_vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.deleteComment(comment)
                          },
                        },
                      },
                      [_vm._v("Delete")]
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer border-0 px-3 py-3 bg-comment" }, [
        _c("div", { staticClass: "d-flex flex-start w-100" }, [
          _c("img", {
            staticClass: "rounded-circle shadow-1-strong me-3",
            attrs: {
              src: _vm.profileImage,
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
                attrs: {
                  contenteditable: "true",
                  id: "content_" + _vm.post_id,
                },
              }),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "float-end mb-3 mt-4" }, [
          !_vm.edit.comment
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.postComment(_vm.post_id)
                    },
                  },
                },
                [_vm._v("Post comment")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.edit.comment
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.editComment(_vm.post_id)
                    },
                  },
                },
                [_vm._v("Edit comment")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.edit.comment
            ? _c(
                "button",
                {
                  staticClass: "btn btn-danger btn-sm",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.cancelEditComment(_vm.post_id)
                    },
                  },
                },
                [_vm._v("Cancel")]
              )
            : _vm._e(),
        ]),
      ]),
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
      "a",
      {
        staticClass: "p-2",
        attrs: {
          role: "button",
          id: "triggerId",
          "data-bs-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "fa fa-ellipsis-h" })]
    )
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
    _vm._l(_vm.datas.data, function (data, index) {
      return _c("div", { key: index, staticClass: "card mb-3" }, [
        _c("div", { staticClass: "d-flex p-2 px-3" }, [
          _c("div", { staticClass: "d-flex flex-row align-items-center" }, [
            _c("img", {
              attrs: {
                src:
                  "/storage/user/" +
                  data.get_user.id +
                  "/img/" +
                  data.get_user.profile_img,
                height: "50",
                width: "50",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-column ms-2" }, [
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v(
                  _vm._s(data.get_user.first_name) +
                    " " +
                    _vm._s(data.get_user.last_name) +
                    " "
                ),
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-mute" }, [
                _vm._v(_vm._s(data.created_time)),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm.$store.getters.currentUser.id == data.user_id &&
          _vm.$route.name == "Home"
            ? _c(
                "div",
                { staticClass: "ms-auto mt-1 dropdown dropdown-menu-end" },
                [
                  _vm._m(0, true),
                  _vm._v(" "),
                  _c("ul", { staticClass: "dropdown-menu" }, [
                    _c("li", [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: {
                            role: "button",
                            "data-bs-toggle": "modal",
                            "data-bs-target": "#editModal",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.emitDataByClick(data)
                            },
                          },
                        },
                        [_vm._v("Edit")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { role: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.deletePost(data)
                            },
                          },
                        },
                        [_vm._v("Delete")]
                      ),
                    ]),
                  ]),
                ]
              )
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "px-3" }, [
          _c(
            "div",
            {
              staticClass: "text-justify div-like-pre",
              attrs: { id: "post_message_" + data.id },
            },
            [_vm._v(_vm._s(data.message))]
          ),
        ]),
        _vm._v(" "),
        _vm.$route.path == "/"
          ? _c("div", [
              data.get_attach_images.length == 1
                ? _c(
                    "div",
                    _vm._l(data.get_attach_images, function (image, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "w-100" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "PostPage",
                                  params: { id: data.id, page: index },
                                },
                              },
                            },
                            [
                              _c("img", {
                                staticClass: "img attach_image",
                                attrs: {
                                  src: _vm.computedPostImage(image.image_link),
                                },
                              }),
                            ]
                          ),
                        ],
                        1
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              data.get_attach_images.length == 2
                ? _c(
                    "div",
                    _vm._l(data.get_attach_images, function (image, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "w-50 d-inline-block" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "PostPage",
                                  params: { id: data.id, page: index },
                                },
                              },
                            },
                            [
                              _c("img", {
                                staticClass: "img attach_image",
                                attrs: {
                                  src: _vm.computedPostImage(image.image_link),
                                },
                              }),
                            ]
                          ),
                        ],
                        1
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              data.get_attach_images.length == 3
                ? _c(
                    "div",
                    _vm._l(data.get_attach_images, function (image, index) {
                      return _c("span", { key: index }, [
                        index != 2
                          ? _c(
                              "div",
                              { staticClass: "d-inline-block w-50" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "PostPage",
                                        params: { id: data.id, page: index },
                                      },
                                    },
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img attach_image",
                                      attrs: {
                                        src: _vm.computedPostImage(
                                          image.image_link
                                        ),
                                      },
                                    }),
                                  ]
                                ),
                              ],
                              1
                            )
                          : _c(
                              "div",
                              { staticClass: "w-100 d-block" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "PostPage",
                                        params: { id: data.id, page: index },
                                      },
                                    },
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img attach_image",
                                      attrs: {
                                        src: _vm.computedPostImage(
                                          image.image_link
                                        ),
                                      },
                                    }),
                                  ]
                                ),
                              ],
                              1
                            ),
                      ])
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              data.get_attach_images.length == 4
                ? _c(
                    "div",
                    _vm._l(data.get_attach_images, function (image, index) {
                      return _c("span", { key: index }, [
                        _c(
                          "div",
                          { staticClass: "d-inline-block w-50" },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "PostPage",
                                    params: { id: data.id, page: index },
                                  },
                                },
                              },
                              [
                                _c("img", {
                                  staticClass: "img attach_image",
                                  attrs: {
                                    src: _vm.computedPostImage(
                                      image.image_link
                                    ),
                                    "data-index": index,
                                  },
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ])
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              data.get_attach_images.length >= 5
                ? _c(
                    "div",
                    _vm._l(data.get_attach_images, function (image, index) {
                      return _c("span", { key: index }, [
                        index <= 3
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "d-inline-block position-relative w-50",
                              },
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "PostPage",
                                        params: { id: data.id, page: index },
                                      },
                                    },
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img attach_image",
                                      class: index == 3 ? "opacity-50" : "",
                                      attrs: {
                                        src: _vm.computedPostImage(
                                          image.image_link
                                        ),
                                      },
                                    }),
                                    _vm._v(" "),
                                    index == 3
                                      ? _c(
                                          "div",
                                          { staticClass: "position-absolute" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-plus-square text-light fa-lg",
                                            }),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]
                                ),
                              ],
                              1
                            )
                          : _vm._e(),
                      ])
                    }),
                    0
                  )
                : _vm._e(),
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "px-2" }, [
          _c("hr"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-group d-flex mb-2", attrs: { role: "group" } },
            [
              _c(
                "a",
                {
                  staticClass: "btn btn-outline-secondary w-100",
                  class: data.authLikes ? "text-primary" : "",
                  attrs: { role: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.likePost($event, data)
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-thumbs-up" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Like")]),
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-outline-secondary w-100",
                  attrs: { href: "#!" },
                },
                [
                  _c("i", { staticClass: "fa fa-commenting-o" }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(data.get_comments) + " Comments")]),
                ]
              ),
              _vm._v(" "),
              _vm._m(1, true),
            ]
          ),
          _vm._v(" "),
          _vm._m(2, true),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "comments" },
            [_c("Comment", { attrs: { post_id: data.id } })],
            1
          ),
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
    return _c(
      "a",
      {
        staticClass: "p-2 text-secondary",
        attrs: { role: "button", "data-bs-toggle": "dropdown" },
      },
      [_c("i", { staticClass: "fa fa-ellipsis-h" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn btn-outline-secondary w-100", attrs: { href: "#!" } },
      [_c("i", { staticClass: "fa fa-share" }), _vm._v(" Share")]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex justify-content-between align-items-center px-2" },
      [
        _c(
          "div",
          { staticClass: "d-flex flex-row icons d-flex align-items-center" },
          [_c("i", { staticClass: "fa fa-thumbs-up" })]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-row muted-color" }, [
          _c("div", { staticClass: "dropdown dropdown-menu-end" }, [
            _c(
              "a",
              {
                staticClass: "dropdown-toggle",
                attrs: { href: "", "data-bs-toggle": "dropdown" },
              },
              [_vm._v("Top Comments")]
            ),
            _vm._v(" "),
            _c("ul", { staticClass: "dropdown-menu" }, [
              _c("li", [
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [_vm._v("Latest Comments")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [_vm._v("Old Comments")]
                ),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);