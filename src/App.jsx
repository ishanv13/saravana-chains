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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
