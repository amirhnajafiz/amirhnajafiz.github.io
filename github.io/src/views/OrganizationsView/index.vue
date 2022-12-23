<template>
  <div>
    <Organization
      v-for="organization in organizations"
      :title="organization.title"
      :address="organization.address"
      :image="organization.image"
      :description="organization.description"
    />
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

</style>