<template>
    <div>
        <div class="d-flex flex-row mb-2">
            <img src="https://i.imgur.com/9AZ2QX1.jpg" width="50" height="50" class="rounded-image">
            <div class="d-flex flex-column ms-3">
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

        <div class="card-footer border-0 px-3 py-3" style="background-color: #f8f9fa;">
            <div class="d-flex flex-start w-100">
                <img class="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                    height="40" />
                <div class="form-outline w-100">
                    <div class="d-flex flex-wrap border-post">
                        <div class="p-2 flex-fill bg-white" contenteditable="true">

                        </div>
                    </div>
                </div>
            </div>
            <div class="float-end mb-3 mt-4">
                <button type="button" class="btn btn-primary btn-sm">Post comment</button>
                <button type="button" class="btn btn-outline-primary btn-sm">Cancel</button>
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

    props: [],

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

</style>
