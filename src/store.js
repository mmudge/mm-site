import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skill_chips: {
      javascript: {
        text: "JavaScript",
        color: "amber lighten-1",
        icon: "fab fa-js-square"
      },
      vue: { text: "Vue.js", color: "green darken-1", icon: "fab fa-vuejs" },
      vuetify: {
        text: "Vuetify",
        color: "blue darken-1",
        icon: "fab fa-vuejs"
      },
      html: { text: "HTML5", color: "orange darken-4", icon: "fab fa-html5" },
      css: { text: "CSS3", color: "blue darken-3", icon: "fab fa-css3-alt" },
      rails: {
        text: "Ruby on Rails",
        color: "pink darken-1",
        icon: "fas fa-code"
      },
      ruby: { text: "Ruby", color: "pink darken-2", icon: "fas fa-code" },
      rspec: { text: "RSpec", color: "pink darken-3", icon: "fas fa-code" },
      git: {
        text: "git",
        color: "deep-orange darken-4",
        icon: "fab fa-git-square"
      },
      github: { text: "GitHub", color: "grey darken-3", icon: "fab fa-github" },
      gitlab: {
        text: "GitLab",
        color: "deep-purple darken-4",
        icon: "fab fa-gitlab"
      },
      sql: {
        text: "SQL & Database Management",
        color: "blue darken-2",
        icon: "fas fa-database"
      },
      postgres: {
        text: "Postgresql",
        color: "indigo darken-4",
        icon: "fas fa-database"
      },
      heroku: { text: "Heroku", color: "deep-purple lighten-2", icon: "fas fa-code" },
      figma: { text: "Figma", color: "yellow darken-3", icon: "fab fa-figma" },
      sketch: { text: "Sketch", color: "orange darken-2", icon: "fab fa-sketch" },
      aws: { text: "AWS S3", color: "light-blue darken-1", icon: "fab fa-aws" },
      mvc: {
        text: "MVC Design Pattern",
        color: "deep-purple",
        icon: "fas fa-code"
      },
      scrum: {
        text: "Scrum & Agile work flows",
        color: "deep-orange accent-2",
        icon: "fas fa-code"
      }
    }
  },
  mutations: {},
  actions: {}
});
