<script setup>
import { computed, reactive } from "vue";
import { RouterLink } from "vue-router";
import { useReveal } from "../composables/useReveal";

const { root } = useReveal({ threshold: 0.08 });

const projects = [
  {
    title: "TimeTablr",
    role: "Mobile App",
    year: "2025",
    featured: true,
    note: "class schedules, Redis caching + AI agents, used by 750+ students",
    description:
      "A cross-platform student timetable app published on the Google Play Store and used by 750+ university students. Originally built as a Vue.js PWA, then migrated to React Native (Expo) for better performance and native capabilities. Added Redis caching (cache-aside with batched lookups) to cut database load, AI agent and tool-calling workflows for intelligent in-app features, and automated push notifications 10 minutes before every class.",
    tags: ["React Native (Expo)", "Redis", "AI Agents", "Express.js", "Push Notifications"],
    image: "/timetablr.png",
    github: "https://github.com/sharyarnaveed/timetablrmobile.git",
    live: "https://www.timetablr.tech/",
    tone: "yellow",
  },
  {
    title: "Peacock Wholesale OMS",
    role: "Full Stack Developer",
    year: "2025",
    featured: true,
    note: "multi-portal order management for a global K-Beauty wholesaler",
    description:
      "Built and maintained an advanced multi-portal Order Management System (OMS) for Peacock Wholesale, a global K-Beauty wholesale platform. Developed a scalable full-stack system using Next.js, React, TypeScript, and Supabase, featuring vendor management, order assignment workflows, payout and transaction management through Wise and Airwallex, CRM automation, logistics handling, and finance reconciliation. Integrated Intercom for real-time customer support and ticket synchronization. Implemented role-based access control, multi-tenant portals, automated payout routing, inventory workflows, document management, and analytics dashboards to streamline wholesale operations and partner coordination.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Intercom", "Airwallex"],
    image: "/peacock-wholesale.png",
    live: "https://peacockwholesale.io/products",
    tone: "ink",
  },
  {
    title: "Prepzy",
    role: "Final Year Project",
    year: "Currently working",
    note: "a fine-tuned Qwen 2.5 tutor for FSc and pre-medical students",
    description:
      "An AI-powered exam preparation platform for Pakistani FSc and pre-medical students. I fine-tuned the Qwen 2.5 3B Instruct model on a custom-curated FSc curriculum dataset to create a domain-specific AI tutor that answers subject questions with academic accuracy. The platform analyzes each user's quiz scores and performance patterns to recommend targeted practice and flag weak topics, and ships an AI quiz generator, smart document summarizer, study planner, and performance dashboard for NMDCAT and ETEA aspirants.",
    tags: ["Qwen 2.5", "Fine-Tuning", "Next.js", "Python", "Supabase"],
    image: "/fyp.png",
    live: "https://prepzy.tech/",
    tone: "ink",
  },
  {
    title: "Medistry",
    role: "Landing Platform",
    year: "2026",
    note: "conversion-focused NMDCAT prep platform for medical aspirants",
    description:
      "Built and deployed a conversion-focused NMDCAT prep platform for medical aspirants, featuring PMDC-aligned program pages, mentor profiles, social proof, and high-intent CTA flows for demo, diagnostics, and enrollment.",
    tags: ["Next.js", "EdTech", "Landing Page", "NMDCAT", "Conversion UI"],
    image: "/medistry.png",
    live: "https://www.medistry.pk/",
    tone: "yellow",
  },
  {
    title: "Bonny",
    role: "Backend",
    year: "2025",
    note: "maps, Stripe coupons + single-use QR redemption",
    description:
      "Built the complete backend for a location-based restaurant discount platform. Implemented Stripe payment processing for coupon purchases, interactive map integration for nearby restaurant discovery, and server-side QR code generation with single-use validation logic to prevent fraud, alongside RESTful APIs managing restaurants, payments, and real-time redemption workflows.",
    tags: ["Node.js", "Express.js", "Stripe API", "QR Code", "Maps API", "PostgreSQL"],
    image: "/bonny.png",
    live: "https://www.bonny.at/",
    tone: "ink",
  },
  {
    title: "Spelling Bee",
    role: "Realtime Game",
    year: "2025",
    note: "real-time multiplayer spelling battles",
    description:
      "Built a real-time Spelling Bee multiplayer application using Appwrite as the database and Nuxt.js as the FullStack Framework.",
    tags: ["Nuxt.js", "Appwrite", "Vue.js", "Socket.io"],
    image: "/spellinhome.png",
    github: "https://github.com/sharyarnaveed/spelling-bee.git",
    live: "https://spelling-bee.appwrite.network/",
    tone: "yellow",
  },
  {
    title: "Plyzrx",
    role: "Backend",
    year: "2025",
    note: "tournament, match and reward APIs for a UNO gaming platform",
    description:
      "Developed the backend and admin panel for Plyzrx, a UNO tournament gaming platform, with APIs supporting admin-managed tournaments, user participation, match creation, and reward distribution. Also built the marketing landing page.",
    tags: ["Next.js", "Node.js", "REST APIs", "Admin Panel"],
    image: "/plyzx.png",
    github: "https://github.com/sharyarnaveed/plyzrx.git",
    tone: "ink",
  },
];

