import './message.css'
import { track } from '@plausible-analytics/tracker'

export function render() {
  return `
  <section class="message" id="message">
    <div class="narrow">
      <h2>Send us a message</h2>
      <p class="sub">Questions, ideas, something you'd love to teach -- we read everything.</p>
      <div class="message-card">
        <textarea class="message-field" placeholder="write to us..." aria-label="Your message" rows="4"></textarea>
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

  function send() {
    const text = field.value.trim()
    if (!text) {
      msg.textContent = 'Write a few words first -- even a hello counts.'
      msg.classList.remove('ok')
      field.focus()
      return
    }
    track('Message Sent', { props: { length: text.length } })
    // TODO: send { message: text } to your backend or form service here
    msg.textContent = "Got it -- ty for writing. We read every one."
    msg.classList.add('ok')
    field.value = ''
  }

  btn.addEventListener('click', send)
  field.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) send()
  })
}
