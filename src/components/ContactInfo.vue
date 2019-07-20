<template>
  <div>
    <template v-for="contact in contactInfo">
      <div :key="contact.content" class="contact-flex">
        <v-icon :color="contact.color" style="font-size: 16px;" class="mr-3">{{ contact.icon }}</v-icon>
        <p class="mb-0">{{ contact.content }}</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  components: {},
  data() {
    return {
      contactInfo: [
        {
          content: "michaeltmudge@gmail.com",
          icon: "fas fa-at",
          color: "#2962ff"
        },
        { content: "+31 06 18506736", icon: "fas fa-phone", color: "#673ab7" },
        {
          content: "+1 (951) 323-1876",
          icon: "fas fa-phone",
          color: "#09FDD9"
        },
        {
          content: "Alphen aan den Rijn, Netherlands",
          icon: "fas fa-location-arrow",
          color: "#e53935"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.contact-flex {
  display: flex;
  align-items: center;
  justify-content: left;
  /* color: #212121; */
}
</style>