const numbered = projects.map((p, i) => ({
  ...p,
  num: String(i + 1).padStart(2, "0"),
}));

const featured = computed(() => numbered.filter((p) => p.featured));
const rest = computed(() => numbered.filter((p) => !p.featured));

/* Several project shots aren't in public/ yet — fall back to a paper tile. */
const brokenImages = reactive(new Set());
const onImageError = (title) => brokenImages.add(title);
</script>

<template>
  <section id="work" ref="root" class="section work">
    <div class="shell">
      <header class="work__head" data-reveal>
        <p class="scrawl work__scrawl">curated by myself</p>
        <h2 class="display display--lg work__title">Featured works</h2>
        <p class="stamp work__count">{{ numbered.length }} projects &middot; 2025&ndash;2026</p>
      </header>

      <!-- featured pair -->
      <div class="work__feature">
        <article
          v-for="(p, i) in featured"
          :key="p.title"
          class="card feat"
          data-reveal
          :style="{ '--delay': `${i * 0.1}s` }"
        >
          <header class="feat__meta">
            <span class="stamp">{{ p.year }}</span>
            <span class="stamp">{{ p.num }}</span>
          </header>

          <div class="media">
            <img
              v-if="!brokenImages.has(p.title)"
              :src="p.image"
              :alt="p.title"
              loading="lazy"
              @error="onImageError(p.title)"
            />
            <div v-else class="media__fallback" aria-hidden="true">
              {{ p.title.charAt(0) }}
            </div>
          </div>

          <div class="feat__body">
            <h3 class="display display--md">{{ p.title }}</h3>
            <p class="hand feat__note">{{ p.note }}</p>

            <ul class="chips">
              <li v-for="t in p.tags.slice(0, 4)" :key="t" class="chip">{{ t }}</li>
            </ul>

            <div class="links">
              <a
                v-if="p.live"
                class="btn btn--sm btn--yellow"
                :href="p.live"
                target="_blank"
                rel="noopener"
              >
                Live demo &rarr;
              </a>
              <a
                v-if="p.github"
                class="btn btn--sm"
                :href="p.github"
                target="_blank"
                rel="noopener"
              >
                Source
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- notched panels -->
      <div class="work__panels">
        <article
          v-for="(p, i) in rest"
          :key="p.title"
          class="panel"
          :class="[`panel--${p.tone}`, { 'panel--flip': i % 2 === 1 }]"
          data-reveal
        >
          <span class="panel__tab stamp">Project {{ p.num }}</span>

          <div class="panel__body">
            <p class="panel__year stamp">{{ p.year }} &middot; {{ p.role }}</p>
            <h3 class="display display--md">{{ p.title }}</h3>
            <p class="hand panel__note">{{ p.note }}</p>

            <ul class="chips chips--onpanel">
              <li v-for="t in p.tags.slice(0, 4)" :key="t" class="chip">{{ t }}</li>
            </ul>

            <a
              v-if="p.live || p.github"
              class="panel__link stamp"
              :href="p.live || p.github"
              target="_blank"
              rel="noopener"
            >
              View project &rarr;
            </a>
          </div>

          <div class="panel__media media">
            <img
              v-if="!brokenImages.has(p.title)"
              :src="p.image"
              :alt="p.title"
              loading="lazy"
              @error="onImageError(p.title)"
            />
            <div v-else class="media__fallback" aria-hidden="true">
              {{ p.title.charAt(0) }}
            </div>
          </div>
        </article>
      </div>

      <div class="work__more" data-reveal>
        <RouterLink to="/projects" class="btn btn--ink">
          Show more projects &rarr;
        </RouterLink>
        <span class="scrawl work__more-note">everything lives on GitHub</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---- header ---- */

