import { useState } from 'react'
import { actions } from '../data'
import Reveal from './Reveal'

export default function Action() {
  const [name, setName] = useState('')
  const [choice, setChoice] = useState('Respect everyone’s boundaries')
  const [msg, setMsg] = useState('')

  function submit(e) {
    e.preventDefault()
    setMsg(`Thank you, ${name.trim()}! Your pledge has been recorded.`)
    setName('')
  }

  return (
    <section id="act">
      <div className="wrap two grid">
        <Reveal>
          <p className="eyebrow">Take action</p>
          <h2>What you can do</h2>
          <ul className="check" style={{ marginTop: 20 }}>
            {actions.map(([b, t]) => <li key={b}><strong>{b}</strong> {t}</li>)}
          </ul>
          <p style={{ marginTop: 18, color: 'var(--muted)' }}>Hotlines: 911</p>
        </Reveal>
        <Reveal className="card">
          <form onSubmit={submit}>
            <h3>Sign the pledge</h3>
            <label htmlFor="n">Your name</label>
            <input id="n" required placeholder="Juan Dela Cruz" value={name} onChange={e => setName(e.target.value)} />
            <label htmlFor="c">I pledge to…</label>
            <select id="c" value={choice} onChange={e => setChoice(e.target.value)}>
              <option>Respect everyone’s boundaries</option>
              <option>Speak up against harassment</option>
              <option>Support survivors</option>
            </select>
            <br /><br />
            <button className="btn primary" type="submit">Submit pledge</button>
            <p id="msg" role="status">{msg}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
