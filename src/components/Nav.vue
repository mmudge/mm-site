<!-- <template>
  <div>
    <div class="navbar">
      <div class="nav-link" @click="goTo()">
        <Avatar h="height: 40px;" w="width: 40px;" />
      </div>
      <template v-for="nav in navItems">
        <div
          class="nav-link nav-words"
          @click="goTo(nav.link)"
          :key="nav.title"
        >{{ nav.title.toUpperCase() }}</div>
      </template>
      <Social />
    </div>
  </div>
</template> -->


<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="blue darken-2" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in navItems">
          <v-list-tile :to="item.link" :key="index">
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="blue darken-2" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-btn dark flat to="/">
        <v-toolbar-title>Michael Mudge</v-toolbar-title>
      </v-btn>

      <v-spacer></v-spacer>
      <div v-for="(item, index) in navItems" :key="index" class="hidden-sm-and-down">
        <v-btn :to="item.link" flat class="hidden-sm-and-down">{{ item.title }}</v-btn>
      </div>
    </v-toolbar>
  </span>
</template>






<style style="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
}

.nav-link {
  margin: 0px 30px;
}

.nav-words {
  font-size: 18px;
}
.nav-link:hover {
  cursor: pointer;
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
  computed: {},
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goTo(route) {
      if (!route) {
        this.goHome();
      } else {
        this.$router.push(`${route}`);
      }
    },
    clicked() {
      console.log("clicked");
    }
  }
};
</script>

<style scoped>
</style>
