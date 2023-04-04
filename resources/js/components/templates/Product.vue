<template>
    <div>
        <div class="card shadow-0 border rounded-3 mb-3" v-for="(data, index) in datas.data" :key="index">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-xl-3 mb-2">
                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                            <img :src="'/img/product/'+data.image"
                            class="w-100 product-img img-thumbnail" />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-7">
                        <h5>{{ data.name }}</h5>
                        <div class="d-flex flex-row mb-2">
                            <Star :rating="data.rating" />
                        </div>
                        <p class="text-truncate mb-2">
                            {{ data.description }}
                        </p>
                        <h6>Size:</h6>
                        <div class="mt-2">
                            <span v-for="(size, index) in data.size" :key="index">
                                <input
                                    v-if="index == 0"
                                    type="hidden"
                                    :id="`input_size_`+data.id"
                                    :value="data.default_size"
                                >

                                <button
                                    class="btn btn-sm me-1"
                                    :class="data.default_size == size.value ? 'btn-info' : 'btn-outline-info'"
                                    @click="changeSize($event, data, size)"
                                >
                                    {{size.value + size.unit}}
                                </button>
                            </span>

                        </div>
                    </div>
                    <div class="col-lg-12 col-md-7 col-xl-2 border-sm-start-none border-start">
                        <h4 class="mb-1 text-center" :id="`price_`+data.id">
                            ₱{{data.default_price}}
                        </h4>
                        <div class="text-center mt-2">
                            <div class="input-group mb-1">
                                <button class="btn btn-primary btn-sm" type="button" @click="decreaseQuantity(data)">
                                    <i class="fa fa-minus"></i>
                                </button>
                                <input
                                    type="number"
                                    class="form-control text-center"
                                    :id="'input_'+data.id" min="1" max value="1"
                                    @change="changeQuantity(data)"
                                >
                                <button class="btn btn-primary btn-sm" type="button" @click="increaseQuantity(data)">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </div>

                            <div class="text-muted">
                                {{ data.default_stocks }} stocks left
                            </div>

                            <button type="button"
                                @click="addToCart(data)"
                                v-if="currentUser" class="btn btn-outline-primary btn-sm mt-2">
                                Add to cart
                            </button>

                            <router-link v-else to="/login" class="btn btn-outline-primary btn-sm mt-2">
                                Add to cart
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Star from './Star.vue'

export default {
    data() {
        return {

        }
    },
    components: {
        Star,
    },

    props: [
        'datas'
    ],

    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        },


    },

    methods: {
        addToCart(data) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'POST',
                data: {
                    product_id: data.id,
                    quantity: document.getElementById('input_'+data.id).value,
                    product_size_id: data.default_product_size_id,
                },
                url: `/api/cart`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.$store.commit('mutateCartCount', res.data.quantity);
            }).catch(err => {

            });
        },

        increaseQuantity(data) {
            if(+document.getElementById('input_'+data.id).value < data.default_stocks ) {
                document.getElementById('input_'+data.id).value ++;
            }

        },

        decreaseQuantity(data) {
            if(document.getElementById('input_'+data.id).value > 1) {
                document.getElementById('input_'+data.id).value --;
            }
        },

        changeQuantity(data) {
            if(document.getElementById('input_'+data.id).value > 1) {
                document.getElementById('input_'+data.id).value = data.default_stocks;
            }

            if(document.getElementById('input_'+data.id).value == '') {
                document.getElementById('input_'+data.id).value = data.default_stocks;
            }
        },

        changeSize(e, data, size) {
            data.default_price = size.price;
            data.default_size = size.value; // changing the size and color class
            data.default_product_size_id = size.id;
            data.default_stocks = size.stock;
        },

    },
    updated() {

    },

    mounted() {

    },
}
</script>

<style scoped>
.product-img {
    height: 190px;
}





</style>
