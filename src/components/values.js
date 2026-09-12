import './values.css'
import { leaf } from '../lib/leaf.js'
import content from '../content.json'

export function render() {
  const values = content?.values || {}
  const items = values.items || []
  const itemsHTML = items
    .map((v, i) => {
      const fill = i % 2 === 1 ? '#FFD84D' : '#6FE0B5'
      return `
        <div class="value">
          <strong>${leaf(fill)}${v.title || ''}</strong>
          <p>${v.body || ''}</p>
        </div>`
    })
    .join('')

  return `
  <section class="values">
    <div class="narrow">
      <h2>${values.heading || ''}</h2>
      <span class="hand hand-note">${values.note || ''}</span>
      <div class="value-list">
        ${itemsHTML}
      </div>
    </div>
  </section>`
}
