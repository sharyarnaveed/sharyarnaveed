<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'TimeTablr',
    description: `Developed a student timetable mobile application, published on the Google Play Store. The application provides real-time access to class schedules and sends push notifications to students 10 minutes before each class. Currently used by over 750 university students.`,
    github: 'https://github.com/sharyarnaveed/timetablrmobile.git',
    live: 'https://play.google.com/store/apps/details?id=com.sharyar_naveed.timetablr',
    image: 'image.png',
    tags: ['React Native', 'Expo', 'Push Notifications', 'Express.js'],
    year: '2025'
  },
  {
    id: 2,
    title: 'Spelling Bee',
    description: 'Built a real-time Spelling Bee multiplayer application using Appwrite as the database and Nuxt.js as the FullStack Framework.',
    github: 'https://github.com/sharyarnaveed/spelling-bee.git',
    live: 'https://spelling-bee.appwrite.network/',
    image: 'spellinhome.png',
    tags: ['Nuxt.js', 'Appwrite', 'Vue.js', 'Socket.io'],
    year: '2025'
  },
  {
    id: 3,
    title: 'Bonny',
    description: `Developed and maintained the backend system for a location-based restaurant discount platform, including interactive map integration and Stripe payment processing for coupon purchases.`,
    live: 'https://www.bonny.at/',
    image: '/bonny.png',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Maps API'],
    year: '2025'
  },
  {
    id: 4,
    title: 'Plyzrx',
    description: `Developed the backend for Plyzrx, a UNO tournament gaming platform with APIs for admin-managed tournaments, user participation, match creation, and reward distribution.`,
    live: 'https://www.plyzrx.com/',
    image: '/plyzx.png',
    tags: ['Next.js', 'ShadCN', 'Appwrite', 'Gaming'],
    year: '2025'
  },
  {
    id: 5,
    title: 'Prepzy',
    description: 'Smart plans, personalized study, and expert tools designed to help you achieve top results.',
    live: 'https://prepzy.tech/',
    image: '/fyp.png',
    tags: ['Next.js', 'ShadCN', 'Supabase', 'AI/ML', 'Python'],
    year: 'Currently Working'
  }
]);

const hoveredProject = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  }, { threshold: 0.1 });

  const section = document.querySelector('.projects-section');
  if (section) observer.observe(section);
});
</script>

<template>
  <section class="projects-section" :class="{ 'visible': isVisible }">
    <div class="projects-container">
      <!-- Featured Project (First one larger) -->
      <div 
        class="project-card featured"
        :style="{ '--delay': '0s' }"
        @mouseenter="hoveredProject = 0"
        @mouseleave="hoveredProject = null"
      >
        <div class="card-inner">
          <div class="card-visual">
            <div class="image-wrapper">
              <img :src="projects[0].image" :alt="projects[0].title" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-number">01</div>
          </div>
          <div class="card-info">
            <div class="card-meta">
              <span class="card-year">{{ projects[0].year }}</span>
              <div class="card-tags">
                <span v-for="tag in projects[0].tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
            <h3 class="card-title">{{ projects[0].title }}</h3>
            <p class="card-description">{{ projects[0].description }}</p>
            <div class="card-links">
              <a v-if="projects[0].live" :href="projects[0].live" target="_blank" class="card-link primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>Live Demo</span>
                <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a v-if="projects[0].github" :href="projects[0].github" target="_blank" class="card-link secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid Projects -->
      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects.slice(1)" 
          :key="project.id"
          class="project-card"
          :class="{ 'hovered': hoveredProject === index + 1 }"
          :style="{ '--delay': (index + 1) * 0.1 + 's' }"
          @mouseenter="hoveredProject = index + 1"
          @mouseleave="hoveredProject = null"
        >
          <div class="card-inner">
            <div class="card-visual">
              <div class="image-wrapper">
                <img :src="project.image" :alt="project.title" />
                <div class="image-overlay"></div>
              </div>
              <div class="card-number">0{{ index + 2 }}</div>
            </div>
            <div class="card-info">
              <div class="card-meta">
                <span class="card-year">{{ project.year }}</span>
              </div>
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-description">{{ project.description }}</p>
              <div class="card-tags-grid">
                <span v-for="tag in project.tags" :key="tag" class="tag-pill">{{ tag }}</span>
              </div>
              <div class="card-actions">
                <a v-if="project.live" :href="project.live" target="_blank" class="action-btn primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span>Live</span>
                </a>
                <a v-if="project.github" :href="project.github" target="_blank" class="action-btn secondary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--section-padding, clamp(1rem, 5vw, 4rem)) 4rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Featured Card */
