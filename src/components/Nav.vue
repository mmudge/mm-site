<template>
  <div>
    <div id="side-nav">
      <v-container class="card-container" fluid>
        <v-layout column justify-center class="card-layout">
          <template v-for="(item, index) in navDropItems">
            <v-card flat :to="item.link" :class="item.theme" class="nav-card" :key="index">
              <h1>{{item.title.toUpperCase()}}</h1>
            </v-card>
          </template>
          <div class="flex-center">
            <template v-for="s in socialLinks" class="social-links">
              <v-btn icon :href="s.link" :key="s.icon">
                <v-icon :color="s.color">{{s.icon}}</v-icon>
              </v-btn>
            </template>
          </div>
          <!-- <a href="https://github.com/mmudge"><%= fa_icon "github" %></a>
        <a href="https://www.instagram.com/m_mudge/"><%= fa_icon "instagram" %></a>
        <a href="https://twitter.com/mike84733340"><%= fa_icon "twitter" %></a>
          <a href="https://www.linkedin.com/in/michaeltmudge/"><%= fa_icon "linkedin" %></a>-->
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<style style="scss" scoped>
#side-nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 450px;
  z-index: 100;
  background: transparent;
}

.card-container {
  height: 100%;
}

.card-layout {
  height: 100%;
}

.nav-card {
  height: 20vh;
  margin: 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 35px;
  /* text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3); */
}

.red-card {
  border: 2px solid #e53935;
  color: #e53935;
  background: transparent;
}

.red-card:hover {
  border: 4px solid #e53935;
}

.purple-card {
  border: 2px solid #673ab7;
  color: #673ab7;
  background: transparent;
}

.purple-card:hover {
  border: 4px solid #673ab7;
}

.blue-card {
  border: 2px solid #2962ff;
  color: #2962ff;
  background: transparent;
}

.blue-card:hover {
  border: 4px solid #2962ff;
}

.social-links {
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: "Nav",
  props: ["appName"],
  data() {
    return {
      drawer: true,
      navDropItems: [
        { title: "About me", link: "/about", theme: "red-card" },
        { title: "Portfolio", link: "/portfolio", theme: "purple-card" },
        { title: "Contact", link: "/contact", theme: "blue-card" }
      ],
      socialLinks: [
        {
          icon: "fab fa-linkedin-in",
          color: "#09FDD9",
          link: "https://www.linkedin.com/in/michaeltmudge/"
        },
        {
          icon: "fab fa-github",
          color: "#673ab7",
          link: "https://github.com/mmudge"
        },
        {
          icon: "fab fa-gitlab",
          color: "#2962ff",
          link: "https://gitlab.com/mmudge"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
