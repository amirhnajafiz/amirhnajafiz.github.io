<template>
  <div>
    <div class="headline">
      Medium Stories
    </div>
    <div>
      <Story
        v-for="story in stories"
        :title="story.title"
        :description="story.description"
        :link="story.link"
      />
    </div>
  </div>
</template>

<script>
import Story from "./components/Story.vue";

export default {
  name: "StoryView",
  components: {Story},
  data() {
    return {
      stories: [
        {
          title: "Traffic Shadowing of a Golang service with Gor",
          description: "In this project I’m going to give an example of how to use Gor in order to perform a HTTP Traffic Shadowing.",
          link: "https://medium.com/@amirhossein-najafizadeh/traffic-shadowing-golang-service-with-gor-90d99f6b8856?source=your_stories_page-------------------------------------"
        },
        {
          title: "Test-Containers in Golang (NATS)",
          description: "Test-containers in Go is a Go package that makes it simple to create and clean up container-based dependencies for automated…",
          link: "https://medium.com/@amirhossein-najafizadeh/test-containers-in-golang-nats-1e1c60e7823f?source=your_stories_page-------------------------------------"
        },
        {
          title: "Get our hands on QEMU",
          description: "What is QEMU? What is does? How to use? Why do we need QEMU? Where did it come from? Who build it?",
          link: "#"
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
</style>