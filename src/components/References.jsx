import { references } from '../data'

export default function References() {
  return (
    <section id="refs" style={{ background: '#fff' }}>
      <div className="wrap">
        <h2>References</h2><br />
        <ol className="refs">
          {references.map((r, i) => (
            <li key={i}>
              {r.text}{' '}
              {r.url && <a href={r.url} target="_blank" rel="noreferrer">{r.url}</a>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
