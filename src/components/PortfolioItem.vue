<template>
  <v-card style="min-height: 750px; display: flex; flex-direction: column;">
    <div style="height: 300px;">
      <v-img aspect-ratio="2.75 " height="300px" :src="img"></v-img>
    </div>

    <v-card-text style="flex-grow: 1;">
      <div style="color: grey">{{role.toUpperCase() }}</div>
      <div class="my-3" style="color: #0d47a1; font-size: 28px; font-weight: bold;">{{name}}</div>

      <div style="font-size: 18px;" color="grey darken-3">"{{ description }}"</div>
    </v-card-text>

    <v-card-text style="flex-grow: 1;">
      <div class="title py-2" style="color: #0d47a1;">Skills Demonstrated:</div>
      <v-chip-group v-for="skill in skills" :key="skill.text">
        <Chip :text="skill.text" :color="skill.color" :icon="skill.icon" />
      </v-chip-group>
    </v-card-text>

    <v-card-actions style="flex-shrink: 1;">
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

<style scoped>
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
    return {};
  },
  mounted() {
    console.log("skills used prop", this.skills_used);
    console.log(this.skills);
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
