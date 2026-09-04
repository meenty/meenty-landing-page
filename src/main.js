import './styles/tokens.css'
import './styles/base.css'

import { init as initPlausible } from '@plausible-analytics/tracker'

initPlausible({
  domain: 'meenty.app',
  endpoint: 'https://plausible.mansus.org/api/event'
})

import { render as nav, mount as mountNav } from './components/nav.js'
import { render as hero, mount as mountHero } from './components/hero.js'
import { render as how } from './components/how.js'
import { render as people } from './components/people.js'
import { render as match } from './components/match.js'
import { render as loop } from './components/loop.js'
import { render as rules } from './components/rules.js'
import { render as close, mount as mountClose } from './components/close.js'
import { render as footer } from './components/footer.js'

import { setupScrollDepth } from './lib/scroll.js'

const app = document.querySelector('#app')

function mount(html) {
  const template = document.createElement('template')
  template.innerHTML = html.trim()
  app.append(template.content)
}

const sections = [nav, hero, how, people, match, loop, rules, close, footer]

sections.forEach((render) => mount(render()))

mountHero()
mountClose()
mountNav()
setupScrollDepth()
