<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
      <div class="container">
        <router-link to="/"
          ><a class="navbar-brand" href="#!">JCafe</a></router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-lg-0">
            <li class="nav-item">
              <router-link to="/games" class="nav-link">
                Games
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/store" class="nav-link">
                Store
              </router-link>
            </li>
          </ul>

          <ul class="navbar-nav mt-lg-0">
            <template v-if="$store.getters.currentUser">
              <li class="nav-item">
                <a
                  class="nav-link hide-sm"
                  role="button"
                >
                  {{ currentUser.first_name }} {{ currentUser.last_name }}
                </a>
              </li>

              <li class="nav-item">
                <router-link
                  to="/cart"
                  class="nav-link position-relative"
                >
                  <i class="fa fa-shopping-cart fa-lg"></i>
                  <span class="badge bg-info" id="cart_count">{{
                    $store.getters.getCartCount
                  }}</span>
                </router-link>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <a
                    class="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                    role="button"
                  >
                    <i class="fa fa-cog fa-lg"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <!-- <li>
                      <router-link to="/timeline" class="dropdown-item" href="#"
                        >My Timeline</router-link
                      >
                    </li> -->
                    <li>
                      <router-link
                        to="/account/update"
                        class="dropdown-item"
                        href="#"
                        >Update Account</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/setting" class="dropdown-item" href="#"
                        >Setting</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/save" class="dropdown-item" href="#"
                        >My Saves</router-link
                      >
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <a class="dropdown-item" href="#" @click.prevent="logout"
                        >Logout</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </template>

            <template v-else>
              <li class="nav-item">
                <router-link to="/login" class="nav-link"
                  >Login</router-link
                >
              </li>
              <li class="nav-it">
                <router-link to="/register" class="nav-link"
                  >Register</router-link
                >
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
//import name from './

export default {
  data() {
    return {};
  },
  components: {},

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
    },
  },

  updated() {},

  mounted() {
    if (this.currentUser) {
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "get",
        url: `/api/cart/`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          this.$store.commit("mutateCartCount", res.data.cart_count);
        })
        .catch((err) => {});
    }
  },
};
</script>
