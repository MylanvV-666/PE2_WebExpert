<script>
import {defineComponent} from "vue";
import ProductCardComponent from './ProductCardComponent.vue';
import products from '../product.json';

export default defineComponent({
    components: {ProductCardComponent},
        data() {
            return {
                popularProducts: []
            };
        },
        created() {
            // Sorteer de producten op basis van stock en neem de eerste 4
            this.popularProducts = products.sort((a, b) => b.stock - a.stock).slice(0, 4);
        }
})
</script>

<template>
    <div>
        <div v-for="product in popularProducts" :key="product.id">
            <!-- Toon de productinformatie, bijvoorbeeld met ProductCardComponent -->
            <ProductCardComponent :product="product" />
        </div>
    </div>
</template>

<style>
</style>