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
  language: {
    type: String
  },
  color: {
    type: String
  },
  other: {
    type: String
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="headline">
      {{ title }}
    </div>
    <p class="text">
      {{ description }}
    </p>
    <div class="row">
      <div>
        {{ language }}
      </div>
      <div
          class="circle"
          :style="'background-color:' + color"
      ></div>
      <a  class="link" :href="link" target="_blank">
        See project
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project"
}
</script>

<style scoped>
.row {
  font-size: 0.7em;
}

.link {

  text-decoration-line: none;

  color: inherit;
}
</style>