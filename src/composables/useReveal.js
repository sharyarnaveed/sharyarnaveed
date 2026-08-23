import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Reveals every `[data-reveal]` descendant of the returned root ref once it
 * scrolls into view. Returns a ref to bind to the section wrapper.
 */
export function useReveal(options = {}) {
  const root = ref(null);
  let observer = null;

  onMounted(() => {
    const targets = root.value?.querySelectorAll("[data-reveal]");
    if (!targets?.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px", ...options }
    );

    targets.forEach((el) => observer.observe(el));
  });

  onBeforeUnmount(() => observer?.disconnect());

  return { root };
}
