import Reveal from './Reveal'

// Full-width photo band with a quote. Image: src/assets/banner.jpg
export default function Banner() {
  return (
    <section className="banner" aria-label="Quote">
      <div className="wrap">
        <Reveal variant="zoom">
          <p className="eyebrow">Our message</p>
          <h2>Safe spaces are not a privilege. They are a right.</h2>
        </Reveal>
      </div>
    </section>
  )
}
