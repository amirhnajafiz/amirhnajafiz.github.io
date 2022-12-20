<template>
  <div class="holder">
    <div class="image">

    </div>
    <div class="article">

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped>
.holder {
  display: grid;
  grid-template-columns: auto auto;

  margin-top: 120px;
  margin-bottom: 80px;
}

.image {
  background-color: #00bd7e;
  height: 300px;
}

.article {
  background-color: #2c3e50;
  height: 300px;
}
</style>