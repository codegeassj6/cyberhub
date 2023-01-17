<template>
    <div>
        <div class="container space-intro">
            <div class="row">
                <div class="col-2">
                    <router-link to="/gallery/preview">
                        <img src="https://i.imgur.com/UXdKE3o.jpg" class="img mb-2 img-thumbnail" height="200" alt="">
                    </router-link>
                </div>

                <div class="col-2">
                    <img src="https://i.imgur.com/UXdKE3o.jpg" class="img mb-2 img-thumbnail" height="200" alt="">
                </div>

                <div class="col-2">
                    <img src="https://i.imgur.com/UXdKE3o.jpg" class="img mb-2 img-thumbnail" height="200" alt="">
                </div>

                <div class="col-2">
                    <img src="https://i.imgur.com/UXdKE3o.jpg" class="img mb-2 img-thumbnail" height="200" alt="">
                </div>

                <div class="col-2">
                    <img src="https://i.imgur.com/UXdKE3o.jpg" class="img mb-2 img-thumbnail" height="200" alt="">
                </div>

                <div class="col-2">
                    <img src="https://i.imgur.com/UXdKE3o.jpg" class="img mb-2 img-thumbnail" height="200" alt="">
                </div>

                <div class="col-2">
                    <img src="https://i.imgur.com/UXdKE3o.jpg" class="img mb-2 img-thumbnail" height="200" alt="">
                </div>

                <div class="col-2">
                    <img src="https://i.imgur.com/UXdKE3o.jpg" class="img mb-2 img-thumbnail" height="200" alt="">
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
