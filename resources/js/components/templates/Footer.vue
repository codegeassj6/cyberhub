<template>
    <div>
        <div class="bg-primary mt-4 text-white" :class="$route.name == 'Login' || $route.name == 'Register' || $route.path == '/games' || $route.name == 'Callback_provider' ? 'fixed-bottom' : null">
            <div class="container">
                <div class="d-flex">
                    <div class="p-4 flex-fill">
                        <h5>Location</h5>
                        <div>
                            <a href="#!" class="text-white">Lapu-lapu, San Pedro</a>
                        </div>
                        <div>
                            <a href="#!" class="text-white">Bangus, San Pedro</a>
                        </div>
                        <div>
                            <a href="#!" class="text-white">Bagdhad, San Pedro</a>
                        </div>
                    </div>
                    <div class="p-4 flex-fill">
                        <h5>Frequest Asked Question</h5>
                        <div>
                            <a href="#!" class="text-white">Price</a>
                        </div>
                        <div>
                            <a href="#!" class="text-white">Opening Time</a>
                        </div>
                    </div>
                    <div class="p-4 flex-fill">
                        <h5>Subscribe</h5>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Email">
                            <button class="btn btn-info text-white" type="button"><i class="fa fa-send"></i> Send</button>
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
