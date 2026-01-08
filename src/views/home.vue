<script setup>
import { onMounted } from "vue";
import navbar from "../components/navbar.vue";
import projects from "../components/projectdisplay.vue";
import aboutme from "../components/aboutme.vue";
import technical from "@/components/technical.vue";

// Intersection Observer for scroll animations
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  // Floating elements animation
  const floatingElements = document.querySelectorAll(".floating-element");
  floatingElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.5}s`;
  });
});
</script>

<template>
  <navbar />

  <main class="homemain">
    <section class="hero">
      <!-- Floating decorative elements -->
      <div class="floating-elements">
        <div class="floating-element paper" style="top: 15%; left: 75%">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <div class="floating-element paper" style="top: 25%; right: 8%">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <div class="floating-element paper" style="top: 55%; right: 12%">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <div class="floating-element paper" style="top: 70%; left: 8%">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
            />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
      </div>

      <div class="hero-center">
        <div class="hero-name">
          <div class="name-artistic">
            <span class="letter-decorative">S</span>
            <span class="name-main">haryar</span>
            <span class="name-superscript">(26)</span>
          </div>
        </div>
        
        <a href="/resume.pdf" target="_blank" class="resume-btn animate-on-scroll">
          <span class="btn-text">Get Resume</span>
          <span class="btn-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </span>
        </a>
      </div>

      <div class="hero-tagline animate-on-scroll">
        <p>Web Developer and Creative Developer based</p>
        <p>in Pakistan. Passionate about code and design.</p>
      </div>
    </section>
  </main>

  <!-- Section Divider -->
  <div class="section-divider">
    <div class="section-divider-icon"></div>
  </div>

  <!-- Projects Section -->
  <main id="work" class="projectconnn">
    <div class="work-header animate-on-scroll">
      <div class="work-header-top">
        <span class="work-label">Portfolio</span>
        <span class="work-count">05 Projects</span>
      </div>
      <h2 class="work-title">
        <span class="work-title-line">Selected</span>
        <span class="work-title-line accent">Work<span class="title-dot"></span></span>
      </h2>
      <p class="work-description">Crafting digital experiences through thoughtful design and clean code</p>
    </div>
    <projects />
  </main>

  <!-- About Section -->
  <main id="about" class="aboutconn">
    <div class="section-header animate-on-scroll">
      <span class="section-number">02</span>
      <h2 class="section-title">About Me</h2>
    </div>
    <aboutme />
  </main>

  <!-- Technical Expertise -->
  <main class="technicalconn">
    <div class="section-header animate-on-scroll">
      <span class="section-number">03</span>
      <h2 class="section-title">Skills & Expertise</h2>
    </div>
    
    <!-- Full Stack Frameworks -->
    <div class="skill-category animate-on-scroll">
      <span class="category-label">Full Stack Frameworks</span>
      <div class="techdiv">
        <technical
          theexpert="Next.js"
          logoimg="src/components/icons/nextjs.svg"
        />
        <technical
          theexpert="Nuxt.js"
          logoimg="src/components/icons/nuxt.svg"
        />
      </div>
    </div>

    <!-- Frontend -->
    <div class="skill-category animate-on-scroll">
      <span class="category-label">Frontend</span>
      <div class="techdiv">
        <technical
          theexpert="Vue.js"
          logoimg="src/components/icons/vue.svg"
        />
        <technical
          theexpert="React"
          logoimg="src/components/icons/react.svg"
        />
        <technical
          theexpert="Tailwind CSS"
          logoimg="src/components/icons/tailwind.svg"
        />
      </div>
    </div>

    <!-- Mobile -->
    <div class="skill-category animate-on-scroll">
      <span class="category-label">Mobile</span>
      <div class="techdiv">
        <technical
          theexpert="React Native"
          logoimg="src/components/icons/reactnative.svg"
        />
      </div>
    </div>

    <!-- Backend -->
    <div class="skill-category animate-on-scroll">
      <span class="category-label">Backend</span>
      <div class="techdiv">
        <technical
          theexpert="PHP"
          logoimg="src/components/icons/php.svg"
        />
        <technical
          theexpert="Express.js"
          logoimg="src/components/icons/express.svg"
        />
      </div>
    </div>

    <!-- Database & BaaS -->
    <div class="skill-category animate-on-scroll">
      <span class="category-label">Database & BaaS</span>
      <div class="techdiv">
        <technical
          theexpert="MySQL"
          logoimg="src/components/icons/mysql.svg"
        />
        <technical
          theexpert="Supabase"
          logoimg="src/components/icons/supabase.svg"
        />
        <technical
          theexpert="Appwrite"
          logoimg="src/components/icons/appwrite.svg"
        />
      </div>
    </div>

    <!-- DevOps & Tools -->
    <div class="skill-category animate-on-scroll">
      <span class="category-label">DevOps & Tools</span>
      <div class="techdiv">
        <technical
          theexpert="Git"
          logoimg="src/components/icons/git.svg"
        />
        <technical
          theexpert="GitHub Actions"
          logoimg="src/components/icons/github.svg"
        />
      </div>
    </div>
  </main>

  <!-- Footer Divider -->
  <div class="footer-divider"></div>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <h3>Let's work together</h3>
        <p>Have a project in mind? Let's create something amazing.</p>
        <a href="mailto:sharyarmalik430@gmail.com" class="footer-email"
          >sharyarmalik430@gmail.com</a
        >
      </div>
      <div class="footer-right">
        <div class="footer-links">
          <a href="https://www.instagram.com/sharyar_naveed/" target="_blank"
            >Instagram</a
          >
          <a
            href="https://www.linkedin.com/in/sharyar-naveed-a3b14a27b/"
            target="_blank"
            >LinkedIn</a
          >
          <a href="https://github.com/sharyarnaveed" target="_blank">GitHub</a>
        </div>
        <p class="footer-copy">© 2026 Sharyar Naveed. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Hero Section - Black & White Artistic */
.homemain {
  min-height: 100vh;
  background: #0a0a0a;
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
  width: 100%;
  max-width: 100vw;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6rem var(--section-padding, clamp(1rem, 5vw, 4rem)) 2rem;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
}

.floating-element {
  position: absolute;
  color: #fff;
  opacity: 0.7;
  animation: floatAround 8s ease-in-out infinite;
  transform: rotate(var(--rotation, 15deg));
}

.floating-element:nth-child(1) {
  --rotation: -20deg;
  animation-delay: 0s;
}
.floating-element:nth-child(2) {
  --rotation: 25deg;
  animation-delay: 1s;
}
.floating-element:nth-child(3) {
  --rotation: -10deg;
  animation-delay: 2s;
}
.floating-element:nth-child(4) {
  --rotation: 30deg;
  animation-delay: 1.5s;
}

@keyframes floatAround {
  0%,
  100% {
    transform: rotate(var(--rotation, 15deg)) translate(0, 0);
  }
  25% {
    transform: rotate(calc(var(--rotation, 15deg) + 5deg))
      translate(10px, -15px);
  }
  50% {
    transform: rotate(calc(var(--rotation, 15deg) - 3deg)) translate(-5px, 10px);
  }
  75% {
    transform: rotate(calc(var(--rotation, 15deg) + 8deg)) translate(15px, 5px);
  }
}

/* Hero Center Content */
.hero-center {
  text-align: center;
  position: relative;
  z-index: 3;
}

.edition-label {
  display: inline-block;
  font-family: var(--writingfont);
  font-size: 0.7rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.15em;
  text-transform: lowercase;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s var(--ease-out-expo);
}

.edition-label.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Artistic Name Typography */
.hero-name {
  margin-bottom: 3rem;
}

.name-artistic {
  display: flex;
  align-items: baseline;
  justify-content: center;
  position: relative;
  font-family: "Playfair Display", Georgia, serif;
  color: #fff;
}

.letter-decorative {
  font-size: clamp(10rem, 24vw, 20rem);
  font-weight: 400;
  font-style: italic;
  line-height: 0.8;
  margin-right: -0.5rem;
  position: relative;
  animation: fadeInUp 1s var(--ease-out-expo) 0.2s forwards;
  opacity: 0;
  transform: translateY(50px);
}

.letter-decorative::before {
  content: "";
  position: absolute;
  bottom: 10%;
  left: -20%;
  width: 60%;
  height: 60%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50% 50% 50% 0;
  transform: rotate(-15deg);
}

.name-main {
  font-size: clamp(5rem, 14vw, 12rem);
  font-weight: 400;
  letter-spacing: -0.02em;
  animation: fadeInUp 1s var(--ease-out-expo) 0.4s forwards;
  opacity: 0;
  transform: translateY(50px);
}

.name-superscript {
  font-family: var(--writingfont);
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-left: 0.5rem;
  align-self: flex-start;
  margin-top: 1rem;
  animation: fadeInUp 1s var(--ease-out-expo) 0.6s forwards;
  opacity: 0;
  transform: translateY(20px);
}

/* Resume Button */
.resume-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  margin-top: 2.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  color: #fff;
  font-family: var(--writingfont);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.resume-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  transform: translateX(-100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.resume-btn:hover {
  color: #0a0a0a;
  border-color: #fff;
}

.resume-btn:hover::before {
  transform: translateX(0);
}

.btn-text {
  position: relative;
  z-index: 1;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.resume-btn:hover .btn-icon {
  transform: translateY(2px);
  animation: bounce 0.6s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

/* Hero Tagline */
.hero-tagline {
  font-family: var(--writingfont);
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  text-align: left;
  max-width: 380px;
  position: absolute;
  bottom: 8%;
  left: 5%;
  z-index: 10;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.8s var(--ease-out-expo);
}

.hero-tagline.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-tagline p {
  margin: 0;
}

/* Animation utility classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s var(--ease-out-expo);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 968px) {
  .hero-tagline {
    position: relative;
    bottom: auto;
    left: auto;
    text-align: center;
    max-width: 100%;
    margin-top: 2rem;
  }

  .letter-decorative::before {
    display: none;
  }
}

@media (max-width: 640px) {
  .name-artistic {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .letter-decorative {
    margin-right: 0;
    margin-bottom: -1.5rem;
  }

  .letter-decorative::before {
    display: none;
  }

  .name-main {
    margin-top: 0;
  }

  .name-superscript {
    position: absolute;
    top: 0;
    right: 5%;
    font-size: 0.7rem;
  }

  .hero-center {
    width: 100%;
    padding: 0 1rem;
  }

  .resume-btn {
    padding: 0.85rem 1.5rem;
    font-size: 0.75rem;
    margin-top: 2rem;
  }
}

/* Section Styles */
.section-header {
  padding: 4rem var(--section-padding, clamp(1rem, 5vw, 4rem)) 2rem;
  max-width: 1400px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s var(--ease-out-expo);
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-number {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
}

.section-title {
  font-family: var(--headingfont);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-top: 0.75rem;
}

/* Section Divider */
.section-divider {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: relative;
}

.section-divider::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  max-width: 600px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ddd 20%, #ddd 80%, transparent);
}

.section-divider-icon {
  width: 12px;
  height: 12px;
  border: 1px solid #ddd;
  transform: rotate(45deg);
  background: #fff;
  position: relative;
  z-index: 1;
}

/* Projects Section */
.projectconnn {
  min-height: 100vh;
  padding-bottom: 8rem;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 50%, #f5f5f5 100%);
  position: relative;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}

.projectconnn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 80px;
  background: linear-gradient(180deg, transparent, #ddd);
}

/* Work Header Styles */
.work-header {
  padding: 6rem var(--section-padding, clamp(1rem, 5vw, 4rem)) 4rem;
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.work-header-top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.work-label {
  font-family: var(--writingfont);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: #888;
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  background: white;
}

.work-count {
  font-family: var(--writingfont);
  font-size: 0.7rem;
  font-weight: 500;
  color: #aaa;
  letter-spacing: 0.1em;
}

.work-title {
  font-family: var(--headingfont);
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  margin-bottom: 1.5rem;
}

.work-title-line {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.2em;
}

.work-title-line.accent {
  font-style: italic;
  font-weight: 400;
  position: relative;
}

.title-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #0a0a0a;
  border-radius: 50%;
  margin-left: 0.1em;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

.work-description {
  font-family: var(--writingfont);
  font-size: 1rem;
  color: #777;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.7;
}

/* About Section */
.aboutconn {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}

.aboutconn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 800px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.08) 70%, transparent);
}

/* Technical Section */
.technicalconn {
  padding: 4rem 0 8rem;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}

.technicalconn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 800px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,0,0,0.06) 30%, rgba(0,0,0,0.06) 70%, transparent);
}

.skill-category {
  max-width: 600px;
  margin: 0 auto 2rem;
  width: 100%;
  padding: 0 var(--section-padding, clamp(1rem, 5vw, 4rem));
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s var(--ease-out-expo);
}

.skill-category.visible {
  opacity: 1;
  transform: translateY(0);
}

.category-label {
  display: block;
  font-family: var(--writingfont);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #999;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.techdiv {
  width: 100%;
}

/* Footer Divider */
.footer-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 70%, transparent);
  position: relative;
}

/* Footer */
.site-footer {
  background: #0a0a0a;
  color: white;
  padding: 6rem var(--section-padding, clamp(1rem, 5vw, 4rem));
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.footer-left h3 {
  font-family: var(--headingfont);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-left p {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1.5rem;
}

.footer-email {
  font-size: 1.25rem;
  color: white;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.3s ease;
}

.footer-email:hover {
  color: rgba(255, 255, 255, 0.7);
}

.footer-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.footer-copy {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.4);
}

/* Responsive for sections */
@media (max-width: 480px) {
  .hero {
    padding: 5rem 1rem 2rem;
    min-height: 100svh;
  }

  .hero-center {
    padding: 0 0.5rem;
  }

  .name-artistic {
    flex-wrap: wrap;
  }

  .letter-decorative {
    font-size: clamp(6rem, 30vw, 10rem);
  }

  .name-main {
    font-size: clamp(3rem, 15vw, 5rem);
  }

  .name-superscript {
    font-size: 0.7rem;
    margin-top: 0.5rem;
  }

  .hero-tagline {
    font-size: 0.8rem;
    padding: 0 0.5rem;
    position: relative;
    bottom: auto;
    left: auto;
    text-align: center;
    margin-top: 2rem;
  }

  .floating-elements {
    display: none;
  }

  .section-header {
    padding: 3rem 1rem 1.5rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-number {
    font-size: 0.75rem;
  }

  .work-header {
    padding: 4rem 1rem 2rem;
  }

  .work-title-line {
    font-size: 2.5rem;
  }

  .work-label {
    font-size: 0.6rem;
    padding: 0.4rem 0.75rem;
  }

  .work-count {
    font-size: 0.6rem;
  }

  .work-description {
    font-size: 0.9rem;
  }

  .title-dot {
    width: 8px;
    height: 8px;
  }

  .skill-category {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }

  .category-label {
    font-size: 0.65rem;
  }

  .technicalconn {
    padding: 3rem 0 5rem;
  }

  .site-footer {
    padding: 4rem 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-left h3 {
    font-size: 1.75rem;
  }

  .footer-email {
    font-size: 1rem;
    word-break: break-word;
  }

  .footer-right {
    align-items: center;
  }

  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .section-divider {
    padding: 1.5rem 0;
  }

  .section-divider::before {
    width: 80%;
  }

  .section-divider-icon {
    width: 10px;
    height: 10px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .hero {
    padding: 5rem 1.5rem 2rem;
    min-height: 100svh;
  }

  .letter-decorative {
    font-size: clamp(7rem, 25vw, 12rem);
  }

  .name-main {
    font-size: clamp(4rem, 12vw, 7rem);
  }

  .hero-tagline {
    position: relative;
    bottom: auto;
    left: auto;
    text-align: center;
    max-width: 100%;
    margin-top: 2rem;
  }

  .floating-elements {
    opacity: 0.4;
  }

  .section-header {
    padding: 3.5rem 1.5rem 1.5rem;
  }

  .work-header {
    padding: 5rem 1.5rem 3rem;
  }

  .work-title-line {
    font-size: 3.5rem;
  }

  .skill-category {
    padding: 0 1.5rem;
  }

  .technicalconn {
    padding: 3rem 0 6rem;
  }

  .site-footer {
    padding: 5rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }

  .footer-left h3 {
    font-size: 2rem;
  }

  .footer-right {
    align-items: center;
  }

  .footer-links {
    margin-bottom: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hero {
    padding: 6rem 2rem 2rem;
  }

  .section-header {
    padding: 4rem 2rem 2rem;
  }

  .work-header {
    padding: 5rem 2rem 3rem;
  }

  .work-title-line {
    font-size: 4.5rem;
  }

  .skill-category {
    padding: 0 2rem;
  }

  .site-footer {
    padding: 5rem 2rem;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .footer-left h3 {
    font-size: 2rem;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .hero {
    padding: 6rem 3rem 2rem;
  }

  .section-header {
    padding: 4rem 3rem 2rem;
  }

  .work-header {
    padding: 6rem 3rem 4rem;
  }

  .skill-category {
    padding: 0 3rem;
  }

  .site-footer {
    padding: 6rem 3rem;
  }
}
</style>
