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
  <div class="cart-summary-payment-card">
      <h3>Cart Total: {{ cart_total.toFixed(2) }}</h3>
      <router-link to="/CheckOut"><button class="view-product-button">Verder naar betalen</button></router-link>
  </div>
</template>

<style lang="scss">
.cart-summary-payment-card {
  border: 1px solid #e2cb03;
  border-radius: 15px;
  min-height: 200px;
  padding: 20px;

  h3 {
    color: #29503c;
    font-size: 35px;
    font-family: "Tilt Neon", sans-serif;
  }

  button {
    width: 200px;
    height: 50px;
    color: #fff;
    font-family: "Red Hat Display", sans-serif;
    font-size: 20px;
    background-color: #29503c;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 25px;

    &:hover {
      color: #29503c;
      background-color: #fcfeef;
      border: 1px solid #29503c;
    }
  }
}
</style>