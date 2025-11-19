import { Plane, Ticket, Hotel, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/2348145518102";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    desc: "Personalised flight search, best fare guidance, ticketing.",
  },
  {
    icon: Ticket,
    title: "Event Booking",
    desc: "Venue sourcing, ticket booking, planning assistance.",
  },
  {
    icon: Hotel,
    title: "Hotels & Accommodation",
    desc: "Hotel options, pricing comparison, reservations.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What we can book for you</h2>
        <p className="mt-2 text-slate-600">Everything routed through one quick WhatsApp chat.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
              <MessageCircle className="mr-2 h-4 w-4" /> Chat to Book
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
