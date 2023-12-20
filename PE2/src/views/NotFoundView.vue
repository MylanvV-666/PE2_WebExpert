<script>
import {defineComponent} from "vue";
import HeaderComponent from "@/componenten/HeaderComponent.vue";
import FooterComponent from "@/componenten/FooterComponent.vue";

export default defineComponent({
    components: {FooterComponent, HeaderComponent}
})
</script>

<template>
    <HeaderComponent/>
    <main id="notfound">
        <img src="../assets/logo.png" alt="logo">
        <h1>404</h1>
        <h2>Pagina niet gevonden</h2>
    </main>
  <FooterComponent/>
</template>

<style lang="scss">
#notfound {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  justify-content: center;

  img {
    max-width: 250px;
  }

  h1 {
    color: #29503c;
    font-size: 50px;
    font-family: "Major Mono Display", monospace;
    text-align: center;
    padding: 50px 0 20px 0;
  }
  h2 {
    color: #29503c;
    font-size: 45px;
    font-family: "Tilt Neon", sans-serif;
    text-align: center;
  }
}
</style>