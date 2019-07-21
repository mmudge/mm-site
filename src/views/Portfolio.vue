<template>
  <div>
    <v-container class="portfolio-container">
      <h1 class="mt-5">Portfolio</h1>
      <v-divider class="mb-5"></v-divider>
      <v-layout class="mt-5" row wrap>
        <template v-for="project in portfolio">
          <v-flex pa-2 xs12 sm6 md3 :key="project.name">
            <PortfolioItem
              :name="project.name"
              :role="project.role"
              :description="project.description"
              :technology="project.technology"
              :img="project.src"
            />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem.vue";

export default {
  name: "Portfolio",
  components: {
    PortfolioItem
  },
  data() {
    return {
      portfolio: [
        {
          name: "first project",
          role: "developer",
          description: "asdf",
          technology: "js",
          src: require("../assets/hawaiisunrise.jpeg")
        },
        {
          name: "second project",
          role: "developer",
          description: "asdf",
          technology: "js",
          src: require("../assets/hawaiisunrise.jpeg")
        },
        {
          name: "third project",
          role: "developer",
          description: "asdf",
          technology: "js",
          src: require("../assets/hawaiisunrise.jpeg")
        },
        {
          name: "fourth project",
          role: "developer",
          description: "asdf",
          technology: "js",
          src: require("../assets/hawaiisunrise.jpeg")
        },
        {
          name: "fifth project",
          role: "developer",
          description: "asdf",
          technology: "js",
          src: require("../assets/hawaiisunrise.jpeg")
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.portfolio-container {
  h1 {
    color: #0d47a1;
    font-family: "Comfortaa", cursive;
    font-size: 62px;
    text-align: center;
  }
}
</style>
