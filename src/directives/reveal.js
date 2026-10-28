// v-reveal: animasi "move in" saat elemen masuk viewport (scroll) atau saat
// pertama kali render (kalau elemen itu sudah terlihat begitu website dibuka,
// misalnya konten di dalam Hero).
//
// Pemakaian:
//   <div v-reveal>...</div>
//   <div v-reveal="{ delay: 150 }">...</div>
//   <div v-reveal="{ variant: 'left', delay: 100 }">...</div>
//
// variant tersedia: 'up' (default), 'left', 'right', 'scale'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const observer =
  typeof window !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      )
    : null

export default {
  mounted(el, binding) {
    const options = binding.value || {}
    const variant = options.variant && options.variant !== 'up' ? `reveal-${options.variant}` : ''

    el.classList.add('reveal')
    if (variant) el.classList.add(variant)
    if (options.delay) el.style.setProperty('--reveal-delay', `${options.delay}ms`)

    // Kalau user memilih "reduce motion" di sistemnya, langsung tampilkan tanpa animasi
    if (prefersReducedMotion || !observer) {
      el.classList.add('reveal-visible')
      return
    }

    observer.observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}
