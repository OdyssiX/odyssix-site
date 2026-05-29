import VillaDemoPreview from "./VillaDemoPreview";
import Header from "./Header";
import Footer from "./Footer";

const demoData = {
  villa: {
    label: "Tourism Demo",
    title: "Villa Smart Site",
    subtitle:
      "Ψηφιακή εμπειρία για βίλες, καταλύματα και τουριστικές επιχειρήσεις.",
    description:
      "Ένα ολοκληρωμένο smart website για βίλες και καταλύματα, με direct booking request, guest mini app, QR welcome guide και local recommendations.",
    problem:
      "Πολλά καταλύματα βασίζονται μόνο σε πλατφόρμες κρατήσεων και δεν έχουν δική τους οργανωμένη online παρουσία. Έτσι χάνουν direct αιτήματα, επαναλαμβανόμενη επικοινωνία και ευκαιρίες για καλύτερη εμπειρία επισκέπτη.",
    result:
      "Ο επισκέπτης βρίσκει άμεσα πληροφορίες, ζητά διαθεσιμότητα, βλέπει οδηγίες, τοπικές προτάσεις και επικοινωνεί εύκολα με τον ιδιοκτήτη.",
    features: [
      "Direct booking request",
      "Guest mini app",
      "QR welcome guide",
      "Local recommendations",
      "WhatsApp επικοινωνία",
      "Reviews section",
    ],
    workflow: [
      "Ο επισκέπτης σκανάρει QR ή μπαίνει στο site.",
      "Βλέπει τη βίλα, τις παροχές και τις πληροφορίες κράτησης.",
      "Στέλνει αίτημα διαθεσιμότητας ή WhatsApp μήνυμα.",
      "Μετά την κράτηση χρησιμοποιεί τον ψηφιακό οδηγό επισκέπτη.",
    ],
    idealFor: "Βίλες, rooms, μικρά ξενοδοχεία, τουριστικά καταλύματα.",
  },
  restaurant: {
    label: "Restaurant Demo",
    title: "Restaurant Smart Hub",
    subtitle: "Έξυπνη online παρουσία για εστιατόρια, ταβέρνες και καφέ.",
    description:
      "Ένα smart hub για χώρους εστίασης με QR menu, κρατήσεις τραπεζιών, Google reviews QR, προσφορές ημέρας και άμεση επικοινωνία.",
    problem:
      "Πολλά εστιατόρια έχουν social media αλλά όχι οργανωμένη ψηφιακή εμπειρία. Ο πελάτης δυσκολεύεται να δει μενού, να κάνει κράτηση ή να αφήσει review.",
    result:
      "Ο πελάτης βλέπει το μενού από QR, κάνει κράτηση, βλέπει προσφορές και μπορεί να αφήσει review πιο εύκολα.",
    features: [
      "QR menu",
      "Κρατήσεις τραπεζιών",
      "Google reviews QR",
      "Προσφορές ημέρας",
      "Social links",
      "WhatsApp / direct contact",
    ],
    workflow: [
      "Ο πελάτης σκανάρει QR στο τραπέζι ή από social.",
      "Βλέπει το μενού και τις προσφορές.",
      "Κάνει κράτηση ή επικοινωνεί άμεσα.",
      "Μετά την επίσκεψη οδηγείται εύκολα σε review.",
    ],
    idealFor: "Εστιατόρια, ταβέρνες, καφέ, beach bars και χώροι εστίασης.",
  },
  event: {
    label: "Event Demo",
    title: "Event Smart Page",
    subtitle: "Ψηφιακή σελίδα για εκδηλώσεις, προσκλήσεις και RSVP.",
    description:
      "Μια smart event page για γάμους, βαφτίσεις και εταιρικές εκδηλώσεις με digital invitation, RSVP, πρόγραμμα, χάρτη και gallery.",
    problem:
      "Σε πολλές εκδηλώσεις οι πληροφορίες μοιράζονται αποσπασματικά σε μηνύματα. Οι καλεσμένοι χάνουν λεπτομέρειες, δεν απαντούν έγκαιρα και η οργάνωση γίνεται πιο δύσκολη.",
    result:
      "Όλες οι πληροφορίες της εκδήλωσης βρίσκονται σε μία ψηφιακή σελίδα: πρόσκληση, RSVP, πρόγραμμα, χάρτης και gallery.",
    features: [
      "Digital invitation",
      "RSVP φόρμα",
      "Πρόγραμμα εκδήλωσης",
      "Χάρτης τοποθεσίας",
      "Gallery",
      "QR πρόσκληση",
    ],
    workflow: [
      "Ο καλεσμένος ανοίγει την ψηφιακή πρόσκληση.",
      "Βλέπει πληροφορίες, ώρα, τοποθεσία και πρόγραμμα.",
      "Απαντά μέσω RSVP.",
      "Μετά την εκδήλωση βλέπει ή ανεβάζει υλικό στη gallery.",
    ],
    idealFor: "Γάμους, βαφτίσεις, εταιρικά events και χώρους εκδηλώσεων.",
  },
};

