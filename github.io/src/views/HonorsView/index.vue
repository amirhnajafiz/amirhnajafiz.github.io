<script setup>
import Honor from "./components/Honor.vue";
</script>

<template>
  <div>
    <div class="headline">
      Honors
    </div>
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
          name: "Secretary of the 13th edition of the Linux Festival",
          description: "Secretary and organizer of the 13th Amirkabir University of Technology Linux Festival, April 2022.",
          date:"2022 April"
        },
        {
          name: "2021 ACPC/ACM Staff",
          description: "I was a part of the main staff in 2021 ICPC event in the Amirkabir University of Tehran, also known as ACPC.\n" +
              "Had a great experience in holding such a big event with more than 200 teams participating. \n" +
              "Special thanks to all of the other people who helped us to hold this event.",
          date: "2021 November"
        },
        {
          name: "Top student of Maktab Sharif summer intern",
          description: "I finished my summer intern at Maktab Sharif PHP/Laravel bootcamp as the top student.",
          date: "2021 December"
        }
      ],
    }
  },
}
</script>

<style scoped>
.headline {
  font-size: 5em;
  padding: 50px 200px;
}
</style>