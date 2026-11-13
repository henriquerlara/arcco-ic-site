<script setup>
import BrandMark from "./BrandMark.vue";
import { empresa } from "../data/institucional";
</script>
<template>
  <footer class="site-footer">
    <div class="page-width footer-layout">
      <a
        class="footer-brand"
        href="#inicio"
        aria-label="ARCCO — voltar ao início"
        ><BrandMark small
      /></a>
      <p class="footer-id">{{ empresa.razao }}<br />CNPJ: {{ empresa.cnpj }}</p>
      <div class="footer-end">
        <span>© {{ new Date().getFullYear() }} ARCCO</span
        ><a href="#inicio"
          >Voltar ao início <span aria-hidden="true">↑</span></a
        >
      </div>
    </div>
  </footer>
</template>
