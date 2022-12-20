<template>
  <div class="slideshow">
    <button v-on:click="prevSlide">Prev</button>
    <div
        v-for="slide in slides"
        :class="index === slide.number ? 'active' : 'non-active'"
    >
      {{ slide.href }}
    </div>
    <button v-on:click="nextSlide">Next</button>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
  data() {
    return {
      index: 0,
      slides: [
        {
          number: 0,
          href: "12"
        },
        {
          number: 1,
          href: "13"
        },
        {
          number: 2,
          href: "14"
        }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.index++
      this.index = this.index % this.slides.length
    },
    prevSlide() {
      this.index--
      if (this.index === -1) {
        this.index = this.slides.length-1
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