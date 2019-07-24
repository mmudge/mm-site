<template>
  <div>
    <v-container class="portfolio-container">
      <h1 class="mt-5">Portfolio</h1>
      <v-divider class="mb-5"></v-divider>
      <v-layout class="mt-5" row wrap>
        <template v-for="project in portfolio">
          <v-flex pa-2 xs12 sm6 md4 lg4 :key="project.name">
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
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          technology: "js, Ruby, Ruby on Rails",
          src: require("../assets/hawaiisunrise.jpeg")
        },
        {
          name: "second project",
          role: "developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          technology: "js, Ruby, Ruby on Rails",
          src: require("../assets/hawaiisunrise.jpeg")
        },
        {
          name: "third project",
          role: "developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          technology: "js, Ruby, Ruby on Rails",
          src: require("../assets/hawaiisunrise.jpeg")
        },
        {
          name: "fourth project",
          role: "developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          technology: "js, Ruby, Ruby on Rails",
          src: require("../assets/hawaiisunrise.jpeg")
        },
        {
          name: "fifth project",
          role: "developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          technology: "js, Ruby, Ruby on Rails",
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
