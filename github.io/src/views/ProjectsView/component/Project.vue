<script setup>
defineProps({
  title: {
    type: String
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  image: {
    type: String
  },
  color: {
    type: String
  },
  background_color: {
    type: String
  }
})
</script>

<template>
  <div :style="'color: '+color+'; background-color:'+background_color">
    <h3>
      {{ title }}
    </h3>
    <img :src="image" alt="image" />
    <p>
      {{ description }}
    </p>
    <a :href="image" target="_blank">
      View Project
    </a>
  </div>
</template>

<script>
export default {
  name: "Project"
}
</script>

<style scoped>

</style>