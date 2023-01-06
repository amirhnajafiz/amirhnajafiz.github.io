<script setup>
import Project from "./component/Project.vue";
</script>

<template>
  <div>
    <div class="headline">
      Projects
    </div>
    <div class="holder">
      <Project
          v-for="project in projects"
          :title="project.title"
          :description="project.description"
          :link="project.link"
          :language="project.language"
          :color="project.color"
          :background="project.background"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      projects: [
        {
          title: "Stallion",
          description: "Creating my own message broker.",
          link: "https://github.com/official-stallion/stallion",
          language: "Go",
          color: "#ffffff",
          background: "#f75f54"
        },
        {
          title: "Captain Mustache",
          description: "Dockerizing Golang applications with mustache.",
          link: "https://github.com/amirhnajafiz/mustache",
          language: "Shell Script",
          color: "#000",
          background: "#a0f754"
        },
        {
          title: "QSSE",
          description: "Implementing SSE over QUIC protocol.",
          link: "https://github.com/snapp-incubator/qsse",
          language: "Go",
          color: "#ffffff",
          background: "#d8762e"
        },
        {
          title: "C Server-Client",
          description: "Implementing a server client with C.",
          link: "https://github.com/amirhnajafiz/c-server-client",
          language: "C programming language",
          color: "#ffffff",
          background: "#c0c0c0"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "black",
          background: "orange"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "gray"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "gray"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "gray"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "gray"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "gray"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "gray"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "gray"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "gray"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "gray"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "gray"
        }
      ]
    }
  }
}
</script>

<style scoped>
.headline {
  font-size: 5em;
  padding: 50px 200px;
}

.holder {
  width: 70%;

  margin: 80px auto;

  display: grid;
  grid-template-columns: auto auto auto;

  column-gap: 20px;
  row-gap: 20px;
}
</style>