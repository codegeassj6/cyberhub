<template>
  <div>
    <div class="space-intro">
      <div class="container">
        <div class="card shadow bg-primary">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-8">
                <div class="card shadow mb-4">
                  <div class="card-body p-4">
                    <div class="h5" v-if="cart_items.length">Shopping Cart</div>
                    <div v-else class="h5">No items in the cart yet.</div>
                    <hr />

                    <div class="form-check mb-3" v-if="cart_items.length">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          ref="selectAll"
                          type="checkbox"
                          @change="selectAll($event)"
                        />
                        Select All
                      </label>
                    </div>

                    <div
                      class="card shadow mb-3"
                      v-for="(item, index) in cart_items"
                      :key="index"
                    >
                      <div class="card-body">
                        <div class="row">
                          <div class="col-sm-2 mb-2">
                            <label :for="'label_' + item.id">
                              <img
                                :src="
                                  '/img/product/' + item.product_details.image
                                "
                                alt=""
                                class="img mb-1"
                                height="100"
                              />
                            </label>
                            <div class="text-center">
                              <input
                                class="form-check-input"
                                @change="selectProduct($event, item)"
                                type="checkbox"
                                v-model="orders"
                                :value="item.id"
                                :id="'label_' + item.id"
                              />
                            </div>
                          </div>
                          <div class="col-md-7 mb-2">
                            <div class="h5">
                              {{ item.product_details.name }}
                            </div>
                            <div>{{ item.product_details.description }}</div>
                            <div class="mt-2">
                              <div class="h5">
                                Size:
                                {{
                                  item.product_size_details.value +
                                  item.product_size_details.unit
                                }}
                              </div>
                            </div>
                            <div>
                              <a
                                href="#!"
                                @click="deleteCartItem(item)"
                                class="text-muted"
                              >
                                <i class="fa fa-trash-o fa-lg"></i>
                              </a>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="text-center h4">
                              P {{ item.product_size_details.price }}
                            </div>

                            <div class="input-group mb-1">
                              <button
                                @click="decreaseQuantity(item)"
                                class="btn btn-primary btn-sm bg-gradient"
                                type="button"
                              >
                                <i class="fa fa-minus"></i>
                              </button>
                              <input
                                type="number"
                                @change="changeQuantity(item)"
                                :id="'input_' + item.id"
                                :value="item.quantity"
                                min="1"
                                class="form-control text-center"
                              />
                              <button
                                @click="increaseQuantity(item)"
                                class="btn btn-primary btn-sm bg-gradient"
                                type="button"
                              >
                                <i class="fa fa-plus"></i>
                              </button>
                            </div>

                            <div class="text-center">
                              {{ item.product_size_details.stock }} stocks left
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card shadow">
                  <div class="card-body p-4">
                    <h3>Summary</h3>
                    <hr />
                    <div class="mt-4">
                      <div class="d-flex">
                        <div class="h5">Products</div>
                        <div class="ms-auto">
                          <span>P</span>
                          <span>{{ computedSubTotal }}</span>
                        </div>
                      </div>

                      <div class="d-flex">
                        <div class="h5">Discount</div>
                        <div class="ms-auto">0</div>
                      </div>
                      <hr />

                      <div class="d-flex mb-2">
                        <div class="h5">Total</div>
                        <div class="ms-auto">
                          <span>P</span>
                          <span>{{ computedTotal }}</span>
                        </div>
                      </div>

                      <div class="d-flex mb-2">
                        <stripe-checkout
                          ref="checkoutRef"
                          mode="payment"
                          :pk="stripe.pk"
                          :line-items="stripe.lineItems"
                          :success-url="stripe.successURL"
                          :cancel-url="stripe.cancelURL"
                          @loading="v => loading = v"
                        />
                      </div>

                      <div class="text-center">
                        <button
                          @click="submitOrder"
                          class="btn btn-primary w-100"
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
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
import { StripeCheckout  } from '@vue-stripe/vue-stripe';

