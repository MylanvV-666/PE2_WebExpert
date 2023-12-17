<script>
export default {
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal
        }
    }
}
</script>

<template>
  <div class="cart-item-card">
      <h3>Cart Total: {{ cart_total.toFixed(2) }}</h3>
      <router-link to="/CheckOut"><button class="view-product-button">Verder naar betalen</button></router-link>
  </div>
</template>

<style>
</style>