import { useEffect, useRef } from 'react'

// Wraps content so it fades in when scrolled into view.
export default function Reveal({ className = '', children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('show'); io.disconnect() }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`rv ${className}`}>{children}</div>
}
