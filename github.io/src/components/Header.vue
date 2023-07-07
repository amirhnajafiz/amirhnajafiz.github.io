<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink class="navigation-item" v-bind:class="{'navigation-item-select' : this.$route.name === 'home'}" to="/">
      Home
    </RouterLink>
    <RouterLink class="navigation-item" v-bind:class="{'navigation-item-select' : this.$route.name === 'blog'}" to="/blog">
      Blog
    </RouterLink>
  </div>
</template>
