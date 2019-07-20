<template>
  <div class="social-links">
    <template v-for="s in socialLinks">
      <v-btn icon :href="s.link" :key="s.icon">
        <v-icon :color="the_color">{{s.icon}}</v-icon>
      </v-btn>
    </template>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: ["the_color"],
  data() {
    return {
      socialLinks: [
        {
          icon: "fab fa-linkedin-in",
          // color: "#09FDD9",
          link: "https://www.linkedin.com/in/michaeltmudge/"
        },
        {
          icon: "fab fa-github",
          // color: "#673ab7",
          link: "https://github.com/mmudge"
        },
        {
          icon: "fab fa-gitlab",
          // color: "#2962ff",
          link: "https://gitlab.com/mmudge"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.social-links {
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
}
</style>