.work__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
}

.work__scrawl {
  margin-bottom: 0.5rem;
  font-size: 1.35rem;
  color: var(--ink-faint);
  transform: rotate(-4deg) translateX(0.5rem);
}

.work__title {
  transform: rotate(-1deg);
}

.work__count {
  margin-top: 0.6rem;
}

/* ---- shared media ---- */

.media {
  overflow: hidden;
  background: var(--paper-shade);
  border: 1px solid rgba(23, 20, 15, 0.15);
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
}

.media__fallback {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  min-height: 180px;
  background: var(--yellow);
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 5rem);
  color: var(--ink);
}

/* ---- chips ---- */

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  padding: 0.22rem 0.55rem;
  border: 1.5px solid currentColor;
  border-radius: 3px;
  font-family: var(--font-stamp);
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.72;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.35rem;
}

/* ---- featured pair ---- */

.work__feature {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(1.5rem, 3.5vw, 2.5rem);
}

.feat {
  display: flex;
  flex-direction: column;
  padding: 0.9rem;
}

.feat:nth-child(odd) {
  transform: rotate(-0.6deg);
}
.feat:nth-child(even) {
  transform: rotate(0.6deg);
}

.feat:hover {
  transform: rotate(0deg) translateY(-5px);
}

.feat__meta {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.7rem;
}

.feat .media {
  aspect-ratio: 16 / 11;
  border-radius: 3px;
}

.feat:hover .media img {
  transform: scale(1.05);
}

.feat__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.7rem;
  padding: 1.1rem 0.35rem 0.35rem;
}

.feat__body .links {
  margin-top: auto;
  padding-top: 0.5rem;
}

.feat__note {
  font-size: 1rem;
  color: var(--ink-soft);
}

/* ---- notched panels ---- */

.work__panels {
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3.5vw, 2.25rem);
  margin-top: clamp(3rem, 7vw, 5rem);
}

.panel {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(1.25rem, 3vw, 2.5rem);
  align-items: center;
  padding: clamp(1.5rem, 3.5vw, 2.5rem);
  padding-top: clamp(2.4rem, 4.5vw, 3.1rem);
  border: 2px solid var(--ink);
  box-shadow: 5px 7px 0 var(--ink);
  transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
}

.panel:hover {
  transform: translate(-2px, -4px);
  box-shadow: 8px 11px 0 var(--ink);
}

.panel--ink {
  background: var(--ink);
  color: #f7f4ec;
}

.panel--yellow {
  background: var(--yellow);
  color: var(--ink);
}

.panel--flip .panel__media {
  order: -1;
}

.panel__tab {
  position: absolute;
  top: 0;
  left: clamp(1.5rem, 3.5vw, 2.5rem);
  padding: 0.32rem 0.8rem;
  background: var(--paper-card);
  color: var(--ink);
  border: 2px solid var(--ink);
  border-top: none;
  border-radius: 0 0 5px 5px;
}

.panel--flip .panel__tab {
  left: auto;
  right: clamp(1.5rem, 3.5vw, 2.5rem);
}

.panel__body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.panel__year {
  color: inherit;
  opacity: 0.65;
}

.panel__note {
  font-size: clamp(0.95rem, 1.6vw, 1.1rem);
  opacity: 0.85;
  max-width: 40ch;
}

.panel__link {
  align-self: flex-start;
  margin-top: 0.35rem;
  padding-bottom: 2px;
  color: inherit;
  border-bottom: 2px solid currentColor;
  transition: gap 0.2s var(--ease), opacity 0.2s var(--ease);
}

.panel--ink .panel__link:hover {
  color: var(--yellow);
}

.panel--yellow .panel__link:hover {
  opacity: 0.6;
}

.panel__media {
  aspect-ratio: 16 / 10;
  border-radius: 3px;
  border-color: rgba(23, 20, 15, 0.35);
}

.panel:hover .panel__media img {
  transform: scale(1.05);
}

/* ---- footer of section ---- */

.work__more {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  margin-top: clamp(2.5rem, 6vw, 4rem);
}

.work__more-note {
  font-size: 1.15rem;
  color: var(--ink-faint);
  transform: rotate(-2deg);
}

@media (max-width: 780px) {
  .panel {
    grid-template-columns: 1fr;
  }

  .panel--flip .panel__media {
    order: 0;
  }

  .panel--flip .panel__tab {
    left: clamp(1.5rem, 3.5vw, 2.5rem);
    right: auto;
  }
}
</style>
