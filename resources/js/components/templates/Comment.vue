<template>
    <div>
        <div class="d-flex flex-row mb-2" v-for="(comment, index) in comments" :key="index">
            <img :src="'/storage/user/' + comment.user_details.id + '/img/' + comment.user_details.profile_img" width="50" height="50" class="rounded-image">
            <div class="d-flex flex-column ms-3">
                <span class="name">{{ comment.user_details.first_name + ' ' + comment.user_details.last_name }}</span>
                <small class="comment-text">{{ comment.message }}</small>

                <div class="d-flex flex-row align-items-center">
                    <small>Like</small>
                    <small>Reply</small>
                    <small>18 mins</small>
                </div>
            </div>
        </div>

        <div class="card-footer border-0 px-3 py-3" style="background-color: #f8f9fa;">
            <div class="d-flex flex-start w-100">
                <img class="rounded-circle shadow-1-strong me-3"
                    :src="profileImage" alt="avatar" width="40"
                    height="40" />
                <div class="form-outline w-100">
                    <div class="d-flex flex-wrap border-post">
                        <div class="p-2 flex-fill bg-white" contenteditable="true" :id="`content_${post_id}`">

                        </div>
                    </div>
                </div>
            </div>
            <div class="float-end mb-3 mt-4">
                <button type="button" @click="postComment(post_id)" class="btn btn-primary btn-sm">Post comment</button>
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
        }
    },
    components: {

    },

    props: [
        'post_id',
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
                url: `/api/comment/store`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                document.getElementById(`content_${post_id}`).innerText = '';
                this.comments.push(res.data);
            }).catch(err => {

            });
        },
    },

    watch: {
        // $data: {
        //     handler: function(val, oldVal) {
        //         console.log('watcher: ',val);
        //     },
        //     deep: true
        // }
    },

    updated() {

    },

    mounted() {
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            params: {post_id: this.post_id},
            url: `/api/comment/`,
            headers: {Authorization: AuthStr}
        }).then(res => {
            this.comments = res.data.comments;
        }).catch(err => {

        });
    },
}
</script>

<style scoped>

</style>
