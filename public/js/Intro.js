"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Intro"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/Home.vue */ "./resources/js/components/templates/Home.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'IntroComponent',
  components: {
    Home: _templates_Home_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {},
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Post_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.vue */ "./resources/js/components/templates/Post.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      attach: {
        files: [],
        file_type: []
      },
      form_data: "",
      posts: '',
      edit_post: {
        attachment_remove: [],
        data: "",
        message: ""
      },
      test: {
        count: 1
      },
      post: {
        currentPage: 1,
        timeout: 0,
        collection: []
      }
    };
  },
  components: {
    Post: _Post_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {},
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    getFileFormat: function getFileFormat(fileName) {
      var re = /(?:\.([^.]+))?$/;
      var ext = re.exec(fileName)[1];
      return ext.trim();
    },
    uploadTriggerInput: function uploadTriggerInput(e) {
      var elem = this.$refs.input_upload;
      if (elem && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        elem.dispatchEvent(evt);
      }
    },
    inputTriggerButton: function inputTriggerButton(id) {
      document.getElementById(id).click();
    },
    createPost: function createPost(e) {
      var _this = this;
      if (document.getElementById("editable").innerText.length > 1000) {
        this.$parent.notification.message.push("Message is too long. Only 1000 characters allow");
        return false;
      }
      if (document.getElementById("editable").innerText.length || this.form_data) {
        e.target.setAttribute('disabled', true);
        var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
        axios({
          method: "POST",
          params: {
            message: document.getElementById("editable").innerText,
            files: this.form_data
          },
          data: this.form_data,
          url: "/api/post",
          headers: {
            Authorization: AuthStr
          }
        }).then(function (res) {
          e.target.removeAttribute('disabled');
          _this.attach_exist = false;
          _this.form_data = "";
          document.getElementById("editable").innerHTML = "";
          _this.posts = res.data;
          _this.post.currentPage = 1;
        })["catch"](function (err) {
          e.target.removeAttribute('disabled');
        });
      }
    },
    attachFile: function attachFile(e) {
      if (this.$refs.input_upload.files.length <= 6) {
        this.attach_exist = true;
        this.attach.files = [];
        this.attach.file_type = [];
        var formData = new FormData();
        for (var index = 0; index < this.$refs.input_upload.files.length; index++) {
          this.attach.files.push(URL.createObjectURL(this.$refs.input_upload.files[index]));
          this.attach.file_type.push(this.$refs.input_upload.files[index].type);
          formData.append("files[]", this.$refs.input_upload.files[index]);
        }
        this.form_data = formData;
      } else {
        this.$parent.notification.message.push("Too many files!. Only 6 files can be uploaded.");
      }
    },
    removeAttachInPost: function removeAttachInPost(file) {
      var exist = this.attach.files.indexOf(file);
      if (exist > -1) {
        this.attach.files.splice(exist, 1);
        this.attach.file_type.splice(exist, 1);
      }
    },
    updatePost: function updatePost() {
      var _this2 = this;
      var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "patch",
        params: {
          message: this.edit_post.message,
          files: this.edit_post.attachment_remove
        },
        url: "/api/post/".concat(this.edit_post.data.id),
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        document.getElementById("post_message_".concat(_this2.edit_post.data.id)).innerText = _this2.edit_post.message;
      })["catch"](function (err) {});
    },
    updateEditPostMessage: function updateEditPostMessage(e) {
      this.edit_post.message = e.target.innerText;
    },
    removeAttachInEditPost: function removeAttachInEditPost(file) {
      var _this3 = this;
      this.edit_post.attachment_remove.push(file.id);
      this.edit_post.data.get_attach_files.forEach(function (elem, index) {
        if (elem.id == file.id) {
          _this3.edit_post.data.get_attach_files.splice(index, 1);
        }
      });
    },
    computedPostFile: function computedPostFile(file_link) {
      return "/storage/post/file/".concat(file_link);
    },
    getPost: function getPost() {
      var _this4 = this;
      if (this.$store.getters.currentUser && this.post.currentPage) {
        var AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
        return new Promise(function (resolve, reject) {
          axios({
            method: "get",
            url: "/api/post?page=".concat(_this4.post.currentPage),
            headers: {
              Authorization: AuthStr
            }
          }).then(function (res) {
            _this4.post.timeout = 1;
            if (_this4.post.currentPage == 1) {
              _this4.posts = res.data;
              resolve(res.data.data.forEach(function (data) {
                _this4.post.collection.push(data.id);
              }));
            } else {
              resolve(res.data.data.forEach(function (data) {
                if (!_this4.post.collection.includes(data.id)) {
                  _this4.posts.data.push(data);
                  _this4.post.collection.push(data.id);
                }
              }));
            }
          })["catch"](function (err) {
            reject(err);
          });
        });
      }
    },
    handleScroll: function handleScroll(event) {
      if (window.scrollY + 200 > document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        if (this.posts.last_page != this.post.currentPage && this.post.timeout) {
          this.post.timeout = 0;
          this.post.currentPage++;
          this.getPost();
          console.log(this.post.currentPage);
        }
      }
    }
  },
  // watch: {
  //       $data: {
  //           handler: function(val, oldVal) {
  //               console.log('watcher: ',val);
  //           },
  //           deep: true
  //       },
  //   },
  created: function created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  updated: function updated() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.getPost();
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#carouselintro img[data-v-0648c911] {\n  height: 600px;\n}\n#carouselintro[data-v-0648c911] {\n  margin-top: 26px;\n}\n\n", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.min-100[data-v-8d18a2c0] {\n  min-height: 100px;\n}\n.dropbox[data-v-8d18a2c0] {\n  height: 150px;\n}\n.img_attach_remove[data-v-8d18a2c0] {\n  right: 0%;\n  top: 0%;\n  color: #ffffff;\n}\n.center[data-v-8d18a2c0] {\n  top: 40% !important;\n  left: 42% !important;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_0648c911_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_0648c911_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_0648c911_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8d18a2c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8d18a2c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8d18a2c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/Intro.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Intro.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Intro_vue_vue_type_template_id_0648c911_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Intro.vue?vue&type=template&id=0648c911&scoped=true& */ "./resources/js/components/Intro.vue?vue&type=template&id=0648c911&scoped=true&");
/* harmony import */ var _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Intro.vue?vue&type=script&lang=js& */ "./resources/js/components/Intro.vue?vue&type=script&lang=js&");
/* harmony import */ var _Intro_vue_vue_type_style_index_0_id_0648c911_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css& */ "./resources/js/components/Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Intro_vue_vue_type_template_id_0648c911_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Intro_vue_vue_type_template_id_0648c911_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0648c911",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Intro.vue"
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

