<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app-wrapper">
    <div class="cursor"></div>
    <RouterView />
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