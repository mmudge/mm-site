<template>
  <v-container>
    <v-layout>
      <v-flex class="display-2 text-xs-center my-5">Cast and Crew</v-flex>
    </v-layout>
    <v-layout xs12 sm6 md3 offset-sm3>
      <template v-for="c in cast">
        <CastCard
          :name="c.name"
          :img="c.img"
          :role="c.role"
          :bio="c.bio"
          :social="c.social"
          :key="c.name"
        />
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import CastCard from "./CastCard";
export default {
  name: "Cast",
  components: {
    CastCard
  },
  data() {
    return {
      cast: []
    };
  },
  methods: {
    getCast() {
      this.cast = this.$store.state.cast;
      console.log(this.cast);
    }
  },
  mounted() {
    this.getCast();
  }
};
</script>

<style>
</style>
