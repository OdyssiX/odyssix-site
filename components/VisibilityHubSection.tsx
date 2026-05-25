const channels = [
  "Google Search",
  "Google Maps",
  "Google Business Profile",
  "Social Media",
  "Booking / Airbnb / Tripadvisor",
  "WhatsApp",
  "QR Codes",
  "Reviews",
  "Direct φόρμες επικοινωνίας",
];

const hubBenefits = [
  {
    title: "Ένα κεντρικό σημείο",
    text: "Η ιστοσελίδα λειτουργεί σαν βάση της online παρουσίας σας και συνδέεται με όλα τα υπόλοιπα κανάλια.",
  },
  {
    title: "Πιο καθαρή διαδρομή πελάτη",
    text: "Ο επισκέπτης μπορεί να σας βρει, να καταλάβει τι προσφέρετε και να επικοινωνήσει χωρίς σύγχυση.",
  },
  {
    title: "Περισσότερη οργάνωση",
    text: "Τα αιτήματα, οι κρατήσεις και οι επικοινωνίες οδηγούνται σε πιο καθαρή και ελεγχόμενη ροή.",
  },
];

export default function VisibilityHubSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-red-950/20 p-6 md:p-12">
        <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />

        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Visibility Hub
          </p>

          <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
                Η επιχείρησή σας συνδεδεμένη με όλα τα σωστά κανάλια.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                Δεν ανεβάζουμε απλώς μια σελίδα στο internet. Δημιουργούμε ένα
                κεντρικό ψηφιακό hub που βοηθά την επιχείρησή σας να φαίνεται
                καλύτερα, να δέχεται πιο καθαρά αιτήματα και να συνδέεται με
                τα σημεία από όπου σας αναζητούν οι πελάτες.
              </p>
            </div>

            <div className="rounded-3xl border border-red-500/20 bg-red-600/10 p-5">
              <p className="text-sm font-semibold text-red-300">
                Στόχος:
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Ο πελάτης να βρίσκει την επιχείρηση, να καταλαβαίνει γρήγορα
                την αξία της και να κάνει το επόμενο βήμα: κλήση, μήνυμα,
                αίτημα ή κράτηση.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {hubBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-[#0D111A]/80 p-6 transition hover:-translate-y-1 hover:border-red-500/40"
              >
                <div className="mb-5 h-10 w-10 rounded-2xl bg-red-600/20 ring-1 ring-red-500/30" />
                <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-400">
              Συνδεδεμένα κανάλια
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {channels.map((channel) => (
                <div
                  key={channel}
                  className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-zinc-200 transition hover:border-red-500/40 hover:bg-red-600/10"
                >
                  <span className="text-red-400">✓</span>{" "}
                  {channel}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
