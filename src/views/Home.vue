<template>
  <div id="home">
    <!-- <HomeNav :appName="appName" /> -->
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
        <div>
          <p class="line-item line-one">HELLO</p>
          <p class="line-item line-two">I'M MIKE</p>
          <p class="line-item line-three">I'M A WEB DEVELOPER</p>
          <p class="line-item line-four">WITH A PASSION FOR</p>
          <p class="line-item line-five">CODE, DESIGN, & SOFTWARE</p>
        </div>
        <v-layout class="mt-5" justify-center wrap>
          <v-flex xs12 sm6 md6>
            <v-btn to="/about" flat large outline color="#09fdd9">Information</v-btn>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-btn to="/portfolio" flat large outline color="#2962ff">Portfolio</v-btn>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>


<style lang="scss" scoped>
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
    font-family: "Comfortaa", cursive;

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
      // color: blue;
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

    // 40, 38, 24, 16, 22

    @media (max-width: 480px) {
      .line-one {
        font-size: 40px;
      }

      .line-two {
        font-size: 38px;
      }

      .line-three {
        font-size: 24px;
      }

      .line-four {
        font-size: 16px;
      }

      .line-five {
        font-size: 22px;
      }
    }
  }

  .v-btn--large {
    height: 74px;
    padding: 0 102px;
  }
}
</style>


<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      appName: "Michael Mudge | Web Developer"
    };
  }
};
</script>
