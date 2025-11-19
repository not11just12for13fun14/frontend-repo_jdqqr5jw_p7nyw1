import { MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/2348145518102";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-48 h-64 w-64 rounded-full bg-teal-50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium">Personalised WhatsApp Booking</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Book flights, events, and hotels the friendly way
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Tell us what you need, we’ll send options and confirm—right inside WhatsApp.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with us to book
              </a>
              <span className="text-sm text-slate-500">Avg. reply time: under 5 minutes</span>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none select-none rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
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
