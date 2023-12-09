<script>
import {defineComponent} from "vue";
import Product from "@/componenten/ProductCardComponent.vue";
import FooterComponent from "@/componenten/FooterComponent.vue";
import filters from "@/product.json"
import ProductCardComponent from "@/componenten/ProductCardComponent.vue";

export default defineComponent({
    components: {ProductCardComponent, FooterComponent, Product},
    post: {filters},
    data() {
        return {
            weirdness: filters.weirdness,
            bruikbaar: filters.bruikbaar,
            hidden: 'display: none',
            visibility: 'display: flex'
        }
    },
    methods: {
        boring() {
            let weird1 = this.weirdness;
            if (weird1 === "boring") {
                return this.product = this.visibility
            }
            else {
                return this.product = this.hidden
            }
        },
        fun() {
            let weird2 = this.weirdness;
            if (weird2 === "fun") {
                return this.product = this.visibility
            }
            else {
                return this.product = this.hidden
            }
        },
        weird() {
            let weird3 = this.weirdness;
            if (weird3 === "weird") {
                return this.product = this.visibility
            }
            else {
                return this.product = this.hidden
            }
        },
        crazy() {
            let weird4 = this.weirdness;
            if (weird4 === "crazy af") {
                return this.product = this.visibility
            }
            else {
                return this.product = this.hidden
            }
        },
        BJa() {
            let ja = this.weirdness;
            if (ja === "ja") {
                return this.product = this.visibility
            }
            else {
                return this.product = this.hidden
            }
        },
        BNee() {
            let nee = this.weirdness;
            if (nee === "nee") {
                return this.product = this.visibility
            }
            else {
                return this.product = this.hidden
            }
        },
    }
})
</script>

<template>
    <main id="overzicht">
        <section id="filters">
            <div>
                <p>weirdness</p>
                <div>
                    <button v-on:click="boring">boring</button>
                    <button v-on:click="fun">fun</button>
                    <button v-on:click="weird">weird</button>
                    <button v-on:click="crazy">crazy af</button>
                    <router-link to="/Shop">All</router-link>
                </div>
            </div>
            <div>
                <p>bruikbaar</p>
                <div>
                    <button v-on:click="BJa">ja</button>
                    <button v-on:click="BNee">nee</button>
                    <router-link to="/Shop">Beide</router-link>
                </div>
            </div>
        </section>
        <section id="producten">
                <div v-for="product in ProductCardComponent" :key="product.id">
                    <!-- Toon de productinformatie, bijvoorbeeld met ProductCardComponent -->
                    <ProductCardComponent :product="product" />
                </div>
        </section>
    </main>
    <FooterComponent></FooterComponent>
</template>

<style>
</style>