<template>
  <div>
    <div class="headline">
      Organizations
    </div>
    <div class="holder">
      <Organization
          v-for="organization in organizations"
          :title="organization.title"
          :address="organization.address"
          :image="organization.image"
          :description="organization.description"
      />
    </div>
  </div>
</template>

<script>
import Organization from "./components/Organization.vue";

export default {
  name: "OrganizationsView",
  components: {Organization},
  data() {
    return {
      organizations: [
        {
          title: "Stallion",
          description: "Official Stallion message broker.",
          address: "https://github.com/official-stallion",
          image: "https://avatars.githubusercontent.com/u/113413625?s=200&v=4"
        },
        {
          title: "Daralfonoon",
          description: "CEIT / AUT Daralfonoon",
          address: "https://github.com/aut-daralfonoon",
          image: "https://avatars.githubusercontent.com/u/108024152?s=200&v=4"
        },
        {
          title: "ICPC",
          description: "Amirkabir ACM",
          address: "https://github.com/aut-icpc",
          image: "https://avatars.githubusercontent.com/u/50195977?s=200&v=4"
        },
        {
          title: "Linuxfest",
          description: "CEIT Linux festival",
          address: "https://github.com/linuxfestival",
          image: "https://avatars.githubusercontent.com/u/60551690?s=200&v=4"
        },
        {
          title: "CEIT-AUT",
          description: "My university projects.",
          address: "https://github.com/ceit-aut",
          image: "https://avatars.githubusercontent.com/u/110529164?s=200&v=4"
        },
        {
          title: "SNAPP Incubator",
          description: "Growing snapp-cab open source projects.",
          address: "https://github.com/snapp-incubator",
          image: "https://avatars.githubusercontent.com/u/89763510?s=200&v=4"
        }
      ]
    }
  }
}
</script>

<style scoped>
.holder {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 0 150px;
  column-gap: 20px;
  row-gap: 120px;
  margin: 120px 0;
}

.headline {
  font-size: 5em;
  padding: 50px 200px;
}
</style>