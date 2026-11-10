import { site } from '../data'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <p>© 2026 {site.name} · Midterm Project · {site.group} · {site.members}</p>
      </div>
    </footer>
  )
}
