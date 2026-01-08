<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Food Website',
    description: 'A visually appealing and responsive food website showcasing culinary delights with modern design.',
    link: 'https://github.com/sharyarnaveed/Food-Website',
    image: 'https://images.unsplash.com/photo-1722891067479-5fd39edbfc3d?q=80&w=1582&auto=format&fit=crop',
    tags: ['Vue.js', 'CSS', 'Responsive'],
    year: '2024'
  },
  {
    id: 2,
    title: 'Car Vista',
    description: 'A sleek and modern car showroom website featuring an elegant display of the latest vehicles.',
    link: 'https://github.com/sharyarnaveed/Car-Vista',
    image: 'https://images.unsplash.com/photo-1676136449197-babffb1125f0?q=80&w=1527&auto=format&fit=crop',
    tags: ['JavaScript', 'UI/UX', 'Animation'],
    year: '2024'
  },
  {
    id: 3,
    title: 'Clinic Management',
    description: 'A robust clinic management system streamlining patient records and administrative tasks.',
    link: 'https://github.com/sharyarnaveed/clinic',
    image: 'https://images.unsplash.com/photo-1701014159251-f86a81a6fe13?q=80&w=1563&auto=format&fit=crop',
    tags: ['PHP', 'MySQL', 'Dashboard'],
    year: '2024'
  },
  {
    id: 4,
    title: 'ProSensia',
    description: 'A startup focused on predictive maintenance for air conditioning systems using IoT.',
    link: 'https://prosensia.pk/',
    image: 'https://images.unsplash.com/photo-1721041011353-298585b7c8f6?q=80&w=1527&auto=format&fit=crop',
    tags: ['Vue.js', 'IoT', 'Analytics'],
    year: '2025'
  },
  {
    id: 5,
    title: 'Quiz Master',
    description: 'A dynamic quiz website offering interactive and engaging quizzes with score tracking.',
    link: 'https://github.com/sharyarnaveed/Quiz-Master',
    image: 'https://images.unsplash.com/photo-1722269160081-5bce2d5fdde2?q=80&w=1632&auto=format&fit=crop',
    tags: ['JavaScript', 'Interactive', 'Game'],
    year: '2024'
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
            <a :href="projects[0].link" target="_blank" class="card-link">
              <span>View Project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
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
          <a :href="project.link" target="_blank" class="card-link-wrapper">
            <div class="card-inner">
              <div class="card-visual">
                <div class="image-wrapper">
                  <img :src="project.image" :alt="project.title" />
                  <div class="image-overlay"></div>
                </div>
                <div class="card-number">0{{ index + 2 }}</div>
                <div class="hover-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </div>
              <div class="card-info">
                <div class="card-meta">
                  <span class="card-year">{{ project.year }}</span>
                  <div class="card-tags-mini">
                    <span v-for="(tag, tagIndex) in project.tags.slice(0, 2)" :key="tag" class="tag-mini">
                      {{ tag }}{{ tagIndex < Math.min(project.tags.length, 2) - 1 ? ' · ' : '' }}
                    </span>
                  </div>
                </div>
                <h3 class="card-title">{{ project.title }}</h3>
                <p class="card-description">{{ project.description }}</p>
              </div>
            </div>
          </a>
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
  grid-template-columns: 1.2fr 1fr;
  min-height: 480px;
}

.project-card.featured .card-visual {
  position: relative;
  overflow: hidden;
}

.project-card.featured .image-wrapper {
  height: 100%;
}

.project-card.featured .image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  padding: 3rem;
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
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0a0a0a;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.project-card.featured .card-description {
  font-family: var(--writingfont);
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--writingfont);
  font-size: 0.85rem;
  font-weight: 600;
  color: #0a0a0a;
  text-decoration: none;
  padding: 1rem 1.5rem;
  background: #0a0a0a;
  color: white;
  border-radius: 100px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  width: fit-content;
}

.card-link:hover {
  background: #1a1a1a;
  transform: translateX(5px);
  gap: 1rem;
}

.card-link svg {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-link:hover svg {
  transform: translate(3px, -3px);
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
  transform: translateY(-10px) scale(1.01);
}

.card-link-wrapper {
  text-decoration: none;
  color: inherit;
  display: block;
}

.projects-grid .card-inner {
  display: flex;
  flex-direction: column;
}

.projects-grid .card-visual {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.projects-grid .image-wrapper {
  height: 100%;
}

.projects-grid .image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.hover-arrow {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(10px) rotate(-45deg) scale(0.8);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.hover-arrow svg {
  color: #0a0a0a;
  transition: transform 0.3s ease;
}

.projects-grid .project-card:hover .hover-arrow {
  opacity: 1;
  transform: translateY(0) rotate(0deg) scale(1);
}

.projects-grid .project-card:hover .hover-arrow svg {
  animation: arrowBounce 0.6s ease 0.2s;
}

@keyframes arrowBounce {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(3px, -3px); }
}

.projects-grid .card-info {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-tags-mini {
  display: flex;
}

.tag-mini {
  font-family: var(--writingfont);
  font-size: 0.7rem;
  color: #888;
  letter-spacing: 0.02em;
}

.projects-grid .card-title {
  font-family: var(--headingfont);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #0a0a0a;
  transition: color 0.3s ease;
  position: relative;
  display: inline-block;
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
  font-size: 0.9rem;
  color: #777;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive */
@media (max-width: 480px) {
  .projects-section {
    padding: 0 1rem 3rem;
  }

  .project-card.featured .card-inner {
    grid-template-columns: 1fr;
  }

  .project-card.featured .card-visual {
    height: 220px;
  }

  .project-card.featured .card-info {
    padding: 1.5rem;
  }

  .project-card.featured .card-title {
    font-size: 1.5rem;
  }

  .project-card.featured .card-description {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .card-link {
    padding: 0.875rem 1.25rem;
    font-size: 0.8rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .projects-grid .card-visual {
    height: 180px;
  }

  .projects-grid .card-info {
    padding: 1rem;
    gap: 0.5rem;
  }

  .projects-grid .card-title {
    font-size: 1.15rem;
  }

  .projects-grid .card-description {
    font-size: 0.85rem;
  }

  .card-number {
    font-size: 0.65rem;
    padding: 0.4rem 0.75rem;
  }

  .hover-arrow {
    width: 40px;
    height: 40px;
    top: 1rem;
    right: 1rem;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .projects-section {
    padding: 0 1.5rem 3rem;
  }

  .project-card.featured .card-inner {
    grid-template-columns: 1fr;
  }

  .project-card.featured .card-visual {
    height: 280px;
  }

  .project-card.featured .card-info {
    padding: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .projects-grid .card-visual {
    height: 200px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .projects-section {
    padding: 0 2rem 4rem;
  }

  .project-card.featured .card-inner {
    grid-template-columns: 1fr 1fr;
    min-height: 400px;
  }

  .project-card.featured .card-info {
    padding: 2rem;
  }

  .project-card.featured .card-title {
    font-size: 1.75rem;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .projects-grid .card-visual {
    height: 180px;
  }

  .projects-grid .card-title {
    font-size: 1.2rem;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .projects-section {
    padding: 0 3rem 4rem;
  }

  .project-card.featured .card-inner {
    min-height: 440px;
  }
}
</style>
