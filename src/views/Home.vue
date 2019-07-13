<template>
  <div>
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
// color: #e53935;

// color: #673ab7;

// color: #2962ff;
// #09FDD9

.header-content {
  flex-direction: column;
  height: 100vh;

  div {
    text-align: center;
    line-height: 0.75;

    .line-item {
      word-spacing: 0px;
      letter-spacing: 0px;
    }

    .line-one {
      color: #2962ff;
      font-size: 5vw;
      font-weight: 300;
    }

    .line-two {
      color: #09fdd9;
      font-size: 5.5vw;
      font-weight: 400;
    }

    .line-three {
      color: #673ab7;
      font-size: 3.5vw;
      font-weight: 300;
    }

    .line-four {
      color: #e53935;
      font-size: 2vw;
      font-weight: 200;
    }

    .line-five {
      color: #2962ff;
      font-size: 2.5vw;
      font-weight: 400;
    }
  }
}
</style>


<script>
export default {
  name: "Home",
  components: {}
};
</script>
