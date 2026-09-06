<script setup>
import { ref } from "vue";
import { useReveal } from "../composables/useReveal";

const { root } = useReveal();

/**
 * Drop a file at `public/banner.webp` (or change BANNER_SRC) and it replaces the
 * placeholder automatically. Keep it 3:2 to match `.banner__img`.
 */
const BANNER_SRC = "/banner.webp";
const hasBanner = ref(true);
</script>

<template>
  <section id="banner" ref="root" class="section banner">
    <div class="shell">
      <header class="banner__head" data-reveal>
        <p class="scrawl banner__scrawl">unplanned</p>
        <h2 class="display display--lg banner__title">Just for fun</h2>
      </header>

      <div class="banner__stage" data-reveal style="--delay: 0.1s">
        <span class="tape tape--top" aria-hidden="true"></span>

        <img
          v-if="hasBanner"
          class="banner__img"
          :src="BANNER_SRC"
          alt="Custom banner collage by Sharyar Naveed"
          loading="lazy"
          @error="hasBanner = false"
        />

        <div v-else class="banner__placeholder">
          <span class="banner__sticker tag tag--yellow" style="--tilt: -6deg">
            Coming soon
          </span>
          <p class="display display--md banner__ph-title">Custom banner</p>
          <p class="hand banner__ph-note">
            this is where my own collage goes. Drop it in at
            <code>public/banner.webp</code> and it swaps itself in.
          </p>
        </div>
      </div>

      <div class="banner__strip" data-reveal style="--delay: 0.18s">
        <span class="hl">hand built</span>
        <span class="hl hl--pink">over engineered</span>
        <span class="hl hl--blue">shipped anyway</span>
        <span class="hl hl--green">still tweaking</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: clamp(1.75rem, 4vw, 2.75rem);
}

.banner__scrawl {
  margin-bottom: 0.5rem;
  font-size: 1.35rem;
  color: var(--ink-faint);
  transform: rotate(-6deg) translateX(-2.5rem);
}

.banner__title {
  transform: rotate(-1.5deg);
}

.banner__stage {
  position: relative;
  padding: clamp(0.6rem, 1.6vw, 1rem);
  background: var(--paper-card);
  border: 2px solid var(--ink);
  border-radius: 4px;
  box-shadow: 5px 7px 0 var(--ink);
  transform: rotate(-0.5deg);
}

.banner__img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border: 1px solid rgba(23, 20, 15, 0.15);
}

.banner__placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  aspect-ratio: 16 / 9;
  padding: clamp(1rem, 4vw, 3rem);
  text-align: center;
  border: 3px dashed rgba(23, 20, 15, 0.28);
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 14px,
    rgba(23, 20, 15, 0.035) 14px 28px
  );
}

.banner__sticker {
  animation: wiggle 4s ease-in-out infinite;
}

.banner__ph-title {
  color: var(--ink);
}

.banner__ph-note {
  max-width: 42ch;
  font-size: clamp(0.95rem, 1.6vw, 1.1rem);
  color: var(--ink-soft);
}

.banner__ph-note code {
  font-family: var(--font-stamp);
  font-size: 0.85em;
  padding: 0.1em 0.35em;
  background: var(--yellow);
  border-radius: 3px;
}

.banner__strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.1rem 1.6rem;
  margin-top: clamp(1.75rem, 4vw, 2.5rem);
  font-family: var(--font-hand);
  font-size: clamp(0.95rem, 1.8vw, 1.2rem);
}
</style>
