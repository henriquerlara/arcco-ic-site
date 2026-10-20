import { onMounted, onBeforeUnmount, ref } from 'vue'

/**
 * Observa elementos com [data-reveal] e adiciona a classe "is-visible"
 * quando entram na viewport. Permite stagger via [data-reveal-delay].
 */
export function useScrollReveal(options = {}) {
  let observer = null

  onMounted(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document
        .querySelectorAll('[data-reveal]')
        .forEach((el) => el.classList.add('is-visible'))
      return
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      document
        .querySelectorAll('[data-reveal]')
        .forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = Number(el.dataset.revealDelay || 0)
            if (delay > 0) {
              el.style.transitionDelay = `${delay}ms`
            }
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -8% 0px',
      },
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}

/** Header translúcido após scroll. */
export function useStickyNav(threshold = 24) {
  const scrolled = ref(false)
  let onScroll

  onMounted(() => {
    onScroll = () => {
      scrolled.value = window.scrollY > threshold
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    if (onScroll) window.removeEventListener('scroll', onScroll)
  })

  return { scrolled }
}

/**
 * Progresso de etapas no scroll (linha do fluxo).
 * Retorna activeIndex (0-based) baseado em qual [data-step] está mais visível.
 */
export function useStepProgress(selector = '[data-step]') {
  const activeIndex = ref(0)
  const progress = ref(0)
  let observer = null
  let onScroll = null
  let track = null

  onMounted(() => {
    track = document.querySelector('[data-flow-track]')
    const steps = [...document.querySelectorAll(selector)]
    if (!steps.length) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      activeIndex.value = steps.length - 1
      progress.value = 1
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (!visible.length) return
        const idx = Number(visible[0].target.dataset.step)
        if (!Number.isNaN(idx)) activeIndex.value = idx
      },
      { threshold: [0.35, 0.55, 0.7], rootMargin: '-20% 0px -35% 0px' },
    )

    steps.forEach((el) => observer.observe(el))

    onScroll = () => {
      if (!track) return
      const rect = track.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.45
      const traveled = start - rect.top
      const span = Math.max(rect.height - vh * 0.35, 1)
      progress.value = Math.min(1, Math.max(0, traveled / span))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
    if (onScroll) window.removeEventListener('scroll', onScroll)
  })

  return { activeIndex, progress }
}
