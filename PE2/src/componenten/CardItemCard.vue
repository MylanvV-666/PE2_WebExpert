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

<style lang="scss">
.cart-item-card {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    width: 90%;
    min-height: 150px;
    border: 1px solid #29503c;
    border-radius: 20px;
    margin: 0 20px 20px 0;

    img {
        min-width: 150px;
        max-height: 150px;
        margin: 15px;
        border-radius: 15px;
    }

    .uitleg {
        display: flex;
        flex-direction: column;
        padding: 15px;
        min-width: 60%;

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

    div.prijs_etc {
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 15px;
        min-width: 20%;

        h5 {
            color: #29503c;
            font-family: "Red Hat Display", sans-serif;
            font-size: 25px;
            margin: 20px 0;
        }

        .aantal {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;

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