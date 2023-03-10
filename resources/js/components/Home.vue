<template>
    <div>
        <template v-if="!currentUser">
            <div id="carouselintro" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselintro" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselintro" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselintro" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/img/car1.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/img/car2.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/img/car3.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselintro" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselintro" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="container">
                <div class="d-flex">
                    <div class="p-4 bg-info flex-fill text-white text-center">
                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-keyboard-o text-primary" style="font-size:100px"></i>
                            </div>
                            <div class="card-body text-dark">
                                Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat. Consectetur esse deserunt in amet minim reprehenderit Lorem non. Incididunt in veniam irure ipsum eu Lorem consectetur mollit consequat. Dolore duis id id Lorem est enim do pariatur cillum nulla nostrud ex laboris. Consectetur cillum labore proident excepteur nisi sint proident adipisicing nostrud. Enim deserunt proident proident sit.
                            </div>
                            <div class="card-footer">
                                <div class="btn btn-primary">Browse Games</div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 bg-primary flex-fill text-white text-center">
                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-coffee text-primary" style="font-size:100px"></i>
                            </div>
                            <div class="card-body text-dark">
                                Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat. Consectetur esse deserunt in amet minim reprehenderit Lorem non. Incididunt in veniam irure ipsum eu Lorem consectetur mollit consequat. Dolore duis id id Lorem est enim do pariatur cillum nulla nostrud ex laboris. Consectetur cillum labore proident excepteur nisi sint proident adipisicing nostrud. Enim deserunt proident proident sit.
                            </div>
                            <div class="card-footer">
                                <div class="btn btn-info text-white">Buy Food or Drinks</div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 bg-info flex-fill text-white text-center">
                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-print text-primary" style="font-size:100px"></i>
                            </div>
                            <div class="card-body text-dark">
                                Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat. Consectetur esse deserunt in amet minim reprehenderit Lorem non. Incididunt in veniam irure ipsum eu Lorem consectetur mollit consequat. Dolore duis id id Lorem est enim do pariatur cillum nulla nostrud ex laboris. Consectetur cillum labore proident excepteur nisi sint proident adipisicing nostrud. Enim deserunt proident proident sit.
                            </div>
                            <div class="card-footer">
                                <div class="btn btn-primary px-4">Print</div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <br />
                <h3 class="text-center">Our Shop Location</h3>

                <div class="card p-4 mb-4">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="/img/GoogleMapTA.webp" class="img" alt="">
                        </div>
                        <div class="col-md-6">
                            <div class="text-center mt-4">
                                <h3>Lapu-lapu, San Pedro</h3>
                            </div>
                            <div class="text-center mt-4">
                                Consequat non sunt dolor eiusmod consequat. Deserunt nulla excepteur culpa esse excepteur id cupidatat mollit. Est nulla non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in qui voluptate laborum et do amet consectetur tempor commodo nisi. Fugiat magna deserunt adipisicing irure esse eu consequat duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt quis officia quis officia reprehenderit nisi.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card p-4 mb-4">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="/img/GoogleMapTA.webp" class="img" alt="">
                        </div>
                        <div class="col-md-6">
                            <div class="text-center mt-4">
                                <h3>Bangus,San Pedro</h3>
                            </div>
                            <div class="text-center mt-4">
                                Consequat non sunt dolor eiusmod consequat. Deserunt nulla excepteur culpa esse excepteur id cupidatat mollit. Est nulla non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in qui voluptate laborum et do amet consectetur tempor commodo nisi. Fugiat magna deserunt adipisicing irure esse eu consequat duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt quis officia quis officia reprehenderit nisi.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card p-4 mb-4">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="/img/GoogleMapTA.webp" class="img" alt="">
                        </div>
                        <div class="col-md-6">
                            <div class="text-center mt-4">
                                <h3>Bagdhad, San Vicente</h3>
                            </div>
                            <div class="text-center mt-4">
                                Consequat non sunt dolor eiusmod consequat. Deserunt nulla excepteur culpa esse excepteur id cupidatat mollit. Est nulla non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in qui voluptate laborum et do amet consectetur tempor commodo nisi. Fugiat magna deserunt adipisicing irure esse eu consequat duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt quis officia quis officia reprehenderit nisi.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mb-4">
                <h3>Our PC Setup</h3>
            </div>

            <div class="container">
                <div class="row">

                    <div class="col-3">
                        <div class="card">
                            <div class="card">
                                <img class="card-img-top img" src="/img/pcbundle.jpg" alt="pcbundle">
                                <div class="card-body">
                                    <h5 class="card-title">Ryzen 5 5600 / Rx 6600</h5>
                                    <div class="card-text mb-2">
                                        <div>Motherboard: A320m MSI</div>
                                        <div>Ram: 2x8gb DDR4 3200mhz</div>
                                        <div>Monitor: Lenovo 24" IPS</div>
                                    </div>
                                    <a href="#" class="btn btn-primary">View full specs</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="card">
                            <div class="card">
                                <img class="card-img-top img" src="/img/pcbundle.jpg" alt="pcbundle">
                                <div class="card-body">
                                    <h5 class="card-title">Ryzen 5 5500 / Rx 580 8gb</h5>
                                    <div class="card-text mb-2">
                                        <div>Motherboard: A320m Gigabyte</div>
                                        <div>Ram: 2x8gb DDR4 3200mhz</div>
                                        <div>Monitor: BenQ 24" IPS</div>
                                    </div>
                                    <a href="#" class="btn btn-primary">View full specs</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="card">
                            <div class="card">
                                <img class="card-img-top img" src="/img/pcbundle.jpg" alt="pcbundle">
                                <div class="card-body">
                                    <h5 class="card-title">Intel I3 9100F / Rx 5500XT 8gb</h5>
                                    <div class="card-text mb-2">
                                        <div>Motherboard: A320m MSI</div>
                                        <div>Ram: 2x8gb DDR4 3200mhz</div>
                                        <div>Monitor: Lenovo 24" IPS</div>
                                    </div>
                                    <a href="#" class="btn btn-primary">View full specs</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="card">
                            <div class="card">
                                <img class="card-img-top img" src="/img/pcbundle.jpg" alt="pcbundle">
                                <div class="card-body">
                                    <h5 class="card-title">Ryzen 5 3400G / Vega 11</h5>
                                    <div class="card-text mb-2">
                                        <div>Motherboard: A320m Asus</div>
                                        <div>Ram: 2x8gb DDR4 3200mhz</div>
                                        <div>Monitor: Lenovo 24" IPS</div>
                                    </div>
                                    <a href="#" class="btn btn-primary">View full specs</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 mt-4">
                        <div class="card">
                            <div class="card">
                                <img class="card-img-top img" src="/img/pcbundle.jpg" alt="pcbundle">
                                <div class="card-body">
                                    <h5 class="card-title">Ryzen 5 2400G / Vega 7</h5>
                                    <div class="card-text mb-2">
                                        <div>Motherboard: A320m Asus</div>
                                        <div>Ram: 2x8gb DDR4 3200mhz</div>
                                        <div>Monitor: Lenovo 24" IPS</div>
                                    </div>
                                    <a href="#" class="btn btn-primary">View full specs</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 mt-4">
                        <div class="card">
                            <div class="card">
                                <img class="card-img-top img" src="/img/pcbundle.jpg" alt="pcbundle">
                                <div class="card-body">
                                    <h5 class="card-title">Ryzen 3 3200G / Vega 8</h5>
                                    <div class="card-text mb-2">
                                        <div>Motherboard: A320m Asus</div>
                                        <div>Ram: 2x8gb DDR4 3200mhz</div>
                                        <div>Monitor: Lenovo 24" IPS</div>
                                    </div>
                                    <a href="#" class="btn btn-primary">View full specs</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 mt-4">
                        <div class="card">
                            <div class="card">
                                <img class="card-img-top img" src="/img/pcbundle.jpg" alt="pcbundle">
                                <div class="card-body">
                                    <h5 class="card-title">Ryzen 5 2200G / Vega 8</h5>
                                    <div class="card-text mb-2">
                                        <div>Motherboard: A320m Asus</div>
                                        <div>Ram: 2x8gb DDR4 3200mhz</div>
                                        <div>Monitor: Lenovo 24" IPS</div>
                                    </div>
                                    <a href="#" class="btn btn-primary">View full specs</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 mt-4">
                        <div class="card">
                            <div class="card">
                                <img class="card-img-top img" src="/img/pcbundle.jpg" alt="pcbundle">
                                <div class="card-body">
                                    <h5 class="card-title">Athlon 3000G / Vega 3</h5>
                                    <div class="card-text mb-2">
                                        <div>Motherboard: A320m Asus</div>
                                        <div>Ram: 2x8gb DDR4 3200mhz</div>
                                        <div>Monitor: Lenovo 24" IPS</div>
                                    </div>
                                    <a href="#" class="btn btn-primary">View full specs</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </template>

        <template v-else>
            <div class="container space-intro">
                <div class="row d-flex">
                    <div class="col-md-8">
                        <div class="card mb-4">
                            <div class="card-header">
                                <div class="h6">What's up</div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex flex-column mb-2 rounded border">
                                    <div class="flex-fill p-2 min-100"
                                        id="editable"
                                        contenteditable="true">
                                    </div>
                                </div>

                                <div :class="attach_exist ? 'd-flex' : 'd-none'">
                                    <div class="flex-fill">
                                        <div class="d-flex">
                                            <div
                                                class="card w-25 position-relative dropbox-img me-2"
                                                v-for="(img, index) in attach_images" :key="index"
                                            >
                                                <img :src="img" class="img" alt="">
                                                <div class="position-absolute img_attach_remove">
                                                    <button class="btn btn-close border bg-primary" @click="removeAttachInPost(img)"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="card-footer text-muted">
                                <div class="d-flex">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-light px-2 btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                            <i class="fa fa-smile-o fa-lg"></i>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                                            <li><a class="dropdown-item" href="#">Link 3</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div class="">
                                            <button class="btn btn-light px-4 btn-sm" type="button" @click="uploadTriggerInput">
                                                <i class="fa fa-file-image-o fa-lg"></i>
                                            </button>
                                            <input type="file" class="d-none" ref="input_upload" accept="image/png, image/jpg, image/jpeg" multiple @change="attachImage">
                                        </div>
                                    </div>

                                    <div class="ms-auto">
                                        <div class="">
                                            <button class="btn btn-primary btn-sm px-5 shadow" @click="createPost">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Post :datas="posts" @clicked="emitFromChild" />
                    </div>

                    <div class="col-md-4">

                    </div>
                </div>
            </div>

            <!-- <Adsense
                data-ad-client="ca-pub-5828491790124517"
                data-ad-slot="7486431136">
            </Adsense> -->

            <div class="modal" id="editModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Modal Heading</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="d-flex flex-column mb-2 rounded border">
                                <div class="div-like-pre flex-fill p-2 min-100"
                                    contenteditable="true"
                                    ref="edit_modal_contenteditable"
                                    :id="`editable_modal`"
                                >{{edit_data.message}}</div>
                            </div>

                            <div
                                class="card d-inline-flex w-25 position-relative dropbox-img"
                                v-for="(img, index) in edit_data.get_attach_images" :key="index"
                                ref="display_attachment"
                            >
                                <img :src="'/storage/post/img/'+img.image_link" class="img" alt="">
                                <div class="position-absolute img_attach_remove">
                                    <button class="btn btn-close border bg-primary" @click="removeAttachInEdit($event, img)"></button>
                                </div>
                            </div>


                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="editPost(edit_data)">Save</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    </div>

                    </div>
                </div>
            </div>
        </template>
    </div>

