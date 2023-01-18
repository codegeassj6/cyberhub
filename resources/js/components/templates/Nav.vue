<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
            <div class="container">
                <router-link to="/"><a class="navbar-brand" href="#!">CyberHub</a></router-link>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <router-link to="/games" class="nav-link btn btn-primary">
                               Games
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/gallery" class="nav-link btn btn-primary">
                                Gallery
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/store" class="nav-link btn btn-primary">
                                Store
                            </router-link>
                        </li>
                    </ul>

                    <div class="d-flex my-2 my-lg-0">
                        <template v-if="$store.getters.currentUser">
                            <button class="btn btn-primary" type="button">
                                {{ currentUser.first_name }} {{ currentUser.last_name }}
                            </button>
                            <router-link to="/cart" class="btn btn-primary position-relative">
                                <i class="fa fa-shopping-cart fa-lg"></i>
                                <span class="badge bg-info" id="cart_count">{{ $store.getters.getCartCount }}</span>
                            </router-link>
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" type="button">
                                    <i class="fa fa-cog fa-lg"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><router-link to="/account" class="dropdown-item">Account Details</router-link></li>
                                    <li><router-link to="/setting" class="dropdown-item" href="#">Setting</router-link></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li>
                                        <a class="dropdown-item" href="#" @click.prevent="logout">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </template>

                        <template v-else>
                            <router-link to="/login" class="btn btn-primary" >Login</router-link>
                            <router-link to="/register" class="btn btn-primary">Register</router-link>
                        </template>
                    </div>

                </div>
            </div>
        </nav>
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
        currentUser() {
            return this.$store.getters.currentUser;
        },
    },

    methods: {
        logout() {
            this.$store.commit("logout");
            this.$router.push("/login");
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
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            url: `/api/cart/`,
            headers: {Authorization: AuthStr}
        }).then(res => {
            this.$store.commit("mutateCartCount", res.data.cart_count);
        }).catch(err => {

        });
    }

}
</script>

<style scoped>

</style>
