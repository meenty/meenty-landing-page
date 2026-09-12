import './mission.css'

const mission = {
  heading: 'to help people learn, share and grow together.',
  body: "We connect people who want to learn with people who are willing to share what they know, creating meaningful connections where everyone has something to give and something to discover."
}

const vision = {
  heading: 'a world where everyone can learn from anyone.',
  body: "We want to make knowledge more open and human, giving people the chance to discover and connect with others far beyond their usual circles, regardless of where they come from, what they do, who they know or what they have. A world where everyone has access to people who can help them grow, and where everyone can feel that what they know and who they are can make a difference to someone else."
}

export function render() {
  return `
  <section class="mission-vision" id="mission">
    <div class="wrap">
      <div class="mv-grid">
        <article class="mv-block">
          <span class="mv-label hand">our mission</span>
          <h2>${mission.heading}</h2>
          <p>${mission.body}</p>
        </article>
        <article class="mv-block vision">
          <span class="mv-label hand">our vision</span>
          <h2>${vision.heading}</h2>
          <p>${vision.body}</p>
        </article>
      </div>
    </div>
  </section>`
}
