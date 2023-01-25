<template>
    <div>
        <div class="card mb-3 shadow" v-for="(data, index) in datas" :key="index">
            <div class="d-flex justify-content-between p-2 px-3">
                <div class="d-flex flex-row align-items-center">
                    <img :src="'/storage/user/' + data.user.id + '/img/' + data.user.profile_img" height="50" width="50">
                    <div class="d-flex flex-column ms-2">
                        <span class="font-weight-bold">{{ data.user.first_name }} {{ data.user.last_name }} </span>
                        <small class="text-mute">20 mins</small>
                    </div>
                </div>
                <div class="d-flex flex-row mt-1 ellipsis">
                    <i class="fa fa-ellipsis-h"></i>
                </div>
            </div>

            <img src="https://i.imgur.com/xhzhaGA.jpg" class="img" height="300">

            <div class="p-2">
                <pre class="text-justify">{{data.message}}</pre>
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
                    <Comment />

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
