const trustPoints = [
  "Δωρεάν αρχική εκτίμηση",
  "Πρόταση με βάση τις ανάγκες σας",
  "Λύση προσαρμοσμένη στον κλάδο σας",
];

export default function FinalCTASection() {
  return (
    <section id="contact" className="px-5 py-20 md:px-6 md:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-red-500/20 bg-[#0D111A] p-6 text-center shadow-[0_0_80px_rgba(220,38,38,0.10)] md:p-14">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/25 blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Start your smart website
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Θέλετε η επιχείρησή σας να αποκτήσει ένα smart website;
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Μπορούμε να δούμε μαζί τι χρειάζεται η επιχείρησή σας και να σας
            προτείνουμε μια λύση που ταιριάζει στις ανάγκες, τον κλάδο και τον
            προϋπολογισμό σας.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-zinc-300"
              >
                ✓ {point}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:odyssixdigital@gmail.com"
              className="rounded-full bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(220,38,38,0.28)] transition hover:bg-red-500 md:px-8"
            >
              Ζητήστε δωρεάν εκτίμηση
            </a>

            <a
              href="tel:+306973497371"
              className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10 md:px-8"
            >
              Καλέστε για συζήτηση
            </a>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Η τελική πρόταση διαμορφώνεται μετά από σύντομη συζήτηση για την επιχείρησή σας.
          </p>
        </div>
      </div>
    </section>
  );
}


