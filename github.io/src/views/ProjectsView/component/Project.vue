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
  <div class="outer">
    <div class="wrapper">
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
      <div
          :style="'color: '+color+'; background-color:'+background_color"
          class="image"
      >
        <div class="inner-image"></div>
      </div>
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

  border-top-right-radius: 125px;
  border-bottom-right-radius: 125px;
}

.inner-image {
  width: 250px;
  height: 250px;

  border-radius: 50%;

  float: right;

  background: #00bd7e;
}

.link {
  font-size: 0.7em;

  text-decoration-line: none;

  color: inherit;
}

.outer {
  width: 60%;

  margin: 80px auto;

  border: 1px solid black;
  padding: 5px;

  border-radius: 5px 130px 130px 5px;
}
</style>