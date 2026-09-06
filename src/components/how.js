import './how.css'
import content from '../content.json'

export function render() {
  const how = content?.how || {}
  const steps = how.steps || []
  const stepsHTML = steps
    .map(
      (s, i) => `
        <div class="how-step">
          <div class="num">${i + 1}</div>
          <div>
            <h3>${s.title || ''}</h3>
            <p>${s.body || ''}</p>
          </div>
        </div>`,
    )
    .join('')

  return `
  <section class="how" id="how">
    <div class="narrow">
      <h2>${how.heading || ''} <span class="hand hand-note">${how.note || ''}</span></h2>
      <div class="how-list">
        ${stepsHTML}
      </div>
    </div>
  </section>`
}
