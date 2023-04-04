<template>
  <div>
    <div class="card mb-3" v-for="(data, index) in datas.data" :key="index">
      <div class="d-flex p-2 px-3">
        <div class="d-flex flex-row align-items-center">
          <img
            :src="computedUserAvatar(data)"
            height="50"
            width="50"
          />
          <div class="d-flex flex-column ms-2">
            <span class="font-weight-bold"
              >{{ data.get_user.first_name }} {{ data.get_user.last_name }}
            </span>
            <small class="text-mute">{{ data.created_time }}</small>
          </div>
        </div>
        <div
          class="ms-auto mt-1 dropdown dropdown-menu-end"
          v-if="
            $store.getters.currentUser.id == data.user_id
            ||
            $store.getters.currentUser.role == 1
            &&
            $route.name == 'Home'
          "
        >
          <a role="button" class="p-2 text-secondary" data-bs-toggle="dropdown"
            ><i class="fa fa-ellipsis-h"></i
          ></a>
          <ul class="dropdown-menu">
            <li>
              <a
                role="button"
                class="dropdown-item"
                data-bs-toggle="modal"
                @click="updateParentEditPost(data)"
                data-bs-target="#editModal"
                >Edit</a
              >
            </li>
            <li class="dropdown-divider"></li>
            <li>
              <a class="dropdown-item" role="button" @click="deletePost(data)"
                >Delete</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="px-3">
        <div class="text-justify div-like-pre" :id="`post_message_${data.id}`">{{ data.message }}</div>
      </div>

      <div v-if="$route.path == '/'">
        <div v-if="data.get_attach_files.length == 1">
          <div
            class="w-100"
            v-for="(file, index) in data.get_attach_files"
            :key="index"
          >
            <router-link
              :to="{ name: 'PostPage', params: { id: data.id, page: index } }"
            >
              <img
                :src="computedPostFile(file.file_link)"
                class="w-100 attach_image"
                v-if="
                  getFileFormat(file.file_link) == 'jpg' ||
                  getFileFormat(file.file_link) == 'jpeg' ||
                  getFileFormat(file.file_link) == 'png'
                "
              />
              <video class="w-100 h-100" v-else controls>
                <source
                  :src="computedPostFile(file.file_link)"
                  type="video/mp4"
                />
              </video>
            </router-link>
          </div>
        </div>

        <div
          class="d-inline-flex w-100"
          v-if="data.get_attach_files.length == 2"
        >
          <div
            class="w-50 bg-dark"
            v-for="(file, index) in data.get_attach_files"
            :key="index"
          >
            <router-link
              :to="{ name: 'PostPage', params: { id: data.id, page: index } }"
            >
              <img
                :src="computedPostFile(file.file_link)"
                class="w-100 attach_image"
                v-if="
                  getFileFormat(file.file_link) == 'jpg' ||
                  getFileFormat(file.file_link) == 'jpeg' ||
                  getFileFormat(file.file_link) == 'png'
                "
              />
              <video class="w-100 attach_image" v-else controls>
                <source
                  :src="computedPostFile(file.file_link)"
                  type="video/mp4"
                />
              </video>
            </router-link>
          </div>
        </div>

        <div v-if="data.get_attach_files.length == 3">
          <div class="row mx-0">
            <div
              :class="index == 2 ? 'col-12 px-0' : 'col-md-6 px-0'"
              v-for="(file, index) in data.get_attach_files"
              :key="index"
            >
              <div class="bg-dark h-100">
                <router-link
                  :to="{
                    name: 'PostPage',
                    params: { id: data.id, page: index },
                  }"
                >
                  <img
                    :src="computedPostFile(file.file_link)"
                    class="w-100 attach_image"
                    v-if="
                      getFileFormat(file.file_link) == 'jpg' ||
                      getFileFormat(file.file_link) == 'jpeg' ||
                      getFileFormat(file.file_link) == 'png'
                    "
                  />
                  <video class="w-100 attach_image" v-else controls>
                    <source
                      :src="computedPostFile(file.file_link)"
                      type="video/mp4"
                    />
                  </video>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div v-if="data.get_attach_files.length == 4">
          <div class="row mx-0">
            <div
              class="col-md-6 px-0"
              v-for="(file, index) in data.get_attach_files"
              :key="index"
            >
              <div class="bg-dark h-100">
                <router-link
                  :to="{
                    name: 'PostPage',
                    params: { id: data.id, page: index },
                  }"
                >
                  <img
                    :src="computedPostFile(file.file_link)"
                    class="w-100 attach_image"
                    v-if="
                      getFileFormat(file.file_link) == 'jpg' ||
                      getFileFormat(file.file_link) == 'jpeg' ||
                      getFileFormat(file.file_link) == 'png'
                    "
                  />
                  <video class="w-100 attach_image" v-else controls>
                    <source
                      :src="computedPostFile(file.file_link)"
                      type="video/mp4"
                    />
                  </video>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div v-if="data.get_attach_files.length >= 5">
          <div class="row mx-0">
            <div
              class="col-md-6 position-relative px-0"
              v-show="index < 4"
              v-for="(file, index) in data.get_attach_files"
              :key="index"
            >
              <div class="bg-dark h-100">
                <router-link
                  :to="{
                    name: 'PostPage',
                    params: { id: data.id, page: index },
                  }"
                >
                  <img
                    :class="index == 3 ? 'opacity-25' : ''"
                    :src="computedPostFile(file.file_link)"
                    class="w-100 attach_image"
                    v-if="
                      getFileFormat(file.file_link) == 'jpg' ||
                      getFileFormat(file.file_link) == 'jpeg' ||
                      getFileFormat(file.file_link) == 'png'
                    "
                  />
                  <video
                    :class="index == 3 ? 'opacity-25' : ''"
                    class="w-100 attach_image"
                    v-else
                    controls
                  >
                    <source
                      :src="computedPostFile(file.file_link)"
                      type="video/mp4"
                    />
                  </video>
                  <div
                    class="position-absolute center text-white"
                    v-show="index == 3"
                  >
                    <i class="fa fa-plus-square"></i>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-2">
        <hr />
        <div class="btn-group d-flex mb-2" role="group">
          <a
            role="button"
            class="btn btn-outline-secondary w-100"
            :class="data.authLikes ? 'text-primary' : ''"
            @click="likePost($event, data)"
          >
            <i class="fa fa-thumbs-up"></i>
            <span>Like</span>
          </a>
          <a role="button" class="btn btn-outline-secondary w-100">
            <i class="fa fa-commenting-o"></i>
            <span>Comments</span>
          </a>
        </div>

        <div class="d-flex">
          <div v-if="data.get_post_likes.length">
            <img src="/img/like.jpg" width="20" height="20" />
            <span>{{ data.get_post_likes.length }}</span>
            <span v-if="data.get_post_likes.length > 1">Likes</span>
            <span v-else>Like</span>
          </div>

          <div class="ms-auto">
            <div class="dropdown dropdown-menu-end">
              <a href="" class="dropdown-toggle" data-bs-toggle="dropdown"
                >Latest Comments</a
              >
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    @click="latestComments(data)"
                    role="button"
                    >Latest Comments</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="oldComments(data)"
                    role="button"
                    >Old Comments</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div class="comments">
          <Comment
            :post_id="data.id"
            :sort="data_pass.sort"
            :sort_id="data_pass.sort_id"
            :key="data.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Comment from "./Comment.vue";

