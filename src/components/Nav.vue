<template>
  <span class="main-nav">
    <v-navigation-drawer app v-model="drawer" class="blue darken-4" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in navItems">
          <v-list-tile :to="item.link" :key="index">
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="blue darken-4" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-btn dark flat to="/">
        <v-icon class="ml-3">fas fa-space-shuttle</v-icon>
        <v-toolbar-title>Michael Mudge</v-toolbar-title>
      </v-btn>

      <v-spacer></v-spacer>
      <div v-for="(item, index) in navItems" :key="index" class="hidden-sm-and-down">
        <v-btn :to="item.link" flat class="hidden-sm-and-down">{{ item.title }}</v-btn>
      </div>
      <Social :the_color="red" />
    </v-toolbar>
  </span>
</template>

<style style="scss" scoped>
.main-nav {
  font-family: "Comfortaa", cursive;
}
</style>

<script>
import Avatar from "./Avatar.vue";
import Social from "./Social.vue";

export default {
  name: "Nav",
  props: ["appName"],
  components: {
    Avatar,
    Social
  },
  data() {
    return {
      drawer: false,
      avatarSize: "height: 20px; width 20px;",
      navItems: [
        { title: "About me", link: "/about" },
        { title: "Portfolio", link: "/portfolio" },
        { title: "Contact", link: "/contact" }
      ]
    };
  },
  computed: {
    socialColor() {
      return "white";
    }
  }
};
</script>

<style scoped>
</style>