export default {
  data() {
    return {
      cart_items: "",
      orders: [],
      subtotal: "",
      stripe: {
        pk: 'pk_test_51MgvekEcY1OBCePNucDrMaR7fDOJJJXCDYzlvazEHYvkTtsAGyWAl7MYSqyRfndRhI1fdnIspNiUU77oT4d19oxG00YLvmCTb6',
        lineItems: [
          // {
          //   price: 'price_1N5u4PEcY1OBCePNf2mXqkdp',
          //   quantity: 1,
          // },
          // {
          //   price: 'price_1N5u2qEcY1OBCePNSKyIiJkS',
          //   quantity: 1,
          // }
        ],
        successURL: process.env.MIX_APP_URL+'/payment/stripe/success',
        cancelURL: process.env.MIX_APP_URL+'/payment/stripe/cancel',
      }
    };
  },
  components: {
    StripeCheckout,
  },

  props: [],

  computed: {
    computedSubTotal() {
      this.subtotal = null;
      this.orders.forEach((elem, index) => {
        this.cart_items.forEach((item) => {
          if (elem == item.id) {
            this.subtotal = this.subtotal +=
              item.product_size_details.price * item.quantity;
          }
        });
      });
      return this.subtotal;
    },

    computedTotal() {
      return this.subtotal;
    },
  },

  methods: {
    increaseQuantity(item) {
      if (item.quantity < item.product_size_details.stock) {
        item.quantity++;
        this.$store.commit(
          "mutateCartCount",
          this.$store.getters.getCartCount + 1
        );

        const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
        axios({
          method: "patch",
          params: {
            quantity: item.quantity,
          },
          url: `/api/cart/${item.id}`,
          headers: { Authorization: AuthStr },
        })
          .then((res) => {})
          .catch((err) => {});
      }
    },

    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.$store.commit(
          "mutateCartCount",
          this.$store.getters.getCartCount - 1
        );

        const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
        axios({
          method: "patch",
          params: {
            quantity: item.quantity,
          },
          url: `/api/cart/${item.id}`,
          headers: { Authorization: AuthStr },
        })
          .then((res) => {})
          .catch((err) => {});
      }
    },

    changeQuantity(item) {
      if (
        document.getElementById("input_" + item.id).value == "" ||
        document.getElementById("input_" + item.id).value == 0
      ) {
        document.getElementById("input_" + item.id).value = item.quantity;
      }

      if (
        document.getElementById("input_" + item.id).value >
        item.product_size_details.stock
      ) {
        document.getElementById("input_" + item.id).value =
          item.product_size_details.stock;
      }

      // commit mutation for cart count
      if (item.quantity > +document.getElementById("input_" + item.id).value) {
        this.$store.commit(
          "mutateCartCount",
          this.$store.getters.getCartCount -
            (item.quantity - +document.getElementById("input_" + item.id).value)
        );
      } else {
        this.$store.commit(
          "mutateCartCount",
          this.$store.getters.getCartCount +
            +document.getElementById("input_" + item.id).value -
            item.quantity
        );
      }

      item.quantity = +document.getElementById("input_" + item.id).value;

      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios({
        method: "patch",
        params: {
          quantity: item.quantity,
        },
        url: `/api/cart/${item.id}`,
        headers: { Authorization: AuthStr },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteCartItem(item) {
      // delete the v-for cart item
      this.cart_items.forEach((elem, index) => {
        if (elem == item) {
          this.cart_items.splice(index, 1);
        }
      });

      // remove orders array value
      if (this.orders) {
        this.orders.forEach((elem, index) => {
          if (elem == item.id) {
            this.orders.splice(index, 1);
            this.$refs.subtotal.innerText =
              parseInt(this.$refs.subtotal.innerText) -
              item.product_size_details.price *
                +document.getElementById("input_" + item.id).value;
          }
        });
      }

      const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
      axios
        .delete(`/api/cart/${item.id}`, {
          headers: {
            Authorization: AuthStr,
          },
        })
        .then((res) => {})
        .catch((err) => {});
    },

    selectProduct(e, item) {
      if (
        this.$refs.selectAll.checked &&
        this.orders.length < this.cart_items.length
      ) {
        this.$refs.selectAll.checked = false;
      }

      if (this.orders.length == this.cart_items.length) {
        this.$refs.selectAll.checked = true;
      }
    },

    selectAll(e) {
      if (e.target.checked) {
        this.orders = [];
        this.cart_items.forEach((elem) => {
          this.orders.push(elem.id);
        });
      } else {
        this.orders = [];
      }
    },

    submitOrder(e) {
      e.target.setAttribute('disabled', true);
      this.cart_items.forEach(elem => {
        if(this.orders.includes(elem.id)) {
          this.stripe.lineItems.push({price: elem.product_size_details.stripe_api_id, quantity: elem.quantity});
        }
      });

      if (this.orders.length) {
        const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
        axios({
          method: "post",
          data: { id: this.orders },
          url: `/api/order`,
          headers: { Authorization: AuthStr },
        })
          .then((res) => {
            e.target.removeAttribute('disabled');
            this.orders = [];
            this.cart_items = res.data.cart_items;
            this.$refs.checkoutRef.redirectToCheckout();
          })
          .catch((err) => {});
      }
    },
  },

  watch: {
    $data: {
      handler: function(val, oldVal) {
          console.log('watcher: ',val);
      },
      deep: true
    },
  },


  updated() {},

  mounted() {
    const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);
    axios({
      method: "get",
      url: `/api/cart/`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        this.cart_items = res.data.cart_items;
      })
      .catch((err) => {});
  },
};
</script>

<style scoped>
.btn-info {
  color: white;
}

label {
  display: block !important;
}
</style>
