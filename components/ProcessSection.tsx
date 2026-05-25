const steps = [
  {
    title: "Καταλαβαίνουμε την επιχείρηση",
    text: "Συζητάμε τι προσφέρετε, ποιοι είναι οι πελάτες σας και τι θέλετε να πετύχει η νέα ψηφιακή παρουσία.",
  },
  {
    title: "Σχεδιάζουμε τη λύση",
    text: "Ορίζουμε τη σωστή δομή, τα βασικά sections, τις λειτουργίες και τα κανάλια που χρειάζεται η επιχείρησή σας.",
  },
  {
    title: "Δημιουργούμε το smart website",
    text: "Φτιάχνουμε την ιστοσελίδα, τη mobile εμπειρία, τις φόρμες, τα QR εργαλεία και τα βασικά ψηφιακά στοιχεία.",
  },
  {
    title: "Το συνδέουμε με τα σωστά κανάλια",
    text: "Συνδέουμε τη σελίδα με Google, social media, χάρτες, reviews, WhatsApp και πλατφόρμες όπου χρειάζεται.",
  },
  {
    title: "Παραδίδουμε και υποστηρίζουμε",
    text: "Ελέγχουμε ότι όλα λειτουργούν σωστά και σας καθοδηγούμε στη χρήση και στα επόμενα βήματα.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white/[0.03] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Process
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Πώς δουλεύουμε
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Κάθε project ακολουθεί μια καθαρή διαδικασία, ώστε να ξέρετε από
            την αρχή τι φτιάχνουμε, γιατί το φτιάχνουμε και πώς θα λειτουργεί
            για την επιχείρησή σας.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:-translate-y-1 hover:border-red-500/40"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold">
                {index + 1}
              </div>

              <h3 className="font-semibold text-zinc-100">{step.title}</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
