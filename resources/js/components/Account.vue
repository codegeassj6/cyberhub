<template>
    <div>
        <div class="bg-profile">
            <div class="container">
                <div class="d-flex p-4">
                    <div class="space-intro">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" height="150" class="img-thumbnail" width="150" alt="">
                    </div>
                    <div class="space-intro p-4 text-white">
                        <h3>Jhon Rey Repuela</h3>
                        <div>
                            <span>@codegeassj6</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-profile-2">
            <div class="container">
                <div class="d-flex p-4">
                    <div>
                        <router-link to="/account/update" class="btn btn-outline-secondary mt-2 ms-3">Update Profile</router-link>
                    </div>
                    <div class="ms-auto">
                        <div class="d-flex">
                            <div class="p-2">
                                <button class="btn btn-primary"><i class="fa fa-facebook"></i> Facebook</button>
                            </div>
                            <div class="p-2">
                                <button class="btn btn-info text-white"><i class="fa fa-twitter"></i> Twitter</button>
                            </div>
                            <div class="p-2">
                                <button class="btn btn-danger"><i class="fa fa-google"></i> Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-4">
            <h3>About</h3>
            <div class="card p-4 mb-4">
                Veniam aliquip sunt ex officia Lorem ad occaecat laboris. Dolor duis labore duis esse eu qui adipisicing. Et officia anim magna commodo ad dolore ipsum ipsum. Esse amet irure aliquip exercitation do enim proident magna laboris sint nulla consequat tempor. Mollit nostrud id ad Lorem tempor qui. Consequat ipsum mollit cillum tempor qui ad nisi ipsum do. Nulla voluptate ea et sunt aliqua qui deserunt commodo ad aute esse tempor.
            </div>

            <div class="d-flex">
                <div><h4>Recent Photos / Videos</h4></div>
                <div class="ms-auto mt-2">Show all</div>
            </div>

            <div class="row">
                <div class="col-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" height="400" class="img-thumbnail" alt="">
                </div>

                <div class="col-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" height="400" class="img-thumbnail" alt="">
                </div>

                <div class="col-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" height="400" class="img-thumbnail" alt="">
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

.bg-profile {
  background-image: linear-gradient(to bottom, #277bfa , #70a6f7);
  height: 300px;
}

.bg-profile-2 {
  background-color: #f2f2f2;
  height: 100px;
}

.space-intro {
    margin-top: 150px;
}


</style>
