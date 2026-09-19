import './nav.css'

export function render(homeHref = '#') {
  return `
  <div class="wrap">
    <nav>
      <a class="logo" href="${homeHref}">
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 44 C 9 35, 8 17, 24 4 C 40 17, 39 35, 24 44 Z" style="fill:var(--water);stroke:var(--earth)" stroke-width="3"/>
          <path d="M24 39 C 24 30, 24 20, 24 11" style="stroke:var(--earth)" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        <span class="wordmark">meen<span class="ty-mark">ty</span></span>
      </a>
    </nav>
  </div>`
}
