<script setup>
import { onMounted, ref } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  }, { threshold: 0.2 });

  const section = document.querySelector('.about-section');
  if (section) observer.observe(section);
});
</script>

<template>
  <section class="about-section" :class="{ 'visible': isVisible }">
    <div class="about-content">
      <div class="about-text">
        <div class="about-intro">
          <span class="intro-label">Hello, I'm</span>
          <h2 class="about-name">
            <span>Sharyar</span>
            <span class="name-accent">Naveed</span>
          </h2>
        </div>

        <div class="about-description">
          <div class="description-line"></div>
          <p>
            I'm a passionate web developer from KPK, Pakistan, specializing in creating 
            beautiful and functional digital experiences.
          </p>
          <p>
            I work with organizations and individuals to build responsive, scalable web 
            products tailored to their unique needs. From concept to deployment, I bring 
            ideas to life with clean code and thoughtful design.
          </p>
        </div>

        <div class="about-cta">
          <a href="mailto:sharyarmalik430@gmail.com" class="cta-button">
            <span>Let's Talk</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
          <div class="cta-hint">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            Usually respond within 24 hours
          </div>
        </div>
      </div>

      <div class="about-image">
        <div class="image-wrapper">
          <img src="../assets/me.jpg" alt="Sharyar Naveed" />
          <div class="image-overlay"></div>
        </div>
        <div class="image-decoration">
          <div class="deco-circle"></div>
          <div class="deco-dots">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="about-stats">
      <div class="stat-item">
        <span class="stat-number">2+</span>
        <span class="stat-label">Years Experience</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">15+</span>
        <span class="stat-label">Projects Completed</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">10+</span>
        <span class="stat-label">Happy Clients</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem var(--section-padding, clamp(1rem, 5vw, 4rem)) 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.about-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.8s var(--ease-out-expo);
}

.about-section.visible .about-text {
  opacity: 1;
  transform: translateX(0);
}

.about-intro {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.intro-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.about-name {
  font-family: var(--headingfont);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.about-name span {
  display: block;
}

.name-accent {
  font-style: italic;
  font-family: var(--artisticfont);
  color: var(--text-primary);
}

.about-description {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.description-line {
  width: 60px;
  height: 2px;
  background: var(--bg-dark);
  border-radius: 2px;
}

.about-description p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-cta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--bg-dark);
  color: #ffffff;
  font-family: var(--writingfont);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 100px;
  text-decoration: none;
  transition: all 0.4s var(--ease-out-expo);
  width: fit-content;
  border: 1px solid var(--bg-dark);
}

.cta-button:hover {
  background: transparent;
  color: var(--bg-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translate(3px, -3px);
}

.cta-hint {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Image Section */
.about-image {
  position: relative;
  opacity: 0;
  transform: translateX(40px);
  transition: all 0.8s var(--ease-out-expo) 0.2s;
}

.about-section.visible .about-image {
  opacity: 1;
  transform: translateX(0);
}

.image-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s var(--ease-out-expo);
  filter: grayscale(30%);
}

.image-wrapper:hover img {
  transform: scale(1.05);
  filter: grayscale(0%);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.3) 100%);
  pointer-events: none;
}

.image-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: -1;
}

.deco-circle {
  width: 120px;
  height: 120px;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.deco-dots {
  position: absolute;
  bottom: -60px;
  left: -40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.deco-dots span {
  width: 6px;
  height: 6px;
  background: var(--bg-dark);
  border-radius: 50%;
  opacity: 0.2;
}

/* Stats */
.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s var(--ease-out-expo) 0.4s;
}

.about-section.visible .about-stats {
  opacity: 1;
  transform: translateY(0);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}

.stat-number {
  font-family: var(--headingfont);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Responsive */
@media (max-width: 640px) {
  .about-section {
    padding: 1.5rem 1rem 3rem;
    gap: 2.5rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-image {
    order: -1;
    max-width: 100%;
    margin: 0 auto;
  }

  .about-text {
    text-align: center;
    align-items: center;
    gap: 2rem;
  }

  .about-name {
    font-size: 2rem;
  }

  .about-description p {
    font-size: 0.95rem;
  }

  .description-line {
    margin: 0 auto;
  }

  .cta-button {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
  }

  .stat-item {
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
  }

  .stat-item:last-child {
    border-bottom: none;
  }

  .stat-number {
    font-size: 2rem;
  }
}

@media (min-width: 641px) and (max-width: 968px) {
  .about-section {
    padding: 2rem 2rem 4rem;
    gap: 3rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-image {
    order: -1;
    max-width: 400px;
    margin: 0 auto;
  }

  .about-text {
    text-align: center;
    align-items: center;
  }

  .about-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 969px) and (max-width: 1200px) {
  .about-section {
    padding: 2rem 3rem 4rem;
  }

  .about-content {
    gap: 3rem;
  }
}
</style>