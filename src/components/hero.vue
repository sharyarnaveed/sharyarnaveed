<script setup>
import { RouterLink } from "vue-router";
import { useReveal } from "../composables/useReveal";

const { root } = useReveal({ threshold: 0.05 });
</script>

<template>
  <section id="top" ref="root" class="hero">
    <div class="shell hero__inner">
      <!-- floating stickers -->
      <span class="tag tag--paper float float--a" style="--tilt: -7deg">Made in KPK</span>
      <span class="tag tag--paper float float--b" style="--tilt: 6deg">Open to work</span>
      <a href="#work" class="tag tag--pink float float--c" style="--tilt: -5deg">
        Selected work
      </a>
      <span class="tag tag--blue float float--d" style="--tilt: 8deg">2+ yrs shipping</span>

      <!-- circular stickers -->
      <span class="orb orb--left" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6">
          <circle cx="24" cy="24" r="19" />
          <path d="M16 20h.01M32 20h.01" stroke-linecap="round" stroke-width="4" />
          <path d="M16 30c2.5 3 5.2 4.2 8 4.2s5.5-1.2 8-4.2" stroke-linecap="round" />
        </svg>
      </span>
      <span class="orb orb--right" aria-hidden="true">SN</span>

      <p class="hero__eyebrow scrawl" data-reveal>
        hey, it&rsquo;s
        <svg class="arrow" viewBox="0 0 60 42" fill="none" aria-hidden="true">
          <path
            d="M4 4c14 2 26 12 28 30"
            stroke="currentColor"
            stroke-width="2.4"
            stroke-linecap="round"
          />
          <path
            d="M25 27l7 8 8-6"
            stroke="currentColor"
            stroke-width="2.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </p>

      <h1 class="hero__name" data-reveal style="--delay: 0.08s">
        <span class="doodle-box display display--xl">Sharyar</span>
        <sup class="hero__sup stamp">(26)</sup>
      </h1>

      <p class="hero__kicker stamp" data-reveal style="--delay: 0.16s">
        &#9679; a note to the human behind the keyboard
      </p>

      <p class="hero__statement" data-reveal style="--delay: 0.22s">
        <span class="hero__line">
          Web Developer and Creative Developer based in Pakistan.
          <span class="globe" aria-hidden="true">&#127760;</span>
        </span>
        <span class="hero__line">
          Passionate about code and design.
          <span class="spark" aria-hidden="true">&#10035;</span>
        </span>
      </p>

      <div class="hero__actions" data-reveal style="--delay: 0.3s">
        <RouterLink :to="{ path: '/', hash: '#contact' }" class="btn btn--ink">
          Contact me
        </RouterLink>
        <a class="btn btn--yellow" href="/Sharyar_Naveed.pdf" target="_blank" rel="noopener">
          Get resume
        </a>
      </div>

      <a href="#banner" class="hero__scroll scrawl" data-reveal style="--delay: 0.4s">
        scroll for the fun stuff &darr;
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: calc(var(--chrome-h) + clamp(3rem, 9vw, 6.5rem));
  padding-bottom: clamp(3rem, 8vw, 6rem);
}

.hero__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero__eyebrow {
  position: relative;
  font-size: clamp(1.1rem, 2.4vw, 1.5rem);
  color: var(--ink-soft);
  margin-bottom: 0.35rem;
}

.arrow {
  position: absolute;
  top: 0.4rem;
  right: -3.2rem;
  width: 46px;
  color: var(--ink-faint);
  transform: rotate(8deg);
}

.hero__name {
  position: relative;
  width: fit-content;
  margin: 0 auto 1.6rem;
}

.hero__name .doodle-box {
  background: var(--paper-card);
  transform: rotate(-1.2deg);
}

.hero__sup {
  position: absolute;
  top: -0.6rem;
  right: -2.4rem;
  font-size: 0.7rem;
}

.hero__kicker {
  margin-bottom: 1.4rem;
}

.hero__statement {
  display: flex;
  flex-direction: column;
  gap: 0.15em;
  max-width: 26ch;
  font-family: var(--font-ui);
  font-size: clamp(1.35rem, 3.6vw, 2.3rem);
  font-weight: 700;
  line-height: 1.24;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
  text-wrap: balance;
}

.globe {
  font-size: 0.78em;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.hero__scroll {
  margin-top: clamp(2.5rem, 6vw, 4rem);
  font-size: 1.2rem;
  color: var(--ink-faint);
  transition: color 0.25s var(--ease), transform 0.25s var(--ease);
}

.hero__scroll:hover {
  color: var(--ink);
  transform: translateY(3px);
}

/* ---- floating decor ---- */

.float {
  position: absolute;
  animation: drift 7s ease-in-out infinite;
}

.float--a {
  top: 14%;
  left: 2%;
  animation-delay: 0.2s;
}
.float--b {
  top: 8%;
  right: 3%;
  animation-delay: 1.4s;
}
.float--c {
  top: 46%;
  left: 0;
  animation-delay: 0.8s;
}
.float--d {
  top: 40%;
  right: 1%;
  animation-delay: 2s;
}

.orb {
  position: absolute;
  top: 54%;
  display: grid;
  place-items: center;
  width: clamp(46px, 6vw, 62px);
  height: clamp(46px, 6vw, 62px);
  border: 2px solid var(--ink);
  border-radius: 50%;
  box-shadow: var(--shadow-sticker-sm);
  font-family: var(--font-display);
  font-size: 0.85rem;
  animation: drift 9s ease-in-out infinite;
}

.orb--left {
  left: 8%;
  background: var(--yellow);
  color: var(--ink);
  padding: 8px;
}

.orb--right {
  right: 8%;
  background: var(--blue);
  animation-delay: 1.2s;
}

@media (max-width: 900px) {
  .float--c,
  .float--d {
    top: 62%;
  }

  .orb {
    display: none;
  }
}

@media (max-width: 620px) {
  .float--a,
  .float--b {
    position: static;
    animation: none;
  }

  .float--c,
  .float--d {
    display: none;
  }

  .hero__inner {
    gap: 0;
  }

  .hero__inner > .tag {
    margin-bottom: 0.5rem;
  }

  .arrow {
    right: -2.6rem;
    width: 36px;
  }

  .hero__sup {
    top: -1.1rem;
    right: 0;
  }
}
</style>
