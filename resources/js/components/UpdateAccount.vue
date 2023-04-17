<template>
  <div>
    <div class="space-intro">
      <div class="container">
        <div class="container-xl px-4 mt-4">
          <div class="row">
            <div class="col-xl-4">
              <!-- Profile picture card-->
              <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                  <!-- Profile picture image-->
                  <img
                    class="img-account-profile rounded-circle mb-2"
                    width="300"
                    height="300"
                    :src="form.photo"
                    id="myPhoto"
                    alt=""
                  />
                  <!-- Profile picture help block-->
                  <div class="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>
                  <!-- Profile picture upload button-->
                  <input
                    type="file"
                    class="d-none"
                    @change="inputFile"
                    id="input_upload"
                    accept="image/png, image/jpg, image/jpeg"
                  />

                  <template v-if="form.boolUpload">
                    <button
                      class="btn btn-primary bg-gradient"
                      @click="uploadTriggerInput"
                      type="button"
                    >
                      Upload Image
                    </button>
                  </template>

                  <template v-else>
                    <button
                      class="btn btn-danger"
                      type="button"
                      @click="cancelUpload"
                    >
                      Cancel
                    </button>
                    <button
                      class="btn btn-primary"
                      type="button"
                      @click="uploadImage"
                    >
                      Upload
                    </button>
                  </template>
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              <!-- Account details card-->
              <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                  <form>
                    <!-- Form Group (username)-->

                    <!-- Form Row-->
                    <div class="row gx-3 mb-3">
                      <!-- Form Group (first name)-->
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputFirstName"
                          >First name</label
                        >
                        <input
                          class="form-control"
                          type="text"
                          v-model="form.first_name"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <!-- Form Group (last name)-->
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputLastName"
                          >Last name</label
                        >
                        <input
                          class="form-control"
                          v-model="form.last_name"
                          type="text"
                          placeholder="Enter your last name"
                          value="Luna"
                        />
                      </div>
                    </div>

                    <!-- Form Group (email address)-->
                    <div class="mb-3">
                      <label class="small mb-1" for="inputEmailAddress"
                        >Email address</label
                      >
                      <input
                        class="form-control"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter your email address"
                        disabled
                      />
                    </div>
                    <!-- Form Row-->
                    <div class="row gx-3 mb-3">
                      <!-- Form Group (phone number)-->
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputPhone"
                          >Phone number</label
                        >
                        <input
                          class="form-control"
                          type="text"
                          v-model="form.contact"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <!-- Form Group (birthday)-->
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputBirthday"
                          >Birthday</label
                        >
                        <input
                          class="form-control"
                          v-model="form.birthday"
                          type="date"
                        />
                      </div>
                    </div>

                    <div class="mb-3">
                      <label class="small mb-1" for="inputUsername"
                        >Address</label
                      >
                      <input
                        class="form-control"
                        type="text"
                        v-model="form.address"
                        placeholder="Enter your Address"
                      />
                    </div>

                    <!-- Save changes button-->
                    <button
                      class="btn btn-primary bg-gradient"
                      @click="updateProfile"
                      type="button"
                    >
                      Save changes
                    </button>
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
export default {
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        birthday: "",
        contact: "",
        address: "",
        email: "",
        file: "",
        boolUpload: true,
        photo: "",
      },
      user: "",
      error: {
        birthday: "",
        first_name: "",
        last_name: "",
        contact: "",
      },
    };
  },
  components: {},

  props: [],

  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },

    getProfilePicture() {
      return "/storage/user/" + this.user.id + "/img/" + this.user.profile_img;
    },
  },

  methods: {
    updateProfile(e) {
      e.target.setAttribute("disabled", true);
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "post",
        params: {
          username: this.form.username,
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          birthday: this.form.birthday,
          contact: this.form.contact,
          address: this.form.address,
        },
        url: `/api/account/update`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          e.target.removeAttribute("disabled");
        })
        .catch((err) => {});
    },

    // trigger the input file
    uploadTriggerInput() {
      var elem = document.getElementById("input_upload");
      if (elem && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        elem.dispatchEvent(evt);
      }
    },

    inputFile(e) {
      this.form.file = e.target.files[0] || e.dataTransfer.files[0];
      if (this.form.file) {
        this.form.boolUpload = false;
        // this.previewImage(this.form.file);
        document.getElementById("myPhoto").src = URL.createObjectURL(
          this.form.file
        );
      }
    },

    cancelUpload() {
      this.form.file = null;
      this.form.boolUpload = true;
      document.getElementById("myPhoto").src = this.form.photo;
    },

    uploadImage() {
      const formData = new FormData();
      formData.set("image", this.form.file);
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);

      axios
        .post("/api/account/update/image", formData, {
          headers: { Authorization: AuthStr },
        })
        .then((res) => {
          this.form.boolUpload = true;
          // mutate user profile imaage
        })
        .catch((error) => {});
    },

    getAuthUserDetails() {
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "get",
        url: `/api/auth/me`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          this.user = res.data;
          this.form.first_name = res.data.first_name;
          this.form.last_name = res.data.last_name;
          this.form.email = res.data.email;
          this.form.address = res.data.address;
          this.form.contact = res.data.contact;
          this.form.birthday = res.data.birthday;
          this.form.photo = res.data.profile_img
            ? this.getProfilePicture
            : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
        })
        .catch((err) => {});
    },
  },

  updated() {},

  mounted() {
    this.getAuthUserDetails();
  },
};
</script>
