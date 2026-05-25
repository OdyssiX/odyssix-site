import OdyssixLogo from "../components/OdyssixLogo";

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

const demos = [
  {
    title: "Villa Smart Site",
    text: "Ιστοσελίδα για βίλα με direct booking request, guest mini app, QR welcome guide και local recommendations.",
  },
  {
    title: "Restaurant Smart Hub",
    text: "Site για εστιατόριο με QR menu, κρατήσεις, Google reviews QR και προσφορές.",
  },
  {
    title: "Event Smart Page",
    text: "Digital event page με πρόσκληση, RSVP, πρόγραμμα, χάρτη και gallery.",
  },
];

const steps = [
  "Καταλαβαίνουμε την επιχείρηση",
  "Σχεδιάζουμε τη λύση",
  "Δημιουργούμε το smart website",
  "Το συνδέουμε με τα σωστά κανάλια",
  "Παραδίδουμε και υποστηρίζουμε",
];

const packages = [
  {
    title: "Smart Starter",
    text: "Για απλή αλλά επαγγελματική online παρουσία.",
    items: [
      "One-page ιστοσελίδα",
      "Mobile-first σχεδιασμός",
      "Φόρμα επικοινωνίας",
      "WhatsApp / τηλέφωνο",
      "Google Map",
    ],
  },
  {
    title: "Smart Business",
    text: "Για ολοκληρωμένη παρουσία και καλύτερη οργάνωση αιτημάτων.",
    items: [
      "3–5 σελίδες",
      "Βασικό SEO",
      "QR εργαλεία",
      "Google Business σύνδεση",
      "Social links",
    ],
  },
  {
    title: "Smart Pro",
    text: "Για επιχειρήσεις που θέλουν mini app εμπειρία και πιο ολοκληρωμένο digital system.",
    items: [
      "Custom website",
      "Mini app εμπειρία",
      "Booking/request flow",
      "Dashboard λογική",
      "Υποστήριξη μετά την παράδοση",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080A0F]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" aria-label="ODYSSIX Home">
            <OdyssixLogo />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#smart" className="transition hover:text-white">
              Smart Websites
            </a>
            <a href="#solutions" className="transition hover:text-white">
              Λύσεις
            </a>
            <a href="#demos" className="transition hover:text-white">
              Demos
            </a>
            <a href="#packages" className="transition hover:text-white">
              Πακέτα
            </a>
            <a
              href="#contact"
              className="rounded-full bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-500"
            >
              Επικοινωνία
            </a>
          </nav>
        </div>
      </header>

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-44 text-center">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[140px]" />

        <div className="relative z-10 mb-6 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300">
          Smart Websites & Digital Systems
        </div>

        <div className="relative z-10 mb-7 scale-95 md:scale-110">
          <OdyssixLogo />
        </div>

        <h1 className="relative z-10 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
          ODYSSIX Smart Sites
        </h1>

        <p className="relative z-10 mt-6 max-w-3xl text-2xl font-semibold text-zinc-200 md:text-4xl">
          Ιστοσελίδες που λειτουργούν σαν εφαρμογές.
        </p>

        <p className="relative z-10 mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
          Δημιουργούμε smart websites που συνδυάζουν επαγγελματική εικόνα,
          mini app εμπειρία, QR εργαλεία και άμεση επικοινωνία, ώστε η
          επιχείρησή σας να φαίνεται καλύτερα και να δέχεται αιτήματα πιο
          οργανωμένα.
        </p>

        <div className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
          <span className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
            Website
          </span>
          <span className="text-red-500">+</span>
          <span className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
            Mini App
          </span>
          <span className="text-red-500">+</span>
          <span className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
            QR Tools
          </span>
          <span className="text-red-500">+</span>
          <span className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
            Dashboard
          </span>
        </div>

        <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Ζητήστε δωρεάν εκτίμηση
          </a>

          <a
            href="#solutions"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Δείτε τις λύσεις μας
          </a>
        </div>
      </section>

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

      <section id="smart" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Smart Website
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Τι είναι ένα Smart Website;
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Είναι μια ιστοσελίδα που λειτουργεί σαν mini εφαρμογή. Συνδυάζει
              επαγγελματική παρουσίαση, άμεση επικοινωνία, QR εργαλεία, φόρμες
              αιτημάτων και δυνατότητες οργάνωσης πελατών.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {smartFeatures.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-zinc-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-red-950/20 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Visibility Hub
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold md:text-5xl">
            Η επιχείρησή σας συνδεδεμένη με όλα τα σωστά κανάλια.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Δεν ανεβάζουμε απλώς μια σελίδα στο internet. Δημιουργούμε ένα
            κεντρικό ψηφιακό hub και το συνδέουμε με τα σημεία από όπου σας
            αναζητούν οι πελάτες.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) => (
              <div
                key={channel}
                className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-zinc-200"
              >
                {channel}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            Για ποιες επιχειρήσεις είναι
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-white/10 bg-[#0D111A] p-5 text-zinc-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Demo Projects
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Δείτε πώς μπορεί να λειτουργήσει στην πράξη.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {demos.map((demo) => (
            <article
              key={demo.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="mb-6 h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-red-600/20 to-white/5" />
              <h3 className="text-2xl font-bold">{demo.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{demo.text}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex text-sm font-semibold text-red-300 hover:text-red-200"
              >
                Ζητήστε παρόμοια λύση →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-5xl">Πώς δουλεύουμε</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-[#0D111A] p-6"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-zinc-100">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Packages
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Ενδεικτικές λύσεις
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Η τελική πρόταση διαμορφώνεται ανάλογα με τις ανάγκες της κάθε
            επιχείρησης.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pack) => (
            <article
              key={pack.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <h3 className="text-2xl font-bold">{pack.title}</h3>
              <p className="mt-4 text-zinc-400">{pack.text}</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                {pack.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/20 bg-red-600/10 p-8 text-center md:p-14">
          <h2 className="text-3xl font-bold md:text-5xl">
            Θέλετε η επιχείρησή σας να αποκτήσει ένα smart website;
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Μπορούμε να δούμε μαζί τι χρειάζεται η επιχείρησή σας και να σας
            προτείνουμε μια λύση που ταιριάζει στις ανάγκες και τον
            προϋπολογισμό σας.
          </p>
          <a
            href="mailto:info@odyssix.com"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-zinc-200"
          >
            Ζητήστε δωρεάν εκτίμηση
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-bold tracking-[0.2em] text-white">
              ODYSSIX
            </span>{" "}
            — Smart Websites & Digital Systems
          </p>
          <p>Ιστοσελίδες που λειτουργούν σαν εφαρμογές.</p>
        </div>
      </footer>
    </main>
  );
}
