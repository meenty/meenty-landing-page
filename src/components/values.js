import './values.css'
import { leaf } from '../lib/leaf.js'

const heading = 'Our values'
const note = '-- four things we keep coming back to'
const items = [
  {
    title: 'first step > perfect plan',
    body: "We don't need to have it all figured out before we start. We try, we learn, we adjust, and we keep moving. Sometimes the best way to find the way is simply to take the first step."
  },
  {
    title: 'sharing = caring',
    body: "We share what we know, what we discover, and what might help someone else. We believe that when we share freely, we make things a little easier, a little richer, and a lot more connected."
  },
  {
    title: 'people > titles',
    body: "We want to see the person before the title. What someone has lived, felt, discovered or cares about can be just as meaningful as what they do for a living. We care about the person, not the label."
  },
  {
    title: 'mentor ≡ mentee',
    body: "We don't believe learning only goes one way. We can all have something to share and something to learn, sometimes in the very same conversation. There is no one above or below anyone else."
  }
]

export function render() {
  const itemsHTML = items
    .map((v, i) => {
      const fill = i % 2 === 1 ? '#FFD84D' : '#6FE0B5'
      return `
        <div class="value">
          <strong>${leaf(fill)}${v.title}</strong>
          <p>${v.body}</p>
        </div>`
    })
    .join('')

  return `
  <section class="values">
    <div class="narrow">
      <h2>${heading}</h2>
      <span class="hand hand-note">${note}</span>
      <div class="value-list">
        ${itemsHTML}
      </div>
    </div>
  </section>`
}
