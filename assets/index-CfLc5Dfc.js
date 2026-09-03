(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
  <div class="wrap">
    <nav>
      <a class="logo" href="#">
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 44 C 9 35, 8 17, 24 4 C 40 17, 39 35, 24 44 Z" fill="#6FE0B5" stroke="#14332A" stroke-width="3"/>
          <path d="M24 39 C 24 30, 24 20, 24 11" stroke="#14332A" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        meen<span class="ty-mark">ty</span>
      </a>
      <a class="nav-cta" href="#join">Join the waitlist</a>
    </nav>
  </div>`}function t(e=`#6FE0B5`,t=`#14332A`,n=3){return`<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 44 C 9 35, 8 17, 24 4 C 40 17, 39 35, 24 44 Z" fill="${e}"${t?` stroke="${t}" stroke-width="${n}"`:``}/></svg>`}function n(){return`<svg viewBox="0 0 48 48" fill="none">
    <path d="M12 16 C 13 9, 20 6, 24 7 C 29 5, 35 9, 36 16 C 37 13, 33 20, 33 20 L 15 20 C 15 20, 11 13, 12 16 Z" fill="#14332A"/>
    <circle cx="24" cy="26" r="13" stroke="#14332A" stroke-width="2.5" fill="#FFF6DE"/>
    <circle cx="19" cy="25" r="4" stroke="#14332A" stroke-width="2"/>
    <circle cx="29" cy="25" r="4" stroke="#14332A" stroke-width="2"/>
    <path d="M23 25 h2" stroke="#14332A" stroke-width="2"/>
    <path d="M17 34 C 19 38, 29 38, 31 34 C 29 36, 19 36, 17 34 Z" fill="#14332A"/>
    <path d="M20 33 C 22 34.5, 26 34.5, 28 33" stroke="#FFF6DE" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`}function r(){return`<svg viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="26" r="13" stroke="#14332A" stroke-width="2.5" fill="#FFF6DE"/>
    <path d="M14 19 C 16 15, 20 13, 24 13 C 28 13, 32 15, 34 19" stroke="#14332A" stroke-width="2" stroke-linecap="round"/>
    <path d="M20 12 l1 -3 M25 11 l0 -3 M29 12 l2 -3" stroke="#14332A" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="19" cy="25" r="4" stroke="#14332A" stroke-width="2"/>
    <circle cx="29" cy="25" r="4" stroke="#14332A" stroke-width="2"/>
    <path d="M23 25 h2" stroke="#14332A" stroke-width="2"/>
    <path d="M18 32 C 20 30.5, 22 30.5, 24 32 C 26 30.5, 28 30.5, 30 32" stroke="#14332A" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M20 35.5 C 22 37, 26 37, 28 35.5" stroke="#14332A" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`}function i(){return`<svg viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="14" r="5" fill="#14332A"/>
    <path d="M13 22 C 14 15, 19 11, 24 11 C 29 11, 34 15, 35 22 L 33 24 L 15 24 Z" fill="#14332A"/>
    <circle cx="24" cy="27" r="12.5" stroke="#14332A" stroke-width="2.5" fill="#FFF6DE"/>
    <circle cx="19.5" cy="26" r="1.6" fill="#14332A"/>
    <circle cx="28.5" cy="26" r="1.6" fill="#14332A"/>
    <path d="M19 32.5 C 21.5 35, 26.5 35, 29 32.5" stroke="#14332A" stroke-width="2" stroke-linecap="round"/>
    <circle cx="16.5" cy="30" r="1.8" fill="#F5C9B5"/>
    <circle cx="31.5" cy="30" r="1.8" fill="#F5C9B5"/>
  </svg>`}function a(){return`
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
    </div>`}function o(e){let t=e.querySelectorAll(`.role-pill`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>e.setAttribute(`aria-pressed`,`false`)),e.setAttribute(`aria-pressed`,`true`)})});let n=e.querySelector(`input[type="email"]`),r=e.querySelector(`.join-btn`),i=e.querySelector(`.waitlist-msg`);function a(){let t=n.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){i.textContent=`That email looks a little off -- mind checking it?`,i.classList.remove(`ok`),n.focus();return}e.querySelector(`.role-pill[aria-pressed="true"]`).textContent;let r=e.querySelector(`.share-field`);r&&r.value.trim(),i.textContent=`You're on the list. One email when we open -- ty for being early.`,i.classList.add(`ok`),n.value=``,r&&(r.value=``)}r.addEventListener(`click`,a),n.addEventListener(`keydown`,e=>{e.key===`Enter`&&a()})}function s(){return`
  <header class="hero">
    <div class="wrap hero-grid">
      <div>
        <h1>Learn it from someone who <em>loves</em> it.</h1>
        <p class="sub">Meenty introduces you to volunteers who teach what they know -- writing, jazz, bread, code -- because they love it. No courses, no fees. And when you've grown, you teach the next person. That's the whole idea.</p>
        <span class="free-sticker">free -- actually free, not "free trial" free</span>

        ${a()}
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
                  <div class="doodle-avatar" aria-hidden="true">${n()}</div>
                  <div>
                    <div class="name">Felipe Vieira</div>
                    <div class="meta">Writing · editor, 15 years</div>
                  </div>
                </div>
                <div class="fat-leaves">
                  ${t()}${t()}${t()}${t()}${t()}
                  <span>34 tys</span>
                </div>
                <div class="snippet">"Bring me your terrible first draft. That's where the good ones start."</div>
                <span class="send-ty">${t()}send a ty</span>
              </div>

              <div class="app-card">
                <div class="app-card-top">
                  <div class="doodle-avatar alt" aria-hidden="true">${r()}</div>
                  <div>
                    <div class="name">Maurício</div>
                    <div class="meta">Writing · retired teacher</div>
                  </div>
                </div>
                <div class="fat-leaves">
                  ${t()}${t()}${t()}${t()}${t(`#E9F5EE`)}
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
        <p>Everyone knows something worth passing on. Most of us were just never asked.</p>
        <div class="leafline" aria-hidden="true">
          ${t()}${t(`#FFD84D`)}${t()}
        </div>
      </div>
    </div>
  </header>`}function c(){let e=document.querySelector(`.hero .waitlist`);e&&o(e)}function l(){return`
  <section class="how" id="how">
    <div class="narrow">
      <h2>How it works <span class="hand hand-note">-- honestly, this is all of it</span></h2>
      <div class="how-list">
        <div class="how-step">
          <div class="num">1</div>
          <div>
            <h3>Say it in your own words</h3>
            <p>"I want to write better." "Help me understand jazz." "My plants keep dying." That's the whole search -- no categories to browse, no forms to fill.</p>
          </div>
        </div>
        <div class="how-step">
          <div class="num">2</div>
          <div>
            <h3>Meet people who've offered to help</h3>
            <p>We introduce you to a few volunteers who know the subject and chose to be here. You pick who to write to; they decide if it's a match. Nobody owes anybody anything.</p>
          </div>
        </div>
        <div class="how-step">
          <div class="num">3</div>
          <div>
            <h3>Then it's just a conversation</h3>
            <p>Chat and video calls, inside Meenty. Ask when you're stuck. Take an afternoon or take a year. When you've grown, you close the loop and send them a ty.</p>
          </div>
        </div>
        <div class="how-step">
          <div class="num">4</div>
          <div>
            <h3>Then you pass it on</h3>
            <p>Your goal sentence becomes your first teaching profile. One sprout given for the one you received -- that's how there's always someone to learn from.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`}function u(){return`
  <section class="people">
    <div class="wrap people-grid">
      <div>
        <h2>You don't need 15 years. One sprout ahead is enough.</h2>
        <p class="lead">Some volunteers are lifelong experts. Many just finished learning the thing themselves -- and nobody remembers the blank page better than someone who stared at it last month. Instead of star ratings, mentors collect tys: thank-yous from learners that grow leaves on their page.</p>
        <p class="hand" style="margin-top: 14px; font-size: 1.35rem; color: var(--stone); transform: rotate(-1deg); display: inline-block;">that's why it's called meenty, btw</p>
      </div>
      <div class="cards-col">
        <div class="big-card" aria-label="Example volunteer profile">
          <span class="badge">certified nice person</span>
          <div class="big-top">
            <div class="big-avatar" aria-hidden="true">${n()}</div>
            <div>
              <div class="big-name">Felipe Vieira</div>
              <div class="big-meta">Writing</div>
            </div>
          </div>
          <div class="big-leaves" aria-label="Rating: 5 out of 5 leaves">
            ${t()}${t()}${t()}${t()}${t()}
            <span>34 tys from learners</span>
          </div>
          <p class="big-bio">Fifteen years as an editor. Nothing makes me happier than watching someone stop being afraid of their own first draft.</p>
          <div class="big-quote">
            <span class="ty-label" style="font-family: 'Figtree', sans-serif; font-style: normal; font-weight: 700; font-size: 0.8rem; color: var(--coral);">
              ${t(`#E8744C`,null)}
              a ty from Ana
            </span>
            <p style="margin-top: 8px;">"I showed up with a novel I'd been 'about to start' for six years. Three conversations later, I had a first chapter."</p>
          </div>
        </div>

        <div class="big-card grad" aria-label="Example graduate volunteer profile">
          <span class="badge">one sprout ahead</span>
          <div class="big-top">
            <div class="big-avatar" style="background: var(--mint);" aria-hidden="true">${i()}</div>
            <div>
              <div class="big-name">Ana Duarte</div>
              <div class="big-meta">First chapters</div>
            </div>
          </div>
          <div class="grad-path" aria-label="Ana learned writing here and now teaches it">
            <span class="tag">learned: writing</span>
            <svg viewBox="0 0 24 16" fill="none" aria-hidden="true"><path d="M2 8 h17 M15 3 l5 5 -5 5" stroke="#14332A" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span class="tag now">now teaching it</span>
          </div>
          <p class="big-bio">I finished my first chapter here in March. If you're staring at a blank page, I know exactly how that feels -- and I'll show you what got me unstuck.</p>
        </div>

        <p class="cards-caption">example profiles -- meenty opens soon, and one of these could be you</p>
      </div>
    </div>
  </section>`}function d(){return`
  <section class="match">
    <div class="wrap match-grid">
      <div class="phone-col">
        <div class="phone" role="img" aria-label="Meenty chat screen showing a match with Felipe and a ty being sent">
          <div class="screen">
            <div class="statusbar"><span>9:41</span><span>·</span></div>
            <div class="chat-header">
              <div class="mini-avatar" aria-hidden="true">${n()}</div>
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
                ${t(`#E8744C`,`#E8744C`)}
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
  </section>`}function f(){return`
  <section class="loop">
    <div class="wrap">
      <div class="loop-head">
        <h2>Pass it on: the part that makes the garden grow.</h2>
        <p class="lead">Meenty isn't a marketplace with mentors on one side and learners on the other. It's a cycle you join. You arrive with a goal, and you leave it as someone worth learning from -- one sprout ahead of whoever comes next.</p>
      </div>
      <div class="loop-grid">
        <svg class="cycle" viewBox="0 0 340 340" role="img" aria-label="The Meenty cycle: a goal leads to conversations, then a ty, then you're on the other side, and it begins again">
          <circle cx="170" cy="170" r="112" fill="none" stroke="#14332A" stroke-width="2" stroke-dasharray="3 8" stroke-linecap="round"/>
          <path d="M282 170 A 112 112 0 0 1 170 282" fill="none" stroke="none"/>
          <path d="M262 235 l-9 -3 M262 235 l1 -10" stroke="#14332A" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M78 235 l3 -10 M78 235 l10 1" stroke="#14332A" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M78 105 l10 -1 M78 105 l3 10" stroke="#14332A" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <path d="M262 105 l-1 10 M262 105 l-10 -3" stroke="#14332A" stroke-width="2.4" stroke-linecap="round" fill="none"/>
          <g>
            <rect x="115" y="36" width="110" height="34" rx="17" fill="#FBF7EF" stroke="#14332A" stroke-width="2"/>
            <text x="170" y="58" text-anchor="middle" font-size="14">a goal</text>
          </g>
          <g>
            <rect x="230" y="153" width="106" height="34" rx="17" fill="#FFD84D" stroke="#14332A" stroke-width="2"/>
            <text x="283" y="175" text-anchor="middle" font-size="13">conversations</text>
          </g>
          <g>
            <rect x="122" y="270" width="96" height="34" rx="17" fill="#FDEEE7" stroke="#E8744C" stroke-width="2"/>
            <text x="178" y="292" text-anchor="middle" font-size="14" fill="#E8744C">a ty</text>
            <path d="M146 293 C 140 289, 140 282, 146 277 C 152 282, 152 289, 146 293 Z" fill="#E8744C"/>
          </g>
          <g>
            <rect x="4" y="153" width="132" height="34" rx="17" fill="#6FE0B5" stroke="#14332A" stroke-width="2"/>
            <text x="70" y="175" text-anchor="middle" font-size="13">the other side</text>
          </g>
          <path d="M170 148 C 158 152, 152 162, 152 170 C 152 182, 160 190, 170 190 C 180 190, 188 182, 188 170 C 188 158, 178 146, 170 132 C 166 138, 162 143, 170 148 Z" fill="none"/>
          <path d="M170 196 C 160 190, 159 178, 170 166 C 181 178, 180 190, 170 196 Z" fill="#6FE0B5" stroke="#14332A" stroke-width="2.4"/>
          <text x="170" y="222" text-anchor="middle" font-size="12" fill="#55685E" font-style="italic" font-family="Fraunces, serif">and again</text>
        </svg>

        <div class="phone-col">
          <div class="phone" role="img" aria-label="Meenty completion screen offering to start another goal or pass it on by teaching">
            <div class="screen">
              <div class="statusbar"><span>9:41</span><span>·</span></div>
              <div class="done-screen">
                <svg class="done-leaf" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 44 C 9 35, 8 17, 24 4 C 40 17, 39 35, 24 44 Z" fill="#6FE0B5" stroke="#14332A" stroke-width="3"/><path d="M24 39 C 24 30, 24 20, 24 11" stroke="#14332A" stroke-width="2.5" stroke-linecap="round"/></svg>
                <div class="done-title">You closed the loop.</div>
                <div class="done-meta">"get better at writing" · 6 chats with Felipe · 1 ty sent</div>
                <div class="done-buttons">
                  <div class="done-btn primary">pass it on -- teach what you learned</div>
                  <div class="done-btn ghost">start another sprout</div>
                </div>
                <span class="done-note">same sentence -- you're just on the other side of it now</span>
              </div>
            </div>
          </div>
          <p class="cards-caption">no other app has this screen. we checked.</p>
        </div>
      </div>
    </div>
  </section>`}function p(){return`
  <section class="rules">
    <div class="narrow">
      <h2>Before writing any code, we wrote four rules in a notebook.</h2>
      <span class="hand hand-note">-- page one, verbatim</span>
      <div class="rule-list">
        <div class="rule">
          <strong>${t()}Nurture</strong>
          <p>Teaching is watering something in another person. Everything else we build is decoration around that.</p>
        </div>
        <div class="rule">
          <strong>${t(`#FFD84D`)}Stay human</strong>
          <p>No feeds, no streaks, no tricks to keep you scrolling. The app's whole job is to get out of the way of two people talking.</p>
        </div>
        <div class="rule">
          <strong>${t()}No catch</strong>
          <p>Free means free. No premium tier, no ads, no "unlock more mentors." Donations keep the servers on, and we publish where every cent goes.</p>
        </div>
        <div class="rule">
          <strong>${t(`#FFD84D`)}Pass it on</strong>
          <p>Knowledge doesn't belong to anyone. This one turned out to be the whole architecture -- every learner is next season's mentor, which is the only way a free garden keeps growing.</p>
        </div>
      </div>
    </div>
  </section>`}function m(){return`
  <section class="close" id="join">
    <div class="close-leaf cl1" aria-hidden="true">${t(`#FBF7EF`)}</div>
    <div class="close-leaf cl2" aria-hidden="true">${t(`#FFD84D`)}</div>
    <div class="close-leaf cl3" aria-hidden="true">${t(`#FBF7EF`)}</div>
    <div class="close-leaf cl4" aria-hidden="true">${t(`#FFD84D`)}</div>
    <div class="wrap">
      <h2>Come for what you want to learn. Stay for what you'll teach.</h2>
      <p class="sub">Meenty opens with whoever joins first -- that's you. Leave your email and we'll write once, when the doors open. Until then, we'll be busy planting.</p>
      <span class="hand-close hand">ty in advance 🌿</span>
      ${a()}
      <p class="store-note">Growing soon on iOS &amp; Android</p>
    </div>
  </section>`}function h(){let e=document.querySelector(`.close .waitlist`);e&&o(e)}function g(){return`
  <footer>
    <div class="wrap">
      <span>meen<span class="ty-mark">ty</span> -- the "ty" is for thank you</span>
      <span>Made by volunteers, kept alive by donations</span>
    </div>
    <div class="wrap footer-legal">
      <span>Your email is only used to tell you when we launch. Never sold, never shared.</span>
      <span><a href="#">Privacy</a> · <a href="#">Community guidelines</a> · <a href="#">Contact</a></span>
    </div>
  </footer>`}var _=document.querySelector(`#app`);function v(e){let t=document.createElement(`template`);t.innerHTML=e.trim(),_.append(t.content)}[e,s,l,u,d,f,p,m,g].forEach(e=>v(e())),c(),h();