<template>
  <div ref="body">
    <Nav />

    <div>
      <keep-alive include="HomeComponent">
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
    </div>
    <template v-if="!$store.getters.currentUser">
      <Footer />
    </template>

    <div v-if="$route.name == 'Home' || $route.name == 'Save'">
      <div class="toast-container"
        v-for="(message, index) in notification.message"
        :key="index"
      >
        <div
          class="position-fixed bottom-0 end-0 px-3"
          style="z-index: 11"
        >
          <div
            class="toast mb-2 d-block"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="toast-header bg-danger">
              <strong class="me-auto text-white">Error</strong>
              <a
                role="button"
                class="text-white"
                @click="notification.message = ''"
              >
                <i class="fa fa-close"></i>
              </a>
            </div>
            <div class="toast-body" ref="toast_message">
              {{ message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./templates/Nav.vue";
import Footer from "./templates/Footer.vue";
import Home from "./Home.vue";

export default {
  data() {
    return {
      notification: {
        message: [],
        multi_data: {
          message: "",
        },
      },
    };
  },

  components: {
    Nav,
    Footer,
    Home,
  },

  methods: {

  },

  created () {

  },

  mounted() {

  },
};
</script>