type DemoKey = keyof typeof demoData;

export default function DemoDetailPage({ demoKey }: { demoKey: DemoKey }) {
  const demo = demoData[demoKey];

  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <Header />

      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-20 pt-40">
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-red-600/20 blur-[110px]" />

        <a href="/" className="relative z-10 text-sm font-semibold text-red-300 hover:text-red-200">
          ← Πίσω στην αρχική
        </a>

        <div className="relative z-10 mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              {demo.label}
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              {demo.title}
            </h1>

            <p className="mt-6 max-w-3xl text-2xl font-semibold text-zinc-200">
              {demo.subtitle}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              {demo.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                Ζητήστε παρόμοια λύση
              </a>

              <a
                href="/#demos"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Δείτε όλα τα demos
              </a>
            </div>
          </div>

          <div>
            {demoKey === "villa" ? (
              <VillaDemoPreview />
            ) : (
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_70px_rgba(220,38,38,0.08)]">
                <div className="rounded-3xl border border-white/10 bg-[#0D111A] p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-white/30" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                  </div>

                  <div className="space-y-4">
                    <div className="h-8 w-2/3 rounded bg-white/15" />
                    <div className="h-4 w-full rounded bg-white/10" />
                    <div className="h-4 w-4/5 rounded bg-white/10" />
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="h-28 rounded-2xl bg-red-600/25 ring-1 ring-red-500/20" />
                      <div className="h-28 rounded-2xl bg-white/10" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-xl bg-white/10" />
                      <div className="h-16 rounded-xl bg-white/10" />
                      <div className="h-16 rounded-xl bg-red-600/20" />
                    </div>
                    <div className="h-12 rounded-full bg-red-600/80" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#0D111A] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Problem
            </p>
            <h2 className="mt-4 text-3xl font-bold">Τι πρόβλημα λύνει</h2>
            <p className="mt-6 leading-8 text-zinc-400">{demo.problem}</p>
          </div>

          <div className="rounded-3xl border border-red-500/20 bg-red-600/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Result
            </p>
            <h2 className="mt-4 text-3xl font-bold">Τι αποτέλεσμα δίνει</h2>
            <p className="mt-6 leading-8 text-zinc-300">{demo.result}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
                Features
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Τι περιλαμβάνει
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Η λύση προσαρμόζεται ανάλογα με την επιχείρηση, αλλά μπορεί να
                περιλαμβάνει τα παρακάτω βασικά στοιχεία.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {demo.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-[#0D111A] p-5 text-zinc-200"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Workflow
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Πώς το χρησιμοποιεί η επιχείρηση
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {demo.workflow.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-[#0D111A] p-6"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/20 bg-red-600/10 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Ideal for
          </p>

          <h2 className="mt-4 text-3xl font-bold">{demo.idealFor}</h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-300">
            Αν θέλετε κάτι παρόμοιο για τη δική σας επιχείρηση, μπορούμε να
            προσαρμόσουμε τη λύση στις ανάγκες σας.
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

