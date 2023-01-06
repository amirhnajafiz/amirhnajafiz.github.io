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
  <div class="wrapper">
    <h3 style="margin-bottom: 20px;">
      {{ title }}
    </h3>
    <p style="margin-bottom: 20px;">
      {{ description }}
    </p>
    <a :href="link" target="_blank" class="little">
      Link
    </a>
  </div>
</template>

<script>
export default {
  name: "Story"
}
</script>

<style scoped>
.wrapper {
  width: 72%;

  margin: 80px auto 100px;

  padding-top: 20px;

  border-top: 1px solid #dadada;
}

.wrapper:first-child{
  border-top: 0;
}

.little {
  font-size: 0.7em;
  float: right;
}
</style>