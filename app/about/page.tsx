import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Για την ODYSSIX",
  description:
    "Μάθετε τι είναι η ODYSSIX, πώς δημιουργεί smart websites, mini apps και ψηφιακά συστήματα για επιχειρήσεις.",
};

const values = [
  {
    title: "Δεν φτιάχνουμε απλές βιτρίνες",
    text: "Η ODYSSIX σχεδιάζει ιστοσελίδες που βοηθούν τον επισκέπτη να κάνει ενέργεια: να επικοινωνήσει, να ζητήσει προσφορά, να κάνει αίτημα ή να βρει γρήγορα αυτό που χρειάζεται.",
  },
  {
    title: "Σκεφτόμαστε σαν σύστημα",
    text: "Κάθε λύση συνδέεται με τα σωστά κανάλια: Google, social media, QR, φόρμες, reviews, WhatsApp και όπου χρειάζεται πλατφόρμες κρατήσεων.",
  },
  {
    title: "Δουλεύουμε με καθαρή διαδικασία",
    text: "Πριν ξεκινήσει ένα project, καταλαβαίνουμε την επιχείρηση, τον στόχο, το κοινό και τις ανάγκες της, ώστε να προτείνουμε τη σωστή λύση.",
  },
];

const capabilities = [
  "Smart Websites",
  "Mini App εμπειρία",
  "QR εργαλεία",
  "Φόρμες αιτημάτων",
  "Tourism Visibility Hubs",
  "Restaurant Smart Hubs",
  "Event Smart Pages",
  "Business Digital Setup",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <Header />

      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-20 pt-40 md:px-6 md:pb-24">
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-red-600/20 blur-[110px]" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            About ODYSSIX
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-7xl">
            Για την ODYSSIX
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-9 text-zinc-200">
            Δημιουργούμε smart websites, mini apps και ψηφιακά συστήματα για
            επιχειρήσεις που θέλουν να φαίνονται καλύτερα και να λειτουργούν πιο οργανωμένα.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Η ODYSSIX δεν αντιμετωπίζει την ιστοσελίδα σαν μια απλή online
            κάρτα. Τη βλέπει σαν κεντρικό ψηφιακό σημείο της επιχείρησης:
            ένα μέρος όπου ο πελάτης μπορεί να ενημερωθεί, να επικοινωνήσει,
            να ζητήσει προσφορά, να κάνει αίτημα ή να βρει γρήγορα αυτό που χρειάζεται.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="rounded-full bg-red-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-500"
            >
              Μιλήστε μαζί μας
            </a>

            <a
              href="/#demos"
              className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Δείτε demo projects
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Τι κάνει διαφορετικά η ODYSSIX
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Συνδυάζουμε σχεδιασμό, τεχνολογία, οργάνωση και πρακτική χρήση,
              ώστε η επιχείρηση να μην έχει απλώς ένα site, αλλά ένα εργαλείο
              που τη βοηθά στην καθημερινή της προβολή και επικοινωνία.
            </p>
          </div>

          <div className="grid gap-5">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:-translate-y-1 hover:border-red-500/40"
              >
                <div className="mb-5 h-10 w-10 rounded-2xl bg-red-600/20 ring-1 ring-red-500/30" />
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Network
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Ευέλικτη ομάδα και συνεργαζόμενο τεχνικό δίκτυο
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Η ODYSSIX λειτουργεί ως brand, σημείο επικοινωνίας και οργάνωσης
              των projects. Ανάλογα με τις ανάγκες κάθε δουλειάς, μπορεί να
              συνεργάζεται με τεχνικούς, developers και επαγγελματίες υποστήριξης,
              ώστε το project να υλοποιείται σωστά και με την κατάλληλη τεχνική κάλυψη.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Αυτό επιτρέπει στην επιχείρηση να έχει ένα καθαρό σημείο επαφής,
              ενώ πίσω από τη λύση υπάρχει η κατάλληλη συνεργασία για σχεδιασμό,
              ανάπτυξη, τεχνική υποστήριξη και ψηφιακό στήσιμο.
            </p>
          </div>

          <div className="rounded-[2rem] border border-red-500/20 bg-red-600/10 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
              ODYSSIX approach
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Ένας συνεργάτης για την ψηφιακή παρουσία της επιχείρησης.
            </h3>

            <p className="mt-5 text-sm leading-7 text-zinc-300">
              Από την πρώτη εικόνα μέχρι τη φόρμα επικοινωνίας, το QR εργαλείο,
              το demo flow ή το business setup, ο στόχος είναι η επιχείρηση να
              έχει πιο καθαρή, οργανωμένη και λειτουργική ψηφιακή παρουσία.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
                Capabilities
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Τι μπορούμε να αναλάβουμε
              </h2>
            </div>

            <p className="text-lg leading-8 text-zinc-400">
              Οι υπηρεσίες μπορούν να προσαρμοστούν ανάλογα με το μέγεθος, τον
              κλάδο και τις ανάγκες κάθε επιχείρησης.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#0D111A] p-5 text-zinc-200 transition hover:-translate-y-1 hover:border-red-500/40"
              >
                <span className="text-red-400">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/20 bg-red-600/10 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Work with ODYSSIX
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Θέλετε να δούμε τι χρειάζεται η επιχείρησή σας;
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Μπορούμε να ξεκινήσουμε με μια σύντομη συζήτηση και να δούμε ποια
            λύση ταιριάζει καλύτερα στον στόχο σας.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-500"
          >
            Ζητήστε δωρεάν εκτίμηση
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
