<template>
  <v-app>
    <Nav v-if="!homeRoute()" />
    <v-content>
      <router-view />
    </v-content>
    <Footer v-if="!homeRoute()" />
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer
  },
  data() {
    return {};
  },
  methods: {
    homeRoute() {
      return this.$router.currentRoute.name === "home";
    }
  },
  mounted() {
    console.log(this.currentRoute);
  },
  computed: {
    // homeRoute() {
    //   this.$router.currentRoute.name != "home";
    // }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Comfortaa|PT+Serif&display=swap");

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: "PT Serif", serif;
  color: #37474f;
}

a {
  text-decoration: none;
}
</style>


