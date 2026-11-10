import { useEffect, useState } from 'react'
import { navLinks } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
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
