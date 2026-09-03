import './match.css'
import '../styles/phone.css'
import { leaf } from '../lib/leaf.js'
import { avatarFelipe } from '../lib/avatars.js'

export function render() {
  return `
  <section class="match">
    <div class="wrap match-grid">
      <div class="phone-col">
        <div class="phone" role="img" aria-label="Meenty chat screen showing a match with Felipe and a ty being sent">
          <div class="screen">
            <div class="statusbar"><span>9:41</span><span>·</span></div>
            <div class="chat-header">
              <div class="mini-avatar" aria-hidden="true">${avatarFelipe()}</div>
              <div class="who">
                <div class="name">Felipe Vieira</div>
                <div class="status">it's a match 🌿</div>
              </div>
              <svg class="cam" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="7" width="12" height="10" rx="2.5" stroke="currentColor" stroke-width="2"/><path d="M15 11 l6 -3 v8 l-6 -3" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
            </div>
            <div class="match-banner">
              Felipe accepted your request
              <span class="hand">go say hi -- he doesn't bite</span>
            </div>
            <div class="chat-body">
              <div class="msg me">hi! so… i've been "about to start" a novel for six years 😅</div>
              <div class="msg">Perfect. Send me whatever you have -- even if it's one paragraph.</div>
              <div class="msg me">it's literally one paragraph</div>
              <div class="msg">Those are my favorite. Video call on Thursday? Bring the paragraph.</div>
              <div class="ty-bubble">
                ${leaf('#E8744C', '#E8744C')}
                you sent Felipe a ty
              </div>
            </div>
            <div class="chat-input">write something nice…</div>
          </div>
        </div>
      </div>
      <div>
        <h2>You pick. They accept. Then it's just the two of you.</h2>
        <p class="lead">When a volunteer says yes, a chat opens -- and everything happens right there. Messages, video calls, that Thursday you keep. And when they help you grow, you send them a ty. It's the only currency in Meenty, and it can't be bought.</p>
      </div>
    </div>
  </section>`
}
