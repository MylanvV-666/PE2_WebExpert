<script>
import {defineComponent} from "vue";
import {useRouter} from "vue-router";
import cardItemCardforCheckout from "@/componenten/CardItemCardforCheckout.vue";
import cardSummaryPaymentCardforCheckout from "@/componenten/CardSummaryPaymentCardforCheckout.vue";
import footerComponent from "@/componenten/FooterComponent.vue";
import NotFound from "@/views/NotFoundView.vue";
import CardSummaryPaymentCard from "@/componenten/CardSummaryPaymentCard.vue";
import CardItemCard from "@/componenten/CardItemCard.vue";
import HeaderComponent from "@/componenten/HeaderComponent.vue";

export default defineComponent({
    setup() {
        const router = useRouter();
        const handleSubmit = () => {
            router.replace('/Gelukt');
        }
        return {
            handleSubmit
        }
    },
    data() {
        return {
            facturatieToevoegen: false
        };
    },
    computed: {
        product() {
            return this.$store.getters.cartItems
        }
    },
    components: {
        HeaderComponent,
        CardItemCard, CardSummaryPaymentCard,
        footerComponent, cardSummaryPaymentCardforCheckout, cardItemCardforCheckout, NotFound
    },
    methods: {
        toevoegen() {
            this.facturatieToevoegen = !this.facturatieToevoegen;
        },
        afrekenen() {
            this.$store.commit('decreasestock');
        }
    }
});
</script>

<template>
    <HeaderComponent/>
    <main id="checkout">
        <div id="checkout-producten">
            <div id="producten">
                <h1>Jouw Winkelkar</h1>
                <cardItemCardforCheckout
                    v-for="product in product"
                    :key="product.ID"
                    :product="product"
                />
            </div>
            <div id="betalen">
                <cardSummaryPaymentCardforCheckout/>
            </div>
        </div>
        <div id="checkout-gegevens">
            <h1>Gegevens</h1>
            <form id="basis-gegevens" @submit.prevent="handleSubmit">
                <fieldset id="gegevenscard">
                    <br>
                    <input type="text" name="voornaam" id="voornaam" placeholder="voornaam *" required>
                    <input type="text" name="achternaam" id="achternaam" placeholder="achternaam *" required>
                    <br>
                    <input type="email" name="email" id="email" placeholder="email *" required>
                    <br>
                    <input type="tel" name="gsm" id="gsm" placeholder="gsm nummer *" required>
                    <br>
                    <input type="text" name="Bankrekeningnummer" id="bankrekeningnummer" placeholder="Bankrekeningnummer *" required>
                    <br>
                    <label>lever adres:</label>
                    <br>
                    <input type="text" name="straat" id="straat" placeholder="straat *" required>
                    <input type="number" name="nummer" id="nummer" placeholder="nummer *" required>
                    <input type="number" name="bus" id="bus" placeholder="bus">
                    <br>
                    <input type="text" name="gemeente/stad" id="gemeente_stad" placeholder="gemeente/stad *" required>
                    <input type="number" name="postcode" id="postcode" placeholder="postcode *" required>
                </fieldset>
                <fieldset>
                    <input type="checkbox" id="check" @click="toevoegen">
                    <label for="check">facturatie adres toevoegen</label>
                </fieldset>
                <fieldset id="facturatie"  v-if="facturatieToevoegen">
                    <label>Facturatie adres:</label>
                    <div>
                        <input type="text" name="Facturatiestraat" id="fstraat" placeholder="straat *">
                        <input type="number" name="Facturatienummer" id="fnummer" placeholder="nummer *">
                        <input type="number" name="Facturatiebus" id="fbus" placeholder="bus">
                    </div>
                    <div>
                        <input type="text" name="Facturatiegemeente/stad" id="fgemeente_stad" placeholder="gemeente/stad *">
                        <input type="number" name="Facturatiepostcode" id="fpostcode" placeholder="postcode *">
                    </div>
                </fieldset>
                <button type="submit" @click="afrekenen">Betalen</button>
            </form>
        </div>
    </main>
    <footerComponent />
</template>

<style lang="scss">
//mixins
@mixin input() {
    color: #29503c;
    font-family: "Red Hat Display", sans-serif;
    font-size: 20px;
    border: 1px solid #1a3328;
    border-radius: 5px;
    background-color: #fff;
    height: 30px;
    padding-left: 10px;

    &:hover {
        background-color: #fcfeef;
    }
}
#checkout {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 800px;

    #checkout-producten {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
        #producten {
            h1 {
                color: #29503c;
                font-size: 50px;
                font-family: "Major Mono Display", monospace;
                text-align: center;
            }
        }
    }
    #checkout-gegevens {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;

        h1 {
            color: #29503c;
            font-size: 50px;
            font-family: "Major Mono Display", monospace;
            text-align: center;
        }

        #basis-gegevens {
            background-color: white;
            display: flex;
            flex-direction: column;
            width: 100%;

            button {
                color: #ffffff;
                font-family: "Red Hat Display", sans-serif;
                font-size: 20px;
                border-radius: 5px;
                background-color: #29503c;
                height: 40px;
                padding-left: 10px;
                width: 50%;
                align-self: center;

                &:hover {
                    background-color: #fcfeef;
                    border: 1px solid #1a3328;
                    color: #1a3328;
                }
            }

            fieldset {
                padding-left: 10px;
                border: none;

                label {
                    color: #29503c;
                    font-family: "Red Hat Display", sans-serif;
                    font-size: 20px;
                    padding-left: 10px;
                }
            }

            #gegevenscard {
                #voornaam, #achternaam, #gemeente_stad, #postcode {
                    @include input;
                    width: 47%;
                    margin: 10px;
                }
                #email, #gsm, #bankrekeningnummer {
                    @include input;
                    width: 96.5%;
                    margin: 10px;
                }
                #straat, #nummer, #bus {
                    @include input;
                    width: 30.5%;
                    margin: 10px;
                }
                label {
                    color: #29503c;
                    font-family: "Red Hat Display", sans-serif;
                    font-size: 25px;
                    padding-left: 10px;
                }
            }
            #facturatie {
                display: none;
                flex-direction: column;

                #fgemeente_stad, #fpostcode {
                    @include input;
                    width: 47%;
                    margin: 10px;
                }
                #fstraat, #fnummer, #fbus {
                    @include input;
                    width: 30.5%;
                    margin: 10px;
                }
                label {
                    color: #29503c;
                    font-family: "Red Hat Display", sans-serif;
                    font-size: 25px;
                    padding-left: 10px;
                }
            }
        }
    }
}
</style>