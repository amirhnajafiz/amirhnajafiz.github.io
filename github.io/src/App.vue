<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"
import RoutesWithTransition from "./router/RoutesWithTransition.vue";
</script>

<template>
  <div>
    <Header class="navigation" />
    <RoutesWithTransition />
    <Footer class="footer" />
  </div>
</template>

<style scoped>
</style>
