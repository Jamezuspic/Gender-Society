import { laws } from '../data'
import Reveal from './Reveal'

export default function Laws() {
  return (
    <section id="laws">
      <div className="wrap">
        <p className="eyebrow">Know your rights</p>
        <h2>Laws that protect you</h2>
        <p className="lead">These Philippine laws address gender-based harassment and violence. Read the full texts through the links in References.</p>
        <div className="grid laws">
          {laws.map(l => (
            <Reveal key={l.code} className="card law">
              <span className="tag">{l.code}</span>
              <h3>{l.title}</h3>
              <p>{l.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
