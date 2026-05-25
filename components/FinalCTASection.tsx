import ContactForm from "./ContactForm";
const trustPoints = [
  "Δωρεάν αρχική εκτίμηση",
  "Πρόταση με βάση τις ανάγκες σας",
  "Λύση προσαρμοσμένη στον κλάδο σας",
];

const nextSteps = [
  {
    title: "Μας λέτε τι χρειάζεστε",
    text: "Στέλνετε μήνυμα ή καλείτε και μας περιγράφετε σύντομα την επιχείρησή σας.",
  },
  {
    title: "Βλέπουμε την καλύτερη λύση",
    text: "Συζητάμε αν σας ταιριάζει Smart Starter, Smart Business, Smart Pro ή ειδική λύση.",
  },
  {
    title: "Παίρνετε καθαρή πρόταση",
    text: "Σας δίνουμε ξεκάθαρη κατεύθυνση για το τι μπορεί να φτιαχτεί και ποια είναι τα επόμενα βήματα.",
  },
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
            Θέλετε να δούμε τι χρειάζεται η επιχείρησή σας;
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Μπορούμε να κάνουμε μια πρώτη σύντομη συζήτηση και να δούμε ποια
            λύση ODYSSIX ταιριάζει καλύτερα στην επιχείρησή σας, στον κλάδο σας
            και στον στόχο σας.
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

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {nextSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-black/20 p-5 text-left"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-base font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <ContactForm />

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <p className="text-sm leading-7 text-zinc-400">
              Email:{" "}
              <a
                href="mailto:odyssixdigital@gmail.com"
                className="font-semibold text-red-300 hover:text-red-200"
              >
                odyssixdigital@gmail.com
              </a>{" "}
              · Τηλέφωνο:{" "}
              <a
                href="tel:+306973497371"
                className="font-semibold text-red-300 hover:text-red-200"
              >
                6973497371
              </a>
            </p>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Η τελική πρόταση διαμορφώνεται μετά από σύντομη συζήτηση για την επιχείρησή σας.
          </p>
        </div>
      </div>
    </section>
  );
}

