import { onBeforeUnmount, onMounted } from "vue";

// Images move only in response to scroll; no ticker or reactive frame updates.
export function useSceneMotion(rootRef) {
  let dispose = () => {};
  let preference;
  const configure = () => {
    dispose();
    const root = rootRef.value;
    if (!root || preference.matches || !window.IntersectionObserver) return;
    root.classList.add("has-motion");
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-seen");
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    root
      .querySelectorAll("[data-reveal]")
      .forEach((element) => reveal.observe(element));
    const layers = [...root.querySelectorAll("[data-parallax]")];
    if (!layers.length) {
      dispose = () => {
        reveal.disconnect();
        root.classList.remove("has-motion");
      };
      return;
    }
    let frame = 0,
      active = false,
      top = 0,
      height = 1,
      viewport = window.innerHeight;
    const update = () => {
      frame = 0;
      if (!active) return;
      const progress = root.classList.contains("campaign-hero")
        ? Math.max(0, Math.min(1, (window.scrollY - top) / height))
        : Math.max(
            0,
            Math.min(
              1,
              (window.scrollY + viewport - top) / (height + viewport),
            ),
          ) - 0.5;
      layers.forEach((layer) => {
        layer.style.transform = `translate3d(0,${(progress * Number(layer.dataset.parallax)).toFixed(2)}px,0)`;
      });
    };
    const schedule = () => {
      if (active && window.innerWidth > 900 && !frame)
        frame = requestAnimationFrame(update);
    };
    const refresh = () => {
      if (window.innerWidth <= 900) {
        layers.forEach((layer) => layer.style.removeProperty("transform"));
        return;
      }
      if (!active) return;
      const bounds = root.getBoundingClientRect();
      top = bounds.top + window.scrollY;
      height = bounds.height;
      viewport = window.innerHeight;
      schedule();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) {
          top = entry.boundingClientRect.top + window.scrollY;
          height = entry.boundingClientRect.height;
          viewport = window.innerHeight;
          schedule();
        }
      },
      { rootMargin: "80px" },
    );
    observer.observe(root);
    const sizes = new ResizeObserver(refresh);
    sizes.observe(root);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", refresh, { passive: true });
    dispose = () => {
      cancelAnimationFrame(frame);
      reveal.disconnect();
      root.classList.remove("has-motion");
      observer.disconnect();
      sizes.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", refresh);
      layers.forEach((layer) => layer.style.removeProperty("transform"));
    };
  };
  onMounted(() => {
    preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    preference.addEventListener("change", configure);
    configure();
  });
  onBeforeUnmount(() => {
    preference?.removeEventListener("change", configure);
    dispose();
  });
}
