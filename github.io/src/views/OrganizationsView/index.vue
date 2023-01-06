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
          address: "link",
          image: "image"
        },
        {
          title: "Daralfonoon",
          description: "CEIT / AUT Daralfonoon",
          address: "link",
          image: "image"
        },
        {
          title: "ICPC",
          description: "Amirkabir ACM",
          address: "link",
          image: "image"
        },
        {
          title: "Linuxfest",
          description: "CEIT Linux festival",
          address: "link",
          image: "image"
        },
        {
          title: "CEIT-AUT",
          description: "My university projects.",
          address: "link",
          image: "image"
        },
        {
          title: "SNAPP Incubator",
          description: "Growing snapp-cab open source projects.",
          address: "https://github.com/snapp-incubator",
          image: "https://avatars.githubusercontent.com/u/89763510?s=200&v=4"
        },
        {
          title: "org 1",
          description: "des",
          address: "link",
          image: "image"
        },
        {
          title: "org 1",
          description: "des",
          address: "link",
          image: "image"
        },
        {
          title: "org 1",
          description: "des",
          address: "link",
          image: "image"
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
  row-gap: 80px;
  margin: 80px 0;
}

.headline {
  font-size: 5em;
  padding: 50px 200px;
}
</style>