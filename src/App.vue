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
  background-color: #f0f0f0;
}
</style>
