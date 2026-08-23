<script setup>
import navbar from "../components/navbar.vue";
import hero from "../components/hero.vue";
import bannerstrip from "../components/bannerstrip.vue";
import aboutme from "../components/aboutme.vue";
import projectdisplay from "../components/projectdisplay.vue";
import stacksection from "../components/stacksection.vue";
import contactsection from "../components/contactsection.vue";
</script>

<template>
  <navbar />

  <main class="home">
    <hero />

    <div class="snip" aria-hidden="true">
      <span class="snip__line"></span>
      <span class="snip__mark">&#9670;</span>
      <span class="snip__line"></span>
    </div>

    <bannerstrip />
    <aboutme />
    <projectdisplay />
    <stacksection />
  </main>

  <contactsection />
</template>

<style scoped>
.home {
  position: relative;
  z-index: 2;
}

.snip {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-inline: calc(var(--page-pad) + var(--gutter));
  max-width: var(--maxw);
  margin: 0 auto;
}

.snip__line {
  flex: 1;
  height: 0;
  border-top: 2px dashed rgba(23, 20, 15, 0.22);
}

.snip__mark {
  font-size: 0.7rem;
  color: var(--ink-faint);
}
</style>
