import './close.css'
import '../styles/waitlist.css'
import { track } from '@plausible-analytics/tracker'
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
      <button type="button" class="share-btn">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 15V3M12 3l-4 4M12 3l4 4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>
        Share with a friend
      </button>
      <span class="share-msg" aria-live="polite"></span>
    </div>
  </section>`
}

export function mount() {
  const root = document.querySelector('.close .waitlist')
  if (root) setupWaitlist(root)

  const shareBtn = document.querySelector('.close .share-btn')
  if (shareBtn) setupShare(shareBtn)
}

function setupShare(btn) {
  const msg = document.querySelector('.close .share-msg')
  const url = 'https://meenty.app/'
  const text = 'meenty -- learn it from someone who loves it'
  btn.addEventListener('click', async () => {
    const native = typeof navigator.share === 'function'
    track('Share Clicked', { props: { method: native ? 'native' : 'copy' } })
    if (native) {
      try {
        await navigator.share({ title: 'meenty', text, url })
        return
      } catch (e) {
        if (e && e.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      msg.textContent = 'Link copied -- pass it on'
    } catch (e) {
      msg.textContent = `Copy this address: ${url}`
    }
  })
}
