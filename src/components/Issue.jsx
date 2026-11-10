import Reveal from './Reveal'

export default function Issue() {
  return (
    <section id="issue">
      <div className="wrap two grid">
        <Reveal>
          <p className="eyebrow">The central issue</p>
          <h2>What is gender-based harassment?</h2>
          <p className="lead">Unwanted words, gestures, or actions that target a person because of their gender or sexual orientation. It can be catcalling, stalking, unwanted messages, or online threats.</p>
        </Reveal>
        <Reveal className="card">
          <h3>Where it happens</h3><br />
          <ul className="check">
            <li><strong>Streets and public transport</strong>: catcalling, groping, following</li>
            <li><strong>Schools and workplaces</strong>: unwelcome remarks, abuse of power</li>
            <li><strong>Online</strong>: harassing messages, stalking, non-consensual sharing of photos</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
