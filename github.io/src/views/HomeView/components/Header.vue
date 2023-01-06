<template>
  <div id="in-app-header" class="nav">
    <button v-on:click="scroll('#app-about-me')">
      About Me
    </button>
    <button v-on:click="scroll('#app-career')">
      Career
    </button>
    <button v-on:click="scroll('#app-skills')">
      Skills
    </button>
    <button v-on:click="scroll('#app-interests')">
      Interests
    </button>
    <button v-on:click="scroll('#app-contact-me')">
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
  background-color: #f7f5fb;
  height: 60px;
  padding: 20px 0;
  border-bottom: 1px solid #084887;
  position: sticky;
  top: 58px;
  z-index: 9999;
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
  color: #084887;
  border: 0 solid #084887;
  background-color: inherit;
  text-decoration: none;
  transition: 0.5s color;
  cursor: pointer;
}

.nav button:hover {
  color: #989898;
}
</style>