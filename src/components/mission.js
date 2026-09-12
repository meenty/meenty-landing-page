import './mission.css'
import content from '../content.json'

export function render() {
  const mission = content?.mission || {}
  const vision = content?.vision || {}

  return `
  <section class="mission-vision" id="mission">
    <div class="wrap">
      <div class="mv-grid">
        <article class="mv-block">
          <span class="mv-label hand">our mission</span>
          <h2>${mission.heading || ''}</h2>
          <p>${mission.body || ''}</p>
        </article>
        <article class="mv-block vision">
          <span class="mv-label hand">our vision</span>
          <h2>${vision.heading || ''}</h2>
          <p>${vision.body || ''}</p>
        </article>
      </div>
    </div>
  </section>`
}
