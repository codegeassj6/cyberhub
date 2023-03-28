<template>
    <div>
        <ul class="pagination mb-4">
            <li class="page-item"><a class="page-link" @click="prev(paginate_data.prev_page_url)">Previous</a></li>

            <li class="page-item" :class="index == paginate_data.current_page ? 'active' : null" v-for="(index) in paginate_data.last_page" :key="index">
                <a class="page-link" @click="redirect(paginate_data.path, index)">{{ index }}</a>
            </li>

            <li class="page-item"><a class="page-link" @click="next(paginate_data.next_page_url)">Next</a></li>
        </ul>
    </div>
</template>
<script>

export default {
    data() {
        return {

        }
    },
    components: {

    },

    props: [
        'paginate_data'
    ],

    computed: {

    },

    methods: {
        next(url) {
            this.$parent.nextPage(url);
        },

        prev(url) {
            this.$parent.prevPage(url);
        },

        redirect(url, page) {
            this.$parent.goToPage(url, page);
        }
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

    },
}
</script>

<style scoped>
.page-link {
    cursor: pointer;
}
</style>
