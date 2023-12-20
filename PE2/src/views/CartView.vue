<script>
import { defineComponent } from "vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import CardItemCard from '@/componenten/CardItemCard.vue';
import CardSummaryPaymentCard from '@/componenten/CardSummaryPaymentCard.vue';
import HeaderComponent from "@/componenten/HeaderComponent.vue";

export default defineComponent({
    computed: {
        product() {
            return this.$store.getters.cartItems
        }
    },
    components: {
        HeaderComponent,
        FooterComponent, CardItemCard, CardSummaryPaymentCard
    }
});
</script>

<template>
    <HeaderComponent/>
<main id="cart">
    <div id="producten_cart" >
        <h1>Jouw Winkelkar</h1>
        <CardItemCard
            v-for="product in product"
            :key="product.ID"
            :product="product"
        />
    </div>
    <div id="betalen">
        <CardSummaryPaymentCard/>
    </div>
</main>
<FooterComponent />
</template>

<style lang="scss">
#cart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #producten_cart {
        min-height: 700px;
        min-width: 72%;

        h1 {
            color: #29503c;
            font-family: "Major Mono Display", monospace;
            font-size: 50px;
            padding-bottom: 20px;
        }
    }
    #betalen {
        min-width: 22%;
        margin-top: 70px;
    }
}
</style>