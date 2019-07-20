<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
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

a:hover {
  font-weight: bolder;
}
</style>


