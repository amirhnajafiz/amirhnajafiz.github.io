<template>
  <div>
    <h1 :class="index === 0 ? 'active' : 'non-active'">
      Slide 1
    </h1>
    <h1 :class="index === 1 ? 'active' : 'non-active'">
      Slide 2
    </h1>
    <h1 :class="index === 2 ? 'active' : 'non-active'">
      Slide 3
    </h1>
    <h1 :class="index === 3 ? 'active' : 'non-active'">
      Slide 4
    </h1>
    <button v-on:click="prevSlide">Prev</button>
    <button v-on:click="nextSlide">Next</button>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
  data() {
    return {
      index: 0,
    }
  },
  methods: {
    nextSlide() {
      this.index++
      this.index = this.index % 4
    },
    prevSlide() {
      this.index--
      if (this.index === -1) {
        this.index = 3
      }
    }
  }
}
</script>

<style scoped>
.active {
  display: block;
}

.non-active {
  display: none;
}
</style>