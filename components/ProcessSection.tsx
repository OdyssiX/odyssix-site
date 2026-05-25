const steps = [
  {
    title: "Καταλαβαίνουμε την επιχείρηση",
    text: "Συζητάμε τι προσφέρετε, ποιοι είναι οι πελάτες σας και ποιος είναι ο βασικός στόχος της νέας ψηφιακής παρουσίας.",
    result: "Καθαρή εικόνα αναγκών",
  },
  {
    title: "Σχεδιάζουμε τη λύση",
    text: "Ορίζουμε τη δομή, τις βασικές σελίδες, τις λειτουργίες, τα CTA και τα κανάλια που πρέπει να συνδεθούν.",
    result: "Σωστή στρατηγική πριν τον σχεδιασμό",
  },
  {
    title: "Δημιουργούμε το smart website",
    text: "Φτιάχνουμε την ιστοσελίδα, τη mobile εμπειρία, τις φόρμες, τα QR εργαλεία και τα βασικά ψηφιακά στοιχεία.",
    result: "Λειτουργική online παρουσία",
  },
  {
    title: "Το συνδέουμε με τα σωστά κανάλια",
    text: "Συνδέουμε τη σελίδα με Google, social media, χάρτες, reviews, WhatsApp και πλατφόρμες όπου χρειάζεται.",
    result: "Καλύτερη προβολή και επικοινωνία",
  },
  {
    title: "Παραδίδουμε και υποστηρίζουμε",
    text: "Ελέγχουμε ότι όλα λειτουργούν σωστά και σας καθοδηγούμε στη χρήση, στη διαχείριση και στα επόμενα βήματα.",
    result: "Παράδοση με καθοδήγηση",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Process
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Πώς δουλεύουμε
            </h2>
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            Κάθε project ακολουθεί συγκεκριμένη διαδικασία, ώστε να ξέρετε από
            την αρχή τι φτιάχνουμε, γιατί το φτιάχνουμε και πώς θα βοηθήσει τη
            δική σας επιχείρηση.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-red-500/60 via-white/10 to-transparent lg:block" />

          <div className="grid gap-6">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="relative grid gap-6 rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:-translate-y-1 hover:border-red-500/40 md:p-8 lg:grid-cols-[0.25fr_1fr_0.45fr] lg:items-center lg:pl-20"
              >
                <div className="absolute left-0 top-8 hidden -translate-x-1/2 lg:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/40 bg-red-600 text-sm font-bold text-white shadow-[0_0_30px_rgba(220,38,38,0.28)]">
                    {index + 1}
                  </div>
                </div>

                <div className="flex items-center gap-4 lg:block">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white lg:hidden">
                    {index + 1}
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-300">
                    Step 0{index + 1}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                    {step.text}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                    Αποτέλεσμα
                  </p>
                  <p className="mt-2 text-sm font-semibold text-zinc-200">
                    {step.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
