<template>
  <div class="wrapper">
    <div v-for="interest in interests">
      <h1>
        {{ interest.title }}
      </h1>
      <p>
        {{ interest.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Interests",
  data() {
    return {
      interests: [
        {
          title: "title",
          description: "des"
        },
        {
          title: "title",
          description: "des"
        },
        {
          title: "title",
          description: "des"
        },
        {
          title: "title",
          description: "des"
        },
        {
          title: "title",
          description: "des"
        }
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
</style>