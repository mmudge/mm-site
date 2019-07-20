<template>
  <div id="avatar" :style="w + h"></div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["h", "w"],
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
#avatar {
  background-image: url("../assets/profilepic.jpg");
  background-repeat: no-repeat;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-position: -50px;
}
</style>
