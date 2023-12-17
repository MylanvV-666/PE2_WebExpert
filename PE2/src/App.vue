<script>
export default {
    mounted() {
        this.$store.commit('updateCartFromLocalStorage')
    }
}
</script>

<template>
    <div id="body">
        <nav>
        <router-link to="/"><img src="./assets/logo.png" alt="logo"/></router-link>
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/Shop">Shop</router-link>
            <router-link to="/Cart" id="cart"><img src="./assets/shopping-cart-green.png" alt="cart"></router-link>
            <router-link to="/Login" id="login"><button>Login</button></router-link>
        </div>
        </nav>
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
