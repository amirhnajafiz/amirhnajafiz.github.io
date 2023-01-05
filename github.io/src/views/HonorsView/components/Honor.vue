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
  <div class="wrapper">
    <h3 style="margin-bottom: 20px;">
      {{ name }}
    </h3>
    <p style="margin-bottom: 20px;">
      {{ description }}
    </p>
    <small class="little">
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