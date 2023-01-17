<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body p-10">
                    <form @submit="register">
                        <div class="text-center"><h3>Register</h3></div>


                                <div class="mb-3">
                                    <label for="pwd" class="form-label">First Name:</label>
                                    <input type="text" class="form-control" v-model="fname" placeholder="Enter First Name">
                                </div>


                                <div class="mb-3">
                                    <label for="pwd" class="form-label">Last Name:</label>
                                    <input type="text" class="form-control" v-model="lname" placeholder="Enter Last Name">
                                </div>




                        <div class="mb-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" class="form-control" v-model="email" placeholder="Enter email">
                        </div>


                                <div class="mb-3">
                                    <label for="pwd" class="form-label">Password:</label>
                                    <input type="password" class="form-control" v-model="password" placeholder="Enter password">
                                </div>

                                <div class="mb-3">
                                    <label for="pwd" class="form-label">Confirm Password:</label>
                                    <input type="password" class="form-control" v-model="confirm" placeholder="Confirm password">
                                </div>

                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                        </div>

                    </form>
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
.container {
    margin-top: 100px;
    max-width: 900px;
}

.p-10 {
    padding: 40px 80px;
}

</style>
