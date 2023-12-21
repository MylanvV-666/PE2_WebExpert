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
  <div class="cart-summary-payment-card-for-Checkout">
      <h3>Cart Total incl. BTW: €{{ cart_total.toFixed(2) }}</h3>
  </div>
</template>

<style lang="scss">
.cart-summary-payment-card-for-Checkout {
  min-height: 100px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  h3 {
    color: #29503c;
    font-size: 35px;
    font-family: "Tilt Neon", sans-serif;
    text-align: center;
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

    &:hover {
      color: #29503c;
      background-color: #fcfeef;
      border: 1px solid #29503c;
    }
  }
}
</style>