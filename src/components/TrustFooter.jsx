import { MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/2348145518102";

export default function TrustFooter() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 text-emerald-700">
            <ShieldCheck className="h-5 w-5" />
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="mt-3 text-lg font-medium text-slate-800">
            Fast responses. Personalised service. Zero booking stress.
          </p>
          <p className="mt-2 text-sm text-slate-600">We compare options and handle the details so you don’t have to.</p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-slate-500">Morrow Bookings • +234 814 551 8102</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">© {new Date().getFullYear()} Morrow Bookings. All rights reserved.</p>
      </div>
    </footer>
  );
}
