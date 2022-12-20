<template>
  <div id="in-app-header" class="nav">
    <a href="#">
      About Me
    </a>
    <a href="#">
      Career
    </a>
    <a href="#">
      Skills
    </a>
    <a href="#">
      Interests
    </a>
    <a href="#">
      Contact Me
    </a>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
.nav {
  width: 100%;
  margin-bottom: 30px;

  background-color: #ffffff;

  height: 60px;

  padding: 20px 0;

  border-bottom: 1px solid #282828;

  position: sticky;
  top: 58px;

  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  transition: 1s all;

  font-size: 14px;
}

.nav a {
  display: inline-block;

  outline: none;
  color: #282828;

  text-decoration: none;

  transition: 0.5s color;
}

.nav a:hover {
  color: #989898;
}
</style>