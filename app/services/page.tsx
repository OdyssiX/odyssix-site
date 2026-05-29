import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Υπηρεσίες ODYSSIX",
  description:
    "Οι υπηρεσίες της ODYSSIX: smart websites, tourism visibility hubs, restaurant smart hubs, event smart pages, QR tools και business digital setup.",
};

const services = [
  {
    title: "Smart Websites",
    label: "Core",
    text: "Ιστοσελίδες που λειτουργούν σαν mini εφαρμογές, με mobile-first εμπειρία, φόρμες, CTA, QR εργαλεία και οργανωμένη επικοινωνία.",
    idealFor: "Τοπικές επιχειρήσεις, επαγγελματίες, μικρομεσαίες επιχειρήσεις.",
    items: ["Website", "Mobile εμπειρία", "Φόρμες", "CTA", "QR εργαλεία"],
  },
  {
    title: "Tourism Visibility Hub",
    label: "Tourism",
    text: "Ψηφιακό hub για βίλες, καταλύματα, rooms και τουριστικές επιχειρήσεις με direct request, guest guide και σύνδεση με βασικά κανάλια.",
    idealFor: "Βίλες, καταλύματα, μικρά ξενοδοχεία, τουριστικές δραστηριότητες.",
    items: ["Direct request", "Guest guide", "Local info", "Reviews", "WhatsApp"],
  },
  {
    title: "Restaurant Smart Hub",
    label: "Food",
    text: "Online παρουσία για εστιατόρια, ταβέρνες, καφέ και beach bars με QR menu, κρατήσεις, προσφορές και Google reviews flow.",
    idealFor: "Εστιατόρια, ταβέρνες, καφέ, beach bars.",
    items: ["QR menu", "Κρατήσεις", "Προσφορές", "Reviews", "Social links"],
  },
  {
    title: "Event Smart Page",
    label: "Events",
    text: "Ψηφιακή σελίδα για εκδηλώσεις με πρόσκληση, RSVP, πρόγραμμα, χάρτη, QR και gallery.",
    idealFor: "Γάμους, βαφτίσεις, εταιρικές εκδηλώσεις, χώρους events.",
    items: ["Digital invite", "RSVP", "Χάρτης", "Πρόγραμμα", "Gallery"],
  },
  {
    title: "Business Digital Setup",
    label: "Setup",
    text: "Βασικό ψηφιακό στήσιμο επιχείρησης με email, λογαριασμούς, υπολογιστές, εκτυπωτές, backup και πρακτική τεχνική υποστήριξη.",
    idealFor: "Νέες επιχειρήσεις ή επιχειρήσεις που θέλουν να οργανώσουν το ψηφιακό τους περιβάλλον.",
    items: ["Email setup", "Υπολογιστές", "Backup", "Εκτυπωτές", "Λογαριασμοί"],
  },
  {
    title: "QR Tools",
    label: "Tools",
    text: "QR λύσεις για μενού, οδηγούς επισκεπτών, προσκλήσεις, reviews, φόρμες επικοινωνίας και γρήγορη πρόσβαση σε πληροφορίες.",
    idealFor: "Εστίαση, τουρισμό, εκδηλώσεις, τοπικές επιχειρήσεις.",
    items: ["QR menu", "QR guide", "QR reviews", "QR forms", "QR invite"],
  },
];

const process = [
  "Καταγράφουμε την ανάγκη",
  "Προτείνουμε κατάλληλη λύση",
  "Ορίζουμε πακέτο και λειτουργίες",
  "Υλοποιούμε και συνδέουμε τα κανάλια",
  "Παραδίδουμε και υποστηρίζουμε",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <Header />

      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-20 pt-40 md:px-6 md:pb-24">
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-red-600/20 blur-[110px]" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            ODYSSIX Services
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-7xl">
            Υπηρεσίες ODYSSIX
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-9 text-zinc-200">
            Από smart websites μέχρι QR εργαλεία και business digital setup,
            δημιουργούμε πρακτικές λύσεις για επιχειρήσεις που θέλουν καλύτερη ψηφιακή παρουσία.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Κάθε υπηρεσία μπορεί να λειτουργήσει μόνη της ή να συνδυαστεί με
            άλλες, ώστε η επιχείρηση να αποκτήσει ένα πιο ολοκληρωμένο ψηφιακό σύστημα.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="rounded-full bg-red-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-500"
            >
              Ζητήστε εκτίμηση
            </a>

            <a
              href="/#packages"
              className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Δείτε πακέτα
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
                What we offer
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Τι μπορείτε να ζητήσετε
              </h2>
            </div>

            <p className="text-lg leading-8 text-zinc-400">
              Οι υπηρεσίες της ODYSSIX είναι δομημένες ώστε να μπορούν να
              ξεκινήσουν απλά και να μεγαλώσουν σταδιακά, ανάλογα με τις ανάγκες της επιχείρησης.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.04] md:p-8"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-red-300">
                    {service.label}
                  </span>

                  <div className="h-11 w-11 rounded-2xl bg-red-600/20 ring-1 ring-red-500/30 transition group-hover:bg-red-600/30" />
                </div>

                <h3 className="text-2xl font-bold text-white">{service.title}</h3>

                <p className="mt-4 leading-8 text-zinc-400">{service.text}</p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                    Ιδανικό για
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {service.idealFor}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Πώς επιλέγουμε τη σωστή υπηρεσία
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Δεν προτείνουμε την ίδια λύση σε όλους. Πρώτα βλέπουμε τον κλάδο,
              τον στόχο, το διαθέσιμο υλικό και το τι χρειάζεται πραγματικά η επιχείρηση.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-red-500/40"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-zinc-100">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Start
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Δεν είστε σίγουροι ποια υπηρεσία χρειάζεστε;
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Μπορούμε να το δούμε μαζί. Περιγράψτε μας την επιχείρηση και τον
            στόχο σας και θα σας προτείνουμε την πιο σωστή αφετηρία.
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
