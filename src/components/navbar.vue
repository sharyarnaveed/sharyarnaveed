<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const menuOpen = ref(false);
const scrolled = ref(false);

const links = [
  { label: "Home", to: { path: "/", hash: "" } },
  { label: "About", to: { path: "/", hash: "#about" } },
  { label: "Work", to: { path: "/", hash: "#work" } },
  { label: "Playground", to: { path: "/projects" } },
];

function isActive(link) {
  if (link.to.path === "/projects") return route.path === "/projects";
  if (route.path !== "/") return false;
  return (route.hash || "") === (link.to.hash || "");
}

function onScroll() {
  scrolled.value = window.scrollY > 24;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  document.body.style.overflow = "";
});

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

watch(() => route.fullPath, () => (menuOpen.value = false));
</script>

<template>
  <header class="chrome" :class="{ 'is-scrolled': scrolled }">
    <nav class="chrome__bar" aria-label="Main">
      <RouterLink to="/" class="chrome__brand display">Sharyar</RouterLink>

      <ul class="chrome__tabs">
        <li v-for="link in links" :key="link.label">
          <RouterLink
            :to="link.to"
            class="tab"
            :class="{ 'tab--active': isActive(link) }"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <div class="chrome__right">
        <span class="lights" aria-hidden="true">
          <i class="light light--red"></i>
          <i class="light light--green"></i>
          <i class="light light--ink"></i>
        </span>

        <RouterLink :to="{ path: '/', hash: '#contact' }" class="contact-pill">
          Contact
        </RouterLink>

        <button
          class="burger"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <span :class="{ 'is-open': menuOpen }"></span>
        </button>
      </div>
    </nav>

    <Transition name="sheet">
      <div v-if="menuOpen" class="sheet">
        <ul class="sheet__list">
          <li v-for="(link, i) in links" :key="link.label" :style="{ '--i': i }">
            <RouterLink :to="link.to" class="display display--md" @click="menuOpen = false">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
        <RouterLink
          :to="{ path: '/', hash: '#contact' }"
          class="btn btn--ink"
          @click="menuOpen = false"
        >
          Say hello
        </RouterLink>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.chrome {
  position: fixed;
  inset: 0 0 auto;
  z-index: 900;
}

.chrome__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: var(--chrome-h);
  padding-inline: clamp(0.75rem, 3vw, 1.5rem);
  background: var(--paper-card);
  border-bottom: 2px solid var(--ink);
  transition: box-shadow 0.3s var(--ease);
}

.chrome.is-scrolled .chrome__bar {
  box-shadow: 0 6px 18px rgba(23, 20, 15, 0.12);
}

.chrome__brand {
  display: none;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
}

.chrome__tabs {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  min-width: 0;
}

.tab {
  display: block;
  padding: 0.36rem 0.7rem;
  border: 2px solid transparent;
  border-radius: 4px;
  font-family: var(--font-stamp);
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
  white-space: nowrap;
  transition: background-color 0.2s var(--ease), color 0.2s var(--ease),
    border-color 0.2s var(--ease);
}

.tab:hover {
  color: var(--ink);
  background: var(--paper-shade);
}

.tab--active {
  background: var(--yellow);
  border-color: var(--ink);
  color: var(--ink);
}

.chrome__right {
  display: flex;
  align-items: center;
  gap: clamp(0.6rem, 2vw, 1.1rem);
}

.lights {
  display: flex;
  gap: 0.4rem;
}

.light {
  width: 11px;
  height: 11px;
  border: 1.5px solid var(--ink);
  border-radius: 50%;
}

.light--red {
  background: var(--red);
}
.light--green {
  background: #3fcf6b;
}
.light--ink {
  background: var(--ink);
}

.contact-pill {
  padding: 0.4rem 0.95rem;
  background: var(--ink);
  color: var(--paper-card);
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-family: var(--font-stamp);
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: transform 0.25s var(--ease-back), background-color 0.25s var(--ease);
}

.contact-pill:hover {
  transform: translateY(-2px);
  background: var(--orange);
  color: var(--ink);
}

/* ---- mobile ---- */

.burger {
  display: none;
  width: 34px;
  height: 30px;
  place-items: center;
  border: 2px solid var(--ink);
  border-radius: 4px;
  background: var(--yellow);
}

.burger span,
.burger span::before,
.burger span::after {
  display: block;
  width: 16px;
  height: 2px;
  background: var(--ink);
  transition: transform 0.3s var(--ease), opacity 0.2s linear;
}

.burger span::before,
.burger span::after {
  content: "";
  position: absolute;
}

.burger span::before {
  transform: translateY(-5px);
}
.burger span::after {
  transform: translateY(5px);
}

.burger span.is-open {
  background: transparent;
}
.burger span.is-open::before {
  transform: rotate(45deg);
}
.burger span.is-open::after {
  transform: rotate(-45deg);
}

.sheet {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
  height: calc(100vh - var(--chrome-h));
  padding: clamp(2rem, 8vw, 3.5rem) var(--page-pad);
  background: var(--paper);
  border-bottom: 2px solid var(--ink);
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent calc(var(--rule-size) - 1px),
    var(--rule) calc(var(--rule-size) - 1px),
    var(--rule) var(--rule-size)
  );
}

.sheet__list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.sheet__list a {
  transition: color 0.2s var(--ease), transform 0.25s var(--ease);
}

.sheet__list a:hover {
  color: var(--orange);
  transform: translateX(8px);
}

.sheet-enter-active,
.sheet-leave-active {
  transition: opacity 0.28s var(--ease), transform 0.28s var(--ease);
}

.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@media (max-width: 760px) {
  .chrome__tabs,
  .lights {
    display: none;
  }

  .chrome__brand,
  .burger {
    display: grid;
  }
}
</style>
