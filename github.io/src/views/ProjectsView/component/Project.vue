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
</template>

<script>
export default {
  name: "Project"
}
</script>

<style scoped>
.wrapper {
  width: 100%;
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
}
</style>