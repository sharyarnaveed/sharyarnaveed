<script setup>
import { onMounted, ref } from 'vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50;
  });
});
</script>


<template>
    <header :class="{ 'scrolled': isScrolled }">
      <nav>
        <ul class="nav-left">
          <li><a href="#work">WORK</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="mailto:sharyarmalik430@gmail.com">HELLO</a></li>
        </ul>
        
        <div class="nav-center">
          <svg class="nav-star" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1">
            <line x1="16" y1="0" x2="16" y2="32"/>
            <line x1="0" y1="16" x2="32" y2="16"/>
            <line x1="4" y1="4" x2="28" y2="28"/>
            <line x1="28" y1="4" x2="4" y2="28"/>
          </svg>
        </div>
        
        <ul class="nav-right">
          <li><a href="https://www.instagram.com/sharyar_naveed/" target="_blank">INSTA</a></li>
          <li><a href="https://www.linkedin.com/in/sharyar-naveed-a3b14a27b/" target="_blank">LIN</a></li>
          <li><a href="https://github.com/sharyarnaveed" target="_blank">GIT</a></li>
        </ul>

        <button class="mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
          <span :class="{ 'active': mobileMenuOpen }"></span>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
        <ul>
          <li><a href="#work" @click="mobileMenuOpen = false">Work</a></li>
          <li><a href="#about" @click="mobileMenuOpen = false">About</a></li>
          <li><a href="mailto:sharyarmalik430@gmail.com" @click="mobileMenuOpen = false">Hello</a></li>
          <li><a href="https://www.instagram.com/sharyar_naveed/" target="_blank">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/sharyar-naveed-a3b14a27b/" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/sharyarnaveed" target="_blank">Github</a></li>
        </ul>
      </div>
    </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  padding: 1.5rem 0;
  transition: all 0.4s var(--ease-out-expo);
  animation: fadeInUp 0.8s var(--ease-out-expo) forwards;
}

header.scrolled {
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 1rem 0;
}

nav {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--section-padding, clamp(1rem, 5vw, 4rem));
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

.nav-left a,
.nav-right a {
  font-family: var(--writingfont);
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  letter-spacing: 0.1em;
  transition: all 0.3s var(--ease-out-expo);
  position: relative;
}

.nav-left a:hover,
.nav-right a:hover {
  color: #fff;
}

.nav-left a::after,
.nav-right a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #ffffff;
  transition: width 0.3s var(--ease-out-expo);
}

.nav-left a:hover::after,
.nav-right a:hover::after {
  width: 100%;
}

/* Light mode nav styling when scrolled on white sections */
header.light-mode:not(.scrolled) .nav-left a,
header.light-mode:not(.scrolled) .nav-right a {
  color: rgba(10, 10, 10, 0.7);
}

header.light-mode:not(.scrolled) .nav-left a:hover,
header.light-mode:not(.scrolled) .nav-right a:hover {
  color: #0a0a0a;
}

header.light-mode:not(.scrolled) .nav-left a::after,
header.light-mode:not(.scrolled) .nav-right a::after {
  background: #0a0a0a;
}

header.light-mode:not(.scrolled) .nav-star {
  color: rgba(10, 10, 10, 0.8);
}

.nav-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-star {
  color: rgba(255, 255, 255, 0.8);
  animation: rotateStar 20s linear infinite;
}

@keyframes rotateStar {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.mobile-toggle {
  display: none;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
}

.mobile-toggle span,
.mobile-toggle span::before,
.mobile-toggle span::after {
  display: block;
  width: 24px;
  height: 1px;
  background: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease;
}

.mobile-toggle span {
  top: 50%;
  transform: translate(-50%, -50%);
}

.mobile-toggle span::before {
  content: '';
  top: -8px;
}

.mobile-toggle span::after {
  content: '';
  top: 8px;
}

.mobile-toggle span.active {
  background: transparent;
}

.mobile-toggle span.active::before {
  top: 0;
  transform: translateX(-50%) rotate(45deg);
}

.mobile-toggle span.active::after {
  top: 0;
  transform: translateX(-50%) rotate(-45deg);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  padding: 5rem 2rem 2rem;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s var(--ease-out-expo);
  z-index: 9999;
}

.mobile-menu.open {
  visibility: visible;
  opacity: 1;
}

.mobile-menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.mobile-menu li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.mobile-menu li:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-menu a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  font-family: var(--writingfont);
  font-size: 0.85rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.mobile-menu a::after {
  content: '→';
  font-size: 0.75rem;
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
}

.mobile-menu a:hover {
  color: #fff;
  padding-left: 1rem;
}

.mobile-menu a:hover::after {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 768px) {
  .nav-left,
  .nav-right {
    display: none;
  }

  .nav-center {
    position: static;
    transform: none;
  }

  .mobile-toggle {
    display: block;
  z-index: 10001;}
  .mobile-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 2.5rem;
  }

  .mobile-menu ul {
    width: 100%;
    max-width: 280px;
  }

  .mobile-menu a {
    font-size: 0.8rem;
    padding: 0.9rem 0.5rem;
  }

  nav {
    padding: 0 1rem;
  }

  header {
    z-index: 10000;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  nav {
    padding: 0 2rem;
  }

  .nav-left,
  .nav-right {
    gap: 1.5rem;
  }

  .nav-left a,
  .nav-right a {
    font-size: 0.7rem;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  nav {
    padding: 0 3rem;
  }
}
</style>