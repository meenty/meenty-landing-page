import './close.css'
import '../styles/waitlist.css'
import { leaf } from '../lib/leaf.js'
import { waitlistHTML, setupWaitlist } from '../lib/waitlist.js'

export function render() {
  return `
  <section class="close" id="join">
    <div class="close-leaf cl1" aria-hidden="true">${leaf('#FBF7EF')}</div>
    <div class="close-leaf cl2" aria-hidden="true">${leaf('#FFD84D')}</div>
    <div class="close-leaf cl3" aria-hidden="true">${leaf('#FBF7EF')}</div>
    <div class="close-leaf cl4" aria-hidden="true">${leaf('#FFD84D')}</div>
    <div class="wrap">
      <h2>Come for what you want to learn. Stay for what you'll teach.</h2>
      <p class="sub">Meenty opens with whoever joins first -- that's you. Leave your email and we'll write once, when the doors open. Until then, we'll be busy planting.</p>
      <span class="hand-close hand">ty in advance 🌿</span>
      ${waitlistHTML()}
      <p class="store-note">Growing soon on iOS &amp; Android</p>
    </div>
  </section>`
}

export function mount() {
  const root = document.querySelector('.close .waitlist')
  if (root) setupWaitlist(root)
}
