<template>
  <div class="holder">
    <div class="image">
      <div class="box">
      </div>
      <div class="text">
        <span class="bold">A</span>mir <span class="bold">H</span>ossein
      </div>
    </div>
    <div class="article">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  grid-template-columns: 40% 60%;

  margin-top: 120px;
  margin-bottom: 200px;
}

.image {
  background-color: #00bd7e;
  height: 350px;
}

.box {
  position: relative;

  top: 50px;
  left: 100px;

  width: 200px;
  height: 200px;

  border-radius: 50%;
  background-color: #181818;
}

.text {
  position: relative;

  left: 50%;

  color: #2c3e50;
  font-size: 2em;
}

.bold {
  font-size: 3em;
}

.article {
  background-color: #2c3e50;

  color: #f8f8f8;

  text-align: justify;

  padding: 80px 80px;
}
</style>