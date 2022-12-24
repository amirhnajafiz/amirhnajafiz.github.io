<template>
  <div class="holder">
    <div class="image">
      <img
          src="https://avatars.githubusercontent.com/u/58415967?v=4"
          class="box"
          alt="user image"
      />
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
  background-color: #f58a07;
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

  color: #f7f5fb;
  font-size: 2em;
}

.bold {
  font-size: 3em;

  color: #282828;
}

.article {
  background-color: #f9ab55;

  color: #282828;

  text-align: justify;

  padding: 80px 80px;
}
</style>