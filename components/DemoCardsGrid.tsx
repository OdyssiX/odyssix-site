const demos = [
  {
    title: "Villa Smart Site",
    label: "Tourism",
    href: "/demos/villa-smart-site",
    previewHref: "/demos/villa-smart-site/live-preview",
    image: "/demo/villa/hero.jpg",
    text: "Smart website για βίλες και καταλύματα με direct booking request, guest guide, QR welcome και local recommendations.",
    features: ["Booking Request", "Guest Guide", "QR Welcome", "Local Info"],
  },
  {
    title: "Restaurant Smart Hub",
    label: "Food & Hospitality",
    href: "/demos/restaurant-smart-hub",
    previewHref: "/demos/restaurant-smart-hub/live-preview",
    image: "/demo/restaurant/hero.jpg",
    text: "Smart hub για εστιατόρια, ταβέρνες και καφέ με QR menu, κρατήσεις, προσφορές και Google reviews flow.",
    features: ["QR Menu", "Reservations", "Offers", "Reviews"],
  },
  {
    title: "Event Smart Page",
    label: "Events",
    href: "/demos/event-smart-page",
    previewHref: "/demos/event-smart-page/live-preview",
    image: "/demo/event/hero.jpg",
    text: "Ψηφιακή σελίδα για events με digital invitation, RSVP, πρόγραμμα, χάρτη, gallery και QR invite.",
    features: ["RSVP", "Schedule", "Map", "Gallery"],
  },
];

export default function DemoCardsGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {demos.map((demo) => (
        <article
          key={demo.title}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0D111A] transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.04]"
        >
          <div
            className="relative h-64 border-b border-white/10 bg-cover bg-center"
            style={{ backgroundImage: `url('${demo.image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/90" />

            <div className="absolute left-5 top-5 rounded-full border border-red-500/30 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-red-200 backdrop-blur">
              {demo.label}
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-2xl font-black text-white">{demo.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {demo.text}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-7">
            <div className="flex flex-wrap gap-2">
              {demo.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-3">
              <a
                href={demo.previewHref}
                className="inline-flex justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-500"
              >
                Δείτε live preview
              </a>

              <a
                href={demo.href}
                className="inline-flex justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Δείτε παρουσίαση
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