export default {
  data() {
    return {
      // datas: '',
      data_pass: {
        sort: "",
        sort_id: null,
      },
    };
  },
  components: {
    Comment,
  },

  props: ["datas"],

  computed: {},

  methods: {
    computedPostFile(file_link) {
      return `/storage/post/file/${file_link}`;
    },

    computedUserAvatar(data) {
      if(data.get_user.profile_img) {
        return '/storage/user/' + data.get_user.id + '/img/' + data.get_user.profile_img;
      } else {
        return 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
      }
    },

    likePost(e, data) {
      data.authLikes = !data.authLikes;

      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "post",
        params: {
          id: data.id,
        },
        url: `/api/post/like`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          if (!res.data.message) {
            data.get_post_likes.push(res.data);
          } else {
            data.get_post_likes.forEach((elem, index) => {
              if (elem.user_id == this.$store.getters.currentUser.id) {
                data.get_post_likes.splice(index, 1);
              }
            });
          }
        })
        .catch((err) => {});
    },

    deletePost(data) {
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "delete",
        url: `/api/post/${data.id}`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          this.datas.data.forEach((elem, index) => {
            if (elem.id == data.id) {
              this.datas.data.splice(index, 1);
            }
          });
        })
        .catch((err) => {});
    },

    latestComments(data) {
      this.data_pass.sort = "latest";
      this.data_pass.sort_id = data.id;
    },

    oldComments(data) {
      this.data_pass.sort = "oldest";
      this.data_pass.sort_id = data.id;
    },

    updateParentEditPost(data) {
      this.$parent.edit_post.data = data;
      this.$parent.edit_post.message = data.message;
      this.$parent.edit_post.attachment_remove = [];
    },

    getFileFormat(fileName) {
      var re = /(?:\.([^.]+))?$/;
      var ext = re.exec(fileName)[1];
      return ext.trim();
    },
  },
  updated() {},

  mounted() {},
};
</script>

<style scoped>
.border-post {
  border: 1px solid #e1e1e1;
}

.attach_image {
  height: 300px;
}

.btn-outline-secondary:hover {
  background: #ffffff;
  color: #0d6efd !important;
}
</style>
