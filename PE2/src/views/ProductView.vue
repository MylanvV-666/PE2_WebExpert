<script>
import { defineComponent } from "vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import NotFound from "@/views/NotFoundView.vue";
import products from "@/product.json";
import HeaderComponent from "@/componenten/HeaderComponent.vue";


export default defineComponent({
    components: {HeaderComponent, FooterComponent, NotFound },
    data() {
        return {
            product: ""
        }
    },
    computed: {
        product_total() {
            return this.$store.getters.productQuantity(this.product)
        },
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
        }
    },
    created() {
        const productId = this.$route.params.id; // Haal het product-ID op vanuit de route
        this.product = products.find(product => product.ID === Number(productId));


    }
})
</script>

<template>
    <HeaderComponent/>
    <main id="details">
        <div v-if="product">
            <div>
                <img id="foto" :src="product.afbeelding" alt="foto">
            </div>
            <div>
                <h2>{{ product.titel }}</h2>
                <p>{{ product.omschrijving }}</p>
                <h3>€{{ product.prijs?.toFixed(2) }}</h3>
                <p>BTW: {{ product.BTW * 100 }}</p>
                <div id="cart_total_in_productview">
                    <button @click="addToCart">
                        <img src="@/assets/shopping-cart-green.png" alt="AddToCart" id="green">
                        <img src="@/assets/shopping-cart.png" alt="AddToCart" id="white">
                    </button>
                    <div class="cart-total" v-if="product_total">
                        <p>In cart: {{ product_total }}</p>
                    </div>
                </div>
                <p v-if="product.stock === 0" style="color: red;">Product is uitverkocht</p>
                <p v-else-if="product.stock > 0" style="color: orange;">Nog {{ product.stock }} producten over!</p>
            </div>
        </div>
    </main>
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

#details {
    background-color: $background;
    padding: 2rem 10rem;

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;

        #foto {
            width: 55%;
            margin: 2rem;
            height: fit-content;
        }

        div {
            display: flex;
            flex-direction: column;
            margin: 3rem 2rem;

            h2 {
                color: $color2;
                font-size: $sizeh2;
                font-family: $font1;
                margin-bottom: 1rem;
            }

            p {
                color: $color2;
                font-size: $sizep;
                font-family: $font2;
                height: 100px;
            }

            h3 {
                color: $color2;
                font-size: $sizeh3;
                font-family: $font3;
                margin-bottom: 1rem;
            }

            button {
                color: $color2;
                font-size: $sizep;
                font-family: $font2;
                background-color: $color3;
                border: 1px solid $color2;
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
                width: 100px;
                padding: 1rem;
                height: 50px;

                #green {
                    width: 20px;
                    padding: 0;
                    margin: 0;
                }

                #white {
                    display: none;
                }

                &:hover {
                    color: $color3;
                    background-color: $color2;

                    #white {
                        display: block;
                        width: 20px;
                        padding: 0;
                        margin: 0;
                    }

                    #green {
                        display: none;
                    }
                }
            }


            div {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                margin: 0;

                div {
                    margin-left: 10px;
                }

                a {
                    width: 30px;
                    margin: 1rem 0.5rem;

                    img {
                        width: 30px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1200px) {
    #details {
        padding: 2rem 5rem;
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            #foto {
                width: 100%;
                margin: 0;
            }

            div {
                margin: 1rem;
            }
        }
    }
}
@media screen and (max-width: 600px) {
    #details {
        padding: 1rem;
        div {
            div {
                margin: 0;
            }
        }
    }
}
</style>