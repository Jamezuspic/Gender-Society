import { useEffect, useRef } from 'react'

// Fades/slides content in when it scrolls into view.
// variant: '' (rise up) | 'left' | 'right' | 'zoom'
// delay: milliseconds to wait (use for staggering cards one after another)
export default function Reveal({ className = '', variant = '', delay = 0, children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let t
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        t = setTimeout(() => el.classList.add('show'), delay)
        io.disconnect()
      }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => { clearTimeout(t); io.disconnect() }
  }, [delay])
  return <div ref={ref} className={`rv ${variant} ${className}`}>{children}</div>
}
