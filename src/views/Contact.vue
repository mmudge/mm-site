<template>
  <div>
    <Nav />
    <v-container class="flex-center" style="height: 100vh;">
      <div>
        <template v-for="contact in contactInfo">
          <div :key="contact.content" class="contact-flex ma-5">
            <v-icon :color="contact.color" style="font-size: 32px;" class="mr-5">{{ contact.icon }}</v-icon>
            <p class="mb-0 contact-text">{{ contact.content }}</p>
          </div>
        </template>
        <div class="flex-center">
          <Social />
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.contact-flex {
  display: flex;
  align-items: center;
  justify-content: left;
  color: #212121;
  font-size: 32px;
}
</style>
<script>
import Social from "../components/Social.vue";
import Nav from "../components/Nav.vue";

export default {
  name: "Contact",
  components: {
    Social,
    Nav
  },
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
  }
};
</script>

//  #e53935;
//  #673ab7;
//  #2962ff;
// #09FDD9",
