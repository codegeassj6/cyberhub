<template>
    <div class="space-intro">
         <div class="container d-flex flex-column">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 col-md-8 col-lg-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <div class="mb-4">
                                <h5>Forgot Password?</h5>
                                <p class="mb-2">Enter your registered email ID to reset the password
                                </p>
                            </div>
                            <form @submit="resetPassword">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="Enter Your Email" required v-model="email" autocomplete="on">
                                </div>
                                <div class="mb-3 d-grid">
                                    <button type="submit" class="btn btn-primary">
                                        Reset Password
                                    </button>
                                </div>
                                <span>Don't have an account? <router-link to="/register">Click here to register.</router-link></span>
                            </form>
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
            email: '',
        }
    },
    components: {

    },

    props: {

    },

    computed: {

    },

    methods: {
        resetPassword(e) {
            e.preventDefault();
            axios({
                method: 'post',
                url: '/api/reset/password',
                data: {
                    email: this.email
                },
            }).then(function (res) {
                console.log(res.data);
            }).catch(function (err) {
                console.log(err);
            });

        },
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
.space-intro {
    margin-top: 150px;
}
</style>
