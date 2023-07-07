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
                  title: "Kubernetes Cron-jobs (Python)",
                  context: "A CronJob creates Jobs on a repeating schedule. CronJob is meant for performing regular scheduled actions such as backups, report…",
                  link: "https://medium.com/@amirhossein-najafizadeh/kubernetes-cron-jobs-python-6167135d5d8f"
                },
                {
                  id: 2,
                  title: "Test-Containers in Golang (NATS)",
                  context: "Test-containers in Go is a Go package that makes it simple to create and clean up container-based dependencies for automated…",
                  link: "https://medium.com/@amirhossein-najafizadeh/test-containers-in-golang-nats-1e1c60e7823f"
                },
                {
                  id: 3,
                  title: "Traffic Shadowing of a Golang service with Gor",
                  context: "In this project I’m going to give an example of how to use Gor in order to perform a HTTP Traffic Shadowing.",
                  link: "https://medium.com/@amirhossein-najafizadeh/traffic-shadowing-golang-service-with-gor-90d99f6b8856"
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
  width: 45%;
  box-shadow: 0 0 15px rgba(255, 197, 131, 0.5);
}
</style>
