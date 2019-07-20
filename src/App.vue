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
// @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
// @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
@import url("https://fonts.googleapis.com/css?family=Comfortaa&display=swap");
@import url("https://fonts.googleapis.com/css?family=Comfortaa|PT+Serif&display=swap");

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  // background-color: linear-gradient(90, #f0f0f0;
  // background-image: linear-gradient(90deg, #212121 90%, 90%, #f0f0f0 20%);
  // background-image: linear-gradient(180deg, #212121, 80%, #f0f0f0);
  // background-color: black;
  // background-color: #212121;
  // background-color: #f0f0f0;
  // font-family: "Raleway", sans-serif;
  // font-family: "Ubuntu", sans-serif;
  font-family: "PT Serif", serif;
  // color: #212121;
  color: #37474f;
}

a {
  text-decoration: none;
}

a:hover {
  font-weight: bolder;
}
</style>


