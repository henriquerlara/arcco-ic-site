<script setup>
defineProps({
  direction: {
    type: String,
    default: "up-right",
    validator: (value) => ["up-right", "down", "up"].includes(value),
  },
});

const paths = {
  "up-right": "M5 19 19 5M5 5h14v14",
  down: "M12 4v16m-7-7 7 7 7-7",
  up: "M12 20V4m-7 7 7-7 7 7",
};
</script>

<template>
  <svg
    class="arrow"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path :d="paths[direction]" />
  </svg>
</template>
