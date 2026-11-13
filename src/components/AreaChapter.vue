<script setup>
import { useTemplateRef } from "vue";
import { useSceneMotion } from "../composables/useMotion";
import ModuleAccordion from "./ModuleAccordion.vue";
import ArrowIcon from "./ArrowIcon.vue";
defineProps({
  area: { type: Object, required: true },
  reverse: { type: Boolean, default: false },
});
const root = useTemplateRef("root");
useSceneMotion(root);
</script>
<template>
  <section
    :id="area.id"
    ref="root"
    class="area-chapter full-section"
    :class="[
      `area-chapter--${area.id}`,
      {
        'area-chapter--reverse': reverse,
        'area-chapter--dark': area.tone === 'dark',
      },
    ]"
    :style="{ '--scene-aspect': `${area.imageWidth} / ${area.imageHeight}` }"
    :aria-labelledby="`${area.id}-title`"
  >
    <figure class="story-visual">
      <div class="story-image-stage" data-reveal="image">
        <img
          class="story-photograph"
          data-parallax="24"
          :src="`/editorial/${area.image}-1440.webp`"
          :srcset="`/editorial/${area.image}-640.webp 640w, /editorial/${area.image}-960.webp 960w, /editorial/${area.image}-1440.webp 1440w`"
          sizes="100vw"
          :width="area.imageWidth"
          :height="area.imageHeight"
          :alt="area.alt"
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption class="page-width story-caption">
        {{ area.caption }}
      </figcaption>
    </figure>
    <div class="page-width story-content">
      <div class="story-title" data-reveal="heading">
        <p class="eyebrow">
          <span>{{ area.number }} / 03</span>{{ area.name }}
        </p>
        <h2 :id="`${area.id}-title`">{{ area.title }}</h2>
        <a class="chapter-next" :href="area.next.href"
          >{{ area.next.label }} <ArrowIcon direction="down"
        /></a>
      </div>
      <div class="story-copy" data-reveal="copy">
        <p class="body-copy">{{ area.text }}</p>
        <p class="body-copy body-copy--secondary">{{ area.detail }}</p>
        <ModuleAccordion :modules="area.modules" />
      </div>
    </div>
  </section>
</template>
