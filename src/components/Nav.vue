<template>
  <div>
    <v-navigation-drawer app v-model="drawer" class="side-nav" disable-resize-watcher>
      <v-container class="card-container" fluid>
        <v-layout column justify-center class="card-layout">
          <template v-for="(item, index) in navDropItems">
            <v-card flat :to="item.link" :class="item.theme" class="nav-card" :key="index">
              <h1>{{item.title.toUpperCase()}}</h1>
            </v-card>
          </template>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
/* .side-nav {
  background-color: #212121;
} */

.card-container {
  height: 100%;
}

.card-layout {
  height: 100%;
}

.nav-card {
  height: 20vh;
  margin: 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.red-card {
  border: 2px solid #e53935;
  color: #e53935;
  background: transparent;
}

.purple-card {
  border: 2px solid #673ab7;
  color: #673ab7;
  background: transparent;
}

.blue-card {
  border: 2px solid #2962ff;
  color: #2962ff;
  background: transparent;
}
</style>

<script>
export default {
  name: "Nav",
  props: ["appName"],
  data() {
    return {
      drawer: true,
      navDropItems: [
        { title: "About me", link: "/about", theme: "red-card" },
        { title: "Portfolio", link: "/portfolio", theme: "purple-card" },
        { title: "Contact Info", link: "/contact", theme: "blue-card" }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
