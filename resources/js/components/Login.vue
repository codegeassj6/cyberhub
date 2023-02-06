<template>
    <div>
        <!-- <div class="container">
            <div class="card">
                <div class="card-body">
                    <form @submit.prevent="authenticate">
                        <div class="text-center">
                            <h3>Login</h3>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" class="form-control" v-model="form.email" placeholder="Enter email">
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Password:</label>
                            <input type="password" class="form-control" v-model="form.password" placeholder="Enter password">
                        </div>

                        <div class="btn-group w-100 mb-3">
                            <button type="button" class="btn btn-primary"><i class="fa fa-facebook"></i> Facebook</button>
                            <button type="button" class="btn btn-info"><i class="fa fa-twitter"></i> Twitter</button>
                            <button type="button" class="btn btn-danger"><i class="fa fa-google"></i> Google</button>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div> -->

        <section class="space-intro">
            <div class="container py-5 h-100">
                <div class="row d-flex align-items-center justify-content-center h-100">
                    <div class="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        class="img-fluid" alt="Phone image">
                    </div>
                    <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form @submit.prevent="authenticate">
                        <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input type="email" v-model="form.email" id="form1Example13" class="form-control form-control-lg" />
                                <label class="form-label" for="form1Example13">Email address</label>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <input type="password" v-model="form.password" id="form1Example23" class="form-control form-control-lg" />
                                <label class="form-label" for="form1Example23">Password</label>
                            </div>

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                <a href="#!">Forgot password?</a>
                            </div>

                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

                            <div class="divider d-flex align-items-center my-4">
                                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>

                            <!-- <a class="btn btn-primary btn-lg btn-block mb-2" href="/oauth/login/facebook" role="button">
                                <i class="fa fa-facebook-f me-2"></i>Continue with Facebook
                            </a> -->
                            <a class="btn btn-primary btn-lg btn-block mb-2" @click="OAuthLogin('facebook')" role="button">
                                <i class="fa fa-facebook-f me-2"></i>Continue with Facebook
                            </a>

                            <a class="btn btn-danger btn-lg mb-2 btn-block" href="#!" role="button">
                                <i class="fa fa-google me-2"></i>Continue with Google
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
import {login} from '../helpers/auth';

export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            }


        }
    },
    components: {

    },

    props: [],

    computed: {

    },

    methods: {
        authenticate() {
            this.$store.dispatch('login');
            login(this.form)
                .then((res) => {
                  // commit function is used for running mutation function in storejs
                    this.$store.commit("loginSuccess", res);

                    const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
                    axios({
                        method: 'get',
                        url: `/api/cart/`,
                        headers: {Authorization: AuthStr}
                    }).then(res => {
                        this.$store.commit("mutateCartCount", res.data.cart_count);
                    }).catch(err => {

                    });

                    this.$router.push('/');
                })
                .catch((error) => {
                    this.$store.commit("loginFailed", {error});
                });
        },

        OAuthLogin(provider) {
            axios({
                method: 'get',
                url: `/api/oauth/login/redirect/${provider}`,
            }).then(res => {
                console.log(res.data);
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
} */
</style>
