<template>
  <div>
    <v-carousel class="hidden-sm-and-down" hide-delimiters height="900" max="1600">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  components: {},
  data() {
    return {
      items: [
        // prettier-ignore
        { src: require('../assets/hawaiisunrise.jpeg') },
        // prettier-ignore
        { src: require('../assets/bryce.jpg') },
        // prettier-ignore
        { src: require('../assets/canyonlands.jpg') },
        // prettier-ignore
        { src: require('../assets/hawaiihike.jpeg')}
      ]
    };
  }
};
</script>

<style scoped>
</style>
