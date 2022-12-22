<template>
  <div class="holder">
    <div class="image">
      Nice image
    </div>
    <div class="text">
      <div class="row">
        <div>
          LinkedIn
        </div>
        <div>
          Email
        </div>
        <div>
          Company Mail
        </div>
      </div>
      <div class="row">
        <div>
          Github
        </div>
        <div>
          Medium
        </div>
        <div>
          Stackoverflow
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.holder {
  display: grid;
  grid-template-columns: 40% 60%;

  margin-bottom: 80px;
}

.text {
  display: flex;
  flex-direction: column;

  justify-content: center;

  background-color: #2c3e50;
  min-height: 200px;
}

.image {
  background-color: #00bd7e;
  min-height: 200px;
}

.row {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
}
</style>