<script>
import { defineComponent } from "vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import CardItemCard from '@/componenten/CardItemCard.vue';
import CardSummaryPaymentCard from '@/componenten/CardSummaryPaymentCard.vue';

export default defineComponent({
    computed: {
        product() {
            return this.$store.getters.cartItems
        },
        payment() {
            return CardItemCard
        }
    },
    components: {
        FooterComponent, CardItemCard, CardSummaryPaymentCard
    }
});
</script>

<template>
<main id="cart">
    <div id="producten_cart" >
        <h1>Your Cart</h1>
        <CardItemCard
            v-for="product in product"
            :key="product.ID"
            :product="product"
            v-if="payment.length > 0"
        />
        <div v-else>
            <p>Uw cart is leeg!</p>
        </div>
    </div>
    <div id="betalen">
        <CardSummaryPaymentCard/>
    </div>
</main>
<FooterComponent />
</template>

<style>
</style>