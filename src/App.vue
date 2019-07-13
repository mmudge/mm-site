<template>
  <v-app>
    <Nav :appName="appName" />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
  },
  data() {
    return {
      appName: "Michael Mudge | Web Developer"
    };
  }
};
</script>

<style lang="scss">
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  // background-color: #e0e0e0;
  // background-color: black;
  // background-color: #212121;
}
</style>
