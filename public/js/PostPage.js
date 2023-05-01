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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      comments: "",
      edit: {
        comment: ""
      },
      comment: {
        currentPage: 1,
        timeout: 0,
        collection: []
      }
    };
  },
  components: {},
  props: {
    post_id: {
      type: Number
    },
    sort: {
      type: String
    },
    sort_id: {
      type: Number
    },
    display: {
      type: Array
    }
  },
  computed: {
    profileImage: function profileImage() {
      return this.$store.getters.currentUser.profile_img ? "/storage/user/" + this.$store.getters.currentUser.id + "/img/" + this.$store.getters.currentUser.profile_img : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
    }
  },
  methods: {
    computedUserAvatar: function computedUserAvatar(data) {
      if (data.user_details.profile_img) {
        return '/storage/user/' + data.user_details.id + '/img/' + data.user_details.profile_img;
      } else {
        return 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
      }
    },
    postComment: function postComment(post_id) {
      var _this = this;
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "post",
        params: {
          post_id: this.post_id,
          comment: document.getElementById("content_".concat(post_id)).innerText
        },
        url: "/api/comment",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        document.getElementById("content_".concat(post_id)).innerText = "";
        _this.comments.data.unshift(res.data);
        // this.comments = res.data;
      })["catch"](function (err) {});
    },
    likeComment: function likeComment(e, data) {
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "post",
        params: {
          id: data.id
        },
        url: "/api/comment/like",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        if (e.target.classList.contains("text-secondary")) {
          e.target.classList.remove("text-secondary");
          e.target.classList.add("text-primary");
        } else {
          e.target.classList.remove("text-primary");
          e.target.classList.add("text-secondary");
        }
      })["catch"](function (err) {});
    },
    deleteComment: function deleteComment(comment) {
      var _this2 = this;
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "delete",
        url: "/api/comment/".concat(comment.id),
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this2.comments.data.forEach(function (elem, index) {
          if (elem.id == comment.id) {
            _this2.comments.data.splice(index, 1);
          }
          _this2.comment.currentPage = 0;
        });
      })["catch"](function (err) {});
    },
    editComment: function editComment(post_id) {
      var _this3 = this;
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "patch",
        params: {
          message: document.getElementById("content_".concat(post_id)).innerText
        },
        url: "/api/comment/".concat(this.edit.comment.id),
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this3.comments.data.forEach(function (elem, index) {
          if (elem == _this3.edit.comment) {
            _this3.comments.data[index].message = document.getElementById("content_".concat(post_id)).innerText;
          }
        });
        _this3.edit.comment = "";
        document.getElementById("content_".concat(post_id)).innerText = "";
      })["catch"](function (err) {});
    },
    initEditComment: function initEditComment(comment, post_id) {
      this.edit.comment = comment;
      comment.edit_mode = 1;
      document.getElementById("content_".concat(post_id)).innerText = comment.message;
    },
    cancelEditComment: function cancelEditComment(post_id) {
      document.getElementById("content_".concat(post_id)).innerText = "";
      this.edit.comment = "";
    },
    getComments: function getComments() {
      var _this4 = this;
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "get",
        params: {
          post_id: this.post_id,
          sort: this.sort
        },
        url: "/api/comment?page=".concat(this.comment.currentPage),
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        if (_this4.comment.currentPage == 1) {
          _this4.comments = res.data;
          res.data.data.forEach(function (data) {
            _this4.comment.collection.push(data.id);
          });
        } else {
          res.data.data.forEach(function (data) {
            if (!_this4.comment.collection.includes(data.id)) {
              _this4.comments.data.push(data);
              _this4.comment.collection.push(data.id);
            }
          });
        }
      })["catch"](function (err) {});
    },
    loadMoreComment: function loadMoreComment() {
      if (this.comments.last_page != this.comment.currentPage) {
        this.comment.currentPage++;
        this.getComments();
      }
    }
  },
  watch: {
    // $data: {
    //     handler: function(val, oldVal) {
    //         console.log('comment:', val);
    //     },
    //     deep: true
    // },

    $props: {
      handler: function handler(val, oldVal) {
        this.getComments();
      },
      deep: true
    }
  },
  // watch: {
  //
  // },
  updated: function updated() {},
  mounted: function mounted() {
    this.getComments();
  }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data_pass: {
        sort: "",
        sort_id: null,
        isShow: []
      }
    };
  },
  components: {
    Comment: _Comment_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["datas"],
  computed: {},
  methods: {
    hideComments: function hideComments(e, post_id) {
      if (this.data_pass.isShow.includes(post_id)) {
        e.target.classList.remove('text-primary');
        this.data_pass.isShow = this.data_pass.isShow.filter(function (data) {
          return data !== post_id;
        });
      } else {
        e.target.classList.add('text-primary');
        this.data_pass.isShow.push(post_id);
      }
    },
    computedPostFile: function computedPostFile(file_link) {
      return "/storage/post/file/".concat(file_link);
    },
    computedUserAvatar: function computedUserAvatar(data) {
      if (data.get_user.profile_img) {
        return '/storage/user/' + data.get_user.id + '/img/' + data.get_user.profile_img;
      } else {
        return 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
      }
    },
    likePost: function likePost(e, data) {
      var _this = this;
      data.authLikes = !data.authLikes;
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "post",
        params: {
          id: data.id
        },
        url: "/api/post/like",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        if (!res.data.message) {
          data.get_post_likes.push(res.data);
        } else {
          data.get_post_likes.forEach(function (elem, index) {
            if (elem.user_id == _this.$store.getters.currentUser.id) {
              data.get_post_likes.splice(index, 1);
            }
          });
        }
      })["catch"](function (err) {});
    },
    deletePost: function deletePost(data) {
      var _this2 = this;
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "delete",
        url: "/api/post/".concat(data.id),
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this2.datas.data.forEach(function (elem, index) {
          if (elem.id == data.id) {
            _this2.datas.data.splice(index, 1);
          }
        });
      })["catch"](function (err) {});
    },
    latestComments: function latestComments(data) {
      this.data_pass.sort = "latest";
      this.data_pass.sort_id = data.id;
    },
    oldComments: function oldComments(data) {
      this.data_pass.sort = "oldest";
      this.data_pass.sort_id = data.id;
    },
    updateParentEditPost: function updateParentEditPost(data) {
      this.$parent.edit_post.data = data;
      this.$parent.edit_post.message = data.message;
      this.$parent.edit_post.attachment_remove = [];
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
        console.log('watcher: ', val);
      },
      deep: true
    }
  },
  updated: function updated() {},
  mounted: function mounted() {}
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-comment[data-v-396a43a4] {\n  background: #f1f1f1;\n}\n", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.border-post[data-v-038d89e1] {\r\n  border: 1px solid #e1e1e1;\n}\n.attach_image[data-v-038d89e1] {\r\n  height: 300px;\n}\n.btn-outline-secondary[data-v-038d89e1]:hover {\r\n  background: #ffffff;\r\n  color: #0d6efd !important;\n}\r\n", ""]);
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

/***/ "./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPage_vue_vue_type_style_index_0_id_2a25f53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostPage.vue?vue&type=style&index=0&id=2a25f53a&scoped=true&lang=css&");


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
      _vm._l(_vm.comments.data, function (comment, index) {
        return _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.display.includes(comment.post_id),
                expression: "!display.includes(comment.post_id)",
              },
            ],
            key: index,
          },
          [
            _c("div", { staticClass: "d-flex flex-row mb-2" }, [
              _c("img", {
                staticClass: "rounded-image",
                attrs: {
                  src: _vm.computedUserAvatar(comment),
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
                        [_vm._v("\n              Like\n            ")]
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
                      _c("small", [_vm._v(_vm._s(comment.created_time))]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              comment.user_id == _vm.$store.getters.currentUser.id ||
              _vm.$store.getters.currentUser.role == 1
                ? _c("div", { staticClass: "ms-auto" }, [
                    _c("div", { staticClass: "dropdown dropdown-menu-end" }, [
                      _vm._m(0, true),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-menu" }, [
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
                      ]),
                    ]),
                  ])
                : _vm._e(),
            ]),
          ]
        )
      }),
      _vm._v(" "),
      _vm.comments.length || _vm.comments.last_page != _vm.comment.currentPage
        ? _c("div", { staticClass: "flex mb-2" }, [
            _c(
              "a",
              {
                staticClass: "text-primary",
                attrs: { role: "button" },
                on: { click: _vm.loadMoreComment },
              },
              [_vm._v("Load more comments")]
            ),
          ])
        : _vm._e(),
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
                  staticClass: "btn btn-primary btn-sm bg-gradient",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.postComment(_vm.post_id)
                    },
                  },
                },
                [_vm._v("\n        Post comment\n      ")]
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
                [_vm._v("\n        Edit comment\n      ")]
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
                [_vm._v("\n        Cancel\n      ")]
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
                src: _vm.computedUserAvatar(data),
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
                    "\n          "
                ),
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-mute" }, [
                _vm._v(_vm._s(data.created_time)),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm.$store.getters.currentUser.id == data.user_id ||
          (_vm.$store.getters.currentUser.role == 1 &&
            _vm.$route.name == "Home")
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
                              return _vm.updateParentEditPost(data)
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
        _c("div", { staticClass: "px-3 mb-2" }, [
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
              data.get_attach_files.length == 1
                ? _c(
                    "div",
                    _vm._l(data.get_attach_files, function (file, index) {
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
                              _vm.getFileFormat(file.file_link) == "jpg" ||
                              _vm.getFileFormat(file.file_link) == "jpeg" ||
                              _vm.getFileFormat(file.file_link) == "png"
                                ? _c("img", {
                                    staticClass: "w-100 attach_image",
                                    attrs: {
                                      src: _vm.computedPostFile(file.file_link),
                                    },
                                  })
                                : _c(
                                    "video",
                                    {
                                      staticClass: "w-100 h-100",
                                      attrs: { controls: "" },
                                    },
                                    [
                                      _c("source", {
                                        attrs: {
                                          src: _vm.computedPostFile(
                                            file.file_link
                                          ),
                                          type: "video/mp4",
                                        },
                                      }),
                                    ]
                                  ),
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
              data.get_attach_files.length == 2
                ? _c(
                    "div",
                    { staticClass: "d-inline-flex w-100" },
                    _vm._l(data.get_attach_files, function (file, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "w-50 bg-dark" },
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
                              _vm.getFileFormat(file.file_link) == "jpg" ||
                              _vm.getFileFormat(file.file_link) == "jpeg" ||
                              _vm.getFileFormat(file.file_link) == "png"
                                ? _c("img", {
                                    staticClass: "w-100 attach_image",
                                    attrs: {
                                      src: _vm.computedPostFile(file.file_link),
                                    },
                                  })
                                : _c(
                                    "video",
                                    {
                                      staticClass: "w-100 attach_image",
                                      attrs: { controls: "" },
                                    },
                                    [
                                      _c("source", {
                                        attrs: {
                                          src: _vm.computedPostFile(
                                            file.file_link
                                          ),
                                          type: "video/mp4",
                                        },
                                      }),
                                    ]
                                  ),
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
              data.get_attach_files.length == 3
                ? _c("div", [
                    _c(
                      "div",
                      { staticClass: "row mx-0" },
                      _vm._l(data.get_attach_files, function (file, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            class: index == 2 ? "col-12 px-0" : "col-md-6 px-0",
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "bg-dark h-100" },
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
                                    _vm.getFileFormat(file.file_link) ==
                                      "jpg" ||
                                    _vm.getFileFormat(file.file_link) ==
                                      "jpeg" ||
                                    _vm.getFileFormat(file.file_link) == "png"
                                      ? _c("img", {
                                          staticClass: "w-100 attach_image",
                                          attrs: {
                                            src: _vm.computedPostFile(
                                              file.file_link
                                            ),
                                          },
                                        })
                                      : _c(
                                          "video",
                                          {
                                            staticClass: "w-100 attach_image",
                                            attrs: { controls: "" },
                                          },
                                          [
                                            _c("source", {
                                              attrs: {
                                                src: _vm.computedPostFile(
                                                  file.file_link
                                                ),
                                                type: "video/mp4",
                                              },
                                            }),
                                          ]
                                        ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              data.get_attach_files.length == 4
                ? _c("div", [
                    _c(
                      "div",
                      { staticClass: "row mx-0" },
                      _vm._l(data.get_attach_files, function (file, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "col-md-6 px-0" },
                          [
                            _c(
                              "div",
                              { staticClass: "bg-dark h-100" },
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
                                    _vm.getFileFormat(file.file_link) ==
                                      "jpg" ||
                                    _vm.getFileFormat(file.file_link) ==
                                      "jpeg" ||
                                    _vm.getFileFormat(file.file_link) == "png"
                                      ? _c("img", {
                                          staticClass: "w-100 attach_image",
                                          attrs: {
                                            src: _vm.computedPostFile(
                                              file.file_link
                                            ),
                                          },
                                        })
                                      : _c(
                                          "video",
                                          {
                                            staticClass: "w-100 attach_image",
                                            attrs: { controls: "" },
                                          },
                                          [
                                            _c("source", {
                                              attrs: {
                                                src: _vm.computedPostFile(
                                                  file.file_link
                                                ),
                                                type: "video/mp4",
                                              },
                                            }),
                                          ]
                                        ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              data.get_attach_files.length >= 5
                ? _c("div", [
                    _c(
                      "div",
                      { staticClass: "row mx-0" },
                      _vm._l(data.get_attach_files, function (file, index) {
                        return _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: index < 4,
                                expression: "index < 4",
                              },
                            ],
                            key: index,
                            staticClass: "col-md-6 position-relative px-0",
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "bg-dark h-100" },
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
                                    _vm.getFileFormat(file.file_link) ==
                                      "jpg" ||
                                    _vm.getFileFormat(file.file_link) ==
                                      "jpeg" ||
                                    _vm.getFileFormat(file.file_link) == "png"
                                      ? _c("img", {
                                          staticClass: "w-100 attach_image",
                                          class: index == 3 ? "opacity-25" : "",
                                          attrs: {
                                            src: _vm.computedPostFile(
                                              file.file_link
                                            ),
                                          },
                                        })
                                      : _c(
                                          "video",
                                          {
                                            staticClass: "w-100 attach_image",
                                            class:
                                              index == 3 ? "opacity-25" : "",
                                            attrs: { controls: "" },
                                          },
                                          [
                                            _c("source", {
                                              attrs: {
                                                src: _vm.computedPostFile(
                                                  file.file_link
                                                ),
                                                type: "video/mp4",
                                              },
                                            }),
                                          ]
                                        ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: index == 3,
                                            expression: "index == 3",
                                          },
                                        ],
                                        staticClass:
                                          "position-absolute center text-white",
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-plus-square",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                  ])
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
                  attrs: { role: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.hideComments($event, data.id)
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-commenting-o" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Comments")]),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex" }, [
            data.get_post_likes.length
              ? _c("div", [
                  _c("img", {
                    attrs: { src: "/img/like.jpg", width: "20", height: "20" },
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(data.get_post_likes.length))]),
                  _vm._v(" "),
                  data.get_post_likes.length > 1
                    ? _c("span", [_vm._v("Likes")])
                    : _c("span", [_vm._v("Like")]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "ms-auto" }, [
              _c("div", { staticClass: "dropdown dropdown-menu-end" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: { href: "", "data-bs-toggle": "dropdown" },
                  },
                  [_vm._v("Latest Comments")]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "dropdown-menu" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.latestComments(data)
                          },
                        },
                      },
                      [_vm._v("Latest Comments")]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { role: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.oldComments(data)
                          },
                        },
                      },
                      [_vm._v("Old Comments")]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "comments" },
            [
              _c("Comment", {
                key: data.id,
                attrs: {
                  post_id: data.id,
                  sort: _vm.data_pass.sort,
                  sort_id: _vm.data_pass.sort_id,
                  display: _vm.data_pass.isShow,
                },
              }),
            ],
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
]
render._withStripped = true



/***/ })

}]);