<template>
  <div class="w-25 end-0 fixed-btm">
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
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
                <div class="d-flex mb-2" v-if="chat.user_id == $store.getters.currentUser.id">
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

                <div class="d-flex flex-row-reverse mb-2" v-if="chat.user_id != $store.getters.currentUser.id">
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
                <div class="me-5 w-100" contenteditable="true" ref="chatbox" @keyup="updateFormMessage"></div>

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
    </div>
  </div>
</template>
<script>
//import name from './

export default {
  data() {
    return {
      form: {
        message: '',
      },
      chats: '',
      currentRoom: '',
    };
  },
  components: {},

  props: {},

  computed: {},

  methods: {
    connect() {
      if(this.currentRoom) {
        let vm = this;
        this.getChatMessages();
        window.Echo.private("chat."+this.currentRoom).listen('.message.new', e => {
          vm.getChatMessages();
        })
      }
    },

    getChatMessages() {
      const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
          method: 'get',
          url: `/api/chat/`,
          headers: {Authorization: AuthStr}
      }).then(res => {
        this.chats = res.data;
      }).catch(err => {

      });
    },

    updateFormMessage(e) {
      this.form.message = e.target.innerText.trim();
    },

    sendMessage() {
      const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
          method: 'post',
          params: {message: this.form.message},
          url: `/api/chat`,
          headers: {Authorization: AuthStr}
      }).then(res => {
        this.form.message = '';
        this.$refs.chatbox.textContent = '';
      }).catch(err => {

      });
    },

    getCurrentRoom() {

    },
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
    this.getChatMessages();
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

.w-25 {
  width: 350px !important;
}

.accordion-body {
  height: 352px;
  padding: 0 !important;
}


.front-index {
  z-index: 1000;
}

.send-btn-0 {
  bottom: 4px !important;
  right: 8px !important;
}

.bg-chat {
  background: #a9d4f7;
}

</style>
