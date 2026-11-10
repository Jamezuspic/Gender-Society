import { useState } from 'react'
import { navLinks, site } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#top">Safe<span>Spaces</span> PH</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <nav aria-label="Main">
          <ul className={open ? 'open' : ''}>
            {navLinks.map(l => (
              <li key={l.id}><a href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
