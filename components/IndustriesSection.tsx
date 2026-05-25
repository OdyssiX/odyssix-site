const industries = [
  {
    title: "Βίλες & καταλύματα",
    text: "Για επιχειρήσεις φιλοξενίας που θέλουν καλύτερη παρουσία, direct αιτήματα και ψηφιακή εμπειρία επισκέπτη.",
    solution: "Tourism Visibility Hub",
  },
  {
    title: "Ξενοδοχεία & ενοικιαζόμενα",
    text: "Για μικρά ξενοδοχεία, rooms και ενοικιαζόμενα που θέλουν οργανωμένη online εικόνα και σύνδεση με βασικά κανάλια.",
    solution: "Smart Website + Booking Request",
  },
  {
    title: "Εστιατόρια, ταβέρνες & καφέ",
    text: "Για χώρους εστίασης που χρειάζονται QR menu, κρατήσεις, reviews, προσφορές και άμεση επικοινωνία.",
    solution: "Restaurant Smart Hub",
  },
  {
    title: "Τουριστικές δραστηριότητες",
    text: "Για tours, δραστηριότητες και εμπειρίες που χρειάζονται παρουσίαση, αιτήματα, χάρτες και εύκολη επικοινωνία.",
    solution: "Tourism Smart Page",
  },
  {
    title: "Χώροι εκδηλώσεων",
    text: "Για γάμους, βαφτίσεις, εταιρικά events και χώρους που θέλουν RSVP, πρόγραμμα, χάρτη και digital πρόσκληση.",
    solution: "Event Smart Page",
  },
  {
    title: "Τοπικές επιχειρήσεις",
    text: "Για επιχειρήσεις που θέλουν να φαίνονται επαγγελματικά και να δέχονται πιο οργανωμένα αιτήματα.",
    solution: "Smart Business Website",
  },
  {
    title: "Επαγγελματίες υπηρεσιών",
    text: "Για τεχνικούς, συμβούλους, δημιουργούς και επαγγελματίες που θέλουν καθαρή παρουσίαση υπηρεσιών.",
    solution: "Professional Smart Site",
  },
  {
    title: "Μικρομεσαίες επιχειρήσεις",
    text: "Για επιχειρήσεις που θέλουν πιο ολοκληρωμένη ψηφιακή παρουσία με δομή, φόρμες και online εργαλεία.",
    solution: "Smart Pro System",
  },
];

export default function IndustriesSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Industries
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Για ποιες επιχειρήσεις είναι
            </h2>
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            Οι λύσεις της ODYSSIX προσαρμόζονται σε διαφορετικούς κλάδους, με
            έμφαση σε επιχειρήσεις που χρειάζονται καλύτερη online παρουσία,
            περισσότερη οργάνωση και πιο άμεση επικοινωνία με πελάτες.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="group flex min-h-[260px] flex-col rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.04]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600/20 ring-1 ring-red-500/30 transition group-hover:bg-red-600/30">
                <span className="text-sm font-bold text-red-300">OX</span>
              </div>

              <h3 className="text-lg font-bold text-white">
                {industry.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                {industry.text}
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                  Προτεινόμενη λύση
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-200">
                  {industry.solution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
