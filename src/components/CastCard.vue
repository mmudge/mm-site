<template>
  <v-layout>
    <v-flex class="mx-1">
      <v-card>
        <v-img :src="img" aspect-ratio="2.75 " height="300px">
          <!-- <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox></v-flex>
            </v-layout>
          </v-container>-->
        </v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ name }}</h3>
            <v-subheader>{{ role }}</v-subheader>
          </div>
        </v-card-title>
        <v-card-text>
          <p class="px-3">{{ bio }}</p>
        </v-card-text>

        <div class="flex-center">
          <v-card-actions v-for="s in socialLinks" :key="s.icon">
            <v-btn flat fab>
              <v-icon :color="s.color">{{ s.icon }}</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.flex-center {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>

<script>
export default {
  name: "CastCard",
  props: ["name", "img", "role", "bio", "social"],
  data() {
    return {
      socialLinks: [
        { icon: "fab fa-facebook-f", color: "blue" },
        { icon: "fab fa-instagram", color: "pink" },
        { icon: "fab fa-linkedin-in", color: "blue" },
        { icon: "fab fa-twitter", color: "blue" }
      ]
    };
  }
};
</script>

<style>
</style>
