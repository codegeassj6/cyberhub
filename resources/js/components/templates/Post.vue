<template>
    <div>
        <div class="card mb-4" v-for="(data, index) in datas" :key="index">
            <div class="d-flex justify-content-between p-2 px-3">
                <div class="d-flex flex-row align-items-center">
                    <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" class="rounded-circle">
                    <div class="d-flex flex-column ms-2">
                        <span class="font-weight-bold">Jeanette </span>
                        <small class="text-primary">Collegues</small>
                    </div>
                </div>
                <div class="d-flex flex-row mt-1 ellipsis">
                    <small class="me-2">20 mins</small>
                    <i class="fa fa-ellipsis-h"></i>
                </div>
            </div>
            <img src="https://i.imgur.com/xhzhaGA.jpg" class="img" height="300">
            <div class="p-2">
                <p class="text-justify">{{data.message}}</p>
                <hr>

                <div class="btn-group d-flex mb-2" role="group">
                    <a href="" class="btn btn-outline-primary w-100"><i class="fa fa-thumbs-up"></i> Like</a>
                    <a href="" class="btn btn-outline-primary w-100"><i class="fa fa-commenting-o"></i> 2 Comments</a>
                    <a href="" class="btn btn-outline-primary w-100"><i class="fa fa-share"></i> Share</a>
                </div>

                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row icons d-flex align-items-center"> <i class="fa fa-heart"></i> <i class="fa fa-smile-o ms-2"></i> </div>
                    <div class="d-flex flex-row muted-color"> <span>2 comments</span> <span class="ms-2">Share</span> </div>
                </div>

                <hr>
                <div class="comments">
                    <div class="d-flex flex-row mb-2">
                        <img src="https://i.imgur.com/9AZ2QX1.jpg" width="50" height="50" class="rounded-image">
                        <div class="d-flex flex-column ms-2">
                            <span class="name">Daniel Frozer</span>
                            <small class="comment-text">I like this alot! thanks alot</small>

                            <div class="d-flex flex-row align-items-center status">
                                <small>Like</small>
                                <small>Reply</small>
                                <small>Translate</small>
                                <small>18 mins</small>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer border-0" style="background-color: #f8f9fa;">
                        <div class="d-flex flex-start w-100">
                            <img class="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                                height="40" />
                            <div class="form-outline w-100">
                                <div class="d-flex flex-wrap mb-2 border-post">
                                    <div class="p-2 flex-fill bg-white" contenteditable="true">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="float-end mt-2 pt-1">
                        <button type="button" class="btn btn-primary btn-sm">Post comment</button>
                        <button type="button" class="btn btn-outline-primary btn-sm">Cancel</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import name from './

export default {
    data() {
        return {

        }
    },
    components: {

    },

    props: [
        'datas'
    ],

    computed: {

    },

    methods: {

    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                console.log('watcher: ',val);
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
</style>
