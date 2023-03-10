<template>
<div>
    <div class="bg-dark bg-gradient">
        <div class="space-intro">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        s
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

    beforeMounted() {

    },

    mounted() {

    },
}
</script>

<style scoped>
.bg-dark {
    height: 100vh;
}

</style>
