<script>
import { defineComponent, ref } from "vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import products from "@/product.json"; // Make sure you have access to your product data
import NotFound from "@/views/NotFoundView.vue";


export default defineComponent({
    components: { FooterComponent, NotFound },
    data() {
        return {
            selectedProduct: ""
        }
    },
    mounted() {
        // Retrieve the product ID from the route parameters
        const productId = this.$route.params.ID;

        // Find the product with the corresponding ID
        this.selectedProduct = products.find((product) => this.product.ID === productId);
    },
    methods: {
        addToCart() {
            if (this.product && this.product.stock > 0) {
                console.log('Product toegevoegd aan winkelwagen:', this.product);
            } else {
                console.log('Product is uitverkocht!');
            }
        }
    }
})
</script>

<template>
    <main id="details">
        <div v-if="selectedProduct">
            <div>
                <img :src="selectedProduct.afbeelding" :alt="selectedProduct.titel">
            </div>
            <div>
                <h2>{{ selectedProduct.titel }}</h2>
                <p>{{ selectedProduct.omschrijving }}</p>
                <h3>€{{ selectedProduct.prijs.toFixed(2) }}</h3>
                <p>BTW: {{ selectedProduct.BTW * 100 }}</p>
                <button @click="addToCart" :disabled="selectedProduct.stock === 0">
                    <img src="@/assets/shopping-cart-green.png" alt="AddToCart" id="green">
                    <img src="@/assets/shopping-cart.png" alt="AddToCart" id="white">
                </button>
                <p v-if="selectedProduct.stock === 0" style="color: red;">Product is out of stock</p>
                <p v-else-if="selectedProduct.stock < 5" style="color: orange;">Only {{ selectedProduct.stock }} left in stock!</p>
            </div>
        </div>
        <div v-else>
            <NotFound/>
        </div>
    </main>
</template>

<style>
</style>