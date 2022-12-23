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
  background-color: #2c3e50;
  color: #00bd7e;

  padding: 50px 100px;
  margin-bottom: 200px;

  display: grid;
  grid-template-columns: auto auto auto auto;
  row-gap: 50px;
}
</style>