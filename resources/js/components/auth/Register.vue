<template>
    <div>
        <div class="vh-100 bg-image" style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-3">Create an account</h2>
                                    <form @submit="register">
                                        <div class="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" v-model="fname" class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example1cg">First Name</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="text" id="form4Example1cg" v-model="lname" class="form-control form-control-lg" />
                                            <label class="form-label" for="form4Example1cg">Last Name</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="email" id="form3Example3cg" v-model="email" class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example3cg">Your Email</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example4cg" v-model="password" class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example4cg">Password</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                        <input type="password" id="form3Example4cdg" v-model="confirm" class="form-control form-control-lg" />
                                        <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <button type="submit" class="btn btn-primary btn-block btn-lg text-white">Register</button>
                                        </div>

                                        <p class="text-center text-muted mt-5 mb-0">
                                            Have already an account?
                                            <a href="#!" class="fw-bold text-body"><u>Login here</u></a>
                                        </p>
                                    </form>
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
            fname: null,
            lname: null,
            email: null,
            password: null,
            confirm: null,
        }
    },
    components: {

    },

    props: [],

    computed: {

    },

    methods: {
        register(e) {
            e.preventDefault();
            axios({
                method: 'post',
                params: {
                    first_name: this.fname,
                    last_name: this.lname,
                    email: this.email,
                    password: this.password,
                    confirm: this.confirm
                },
                url: `/api/auth/register`,
            }).then(res => {
                this.$router.push('/login');
            }).catch(err => {

            });
        }
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
/* .container {
    margin-top: 100px;
    max-width: 900px;
}

.p-10 {
    padding: 40px 80px;
} */

.gradient-custom-3 {
/* fallback for old browsers */
background: #84fab0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}


</style>
