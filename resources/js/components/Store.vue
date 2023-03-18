<template>
    <div>
        <div class="space-intro">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <Product :datas="products"/>
                        <div class="float-end mt-2">
                            <PaginateButton :paginate_data="products"/>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <Adsense
                                data-ad-client="ca-pub-5828491790124517"
                                data-ad-slot="7486431136">
                            </Adsense>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Product from './templates/Product.vue'
import PaginateButton from './templates/PaginateButton.vue'

export default {
    data() {
        return {
            products: '',
        }
    },
    components: {
        Product,
        PaginateButton,
    },

    props: [],

    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        },
    },

    methods: {
        getProducts() {
            // const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                url: `/api/product`,
                // headers: {Authorization: AuthStr}
            }).then(res => {
                this.products = res.data;
            }).catch(err => {

            });
        },

        nextPage(url) {
            axios({
                method: 'get',
                url: url,
            }).then(res => {
                this.products = res.data;
            }).catch(err => {

            });
        },

        prevPage(url) {
            axios({
                method: 'get',
                url: url,
            }).then(res => {
                this.products = res.data;
            }).catch(err => {

            });
        },

        goToPage(url, page) {
            axios({
                method: 'get',
                url: `${url}?page=${page}`,
            }).then(res => {
                this.products = res.data;
            }).catch(err => {

            });
        }

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

    deactivated() {
        this.$destroy();
    },

    mounted() {
        this.getProducts();
    },
}
</script>

<style scoped>



</style>
