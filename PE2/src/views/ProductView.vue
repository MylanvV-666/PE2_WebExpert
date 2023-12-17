<script>
import { defineComponent } from "vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import NotFound from "@/views/NotFoundView.vue";
import products from "@/product.json";


export default defineComponent({
    components: { FooterComponent, NotFound },
    data() {
        return {
            product: "",
            quantity: null
        }
    },
    computed: {
        product_total() {
            return this.$store.getters.productQuantity(this.product)
        },
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
        }
    },
    created() {
        const productId = this.$route.params.id; // Haal het product-ID op vanuit de route
        this.product = products.find(product => product.ID === Number(productId));


    }
})
</script>

<template>
    <main id="details">
        <div v-if="product">
            <div>
                <img :src="product.afbeelding" alt="foto">
            </div>
            <div>
                <h2>{{ product.titel }}</h2>
                <p>{{ product.omschrijving }}</p>
                <h3>€{{ product.prijs?.toFixed(2) }}</h3>
                <p>BTW: {{ product.BTW * 100 }}</p>
                <div id="cart_total_in_productview">
                    <button @click="addToCart">
                        <img src="@/assets/shopping-cart-green.png" alt="AddToCart" id="green">
                        <img src="@/assets/shopping-cart.png" alt="AddToCart" id="white">
                    </button>
                    <div class="cart-total" v-if="product_total">
                        <p>In cart: {{ product_total }}</p>
                    </div>
                </div>
                <p v-if="product.stock === 0" style="color: red;">Product is uitverkocht</p>
                <p v-else-if="product.stock > 0" style="color: orange;">Nog {{ product.stock }} producten over!</p>
            </div>
        </div>
        <div v-else>
            <NotFound/>
        </div>
    </main>
</template>

<style>
#cart_total_in_productview {
    display: flex;
    justify-content: center;
    align-content: space-between;
    width: 100%;
    height: 50px;
}
</style>