export function waitlistHTML() {
  return `
    <div class="waitlist">
      <div class="email-row">
        <input type="email" placeholder="you@email.com" aria-label="Your email">
        <button type="button" class="join-btn">Save my spot</button>
      </div>
      <div class="role-toggle" role="group" aria-label="What brings you here?">
        <button type="button" class="role-pill" aria-pressed="true">I want to learn</button>
        <button type="button" class="role-pill" aria-pressed="false">I want to teach</button>
      </div>
      <span class="most-both">most people end up doing both</span>
      <input type="text" class="share-field" placeholder="optional: what could you share? (anything counts)" aria-label="What could you share? Optional">
      <p class="waitlist-msg" aria-live="polite"></p>
    </div>`
}

export function setupWaitlist(root) {
  const pills = root.querySelectorAll('.role-pill')
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.setAttribute('aria-pressed', 'false'))
      pill.setAttribute('aria-pressed', 'true')
    })
  })

  const input = root.querySelector('input[type="email"]')
  const btn = root.querySelector('.join-btn')
  const msg = root.querySelector('.waitlist-msg')

  function submit() {
    const email = input.value.trim()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      msg.textContent = 'That email looks a little off -- mind checking it?'
      msg.classList.remove('ok')
      input.focus()
      return
    }
    const role = root.querySelector('.role-pill[aria-pressed="true"]').textContent
    const shareEl = root.querySelector('.share-field')
    const share = shareEl ? shareEl.value.trim() : ''
    // TODO: send { email, role, share } to your backend or form service here
    msg.textContent = "You're on the list. One email when we open -- ty for being early."
    msg.classList.add('ok')
    input.value = ''
    if (shareEl) shareEl.value = ''
  }

  btn.addEventListener('click', submit)
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit() })
}
