<script>
import {defineComponent} from "vue";
import HeaderComponent from "@/componenten/HeaderComponent.vue";
import Footer from "@/componenten/FooterComponent.vue";
import PopularProducts from "@/componenten/PopularProductsComponent.vue";

export default defineComponent({
    components: {PopularProducts, Footer, HeaderComponent}
})

</script>

<template>
    <HeaderComponent/>
    <header>
        <div>
            <h1>Random shop</h1>
            <h2>De shop waar rare objecten die je nooit zal gebruiken verkocht worden.<br>Maar die je stiekem wel wil
                hebben.
            </h2>
        </div>
    </header>
    <div id="home">
        <h3>Hot stuff</h3>
        <div>
            <PopularProducts></PopularProducts>
            <router-link to="/Shop">Meer producten >>></router-link>
        </div>
    </div>
    <Footer></Footer>
</template>

<style>
</style>