<template>
  <div class="holder">
    <img src="https://digitalgopi.com/wp-content/uploads/2021/01/lets-connect.png" class="image" alt="contact me" />
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

  background-color: #084887;
  color: #f7f5fb;
  min-height: 200px;
}

.image {
  background-color: #f9ab55;

  margin: 0 auto;
  min-height: 200px;
  max-width: 100%;
}

.row {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
}
</style>