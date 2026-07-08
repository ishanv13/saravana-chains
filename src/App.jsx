import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import Scene from './components/Scene'

export default function App() {
  return (
    <>
      <Scene />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <WhyUs />
          <Contact />
          {/* Scroll padding for the 3D Jewelry Set animation at the end */}
          <section id="featured-sets" style={{ height: '150vh', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2 className="font-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'rgba(255,255,255,0.8)', textAlign: 'center', zIndex: -1 }}>
              <em style={{ color: '#CA8A04' }}>Exclusive</em> Featured Sets
            </h2>
          </section>
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </>
  )
}
