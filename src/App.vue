<script setup>
import HeroScene from "./components/HeroScene.vue";
import SolutionIntro from "./components/SolutionIntro.vue";
import PhotoExplorer from "./components/PhotoExplorer.vue";
import WhatsAppSection from "./components/WhatsAppSection.vue";
import CompanyContact from "./components/CompanyContact.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>
<template>
  <a class="skip-link" href="#solucao">Ir para a solução</a>
  <main>
    <HeroScene />
    <SolutionIntro />
    <PhotoExplorer />
    <WhatsAppSection />
    <CompanyContact />
  </main>
  <SiteFooter />
</template>
