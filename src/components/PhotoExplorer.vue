<script setup>
import AreaChapter from "./AreaChapter.vue";
import { areas } from "../data/institucional";
</script>
<template>
  <div id="areas">
    <AreaChapter
      v-for="(area, index) in areas"
      :key="area.id"
      :area="area"
      :reverse="index === 1"
    />
  </div>
</template>
