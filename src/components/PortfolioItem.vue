<template>
  <v-card flat>
    <v-img :src="img" aspect-ratio="2.75 " height="300px">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox></v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <v-card-title primary-title>
      <h3 class="headline mb-0">{{ name }}</h3>
    </v-card-title>
    <v-subheader>{{ role }}</v-subheader>
    <v-card-text>
      <p class="px-3">{{ description }}</p>
    </v-card-text>
    <v-card-text>
      <p class="px-3">{{ technology }}</p>
    </v-card-text>

    <div class="flex-center">
      <v-card-actions>
        <v-btn flat fab>
          <v-icon>fa-heart</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped>
</style>

<script>
export default {
  name: "PortfolioItem",
  props: ["name", "role", "description", "technology", "img"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
