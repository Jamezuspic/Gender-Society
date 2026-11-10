import { stats } from '../data'
import Reveal from './Reveal'
import CountUp from './CountUp'

export default function Stats() {
  return (
    <section id="stats" style={{ background: '#fff' }}>
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">By the numbers</p>
          <h2>The data tells the story</h2>
          <p className="lead">Figures 1 to 3 come from a 2016 SWS survey of 800 people (400 women and 400 men) in two Quezon City barangays, so they describe those communities, not the whole country.</p>
        </Reveal>
        <div className="grid stats">
          {stats.map((s, i) => (
            <Reveal key={i} className="card stat" delay={i * 150}>
              <CountUp value={s.value} unit={s.unit} />
              <p>{s.text}</p>
              <cite>[{s.ref}]</cite>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}