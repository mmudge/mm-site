<template>
  <v-layout>
    <v-flex class="mx-1">
      <v-card>
        <v-img :src="img" aspect-ratio="2.75 " height="300px">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox></v-flex>
            </v-layout>
          </v-container>
        </v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ name }}</h3>
            <v-subheader>{{ role }}</v-subheader>
          </div>
        </v-card-title>
        <v-card-text>{{ bio }}</v-card-text>

        <v-card-actions v-for="s in social">
          <v-btn flat>
            <v-icon color="blue darken-5">fab fa-facebook-f</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "CastCard",
  props: ["name", "img", "role", "bio", "social"]
};
</script>

<style>
</style>
