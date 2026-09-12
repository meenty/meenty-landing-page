import './about-teaser.css'

const label = 'a little more'
const heading = 'do you want to know more about us?'
const body = 'How it all started, who we are, and why Meenty exists.'
const linkText = 'read our story'

export function render() {
  return `
  <section class="about-teaser" id="about">
    <div class="narrow">
      <div class="about-teaser-inner">
        <span class="about-teaser-label hand">${label}</span>
        <h2>${heading}</h2>
        <p>${body}</p>
        <a class="about-teaser-link" href="./about.html">${linkText}</a>
      </div>
    </div>
  </section>`
}
