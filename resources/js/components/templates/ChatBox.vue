<template>
  <div class="w-chat end-0 fixed-btm">
    <!-- <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header border-bottom" id="flush-headingOne">
          <button
            class="accordion-button collapsed shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Chat
            <span class="badge bg-info ms-2">1</span>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body position-relative">
            <div class="p-2">
              <div v-for="chat in chats" :key="chat.id">
                <div
                  class="d-flex mb-2"
                  v-if="chat.user_id == $store.getters.currentUser.id"
                >
                  <div>
                    <img
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      width="45"
                      height="45"
                      alt=""
                    />
                  </div>

                  <div class="px-2 border border-1 rounded-2 rounded bg-chat">
                    <div class="mt-2">
                      {{ chat.message }}
                    </div>
                  </div>
                </div>

                <div
                  class="d-flex flex-row-reverse mb-2"
                  v-if="chat.user_id != $store.getters.currentUser.id"
                >
                  <div>
                    <img
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      width="45"
                      height="45"
                      alt=""
                    />
                  </div>

                  <div class="ms-2 px-2 border border-1 rounded-2">
                    <div class="mt-2">
                      {{ chat.message }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="position-absolute bottom-0 w-100">
              <div
                class="d-flex border-1 shadow border-info border p-2 bg-white front-index position-relative"
              >
                <div
                  class="me-5 w-100"
                  contenteditable="true"
                  ref="chatbox"
                  @keyup="updateFormMessage"
                ></div>

                <div class="position-absolute send-btn-0">
                  <button class="btn btn-default btn-sm" @click="sendMessage">
                    <i class="fa fa-send fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="card rounded-0">
      <div class="card-title mb-0">
        <div class="d-flex border-bottom p-3 bg-primary text-white pointer" @click="toggleChatBox">
          <div class="text">Message</div>
          <div class="ms-auto">
            <i class="fa fa-angle-down fa-lg" ref="chat_angle"></i>
          </div>
        </div>



        <div ref="chat_body">
          <div class="card-body relative h-chat overflow-auto">
            <div v-for="chat in chats" :key="chat.id">
              <div class="d-flex gap-2 mb-2" v-if="chat.user_id == $store.getters.currentUser.id">
                <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" width="40" height="40" class="rounded-circle" alt="">
                <p class="border px-2 py-1 rounded">
                  {{ chat.message }}
                </p>
              </div>
              <div class="d-flex flex-row-reverse gap-2 mb-2" v-if="chat.user_id != $store.getters.currentUser.id">
                <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" width="40" height="40" class="rounded-circle" alt="">
                <p class="border px-2 py-1 rounded">
                  {{ chat.message }}
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer bg-white">
            <div class="d-flex gap-1">
              <span
                class="border rounded p-2 w-100"
                contenteditable="true"
                @keyup="updateFormMessage"
                ref="chatbox"
              >
              </span>
              <button class="btn text-primary" @click="sendMessage"><i class="fa fa-send"></i></button>
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
      form: {
        message: "",
      },
      chats: "",
      // currentRoom: '',
      chatbox_toggle: true,
    };
  },
  components: {},

  props: {},

  computed: {},

  methods: {
    toggleChatBox() {
      if(this.chatbox_toggle) {
        this.chatbox_toggle = false;
        this.$refs.chat_body.classList.add('d-none');
        this.$refs.chat_angle.classList.remove('fa-angle-down')
        this.$refs.chat_angle.classList.add('fa-angle-up');
      } else {
        this.$refs.chat_body.classList.remove('d-none');
        this.chatbox_toggle = true;
        this.$refs.chat_angle.classList.remove('fa-angle-up')
        this.$refs.chat_angle.classList.add('fa-angle-down');
      }
    },

    getChatMessages() {
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "get",
        url: `/api/chat/`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          this.chats = res.data;
        })
        .catch((err) => {});
    },

    // getChatRoom() {
    //   const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
    //   axios({
    //       method: 'get',
    //       url: `/api/chat/room/show`,
    //       headers: {Authorization: AuthStr}
    //   }).then(res => {
    //     this.currentRoom = res.data.id;
    //   }).catch(err => {

    //   });
    // },

    updateFormMessage(e) {
      this.form.message = e.target.innerText.trim();
    },

    loadNewMessages() {
      window.Echo.channel("chat").listen(".new_chat_message", (e) => {
        this.chats.push(e.chat);
        console.log(e.chat);
      });
    },

    sendMessage() {
      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "post",
        params: { message: this.form.message },
        url: `/api/chat`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          this.form.message = "";
          this.$refs.chatbox.textContent = "";
        })
        .catch((err) => {});
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

  beforeMounted() {},

  mounted() {
    this.getChatMessages();
    // this.getChatRoom();
    this.loadNewMessages();
  },
};
</script>

<style scoped>
.fixed-btm {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 1030;
}

.accordion {
  border: 1px solid #e1e1e1;
}

.w-chat {
  width: 450px !important;
}

.h-chat {
  height: 450px;
}
</style>
