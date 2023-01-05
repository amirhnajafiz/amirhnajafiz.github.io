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
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "red"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "blue"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "white",
          background: "green"
        },
        {
          title: "title",
          description: "des",
          link: "link",
          language: "image",
          color: "black",
          background: "gray"
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