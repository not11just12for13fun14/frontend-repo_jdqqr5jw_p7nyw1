import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/2348145518102";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Book Flights, Events, and Hotels in One Personalised WhatsApp Chat
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Morrow Bookings helps you plan and book everything quickly and stress-free.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat With Us on WhatsApp
              </a>
              <span className="text-sm text-slate-500">Fast replies • Personalised help</span>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none select-none rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Avg. reply time</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">&lt; 5m</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Bookings handled</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">1,000+</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Coverage</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">Global</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-emerald-50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
