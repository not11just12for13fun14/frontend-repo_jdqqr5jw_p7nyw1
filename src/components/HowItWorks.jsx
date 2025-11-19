import { MousePointer, MessageCircle, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    title: "Click the WhatsApp button",
    desc: "Start a chat in seconds.",
  },
  {
    icon: MessageCircle,
    title: "Tell us what you want to book",
    desc: "Flights, events, or stays—share your details.",
  },
  {
    icon: CheckCircle2,
    title: "Get options, pricing, and confirmation",
    desc: "We handle everything and confirm fast.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-slate-50" id="how">
      <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-32 max-w-7xl bg-gradient-to-b from-transparent to-slate-100" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">Simple, quick, and human. No forms, no stress.</p>
        </div>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
              <div className="mb-3 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
