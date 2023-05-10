<template>
    <div class="space-intro">
      <div class="container">
        Cancel
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

    props: {

    },

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
        },

        $props: {
            handler: function(val, oldVal) {
                console.log('watcher: ',val);
            },
            deep: true
        },
        some_prop: function() {
            //do something if some_prop updated
        },
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

</style>
