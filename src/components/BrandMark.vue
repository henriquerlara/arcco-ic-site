<script setup>
defineProps({
  priority: { type: Boolean, default: false },
  small: { type: Boolean, default: false },
});
</script>

<template>
  <img
    class="brand"
    :class="{ 'brand--small': small }"
    src="/brand/arcco-logo-small.webp"
    width="240"
    height="125"
    alt="ARCCO — Inteligência Comercial"
    :fetchpriority="priority ? 'high' : 'auto'"
    :loading="priority ? 'eager' : 'lazy'"
    decoding="async"
  />
</template>
