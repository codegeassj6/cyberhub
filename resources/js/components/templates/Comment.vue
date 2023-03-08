<template>
    <div>
        <div v-for="(comment, index) in comments" :key="index">
            <div class="d-flex flex-row mb-2">
                <img :src="'/storage/user/' + comment.user_details.id + '/img/' + comment.user_details.profile_img" width="50" height="50" class="rounded-image">

                <div class="d-flex">
                    <div class="d-flex flex-column ms-3">
                        <span class="name">{{ comment.user_details.first_name + ' ' + comment.user_details.last_name }}</span>
                        <pre class="comment-text">{{ comment.message }}</pre>

                        <div class="d-flex flex-row align-items-center">
                            <a role="button"
                                class="me-2"
                                :class="comment.authLikes ? 'text-primary' : 'text-secondary'"
                                @click="likeComment($event, comment)">
                                Like
                            </a>

                            <a role="button" class="me-2 text-secondary">Reply</a>
                            <small>18 mins</small>
                        </div>
                    </div>
                </div>

                <div class="ms-auto" v-if="comment.user_id == $store.getters.currentUser.id">
                    <div class="dropdown dropdown-menu-end">
                        <a role="button" id="triggerId" class="p-2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="triggerId">
                            <a class="dropdown-item" role="button" @click="initEditComment(comment, post_id)">Edit</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" role="button" @click="deleteComment(comment)">Delete</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="card-footer border-0 px-3 py-3 bg-comment">
            <div class="d-flex flex-start w-100">
                <img class="rounded-circle shadow-1-strong me-3"
                    :src="profileImage" alt="avatar" width="40"
                    height="40" />
                <div class="form-outline w-100">
                    <div class="d-flex flex-wrap border-post">
                        <div class="p-2 flex-fill bg-white" contenteditable="true" :id="`content_${post_id}`"></div>
                    </div>
                </div>
            </div>

            <div class="float-end mb-3 mt-4">
                <button v-if="!edit.comment" type="button" @click="postComment(post_id)" class="btn btn-primary btn-sm">Post comment</button>

                <button v-if="edit.comment" type="button" @click="editComment(post_id)" class="btn btn-primary btn-sm">Edit comment</button>
                <button v-if="edit.comment" @click="cancelEditComment(post_id)" type="button" class="btn btn-danger btn-sm">Cancel</button>
            </div>
        </div>

    </div>
</template>
<script>
//import name from './

export default {
    data() {
        return {
            comments: '',
            edit: {
                comment: '',
            }
        }
    },
    components: {

    },

    props: [
        'post_id',
        // 'comments'
    ],

    computed: {
        profileImage() {
            return this.$store.getters.currentUser.profile_img ? '/storage/user/' + this.$store.getters.currentUser.id + '/img/' + this.$store.getters.currentUser.profile_img : 'https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp';
        }
    },

    methods: {
        postComment(post_id) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                params: {
                    post_id: this.post_id,
                    comment: document.getElementById(`content_${post_id}`).innerText,
                },
                url: `/api/comment`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                document.getElementById(`content_${post_id}`).innerText = '';
                this.comments.push(res.data);
            }).catch(err => {

            });
        },

        likeComment(e, data) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                params: {id: data.id},
                url: `/api/comment/like`,
                headers: {Authorization: AuthStr}
            }).then(res => {
               if(e.target.classList.contains('text-secondary')) {
                   e.target.classList.remove('text-secondary');
                   e.target.classList.add('text-primary');
               } else {
                   e.target.classList.remove('text-primary');
                   e.target.classList.add('text-secondary');
               }
            }).catch(err => {

            });
        },

        deleteComment(comment) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'delete',
                url: `/api/comment/${comment.id}`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.comments.forEach((elem, index) => {
                    if(elem.id == comment.id) {
                        this.comments.splice(index, 1);
                    }
                });
            }).catch(err => {

            });
        },

        editComment(post_id) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'patch',
                params: {
                  message: document.getElementById(`content_${post_id}`).innerText
                },
                url: `/api/comment/${this.edit.comment.id}`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.comments.forEach((elem, index) => {
                   if(elem == this.edit.comment) {
                       this.comments[index].message = document.getElementById(`content_${post_id}`).innerText;
                   }
                });
                this.edit.comment = '';
                document.getElementById(`content_${post_id}`).innerText = '';
            }).catch(err => {

            });
        },

        initEditComment(comment, post_id) {
            this.edit.comment = comment;
            comment.edit_mode = 1;
            document.getElementById(`content_${post_id}`).innerText = comment.message;
        },

        cancelEditComment(post_id) {
            document.getElementById(`content_${post_id}`).innerText = '';
            // comment.edit_mode = 0;
            this.edit.comment = '';
        }
    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                console.log('Watch Comment: ',val);
            },
            deep: true
        }
    },

    updated() {

    },

    beforeMount() {

    },

    mounted() {
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            params: {post_id: this.post_id},
            url: `/api/comment/`,
            headers: {Authorization: AuthStr}
        }).then(res => {
            this.comments = res.data;
        }).catch(err => {

        });
    },
}
</script>

<style scoped>
.bg-comment {
    background: #f1f1f1;
}
</style>
