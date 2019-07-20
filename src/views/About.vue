<template>
  <div class="about">
    <Nav />
    <v-container class="about-container">
      <v-layout row>
        <v-flex>
          <div class="about-leftside px-5">
            <Avatar h="height: 250px;" w="width: 250px;" />
            <Social />

            <ContactInfo />
          </div>
        </v-flex>
        <v-flex>
          <h1>A little bit about me...</h1>
          <p>
            Software development is a personal passion of mine. My focus is primarily on full stack web development, however all types of software development interest me.
            Building websites and web applications is something I thoroughly enjoy from start to finish, from creating a new project folder to deployment.
            I enjoy both the artistic and design side of the front end, as well as working with data and the more logical side of the back end.
            The challenge of constantly learning new things keeps as well as finding solutions to difficult problems keeps working with code very fun and exciting to me.
            That being said, work never feels like work to me but instead more like a passion hobby that I enjoy doing every day.
            The main technologies I use to build project are JavaScript (ES6+),
            Vue.js, and Ruby on Rails 5, skills which I initially learned in 2018 while attending Le Wagon Amsterdam and ever since I have continued developing both on the job and in my own free time.
          </p>
          <p>I’m always open to new business opportunities. Please feel free to contact me if you would like to have more information.</p>
        </v-flex>
      </v-layout>

      <v-layout justify-center>
        <div>
          <h3>Github</h3>
          <a href="https://github.com/mmudge" target="_blank">
            <img src="http://ghchart.rshah.org/mmudge" alt="mmudge's Github chart" />
          </a>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Avatar from "../components/Avatar.vue";
import Social from "../components/Social.vue";
import ContactInfo from "../components/ContactInfo.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Avatar,
    Social,
    ContactInfo
  },
  data() {
    return {};
  },
  computed: {
    contactInfo() {
      return this.$store.state.contactInfo;
    }
  }
};
</script>

<style lang="scss">
.about-container {
  margin-top: 20vh;
}
</style>
