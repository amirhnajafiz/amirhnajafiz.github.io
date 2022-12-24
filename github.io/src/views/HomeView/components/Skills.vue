<template>
  <div class="container">
    <div
        class="box"
        v-for="topic in topics"
    >
      <div class="header">
        {{ topic.title }}
      </div>
      <ul class="item-holder" style="list-style-type: none;">
        <li
            class="item"
            v-for="skill in topic.skills"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      topics: [
        {
          title: "DevOps",
          skills: [
              "Linux",
              "Docker",
              "Kubernetes",
              "Helm Charts"
          ]
        },
        {
          title: "SRE",
          skills: [
              "CI/CD",
              "Grafana",
              "Prometheus"
          ]
        },
        {
          title: "Backend",
          skills: [
              "Golang",
              "Fiber",
              "Echo"
          ]
        },
        {
          title: "Software",
          skills: [
              "Microservice",
              "Monolithic",
              "Unit testing"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  background-color: #f9ab55;

  padding: 50px;
  margin-bottom: 200px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  color: #282828;
}

.box {
  border: 1px solid #f7f5fb;
  border-radius: 5px;
}

.header {
  font-size: 2rem;

  padding: 40px 60px;

  background-color: #f7f5fb;

  border-bottom: 1px solid #f7f5fb;
}

.item-holder {
  padding: 40px 60px;
}

.item {
  margin-bottom: 5px;
}
</style>