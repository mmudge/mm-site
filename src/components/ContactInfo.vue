<template>
  <div>
    <template v-for="contact in contactInfo">
      <div :key="contact.content" class="contact-flex py-2">
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
          icon: "far fa-envelope",
          color: "light-blue darken-1"
        },
        {
          content: "+31 06 18506736",
          icon: "fas fa-phone",
          color: "indigo darken-4"
        },
        {
          content: "+1 (951) 323-1876",
          icon: "fas fa-phone",
          color: "blue darken-2"
        },
        {
          content: "The Netherlands",
          icon: "fas fa-location-arrow",
          color: "red darken-1"
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
  font-size: 16px;
}
</style>
