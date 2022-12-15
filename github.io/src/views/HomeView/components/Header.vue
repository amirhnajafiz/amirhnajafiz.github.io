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
  <button class="btn" v-on:click="toggleHeader">Click</button>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      open: true,
    }
  },
  methods: {
    toggleHeader() {
      let el = document.getElementById("in-app-header")

      if (this.open) {
        el.style.height = "0"
        el.style.padding = "0"
      } else {
        el.style.height = "60px"
        el.style.padding = "20px 0"
      }

      this.open = !this.open
    }
  }
}
</script>

<style scoped>
.nav {
  width: 100%;
  margin-bottom: 40px;

  height: 60px;

  padding: 20px 0;

  border-bottom: 1px solid #282828;

  position: sticky;
  top: 0;

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

.btn {
  position: relative;
  right: 10px;
  top: -40px;

  float: right;

  border: 0 solid black;
  outline: none;

  padding: 5px;
}
</style>