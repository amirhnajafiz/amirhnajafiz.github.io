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
  <div
      class="wrapper"
  >
    <div
        class="description"
        :style="'color: '+color+'; background-color:'+background_color"
    >
      <h3 style="margin-bottom: 20px;">
        {{ title }}
      </h3>
      <p style="margin: 50px 10px;">
        {{ description }}
      </p>
      <a class="link" :href="image" target="_blank">
        View Project
      </a>
    </div>
    <div class="image">
      <img :src="image" alt="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Project"
}
</script>

<style scoped>
.wrapper {
  width: 70%;

  margin: 80px auto;

  display: grid;
  grid-template-columns: auto 300px;
}

.description {
  padding: 25px 40px 50px;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  height: 250px;
}

.image {
  width: 300px;
  height: 250px;

  background: #00bd7e;
  border-top-right-radius: 125px;
  border-bottom-right-radius: 125px;
}

.link {
  font-size: 0.7em;

  text-decoration-line: none;

  color: inherit;
}
</style>