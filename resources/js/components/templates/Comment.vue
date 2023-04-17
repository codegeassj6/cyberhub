<template>
  <div>
    <div v-show="!display.includes(comment.post_id)" v-for="(comment, index) in comments.data" :key="index">
      <div class="d-flex flex-row mb-2">
        <img
          :src="computedUserAvatar(comment)"
          width="50"
          height="50"
          class="rounded-image"
        />

        <div class="d-flex">
          <div class="d-flex flex-column ms-3">
            <span class="name">{{
              comment.user_details.first_name +
              " " +
              comment.user_details.last_name
            }}</span>
            <pre class="comment-text">{{ comment.message }}</pre>

            <div class="d-flex flex-row align-items-center">
              <a
                role="button"
                class="me-2"
                :class="comment.authLikes ? 'text-primary' : 'text-secondary'"
                @click="likeComment($event, comment)"
              >
                Like
              </a>

              <a role="button" class="me-2 text-secondary">Reply</a>
              <small>{{ comment.created_time }}</small>
            </div>
          </div>
        </div>

        <div
          class="ms-auto"
          v-if="comment.user_id == $store.getters.currentUser.id || $store.getters.currentUser.role == 1"
        >
          <div class="dropdown dropdown-menu-end">
            <a
              role="button"
              class="p-2"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-ellipsis-h"></i>
            </a>
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                role="button"
                @click="initEditComment(comment, post_id)"
                >Edit</a
              >
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                role="button"
                @click="deleteComment(comment)"
                >Delete</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex mb-2" v-if="comments.length || comments.last_page != comment.currentPage">
      <a role="button" class="text-primary" @click="loadMoreComment">Load more comments</a>
    </div>

    <div class="card-footer border-0 px-3 py-3 bg-comment">
      <div class="d-flex flex-start w-100">
        <img
          class="rounded-circle shadow-1-strong me-3"
          :src="profileImage"
          alt="avatar"
          width="40"
          height="40"
        />
        <div class="form-outline w-100">
          <div class="d-flex flex-wrap border-post">
            <div
              class="p-2 flex-fill bg-white"
              contenteditable="true"
              :id="`content_${post_id}`"
            ></div>
          </div>
        </div>
      </div>

      <div class="float-end mb-3 mt-4">
        <button
          v-if="!edit.comment"
          type="button"
          @click="postComment(post_id)"
          class="btn btn-primary btn-sm bg-gradient"
        >
          Post comment
        </button>

        <button
          v-if="edit.comment"
          type="button"
          @click="editComment(post_id)"
          class="btn btn-primary btn-sm"
        >
          Edit comment
        </button>
        <button
          v-if="edit.comment"
          @click="cancelEditComment(post_id)"
          type="button"
          class="btn btn-danger btn-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
<script>
//import name from './

export default {
  data() {
    return {
      comments: "",
      edit: {
        comment: "",
      },
      comment: {
        currentPage: 1,
        timeout: 0,
        collection: [],
      }

    };
  },
  components: {},

  props: {
    post_id: {
      type: Number,
    },
    sort: {
      type: String,
    },
    sort_id: {
      type: Number,
    },
    display: {
      type: Array,
    }
  },

  computed: {
    profileImage() {
      return this.$store.getters.currentUser.profile_img
        ? "/storage/user/" +
            this.$store.getters.currentUser.id +
            "/img/" +
            this.$store.getters.currentUser.profile_img
        : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
    },
  },

  methods: {
    computedUserAvatar(data) {
      if(data.user_details.profile_img) {
        return '/storage/user/' + data.user_details.id + '/img/' + data.user_details.profile_img;
      } else {
        return 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
      }
    },

    postComment(post_id) {
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "post",
        params: {
          post_id: this.post_id,
          comment: document.getElementById(`content_${post_id}`).innerText,
        },
        url: `/api/comment`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          document.getElementById(`content_${post_id}`).innerText = "";
          this.comments.data.unshift(res.data);
          // this.comments = res.data;
        })
        .catch((err) => {});
    },

    likeComment(e, data) {
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "post",
        params: { id: data.id },
        url: `/api/comment/like`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          if (e.target.classList.contains("text-secondary")) {
            e.target.classList.remove("text-secondary");
            e.target.classList.add("text-primary");
          } else {
            e.target.classList.remove("text-primary");
            e.target.classList.add("text-secondary");
          }
        })
        .catch((err) => {});
    },

    deleteComment(comment) {
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "delete",
        url: `/api/comment/${comment.id}`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          this.comments.data.forEach((elem, index) => {
            if (elem.id == comment.id) {
              this.comments.data.splice(index, 1);
            }
            this.comment.currentPage = 0;
          });
        })
        .catch((err) => {});
    },

    editComment(post_id) {
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "patch",
        params: {
          message: document.getElementById(`content_${post_id}`).innerText,
        },
        url: `/api/comment/${this.edit.comment.id}`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          this.comments.data.forEach((elem, index) => {
            if (elem == this.edit.comment) {
              this.comments.data[index].message = document.getElementById(
                `content_${post_id}`
              ).innerText;
            }
          });
          this.edit.comment = "";
          document.getElementById(`content_${post_id}`).innerText = "";
        })
        .catch((err) => {});
    },

    initEditComment(comment, post_id) {
      this.edit.comment = comment;
      comment.edit_mode = 1;
      document.getElementById(`content_${post_id}`).innerText = comment.message;
    },

    cancelEditComment(post_id) {
      document.getElementById(`content_${post_id}`).innerText = "";
      this.edit.comment = "";
    },

    getComments() {
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "get",
        params: {
          post_id: this.post_id,
          sort: this.sort,
        },
        url: `/api/comment?page=${this.comment.currentPage}`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          if(this.comment.currentPage == 1) {
            this.comments = res.data;
            res.data.data.forEach(data => {
              this.comment.collection.push(data.id);
            })
          } else {
            res.data.data.forEach(data => {
              if(!this.comment.collection.includes(data.id)) {
                this.comments.data.push(data);
                this.comment.collection.push(data.id);
              }
            })
          }

        })
        .catch((err) => {});
    },

    loadMoreComment() {
      if(this.comments.last_page != this.comment.currentPage) {
        this.comment.currentPage++;
        this.getComments();
      }

    },
  },

  watch: {
      // $data: {
      //     handler: function(val, oldVal) {
      //         console.log('comment:', val);
      //     },
      //     deep: true
      // },

      $props: {
          handler: function(val, oldVal) {
              this.getComments();
          },
          deep: true
      },
  },

  // watch: {
  //
  // },

  updated() {

  },

  mounted() {
    this.getComments();
  },
};
</script>

<style scoped>
.bg-comment {
  background: #f1f1f1;
}
</style>


