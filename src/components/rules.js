import './rules.css'
import { leaf } from '../lib/leaf.js'
import content from '../content.json'

export function render() {
  const rules = content?.rules || {}
  const items = rules.items || []
  const itemsHTML = items
    .map((r, i) => {
      const fill = i % 2 === 1 ? '#FFD84D' : '#6FE0B5'
      return `
        <div class="rule">
          <strong>${leaf(fill)}${r.title || ''}</strong>
          <p>${r.body || ''}</p>
        </div>`
    })
    .join('')

  return `
  <section class="rules">
    <div class="narrow">
      <h2>${rules.heading || ''}</h2>
      <span class="hand hand-note">${rules.note || ''}</span>
      <div class="rule-list">
        ${itemsHTML}
      </div>
    </div>
  </section>`
}
