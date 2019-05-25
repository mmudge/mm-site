<template>
  <div>
    <Header/>
    <Cast/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Cast from "../components/Cast";

export default {
  name: "Home",
  components: {
    Header,
    Cast
  }
};
</script>
