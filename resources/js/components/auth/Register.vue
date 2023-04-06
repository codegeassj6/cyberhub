<template>
  <div>
    <div class="vh-100">
      <div
        class="mask space-intro d-flex align-items-center h-100 gradient-custom-3 pb-5"
      >
        <div class="container">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-3">
                    Create an account
                  </h2>
                  <form @submit.prevent="register">
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example1cg"
                        >First Name:</label
                      >
                      <input
                        type="text"
                        id="form3Example1cg"
                        v-model="form.fname"
                        class="form-control form-control-lg"
                        required
                      />
                      <span
                        class="text-danger"
                        v-for="(message, index) in error.first_name"
                        :key="index"
                        >{{ message }}</span
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form4Example1cg"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        id="form4Example1cg"
                        v-model="form.lname"
                        class="form-control form-control-lg"
                        required
                      />
                      <span
                        class="text-danger"
                        v-for="(message, index) in error.last_name"
                        :key="index"
                        >{{ message }}</span
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3cg"
                        >Your Email</label
                      >
                      <input
                        type="email"
                        id="form3Example3cg"
                        v-model="form.email"
                        class="form-control form-control-lg"
                        required
                      />
                      <span
                        class="text-danger"
                        v-for="(message, index) in error.email"
                        :key="index"
                        >{{ message }}</span
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg"
                        >Password</label
                      >
                      <input
                        type="password"
                        id="form3Example4cg"
                        v-model="form.password"
                        class="form-control form-control-lg"
                        required
                      />
                      <span
                        class="text-danger"
                        v-for="(message, index) in error.password"
                        :key="index"
                        >{{ message }}</span
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cdg"
                        >Repeat password</label
                      >
                      <input
                        type="password"
                        id="form3Example4cdg"
                        v-model="form.confirm"
                        class="form-control form-control-lg"
                        required
                      />
                      <span
                        class="text-danger"
                        v-for="(message, index) in error.confirm"
                        :key="index"
                        >{{ message }}</span
                      >
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block btn-lg text-white"
                      >
                        Register
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <router-link to="/login" class="fw-bold text-body"
                        ><u>Login here</u></router-link
                      >
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from "../../helpers/auth";

export default {
  data() {
    return {
      form: {
        fname: null,
      lname: null,
      email: null,
      password: null,
      confirm: null,
      },

      error: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm: "",
      },
    };
  },
  components: {},

  props: [],

  computed: {},

  methods: {
    register() {
      return new Promise((resolve, reject) => {
        axios({
          method: "post",
          params: {
            first_name: this.form.fname,
            last_name: this.form.lname,
            email: this.form.email,
            password: this.form.password,
            confirm: this.form.confirm,
          },
          url: `/api/auth/register`,
        })
          .then((res) => {
            this.authenticate();
            // this.$router.push("/login");
          })
          .catch((err) => {
            this.error.first_name = err.response.data.first_name;
            this.error.last_name = err.response.data.last_name;
            this.error.email = err.response.data.email;
            this.error.password = err.response.data.password;
            this.error.confirm = err.response.data.confirm;
            reject(err);
          });
      });
    },

    authenticate() {
      this.$store.dispatch("login");
      login(this.form)
        .then((res) => {
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
          this.$store.commit("loginFailed", { error });
        });
    },
  },

  // watch: {
  //   $data: {
  //     handler: function (val, oldVal) {
  //       console.log("watcher: ", val);
  //     },
  //     deep: true,
  //   },
  // },

  updated() {},

  mounted() {},
};
</script>

<style scoped>
/* .container {
    margin-top: 100px;
    max-width: 900px;
}

.p-10 {
    padding: 40px 80px;
} */

.gradient-custom-3 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(132, 250, 176, 0.5),
    rgba(143, 211, 244, 0.5)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(132, 250, 176, 0.5),
    rgba(143, 211, 244, 0.5)
  );
}
</style>
