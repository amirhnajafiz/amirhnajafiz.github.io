<script setup>
defineProps({
  title: {
    type: String
  },
  image: {
    type: String
  },
  address: {
    type: String
  },
  description: {
    type: String
  }
})
</script>

<template>
  <div class="wrapper">
    <div>
      {{ image }}
    </div>
    <div>
      <h3>
        {{ title }}
      </h3>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Organization"
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 30% 70%;
}
</style>