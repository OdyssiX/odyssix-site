const smartFeatures = [
  "Mobile-first σχεδιασμός",
  "Φόρμες επικοινωνίας ή κρατήσεων",
  "WhatsApp / τηλέφωνο / email",
  "QR εργαλεία",
  "Σύνδεση με Google και social media",
  "Mini app εμπειρία",
  "Οργανωμένη ροή αιτημάτων",
  "Digital system λογική",
];

const benefits = [
  {
    title: "Πιο καθαρή εικόνα",
    text: "Η επιχείρηση παρουσιάζεται επαγγελματικά, με σωστή δομή και ξεκάθαρο μήνυμα.",
  },
  {
    title: "Πιο εύκολη επικοινωνία",
    text: "Ο επισκέπτης μπορεί να καλέσει, να στείλει μήνυμα ή να ζητήσει προσφορά χωρίς να ψάχνει.",
  },
  {
    title: "Πιο οργανωμένα αιτήματα",
    text: "Τα αιτήματα δεν χάνονται σε inbox, μηνύματα και τηλεφωνήματα. Έρχονται πιο καθαρά και στοχευμένα.",
  },
];

export default function SmartWebsiteSection() {
  return (
    <section id="smart" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Smart Website
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Δεν είναι απλά μια ιστοσελίδα. Είναι το ψηφιακό σύστημα της επιχείρησής σας.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Ένα Smart Website δεν υπάρχει μόνο για να δείχνει όμορφο. Υπάρχει
            για να βοηθά τον επισκέπτη να καταλάβει γρήγορα τι προσφέρετε, να
            επικοινωνήσει εύκολα και να κάνει το επόμενο βήμα χωρίς σύγχυση.
          </p>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Η ODYSSIX σχεδιάζει ιστοσελίδες που λειτουργούν σαν mini εφαρμογές:
            με mobile εμπειρία, QR εργαλεία, φόρμες, σύνδεση με Google/social
            και οργανωμένη ροή αιτημάτων.
          </p>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {smartFeatures.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-zinc-200 transition hover:-translate-y-1 hover:border-red-500/40"
              >
                <span className="text-red-400">✓</span>{" "}
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:-translate-y-1 hover:border-red-500/40"
          >
            <div className="mb-5 h-10 w-10 rounded-2xl bg-red-600/20 ring-1 ring-red-500/30" />
            <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
