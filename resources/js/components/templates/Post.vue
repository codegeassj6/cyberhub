<template>
    <div>
        <div class="card mb-3" v-for="(data, index) in datas.data" :key="index">
            <div class="d-flex p-2 px-3">
                <div class="d-flex flex-row align-items-center">
                    <img :src="'/storage/user/' + data.get_user.id + '/img/' + data.get_user.profile_img" height="50" width="50">
                    <div class="d-flex flex-column ms-2">
                        <span class="font-weight-bold">{{ data.get_user.first_name }} {{ data.get_user.last_name }} </span>
                        <small class="text-mute">{{ data.created_time }}</small>
                    </div>
                </div>
                <div class="ms-auto mt-1 dropdown dropdown-menu-end" v-if="$store.getters.currentUser.id == data.user_id && $route.name == 'Home'">
                    <a role="button" class="p-2 text-secondary" data-bs-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link :to="`post/${data.id}/edit/`" role="button" class="dropdown-item">Edit</router-link>
                        </li>
                        <li class="dropdown-divider"></li>
                        <li>
                            <a class="dropdown-item" role="button" @click="deletePost(data)">Delete</a>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="px-3">
                <div class="text-justify div-like-pre" :id="`post_message_${data.id}`">{{ data.message }}</div>
            </div>


            <div v-if="$route.path == '/'">
                <div v-if="data.get_attach_images.length == 1">
                    <div class="w-100" v-for="(image, index) in data.get_attach_images" :key="index">
                        <router-link :to="{ name: 'PostPage', params: { id: data.id, page: index }}">
                            <img :src="computedPostImage(image.image_link)" class="img attach_image">
                        </router-link>
                    </div>

                </div>

                <div v-if="data.get_attach_images.length == 2">
                    <div class="w-50 d-inline-block" v-for="(image, index) in data.get_attach_images" :key="index">
                        <router-link :to="{ name: 'PostPage', params: { id: data.id, page: index }}">
                            <img :src="computedPostImage(image.image_link)" class="img attach_image">
                        </router-link>
                    </div>
                </div>

                <div v-if="data.get_attach_images.length == 3">
                    <span v-for="(image, index) in data.get_attach_images" :key="index">
                        <div class="d-inline-block w-50" v-if="index != 2">
                            <router-link :to="{ name: 'PostPage', params: { id: data.id, page: index }}">
                                <img :src="computedPostImage(image.image_link)" class="img attach_image">
                            </router-link>
                        </div>
                        <div class="w-100 d-block" v-else>
                            <router-link :to="{ name: 'PostPage', params: { id: data.id, page: index }}">
                                <img :src="computedPostImage(image.image_link)" class="img attach_image">
                            </router-link>
                        </div>
                    </span>
                </div>

                <div v-if="data.get_attach_images.length == 4">
                    <span v-for="(image, index) in data.get_attach_images" :key="index">
                        <div class="d-inline-block w-50">
                            <router-link :to="{ name: 'PostPage', params: { id: data.id, page: index }}">
                                <img :src="computedPostImage(image.image_link)" :data-index="index" class="img attach_image">
                            </router-link>
                        </div>
                    </span>
                </div>

                <div v-if="data.get_attach_images.length >= 5">
                    <span v-for="(image, index) in data.get_attach_images" :key="index">
                        <div class="d-inline-block position-relative w-50" v-if="index <= 3">
                            <router-link :to="{ name: 'PostPage', params: { id: data.id, page: index }}">
                                <img :src="computedPostImage(image.image_link)" :class="index == 3 ? 'opacity-50' : ''" class="img attach_image">
                                <div class="position-absolute" v-if="index == 3">
                                    <i class="fa fa-plus-square text-light fa-lg"></i>
                                </div>
                            </router-link>

                        </div>

                    </span>
                </div>
            </div>

            <div class="px-2">
                <hr />
                <div class="btn-group d-flex mb-2" role="group">
                    <a
                        role="button"
                        class="btn btn-outline-secondary w-100"
                        :class="data.authLikes ? 'text-primary' : '' "
                        @click="likePost($event, data)"
                    >
                        <i class="fa fa-thumbs-up"></i>
                        <span>Like</span>
                    </a>
                    <a href="#!" class="btn btn-outline-secondary w-100">
                        <i class="fa fa-commenting-o"></i>
                        <span>{{ data.get_comments }} Comments</span>
                    </a>
                    <a href="#!" class="btn btn-outline-secondary w-100"><i class="fa fa-share"></i> Share</a>
                </div>

                <div class="d-flex justify-content-between align-items-center px-2">
                    <div class="d-flex flex-row icons d-flex align-items-center">
                        <i class="fa fa-thumbs-up"></i>
                    </div>
                    <div class="d-flex flex-row muted-color">
                        <div class="dropdown dropdown-menu-end">
                            <a href="" class="dropdown-toggle" data-bs-toggle="dropdown">Latest Comments</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" @click="latestComments(data)" role="button">Latest Comments</a></li>
                                <li><a class="dropdown-item" @click="oldComments(data)" role="button">Old Comments</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr>
                <div class="comments">
                    <Comment :post_id="data.id" :key="data.id " />
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Comment from './Comment.vue';

export default {
    data() {
        return {
            // datas: '',
            data_pass: {
                sort: '',
            },
        }
    },
    components: {
        Comment,
    },

    props: [
        'datas'
    ],

    computed: {

    },

    methods: {
        computedPostImage(image_link) {
            return `/storage/post/img/${image_link}`;
        },

        likePost(e, data) {
            data.authLikes = !data.authLikes;

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                params: {
                    id: data.id,
                },
                url: `/api/post/like`,
                headers: {Authorization: AuthStr}
            }).then(res => {

            }).catch(err => {

            });
        },

        deletePost(data) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'delete',
                url: `/api/post/${data.id}`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.datas.data.forEach((elem, index) => {
                    if(elem.id == data.id) {
                        this.datas.data.splice(index, 1);
                    }
                });
            }).catch(err => {

            });
        },

        latestComments(data) {

        },

        oldComments(data) {

        },

    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                console.log('Watch Post: ',val);
            },
            deep: true
        }
    },



    updated() {

    },

    mounted() {

    },
}
</script>

<style scoped>

.border-post {
    border: 1px solid #e1e1e1;
}

.attach_image {
    height: 350px;
}

.position-absolute {
    top: 50%;
    left: 50%;
    right: 0;
}

.btn-outline-secondary:hover {
    background: #ffffff;
    color: #0d6efd !important;
}

</style>
