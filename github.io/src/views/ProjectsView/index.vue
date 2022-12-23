<script setup>
import Project from "./component/Project.vue";
</script>

<template>
  <div>
    <div class="headline">
      Projects
    </div>
    <Project
      v-for="project in projects"
      :title="project.title"
      :description="project.description"
      :link="project.link"
      :language="project.language"
      :color="project.color"
      :background_color="project.background_color"
    />
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
          color: "black",
          background_color: "gray"
        },
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
</style>