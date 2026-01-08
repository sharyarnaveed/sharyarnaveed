<script setup>
defineProps({
    theexpert: String,
    logoimg: String,
    theotherlogo: String
});
</script>

<template>
  <div class="skill-item">
    <div class="skill-info">
      <h4 class="skill-title">{{ theexpert }}</h4>
    </div>
    <div class="skill-logos">
      <div class="logo-wrapper">
        <img :src="logoimg" :alt="theexpert" />
      </div>
      <div v-if="theotherlogo" class="logo-wrapper">
        <img :src="theotherlogo" alt="Secondary skill" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s var(--ease-out-expo);
}

.skill-item:hover {
  padding-left: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-info {
  flex: 1;
}

.skill-title {
  font-family: var(--writingfont);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.skill-logos {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: 10px;
  padding: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.3s var(--ease-out-expo);
}

.logo-wrapper:hover {
  transform: scale(1.1);
  background: #ffffff;
  border-color: var(--bg-dark);
}

.logo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>