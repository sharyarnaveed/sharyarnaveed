<script setup>
import technical from "./technical.vue";
import { useReveal } from "../composables/useReveal";

const { root } = useReveal({ threshold: 0.1 });

const groups = [
  {
    label: "Languages",
    items: [
      { theexpert: "JavaScript", logoimg: "/icons/javascript.svg", tone: "yellow", tilt: "-2deg" },
      { theexpert: "Python", logoimg: "/icons/python.svg", tone: "blue", tilt: "1.5deg" },
      { theexpert: "PHP", logoimg: "/icons/php.svg", tone: "lilac", tilt: "-1deg" },
      { theexpert: "SQL", logoimg: "/icons/sql.svg", tone: "mint", tilt: "2deg" },
      { theexpert: "C++", logoimg: "/icons/cpp.svg", tone: "pink", tilt: "-1.5deg" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { theexpert: "React.js", logoimg: "/icons/react.svg", tone: "blue", tilt: "-1.5deg" },
      { theexpert: "Next.js", logoimg: "/icons/nextjs.svg", tone: "yellow", tilt: "1deg" },
      { theexpert: "Vue.js", logoimg: "/icons/vue.svg", tone: "green", tilt: "-1deg" },
      { theexpert: "Nuxt.js", logoimg: "/icons/nuxt.svg", tone: "green", tilt: "1.5deg" },
      { theexpert: "Tailwind CSS", logoimg: "/icons/tailwind.svg", tone: "mint", tilt: "-2deg" },
      { theexpert: "HTML5", logoimg: "/icons/html5.svg", tone: "orange", tilt: "1deg" },
      { theexpert: "CSS3", logoimg: "/icons/css3.svg", tone: "lilac", tilt: "-1deg" },
    ],
  },
  {
    label: "Backend",
    items: [
      { theexpert: "Node.js", logoimg: "/icons/nodejs.svg", tone: "green", tilt: "1.5deg" },
      { theexpert: "Express.js", logoimg: "/icons/express.svg", tone: "yellow", tilt: "-1deg" },
      { theexpert: "REST APIs", logoimg: "/icons/restapi.svg", tone: "blue", tilt: "2deg" },
      { theexpert: "Redis", logoimg: "/icons/redis.svg", tone: "pink", tilt: "-1.5deg" },
    ],
  },
  {
    label: "Mobile",
    items: [
      {
        theexpert: "React Native (Expo)",
        logoimg: "/icons/reactnative.svg",
        tone: "blue",
        tilt: "-2deg",
      },
    ],
  },
  {
    label: "Databases & BaaS",
    items: [
      { theexpert: "PostgreSQL", logoimg: "/icons/postgresql.svg", tone: "blue", tilt: "-1.5deg" },
      { theexpert: "MongoDB", logoimg: "/icons/mongodb.svg", tone: "green", tilt: "1deg" },
      { theexpert: "Supabase", logoimg: "/icons/supabase.svg", tone: "mint", tilt: "2deg" },
      { theexpert: "Appwrite", logoimg: "/icons/appwrite.svg", tone: "pink", tilt: "-1deg" },
    ],
  },
  {
    label: "AI & LLMs",
    items: [
      { theexpert: "LLM Fine Tuning", logoimg: "/icons/finetune.svg", tone: "orange", tilt: "-2deg" },
      { theexpert: "AI Agents", logoimg: "/icons/aiagent.svg", tone: "lilac", tilt: "1.5deg" },
      { theexpert: "Tool Calling", logoimg: "/icons/toolcalling.svg", tone: "yellow", tilt: "-1deg" },
      { theexpert: "Prompt Engineering", logoimg: "/icons/prompt.svg", tone: "mint", tilt: "1deg" },
    ],
  },
  {
    label: "Tools & DevOps",
    items: [
      { theexpert: "Git", logoimg: "/icons/git.svg", tone: "orange", tilt: "1deg" },
      { theexpert: "GitHub Actions", logoimg: "/icons/github.svg", tone: "lilac", tilt: "-2deg" },
      { theexpert: "Docker", logoimg: "/icons/docker.svg", tone: "blue", tilt: "1.5deg" },
      { theexpert: "Nginx", logoimg: "/icons/nginx.svg", tone: "green", tilt: "-1deg" },
    ],
  },
];
</script>

<template>
  <section id="stack" ref="root" class="section stack">
    <div class="shell">
      <header class="stack__head" data-reveal>
        <p class="scrawl stack__scrawl">built with</p>
        <h2 class="display display--lg stack__title">Toolbox</h2>
      </header>

      <ul class="stack__rows">
        <li
          v-for="(g, i) in groups"
          :key="g.label"
          class="row"
          data-reveal
          :style="{ '--delay': `${i * 0.06}s` }"
        >
          <p class="row__label stamp">{{ g.label }}</p>
          <div class="row__items">
            <technical v-for="item in g.items" :key="item.theexpert" v-bind="item" />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.stack__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: clamp(1.75rem, 4.5vw, 3rem);
}

.stack__scrawl {
  margin-bottom: 0.5rem;
  font-size: 1.35rem;
  color: var(--ink-faint);
  transform: rotate(-4deg) translateX(0.4rem);
}

.stack__title {
  transform: rotate(-1deg);
}

.stack__rows {
  display: flex;
  flex-direction: column;
}

.row {
  display: grid;
  grid-template-columns: minmax(150px, 210px) 1fr;
  gap: 1rem clamp(1rem, 3vw, 2rem);
  align-items: center;
  padding-block: clamp(0.9rem, 2vw, 1.25rem);
  border-bottom: 1px dashed rgba(23, 20, 15, 0.2);
}

.row:first-child {
  border-top: 1px dashed rgba(23, 20, 15, 0.2);
}

.row__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 0.8rem;
}

@media (max-width: 700px) {
  .row {
    grid-template-columns: 1fr;
    gap: 0.7rem;
  }
}
</style>
