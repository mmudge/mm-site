<template>
  <div>
    <div class="navbar">
      <div class="nav-link" @click="goTo()">
        <Avatar h="height: 40px;" w="width: 40px;" />
      </div>
      <template v-for="nav in navItems">
        <div
          class="nav-link nav-words"
          @click="goTo(nav.link)"
          :key="nav.title"
        >{{ nav.title.toUpperCase() }}</div>
      </template>
      <Social />
    </div>
  </div>
</template>

<style style="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
}

.nav-link {
  margin: 0px 30px;
}

.nav-words {
  font-size: 18px;
}
.nav-link:hover {
  cursor: pointer;
}
</style>

<script>
import Avatar from "./Avatar.vue";
import Social from "./Social.vue";

export default {
  name: "Nav",
  props: ["appName"],
  components: {
    Avatar,
    Social
  },
  data() {
    return {
      drawer: true,
      avatarSize: "height: 20px; width 20px;",
      navItems: [
        { title: "About me", link: "/about" },
        { title: "Portfolio", link: "/portfolio" },
        { title: "Contact", link: "/contact" }
      ]
    };
  },
  computed: {},
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goTo(route) {
      if (!route) {
        this.goHome();
      } else {
        this.$router.push(`${route}`);
      }
    },
    clicked() {
      console.log("clicked");
    }
  }
};
</script>

<style scoped>
</style>
