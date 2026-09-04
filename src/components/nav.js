import './nav.css'
import { track } from '@plausible-analytics/tracker'

export function render() {
  return `
  <div class="wrap">
    <nav>
      <a class="logo" href="#">
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 44 C 9 35, 8 17, 24 4 C 40 17, 39 35, 24 44 Z" fill="#6FE0B5" stroke="#14332A" stroke-width="3"/>
          <path d="M24 39 C 24 30, 24 20, 24 11" stroke="#14332A" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        meen<span class="ty-mark">ty</span>
      </a>
      <a class="nav-cta" href="#join">Join the waitlist</a>
    </nav>
  </div>`
}

export function mount() {
  const cta = document.querySelector('.nav-cta')
  if (cta) cta.addEventListener('click', () => {
    track('CTA Clicked', { props: { cta: 'nav' } })
  })
}
