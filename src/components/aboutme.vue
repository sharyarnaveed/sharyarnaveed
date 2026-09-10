<script setup>
import { ref } from "vue";
import { useReveal } from "../composables/useReveal";

const { root } = useReveal({ threshold: 0.1 });

/* Drop a photo at public/me.jpg to replace the monogram card. */
const PHOTO_SRC = "/me.jpg";
const hasPhoto = ref(true);

const focuses = [
  { label: "Full Stack", tone: "tag--orange", tilt: "-3deg" },
  { label: "Frontend", tone: "tag--green", tilt: "2deg" },
  { label: "Mobile Apps", tone: "tag--pink", tilt: "-2deg" },
  { label: "Backend and APIs", tone: "tag--blue", tilt: "3deg" },
  { label: "AI Agents and LLMs", tone: "tag--lilac", tilt: "-2deg" },
];

const stats = [
  { value: "2+", label: "Years experience", tone: "", tilt: "-2deg" },
  { value: "15+", label: "Projects completed", tone: "sticky--blue", tilt: "1.5deg" },
  { value: "750+", label: "Play Store app users", tone: "sticky--pink", tilt: "-1deg" },
];
</script>

<template>
  <section id="about" ref="root" class="section about">
    <div class="shell">
      <header class="about__head" data-reveal>
        <p class="scrawl about__scrawl">about me &darr;</p>
        <h2 class="doodle-box display display--md about__title">What&rsquo;s up</h2>
      </header>

      <div class="about__grid">
        <figure class="polaroid about__photo" data-reveal style="--tilt: -4deg">
          <span class="tape tape--tl" aria-hidden="true"></span>
          <img
            v-if="hasPhoto"
            class="polaroid__img"
            :src="PHOTO_SRC"
            alt="Portrait of Sharyar Naveed, web and creative developer"
            loading="lazy"
            @error="hasPhoto = false"
          />
          <div v-else class="polaroid__img about__mono" aria-hidden="true">SN</div>
          <figcaption class="polaroid__caption">that&rsquo;s me, Islamabad &rsquo;26</figcaption>
        </figure>

        <div class="about__body">
          <p class="hand about__lede" data-reveal style="--delay: 0.08s">
            I&rsquo;m a passionate web developer from
            <span class="hl">Islamabad, Pakistan</span>, specializing in creating beautiful
            and functional digital experiences.
            <span class="spark">&#10035;</span>
          </p>

          <p class="about__copy" data-reveal style="--delay: 0.14s">
            For 2+ years I&rsquo;ve shipped production web and mobile products with
            React.js, Next.js and Node.js, backed by Supabase and Appwrite. Lately most
            of my time goes into AI agents, tool calling workflows and fine tuning
            language models for domain specific use cases. I own projects from
            architecture through deployment.
          </p>

          <ul class="about__tags" data-reveal style="--delay: 0.2s">
            <li v-for="f in focuses" :key="f.label">
              <span class="tag" :class="f.tone" :style="{ '--tilt': f.tilt }">
                {{ f.label }}
              </span>
            </li>
          </ul>

          <div class="about__cta" data-reveal style="--delay: 0.26s">
            <a class="btn btn--ink" href="mailto:sharyarmalik430@gmail.com">Let&rsquo;s talk</a>
            <span class="scrawl about__hint">usually reply within 24 hours</span>
          </div>
        </div>
      </div>

      <ul class="about__stats">
        <li
          v-for="(s, i) in stats"
          :key="s.label"
          class="sticky"
          :class="s.tone"
          :style="{ '--tilt': s.tilt, '--delay': `${i * 0.08}s` }"
          data-reveal
        >
          <p class="display about__stat-value">{{ s.value }}</p>
          <p class="stamp">{{ s.label }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  margin-bottom: clamp(2rem, 5vw, 3.25rem);
}

.about__scrawl {
  font-size: 1.3rem;
  color: var(--ink-faint);
  transform: rotate(-4deg);
}

.about__title {
  transform: rotate(-1deg);
}

.about__grid {
  display: grid;
  grid-template-columns: minmax(200px, 280px) 1fr;
  gap: clamp(1.75rem, 5vw, 4rem);
  align-items: start;
}

.about__photo {
  --ratio: 4 / 5;
  position: sticky;
  top: calc(var(--chrome-h) + 2rem);
}

.about__mono {
  display: grid;
  place-items: center;
  background: var(--yellow);
  font-family: var(--font-display);
  font-size: 3.5rem;
  color: var(--ink);
}

.about__body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 0.5rem;
}

.about__lede {
  font-size: clamp(1.15rem, 2.3vw, 1.6rem);
  line-height: 1.75;
  max-width: 34ch;
}

.about__copy {
  max-width: 56ch;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: var(--ink-soft);
}

.about__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.7rem;
}

.about__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.about__hint {
  font-size: 1.15rem;
  color: var(--ink-faint);
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: clamp(1.25rem, 3vw, 2rem);
  margin-top: clamp(3rem, 7vw, 5rem);
}

.about__stat-value {
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  line-height: 1;
  margin-bottom: 0.35rem;
}

@media (max-width: 820px) {
  .about__grid {
    grid-template-columns: 1fr;
  }

  .about__photo {
    position: relative;
    top: auto;
    max-width: 240px;
  }
}
</style>
