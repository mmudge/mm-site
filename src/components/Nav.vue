<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="red darken-1" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in navDropItems">
          <v-list-tile :key="index">
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="red darken-2" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-btn dark flat to="/">
        <v-toolbar-title>{{ appName }}</v-toolbar-title>
      </v-btn>

      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn to="/" flat class="hidden-sm-and-down">CAST</v-btn>
        <v-btn to="/" flat class="hidden-sm-and-down">CONTACT</v-btn>
      </div>
    </v-toolbar>
  </span>
</template>

<style scoped>
.v-btn--active:before,
.v-btn:hover:before,
.v-btn:focus:before {
  background-color: transparent;
}
</style>

<script>
export default {
  name: "Nav",
  props: ["appName"],
  data() {
    return {
      drawer: false,
      navDropItems: [{ title: "Cast" }, { title: "Info" }, { title: "Contact" }]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
