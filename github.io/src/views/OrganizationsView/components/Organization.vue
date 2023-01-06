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
    <a :href="address" target="_blank">
      <img :src="image" width="50" style="border-radius: 5px;" />
    </a>
    <div>
      <h3>
        {{ title }}
      </h3>
      <p style="font-size: 0.8em;">
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
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 70%;
  column-gap: 10px;
  border-radius: 5px;
}
</style>