<template>
  <div class="wrapper">
    <div v-for="interest in interests">
      <h2 style="margin-bottom: 10px;">
        {{ interest.title }}
      </h2>
      <p style="text-align: justify;">
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
          title: "Computer Networks",
          description: "Everything about computers communications and system networks."
        },
        {
          title: "DevOps",
          description: "Automatic development operations."
        },
        {
          title: "Internet of Things",
          description: "All these real life smart things."
        },
        {
          title: "Data Security",
          description: "Encryption techniques and Hashing mechanisms."
        }
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #084887;
  color: #f7f5fb;
  padding: 50px 100px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  row-gap: 50px;
  column-gap: 70px;
}
</style>