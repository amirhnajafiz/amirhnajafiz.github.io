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
          title: "JetStream Mirroring",
          description: "Mirror jet-stream clusters with benthos.",
          link: "https://github.com/amirhnajafiz/jetstream-mirroring",
          language: "Go",
          color: "#ffffff",
          background: "#fea5a5"
        },
        {
          title: "Debezium Charts",
          description: "Creating helm charts for Debezium cluster.",
          link: "https://github.com/snapp-incubator/debezium-chart",
          language: "Smarty",
          color: "#000",
          background: "#ffd97a"
        },
        {
          title: "Explorer",
          description: "Parse every JSON object in Golang.",
          link: "https://github.com/amirhnajafiz/explorer",
          language: "Go",
          color: "#000",
          background: "#4dfff3"
        },
        {
          title: "Pyramid",
          description: "Fast generic heap structure in Golang.",
          link: "https://github.com/amirhnajafiz/pyramid",
          language: "Go",
          color: "#000",
          background: "#8b4dff"
        },
        {
          title: "Gitgle",
          description: "Github users search engine.",
          link: "https://github.com/amirhnajafiz/gitgle",
          language: "JavaScript",
          color: "#000",
          background: "#fff48c"
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