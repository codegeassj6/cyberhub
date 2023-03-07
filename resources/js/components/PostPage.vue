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
                                            <div class="position-relative" v-for="(image, index) in data.get_attach_images" :key="index">
                                                <div v-if="currentImage == index">
                                                    <img :src="`/storage/post/img/${image.image_link}`" alt="" class="img-height img">
                                                    <div class="position-absolute mx-0 absolute-center-left" v-if="currentImage == 1">
                                                        <a role="button" @click="prevImage" class="text-secondary">
                                                            <i class="fa fa-arrow-left fa-2x"></i>
                                                        </a>
                                                    </div>

                                                    <div class="position-absolute mx-0 absolute-center-right" v-if="currentImage+1 != data.get_attach_images.length">
                                                        <a role="button" @click="nextImage(data)" class="text-secondary">
                                                            <i class="fa fa-arrow-right fa-2x"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="text-center mt-1 h5" v-if="data.get_attach_images">
                                            {{ currentImage + 1 }} / {{ data.get_attach_images.length }}
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
            currentImage: '',
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
            if(this.currentImage != 0) {
                this.currentImage --;
            }
        },

        nextImage(data) {
            if(data.get_attach_images.length - 1 > this.currentImage) {
                this.currentImage ++;
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
        this.page ? this.currentImage = this.page : 0;

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