.project-card.featured {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.03);
  position: relative;
}

.project-card.featured::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(135deg, transparent 40%, rgba(0, 0, 0, 0.1) 50%, transparent 60%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.project-card.featured:hover::before {
  opacity: 1;
}

.projects-section.visible .project-card.featured {
  opacity: 1;
  transform: translateY(0);
}

.project-card.featured:hover {
  border-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.project-card.featured .card-inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  min-height: 360px;
  max-height: 400px;
}

.project-card.featured .card-visual {
  position: relative;
  overflow: hidden;
  max-height: 400px;
}

.project-card.featured .image-wrapper {
  height: 100%;
  max-height: 400px;
}

.project-card.featured .image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
  filter: saturate(0.9);
}

.project-card.featured:hover .image-wrapper img {
  transform: scale(1.05);
  filter: saturate(1);
}

.card-number {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-family: var(--headingfont);
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  letter-spacing: 0.1em;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.1) 100%);
  pointer-events: none;
}

.project-card.featured .card-info {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-year {
  font-family: var(--writingfont);
  font-size: 0.7rem;
  font-weight: 600;
  color: #999;
  letter-spacing: 0.1em;
  padding: 0.35rem 0.75rem;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 4px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-family: var(--writingfont);
  font-size: 0.65rem;
  font-weight: 500;
  color: #666;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.tag::before {
  content: '#';
  opacity: 0.5;
}

.project-card.featured .card-title {
  font-family: var(--headingfont);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0a0a0a;
  margin-bottom: 0.75rem;
  line-height: 1.1;
}

.project-card.featured .card-description {
  font-family: var(--writingfont);
  font-size: 0.95rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

/* Card Links Container */
.card-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--writingfont);
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.875rem 1.25rem;
  border-radius: 100px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  width: fit-content;
}

.card-link.primary {
  background: #0a0a0a;
  color: white;
}

.card-link.primary:hover {
  background: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card-link.secondary {
  background: transparent;
  color: #0a0a0a;
  border: 1.5px solid rgba(0, 0, 0, 0.15);
}

.card-link.secondary:hover {
  border-color: rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.03);
  transform: translateY(-2px);
}

.card-link .arrow {
  transition: transform 0.3s ease;
}

.card-link:hover .arrow {
  transform: translate(2px, -2px);
}

/* Grid Cards */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.projects-grid .project-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

/* Subtle gradient border on hover */
.projects-grid .project-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 21px;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(0, 0, 0, 0.06) 25%,
    rgba(0, 0, 0, 0.12) 50%,
    rgba(0, 0, 0, 0.06) 75%,
    transparent 100%
  );
  background-size: 300% 300%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease, background-position 0.8s ease;
}

.projects-grid .project-card:hover::before {
  opacity: 1;
  background-position: 100% 100%;
}

/* Inner glow effect */
.projects-grid .project-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px transparent;
  transition: box-shadow 0.4s ease;
  pointer-events: none;
}

.projects-grid .project-card:hover::after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.projects-section.visible .projects-grid .project-card {
  opacity: 1;
  transform: translateY(0);
  transition-delay: var(--delay);
}

.projects-grid .project-card:hover {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.08),
    0 8px 24px rgba(0, 0, 0, 0.04);
  transform: translateY(-8px) scale(1.01);
}

.projects-grid .card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.projects-grid .card-visual {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.projects-grid .image-wrapper {
  height: 100%;
}

.projects-grid .image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
  filter: saturate(0.85) brightness(0.98);
}

