<script setup>
import { useTemplateRef } from "vue";
import { introduction, areas } from "../data/institucional";
import { useSceneMotion } from "../composables/useMotion";
const root = useTemplateRef("root");
useSceneMotion(root);
</script>
<template>
  <section
    id="solucao"
    ref="root"
    class="introduction full-section"
    aria-labelledby="intro-title"
  >
    <div class="page-width intro-shell">
      <div class="introduction-layout">
        <div class="intro-copy" data-reveal="heading">
          <p class="eyebrow">{{ introduction.label }}</p>
          <h2 id="intro-title">{{ introduction.lines.join(" ") }}</h2>
          <p class="body-copy">{{ introduction.text }}</p>
          <p class="body-copy body-copy--secondary">
            {{ introduction.detail }}
          </p>
        </div>
        <figure class="intro-figure">
          <div class="intro-image-stage" data-reveal="image">
            <img
              src="/editorial/especificacao-960.webp"
              srcset="
                /editorial/especificacao-640.webp   640w,
                /editorial/especificacao-960.webp   960w,
                /editorial/especificacao-1440.webp 1440w
              "
              sizes="(max-width: 900px) 100vw, 52vw"
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
              alt="Catálogo, especificações e uma peça de ferragem sobre uma mesa de trabalho."
            />
          </div>
          <figcaption>{{ introduction.caption }}</figcaption>
        </figure>
      </div>
      <div class="solution-index" aria-label="Conhecer as áreas da plataforma">
        <a v-for="area in areas" :key="area.id" :href="`#${area.id}`"
          ><span class="index-number">{{ area.number }} /</span
          ><span>{{ area.name }}</span
          ><span class="arrow" aria-hidden="true">↗</span></a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.introduction {
  height: 100svh;
  min-height: 0;
  padding: 0;
  background: var(--paper);
}
.intro-shell {
  height: 100%;
  min-height: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  row-gap: clamp(40px, 6svh, 64px);
  padding-block: clamp(48px, 7svh, 88px);
}
.introduction-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  column-gap: clamp(40px, 4vw, 72px);
  min-height: 0;
  align-items: center;
}
.intro-copy {
  min-width: 0;
  max-width: 650px;
}
.intro-copy .eyebrow {
  font-size: 11px;
  line-height: 1.5;
  color: #4d625d;
  margin-bottom: 24px;
}
.intro-copy h2 {
  font-size: clamp(40px, 3vw, 54px);
  line-height: 1.12;
  letter-spacing: -0.035em;
  max-width: 23ch;
  margin: 0 0 32px;
  text-wrap: pretty;
}
.intro-copy h2 > span {
  display: inline;
}
.intro-copy h2 > span:not(:last-child)::after {
  content: " ";
}
.intro-copy .body-copy {
  font-size: 18px;
  line-height: 1.75;
  max-width: 58ch;
  margin: 0;
}
.intro-copy .body-copy--secondary {
  font-size: 16px;
  line-height: 1.75;
  margin-top: 20px;
}
.intro-figure {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  row-gap: 20px;
  align-self: stretch;
  min-height: 0;
  height: 100%;
  width: calc(100% + var(--page-gutter));
  margin: 0 calc(-1 * var(--page-gutter)) 0 0;
  justify-self: end;
  overflow: hidden;
}
.intro-image-stage {
  position: relative;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
.intro-image-stage img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 54% 56%;
}
.intro-image-stage::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(0deg, var(--paper), transparent 16%),
    linear-gradient(90deg, var(--paper), transparent 13%);
}
.intro-figure figcaption {
  position: relative;
  margin: 0;
  padding: 0 var(--page-gutter) 0 7%;
  font-size: 11px;
  line-height: 1.65;
  color: var(--muted);
  max-width: none;
}
.solution-index {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  margin: 0;
}
.solution-index > a {
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 64px;
  padding: 20px 0;
  border-top: 1px solid var(--line);
  font-size: 17px;
  line-height: 1.5;
  font-weight: 500;
  transition: color 180ms;
}
.index-number {
  font-size: 10px;
  font-weight: 400;
  color: #536762;
  font-variant-numeric: tabular-nums;
}
.solution-index .arrow {
  font-size: 19px;
  margin-left: auto;
}
.solution-index > a:hover {
  color: #7a633e;
}
.solution-index > a:hover .arrow {
  transform: translate(3px, -3px);
}
@media (min-width: 901px) and (max-height: 760px) {
  .intro-shell {
    padding-block: clamp(24px, 5svh, 38px);
    row-gap: clamp(28px, 4.5svh, 36px);
  }
  .intro-copy .eyebrow {
    font-size: 10px;
    margin-bottom: 16px;
  }
  .intro-copy h2 {
    font-size: clamp(32px, 4.8svh, 40px);
    line-height: 1.1;
    max-width: none;
    margin-bottom: 24px;
  }
  .intro-copy .body-copy {
    font-size: clamp(14px, 2.3svh, 16px);
    line-height: 1.65;
  }
  .intro-copy .body-copy--secondary {
    font-size: clamp(14px, 2.15svh, 15px);
    margin-top: 16px;
  }
  .intro-figure {
    row-gap: 16px;
  }
  .solution-index > a {
    min-height: 54px;
    padding-block: 14px;
    font-size: 15px;
  }
}
@media (max-width: 1150px) and (min-width: 901px) {
  .introduction-layout {
    column-gap: 40px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
  .intro-copy h2 {
    font-size: clamp(34px, 3.6vw, 42px);
  }
  .intro-copy .body-copy {
    font-size: 16px;
    line-height: 1.7;
  }
  .intro-copy .body-copy--secondary {
    font-size: 15px;
  }
  .solution-index {
    gap: 24px;
  }
  .solution-index > a {
    font-size: 15px;
    gap: 12px;
  }
}
@media (max-width: 1150px) and (min-width: 901px) and (max-height: 760px) {
  .intro-copy h2 {
    font-size: 32px;
  }
  .intro-copy .body-copy {
    font-size: 14px;
    line-height: 1.65;
  }
  .intro-copy .body-copy--secondary {
    font-size: 14px;
  }
}
@media (max-width: 900px) {
  .introduction {
    height: auto;
    min-height: 100svh;
  }
  .intro-shell {
    height: auto;
    grid-template-rows: auto auto;
    row-gap: 36px;
    padding-block: 48px;
  }
  .introduction-layout {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 32px;
  }
  .intro-copy {
    max-width: 650px;
  }
  .intro-copy .eyebrow {
    font-size: 10px;
    margin-bottom: 20px;
  }
  .intro-copy h2 {
    font-size: clamp(34px, 5.5vw, 46px);
    max-width: 24ch;
    margin-bottom: 26px;
  }
  .intro-copy .body-copy {
    font-size: 16px;
    line-height: 1.75;
  }
  .intro-copy .body-copy--secondary {
    font-size: 15px;
    margin-top: 18px;
  }
  .intro-figure {
    height: auto;
    width: calc(100% + 2 * var(--page-gutter));
    margin-inline: calc(-1 * var(--page-gutter));
    justify-self: auto;
    row-gap: 16px;
  }
  .intro-image-stage {
    height: auto;
    aspect-ratio: 3/2;
    background: var(--paper);
  }
  .intro-image-stage img {
    object-fit: cover;
  }
  .intro-image-stage::after {
    content: "";
    inset: -1px;
    background: linear-gradient(0deg, var(--paper) 0 16px, transparent 22%);
  }
  .intro-figure figcaption {
    padding-inline: var(--page-gutter);
    font-size: 11px;
  }
  .solution-index {
    gap: 24px;
  }
  .solution-index > a {
    min-height: 56px;
    padding-block: 15px;
    font-size: 15px;
    gap: 12px;
  }
}
@media (max-width: 600px) {
  .solution-index {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }
  .solution-index > a {
    font-size: 16px;
    gap: 18px;
  }
  .solution-index > a:last-child {
    border-bottom: 1px solid var(--line);
  }
}
@media (min-width: 901px) and (max-height: 480px) {
  .introduction {
    height: auto;
    min-height: 100svh;
  }
  .intro-shell {
    height: auto;
    grid-template-rows: auto auto;
  }
  .intro-figure {
    height: 350px;
    align-self: center;
  }
}
</style>
