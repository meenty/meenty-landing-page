import './styles/tokens.css'
import './styles/base.css'

import { init as initPlausible } from '@plausible-analytics/tracker'

initPlausible({
  domain: 'meenty.app',
  endpoint: 'https://plausible.mansus.org/api/event'
})

import { render as nav } from './components/nav.js'
import { render as about } from './components/about.js'
import { render as footer } from './components/footer.js'

const app = document.querySelector('#app')

function mount(html) {
  const template = document.createElement('template')
  template.innerHTML = html.trim()
  app.append(template.content)
}

const sections = [() => nav('./index.html'), about, footer]

sections.forEach((render) => mount(render()))
