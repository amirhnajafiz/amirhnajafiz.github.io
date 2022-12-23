<template>
  <div>
    <div class="headline">
      Stories
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
import Story from "./components/Story";
export default {
  name: "StoryView",
  components: {Story},
  data() {
    return {
      stories: [
        {
          title: "title",
          description: "desc",
          link: "link"
        },
        {
          title: "title",
          description: "desc",
          link: "link"
        },
        {
          title: "title",
          description: "desc",
          link: "link"
        },
        {
          title: "title",
          description: "desc",
          link: "link"
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