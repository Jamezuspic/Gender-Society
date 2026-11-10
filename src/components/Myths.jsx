import { useState } from 'react'
import { myths } from '../data'
import Reveal from './Reveal'

function FlipCard({ myth, fact }) {
  const [on, setOn] = useState(false)
  return (
    <button className={`flip ${on ? 'on' : ''}`} aria-label="Flip card" onClick={() => setOn(!on)}>
      <div className="flip-in">
        <div className="face front"><small>Myth</small><strong>{myth}</strong></div>
        <div className="face back"><small>Fact</small><strong>{fact}</strong></div>
      </div>
    </button>
  )
}

export default function Myths() {
  return (
    <section id="myths" className="dark">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Myth vs. fact</p>
          <h2>Click a card to flip it</h2>
          <p className="lead">Common beliefs that keep harassment normal, and the truth behind them.</p>
        </Reveal>
        <div className="grid myths">
          {myths.map((m, i) => (
            <Reveal key={i} variant="zoom" delay={i * 150}>
              <FlipCard {...m} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}