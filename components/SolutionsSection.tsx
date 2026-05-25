const solutions = [
  {
    title: "Smart Website",
    text: "Σύγχρονη ιστοσελίδα που λειτουργεί σαν mini εφαρμογή, με φόρμες, άμεση επικοινωνία, QR εργαλεία και mobile-first σχεδιασμό.",
    ideal: "Ιδανικό για τοπικές επιχειρήσεις, επαγγελματίες και μικρές εταιρείες.",
  },
  {
    title: "Tourism Visibility Hub",
    text: "Ψηφιακό hub για βίλες, καταλύματα και τουριστικές επιχειρήσεις με direct booking request, Google, πλατφόρμες, reviews και guest mini app.",
    ideal: "Ιδανικό για βίλες, rooms, μικρά ξενοδοχεία και τουριστικές δραστηριότητες.",
  },
  {
    title: "Restaurant Smart Hub",
    text: "Έξυπνη online παρουσία για εστιατόρια με QR menu, κρατήσεις, Google reviews QR, προσφορές και άμεση επικοινωνία.",
    ideal: "Ιδανικό για εστιατόρια, ταβέρνες, καφέ και beach bars.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-white/[0.03] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Solutions
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Οι βασικές λύσεις της ODYSSIX
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="rounded-3xl border border-white/10 bg-[#0D111A] p-8 transition hover:-translate-y-1 hover:border-red-500/40"
            >
              <h3 className="text-2xl font-bold">{solution.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{solution.text}</p>
              <p className="mt-6 text-sm font-medium text-red-300">
                {solution.ideal}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
