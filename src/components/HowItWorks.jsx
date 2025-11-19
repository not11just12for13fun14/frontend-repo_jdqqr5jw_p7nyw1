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
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">How it works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
