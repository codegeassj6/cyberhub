<template>
    <div>
        <Nav />

        <div>
            <router-view :key="$router.path"/>
        </div>
        <template v-if="!$store.getters.currentUser">
            <Footer />
        </template>


    </div>
</template>

<script>
import Nav from './templates/Nav.vue';
import Footer from './templates/Footer.vue';

    export default {
        components: {
            Nav,
            Footer
        },
        mounted() {

        }
    }
</script>