/***/ "./resources/js/components/templates/Home.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/templates/Home.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_8d18a2c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=8d18a2c0&scoped=true& */ "./resources/js/components/templates/Home.vue?vue&type=template&id=8d18a2c0&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_8d18a2c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css& */ "./resources/js/components/templates/Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_8d18a2c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_8d18a2c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8d18a2c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/Home.vue"
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

/***/ "./resources/js/components/Intro.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Intro.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Intro.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/templates/Home.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/templates/Home.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_0648c911_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=style&index=0&id=0648c911&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_396a43a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Comment.vue?vue&type=style&index=0&id=396a43a4&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/templates/Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/templates/Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8d18a2c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=style&index=0&id=8d18a2c0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_style_index_0_id_038d89e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Post.vue?vue&type=style&index=0&id=038d89e1&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Intro.vue?vue&type=template&id=0648c911&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Intro.vue?vue&type=template&id=0648c911&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_0648c911_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_0648c911_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_0648c911_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Intro.vue?vue&type=template&id=0648c911&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=template&id=0648c911&scoped=true&");


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

/***/ "./resources/js/components/templates/Home.vue?vue&type=template&id=8d18a2c0&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/templates/Home.vue?vue&type=template&id=8d18a2c0&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8d18a2c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8d18a2c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8d18a2c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=8d18a2c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=template&id=8d18a2c0&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=template&id=0648c911&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Intro.vue?vue&type=template&id=0648c911&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    !_vm.currentUser
      ? _c("div", { staticClass: "mb-150" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
        ])
      : _c("div", [_c("Home")], 1),
  ])
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
                  "\n              Some representative placeholder content for the first slide.\n            "
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
                  "\n              Some representative placeholder content for the second slide.\n            "
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
                  "\n              Some representative placeholder content for the third slide.\n            "
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
                  "\n              Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor\n              ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat.\n              Consectetur esse deserunt in amet minim reprehenderit Lorem non.\n              Incididunt in veniam irure ipsum eu Lorem consectetur mollit\n              consequat. Dolore duis id id Lorem est enim do pariatur cillum\n              nulla nostrud ex laboris. Consectetur cillum labore proident\n              excepteur nisi sint proident adipisicing nostrud. Enim deserunt\n              proident proident sit.s\n            "
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
                  "\n              Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor\n              ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat.\n              Consectetur esse deserunt in amet minim reprehenderit Lorem non.\n              Incididunt in veniam irure ipsum eu Lorem consectetur mollit\n              consequat. Dolore duis id id Lorem est enim do pariatur cillum\n              nulla nostrud ex laboris. Consectetur cillum labore proident\n              excepteur nisi sint proident adipisicing nostrud. Enim deserunt\n              proident proident sit.\n            "
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
                  "\n              Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor\n              ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat.\n              Consectetur esse deserunt in amet minim reprehenderit Lorem non.\n              Incididunt in veniam irure ipsum eu Lorem consectetur mollit\n              consequat. Dolore duis id id Lorem est enim do pariatur cillum\n              nulla nostrud ex laboris. Consectetur cillum labore proident\n              excepteur nisi sint proident adipisicing nostrud. Enim deserunt\n              proident proident sit.\n            "
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
                "\n              Consequat non sunt dolor eiusmod consequat. Deserunt nulla\n              excepteur culpa esse excepteur id cupidatat mollit. Est nulla\n              non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in\n              qui voluptate laborum et do amet consectetur tempor commodo\n              nisi. Fugiat magna deserunt adipisicing irure esse eu consequat\n              duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt\n              quis officia quis officia reprehenderit nisi.\n            "
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
                "\n              Consequat non sunt dolor eiusmod consequat. Deserunt nulla\n              excepteur culpa esse excepteur id cupidatat mollit. Est nulla\n              non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in\n              qui voluptate laborum et do amet consectetur tempor commodo\n              nisi. Fugiat magna deserunt adipisicing irure esse eu consequat\n              duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt\n              quis officia quis officia reprehenderit nisi.\n            "
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
                "\n              Consequat non sunt dolor eiusmod consequat. Deserunt nulla\n              excepteur culpa esse excepteur id cupidatat mollit. Est nulla\n              non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in\n              qui voluptate laborum et do amet consectetur tempor commodo\n              nisi. Fugiat magna deserunt adipisicing irure esse eu consequat\n              duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt\n              quis officia quis officia reprehenderit nisi.\n            "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=template&id=8d18a2c0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/Home.vue?vue&type=template&id=8d18a2c0&scoped=true& ***!
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
    _c("div", { staticClass: "container space-intro" }, [
      _c("div", { staticClass: "row d-flex" }, [
        _c(
          "div",
          { staticClass: "col-lg-8" },
          [
            _vm.$store.getters.currentUser.role == 1
              ? _c("div", { staticClass: "card mb-4" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { class: _vm.attach_exist ? "d-flex" : "d-none" },
                      _vm._l(_vm.attach.files, function (file, index) {
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
                            staticClass:
                              "card w-25 position-relative me-1 dropbox rounded-0",
                            class: index == 3 ? "opacity-50" : "",
                          },
                          [
                            _vm.attach.file_type[index] == "video/mp4"
                              ? _c(
                                  "video",
                                  {
                                    staticClass: "w-100 bg-dark",
                                    attrs: { height: "150", controls: "" },
                                  },
                                  [
                                    _c("source", {
                                      attrs: { src: file, type: "video/mp4" },
                                    }),
                                  ]
                                )
                              : _c("img", {
                                  staticClass: "w-100",
                                  attrs: { src: file, height: "150" },
                                }),
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
                                  "position-absolute center text-dark h3",
                              },
                              [
                                _c("span", { staticClass: "me-2" }, [
                                  _vm._v(_vm._s(_vm.attach.files.length - 4)),
                                ]),
                                _c("i", { staticClass: "fa fa-plus-square" }),
                              ]
                            ),
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
                                    "btn btn-close btn-close-white bg-info border",
                                  on: {
                                    click: function ($event) {
                                      return _vm.removeAttachInPost(file)
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-footer text-muted" }, [
                    _c("div", { staticClass: "d-flex" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", {}, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-light px-2 btn-sm",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                return _vm.inputTriggerButton("upload_files")
                              },
                            },
                          },
                          [_c("i", { staticClass: "fa fa-file-image-o fa-lg" })]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          ref: "input_upload",
                          staticClass: "d-none",
                          attrs: {
                            type: "file",
                            accept:
                              "image/png, image/jpg, image/jpeg, video/mp4",
                            multiple: "",
                            id: "upload_files",
                          },
                          on: { change: _vm.attachFile },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ms-auto" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-primary bg-gradient btn-sm px-5 shadow",
                            on: { click: _vm.createPost },
                          },
                          [
                            _vm._v(
                              "\n                    Post\n                  "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("Post", { attrs: { datas: _vm.posts } }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-4" },
          [
            _c("Adsense", {
              attrs: {
                "data-ad-client": "ca-pub-5828491790124517",
                "data-ad-slot": "8704391451",
                "data-ad-format": "auto",
                "data-full-width-responsive": "true",
              },
            }),
          ],
          1
        ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "editModal",
          tabindex: "-1",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "card mb-4" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "div",
                    { staticClass: "d-flex flex-column mb-2 rounded" },
                    [
                      _c(
                        "div",
                        {
                          ref: "trial",
                          staticClass: "flex-fill div-like-pre p-2 min-100",
                          attrs: { contenteditable: "true" },
                          on: { keyup: _vm.updateEditPostMessage },
                        },
                        [_vm._v(_vm._s(_vm.edit_post.data.message))]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      class: _vm.edit_post.data.get_attach_files
                        ? "d-flex"
                        : "d-none",
                    },
                    [
                      _c("div", { staticClass: "flex-fill" }, [
                        _c(
                          "div",
                          { staticClass: "d-flex" },
                          _vm._l(
                            _vm.edit_post.data.get_attach_files,
                            function (file) {
                              return _c(
                                "div",
                                {
                                  key: file.id,
                                  staticClass:
                                    "card w-25 position-relative dropbox me-2",
                                },
                                [
                                  _vm.getFileFormat(file.file_link) == "jpg" ||
                                  _vm.getFileFormat(file.file_link) == "jpeg" ||
                                  _vm.getFileFormat(file.file_link) == "png"
                                    ? _c("img", {
                                        staticClass: "w-100",
                                        attrs: {
                                          src: _vm.computedPostFile(
                                            file.file_link
                                          ),
                                          height: "150",
                                        },
                                      })
                                    : _c(
                                        "video",
                                        {
                                          staticClass: "w-100 bg-dark",
                                          attrs: {
                                            controls: "",
                                            height: "170",
                                          },
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
                                      staticClass:
                                        "position-absolute img_attach_remove",
                                    },
                                    [
                                      _c("button", {
                                        staticClass:
                                          "btn btn-close border bg-primary",
                                        on: {
                                          click: function ($event) {
                                            return _vm.removeAttachInEditPost(
                                              file
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
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary bg-gradient",
                  attrs: { type: "button", "data-bs-dismiss": "modal" },
                },
                [_vm._v("\n            Cancel\n          ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button", "data-bs-dismiss": "modal" },
                  on: { click: _vm.updatePost },
                },
                [_vm._v("\n            Save changes\n          ")]
              ),
            ]),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
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
    return _c("div", { staticClass: "d-flex flex-column mb-2 rounded" }, [
      _c("div", {
        staticClass: "flex-fill min-100",
        attrs: { id: "editable", contenteditable: "true" },
      }),
    ])
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
      _c(
        "h1",
        { staticClass: "modal-title fs-5", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Edit Post")]
      ),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      }),
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