<template>
  <v-card @mouseover="mousingOver()" @mouseleave="mousingOff()" style="min-height: 725px;">
    <div style="height: 300px;">
      <v-img aspect-ratio="2.75 " height="300px" :src="img"></v-img>
    </div>

    <div v-if="hover" class="portfolio-text flex-center">
      <p style="font-size: 22px; max-height: 600px; overflow-y: scroll;" class="pa-5">{{ text }}</p>
    </div>

    <v-card-text style="height: 175px;">
      <div style="color: grey">{{role.toUpperCase() }}</div>
      <div class="my-3" style="color: #0d47a1; font-size: 28px; font-weight: bold;">{{name}}</div>

      <div style="font-size: 18px;" color="grey darken-3">"{{ description }}"</div>
    </v-card-text>

    <v-card-text style="max-height: 175px; overflow-y: scroll;">
      <div class="title py-2" style="color: #0d47a1;">Skills used:</div>
      <v-chip-group v-for="skill in skills" :key="skill.text">
        <Chip :text="skill.text" :color="skill.color" :icon="skill.icon" />
      </v-chip-group>
    </v-card-text>

    <v-card-actions style="z-index: 1000; position: absolute; bottom: 10px; right: 15px;">
      <v-spacer></v-spacer>
      <v-btn v-if="github_link" :href="github_link" flat fab>
        <v-icon>fab fa-github</v-icon>
      </v-btn>
      <v-btn v-if="link" :href="link" flat fab>
        <v-icon color="blue">fas fa-link</v-icon>
      </v-btn>
      <v-btn v-if="youtube_link" :href="youtube_link" flat fab>
        <v-icon color="red">fab fa-youtube</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
.portfolio-text {
  color: white;
  background-color: #0d47a1;
  position: absolute;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  p {
    position: relative;

    transition: botton 1s ease-in-out;
  }

  &:hover {
    opacity: 0.9;
  }
}
</style>

<script>
import Chip from "./Chip.vue";

export default {
  name: "PortfolioItem",
  props: [
    "name",
    "role",
    "description",
    "skills_used",
    "img",
    "text",
    "github_link",
    "link",
    "youtube_link"
  ],
  components: {
    Chip
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {
    mousingOver() {
      this.hover = true;
    },
    mousingOff() {
      this.hover = false;
    }
  },

  computed: {
    skills() {
      let skills = [];

      this.skills_used.forEach(skill => {
        skills.push(this.$store.state.skill_chips[skill]);
      });

      return skills;
    }
  }
};
</script>

<style>
</style>
