<script>
export default {
    props: ['product'],
    computed: {
        description() {
            return this.product.omschrijving.substring(0, 120)
        },
        item_cost() {
            return (this.product.prijs + this.product.BTW) * this.product.quantity
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
        },
        removeFromCart() {
            this.$store.commit('removeFromCart', this.product)
        }
    }
}
</script>

<template>
    <div class="cart-item-card">
        <img :src="product.afbeelding" :alt="product.titel">
        <div class="uitleg">
            <h3>{{ product.titel }}</h3>
            <p>{{ description }}</p>
        </div>
        <div class="prijs_etc">
            <div class="aantal">
                <button class="remove" @click="removeFromCart">-</button>
                <p>{{ product.quantity }}</p>
                <button class="add" @click="addToCart">+</button>
            </div>
            <h5>Totale prijs incl. BTW: {{ item_cost.toFixed(2) }}</h5>
        </div>
    </div>
</template>

<style>
</style>