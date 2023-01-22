<template>
    <div>
        <div class="container">
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
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
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
              .then((res) => {console.log(res);
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
.container {
    margin-top: 100px;
    max-width: 900px;
}
</style>
