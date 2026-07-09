import { useEffect } from 'react'
import './index.css'
import Scene from './components/Scene'
import Loader from './components/Loader'
import AssayFrame from './components/AssayFrame'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stage from './components/Stage'
import Gallery from './components/Gallery'
import Story from './components/Story'
import Services from './components/Services'
import Catalogue from './components/Catalogue'
import Difference from './components/Difference'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import { startScrollTracking } from './three/scroll'

export default function App() {
  useEffect(() => startScrollTracking(), [])

  return (
    <>
      <Loader />
      <Scene />
      <AssayFrame />

      <Navbar />
      <main className="stage">
        <Hero />
        <Stage
          id="stage-macro"
          num="I"
          caption="The Strand"
          detail="Rope link · drawn, twisted & close-welded · Au 916"
        />
        <Story />
        <Services />
        <Stage
          id="stage-collection"
          num="II"
          caption="The Collection"
          detail="One strand becomes five hundred forms"
        />
        <Gallery />
        <Catalogue />
        <Difference />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
