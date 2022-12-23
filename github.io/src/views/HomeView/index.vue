<script setup>
import Header from "./components/Header.vue";
import Slideshow from "./components/Slideshow.vue";
import AboutMe from "./components/AboutMe.vue";
import Career from "./components/Career.vue";
import Skills from "./components/Skills.vue";
import Interests from "./components/Interests.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
  <div>
    <Header />
    <Slideshow />
    <AboutMe id="app-about-me" />
    <Career id="app-career" />
    <Skills id="app-skills" />
    <Interests id="app-interests" />
    <Contact id="app-contact-me" />
  </div>
</template>