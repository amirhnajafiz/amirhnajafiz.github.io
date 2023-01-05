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
  width: 50%;

  margin: 0 auto;

  display: grid;
  grid-template-columns: 30% 70%;

  border-radius: 5px;
}
</style>