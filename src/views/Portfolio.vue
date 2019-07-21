<template>
  <div>
    <v-container>
      <h1 class="mt-5">Portfolio</h1>
      <v-divider class="mb-5"></v-divider>
      <v-layout class="mt-5" offset-sm3 row wrap>
        <template v-for="project in portfolio">
          <v-flex xs12 sm6 md3 :key="project.name">
            <PortfolioItem
              :name="project.name"
              :role="project.role"
              :description="project.description"
              :technology="project.technology"
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
          technology: "js"
        },
        {
          name: "second project",
          role: "developer",
          description: "asdf",
          technology: "js"
        },
        {
          name: "third project",
          role: "developer",
          description: "asdf",
          technology: "js"
        },
        {
          name: "fourth project",
          role: "developer",
          description: "asdf",
          technology: "js"
        },
        {
          name: "fifth project",
          role: "developer",
          description: "asdf",
          technology: "js"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style>
</style>
