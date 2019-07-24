<template>
  <div class="about">
    <v-container class="about-container">
      <h1 class="mt-5">About me</h1>
      <v-divider class="mb-5"></v-divider>

      <v-layout align-center wrap class="mt-5 about-header">
        <v-flex class="py-5" xs12 md6>
          <div class="flex-center">
            <Avatar h="height: 250px;" w="width: 250px;" />
          </div>
          <div class="flex-center mt-2 hidden-sm-and-down">
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
      </v-layout>

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

      <v-dialog width="1600" height="900" v-model="dialog">
        <div>
          <Carousel />
        </div>
      </v-dialog>
    </v-container>
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



