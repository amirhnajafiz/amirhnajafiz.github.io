<template>
  <div class="holder">
    <div class="image">
      <img
          src="https://avatars.githubusercontent.com/u/58415967?v=4"
          class="box"
          alt="user image"
      />
      <div class="text">
        <span class="bold">A</span>mir <span class="bold">H</span>ossein
      </div>
    </div>
    <div class="article">
      I'm a 21 years old Computer Engineer studying at the Amirkabir University of Tehran, Iran. My university
      fields are Computer Networks and Software Engineering. At the moment I am doing researches in Software
      Security, Fast Networks, and Virtualization.<br />
      I also work as a full time Back-end Developer at Snapp! company. I start working in Snapp in December 2021.
      But before that I used to teach computer basics and introduction to C and C++ at Iranian Cyber. I was also
      mentor for Web Developing.<br />
      I started my career as a Full Stack developer by learning Vue.js and PHP/Laravel.
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped>
.holder {
  display: grid;
  grid-template-columns: 40% 60%;
  margin-top: 120px;
  margin-bottom: 200px;
}

.image {
  background-color: #f58a07;
  height: 350px;
}

.box {
  position: relative;
  top: 50px;
  left: 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #181818;
}

.text {
  position: relative;
  left: 50%;
  color: #f7f5fb;
  font-size: 2em;
}

.bold {
  font-size: 3em;
  color: #282828;
}

.article {
  background-color: #f9ab55;
  color: #282828;
  text-align: justify;
  padding: 80px 80px;
}
</style>