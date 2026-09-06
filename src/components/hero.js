import './hero.css'
import '../styles/phone.css'
import '../styles/waitlist.css'
import { leaf } from '../lib/leaf.js'
import { avatarFelipe, avatarMauricio } from '../lib/avatars.js'
import { waitlistHTML, setupWaitlist } from '../lib/waitlist.js'
import content from '../content.json'

function headline() {
  const h = content?.hero?.headline || ''
  const em = content?.hero?.headlineEm
  return em ? h.replace(em, `<em>${em}</em>`) : h
}

export function render() {
  return `
  <header class="hero">
    <div class="wrap hero-grid">
      <div>
        <h1>${headline()}</h1>
        <p class="sub">${content?.hero?.subtitle || ''}</p>
        <span class="free-sticker">${content?.hero?.freeSticker || ''}</span>

        ${waitlistHTML()}
      </div>

      <div class="phone-col">
        <div class="phone-note">
          the whole app, honestly
          <svg viewBox="0 0 60 44" fill="none" aria-hidden="true"><path d="M50 4 C 40 20, 30 28, 14 34 M14 34 l10 -4 M14 34 l6 8" stroke="#14332A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="phone" role="img" aria-label="Menty app screen suggesting writing mentors">
          <div class="screen">
            <div class="statusbar"><span>9:41</span><span>·</span></div>
            <div class="app-header">
              <div class="app-greeting">What would you like to learn?</div>
              <div class="searchbox">i'd like to get better at writing…</div>
            </div>
            <div class="app-body">
              <div class="app-section-title">People happy to help</div>

              <div class="app-card">
                <div class="app-card-top">
                  <div class="doodle-avatar" aria-hidden="true">${avatarFelipe()}</div>
                  <div>
                    <div class="name">Felipe Vieira</div>
                    <div class="meta">Writing · editor, 15 years</div>
                  </div>
                </div>
                <div class="fat-leaves">
                  ${leaf()}${leaf()}${leaf()}${leaf()}${leaf()}
                  <span>34 tys</span>
                </div>
                <div class="snippet">"Bring me your terrible first draft. That's where the good ones start."</div>
                <span class="send-ty">${leaf()}send a ty</span>
              </div>

              <div class="app-card">
                <div class="app-card-top">
                  <div class="doodle-avatar alt" aria-hidden="true">${avatarMauricio()}</div>
                  <div>
                    <div class="name">Maurício</div>
                    <div class="meta">Writing · retired teacher</div>
                  </div>
                </div>
                <div class="fat-leaves">
                  ${leaf()}${leaf()}${leaf()}${leaf()}${leaf('#E9F5EE')}
                  <span>21 tys</span>
                </div>
                <div class="snippet">"Forty years of teaching. I still get excited when someone gets it."</div>
              </div>
            </div>
            <div class="tabbar">
              <div class="active">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="2.2"/><path d="M15.5 15.5 L 20 20" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>
                Search
              </div>
              <div>
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 6 h16 v10 h-9 l-4 4 v-4 h-3 Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>
                Chats
              </div>
              <div>
                <svg viewBox="0 0 48 48" fill="none"><path d="M24 44 C 9 35, 8 17, 24 4 C 40 17, 39 35, 24 44 Z" stroke="currentColor" stroke-width="3.6"/></svg>
                Garden
              </div>
              <div>
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2.2"/><path d="M4 20 C 5 15, 9 14, 12 14 C 15 14, 19 15, 20 20" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>
                Profile
              </div>
            </div>
          </div>
        </div>
        <p class="cards-caption">a "ty" is a thank-you -- more on that in a sec</p>
      </div>
    </div>

    <div class="manifesto">
      <div class="narrow">
        <p>${content?.hero?.manifesto || ''}</p>
        <div class="leafline" aria-hidden="true">
          ${leaf()}${leaf('#FFD84D')}${leaf()}
        </div>
      </div>
    </div>
  </header>`
}

export function mount() {
  const root = document.querySelector('.hero .waitlist')
  if (root) setupWaitlist(root)
}
