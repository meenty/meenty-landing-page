import { track } from './analytics.js'

const THRESHOLDS = [25, 50, 75, 100]

export function setupScrollDepth() {
  const fired = new Set()
  let ticking = false

  function check() {
    const doc = document.documentElement
    const scrollable = doc.scrollHeight - window.innerHeight
    if (scrollable <= 0) return
    const scrolled = window.scrollY + window.innerHeight
    const pct = Math.round((scrolled / doc.scrollHeight) * 100)
    THRESHOLDS.forEach((t) => {
      if (pct >= t && !fired.has(t)) {
        fired.add(t)
        track(`Scroll ${t}%`)
      }
    })
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      check()
      ticking = false
    })
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  check()
}
