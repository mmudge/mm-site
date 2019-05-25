import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cast: [
      {
        name: "David Mudge",
        img: require("@/assets/d-headshot.jpg"),
        role: "Actor & Producer",
        bio:
          "Professional actor and part time pro surfer. I enjoy making movies and long walks on the beach.",
        social: {
          fb: "facebook.come/davidmudge",
          insta: "instagram.com/themudgeman"
        }
      },
      {
        name: "Hayden T",
        img: require("@/assets/d-headshot.jpg"),
        role: "Actor",
        bio:
          "Professional actor and part time pro surfer. I enjoy making movies and long walks on the beach.",
        social: {
          fb: "facebook.come/davidmudge",
          insta: "instagram.com/themudgeman"
        }
      },
      {
        name: "Conner K",
        img: require("@/assets/d-headshot.jpg"),
        role: "Actor",
        bio:
          "Professional actor and part time pro surfer. I enjoy making movies and long walks on the beach.",
        social: {
          fb: "facebook.come/davidmudge",
          insta: "instagram.com/themudgeman"
        }
      },
      {
        name: "Richard Z",
        img: require("@/assets/d-headshot.jpg"),
        role: "Director",
        bio:
          "Professional actor and part time pro surfer. I enjoy making movies and long walks on the beach.",
        social: {
          fb: "facebook.come/davidmudge",
          insta: "instagram.com/themudgeman"
        }
      }
    ]
  },
  mutations: {},
  actions: {}
});
