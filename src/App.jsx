import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import TrustFooter from './components/TrustFooter'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 text-white font-bold">M</span>
            <span className="text-base font-semibold tracking-tight">Morrow Bookings</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a
            href="https://wa.me/2348145518102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Services />
        <HowItWorks />
      </main>

      <section className="bg-white" id="contact">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="text-center text-slate-700">Fast responses. Personalised service. Zero booking stress.</p>
        </div>
      </section>

      <TrustFooter />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
