import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import TrustFooter from './components/TrustFooter'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-bold">Morrow Bookings</div>
          <a
            href="https://wa.me/2348145518102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <HowItWorks />
      </main>

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-center text-slate-700">Fast responses. Personalised service. Zero booking stress.</p>
        </div>
      </div>

      <TrustFooter />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
