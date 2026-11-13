<script setup>
import { useTemplateRef } from "vue";
import ArrowIcon from "./ArrowIcon.vue";
import { whatsapp } from "../data/institucional";
import { useSceneMotion } from "../composables/useMotion";

const root = useTemplateRef("root");
useSceneMotion(root);
</script>

<template>
  <section
    id="whatsapp"
    ref="root"
    class="whatsapp-section full-section"
    aria-labelledby="whatsapp-title"
  >
    <div class="page-width whatsapp-layout">
      <div class="whatsapp-copy" data-reveal="heading">
        <p class="eyebrow">{{ whatsapp.label }}</p>
        <h2 id="whatsapp-title">{{ whatsapp.title }}</h2>
        <p class="body-copy">{{ whatsapp.text }}</p>
        <a class="chapter-next" :href="whatsapp.next.href">
          {{ whatsapp.next.label }}
          <ArrowIcon direction="down" />
        </a>
      </div>
      <ol
        class="whatsapp-steps"
        data-reveal="copy"
        aria-label="O que WhatsApp e plataforma facilitam para cada parte"
      >
        <li v-for="(step, index) in whatsapp.steps" :key="step.title">
          <span class="whatsapp-step-number" aria-hidden="true"
            >0{{ index + 1 }}</span
          >
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.whatsapp-section {
  display: flex;
  align-items: center;
  padding-block: clamp(32px, 7svh, 80px);
  background: var(--paper);
}
.whatsapp-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  column-gap: clamp(48px, 8vw, 128px);
  align-items: center;
}
.whatsapp-copy .eyebrow {
  margin-bottom: 24px;
  color: var(--muted);
}
.whatsapp-copy h2 {
  max-width: 19ch;
  font-size: clamp(38px, 4.8svh, 54px);
  text-wrap: pretty;
}
.whatsapp-copy .body-copy {
  margin-top: 26px;
  max-width: 48ch;
  font-size: 17px;
  line-height: 1.7;
}
.whatsapp-steps {
  list-style: none;
  padding: 0;
  margin: 0;
}
.whatsapp-steps li {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  gap: 24px;
  padding-block: 24px;
  border-top: 1px solid var(--line);
}
.whatsapp-steps li:last-child {
  border-bottom: 1px solid var(--line);
}
.whatsapp-step-number {
  font-size: 11px;
  line-height: 28px;
  font-variant-numeric: tabular-nums;
  color: var(--muted);
}
.whatsapp-steps h3 {
  font-size: 21px;
  line-height: 1.4;
  letter-spacing: -0.02em;
}
.whatsapp-steps p {
  margin-top: 8px;
  max-width: 52ch;
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
}
@media (min-width: 901px) and (max-height: 760px) {
  .whatsapp-section {
    padding-block: 28px;
  }
  .whatsapp-layout {
    column-gap: 7%;
  }
  .whatsapp-copy .eyebrow {
    font-size: 10px;
    margin-bottom: 18px;
  }
  .whatsapp-copy h2 {
    font-size: clamp(30px, 5svh, 38px);
  }
  .whatsapp-copy .body-copy {
    font-size: 15px;
    margin-top: 20px;
    line-height: 1.65;
  }
  .whatsapp-steps li {
    padding-block: 16px;
    gap: 18px;
  }
  .whatsapp-steps h3 {
    font-size: 18px;
  }
  .whatsapp-steps p {
    font-size: 14px;
    margin-top: 6px;
    line-height: 1.6;
  }
}
@media (min-width: 901px) and (max-height: 600px) {
  .whatsapp-section {
    padding-block: 20px;
  }
  .whatsapp-layout {
    column-gap: 5%;
  }
  .whatsapp-copy .eyebrow {
    margin-bottom: 12px;
  }
  .whatsapp-copy h2 {
    font-size: 30px;
  }
  .whatsapp-copy .body-copy {
    font-size: 14px;
    line-height: 1.55;
    margin-top: 16px;
  }
  .chapter-next {
    margin-top: 12px;
  }
  .whatsapp-steps li {
    gap: 14px;
    padding-block: 9px;
  }
  .whatsapp-steps h3 {
    font-size: 17px;
    line-height: 1.35;
  }
  .whatsapp-steps p {
    font-size: 13px;
    line-height: 1.55;
    margin-top: 5px;
  }
}
@media (max-width: 900px) {
  .whatsapp-section {
    min-height: 0;
    padding-block: 52px;
  }
  .whatsapp-layout {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 36px;
  }
  .whatsapp-copy h2 {
    max-width: 24ch;
    font-size: clamp(34px, 6vw, 46px);
  }
  .whatsapp-copy .body-copy {
    max-width: 62ch;
    font-size: 16px;
  }
  .whatsapp-steps li {
    gap: 16px;
    padding-block: 22px;
  }
  .whatsapp-steps h3 {
    font-size: 19px;
  }
  .whatsapp-steps p {
    font-size: 15px;
  }
}
</style>
