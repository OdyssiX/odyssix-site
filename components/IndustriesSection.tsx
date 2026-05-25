const industries = [
  "Βίλες & τουριστικά καταλύματα",
  "Ξενοδοχεία & ενοικιαζόμενα",
  "Εστιατόρια, ταβέρνες & καφέ",
  "Τουριστικές δραστηριότητες",
  "Χώροι εκδηλώσεων",
  "Τοπικές επιχειρήσεις",
  "Επαγγελματίες υπηρεσιών",
  "Μικρομεσαίες επιχειρήσεις",
];

export default function IndustriesSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          Industries
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          Για ποιες επιχειρήσεις είναι
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Οι λύσεις της ODYSSIX μπορούν να προσαρμοστούν σε διαφορετικούς
          κλάδους, με έμφαση στις επιχειρήσεις που χρειάζονται καλύτερη online
          παρουσία, περισσότερη οργάνωση και πιο άμεση επικοινωνία με πελάτες.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl border border-white/10 bg-[#0D111A] p-5 text-zinc-300 transition hover:-translate-y-1 hover:border-red-500/40 hover:text-white"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
