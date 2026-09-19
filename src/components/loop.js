import './loop.css'
import '../styles/phone.css'
import content from '../content.json'

export function render() {
  return `
  <section class="loop">
    <div class="wrap">
      <div class="loop-head">
        <h2>${content?.loop?.heading || ''}</h2>
        <p class="lead">${content?.loop?.lead || ''}</p>
      </div>
      <div class="loop-grid">
        <svg class="cycle" viewBox="0 0 340 340" role="img" aria-label="The Meenty cycle: a goal leads to conversations, then a ty, then you're on the other side, and it begins again">
          <circle cx="170" cy="170" r="112" fill="none" style="stroke:var(--earth)" stroke-width="2" stroke-dasharray="3 8" stroke-linecap="round"/>
          <path d="M282 170 A 112 112 0 0 1 170 282" fill="none" stroke="none"/>
          <path d="M262 235 l-9 -3 M262 235 l1 -10" style="stroke:var(--earth)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M78 235 l3 -10 M78 235 l10 1" style="stroke:var(--earth)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M78 105 l10 -1 M78 105 l3 10" style="stroke:var(--earth)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M262 105 l-1 10 M262 105 l-10 -3" style="stroke:var(--earth)" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <g>
            <rect x="115" y="36" width="110" height="34" rx="17" style="fill:var(--air);stroke:var(--earth)" stroke-width="2"/>
            <text x="170" y="58" text-anchor="middle" font-size="14">a goal</text>
          </g>
          <g>
            <rect x="230" y="153" width="106" height="34" rx="17" style="fill:var(--sun);stroke:var(--earth)" stroke-width="2"/>
            <text x="283" y="175" text-anchor="middle" font-size="13">conversations</text>
          </g>
          <g>
            <rect x="122" y="270" width="96" height="34" rx="17" style="fill:var(--water);stroke:var(--fire)" stroke-width="2"/>
            <text x="178" y="292" text-anchor="middle" font-size="14" style="fill:var(--fire)">a ty</text>
            <path d="M146 293 C 140 289, 140 282, 146 277 C 152 282, 152 289, 146 293 Z" style="fill:var(--fire)"/>
          </g>
          <g>
            <rect x="4" y="153" width="132" height="34" rx="17" style="fill:var(--water);stroke:var(--earth)" stroke-width="2"/>
            <text x="70" y="175" text-anchor="middle" font-size="13">the other side</text>
          </g>
          <path d="M170 148 C 158 152, 152 162, 152 170 C 152 182, 160 190, 170 190 C 180 190, 188 182, 188 170 C 188 158, 178 146, 170 132 C 166 138, 162 143, 170 148 Z" fill="none"/>
          <path d="M170 196 C 160 190, 159 178, 170 166 C 181 178, 180 190, 170 196 Z" style="fill:var(--water);stroke:var(--earth)" stroke-width="2.4"/>
          <text x="170" y="222" text-anchor="middle" font-size="12" style="fill:var(--earth)" font-style="italic" font-family="Fraunces, serif">and again</text>
        </svg>

        <div class="phone-col">
          <div class="phone" role="img" aria-label="Meenty completion screen offering to start another goal or pass it on by teaching">
            <div class="screen">
              <div class="statusbar"><span>9:41</span><span>·</span></div>
              <div class="done-screen">
                <svg class="done-leaf" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 44 C 9 35, 8 17, 24 4 C 40 17, 39 35, 24 44 Z" style="fill:var(--water);stroke:var(--earth)" stroke-width="3"/><path d="M24 39 C 24 30, 24 20, 24 11" style="stroke:var(--earth)" stroke-width="2.5" stroke-linecap="round"/></svg>
                <div class="done-title">You closed the loop.</div>
                <div class="done-meta">"get better at writing" · 6 chats with Felipe · 1 ty sent</div>
                <div class="done-buttons">
                  <div class="done-btn primary">pass it on -- teach what you learned</div>
                  <div class="done-btn ghost">start another sprout</div>
                </div>
                <span class="done-note">same sentence -- you're just on the other side of it now</span>
              </div>
            </div>
          </div>
          <p class="cards-caption">no other app has this screen. we checked.</p>
        </div>
      </div>
    </div>
  </section>`
}
