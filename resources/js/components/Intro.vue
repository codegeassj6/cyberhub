<template>
  <div>
    <div v-if="!currentUser" class="mb-150">
      <div id="carouselintro" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselintro"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselintro"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselintro"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/car1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/car2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/car3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselintro"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselintro"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container">
        <div class="d-flex">
          <div class="p-4 bg-info flex-fill text-white text-center">
            <div class="card">
              <div class="card-header">
                <i
                  class="fa fa-keyboard-o text-primary"
                  style="font-size: 100px"
                ></i>
              </div>
              <div class="card-body text-dark">
                Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor
                ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat.
                Consectetur esse deserunt in amet minim reprehenderit Lorem non.
                Incididunt in veniam irure ipsum eu Lorem consectetur mollit
                consequat. Dolore duis id id Lorem est enim do pariatur cillum
                nulla nostrud ex laboris. Consectetur cillum labore proident
                excepteur nisi sint proident adipisicing nostrud. Enim deserunt
                proident proident sit.s
              </div>
              <div class="card-footer">
                <div class="btn btn-primary">Browse Games</div>
              </div>
            </div>
          </div>
          <div class="p-4 bg-primary flex-fill text-white text-center">
            <div class="card">
              <div class="card-header">
                <i
                  class="fa fa-coffee text-primary"
                  style="font-size: 100px"
                ></i>
              </div>
              <div class="card-body text-dark">
                Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor
                ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat.
                Consectetur esse deserunt in amet minim reprehenderit Lorem non.
                Incididunt in veniam irure ipsum eu Lorem consectetur mollit
                consequat. Dolore duis id id Lorem est enim do pariatur cillum
                nulla nostrud ex laboris. Consectetur cillum labore proident
                excepteur nisi sint proident adipisicing nostrud. Enim deserunt
                proident proident sit.
              </div>
              <div class="card-footer">
                <div class="btn btn-info text-white">Buy Food or Drinks</div>
              </div>
            </div>
          </div>
          <div class="p-4 bg-info flex-fill text-white text-center">
            <div class="card">
              <div class="card-header">
                <i
                  class="fa fa-print text-primary"
                  style="font-size: 100px"
                ></i>
              </div>
              <div class="card-body text-dark">
                Ut Lorem eiusmod aliquip deserunt proident mollit. Ipsum tempor
                ad ea reprehenderit qui amet occaecat adipisicing veniam fugiat.
                Consectetur esse deserunt in amet minim reprehenderit Lorem non.
                Incididunt in veniam irure ipsum eu Lorem consectetur mollit
                consequat. Dolore duis id id Lorem est enim do pariatur cillum
                nulla nostrud ex laboris. Consectetur cillum labore proident
                excepteur nisi sint proident adipisicing nostrud. Enim deserunt
                proident proident sit.
              </div>
              <div class="card-footer">
                <div class="btn btn-primary px-4">Print</div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <br />
        <h3 class="text-center">Our Shop Location</h3>

        <div class="card p-4 mb-4">
          <div class="row">
            <div class="col-md-6">
              <img src="/img/GoogleMapTA.webp" class="img" alt="" />
            </div>
            <div class="col-md-6">
              <div class="text-center mt-4">
                <h3>Lapu-lapu, San Pedro</h3>
              </div>
              <div class="text-center mt-4">
                Consequat non sunt dolor eiusmod consequat. Deserunt nulla
                excepteur culpa esse excepteur id cupidatat mollit. Est nulla
                non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in
                qui voluptate laborum et do amet consectetur tempor commodo
                nisi. Fugiat magna deserunt adipisicing irure esse eu consequat
                duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt
                quis officia quis officia reprehenderit nisi.
              </div>
            </div>
          </div>
        </div>

        <div class="card p-4 mb-4">
          <div class="row">
            <div class="col-md-6">
              <img src="/img/GoogleMapTA.webp" class="img" alt="" />
            </div>
            <div class="col-md-6">
              <div class="text-center mt-4">
                <h3>Bangus,San Pedro</h3>
              </div>
              <div class="text-center mt-4">
                Consequat non sunt dolor eiusmod consequat. Deserunt nulla
                excepteur culpa esse excepteur id cupidatat mollit. Est nulla
                non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in
                qui voluptate laborum et do amet consectetur tempor commodo
                nisi. Fugiat magna deserunt adipisicing irure esse eu consequat
                duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt
                quis officia quis officia reprehenderit nisi.
              </div>
            </div>
          </div>
        </div>

        <div class="card p-4 mb-4">
          <div class="row">
            <div class="col-md-6">
              <img src="/img/GoogleMapTA.webp" class="img" alt="" />
            </div>
            <div class="col-md-6">
              <div class="text-center mt-4">
                <h3>Bagdhad, San Vicente</h3>
              </div>
              <div class="text-center mt-4">
                Consequat non sunt dolor eiusmod consequat. Deserunt nulla
                excepteur culpa esse excepteur id cupidatat mollit. Est nulla
                non occaecat veniam. Qui culpa id laboris fugiat enim. Fugiat in
                qui voluptate laborum et do amet consectetur tempor commodo
                nisi. Fugiat magna deserunt adipisicing irure esse eu consequat
                duis cillum fugiat commodo ex sit. Eiusmod ipsum in amet sunt
                quis officia quis officia reprehenderit nisi.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mb-4">
        <h3>Our PC Setup</h3>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="card">
              <div class="card">
                <img
                  class="card-img-top img"
                  src="/img/pcbundle.jpg"
                  alt="pcbundle"
                />
                <div class="card-body">
                  <h5 class="card-title">Ryzen 5 5600 / Rx 6600</h5>
                  <div class="card-text mb-2">
                    <div>Motherboard: A320m MSI</div>
                    <div>Ram: 2x8gb DDR4 3200mhz</div>
                    <div>Monitor: Lenovo 24" IPS</div>
                  </div>
                  <a href="#" class="btn btn-primary">View full specs</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="card">
              <div class="card">
                <img
                  class="card-img-top img"
                  src="/img/pcbundle.jpg"
                  alt="pcbundle"
                />
                <div class="card-body">
                  <h5 class="card-title">Ryzen 5 5500 / Rx 580 8gb</h5>
                  <div class="card-text mb-2">
                    <div>Motherboard: A320m Gigabyte</div>
                    <div>Ram: 2x8gb DDR4 3200mhz</div>
                    <div>Monitor: BenQ 24" IPS</div>
                  </div>
                  <a href="#" class="btn btn-primary">View full specs</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="card">
              <div class="card">
                <img
                  class="card-img-top img"
                  src="/img/pcbundle.jpg"
                  alt="pcbundle"
                />
                <div class="card-body">
                  <h5 class="card-title">Intel I3 9100F / Rx 5500XT 8gb</h5>
                  <div class="card-text mb-2">
                    <div>Motherboard: A320m MSI</div>
                    <div>Ram: 2x8gb DDR4 3200mhz</div>
                    <div>Monitor: Lenovo 24" IPS</div>
                  </div>
                  <a href="#" class="btn btn-primary">View full specs</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="card">
              <div class="card">
                <img
                  class="card-img-top img"
                  src="/img/pcbundle.jpg"
                  alt="pcbundle"
                />
                <div class="card-body">
                  <h5 class="card-title">Ryzen 5 3400G / Vega 11</h5>
                  <div class="card-text mb-2">
                    <div>Motherboard: A320m Asus</div>
                    <div>Ram: 2x8gb DDR4 3200mhz</div>
                    <div>Monitor: Lenovo 24" IPS</div>
                  </div>
                  <a href="#" class="btn btn-primary">View full specs</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3 mt-4">
            <div class="card">
              <div class="card">
                <img
                  class="card-img-top img"
                  src="/img/pcbundle.jpg"
                  alt="pcbundle"
                />
                <div class="card-body">
                  <h5 class="card-title">Ryzen 5 2400G / Vega 7</h5>
                  <div class="card-text mb-2">
                    <div>Motherboard: A320m Asus</div>
                    <div>Ram: 2x8gb DDR4 3200mhz</div>
                    <div>Monitor: Lenovo 24" IPS</div>
                  </div>
                  <a href="#" class="btn btn-primary">View full specs</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3 mt-4">
            <div class="card">
              <div class="card">
                <img
                  class="card-img-top img"
                  src="/img/pcbundle.jpg"
                  alt="pcbundle"
                />
                <div class="card-body">
                  <h5 class="card-title">Ryzen 3 3200G / Vega 8</h5>
                  <div class="card-text mb-2">
                    <div>Motherboard: A320m Asus</div>
                    <div>Ram: 2x8gb DDR4 3200mhz</div>
                    <div>Monitor: Lenovo 24" IPS</div>
                  </div>
                  <a href="#" class="btn btn-primary">View full specs</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3 mt-4">
            <div class="card">
              <div class="card">
                <img
                  class="card-img-top img"
                  src="/img/pcbundle.jpg"
                  alt="pcbundle"
                />
                <div class="card-body">
                  <h5 class="card-title">Ryzen 5 2200G / Vega 8</h5>
                  <div class="card-text mb-2">
                    <div>Motherboard: A320m Asus</div>
                    <div>Ram: 2x8gb DDR4 3200mhz</div>
                    <div>Monitor: Lenovo 24" IPS</div>
                  </div>
                  <a href="#" class="btn btn-primary">View full specs</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3 mt-4">
            <div class="card">
              <div class="card">
                <img
                  class="card-img-top img"
                  src="/img/pcbundle.jpg"
                  alt="pcbundle"
                />
                <div class="card-body">
                  <h5 class="card-title">Athlon 3000G / Vega 3</h5>
                  <div class="card-text mb-2">
                    <div>Motherboard: A320m Asus</div>
                    <div>Ram: 2x8gb DDR4 3200mhz</div>
                    <div>Monitor: Lenovo 24" IPS</div>
                  </div>
                  <a href="#" class="btn btn-primary">View full specs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <Home />
    </div>
  </div>
</template>
<script>
import Home from './templates/Home.vue'

export default {
  data() {
    return {

    }
  },

  name: 'IntroComponent',

  components: {
    Home,
  },

  props: {},

  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>

<style scoped>
#carouselintro img {
  height: 600px;
}

#carouselintro {
  margin-top: 26px;
}

</style>


