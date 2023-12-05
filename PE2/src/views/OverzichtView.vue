<script>
import {defineComponent} from "vue";
import Product from "@/componenten/ProductCardComponent.vue";

export default defineComponent({
    components: {Product}
})
</script>

<template>
    <main id="overzicht">
        <section id="filters">
            <div>
                <p>weirdness</p>
                <div>
                    <button>boring</button>
                    <button>fun</button>
                    <button>weird</button>
                    <button>crazy af</button>
                </div>
            </div>
            <div>
                <p>bruikbaar</p>
                <div>
                    <button>ja</button>
                    <button>nee</button>
                </div>
            </div>
        </section>
        <section id="producten">
            <Product></Product>
            <div id="nummers">
                <div>
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                </div>
            </div>
        </section>
    </main>
</template>

<style>
</style>