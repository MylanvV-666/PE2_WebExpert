<script>
import {defineComponent} from "vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import CardItemCard from '@/componenten/CardItemCard.vue';
import CardSummaryPaymentCard from '@/componenten/CardSummaryPaymentCard.vue';
import HeaderComponent from "@/componenten/HeaderComponent.vue";

export default defineComponent({
    computed: {
        product() {
            return this.$store.getters.cartItems
        }
    },
    components: {
        HeaderComponent,
        FooterComponent, CardItemCard, CardSummaryPaymentCard
    }
});
</script>

<template>
    <HeaderComponent/>
    <main id="cart">
        <div id="producten_cart">
            <h1>Jouw Winkelkar</h1>
            <CardItemCard
                    v-for="product in product"
                    :key="product.ID"
                    :product="product"
            />
        </div>
        <div id="betalen">
            <CardSummaryPaymentCard/>
        </div>
    </main>
    <FooterComponent/>
</template>

<style lang="scss">
//kleuren
$color1: #e2cb03;
$color2: #29503c;
$color3: #fcfeef;
$background: #fff;
$doorzichtig: rgba(0, 0, 0, 0.46);

//lettergrotes
$sizeh1: 50px;
$sizeh2: 40px;
$sizeh3: 35px;
$sizeh4: 30px;
$sizeh5: 25px;
$sizep: 20px;

//fontfamilie
$font1: 'Major Mono Display', monospace;
$font2: 'Red Hat Display', sans-serif;
$font3: 'Tilt Neon', sans-serif;

#cart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 2rem 10rem;

  #producten_cart {
    flex-direction: column;
    width: 75%;
    height: 600px;

    h1 {
      color: #29503c;
      font-family: "Major Mono Display", monospace;
      font-size: 50px;
      padding-bottom: 20px;
    }

    .cart-item-card {
      display: flex;
      flex-direction: row;
      align-content: space-between;
      width: 100%;
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
  }

  #cart-summary {
    flex-direction: column;
    width: 25%;
    height: 600px;
    border-radius: 20px;
    border: 2px solid $color2;
  }


  #betalen {
    min-width: 22%;
    margin-top: 70px;
  }
}

@media screen and (max-width: 1400px) {
  #cart {
    #producten_cart {
        width: 50%;
      .cart-item-card {
        flex-direction: column;
        align-content: center;

          img {
              width: fit-content;
          }

        .uitleg {
          display: flex;
          flex-direction: column;
          padding: 15px;
          min-width: 60%;
        }

        div.prijs_etc {
          display: flex;
          flex-direction: row;
          align-items: start;
          padding: 15px;
          min-width: 20%;

          .aantal {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          }
        }
      }
    }
  }
    #cart-summary {
        width: 50%;
    }
}
@media screen and (max-width: 1000px) {
    #cart {
        flex-direction: column;
        #producten_cart {
            width: 100%;
        }
    }
    #cart-summary {
        width: 100%;
    }
}
</style>