<template>
  <div class="about">
    <Nav />
    <v-container class="about-container">
      <div class="flex-center">
        <h1>About me</h1>
      </div>
      <v-layout row class="mt-5" wrap>
        <v-flex>
          <div class="about-leftside px-5">
            <Avatar h="height: 250px;" w="width: 250px;" />
            <div class="flex-center mt-5">
              <v-btn color="blue darken-4" flat outline @click="dialog = !dialog">View Photos</v-btn>
            </div>
            <Social :the_color="socialColor" class="mt-3" />
            <ContactInfo class="mt-3" />
          </div>
        </v-flex>
        <v-flex>
          <div class="professional">
            <h1>Professional</h1>
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
          <div class="personal mt-5">
            <h1>Personal</h1>
            <p class="about-text">
              I'm an American living in the Netherlands working as a software developer.
              I moved to the Netherlands in 2018 to be with my Dutch girlfriend.
              My hobbies are playing with computers, sports, cooking, reading, traveling, chess, fitness, and video games.
              I am currently learning to speak Dutch.
              They say pictures are worth a thousand words, so here are some
              <a
                class="mr-1 blue--text"
                @click="dialog = !dialog"
              >pictures</a>of the highlights in my life the last few years.
            </p>
          </div>
          <div class="skills mt-5">
            <h1>Skills</h1>
            <v-layout wrap>
              <template v-for="chip in chips">
                <Chip :text="chip.text" :color="chip.color" :icon="chip.icon" :key="chip.text" />
              </template>
            </v-layout>
          </div>

          <div class="education mt-5">
            <h1>Education</h1>
            <v-layout wrap>
              <template v-for="chip in education">
                <Chip :text="chip.text" :color="chip.color" :icon="chip.icon" :key="chip.text" />
              </template>
            </v-layout>
          </div>

          <!-- <div class="work mt-5">
            <h1>Work</h1>
            <div class="flex-center">
              <a href="https://github.com/mmudge" target="_blank">
                <img src="http://ghchart.rshah.org/mmudge" alt="mmudge's Github chart" />
              </a>
            </div>
          </div>-->
        </v-flex>
      </v-layout>

      <!-- <v-layout justify-center>
        <div>
          <h3>Github</h3>
          <a href="https://github.com/mmudge" target="_blank">
            <img src="http://ghchart.rshah.org/mmudge" alt="mmudge's Github chart" />
          </a>
        </div>
      </v-layout>-->
      <v-dialog width="1600" height="900" v-model="dialog">
        <div>
          <Carousel />
        </div>
      </v-dialog>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Avatar from "../components/Avatar.vue";
import Social from "../components/Social.vue";
import ContactInfo from "../components/ContactInfo.vue";
import Chip from "../components/Chip.vue";
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Avatar,
    Social,
    ContactInfo,
    Chip,
    Carousel,
    Footer
  },
  data() {
    return {
      dialog: false,
      chips: [
        {
          text: "JavaScript",
          color: "amber lighten-1",
          icon: "fab fa-js-square"
        },
        { text: "Ruby on Rails", color: "pink darken-1", icon: "fas fa-code" },
        { text: "Ruby", color: "pink darken-2", icon: "fas fa-code" },
        { text: "Vue.js", color: "green darken-1", icon: "fab fa-vuejs" },
        { text: "HTML5", color: "orange darken-4", icon: "fab fa-html5" },
        { text: "CSS3", color: "blue darken-3", icon: "fab fa-css3-alt" },
        {
          text: "SPA's and Web Components",
          color: "blue-grey darken-1",
          icon: "fas fa-code"
        },
        {
          text: "git",
          color: "deep-orange darken-4",
          icon: "fab fa-git-square"
        },
        { text: "GitHub", color: "grey darken-3", icon: "fab fa-github" },
        {
          text: "GitLab",
          color: "deep-purple darken-4",
          icon: "fab fa-gitlab"
        },
        {
          text: "SQL & Database Management",
          color: "blue darken-2",
          icon: "fas fa-database"
        },
        {
          text: "Postgresql",
          color: "indigo darken-4",
          icon: "fas fa-database"
        },
        { text: "Heroku", color: "deep-purple lighten-2", icon: "fas fa-code" },
        { text: "Figma", color: "yellow darken-3", icon: "fab fa-figma" },
        { text: "Sketch", color: "orange darken-2", icon: "fab fa-sketch" },
        { text: "AWS S3", color: "light-blue darken-1", icon: "fab fa-aws" },
        {
          text: "MVC Design Pattern",
          color: "deep-purple",
          icon: "fas fa-code"
        },
        {
          text: "Scrum & Agile work flows",
          color: "deep-orange accent-2",
          icon: "fas fa-code"
        }
      ],
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
    }
  }
};
</script>

<style lang="scss">
.about-container {
  margin-top: 100px;

  h1 {
    color: #0d47a1;
    font-family: "Comfortaa", cursive;
    font-size: 62px;
  }
}

.about-leftside {
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
    h1 {
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



