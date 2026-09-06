import './people.css'
import { leaf } from '../lib/leaf.js'
import { initialsAvatar } from '../lib/avatars.js'
import content from '../content.json'

function renderProfile(p) {
  if (p.kind === 'grad') {
    return `
        <div class="big-card grad" aria-label="Example graduate volunteer profile">
          <span class="badge">${p.badge || ''}</span>
          <div class="big-top">
            <div class="big-avatar" style="background: var(--mint);" aria-hidden="true">${initialsAvatar(p.name, '#FFD84D')}</div>
            <div>
              <div class="big-name">${p.name || ''}</div>
              <div class="big-meta">${p.meta || ''}</div>
            </div>
          </div>
          <div class="grad-path" aria-label="${p.name || ''} learned ${p.learned || ''} here and now teaches it">
            <span class="tag">learned: ${p.learned || ''}</span>
            <svg viewBox="0 0 24 16" fill="none" aria-hidden="true"><path d="M2 8 h17 M15 3 l5 5 -5 5" stroke="#14332A" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span class="tag now">${p.now || ''}</span>
          </div>
          <p class="big-bio">${p.bio || ''}</p>
        </div>`
  }

  const leaves = Array.from({ length: Math.max(0, p.leaves || 0) }, () => leaf()).join('')
  const quote = p.quote
    ? `
          <div class="big-quote">
            <span class="ty-label" style="font-family: 'Figtree', sans-serif; font-style: normal; font-weight: 700; font-size: 0.8rem; color: var(--coral);">
              ${leaf('#E8744C', null)}
              ${p.quoteFrom || ''}
            </span>
            <p style="margin-top: 8px;">"${p.quote}"</p>
          </div>`
    : ''

  return `
        <div class="big-card" aria-label="Example volunteer profile">
          <span class="badge">${p.badge || ''}</span>
          <div class="big-top">
            <div class="big-avatar" aria-hidden="true">${initialsAvatar(p.name)}</div>
            <div>
              <div class="big-name">${p.name || ''}</div>
              <div class="big-meta">${p.meta || ''}</div>
            </div>
          </div>
          <div class="big-leaves" aria-label="Rating: ${p.leaves || 0} out of 5 leaves">
            ${leaves}
            <span>${p.tys || ''}</span>
          </div>
          <p class="big-bio">${p.bio || ''}</p>
          ${quote}
        </div>`
}

export function render() {
  const people = content?.people || {}
  const profiles = people.profiles || []
  const cards = profiles.map(renderProfile).join('')

  return `
  <section class="people">
    <div class="wrap people-grid">
      <div>
        <h2>${people.heading || ''}</h2>
        <p class="lead">${people.lead || ''}</p>
        <p class="hand" style="margin-top: 14px; font-size: 1.35rem; color: var(--stone); transform: rotate(-1deg); display: inline-block;">${people.note || ''}</p>
      </div>
      <div class="cards-col">
        ${cards}
        <p class="cards-caption">${people.caption || ''}</p>
      </div>
    </div>
  </section>`
}
