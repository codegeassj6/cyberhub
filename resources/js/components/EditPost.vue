<template>
<div>
    <div class="bg-dark bg-gradient">
        <div class="space-intro">
            <div class="container">
                <div class="row">
                    <div class="col-9">
                        <div class="card">
                            <div class="card-body">
                                s
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="card">
                            <div class="card-body">
                                s
                            </div>
                        </div>
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
            post: '',
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
                console.log('Edit Post Watcher: ',val);
            },
            deep: true
        }
    },

    updated() {

    },

    beforeMounted() {

    },

    mounted() {
        if(this.$store.getters.currentUser) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                url: `/api/post/show/${this.$route.params.id}`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.post = res.data;
            }).catch(err => {

            });
        }
    },
}
</script>

<style scoped>
.bg-dark {
    height: 100vh;
}

</style>
