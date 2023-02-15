<template>
    <div>
        <div class="space-intro">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">

                    </div>

                    <div class="col-md-4">
                        s
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
            message: '',
        }
    },
    components: {

    },

    props: [],

    computed: {

    },

    methods: {
        updateMessage(e) {
            this.message = e.target.innerText;
        }
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
