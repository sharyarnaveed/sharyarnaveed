<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const username = "sharyarnaveed";
const repos = ref([]);
const loading = ref(true);
const error = ref("");

const visibleRepos = computed(() =>
  [...repos.value]
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at) - new Date(a.updated_at);
    })
);

const stats = computed(() => {
  const totalStars = repos.value.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repos.value.reduce((sum, repo) => sum + repo.forks_count, 0);
  return {
    total: repos.value.length,
    stars: totalStars,
    forks: totalForks,
  };
});

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
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Could not load GitHub projects right now.");
    }

    const data = await response.json();
    repos.value = data;
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Something went wrong while fetching projects.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchRepos();
});
</script>

<template>
  <main class="projects-page">
    <div class="noise"></div>

    <header class="projects-header">
      <RouterLink to="/" class="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        <span>Back Home</span>
      </RouterLink>
      <a :href="`https://github.com/${username}`" target="_blank" class="profile-link">@{{ username }}</a>
    </header>

    <section class="hero">
      <p class="eyebrow">GitHub Showcase</p>
      <h1>All Public Projects</h1>
      <p class="subtitle">
        Real repositories fetched live from GitHub. Clean architecture, experiments, and products in one place.
      </p>

      <div class="stats" v-if="!loading && !error">
        <div class="stat-card">
          <span class="stat-number">{{ stats.total }}</span>
          <span class="stat-label">Repositories</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ stats.stars }}</span>
          <span class="stat-label">Total Stars</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ stats.forks }}</span>
          <span class="stat-label">Total Forks</span>
        </div>
      </div>
    </section>

    <section class="repo-grid" v-if="!loading && !error">
      <article class="repo-card" v-for="repo in visibleRepos" :key="repo.id">
        <div class="repo-top">
          <h2>{{ formatRepoName(repo.name) }}</h2>
          <span class="visibility">{{ repo.private ? "Private" : "Public" }}</span>
        </div>

        <p class="repo-description">
          {{ repo.description || "No description added yet." }}
        </p>

        <div class="repo-meta">
          <span v-if="repo.language">{{ repo.language }}</span>
          <span>Updated {{ formatDate(repo.updated_at) }}</span>
        </div>

        <div class="repo-tags" v-if="repo.topics && repo.topics.length">
          <span v-for="topic in repo.topics.slice(0, 4)" :key="topic">{{ topic }}</span>
        </div>

        <div class="repo-actions">
          <a :href="repo.html_url" target="_blank" class="repo-btn dark">Repository</a>
          <a v-if="repo.homepage" :href="repo.homepage" target="_blank" class="repo-btn light">Live</a>
        </div>
      </article>
    </section>

    <section class="state" v-if="loading">
      <div class="loader"></div>
      <p>Loading repositories from GitHub...</p>
    </section>

    <section class="state" v-if="error">
      <p>{{ error }}</p>
      <button class="retry" @click="fetchRepos">Try Again</button>
    </section>
  </main>
</template>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding: 1.25rem var(--section-padding, clamp(1rem, 5vw, 4rem)) 4rem;
  background:
    radial-gradient(circle at 10% 10%, rgba(37, 211, 102, 0.16) 0%, transparent 40%),
    radial-gradient(circle at 90% 0%, rgba(0, 140, 255, 0.14) 0%, transparent 38%),
    linear-gradient(180deg, #f6fbff 0%, #fefcf8 45%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.04;
  background-image: radial-gradient(#000 1px, transparent 1px);
  background-size: 3px 3px;
}

.projects-header {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.back-link,
.profile-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-family: var(--writingfont);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid rgba(10, 10, 10, 0.12);
  border-radius: 999px;
  padding: 0.65rem 1rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.back-link:hover,
.profile-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.09);
}

.hero {
  max-width: 1280px;
  margin: 2.25rem auto 0;
}

.eyebrow {
  font-size: 0.76rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #5f646f;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.hero h1 {
  font-family: var(--headingfont);
  font-size: clamp(2.2rem, 6vw, 5.2rem);
  line-height: 1;
  letter-spacing: -0.03em;
}

.subtitle {
  margin-top: 1rem;
  max-width: 760px;
  color: #5b6272;
  font-size: clamp(0.95rem, 1.4vw, 1.1rem);
}

.stats {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(15, 15, 15, 0.08);
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-number {
  font-family: var(--headingfont);
  font-size: 1.8rem;
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #5b6272;
}

.repo-grid {
  max-width: 1280px;
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.repo-card {
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.92) 0%, rgba(246, 250, 255, 0.95) 100%);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 220px;
  box-shadow: 0 8px 20px rgba(13, 20, 33, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.repo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 28px rgba(13, 20, 33, 0.1);
}

.repo-top {
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
}

.repo-top h2 {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  text-transform: capitalize;
}

.visibility {
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.2rem 0.55rem;
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #5b6272;
  white-space: nowrap;
  align-self: flex-start;
}

.repo-description {
  margin-top: 0.7rem;
  color: #5f646f;
  font-size: 0.88rem;
  line-height: 1.6;
}

.repo-meta {
  margin-top: 0.8rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.repo-meta span {
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.06);
  padding: 0.25rem 0.55rem;
  font-size: 0.68rem;
  color: #4e5462;
}

.repo-tags {
  margin-top: 0.8rem;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.repo-tags span {
  font-size: 0.66rem;
  text-transform: lowercase;
  border-radius: 999px;
  border: 1px dashed rgba(0, 0, 0, 0.15);
  padding: 0.22rem 0.5rem;
  color: #4f5668;
}

.repo-actions {
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  gap: 0.5rem;
}

.repo-btn {
  flex: 1;
  text-align: center;
  border-radius: 10px;
  padding: 0.5rem 0.75rem;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.repo-btn.dark {
  background: #0a0a0a;
  color: #fff;
}

.repo-btn.light {
  border: 1px solid rgba(0, 0, 0, 0.14);
  background: #fff;
}

.state {
  max-width: 1280px;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  color: #4f5668;
}

.loader {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.13);
  border-top-color: #0a0a0a;
  animation: spin 0.7s linear infinite;
}

.retry {
  border: 1px solid #0a0a0a;
  background: transparent;
  border-radius: 999px;
  padding: 0.55rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1024px) {
  .repo-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .projects-page {
    padding-bottom: 2.8rem;
  }

  .projects-header {
    flex-wrap: wrap;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .repo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
