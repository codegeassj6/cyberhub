<template>
    <div>
        <div class="bg-dark vh-100" @click="goBack($event)" id="go_back" @keydown="goBack($event)">
            <div class="container" v-for="(data, index) in post.data" :key="index">
                <div class="padding-intro">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-title border-bottom">
                                <div class="d-flex">
                                    <div class="mb-1">
                                        <a role="button" @click="$router.back()" class="text-secondary h4">
                                            <i class="fa fa-arrow-circle-left"></i> Go back
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-text">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="card">
                                            <div class="position-relative" v-for="(file, index) in data.get_attach_files" :key="index">
                                                <div v-if="currentFile == index">
                                                    <img :src="`/storage/post/file/${file.file_link}`" alt="" class="img-height img">
                                                    <div class="position-absolute mx-0 absolute-center-left" v-if="currentFile == 1">
                                                        <a role="button" @click="prevImage" class="text-secondary">
                                                            <i class="fa fa-arrow-left fa-2x"></i>
                                                        </a>
                                                    </div>

                                                    <div class="position-absolute mx-0 absolute-center-right" v-if="currentFile+1 != data.get_attach_files.length">
                                                        <a role="button" @click="nextImage(data)" class="text-secondary">
                                                            <i class="fa fa-arrow-right fa-2x"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="text-center mt-1 h5" v-if="data.get_attach_files">
                                            {{ currentFile + 1 }} / {{ data.get_attach_files.length }}
                                        </div>

                                    </div>

                                    <div class="col-lg-4 pe-2 ps-0">
                                        <Post :datas="post" />
                                    </div>
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
import Post from './templates/Post.vue'

export default {
    data() {
        return {
            currentFile: '',
            post: '',
        }
    },
    components: {
        Post,
    },

    props: [
        'page'
    ],

    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        },
    },

    methods: {
        prevImage(data) {
            if(this.currentFile != 0) {
                this.currentFile --;
            }
        },

        nextImage(data) {
            if(data.get_attach_files.length - 1 > this.currentFile) {
                this.currentFile ++;
            }
        },

        goBack(e) {
            if(e.target.id == 'go_back' || e.keyCode == 27) {
                this.$router.back();
            }
        }
    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                console.log('Watch PostPage: ',val);
            },
            deep: true
        }
    },

    updated() {

    },

    // deactivated() {
    //     // when you visit the page it will save the previous image so we will destroy it
    //     this.$destroy();
    // },




    mounted() {
        this.page ? this.currentFile = this.page : 0;

        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            url: `/api/post/show/${this.$route.params.id}`,
            headers: {Authorization: AuthStr}
        }).then(res => {
            this.post = res.data;
            console.log(this.post);
        }).catch(err => {

        });
    },
}
</script>

<style scoped>
.padding-intro {
    padding-top: 80px;
}

.img-height {
    height: 80vh;
}

.absolute-center-left {
    left: 1%;
    top: 45%;
}

.absolute-center-right {
    right: 1%;
    top: 45%;
}


</style>
