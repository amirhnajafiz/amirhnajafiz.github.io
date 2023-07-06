<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink class="navigation-item" to="/">
      Home
    </RouterLink>
    <RouterLink class="navigation-item" to="/blog">
      Blog
    </RouterLink>
    <RouterLink class="navigation-item" to="/contact">
      Contact
    </RouterLink>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>