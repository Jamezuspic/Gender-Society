import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Issue from './components/Issue'
import Stats from './components/Stats'
import Laws from './components/Laws'
import Banner from './components/Banner'
import Myths from './components/Myths'
import Action from './components/Action'
import References from './components/References'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Issue />
        <Stats />
        <Laws />
        <Banner />
        <Myths />
        <Action />
        <References />
      </main>
      <Footer />
    </>
  )
}
