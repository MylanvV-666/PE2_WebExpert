<script>
import {defineComponent} from "vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import cardItemCardforCheckout from "@/componenten/CardItemCardforCheckout.vue";
import cardSummaryPaymentCardforCheckout from "@/componenten/CardSummaryPaymentCardforCheckout.vue";

export default defineComponent({
    components: {cardSummaryPaymentCardforCheckout, cardItemCardforCheckout, FooterComponent},
    computed: {
        product() {
            return this.$store.getters.cartItems
        }
    },
    methods: {
        removeallFromCart() {
            this.$store.commit('removeallFromCart')
        }
    }
})


</script>

<template>
    <main id="geluktpagina">
        <h1>De betaling is gelukt!</h1>
        <p id="geel">Hieronder nog even de oplijsting van uw gekochte producten.</p>
        <div id="gelukt-producten">
            <div id="gepr">
                <cardItemCardforCheckout
                    v-for="product in product"
                    :key="product.ID"
                    :product="product"
                />
            </div>
            <div id="gebe">
                <cardSummaryPaymentCardforCheckout/>
            </div>
        </div>
        <router-link to="/"><button @click="removeallFromCart">Terug naar de home Pagina</button></router-link>
    </main>
    <FooterComponent/>
</template>

<style>
#geluktpagina {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 800px;

    h1 {
        color: #29503c;
        font-size: 50px;
        font-family: "Major Mono Display", monospace;
        text-align: center;
    }

    #geel  {
        color: #e2cb03;
        font-size: 35px;
        font-family: "Tilt Neon", sans-serif;
        text-align: center;
    }

    #gelukt-producten {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
    }
    a {
        width: 25%;

        button {
            color: #ffffff;
            text-decoration: none;
            font-family: "Red Hat Display", sans-serif;
            font-size: 20px;
            border-radius: 5px;
            background-color: #29503c;
            height: 40px;
            width: 100%;
            padding-left: 10px;
            align-self: center;

            &:hover{
                background-color: #fcfeef;
                border: 1px solid #1a3328;
                color: #1a3328;
            }
        }
    }
}
</style>