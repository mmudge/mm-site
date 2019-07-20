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
    return {};
  },
  computed: {
    contactInfo() {
      return this.$store.state.contactInfo;
    }
  }
};
</script>

//  #e53935;
//  #673ab7;
//  #2962ff;
// #09FDD9",
