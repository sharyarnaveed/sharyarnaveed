<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";

const MIN_MS = 900;
const started = performance.now();

const dismissBootLoader = async () => {
  const loader = document.getElementById("boot-loader");
  if (!loader) return;

  const fill = document.getElementById("boot-fill");
  const pct = document.getElementById("boot-pct");

  try {
    if (document.fonts?.ready) await document.fonts.ready;
  } catch {
    /* fonts optional */
  }

  const elapsed = performance.now() - started;
  const wait = Math.max(0, MIN_MS - elapsed);

  // Finish the highlighter bar smoothly before exit.
  if (fill) fill.style.width = "100%";
  if (pct) {
    const from = Number.parseInt(pct.textContent || "0", 10) || 0;
    const t0 = performance.now();
    const duration = Math.max(280, wait);
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      pct.textContent = String(Math.round(from + (100 - from) * t));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  await new Promise((r) => setTimeout(r, Math.max(320, wait)));

  loader.classList.add("boot--out");
  document.documentElement.classList.remove("booting");

  window.setTimeout(() => loader.remove(), 600);
};

onMounted(() => {
  dismissBootLoader();
});
</script>

<template>
  <div class="app-wrapper">
    <div class="grain" aria-hidden="true"></div>
    <RouterView />
  </div>
</template>

<style scoped>
/* Faint paper tooth over the whole page. */
.grain {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.32;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
}
</style>
