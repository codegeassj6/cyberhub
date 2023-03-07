<template>
    <div>
        <div class="card">
            <div class="card-body">
                <stripe-checkout
                    ref="checkoutRef"
                    :pk="publishableKey"
                />
                <button class="btn btn-primary" @click="submit">Pay now!</button>
            </div>
        </div>
    </div>
</template>
<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
    data() {
        return {
            publishableKey: 'pk_test_51MgvekEcY1OBCePNucDrMaR7fDOJJJXCDYzlvazEHYvkTtsAGyWAl7MYSqyRfndRhI1fdnIspNiUU77oT4d19oxG00YLvmCTb6',
        }
    },
    components: {
        StripeCheckout,
    },

    props: [],

    computed: {

    },

    methods: {
        submit () {
            // You will be redirected to Stripe's secure checkout page
            this.$refs.checkoutRef.redirectToCheckout();
        },

        getSession() {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                params: {id: 1},
                url: `/api/payment`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                console.log(res.data);
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

    beforeMounted() {

    },

    mounted() {
        this.getSession();
    },
}
</script>

<style scoped>

</style>
