<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import navbar from "../components/navbar.vue";
import contactsection from "../components/contactsection.vue";

const username = "sharyarnaveed";
const repos = ref([]);
const loading = ref(true);
const error = ref("");

const swatches = ["yellow", "pink", "blue", "green", "mint", "lilac"];

const visibleRepos = computed(() =>
  [...repos.value].sort((a, b) => {
    if (b.stargazers_count !== a.stargazers_count) {
      return b.stargazers_count - a.stargazers_count;
    }
    return new Date(b.updated_at) - new Date(a.updated_at);
  })
);

const stats = computed(() => ({
  total: repos.value.length,
  stars: repos.value.reduce((sum, repo) => sum + repo.stargazers_count, 0),
  forks: repos.value.reduce((sum, repo) => sum + repo.forks_count, 0),
}));

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const formatRepoName = (name) => name.replace(/[-_]/g, " ");

const fetchRepos = async () => {
  loading.value = true;
  error.value = "";

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`,
      { headers: { Accept: "application/vnd.github+json" } }
    );

    if (!response.ok) {
      throw new Error("Could not load GitHub projects right now.");
    }

    repos.value = await response.json();
  } catch (err) {
    error.value =
      err instanceof Error
        ? err.message
        : "Something went wrong while fetching projects.";
  } finally {
    loading.value = false;
  }
};

onMounted(fetchRepos);
</script>

<template>
  <navbar />

  <main class="page">
    <div class="shell">
      <header class="page__head">
        <RouterLink to="/" class="btn btn--sm">&larr; Back home</RouterLink>
        <a class="btn btn--sm btn--yellow" :href="`https://github.com/${username}`" target="_blank" rel="noopener">
          @{{ username }}
        </a>
      </header>

      <section class="intro">
        <p class="scrawl intro__scrawl">everything else &darr;</p>
        <h1 class="display display--lg intro__title">Playground</h1>
        <p class="hand intro__sub">
          Real repositories fetched live from GitHub. Clean architecture,
          experiments, and products in one place.
          <span class="spark">&#10035;</span>
        </p>

        <ul v-if="!loading && !error" class="intro__stats">
          <li class="sticky" style="--tilt: -2deg">
            <p class="display intro__stat-value">{{ stats.total }}</p>
            <p class="stamp">Repositories</p>
          </li>
          <li class="sticky sticky--blue" style="--tilt: 1.5deg">
            <p class="display intro__stat-value">{{ stats.stars }}</p>
            <p class="stamp">Total stars</p>
          </li>
          <li class="sticky sticky--pink" style="--tilt: -1deg">
            <p class="display intro__stat-value">{{ stats.forks }}</p>
            <p class="stamp">Total forks</p>
          </li>
        </ul>
      </section>

      <section v-if="!loading && !error" class="grid">
        <article
          v-for="(repo, i) in visibleRepos"
          :key="repo.id"
          class="card repo"
          :style="{ '--tilt': i % 2 ? '0.5deg' : '-0.5deg' }"
        >
          <header class="repo__top">
            <span class="stamp">{{ String(i + 1).padStart(2, "0") }}</span>
            <span class="tag tag--paper repo__badge">
              {{ repo.private ? "Private" : "Public" }}
            </span>
          </header>

          <h2 class="display repo__name">{{ formatRepoName(repo.name) }}</h2>

          <p class="hand repo__desc">
            {{ repo.description || "No description added yet." }}
          </p>

          <p class="stamp repo__meta">
            <span v-if="repo.language" class="hl" :class="`hl--${swatches[i % swatches.length]}`">
              {{ repo.language }}
            </span>
            <span>Updated {{ formatDate(repo.updated_at) }}</span>
          </p>

          <ul v-if="repo.topics?.length" class="repo__topics">
            <li v-for="topic in repo.topics.slice(0, 4)" :key="topic" class="chip">
              {{ topic }}
            </li>
          </ul>

          <div class="repo__actions">
            <a class="btn btn--sm btn--ink" :href="repo.html_url" target="_blank" rel="noopener">
              Repository
            </a>
            <a
              v-if="repo.homepage"
              class="btn btn--sm btn--yellow"
              :href="repo.homepage"
              target="_blank"
              rel="noopener"
            >
              Live &rarr;
            </a>
          </div>
        </article>
      </section>

      <section v-if="loading" class="state">
        <span class="loader" aria-hidden="true"></span>
        <p class="hand">Loading repositories from GitHub&hellip;</p>
      </section>

      <section v-if="error" class="state">
        <p class="hand">{{ error }}</p>
        <button class="btn btn--ink" type="button" @click="fetchRepos">Try again</button>
      </section>
    </div>
  </main>

  <contactsection />
</template>

<style scoped>
.page {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  padding-top: calc(var(--chrome-h) + clamp(1.5rem, 4vw, 2.5rem));
  padding-bottom: var(--section-gap);
}

.page__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
}

/* ---- intro ---- */

.intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: clamp(2.5rem, 6vw, 4rem);
}

.intro__scrawl {
  margin-bottom: 0.5rem;
  font-size: 1.35rem;
  color: var(--ink-faint);
  transform: rotate(-4deg) translateX(0.4rem);
}

.intro__title {
  transform: rotate(-1deg);
}

.intro__sub {
  max-width: 46ch;
  margin-top: 1.1rem;
  font-size: clamp(1rem, 1.9vw, 1.2rem);
  color: var(--ink-soft);
}

.intro__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: clamp(1rem, 3vw, 1.75rem);
  width: 100%;
  margin-top: clamp(2rem, 5vw, 3rem);
}

.intro__stat-value {
  font-size: clamp(1.7rem, 3.5vw, 2.3rem);
  line-height: 1;
  margin-bottom: 0.3rem;
}

/* ---- grid ---- */

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  gap: clamp(1.25rem, 3vw, 2rem);
  margin-top: clamp(3rem, 7vw, 4.5rem);
}

.repo {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.25rem;
  transform: rotate(var(--tilt));
}

.repo:hover {
  transform: rotate(0deg) translate(-2px, -4px);
}

.repo__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.repo__badge {
  box-shadow: none;
  padding: 0.2rem 0.5rem;
  font-size: 0.6rem;
}

.repo__name {
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  text-transform: none;
  overflow-wrap: anywhere;
}

.repo__desc {
  flex: 1;
  font-size: 0.95rem;
  color: var(--ink-soft);
}

.repo__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.9rem;
}

.repo__topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.chip {
  padding: 0.2rem 0.5rem;
  border: 1.5px solid var(--ink);
  border-radius: 3px;
  font-family: var(--font-stamp);
  font-size: 0.58rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  opacity: 0.7;
}

.repo__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

/* ---- states ---- */

.state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding-block: clamp(4rem, 12vw, 8rem);
  text-align: center;
}

.loader {
  width: 34px;
  height: 34px;
  border: 3px solid var(--ink);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin-slow 0.9s linear infinite;
}
</style>
