const packages = [
  {
    title: "Smart Starter",
    subtitle: "Για μικρή επιχείρηση που θέλει σωστή αρχή.",
    text: "Απλή αλλά επαγγελματική online παρουσία, ιδανική για επιχειρήσεις που θέλουν να φαίνονται σωστά και να δέχονται βασική επικοινωνία.",
    badge: "Entry",
    highlighted: false,
    items: [
      "One-page ιστοσελίδα",
      "Mobile-first σχεδιασμός",
      "Φόρμα επικοινωνίας",
      "WhatsApp / τηλέφωνο",
      "Google Map",
    ],
  },
  {
    title: "Smart Business",
    subtitle: "Η πιο ισορροπημένη λύση για σοβαρή παρουσία.",
    text: "Ολοκληρωμένη ιστοσελίδα με βασική οργάνωση αιτημάτων, καλύτερη δομή υπηρεσιών και σύνδεση με σημαντικά online κανάλια.",
    badge: "Recommended",
    highlighted: true,
    items: [
      "Ιστοσελίδα 3–5 σελίδων",
      "Βασικό SEO",
      "QR εργαλεία",
      "Google Business σύνδεση",
      "Social links",
      "Φόρμες αιτημάτων",
    ],
  },
  {
    title: "Smart Pro",
    subtitle: "Για επιχειρήσεις που θέλουν ολοκληρωμένο digital system.",
    text: "Πιο προχωρημένη λύση με mini app εμπειρία, booking/request flow, QR εργαλεία και οργανωμένη λογική dashboard.",
    badge: "Advanced",
    highlighted: false,
    items: [
      "Custom website",
      "Mini app εμπειρία",
      "Booking/request flow",
      "Dashboard λογική",
      "QR tools",
      "Υποστήριξη μετά την παράδοση",
    ],
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          Packages
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          Ενδεικτικές λύσεις
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Επιλέγουμε τη λύση με βάση τις ανάγκες της επιχείρησης. Κάθε πακέτο
          μπορεί να προσαρμοστεί ανάλογα με τον κλάδο, τις λειτουργίες και τον
          στόχο σας.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((pack) => (
          <article
            key={pack.title}
            className={
              pack.highlighted
                ? "relative rounded-3xl border border-red-500/40 bg-red-600/10 p-8 shadow-[0_0_50px_rgba(220,38,38,0.12)] transition hover:-translate-y-1"
                : "relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-red-500/40"
            }
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <span
                className={
                  pack.highlighted
                    ? "rounded-full bg-red-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
                    : "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400"
                }
              >
                {pack.badge}
              </span>
            </div>

            <h3 className="text-2xl font-bold">{pack.title}</h3>

            <p className="mt-3 text-sm font-semibold text-red-300">
              {pack.subtitle}
            </p>

            <p className="mt-5 leading-7 text-zinc-400">{pack.text}</p>

            <ul className="mt-7 space-y-3 text-sm text-zinc-300">
              {pack.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-red-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={
                pack.highlighted
                  ? "mt-8 inline-flex w-full justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-500"
                  : "mt-8 inline-flex w-full justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              }
            >
              Ζητήστε εκτίμηση
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
