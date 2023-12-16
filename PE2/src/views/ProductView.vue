<script>
import { defineComponent } from "vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import NotFound from "@/views/NotFoundView.vue";
import products from "@/product.json";


export default defineComponent({
    components: { FooterComponent, NotFound },
    data() {
        return {
            product: null
        }
    },
    methods: {
        addToCart() {
            console.log('Product:', this.product); // Voeg deze regel toe om productgegevens te bekijken
            if (this.product && this.product.stock > 0) {
                console.log('Product toegevoegd aan winkelwagen:', this.product);
            } else {
                console.log('Product is uitverkocht!');
            }
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
                <button @click="addToCart" :disabled="product.stock === 0">
                    <img src="@/assets/shopping-cart-green.png" alt="AddToCart" id="green">
                    <img src="@/assets/shopping-cart.png" alt="AddToCart" id="white">
                </button>
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
</style>