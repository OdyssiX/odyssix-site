import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Demo Projects",
  description:
    "Demo projects της ODYSSIX για smart websites, tourism hubs, restaurant hubs και event smart pages.",
};

const demos = [
  {
    title: "Villa Smart Site",
    label: "Tourism",
    href: "/demos/villa-smart-site",
    text: "Smart website για βίλες και καταλύματα με direct booking request, guest mini app, QR welcome guide και local recommendations.",
    features: ["Booking Request", "Guest App", "QR Guide", "Local Info"],
  },
  {
    title: "Restaurant Smart Hub",
    label: "Food & Hospitality",
    href: "/demos/restaurant-smart-hub",
    text: "Smart hub για εστιατόρια, ταβέρνες και καφέ με QR menu, κρατήσεις, προσφορές και Google reviews flow.",
    features: ["QR Menu", "Reservations", "Offers", "Reviews"],
  },
  {
    title: "Event Smart Page",
    label: "Events",
    href: "/demos/event-smart-page",
    text: "Ψηφιακή σελίδα για γάμους, βαφτίσεις και events με digital invitation, RSVP, πρόγραμμα, χάρτη και gallery.",
    features: ["Digital Invite", "RSVP", "Map", "Gallery"],
  },
];

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <Header />

      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-20 pt-40 md:px-6 md:pb-24">
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-red-600/20 blur-[110px]" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Demo Projects
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-7xl">
            Demo λύσεις της ODYSSIX
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-9 text-zinc-200">
            Δείτε παραδείγματα smart websites και digital systems που μπορούν
            να προσαρμοστούν σε διαφορετικές επιχειρήσεις.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Τα demo projects δείχνουν πώς μπορεί μια επιχείρηση να αποκτήσει
            όχι απλώς μια ιστοσελίδα, αλλά μια πιο οργανωμένη ψηφιακή εμπειρία
            για πελάτες, επισκέπτες και αιτήματα.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {demos.map((demo, index) => (
              <article
                key={demo.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0D111A] transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.04]"
              >
                <div className="relative h-56 border-b border-white/10 bg-black/20 p-5 pt-10">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-red-600/20 blur-3xl" />

                  <div className="absolute left-5 top-3 z-10 rounded-full border border-red-500/30 bg-[#0D111A]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-red-300 backdrop-blur">
                    Demo 0{index + 1}
                  </div>

                  <div className="relative mx-auto h-full max-w-[260px] rounded-2xl border border-white/15 bg-black/40 p-3 shadow-2xl">
                    <div className="mb-3 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                    </div>

                    <div className="space-y-3">
                      <div className="h-5 w-28 rounded bg-white/15" />
                      <div className="h-3 w-full rounded bg-white/10" />
                      <div className="h-3 w-4/5 rounded bg-white/10" />

                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div className="h-12 rounded-lg bg-red-600/30 ring-1 ring-red-500/20" />
                        <div className="h-12 rounded-lg bg-white/10" />
                      </div>

                      <div className="h-8 rounded-full bg-red-600/80" />
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-red-300">
                    {demo.label}
                  </span>

                  <h2 className="mt-5 text-2xl font-bold">{demo.title}</h2>

                  <p className="mt-4 leading-7 text-zinc-400">{demo.text}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {demo.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={demo.href}
                    className="mt-8 inline-flex w-full justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-500"
                  >
                    Δείτε το demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/20 bg-red-600/10 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Custom demo
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Θέλετε demo για τον δικό σας κλάδο;
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Μπορούμε να δούμε την επιχείρησή σας και να προτείνουμε μια smart
            λύση προσαρμοσμένη στον δικό σας κλάδο.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-500"
          >
            Ζητήστε δωρεάν εκτίμηση
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
