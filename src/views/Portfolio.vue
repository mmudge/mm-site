<template>
  <div>
    <v-container class="portfolio-container">
      <h1 class="mt-5">Portfolio</h1>
      <v-divider class="mb-5"></v-divider>
      <v-layout class="mt-5" row wrap>
        <template v-for="project in portfolio">
          <v-flex pa-2 xs12 sm6 md4 lg4 :key="project.name">
            <PortfolioItem
              :name="project.name"
              :role="project.role"
              :description="project.description"
              :skills_used="project.skills_used"
              :img="project.src"
              :text="project.text"
              :github_link="project.link"
              :link="project.link"
              :youtube_link="project.youtube_link"
            />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem.vue";

export default {
  name: "Portfolio",
  components: {
    PortfolioItem
  },
  data() {
    return {
      portfolio: [
        {
          name: "Shelf Up!",
          role: "Full Stack Developer",
          description: "Product selling platform for the small producer!",
          skills_used: [
            "javascript",
            "rails",
            "ruby",
            "html",
            "css",
            "git",
            "github",
            "heroku",
            "sql",
            "postgres",
            "figma",
            "mvc",
            "scrum"
          ],
          src: require("../assets/shelfup.png"),
          text:
            "This was my final project that my team and I created in my full stack coding bootcamp. Three other students and I created this in just 9 days, and presented it in front of a live audience and received great feed back. I had so much fun implementing my coding skills to a real app, and I can honestly say that this is where my interest in coding transformed into a passion. If you are interested please take a minute to view the live presentation and fast forward to minute 5:25.",
          github_link: "https://github.com/maximefontana/shelf-up",
          link: "http://www.shelfup.club/",
          youtube_link:
            "https://www.youtube.com/watch?v=-wDku8DzgmY&feature=youtu.be"
        },
        {
          name: "Easy Finance",
          role: "Front End Developer",
          description: "Manage your income and expenses!",
          skills_used: ["javascript", "html", "css", "git", "github", "heroku"],
          src: require("../assets/finance.jpg"),
          text:
            "This is an app I created to manage my personal finances. It simply keeps track of incomes, expenses, and percentage of expenses relative to how much total money you have. I had a lot of fun working on this project.",
          github_link: "https://github.com/mmudge/budget-app",
          link: "https://mmudge.github.io/budget-app/",
          youtube_link: null
        },
        {
          name: "Profile",
          role: "Front End Developer",
          description: "Web design and deployment of my profile page.",
          skills_used: ["html", "css", "git", "github"],
          src: require("../assets/profilepic.jpg"),
          text:
            "In this project I made a personal profile page for myself, which includes both professional and fun personal information.",
          github_link: "https://github.com/mmudge/profile",
          link: "https://mmudge.github.io/profile/#",
          youtube_link: null
        },
        {
          name: "Food Delivery",
          role: "Developer",
          description: "A console based food delivery app.",
          skills_used: ["ruby", "mvc", "git", "github"],
          src: require("../assets/burger.jpg"),
          text:
            "This is an app for I made which can manage a food delivery service. The apps functionality includes adding customers orders, assigning them to delivery men, and managing undelivered orders. Please check out the code and try the app for yourself. If you want to log in as a manager the username is paul and the password is secret, and if you want to log in as a manager the username is john and password is secret.",
          github_link: "https://github.com/mmudge/food-delivery",
          link: null,
          youtube_link: null
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.portfolio-container {
  h1 {
    color: #0d47a1;
    font-family: "Comfortaa", cursive;
    font-size: 62px;
    text-align: center;
  }
}
</style>
