<template>
  <div>
    <v-container fluid>
      <v-layout class="flex-center header-height">
        <iframe
          src="https://player.vimeo.com/video/337844840"
          width="800"
          height="450"
          frameborder="0"
          title="test-vid"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </v-layout>
      <div class="flex-center pb-5">
        <v-btn flat fab>
          <v-icon color="red darken-2" style="font-size: 48px;">keyboard_arrow_down</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-height {
  height: 1200px;
}
</style>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style>
</style>
