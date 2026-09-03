import './people.css'
import { leaf } from '../lib/leaf.js'
import { avatarFelipe, avatarAna } from '../lib/avatars.js'

export function render() {
  return `
  <section class="people">
    <div class="wrap people-grid">
      <div>
        <h2>You don't need 15 years. One sprout ahead is enough.</h2>
        <p class="lead">Some volunteers are lifelong experts. Many just finished learning the thing themselves -- and nobody remembers the blank page better than someone who stared at it last month. Instead of star ratings, mentors collect tys: thank-yous from learners that grow leaves on their page.</p>
        <p class="hand" style="margin-top: 14px; font-size: 1.35rem; color: var(--stone); transform: rotate(-1deg); display: inline-block;">that's why it's called meenty, btw</p>
      </div>
      <div class="cards-col">
        <div class="big-card" aria-label="Example volunteer profile">
          <span class="badge">certified nice person</span>
          <div class="big-top">
            <div class="big-avatar" aria-hidden="true">${avatarFelipe()}</div>
            <div>
              <div class="big-name">Felipe Vieira</div>
              <div class="big-meta">Writing</div>
            </div>
          </div>
          <div class="big-leaves" aria-label="Rating: 5 out of 5 leaves">
            ${leaf()}${leaf()}${leaf()}${leaf()}${leaf()}
            <span>34 tys from learners</span>
          </div>
          <p class="big-bio">Fifteen years as an editor. Nothing makes me happier than watching someone stop being afraid of their own first draft.</p>
          <div class="big-quote">
            <span class="ty-label" style="font-family: 'Figtree', sans-serif; font-style: normal; font-weight: 700; font-size: 0.8rem; color: var(--coral);">
              ${leaf('#E8744C', null)}
              a ty from Ana
            </span>
            <p style="margin-top: 8px;">"I showed up with a novel I'd been 'about to start' for six years. Three conversations later, I had a first chapter."</p>
          </div>
        </div>

        <div class="big-card grad" aria-label="Example graduate volunteer profile">
          <span class="badge">one sprout ahead</span>
          <div class="big-top">
            <div class="big-avatar" style="background: var(--mint);" aria-hidden="true">${avatarAna()}</div>
            <div>
              <div class="big-name">Ana Duarte</div>
              <div class="big-meta">First chapters</div>
            </div>
          </div>
          <div class="grad-path" aria-label="Ana learned writing here and now teaches it">
            <span class="tag">learned: writing</span>
            <svg viewBox="0 0 24 16" fill="none" aria-hidden="true"><path d="M2 8 h17 M15 3 l5 5 -5 5" stroke="#14332A" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span class="tag now">now teaching it</span>
          </div>
          <p class="big-bio">I finished my first chapter here in March. If you're staring at a blank page, I know exactly how that feels -- and I'll show you what got me unstuck.</p>
        </div>

        <p class="cards-caption">example profiles -- meenty opens soon, and one of these could be you</p>
      </div>
    </div>
  </section>`
}
