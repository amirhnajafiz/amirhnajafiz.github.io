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
  <div
      v-on:mouseenter="over"
      v-on:mouseleave="out"
      class="outer"
  >
    <div
        :style="'background-color:' + main_color"
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
              :style="'background-color:' + color"
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
const base = "#ffffff"

export default {
  name: "Project",
  data() {
    return {
      main_color: base
    }
  },
  methods: {
    over() {
      this.main_color = this.$props.other
    },
    out() {
      this.main_color = base
    }
  }
}
</script>

<style scoped>
.outer {
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
}

.wrapper {
  padding: 10px 15px;

  border: 1px solid black;
  border-radius: 5px;
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