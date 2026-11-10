import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, unit = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const step = Math.max(1, Math.ceil(value / 60))
      let v = 0
      const id = setInterval(() => {
        v = Math.min(value, v + step)
        setN(v)
        if (v >= value) clearInterval(id)
      }, 25)
    })
    io.observe(el)
    return () => io.disconnect()
  }, [value])
  return <div className="num" ref={ref}>{n}{unit}</div>
}