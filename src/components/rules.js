import './rules.css'
import { leaf } from '../lib/leaf.js'

export function render() {
  return `
  <section class="rules">
    <div class="narrow">
      <h2>Before writing any code, we wrote four rules in a notebook.</h2>
      <span class="hand hand-note">-- page one, verbatim</span>
      <div class="rule-list">
        <div class="rule">
          <strong>${leaf()}Nurture</strong>
          <p>Teaching is watering something in another person. Everything else we build is decoration around that.</p>
        </div>
        <div class="rule">
          <strong>${leaf('#FFD84D')}Stay human</strong>
          <p>No feeds, no streaks, no tricks to keep you scrolling. The app's whole job is to get out of the way of two people talking.</p>
        </div>
        <div class="rule">
          <strong>${leaf()}No catch</strong>
          <p>Free means free. No premium tier, no ads, no "unlock more mentors." Donations keep the servers on, and we publish where every cent goes.</p>
        </div>
        <div class="rule">
          <strong>${leaf('#FFD84D')}Pass it on</strong>
          <p>Knowledge doesn't belong to anyone. This one turned out to be the whole architecture -- every learner is next season's mentor, which is the only way a free garden keeps growing.</p>
        </div>
      </div>
    </div>
  </section>`
}
