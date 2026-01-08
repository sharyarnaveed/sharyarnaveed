<script setup>
import { defineAsyncComponent, onMounted } from 'vue';

const home = defineAsyncComponent(() => import('./views/home.vue'));
</script>

<template>
  <div class="app-wrapper">
    <div class="cursor"></div>
    <home />
  </div>
</template>

<style>
.app-wrapper {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
}
</style>