<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: Date
  }
})
</script>

<template>
  <div>
    <h3>
      {{ name }}
    </h3>
    <p>
      {{ description }}
    </p>
    <small>
      {{ date }}
    </small>
  </div>
</template>

<script>
export default {
  name: "Honor"
}
</script>

<style scoped>

</style>