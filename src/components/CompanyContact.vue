<script setup>
import { useTemplateRef } from "vue";
import { contact } from "../config/contact";
import { fechamento } from "../data/institucional";
import { useSceneMotion } from "../composables/useMotion";
const root = useTemplateRef("root");
useSceneMotion(root);
</script>
<template>
  <section
    id="produto"
    ref="root"
    class="product-section full-section"
    aria-labelledby="product-title"
  >
    <div class="page-width product-layout">
      <div class="product-copy" data-reveal="heading">
        <p class="eyebrow">{{ fechamento.label }}</p>
        <h2 id="product-title">
          <span v-for="line in fechamento.lines" :key="line">{{ line }}</span>
        </h2>
        <p class="body-copy">{{ fechamento.text }}</p>
        <a
          v-if="contact.href"
          class="action action--light"
          :href="contact.href"
          target="_blank"
          rel="noopener noreferrer"
          >{{ contact.label }}
          <span class="arrow" aria-hidden="true">↗</span></a
        >
      </div>
      <div class="product-context" data-reveal="copy">
        <dl class="product-summary">
          <div v-for="(item, index) in fechamento.summary" :key="item.title">
            <dt>
              <span>0{{ index + 1 }}</span
              >{{ item.title }}
            </dt>
            <dd>{{ item.text }}</dd>
          </div>
        </dl>
        <div class="product-note">
          <h3>{{ fechamento.noteTitle }}</h3>
          <p>{{ fechamento.note }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
