const problemCards = [
  {
    title: "Όχι απλή βιτρίνα",
    text: "Το site δεν πρέπει απλά να δείχνει όμορφο. Πρέπει να βοηθά τον πελάτη να καταλάβει άμεσα τι προσφέρετε.",
  },
  {
    title: "Άμεση επικοινωνία",
    text: "Τηλέφωνο, WhatsApp, φόρμες και αιτήματα πρέπει να είναι εύκολα και ξεκάθαρα από κινητό.",
  },
  {
    title: "Σύνδεση με κανάλια",
    text: "Google, Maps, social media, reviews και πλατφόρμες πρέπει να δουλεύουν μαζί, όχι ξεχωριστά.",
  },
  {
    title: "Οργάνωση αιτημάτων",
    text: "Τα αιτήματα πελατών πρέπει να φτάνουν σωστά και να μην χάνονται σε μηνύματα, inbox και τηλεφωνήματα.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            The problem
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Μια ιστοσελίδα δεν πρέπει απλά να υπάρχει. Πρέπει να δουλεύει.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Οι περισσότερες ιστοσελίδες παρουσιάζουν απλώς μια επιχείρηση.
            Η ODYSSIX σχεδιάζει smart websites που οδηγούν τον επισκέπτη σε
            πραγματική ενέργεια: επικοινωνία, αίτημα, κράτηση ή αγορά.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:-translate-y-1 hover:border-red-500/40"
            >
              <div className="mb-5 h-10 w-10 rounded-2xl bg-red-600/20 ring-1 ring-red-500/30" />
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
