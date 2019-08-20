<template>
  <div class="about">
    <v-container class="about-container">
      <h1 class="mt-5">About me</h1>
      <v-divider class="mb-5"></v-divider>

      <v-layout class="about-layout">
        <div class="pa-2 mx-auto">
          <v-card class="mx-5 about-card" width="300" style>
            <v-sheet style="height: 200px; background-color: #0d47a1;"></v-sheet>

            <v-layout justify-center style="position: relative;">
              <div style="position: absolute; top: -125px;">
                <Avatar h="height: 250px;" w="width: 250px;" />
              </div>
            </v-layout>

            <v-card-text style="margin-top: 125px;" class="pa-4">
              <ContactInfo />
            </v-card-text>
            <v-layout justify-center>
              <v-card-actions>
                <Social :the_color="socialColor" class="my-3" />
              </v-card-actions>
            </v-layout>
          </v-card>
        </div>

        <v-flex class="pa-2">
          <div class="professional mb-5">
            <h2 class="py-4">Professional</h2>
            <p class="about-text">
              Software development is a personal passion of mine. My focus is primarily on full stack web development.
              Building websites and web applications is something I thoroughly enjoy from start to finish, from creating a new project to deployment.
              I enjoy working with data on the back end, and bringing that data to life on the front end.
              The challenge of constantly learning new things keeps as well as finding solutions to difficult problems keeps working with code very fun and exciting.
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
              >AeroScan</a>, developing 3D real estate inspection software.
              We are working with some of the biggest real estate companies in the Netherlands with the goal of making digital inspections a reality.
            </p>
            <p
              class="about-text"
            >I’m always open to new business opportunities. Please feel free to contact me if you would like to have more information.</p>
          </div>

          <div class="skills my-5">
            <h2 class="py-4">Skills</h2>
            <v-layout wrap>
              <template v-for="chip in chips">
                <Chip :text="chip.text" :color="chip.color" :icon="chip.icon" :key="chip.text" />
              </template>
            </v-layout>
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

          <div class="education my-5">
            <h2 class="py-4">Education</h2>
            <v-layout wrap>
              <template v-for="chip in edu_chips">
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
      dialog: false
    };
  },
  computed: {
    socialColor() {
      return "blue darken-4";
    },
    chips() {
      return this.$store.state.skill_chips;
    },
    edu_chips() {
      return this.$store.state.edu_chips;
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

@media (max-width: 720px) {
  .about-layout {
    flex-wrap: wrap;

    > div {
      .mx-5 {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    }
  }
}

.about-card {
  position: sticky;
  top: 125px;
}

.v-sheet {
  position: sticky;
}

@media (max-width: 500px) {
  .about-card {
    position: static;
    top: 0;
  }

  .v-sheet {
    position: relative;
  }
}
</style>



