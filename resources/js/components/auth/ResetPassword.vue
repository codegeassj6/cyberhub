<template>
  <div class="space-intro">
    <div class="container d-flex flex-column">
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-12 col-md-10 col-lg-6 col-xl-5">
          <div class="card shadow-sm">
            <div class="card-body">
              <div class="mb-4">
                <h5>Enter new password</h5>
              </div>
              <form @submit.prevent="changePass">
                <div class="mb-3">
                  <label for="pass" class="form-label">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="pass"
                    placeholder="New Password"
                    v-model="form.password"
                  />
                </div>
                <div class="mb-3">
                  <label for="cpass" class="form-label"
                    >Confrim Password:</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="cpass"
                    placeholder="Repeat password"
                    v-model="form.confirm_password"
                  />
                </div>
                <div class="mb-3 d-grid">
                  <button type="submit" class="btn btn-primary">
                    Change Password
                  </button>
                </div>
                <span
                  >Don't have an account?
                  <router-link to="/register"
                    >Click here to register.</router-link
                  ></span
                >
              </form>
            </div>
          </div>
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
      token: "",
      form: {
        password: 'jhonreyj6',
        confirm_password: 'jhonreyj6',
      }
    };
  },
  components: {},

  props: {},

  computed: {},

  methods: {
    changePass() {
      axios({
          method: 'patch',
          params: {
            password: this.form.password,
            confirm_password: this.form.confirm_password,
            access_token: this.token,
          },
          url: `/api/reset/password`,
      }).then(res => {
        console.log(res.data);
      }).catch(err => {

      });
    }
  },

  watch: {
    $data: {
      handler: function (val, oldVal) {
        console.log("watcher: ", val);
      },
      deep: true,
    },

    $props: {
      handler: function (val, oldVal) {
        console.log("watcher: ", val);
      },
      deep: true,
    },
    some_prop: function () {
      //do something if some_prop updated
    },
  },

  updated() {},

  beforeMounted() {},

  mounted() {
    axios({
      method: "get",
      url: `/api/reset/password/${this.$route.query.access_token}`,
    })
      .then((res) => {
        this.token = res.data;
      })
      .catch((err) => {});
  },
};
</script>

<style scoped>

</style>
