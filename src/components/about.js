import './about.css'
import content from '../content.json'

function em(text) {
  return (text || '').replace(/\*([^*]+)\*/g, '<em>$1</em>')
}

export function render() {
  const about = content?.about || {}
  const blocks = about.blocks || []
  const blocksHTML = blocks
    .map((b) =>
      b.kind === 'highlight'
        ? `<p class="about-highlight">${em(b.body)}</p>`
        : `<p>${em(b.body)}</p>`,
    )
    .join('')

  return `
  <section class="about" id="about">
    <div class="narrow">
      <div class="about-head">
        <span class="about-label hand">${about.label || ''}</span>
        <h2>${about.heading || ''}</h2>
      </div>
      <div class="about-story">
        ${blocksHTML}
      </div>
    </div>
  </section>`
}
