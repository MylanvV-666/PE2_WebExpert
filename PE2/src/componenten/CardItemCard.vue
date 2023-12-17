<script>
export default {
    props: ['product'],
    computed: {
        description() {
          return this.product.omschrijving.substring(0, 120)
        },
        item_cost() {
            return this.product.prijs * this.product.quantity
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
          <h5>Totale prijs: {{ item_cost.toFixed(2) }}</h5>
      </div>
  </div>
</template>

<style lang="scss">
.cart-item-card {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    width: 100%;
    height: 150px;

    img {
        max-height: 150px;
        padding: 15px;
    }

    .uitleg {
        display: flex;
        flex-direction: column;
        padding: 15px;

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

    .prijs_etc {
        display: flex;
        flex-direction: column;

        h5 {
            color: #29503c;
            font-family: "Red Hat Display", sans-serif;
            font-size: 25px;
            margin: 20px 0;
        }

        .aantal {
            display: flex;
            flex-direction: row;

            p {
                color: #29503c;
                font-family: "Tilt Neon", sans-serif;
                font-size: 20px;
                margin: 0 15px;
            }
            button {
                width: 25px;
                height: 25px;
                color: #fcfeef;
                background-color: #29503c;
                border: none;
                border-radius: 5px;
                font-size: 20px;
                font-family: "Red Hat Display", sans-serif;

                &:hover {
                    color: #fcfeef;
                    background-color: #1a3328;
                }
            }
        }
    }
}
</style>