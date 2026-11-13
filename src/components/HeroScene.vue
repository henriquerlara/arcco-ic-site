<script setup>
import BrandMark from "./BrandMark.vue";
import { hero } from "../data/institucional";
import { useTemplateRef } from "vue";
import { useSceneMotion } from "../composables/useMotion";
const root = useTemplateRef("root");
useSceneMotion(root);
</script>
<template>
  <section
    id="inicio"
    ref="root"
    class="campaign-hero full-section"
    aria-labelledby="hero-title"
  >
    <div class="hero-media" aria-hidden="true">
      <div class="hero-backdrop" data-parallax="30">
        <img
          class="hero-photograph"
          src="/editorial/contexto-comercial-1440.webp"
          srcset="
            /editorial/contexto-comercial-640.webp   640w,
            /editorial/contexto-comercial-960.webp   960w,
            /editorial/contexto-comercial-1440.webp 1440w
          "
          sizes="100vw"
          width="1672"
          height="941"
          alt=""
          fetchpriority="high"
          decoding="async"
        />
        <div class="hero-shade"></div>
      </div>
    </div>
    <div class="hero-layout page-width">
      <BrandMark priority />
      <div class="hero-message">
        <p class="eyebrow">{{ hero.kicker }}</p>
        <h1 id="hero-title">
          <span v-for="line in hero.lines" :key="line">{{ line }}</span>
        </h1>
        <p class="hero-support">{{ hero.support }}</p>
        <a class="action action--light" href="#solucao"
          >{{ hero.action }} <span class="arrow" aria-hidden="true">↗</span></a
        >
      </div>
      <a class="hero-scroll" href="#solucao"
        >A plataforma, por inteiro. <span aria-hidden="true">↓</span></a
      >
    </div>
  </section>
</template>
