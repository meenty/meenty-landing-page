import './message.css'
import { track } from '@plausible-analytics/tracker'
import { postToCms } from '../lib/api.js'
import content from '../content.json'

export function render() {
  const m = content?.message || {}
  return `
  <section class="message" id="message">
    <div class="narrow">
      <h2>${m.heading || ''}</h2>
      <p class="sub">${m.sub || ''}</p>
      <div class="message-card">
        <textarea class="message-field" placeholder="${m.placeholder || ''}" aria-label="Your message" rows="4"></textarea>
        <button type="button" class="send-btn">Send</button>
      </div>
      <p class="message-msg" aria-live="polite"></p>
    </div>
  </section>`
}

export function mount() {
  const root = document.querySelector('.message')
  if (!root) return
  const field = root.querySelector('.message-field')
  const btn = root.querySelector('.send-btn')
  const msg = root.querySelector('.message-msg')

  async function send() {
    const text = field.value.trim()
    if (!text) {
      msg.textContent = 'Write a few words first -- even a hello counts.'
      msg.classList.remove('ok')
      field.focus()
      return
    }
    track('Message Sent', { props: { length: text.length } })
    btn.disabled = true
    try {
      await postToCms('/api/messages', { message: text })
      msg.textContent = "Got it -- ty for writing. We read every one."
      msg.classList.add('ok')
      field.value = ''
    } catch (e) {
      msg.textContent = 'Something went wrong -- try again in a sec.'
      msg.classList.remove('ok')
    } finally {
      btn.disabled = false
    }
  }

  btn.addEventListener('click', send)
  field.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) send()
  })
}
