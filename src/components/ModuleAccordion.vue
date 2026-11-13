<script setup>
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue";
defineProps({ modules: { type: Array, required: true } });
const frame = useTemplateRef("frame");
const entries = [];
const animations = [];
const selected = ref(-1);
let observer, preference;

function settle() {
  entries.forEach((entry, index) => {
    if (!entry) return;
    if (animations[index]) {
      animations[index].onfinish = null;
      animations[index].cancel();
      animations[index] = null;
    }
    entry.open = selected.value === index;
  });
}
function animateEntry(entry, index, opening) {
  const panel = entry.querySelector(".module-answer-panel");
  const from = entry.open ? panel.getBoundingClientRect().height : 0;
  const opacity = entry.open ? getComputedStyle(panel).opacity : "0";
  if (animations[index]) {
    animations[index].onfinish = null;
    animations[index].cancel();
    animations[index] = null;
  }
  if (!opening && !entry.open) return;
  if (preference?.matches || !panel.animate) {
    entry.open = opening;
    return;
  }
  entry.open = true;
  const target = opening ? panel.getBoundingClientRect().height : 0;
  const animation = panel.animate(
    [
      { height: `${from}px`, opacity },
      { height: `${target}px`, opacity: opening ? 1 : 0 },
    ],
    { duration: 280, easing: "cubic-bezier(.22,.72,.22,1)", fill: "both" },
  );
  animations[index] = animation;
  animation.onfinish = () => {
    if (animations[index] !== animation) return;
    entry.open = opening;
    animation.cancel();
    animations[index] = null;
  };
}
function toggle(index) {
  selected.value = selected.value === index ? -1 : index;
  entries.forEach((entry, other) => {
    if (entry) animateEntry(entry, other, selected.value === other);
  });
}
function measureHeaders() {
  const height = entries.filter(Boolean).reduce((total, entry) => {
    const border = getComputedStyle(entry);
    return (
      total +
      entry.querySelector("summary").getBoundingClientRect().height +
      parseFloat(border.borderTopWidth) +
      parseFloat(border.borderBottomWidth)
    );
  }, 0);
  frame.value?.style.setProperty("--module-headers", `${height}px`);
}
function onPreference() {
  if (preference.matches) settle();
}
onMounted(() => {
  frame.value.dataset.enhanced = "";
  preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", onPreference);
  observer = new ResizeObserver(() => {
    settle();
    measureHeaders();
  });
  entries
    .filter(Boolean)
    .forEach((entry) => observer.observe(entry.querySelector("summary")));
});
onBeforeUnmount(() => {
  observer?.disconnect();
  preference?.removeEventListener("change", onPreference);
  settle();
});
</script>
<template>
  <div class="module-list">
    <p class="module-label">Na plataforma</p>
    <div
      ref="frame"
      class="module-accordion"
      :style="{ '--module-count': modules.length }"
    >
      <div class="module-stack">
        <details
          v-for="(module, index) in modules"
          :key="module.title"
          :ref="
            (element) => {
              entries[index] = element;
            }
          "
          class="module-detail"
          :class="{ 'is-expanded': selected === index }"
        >
          <summary @click.prevent="toggle(index)">
            {{ module.title }}<span aria-hidden="true">+</span>
          </summary>
          <div class="module-answer-panel">
            <p class="module-answer">{{ module.text }}</p>
          </div>
        </details>
      </div>
      <div class="module-reserve" aria-hidden="true" inert>
        <p v-for="module in modules" :key="module.title" class="module-answer">
          {{ module.text }}
        </p>
      </div>
    </div>
  </div>
</template>
