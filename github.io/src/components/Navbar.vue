<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header">
    <div class="wrapper">
      <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/honors">Honors</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <a href="https://www.github.com">Github</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.header {
  max-height: 100vh;

  padding: 20px 0;

  width: 100%;
  margin-bottom: 40px;

  background-color: #282828;
  color: #f8f8f8;

  position: sticky;
  top: 0;
}

.nav {
  width: 100%;

  font-size: 14px;
}

.nav a {
  display: inline-block;

  padding: 0 3rem;

  outline: none;
  color: inherit;
}
</style>