</template>
<script>
import Post from './templates/Post.vue';

export default {
    data() {
        return {
            image: [],
            attach_exist: false,
            attach_images: [],
            form_data: '',
            posts: '',
            edit_data: '',
            edit: {
                attachment: [],
            },

        }
    },

    components: {
        Post,
    },

    props: {

    },

    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        },
    },

    methods: {
        uploadTriggerInput() {
            var elem = this.$refs.input_upload;
            if(elem && document.createEvent) {
                var evt = document.createEvent("MouseEvents");
                evt.initEvent("click", true, false);
                elem.dispatchEvent(evt);
            }
        },

        createPost() {
            if(document.getElementById('editable').innerText.length || this.form_data) {
                const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
                axios({
                    method: 'POST',
                    params: {
                        message: document.getElementById('editable').innerText,
                        image: this.form_data,
                    },
                    data: this.form_data,
                    url: `/api/post`,
                    headers: {
                        Authorization: AuthStr,
                    }
                }).then(res => {
                    this.attach_exist = false;
                    this.form_data = '';
                    document.getElementById('editable').innerHTML = '';
                    this.posts = res.data;
                }).catch(err => {

                });
            }

        },

        attachImage(e) {
            this.attach_exist = true;
            if(this.$refs.input_upload.files.length) {
                this.attach_images = [];
                let formData = new FormData;
                for (let index = 0; index < this.$refs.input_upload.files.length; index++) {
                    this.attach_images.push(URL.createObjectURL(this.$refs.input_upload.files[index]));
                    formData.append('image[]', this.$refs.input_upload.files[index]);
                }
                this.form_data = formData;
            }

        },

        removeAttachInPost(img) {
            var index = this.attach_images.indexOf(img);
            if (index > -1) {
                this.attach_images.splice(index, 1);
            }
        },

        removeAttachInEdit(e, img) {
            this.edit.attachment.push(img.id);

            var index = this.edit_data.get_attach_images.indexOf(img);
            if (index > -1) {
                this.edit_data.get_attach_images.splice(index, 1);
            }
        },

        emitFromChild(data) {
            this.edit_data = data;
            this.edit.attachment = [];
            document.getElementById('editable_modal').innerText = this.edit_data.message;
            this.$refs.edit_modal_contenteditable.innerText = this.edit_data.message;
        },

        editPost(data) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'patch',
                params: {
                    message: this.$refs.edit_modal_contenteditable.innerText,
                    image: this.edit.attachment,
                },
                url: `/api/post/${data.id}`,
                headers: {Authorization: AuthStr}
            }).then(res => {

            }).catch(err => {

            });
        }
    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                console.log('Watch Home: ',val);
            },
            deep: true
        }
    },

    updated() {

    },

    beforeMount() {

    },

    // create prev route data (this.prevRoute)
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prevRoute = from;
        });
    },

    // activated() {
    //     console.log('activate');
    // },

    // deactivated() {
    //     console.log('deactivate');
    // },

    mounted() {
        if(this.$store.getters.currentUser) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                params: {id: 1},
                url: `/api/post`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.posts = res.data;
            }).catch(err => {

            });
        }
    },
}
</script>

<style scoped>
#carouselintro img  {
    height: 600px;
}

#carouselintro {
    margin-top: 26px;
}

.name {
    font-size: 20px;
}

.btn-status {
    padding: 0 !important;
}

.min-100 {
    min-height: 100px;
}

.dropbox-img {
    height: 150px;
}

.dropbox-img img {
    height: 100%;
}

.img_attach_remove {
    right: 0%;
    top: 0%;
    color: #ffffff;
}



</style>
