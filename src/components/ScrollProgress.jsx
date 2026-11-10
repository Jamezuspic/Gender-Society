import { useEffect, useState } from 'react'

// Thin gradient bar at the top that fills as you scroll down the page.
export default function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setP(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div className="progress" style={{ width: p + '%' }} />
}
