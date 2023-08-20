<template>
  <div>
    <div class="container space-intro mb-150">
      <div class="row">
        <div class="col-lg-2" v-for="(game, index) in games.data" :key="index">
          <div class="card mb-4">
            <!-- <img
              class="card-img-top"
              :src="'/img/game/' + game.image"
              alt="Card image"
              height="200"
              :title="game.name"
            /> -->
            <img
              class="card-img-top"
              :src="game.image"
              alt="Card image"
              height="200"
              :title="game.name"
            />

            <div class="card-body">
              <h5 class="card-title text-truncate" :title="game.name">
                {{ limitText(game.name, 14) }}
              </h5>
              <div class="card-text mb-2">
                <Star :rating="game.rating" />
                <p class="mb-2" style="height: 90px; word-wrap: break-word; overflow-y: hidden;" :title="game.genre">
                  {{ limitText(game.genre, 80) }}
                </p>
              </div>
              <div>
                <a
                  :href="game.trailer_link"
                  target="_blank"
                  class="btn btn-primary"
                  >Watch Trailer</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-row-reverse">
        <PaginateButton :paginate_data="games" />
      </div>
    </div>
  </div>
</template>
<script>
import PaginateButton from "./templates/PaginateButton.vue";
import Star from "./templates/Star.vue";

export default {
  data() {
    return {
      games: "",
    };
  },
  components: {
    PaginateButton,
    Star,
  },

  props: [],

  computed: {},

  methods: {
    limitText(input, int) {
      if (input.length > int) {
        return input.substring(0, int) + "...";
      }
      return input;
    },

    nextPage(url) {
      axios({
        method: "get",
        url: url,
      })
        .then((res) => {
          this.games = res.data;
        })
        .catch((err) => {});
    },

    prevPage(url) {
      axios({
        method: "get",
        url: url,
      })
        .then((res) => {
          this.games = res.data;
        })
        .catch((err) => {});
    },

    goToPage(url, page) {
      axios({
        method: "get",
        url: `${url}?page=${page}`,
      })
        .then((res) => {
          this.games = res.data;
        })
        .catch((err) => {});
    },

    getGames() {
      axios({
        method: "get",
        url: `/api/games/`,
      })
        .then((res) => {
          this.games = res.data;
        })
        .catch((err) => {
          console.log(err.response.message);
        });
      },

  },

  updated() {},

  mounted() {
    this.getGames();
  }
};
</script>

<style scoped>

</style>
