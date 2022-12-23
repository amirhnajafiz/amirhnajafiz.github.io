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
              "no",
              "noting"
          ]
        },
        {
          title: "SRE",
          skills: [
              "hi",
              "something"
          ]
        },
        {
          title: "Backend",
          skills: [
              "hello"
          ]
        },
        {
          title: "Software",
          skills: [
              "dp",
              "algo",
              "ds"
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
  background-color: #00bd7e;

  padding: 50px;
  margin-bottom: 200px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  color: #2c3e50;
}

.box {
  border: 1px solid #f8f8f8;
  border-radius: 5px;
}

.header {
  font-size: 2rem;

  padding: 40px 60px;

  background-color: #f8f8f8;

  border-bottom: 1px solid #f8f8f8;
}

.item-holder {
  padding: 40px 60px;
}

.item {
  margin-bottom: 5px;
}
</style>