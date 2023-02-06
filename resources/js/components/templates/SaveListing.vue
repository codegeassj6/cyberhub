<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(save, index) in saves" :key="index">
                <div class="d-flex">
                    <div class="me-2 bg-outline-info">{{ save.file_name }}</div>
                    <div class="ms-auto">
                        <span class="me-3">{{ save.created_at  }}</span>
                        <a href="#!" class="text-primary me-2" @click="download(save)"><i class="fa fa-download"></i> Download</a>
                        <a href="#!" class="text-danger" @click="deleteSave(save)"><i class="fa fa-trash-o"></i> Delete</a>
                    </div>
                </div>
            </li>
        </ul>
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
        'saves'
    ],

    computed: {

    },

    methods: {
        download(data) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                url: `/api/save/`+data.id,
                headers: {Authorization: AuthStr}
            }).then(res => {

            }).catch(err => {

            });
        },

        deleteSave(data) {
            this.saves.forEach((elem,index) => {
                if(elem.id == data.id) {
                    this.saves.splice(index, 1);
                }
            });

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'delete',
                url: `/api/save/destroy/`+data.id,
                headers: {Authorization: AuthStr}
            }).then(res => {

            }).catch(err => {

            });

            // const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            // axios.delete(`/api/save/`+data.id, {
            //     headers: {
            //         Authorization: AuthStr
            //     },
            // }).then(res => {
            //     console.log(res.data);
            // }).catch(err => {

            // });

        },


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
