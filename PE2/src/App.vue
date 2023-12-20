<script>
export default {
    mounted() {
        this.$store.commit('updateCartFromLocalStorage')
    }
}
</script>

<template>
    <div id="body">
        <router-view></router-view>
    </div>
</template>

<style>
#body {
    background-image: url("./src/assets/home.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
