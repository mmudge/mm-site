<template>
  <div class="about">
    <v-container class="about-container">
      <h1 class="mt-5">About me</h1>
      <v-divider class="mb-5"></v-divider>

      <v-layout wrap>
        <v-flex xs12 sm4 md3>
          <v-layout justify-center>
            <v-card class width="100%" style="position: relative;">
              <v-sheet hidden-sm-and-down style="height: 200px; background-color: #0d47a1;"></v-sheet>

              <v-layout hidden-sm-and-down justify-center>
                <div style=" position: absolute; top: 75px;">
                  <Avatar h="height: 250px;" w="width: 250px;" />
                </div>
              </v-layout>
              <v-layout hidden-md-and-up justify-center>
                <div style="position: absolute; top: 75px;">
                  <Avatar h="height: 200px;" w="width: 200px;" />
                </div>
              </v-layout>

              <v-card-text style="margin-top: 125px;">
                <ContactInfo />
              </v-card-text>
              <v-card-actions>
                <Social :the_color="socialColor" class="mt-3 hidden-md-and-up" />
              </v-card-actions>
            </v-card>
          </v-layout>
        </v-flex>
        <!-- <v-layout align-center wrap class="mt-5 about-header">
        <v-flex class="py-5" xs12 md6>
          <div class="flex-center">
            <Avatar h="height: 250px;" w="width: 250px;" />
          </div>
          <div style="display: none" class="flex-center mt-2 hidden-sm-and-down">
            <v-btn color="blue darken-4" flat small outline @click="dialog = !dialog">View Photos</v-btn>
          </div>
        </v-flex>

        <v-flex class="py-2" xs12 md6>
          <h3>Contact Info</h3>
          <div class="flex-center my-3">
            <ContactInfo />
          </div>
          <Social :the_color="socialColor" class="mt-3 hidden-md-and-up" />
        </v-flex>
        </v-layout>-->
        <v-flex xs12 sm8 md9 class="pa-4">
          <div class="professional my-5">
            <h2 class="py-4">Professional</h2>
            <p class="about-text">
              Software development is a personal passion of mine. My focus is primarily on full stack web development, however all types of software development interest me.
              Building websites and web applications is something I thoroughly enjoy from start to finish, from creating a new project folder to deployment.
              I enjoy both the artistic and design side of the front end, as well as working with data and the more logical side of the back end.
              The challenge of constantly learning new things keeps as well as finding solutions to difficult problems keeps working with code very fun and exciting to me.
              That being said, work never feels like work to me but instead more like a passion hobby that I enjoy doing every day.
              The main technologies I use to build project are JavaScript (ES6+),
              Vue.js, and Ruby on Rails 5, skills which I initially learned in 2018 while attending
              <a
                class="red--text"
                href="https://www.lewagon.com/"
              >Le Wagon</a> Amsterdam and ever since I have continued developing both on the job and in my own free time.
            </p>

            <p class="about-text">
              I’m currently working as a software developer at
              <a
                class="blue--text"
                href="https://aeroscan.nl/"
              >AeroScan</a>, developing 3D real estate inspection software with drones.
              We are working with some of the biggest real estate companies in the Netherlands with the goal of making digital inspections a reality.
            </p>
            <p
              class="about-text"
            >I’m always open to new business opportunities. Please feel free to contact me if you would like to have more information.</p>
          </div>
          <div class="personal my-5">
            <h2 class="py-4">Personal</h2>
            <p class="about-text">
              I'm an American living in the Netherlands working as a software developer.
              I moved to the Netherlands in 2018 to be with my Dutch girlfriend.
              My hobbies are playing with computers, sports, cooking, reading, traveling, chess, fitness, and video games.
              I am currently learning to speak Dutch.
              <span
                style="display: none;"
                class="hidden-sm-and-down"
              >
                They say pictures are worth a thousand words, so here are some
                <a
                  class="mr-1 blue--text"
                  @click="dialog = !dialog"
                >pictures</a>
                of the highlights in my life the last few years.
              </span>
            </p>
          </div>
          <div class="skills my-5">
            <h2 class="py-4">Skills</h2>
            <v-layout wrap>
              <template v-for="chip in chips">
                <Chip :text="chip.text" :color="chip.color" :icon="chip.icon" :key="chip.text" />
              </template>
            </v-layout>
          </div>

          <div class="education my-5">
            <h2 class="py-4">Education</h2>
            <v-layout wrap>
              <template v-for="chip in education">
                <Chip :text="chip.text" :color="chip.color" :icon="chip.icon" :key="chip.text" />
              </template>
            </v-layout>
          </div>

          <div class="work my-5 hidden-sm-and-down">
            <h2 class="py-4">Work</h2>

            <a href="https://github.com/mmudge" target="_blank">
              <img src="http://ghchart.rshah.org/mmudge" alt="mmudge's Github chart" />
            </a>
          </div>
        </v-flex>

        <v-dialog width="1600" height="900" v-model="dialog">
          <div>
            <Carousel />
          </div>
        </v-dialog>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Avatar from "../components/Avatar.vue";
import Social from "../components/Social.vue";
import ContactInfo from "../components/ContactInfo.vue";
import Chip from "../components/Chip.vue";
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Avatar,
    Social,
    ContactInfo,
    Chip,
    Carousel
  },
  data() {
    return {
      dialog: false,
      education: [
        {
          text: "University of Arizona",
          color: "red darken-2",
          icon: "fas fa-graduation-cap"
        },
        {
          text: "Le Wagon Coding Bootcamp",
          color: "red darken-1",
          icon: "fas fa-code"
        }
      ]
    };
  },
  computed: {
    socialColor() {
      return "blue darken-4";
    },
    chips() {
      return this.$store.state.skill_chips;
    }
  }
};
</script>

<style lang="scss">
.about-container {
  h1 {
    color: #0d47a1;
    font-family: "Comfortaa", cursive;
    font-size: 62px;
    text-align: center;
  }

  h3 {
    color: #0d47a1;
    font-family: "Comfortaa", cursive;
    font-size: 24px;
    text-align: center;
  }
}

.about-header {
  button {
    font-family: "Comfortaa", cursive;
  }
}

.about {
  .professional,
  .skills,
  .personal,
  .education,
  .work {
    h2 {
      color: #0d47a1;
      font-size: 36px;
      font-family: "Comfortaa", cursive;
    }

    .about-text {
      font-size: 16px;
    }
  }
}

.about-carousel {
  width: 1600px;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>



