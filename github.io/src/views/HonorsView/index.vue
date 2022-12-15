<script setup>
import Honor from "./components/Honor.vue";
</script>

<template>
  <div>
    <h1>
      Honors
    </h1>
    <Honor
        v-for="h in honors"
        :name="h.name"
        :description="h.description"
        :date="h.date"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      honors: [
        {
          name: "Honor 1",
          description: "Empty",
          date: new Date()
        },
        {
          name: "Honor 2",
          description: "Empty",
          date: new Date()
        },
        {
          name: "Honor 3",
          description: "Empty",
          date: new Date()
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>