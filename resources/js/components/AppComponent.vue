<template>
    <div>
        <Nav />

        <div>
            <!-- <router-view :key="$router.path" /> -->

            <keep-alive include="HomeComponent">
                <router-view :key="$route.fullPath"></router-view>
            </keep-alive>

            <!-- <router-view v-slot="{ component }">
                <keep-alive include="Home">
                    <component :is="component" />
                </keep-alive>
            </router-view> -->


        </div>
        <template v-if="!$store.getters.currentUser">
            <Footer />
        </template>


    </div>
</template>

<script>
import Nav from './templates/Nav.vue';
import Footer from './templates/Footer.vue';
import Home from './Home.vue'

export default {
    components: {
        Nav,
        Footer,
        Home,
    },

    mounted() {
        console.log(this.$router);
    }
}
</script>

