  <template>
  <v-chip :color="color" text-color="white" class="chip">
    <v-avatar>
      <v-icon class="chip-icon">{{ icon }}</v-icon>
    </v-avatar>
    <p class="mb-0">{{ text }}</p>
  </v-chip>
</template>

<script>
export default {
  name: "chip",
  props: ["color", "icon", "text"]
};
</script>

<style scoped>
.chip {
  font-family: "Comfortaa", cursive;
}
.chip-icon {
  font-size: 16px;
}

.chip-text {
  font-weight: bold;
  font-size: 14px;
}
</style>
