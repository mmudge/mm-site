<template>
  <div id="home">
    <HomeNav :appName="appName" />
    <vue-particles
      color="#fff"
      :particleOpacity="0.5"
      :particlesNumber="55"
      shapeType="edge"
      :particleSize="2"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="180"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      style="position: fixed; height: 100vh; width: 100vw;"
    ></vue-particles>
    <v-container class="flex-center header-content">
      <div>
        <p class="line-item line-one">HELLO</p>
        <p class="line-item line-two">I'M MIKE</p>
        <p class="line-item line-three">I'M A WEB DEVELOPER</p>
        <p class="line-item line-four">WITH A PASSION FOR</p>
        <p class="line-item line-five">CODE, DESIGN, & SOFTWARE</p>
      </div>
    </v-container>
  </div>
</template>


<style lang="scss" scoped>
//  #e53935;
//  #673ab7;
//  #2962ff;
//   #09FDD9

#home {
  background-image: linear-gradient(
      75deg,
      rgba(#212121, 0.7),
      50%,
      rgba(#212121, 0.5)
    ),
    url("../assets/homebg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}

.header-content {
  flex-direction: column;
  height: 100vh;

  div {
    text-align: center;
    line-height: 0.75;
    z-index: 1;

    .line-item {
      word-spacing: 0px;
      letter-spacing: 0px;
      text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    }

    .line-one {
      // color: #2962ff;
      color: white;
      font-size: 5vw;
      font-weight: 300;
    }

    .line-two {
      color: #09fdd9;
      // color: white;
      font-size: 5.5vw;
      font-weight: 400;
    }

    .line-three {
      color: #673ab7;
      // color: white;
      font-size: 3.5vw;
      font-weight: 300;
    }

    .line-four {
      // color: #e53935;
      color: white;
      font-size: 2vw;
      font-weight: 200;
    }

    .line-five {
      color: #2962ff;
      // color: white;
      font-size: 2.5vw;
      font-weight: 400;
    }
  }
}
</style>


<script>
import HomeNav from "../components/HomeNav.vue";
export default {
  name: "Home",
  components: {
    HomeNav
  },
  data() {
    return {
      appName: "Michael Mudge | Web Developer"
    };
  }
};
</script>
