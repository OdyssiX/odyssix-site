const packages = [
  {
    title: "Smart Starter",
    subtitle: "Για σωστή επαγγελματική αρχή.",
    idealFor:
      "Μικρές επιχειρήσεις ή επαγγελματίες που θέλουν καθαρή online παρουσία χωρίς περιττή πολυπλοκότητα.",
    text: "Μια απλή αλλά σοβαρή λύση για να παρουσιάζετε την επιχείρησή σας σωστά και να δέχεστε βασική επικοινωνία.",
    badge: "Entry",
    highlighted: false,
    items: [
      "One-page smart website",
      "Mobile-first σχεδιασμός",
      "Βασική παρουσίαση υπηρεσιών",
      "Φόρμα επικοινωνίας",
      "WhatsApp / τηλέφωνο",
      "Google Map",
    ],
  },
  {
    title: "Smart Business",
    subtitle: "Η βασική πρόταση για σοβαρή επιχείρηση.",
    idealFor:
      "Επιχειρήσεις που θέλουν ολοκληρωμένη εικόνα, καλύτερη δομή υπηρεσιών και πιο οργανωμένα αιτήματα.",
    text: "Η πιο ισορροπημένη λύση για επιχειρήσεις που θέλουν κάτι περισσότερο από ένα απλό site.",
    badge: "Recommended",
    highlighted: true,
    items: [
      "Ιστοσελίδα 3–5 σελίδων",
      "Βασική SEO δομή",
      "QR εργαλεία",
      "Google Business σύνδεση",
      "Social links",
      "Φόρμες αιτημάτων",
      "CTA για κλήση / μήνυμα / email",
    ],
  },
  {
    title: "Smart Pro",
    subtitle: "Για ολοκληρωμένο digital system.",
    idealFor:
      "Επιχειρήσεις που χρειάζονται mini app εμπειρία, booking/request flow, περισσότερα εργαλεία και πιο προχωρημένη δομή.",
    text: "Προχωρημένη λύση για επιχειρήσεις που θέλουν ένα ολοκληρωμένο ψηφιακό σύστημα γύρω από την παρουσία τους.",
    badge: "Advanced",
    highlighted: false,
    items: [
      "Custom smart website",
      "Mini app εμπειρία",
      "Booking / request flow",
      "Dashboard λογική",
      "QR tools",
      "Προσαρμοσμένα sections",
      "Υποστήριξη μετά την παράδοση",
    ],
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Packages
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Ενδεικτικές λύσεις
          </h2>
        </div>

        <p className="text-lg leading-8 text-zinc-400">
          Τα πακέτα λειτουργούν σαν αφετηρία. Η τελική πρόταση διαμορφώνεται
          μετά από σύντομη συζήτηση, ώστε η λύση να ταιριάζει στον κλάδο, στις
          ανάγκες και στον στόχο της επιχείρησής σας.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((pack) => (
          <article
            key={pack.title}
            className={
              pack.highlighted
                ? "relative flex flex-col rounded-3xl border border-red-500/50 bg-red-600/10 p-6 shadow-[0_0_70px_rgba(220,38,38,0.14)] transition hover:-translate-y-1 md:p-8"
                : "relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-red-500/40 md:p-8"
            }
          >
            {pack.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_30px_rgba(220,38,38,0.35)]">
                Most Popular
              </div>
            )}

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

              <div
                className={
                  pack.highlighted
                    ? "h-11 w-11 rounded-2xl bg-red-600/30 ring-1 ring-red-500/40"
                    : "h-11 w-11 rounded-2xl bg-white/[0.04] ring-1 ring-white/10"
                }
              />
            </div>

            <h3 className="text-xl font-bold md:text-2xl">{pack.title}</h3>

            <p className="mt-3 text-sm font-semibold text-red-300">
              {pack.subtitle}
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                Για ποιον είναι
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {pack.idealFor}
              </p>
            </div>

            <p className="mt-5 leading-7 text-zinc-400">{pack.text}</p>

            <div className="mt-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                Τι παίρνετε
              </p>

              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                {pack.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-red-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-8">
              <a
                href="#contact"
                className={
                  pack.highlighted
                    ? "inline-flex w-full justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-500"
                    : "inline-flex w-full justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                }
              >
                Ζητήστε εκτίμηση
              </a>

              <p className="mt-4 text-center text-xs text-zinc-500">
                Η τελική πρόταση βγαίνει μετά από σύντομη συζήτηση.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
