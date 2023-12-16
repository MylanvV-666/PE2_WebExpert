<script>
export default {
    props: {
        product: Object
    }
}
</script>

<template>
    <router-link :to="'/Shop/' + product.ID">
        <div>
            <img :src="product.afbeelding" :alt="product.titel">
        </div>
        <h3>{{ product.titel }}</h3>
        <p>{{ product.omschrijving }}</p>
        <h3>Prijs: €{{ product.prijs.toFixed(2) }}</h3>
        <p>BTW: {{ product.BTW * 100 }}%</p>
        <p>Voorraad: {{ product.stock }}</p>
    </router-link>
</template>

<style>
</style>