.projects-grid .project-card:hover .image-wrapper img {
  transform: scale(1.08);
  filter: saturate(1) brightness(1);
}

/* Shine overlay effect on hover */
.projects-grid .card-visual::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.15),
    transparent
  );
  transform: skewX(-20deg);
  transition: left 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.projects-grid .project-card:hover .card-visual::after {
  left: 150%;
}

.projects-grid .card-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

/* Tags Grid for Grid Cards */
.card-tags-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.5rem 0;
}

.tag-pill {
  font-family: var(--writingfont);
  font-size: 0.65rem;
  font-weight: 500;
  color: #555;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.3rem 0.6rem;
  border-radius: 100px;
  letter-spacing: 0.02em;
  transition: all 0.3s ease;
}

.projects-grid .project-card:hover .tag-pill {
  background: rgba(0, 0, 0, 0.08);
}

.projects-grid .card-title {
  font-family: var(--headingfont);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #0a0a0a;
  transition: color 0.3s ease;
  position: relative;
  display: inline-block;
  width: fit-content;
}

.projects-grid .card-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #0a0a0a;
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.projects-grid .project-card:hover .card-title::after {
  width: 100%;
}

.projects-grid .project-card:hover .card-title {
  color: #0a0a0a;
}

.projects-grid .card-description {
  font-family: var(--writingfont);
  font-size: 0.85rem;
  color: #777;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Action Buttons for Grid Cards */
.card-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.75rem;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--writingfont);
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.55rem 0.9rem;
  border-radius: 100px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.action-btn.primary {
  background: #0a0a0a;
  color: white;
}

.action-btn.primary:hover {
  background: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.action-btn.secondary {
  background: transparent;
  color: #0a0a0a;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
}

.action-btn.secondary:hover {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.03);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 480px) {
  .projects-section {
    padding: 0 1rem 3rem;
  }

  .project-card.featured .card-inner {
    grid-template-columns: 1fr;
    max-height: none;
  }

  .project-card.featured .card-visual {
    height: 200px;
    max-height: 200px;
  }

  .project-card.featured .card-info {
    padding: 1.5rem;
  }

  .project-card.featured .card-title {
    font-size: 1.5rem;
  }

  .project-card.featured .card-description {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }

  .card-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-link {
    padding: 0.75rem 1rem;
    font-size: 0.75rem;
    justify-content: center;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .projects-grid .card-visual {
    height: 160px;
  }

  .projects-grid .card-info {
    padding: 1.25rem;
    gap: 0.4rem;
  }

  .projects-grid .card-title {
    font-size: 1.1rem;
  }

  .projects-grid .card-description {
    font-size: 0.8rem;
  }

  .card-number {
    font-size: 0.65rem;
    padding: 0.4rem 0.75rem;
  }

  .card-actions {
    flex-wrap: wrap;
  }

  .action-btn {
    padding: 0.5rem 0.8rem;
    font-size: 0.65rem;
  }

  .tag-pill {
    font-size: 0.6rem;
    padding: 0.25rem 0.5rem;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .projects-section {
    padding: 0 1.5rem 3rem;
  }

  .project-card.featured .card-inner {
    grid-template-columns: 1fr;
    max-height: none;
  }

  .project-card.featured .card-visual {
    height: 220px;
    max-height: 220px;
  }

  .project-card.featured .card-info {
    padding: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .projects-grid .card-visual {
    height: 170px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .projects-section {
    padding: 0 2rem 4rem;
  }

  .project-card.featured .card-inner {
    grid-template-columns: 1fr 1.2fr;
    min-height: 320px;
    max-height: 360px;
  }

  .project-card.featured .card-info {
    padding: 2rem;
  }

  .project-card.featured .card-title {
    font-size: 1.6rem;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .projects-grid .card-visual {
    height: 160px;
  }

  .projects-grid .card-title {
    font-size: 1.1rem;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .projects-section {
    padding: 0 3rem 4rem;
  }

  .project-card.featured .card-inner {
    min-height: 340px;
    max-height: 380px;
  }
}
</style>
