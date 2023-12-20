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
    }
}
</script>

<template>
  <div class="cart-item-card-for-checkout">
      <div class="uitleg-for-checkout">
          <h3>{{ product.titel }}</h3>
          <p>{{ description }}</p>
      </div>
      <div class="prijs_etc-for-checkout">
          <h5>aantal: {{ product.quantity }}</h5>
          <h5>incl.BTW €{{ item_cost.toFixed(2) }}</h5>
      </div>
  </div>
</template>

<style lang="scss">
.cart-item-card-for-checkout {
    display: flex;
    flex-direction: row;
    align-content: space-between;
  align-items: center;
    max-width: 100%;
    min-height: 140px;
    border: 1px solid #29503c;
    border-radius: 20px;
  margin: 20px;

    .uitleg-for-checkout {
        display: flex;
        flex-direction: column;
        padding: 15px;
      width: 50%;

        h3 {
            color: #29503c;
            font-family: "Major Mono Display", monospace;
            font-size: 35px;
        }

        p {
            color: #29503c;
            font-family: "Tilt Neon", sans-serif;
            font-size: 20px;
        }
    }

    .prijs_etc-for-checkout {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 15px;
      width: 50%;

      h5 {
        color: #29503c;
        font-family: "Red Hat Display", sans-serif;
        font-size: 25px;
        margin: 20px 0;
      }
    }
}
</style>