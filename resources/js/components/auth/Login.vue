<template>
  <div>
    <section class="space-intro">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image"
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form @submit.prevent="authenticate">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form1Example13"
                  >Email address:</label
                >
                <input
                  type="email"
                  v-model="form.email"
                  id="form1Example13"
                  class="form-control form-control-lg"
                />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form1Example23">Password:</label>
                <input
                  type="password"
                  v-model="form.password"
                  id="form1Example23"
                  class="form-control form-control-lg"
                />
              </div>

              <div
                class="d-flex justify-content-around align-items-center mb-4"
              >
                <router-link to="/reset/password/request"
                  >Forgot password?</router-link
                >
              </div>

              <!-- Submit button -->
              <button type="submit" ref="login_btn" class="btn btn-primary btn-lg btn-block">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { login } from "../../helpers/auth";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      FB: {},
      model: {},
      scope: {},
    };
  },
  components: {
    VFacebookLogin,
  },

  props: [],

  computed: {},

  methods: {
    handleSdkInit({ FB, scope }) {
      this.FB = FB;
      this.scope = scope;
    },


    authenticate() {
      this.$refs.login_btn.setAttribute('disabled', true);
      this.$store.dispatch("login");
      login(this.form)
        .then((res) => {
          // commit function is used for running mutation function in storejs
          this.$store.commit("loginSuccess", res);

          const AuthStr = "Bearer ".concat(
            this.$store.getters.currentUser.token
          );
          axios({
            method: "get",
            url: `/api/cart/`,
            headers: { Authorization: AuthStr },
          })
            .then((res) => {
              this.$store.commit("mutateCartCount", res.data.cart_count);
            })
            .catch((err) => {});
            this.$router.push('/');
        })
        .catch((error) => {
          this.$refs.login_btn.removeAttribute('disabled');
          this.$store.commit("loginFailed", { error });
        });
    },
  },

  watch: {
    $data: {
      handler: function (val, oldVal) {
        console.log("watcher: ", val);
      },
      deep: true,
    },
  },

  updated() {},

  mounted() {

  },
};
</script>

<style scoped>
/* .container {
    margin-top: 100px;
    max-width: 900px;
} */
</style>
