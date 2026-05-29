const visitorFlow = [
  {
    title: "Βλέπει τη βίλα καθαρά",
    text: "Ο επισκέπτης βλέπει γρήγορα την εικόνα, τις παροχές, την τοποθεσία και γιατί αξίζει να ενδιαφερθεί.",
  },
  {
    title: "Ζητά διαθεσιμότητα",
    text: "Με ένα καθαρό κουμπί μπορεί να στείλει αίτημα για κράτηση ή να επικοινωνήσει άμεσα με τον ιδιοκτήτη.",
  },
  {
    title: "Χρησιμοποιεί guest guide",
    text: "Με QR ή link ανοίγει οδηγίες check-in, Wi-Fi, house rules και χρήσιμες πληροφορίες διαμονής.",
  },
  {
    title: "Βρίσκει τοπικές προτάσεις",
    text: "Παραλίες, εστιατόρια, δραστηριότητες και χρήσιμα σημεία εμφανίζονται οργανωμένα μέσα στο mini app.",
  },
];

const ownerBenefits = [
  "Πιο επαγγελματική εικόνα της βίλας",
  "Περισσότερα direct αιτήματα",
  "Λιγότερες επαναλαμβανόμενες ερωτήσεις",
  "Καλύτερη εμπειρία επισκέπτη",
  "Πιο οργανωμένη επικοινωνία",
  "Σύνδεση με Google, social και reviews",
];

const addOns = [
  "Gallery φωτογραφιών",
  "Χάρτης με προτάσεις",
  "QR welcome card",
  "WhatsApp booking button",
  "Google reviews link",
  "Multi-language περιεχόμενο",
];

export default function VillaDemoStorySection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Villa demo presentation
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Πώς λειτουργεί ένα Villa Smart Site
            </h2>
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            Το demo δείχνει πώς μια βίλα ή ένα κατάλυμα μπορεί να αποκτήσει μια
            πιο οργανωμένη ψηφιακή παρουσία: όχι μόνο για να φαίνεται όμορφα,
            αλλά για να δέχεται αιτήματα και να εξυπηρετεί καλύτερα τον επισκέπτη.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {visitorFlow.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:-translate-y-1 hover:border-red-500/40"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-lg font-bold text-white">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-[#0D111A] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              For the owner
            </p>

            <h3 className="mt-4 text-2xl font-bold md:text-3xl">
              Τι κερδίζει ο ιδιοκτήτης
            </h3>

            <div className="mt-8 grid gap-3">
              {ownerBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-zinc-200"
                >
                  <span className="text-red-400">✓</span> {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-red-500/20 bg-red-600/10 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
              QR guest guide
            </p>

            <h3 className="mt-4 text-2xl font-bold md:text-3xl">
              Το QR γίνεται μικρός ψηφιακός οδηγός επισκέπτη
            </h3>

            <p className="mt-5 leading-8 text-zinc-300">
              Ο επισκέπτης σκανάρει ένα QR μέσα στη βίλα και ανοίγει όλες τις
              χρήσιμες πληροφορίες στο κινητό του. Έτσι ο ιδιοκτήτης δεν
              χρειάζεται να απαντά συνεχώς στα ίδια πράγματα.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {addOns.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-black/20 p-6 text-center md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Demo purpose
          </p>

          <h3 className="mt-4 text-2xl font-bold md:text-4xl">
            Αυτό είναι παράδειγμα. Η τελική λύση προσαρμόζεται στη δική σας βίλα.
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
            Το περιεχόμενο, οι φωτογραφίες, οι γλώσσες, τα κουμπιά και οι
            λειτουργίες μπορούν να αλλάξουν ανάλογα με το κατάλυμα και τον τρόπο
            που δουλεύει η επιχείρηση.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-500"
          >
            Ζητήστε παρόμοια λύση
          </a>
        </div>
      </div>
    </section>
  );
}
