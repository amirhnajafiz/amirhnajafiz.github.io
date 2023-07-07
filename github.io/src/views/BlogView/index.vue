<script setup>
import Blog from './components/Blog.vue';
</script>

<template>
  <div class="holder">
    <h2 style="margin-bottom: 20px;">
      Blogs page
    </h2>
    <p>
      Read my blogs and stories on Medium. These blogs are related to my work experince at Amirkabir University,
      Snapp!, Snappline!, and any other place that I worked in the past.
    </p>
    <div class="blog-holder">
      <Blog
        class="blog-item"
        v-for="item in blogs"
        v-bind:title="item.title"
        v-bind:description="item.context"
        v-bind:link="item.link"
        v-bind:key="item.id"
      />
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [
                {
                  id: 1,
                  title: "test 1",
                  context: "context 1",
                  link: "http://address"
                },
                {
                  id: 2,
                  title: "test 1",
                  context: "context 1",
                  link: "http://address"
                },
                {
                  id: 3,
                  title: "test 1",
                  context: "context 1",
                  link: "http://address"
                },
                {
                  id: 3,
                  title: "test 1",
                  context: "context 1",
                  link: "http://address"
                },
                {
                  id: 3,
                  title: "test 1",
                  context: "context 1",
                  link: "http://address"
                }
            ]
        };
    },
    components: { Blog }
}
</script>

<style>
.blog-holder {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 60px;
}

.blog-item {
  padding: 20px 25px;
  border: 2px solid rgb(255, 197, 131);
  border-radius: 4px;
  width: 30%;
  box-shadow: 0 0 15px rgba(255, 197, 131, 0.5);
}
</style>
