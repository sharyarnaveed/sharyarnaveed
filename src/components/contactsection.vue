<script setup>
import { ref } from "vue";
import { useReveal } from "../composables/useReveal";

const { root } = useReveal({ threshold: 0.08 });

const EMAIL = "sharyarmalik430@gmail.com";

/* Drop files at public/photo-1.jpg and public/photo-2.jpg to fill these slots. */
const photos = ref([
  { src: "/photo-1.jpg", caption: "desk, 2am", tilt: "-6deg", swatch: "a", ok: true },
  { src: "/photo-2.jpg", caption: "ship it", tilt: "5deg", swatch: "b", ok: true },
]);

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sharyar_naveed/",
    tone: "tag--pink",
    tilt: "-3deg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sharyar-naveed-a3b14a27b/",
    tone: "tag--blue",
    tilt: "2deg",
  },
  {
    label: "GitHub",
    href: "https://github.com/sharyarnaveed",
    tone: "tag--green",
    tilt: "-2deg",
  },
];

const tickerItems = [
  "open for work",
  "web development",
  "creative development",
  "based in pakistan",
];
</script>

<template>
  <footer id="contact" ref="root" class="contact">
    <div class="ticker" aria-hidden="true">
      <div class="ticker__track">
        <span v-for="n in 2" :key="n" class="ticker__group">
          <span v-for="item in tickerItems" :key="item + n" class="ticker__item">
            {{ item }}
            <i class="spark">&#10035;</i>
          </span>
        </span>
      </div>
    </div>

    <div class="shell contact__inner">
      <div class="smiley" data-reveal aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5">
          <circle cx="50" cy="50" r="46" fill="var(--yellow)" />
          <path d="M34 40h.01M66 40h.01" stroke-linecap="round" stroke-width="9" />
          <path d="M31 60c5.5 7.5 11.5 11 19 11s13.5-3.5 19-11" stroke-linecap="round" />
        </svg>
      </div>

      <h2 class="display display--xl contact__title" data-reveal style="--delay: 0.06s">
        Let&rsquo;s talk
      </h2>

      <p class="hand contact__lede" data-reveal style="--delay: 0.12s">
        Have a project in mind? Let&rsquo;s create something amazing.
      </p>

      <div class="contact__card" data-reveal style="--delay: 0.18s">
        <figure class="polaroid contact__photo" :style="{ '--tilt': photos[0].tilt }">
          <span class="tape tape--top" aria-hidden="true"></span>
          <img
            v-if="photos[0].ok"
            class="polaroid__img"
            :src="photos[0].src"
            :alt="photos[0].caption"
            loading="lazy"
            @error="photos[0].ok = false"
          />
          <div v-else class="polaroid__img contact__slot contact__slot--a">
            <span aria-hidden="true">+</span>
          </div>
          <figcaption class="polaroid__caption">{{ photos[0].caption }}</figcaption>
        </figure>

        <div class="contact__center">
          <h3 class="doodle-box display display--md">Contact</h3>

          <div class="sticky contact__note" style="--tilt: 1.5deg">
            <p class="hand contact__note-text">
              got an idea, a weird bug or a deadline? send it over. I read
              everything.
            </p>
            <a class="btn btn--ink btn--sm" :href="`mailto:${EMAIL}`">
              {{ EMAIL }}
            </a>
          </div>

          <p class="scrawl contact__hint">open for new work and good problems</p>
        </div>

        <figure
          class="polaroid contact__photo contact__photo--r"
          :style="{ '--tilt': photos[1].tilt }"
        >
          <span class="tape tape--top" aria-hidden="true"></span>
          <img
            v-if="photos[1].ok"
            class="polaroid__img"
            :src="photos[1].src"
            :alt="photos[1].caption"
            loading="lazy"
            @error="photos[1].ok = false"
          />
          <div v-else class="polaroid__img contact__slot contact__slot--b">
            <span aria-hidden="true">+</span>
          </div>
          <figcaption class="polaroid__caption">{{ photos[1].caption }}</figcaption>
        </figure>
      </div>

      <ul class="contact__socials" data-reveal style="--delay: 0.24s">
        <li v-for="s in socials" :key="s.label">
          <a
            class="tag"
            :class="s.tone"
            :style="{ '--tilt': s.tilt }"
            :href="s.href"
            target="_blank"
            rel="noopener"
          >
            {{ s.label }}
          </a>
        </li>
      </ul>

      <p class="contact__legal stamp">&copy; 2026 Sharyar Naveed. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.contact {
  position: relative;
  padding-bottom: clamp(2.5rem, 6vw, 4rem);
  border-top: 2px solid var(--ink);
  background: var(--paper-card);
}

/* ---- ticker ---- */

.ticker {
  overflow: hidden;
  padding-block: 0.6rem;
  background: var(--ink);
  color: var(--paper-card);
  border-bottom: 2px solid var(--ink);
}

.ticker__track {
  display: flex;
  width: max-content;
  animation: marquee 26s linear infinite;
}

.ticker__group {
  display: flex;
}

.ticker__item {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  padding-inline: 1.25rem;
  font-family: var(--font-stamp);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  white-space: nowrap;
}

/* ---- body ---- */

.contact__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: clamp(3rem, 8vw, 5.5rem);
}

.smiley {
  width: clamp(84px, 12vw, 124px);
  color: var(--ink);
  animation: wiggle 6s ease-in-out infinite;
}

.contact__title {
  margin-top: 1.25rem;
}

.contact__lede {
  max-width: 34ch;
  margin-top: 1rem;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  color: var(--ink-soft);
}

.contact__card {
  display: grid;
  grid-template-columns: minmax(120px, 190px) minmax(0, 1fr) minmax(120px, 190px);
  align-items: center;
  gap: clamp(1.25rem, 4vw, 3rem);
  width: 100%;
  margin-top: clamp(2.5rem, 6vw, 4rem);
}

.contact__photo {
  --ratio: 1 / 1;
}

.contact__slot {
  display: grid;
  place-items: center;
  border: 2px dashed rgba(23, 20, 15, 0.28);
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: rgba(23, 20, 15, 0.35);
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(23, 20, 15, 0.06) 0 10px,
    transparent 10px 20px
  );
}

.contact__slot--a {
  background-color: var(--blue);
}
.contact__slot--b {
  background-color: var(--mint);
}

.contact__center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.contact__note {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  max-width: 30ch;
}

.contact__note-text {
  font-size: 1rem;
  color: var(--ink);
}

.contact__note .btn {
  text-transform: none;
  letter-spacing: 0.02em;
}

.contact__hint {
  font-size: 1.2rem;
  color: var(--ink-faint);
  transform: rotate(-2deg);
}

.contact__socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem 0.85rem;
  margin-top: clamp(2.25rem, 5vw, 3.25rem);
}

.contact__legal {
  margin-top: clamp(2rem, 5vw, 3rem);
}

@media (max-width: 760px) {
  .contact__card {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .contact__photo {
    max-width: 170px;
  }

  .contact__photo--r {
    display: none;
  }
}
</style>
