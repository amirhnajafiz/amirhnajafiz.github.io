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
  background: {
    type: String
  }
})
</script>

<template>
  <div
      :style="'background-color:' + currentBackground + '; border-color:' + currentBorder + '; color:' + currentColor"
      v-on:mouseenter="over"
      v-on:mouseleave="out"
      class="outer"
  >
    <div
        :style="'background-color:' + currentBackground + '; border-color:' + currentBorder"
        class="wrapper"
    >
      <div class="headline">
        {{ title }}
      </div>
      <p class="text">
        {{ description }}
      </p>
      <div class="row">
        <div class="inner-row">
          <div>
            {{ language }}
          </div>
          <div
              class="circle"
              :style="'background-color:' + background"
          ></div>
        </div>
        <a
            class="link"
            :href="link"
            target="_blank">
          See project
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const baseBackground = "white"
const baseTextColor = "black"
const baseBorderColor = "black"

export default {
  name: "Project",
  data() {
    return {
      currentBackground: baseBackground,
      currentBorder: baseBorderColor,
      currentColor: baseTextColor
    }
  },
  methods: {
    over() {
      this.currentColor = this.$props.color
      this.currentBorder = this.$props.background
      this.currentBackground = this.$props.background
    },
    out() {
      this.currentBackground = baseBackground
      this.currentBorder = baseBorderColor
      this.currentColor = baseTextColor
    }
  }
}
</script>

<style scoped>
.outer {
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;

  transition: 0.5s all;
}

.wrapper {
  padding: 10px 15px;

  border: 1px solid black;
  border-radius: 5px;

  transition: 0.5s all;
}

.headline {
  font-size: 1.5em;
  margin-bottom: 15px;
}

.text {
  margin-bottom: 25px;
  text-align: justify;
}

.row {
  font-size: 0.7em;

  display: flex;
  justify-content: space-between;
}

.inner-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.circle {
  width: 16px;
  height: 16px;

  margin-left: 5px;

  border-radius: 50%;
}

.link {
  text-decoration-line: none;
  color: inherit;

  border-bottom: 0 solid black;
}

.link:hover {
  border-bottom-width: 1px;
}
</style>