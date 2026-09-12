import './about.css'

function em(text) {
  return (text || '').replace(/\*([^*]+)\*/g, '<em>$1</em>')
}

const label = 'about us'
const heading = 'how it all started'
const blocks = [
  {
    kind: 'text',
    body: "Have you ever met someone who made you feel like there is someone in the world who speaks the same language as you? Someone with whom you could be exactly who you are; not just show what everyone else sees, but also that inner part of you that, sometimes, we even hide from ourselves. Someone with whom you can be truly vulnerable, and someone who, above all, understands you, doesn't judge you, and encourages you to become the most truthful version of yourself."
  },
  {
    kind: 'text',
    body: "That is what we felt when we met. We are Sofia and Felipe. It was June 2026. I was leaving Porto, my city, to spend some time in A Coruña. I wanted to see what that month had to offer me, and it ended up offering me much more than I could have imagined. A connection that brings people together, that adds to you, that makes you want to talk all night and never stop. One of those people you meet and somehow know will impact you for the rest of your life."
  },
  {
    kind: 'text',
    body: "We wanted to know everything about each other. Not just what we liked and what we felt, but why we liked the things we liked, why we felt the things we felt, and what had shaped us into the people we were. A few weeks after we met, we found ourselves together again, this time in Porto. During one of those conversations that happen naturally, randomly and spontaneously, I asked Felipe: *Who have been your mentors throughout your life?*"
  },
  {
    kind: 'text',
    body: "And that question took us somewhere deeper. We started thinking about all the people who had marked us throughout our lives, the people who made our eyes light up, who made us question life a little more, or made us realise that life could be much bigger than we had initially imagined. People who opened new horizons for us, who dedicated their precious time to showing us something they were passionate about, or simply showed us a direction without ever pointing out the path."
  },
  {
    kind: 'text',
    body: "We realised that, in many ways, we are the sum of all our mentors, all the things we have learned from them, and what we choose to do with that knowledge afterwards. But we also understood something else: without even noticing it, we had also become mentors to other people throughout our lives. Our stories, our knowledge, our experiences and our way of seeing the world had also been an inspiration to others. And there is something incredibly powerful about that. It gives us a sense of responsibility, but also an immense sense of fulfilment."
  },
  {
    kind: 'highlight',
    body: 'We learn, we share, we grow.'
  },
  {
    kind: 'text',
    body: "Each one of us is a plant, nourished by other people, by stories, experiences, knowledge and everything that feeds us along the way. A plant that grows, develops, bears fruit and creates new seeds. Seeds that fall and germinate in the soil around us. We help other trees grow. There is a symbiosis in all of this. Our growth is connected."
  },
  {
    kind: 'text',
    body: "It was one morning, in the middle of nature, at a campsite, surrounded by trees, that we found ourselves breathing in the fresh air and sharing our dreams. I was telling Felipe about my desire to have a real impact, about how much the idea of mentorship meant to me, and about how beautiful it would be to connect people who want to learn with people who have so much to teach. To create deep connections, capable of marking a life, of making someone grow."
  },
  {
    kind: 'text',
    body: "And Felipe, with his creativity, immediately thought that maybe all of this could actually exist. A platform; a human one. A place where people could genuinely learn from one another, in the most human way possible: through direct contact and a genuine willingness to help, without expecting anything in return. A place where hierarchies and titles have no place. Where anyone can have something to learn and something to share. Where no one is excluded, and where every area is valid and worthy."
  },
  {
    kind: 'text',
    body: "A place where it becomes easier to step outside our own bubbles of influence and reach much further. Where knowledge is not limited to the people we happen to know, the places we happen to be in, or the paths we happen to have crossed."
  },
  {
    kind: 'text',
    body: "And that is how, one morning, in the middle of nature, at a campsite, Meenty was born."
  },
  {
    kind: 'highlight',
    body: 'A place to learn, share and grow.'
  }
]

export function render() {
  const blocksHTML = blocks
    .map((b) =>
      b.kind === 'highlight'
        ? `<p class="about-highlight">${em(b.body)}</p>`
        : `<p>${em(b.body)}</p>`,
    )
    .join('')

  return `
  <section class="about" id="about">
    <div class="narrow">
      <div class="about-head">
        <span class="about-label hand">${label}</span>
        <h2>${heading}</h2>
      </div>
      <div class="about-story">
        ${blocksHTML}
      </div>
    </div>
  </section>`
}
