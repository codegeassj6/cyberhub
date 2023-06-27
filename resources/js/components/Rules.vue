<template>
  <div class="space-intro">
    <div class="container">
      <div class="row">
        <div class="col-md-9">


          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  No Refund
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
              >
                <div class="accordion-body">
                  <ul>
                    <li>
                      Blackout / Brownout
                    </li>
                    <li>
                      10 Pesos new variant that gives 40 minutes of time instead of 80 minutes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Reservation
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse show"
              >
                <div class="accordion-body">
                  <ul>
                    <li>
                      20 minutes expiration limit for reservation as long as there is still someone plays on that pc.
                    </li>
                    <li>
                      Another reserve player can replace the other reserve player if the current player time is finish and the reserve player is not around
                    </li>
                    <li>
                      If player wants to play while waiting for the specific station he wants. He's allowed to transfer to that specific station if it is vacant but no longer than 5 minutes.
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Tournament
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse show"
              >
                <div class="accordion-body">
                  <ul>
                    <li>
                      Loyal players only
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>



        </div>
        <div class="col-md-3">s</div>
      </div>
    </div>
  </div>
</template>
<script>
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
</style>
