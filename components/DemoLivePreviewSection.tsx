const previewData = {
  villa: {
    eyebrow: "Villa live preview",
    title: "Δείτε πώς θα μπορούσε να μοιάζει ένα premium smart site βίλας.",
    text: "Ανοίξτε ένα demo με φωτογραφίες, gallery, παροχές, request availability, QR guest guide και local recommendations.",
    image: "/demo/villa/hero.jpg",
    href: "/demos/villa-smart-site/live-preview",
    features: ["Gallery", "Booking request", "Guest guide", "Local info"],
  },
  restaurant: {
    eyebrow: "Restaurant live preview",
    title: "Δείτε πώς μπορεί να λειτουργεί ένα smart hub εστιατορίου.",
    text: "Ανοίξτε ένα demo με εικόνα χώρου, QR menu, κρατήσεις, προσφορές, Google reviews και άμεση επικοινωνία.",
    image: "/demo/restaurant/hero.jpg",
    href: "/demos/restaurant-smart-hub/live-preview",
    features: ["QR Menu", "Reservations", "Offers", "Reviews"],
  },
  event: {
    eyebrow: "Event live preview",
    title: "Δείτε πώς μπορεί να μοιάζει μια ψηφιακή σελίδα εκδήλωσης.",
    text: "Ανοίξτε ένα demo με digital invitation, RSVP, πρόγραμμα, χάρτη, gallery και QR invite.",
    image: "/demo/event/hero.jpg",
    href: "/demos/event-smart-page/live-preview",
    features: ["RSVP", "Schedule", "Map", "Gallery"],
  },
};

type DemoPreviewKey = keyof typeof previewData;

export default function DemoLivePreviewSection({
  demoKey,
}: {
  demoKey: DemoPreviewKey;
}) {
  const preview = previewData[demoKey];

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div
          className="relative min-h-[320px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-cover bg-center"
          style={{ backgroundImage: `url('${preview.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/85" />

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-300">
              {preview.eyebrow}
            </p>

            <h3 className="mt-3 max-w-xl text-3xl font-black leading-tight text-white md:text-4xl">
              Live Preview
            </h3>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Interactive demo
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            {preview.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {preview.text}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {preview.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={preview.href}
              className="rounded-full bg-red-600 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-red-500"
            >
              Άνοιγμα live preview
            </a>

            <a
              href="/#contact"
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Ζητήστε παρόμοια λύση
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
