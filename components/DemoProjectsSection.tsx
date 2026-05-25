const demos = [
  {
    title: "Villa Smart Site",
    text: "Ιστοσελίδα για βίλα με direct booking request, guest mini app, QR welcome guide και local recommendations.",
    tags: ["Booking Request", "Guest App", "QR Guide"],
    href: "/demos/villa-smart-site",
  },
  {
    title: "Restaurant Smart Hub",
    text: "Site για εστιατόριο με QR menu, κρατήσεις, Google reviews QR και προσφορές.",
    tags: ["QR Menu", "Reservations", "Reviews"],
    href: "/demos/restaurant-smart-hub",
  },
  {
    title: "Event Smart Page",
    text: "Digital event page με πρόσκληση, RSVP, πρόγραμμα, χάρτη και gallery.",
    tags: ["RSVP", "Digital Invite", "Gallery"],
    href: "/demos/event-smart-page",
  },
];

export default function DemoProjectsSection() {
  return (
    <section id="demos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          Demo Projects
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          Δείτε πώς μπορεί να λειτουργήσει στην πράξη.
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Τα demo projects δείχνουν πώς μπορεί μια επιχείρηση να αποκτήσει
          όχι απλώς μια ιστοσελίδα, αλλά μια ολοκληρωμένη ψηφιακή εμπειρία.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {demos.map((demo, index) => (
          <article
            key={demo.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.06]"
          >
            <div className="relative h-56 border-b border-white/10 bg-[#0D111A] p-5 pt-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
              <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-red-600/20 blur-3xl" />

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

              <div className="absolute left-5 top-3 z-10 rounded-full border border-red-500/30 bg-[#0D111A]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-red-300 backdrop-blur">
                Demo 0{index + 1}
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold">{demo.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">{demo.text}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {demo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={demo.href}
                className="mt-7 inline-flex text-sm font-semibold text-red-300 transition hover:text-red-200"
              >
                Δείτε το demo →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}



