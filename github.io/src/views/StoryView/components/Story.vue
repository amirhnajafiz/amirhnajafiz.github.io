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
  }
})
</script>

<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <p>
      {{ description }}
    </p>
    <small>
      {{ link }}
    </small>
  </div>
</template>

<script>
export default {
  name: "Story"
}
</script>

<style scoped>

</style>