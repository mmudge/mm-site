<template>
  <div>
    <div id="side-nav">
      <v-container class="card-container" fluid>
        <v-layout column justify-center class="card-layout">
          <div class="home-link" @click="$router.push('/')">
            <div class="flex-center">
              <Avatar h="height: 40px;" w="width: 40px;" />
              <h1 class="nav-header">Michael Mudge</h1>
            </div>
          </div>
          <template v-for="(item, index) in navDropItems">
            <v-card flat :to="item.link" :class="item.theme" class="nav-card" :key="index">
              <h1 class="card-title">{{item.title.toUpperCase()}}</h1>
            </v-card>
          </template>
          <div class="flex-center">
            <template v-for="s in socialLinks" class="social-links">
              <v-btn icon :href="s.link" :key="s.icon">
                <v-icon :color="s.color">{{s.icon}}</v-icon>
              </v-btn>
            </template>
          </div>
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

.home-link:hover {
  cursor: pointer;
}

.nav-header {
  color: #09fdd9;
  font-size: 1vw;
  margin-left: 20px;
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

.card-title {
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
import Avatar from "./Avatar.vue";

export default {
  name: "Nav",
  props: ["appName"],
  components: {
    Avatar
  },
  data() {
    return {
      drawer: true,
      avatarSize: "height: 20px; width 20px;",
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
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
