<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import RoutesWithTransition from "./router/RoutesWithTransition.vue";
</script>

<template>
  <div>
    <Navbar />
    <RoutesWithTransition />
    <Footer />
  </div>
</template>

<style scoped>
</style>
