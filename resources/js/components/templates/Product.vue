<template>
    <div>
        <div class="card shadow-0 border rounded-3 mb-3" v-for="(data, index) in datas.data" :key="index">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-xl-3">
                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                            <img :src="'/img/product/'+data.image"
                            class="w-100 product-img img-thumbnail" />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
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
                                <button v-if="index == 0" class="btn btn-sm me-1 btn-info">{{size.value + size.unit}}</button>
                                <button v-else class="btn btn-sm me-1 btn-outline-info">{{size.value + size.unit}}</button>
                            </span>
                            <!-- <input type="hidden"> -->
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-3 border-sm-start-none border-start">
                        <div class="d-flex flex-row align-items-center mb-1">
                            <h4 class="mb-1" :id="`price_`+data.id">₱{{data.default_price}}</h4>
                        </div>
                        <div class="d-flex flex-column mt-4">
                            <div class="input-group mb-3 px-4">
                                <button class="btn btn-primary btn-sm" type="button" @click="decreaseQuantity(data)"><i class="fa fa-minus"></i></button>
                                <input type="number" class="form-control text-center" :id="'input_'+data.id" min="1" value="1">
                                <button class="btn btn-primary btn-sm" type="button" @click="increaseQuantity(data)"><i class="fa fa-plus"></i></button>
                            </div>
                            <button type="button" @click="addToCart(data.id)" v-if="currentUser" class="btn btn-outline-primary btn-sm mt-2">
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
        addToCart(id) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'POST',
                data: {
                    product_id: id,
                    quantity: document.getElementById('input_'+id).value,
                    size: '',
                },
                url: `/api/order/store`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                console.log(res.data);
            }).catch(err => {

            });
        },

        increaseQuantity(data) {
            document.getElementById('input_'+data.id).value ++;
        },

        decreaseQuantity(data) {
            if(document.getElementById('input_'+data.id).value > 1) {
                document.getElementById('input_'+data.id).value --;
            }

        },

    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                console.log('watcher: ',val);
            },
            deep: true
        }
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

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

input[type="number"]:focus, input[type="number"]:active {
    box-shadow: none;
}

.btn-outline-info:hover, .btn-info {
    color: white;
}



</style>
