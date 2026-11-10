import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Issue from './components/Issue'
import Stats from './components/Stats'
import Laws from './components/Laws'
import Myths from './components/Myths'
import Action from './components/Action'
import References from './components/References'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Issue />
        <Stats />
        <Laws />
        <Myths />
        <Action />
        <References />
      </main>
      <Footer />
    </>
  )
}
