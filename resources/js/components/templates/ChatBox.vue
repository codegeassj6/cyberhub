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

              <div class="d-flex">
                <div >
                  <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" width="50" height="50" alt="">
                </div>

                <div class="ms-2 p-2 border-1 w-100 rounded-4">
                s
              </div>

              </div>

            </div>
            <div class="position-absolute bottom-0 w-100">
              <div class="d-flex border-1 shadow border-info border p-2 bg-white front-index position-relative">
                <div class="me-5" contenteditable="true">
                  Write a message...
                </div>

                <div class="position-absolute send-btn-0">
                  <button class="btn btn-default btn-sm"><i class="fa fa-send fa-lg"></i></button>
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
    return {};
  },
  components: {},

  props: {},

  computed: {},

  methods: {},

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

  mounted() {},
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

.chat-user {
  height: 60px;
}

.chat-user-size {
  height: 308px;
  overflow-y: scroll;
}

.front-index {
  z-index: 1000;
}

.send-btn-0 {
  bottom: 4px !important;
  right: 8px !important;
}

</style>
