<template>
    <div>
        <Nav />

        <div>
            <keep-alive include="HomeComponent">
                <router-view :key="$route.fullPath"></router-view>
            </keep-alive>
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

