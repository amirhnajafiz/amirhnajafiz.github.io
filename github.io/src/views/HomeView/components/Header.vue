<template>
  <div id="in-app-header" class="nav">
    <button v-on:click="scroll('#app-about-me')">
      About Me
    </button>
    <button>
      Career
    </button>
    <button>
      Skills
    </button>
    <button>
      Interests
    </button>
    <button>
      Contact Me
    </button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    scroll(id) {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
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

.nav button {
  display: inline-block;

  outline: none;
  color: #282828;

  border: 0 solid black;

  background-color: inherit;

  text-decoration: none;

  transition: 0.5s color;
}

.nav button:hover {
  color: #989898;
}
</style>