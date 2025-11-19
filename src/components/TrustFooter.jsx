import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/2348145518102";

export default function TrustFooter() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-center text-slate-700">
          Fast responses. Personalised service. Zero booking stress.
        </p>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-slate-500">Morrow Bookings • +234 814 551 8102</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
