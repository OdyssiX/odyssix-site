const solutions = [
  {
    title: "Smart Website",
    label: "Core Solution",
    text: "Σύγχρονη ιστοσελίδα που λειτουργεί σαν mini εφαρμογή, με άμεση επικοινωνία, φόρμες, QR εργαλεία και mobile-first εμπειρία.",
    solves: "Για επιχειρήσεις που θέλουν να φαίνονται πιο επαγγελματικές και να δέχονται οργανωμένα αιτήματα.",
    includes: ["Website", "Mobile εμπειρία", "Φόρμες", "QR εργαλεία"],
    href: "#contact",
  },
  {
    title: "Tourism Visibility Hub",
    label: "Tourism",
    text: "Ψηφιακό hub για βίλες, καταλύματα και τουριστικές επιχειρήσεις με direct request, guest guide και σύνδεση με βασικά online κανάλια.",
    solves: "Για τουριστικές επιχειρήσεις που θέλουν περισσότερη προβολή και καλύτερη εμπειρία επισκέπτη.",
    includes: ["Direct request", "Guest mini app", "QR guide", "Reviews"],
    href: "/demos/villa-smart-site",
  },
  {
    title: "Restaurant Smart Hub",
    label: "Food & Hospitality",
    text: "Έξυπνη online παρουσία για εστιατόρια, ταβέρνες και καφέ με QR menu, κρατήσεις, προσφορές και ευκολότερα reviews.",
    solves: "Για χώρους εστίασης που θέλουν πιο εύκολη επικοινωνία, πιο γρήγορη εξυπηρέτηση και καλύτερη εικόνα.",
    includes: ["QR menu", "Κρατήσεις", "Προσφορές", "Google reviews"],
    href: "/demos/restaurant-smart-hub",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Solutions
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Οι βασικές λύσεις της ODYSSIX
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Κάθε λύση είναι σχεδιασμένη για να εξυπηρετεί έναν συγκεκριμένο
            επιχειρηματικό στόχο: καλύτερη εικόνα, πιο εύκολη επικοινωνία,
            περισσότερα οργανωμένα αιτήματα και πιο καθαρή ψηφιακή παρουσία.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="group flex flex-col rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.04] md:p-8"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-red-300">
                  {solution.label}
                </span>

                <div className="h-10 w-10 rounded-2xl bg-red-600/20 ring-1 ring-red-500/30 transition group-hover:bg-red-600/30" />
              </div>

              <h3 className="text-2xl font-bold">{solution.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">{solution.text}</p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                  Τι λύνει
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  {solution.solves}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {solution.includes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={solution.href}
                className="mt-8 inline-flex w-full justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-red-500/40 hover:bg-red-600"
              >
                {solution.href === "#contact" ? "Ζητήστε εκτίμηση" : "Δείτε demo"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
