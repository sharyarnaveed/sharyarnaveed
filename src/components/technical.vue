<script setup>
defineProps({
  theexpert: { type: String, required: true },
  logoimg: { type: String, required: true },
  tone: { type: String, default: "yellow" },
  tilt: { type: String, default: "0deg" },
});
</script>

<template>
  <div class="tool" :class="`tool--${tone}`" :style="{ '--tilt': tilt }">
    <img class="tool__logo" :src="logoimg" :alt="`${theexpert} logo`" loading="lazy" />
    <span class="tool__name">{{ theexpert }}</span>
  </div>
</template>

<style scoped>
.tool {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 0.85rem;
  background: var(--swatch, var(--yellow));
  border-radius: 3px 8px 4px 9px;
  transform: rotate(var(--tilt)) skewX(-2deg);
  transition: transform 0.3s var(--ease-back), filter 0.3s var(--ease);
}

.tool:hover {
  transform: rotate(0deg) skewX(0deg) translateY(-3px);
  filter: saturate(1.15);
}

.tool__logo {
  width: 22px;
  height: 22px;
  object-fit: contain;
  flex-shrink: 0;
}

.tool__name {
  font-family: var(--font-stamp);
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--ink);
  white-space: nowrap;
}

.tool--yellow {
  --swatch: var(--yellow);
}
.tool--pink {
  --swatch: var(--pink);
}
.tool--blue {
  --swatch: var(--blue);
}
.tool--green {
  --swatch: var(--green);
}
.tool--mint {
  --swatch: var(--mint);
}
.tool--lilac {
  --swatch: var(--lilac);
}
.tool--orange {
  --swatch: var(--orange);
}
</style>
