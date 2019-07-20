<template>
  <v-container fluid class="footer-container flex-center pa-5">
    <div>
      <p>Michael Mudge Copyright {{ year }}, all rights reserved.</p>
      <Social :the_color="socialColor" />
    </div>
  </v-container>
</template>

<style style="scss" scoped>
</style>

<script>
import Social from "./Social.vue";

export default {
  name: "Footer",

  components: {
    Social
  },
  data() {
    return {};
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
    socialColor() {
      return "blue darken-4";
    }
  },
  methods: {}
};
</script>

<style scoped>
.footer-container {
  background-color: transparent;
  height: 300px;
}
</style>
