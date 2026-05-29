import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου",
  description:
    "Πολιτική απορρήτου της ODYSSIX σχετικά με τη χρήση στοιχείων επικοινωνίας και αιτημάτων μέσω της ιστοσελίδας.",
};

const sections = [
  {
    title: "Ποια στοιχεία μπορεί να λάβουμε",
    text: "Όταν επικοινωνείτε με την ODYSSIX μέσω φόρμας, email ή τηλεφώνου, μπορεί να λάβουμε στοιχεία όπως όνομα, επιχείρηση, τηλέφωνο, email και πληροφορίες σχετικά με το project ή την υπηρεσία που σας ενδιαφέρει.",
  },
  {
    title: "Γιατί χρησιμοποιούμε τα στοιχεία",
    text: "Τα στοιχεία χρησιμοποιούνται αποκλειστικά για να μπορέσουμε να απαντήσουμε στο αίτημά σας, να καταλάβουμε τις ανάγκες της επιχείρησής σας και να προτείνουμε πιθανή λύση ή επόμενο βήμα.",
  },
  {
    title: "Δεν πουλάμε προσωπικά στοιχεία",
    text: "Η ODYSSIX δεν πουλάει προσωπικά στοιχεία σε τρίτους. Τα στοιχεία επικοινωνίας χρησιμοποιούνται μόνο στο πλαίσιο της επικοινωνίας και της πιθανής συνεργασίας.",
  },
  {
    title: "Συνεργάτες και τεχνική υλοποίηση",
    text: "Σε περίπτωση που ένα project απαιτεί συνεργαζόμενη τεχνική υποστήριξη, ενδέχεται να κοινοποιηθούν μόνο οι απαραίτητες πληροφορίες που χρειάζονται για την υλοποίηση της συμφωνημένης εργασίας.",
  },
  {
    title: "Επικοινωνία για προσωπικά δεδομένα",
    text: "Μπορείτε να επικοινωνήσετε μαζί μας για οποιοδήποτε θέμα αφορά τα στοιχεία σας στο email odyssixdigital@gmail.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <Header />

      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-20 pt-40 md:px-6 md:pb-24">
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-red-600/20 blur-[110px]" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Privacy
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-7xl">
            Πολιτική Απορρήτου
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-9 text-zinc-200">
            Σεβόμαστε τα στοιχεία που μας στέλνετε και τα χρησιμοποιούμε μόνο
            για την επικοινωνία και την αξιολόγηση του αιτήματός σας.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Η παρούσα σελίδα περιγράφει με απλό τρόπο πώς χειριζόμαστε τα
            στοιχεία που μπορεί να μας στείλετε μέσω της ιστοσελίδας, της φόρμας
            επικοινωνίας, email ή τηλεφώνου.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:border-red-500/40 md:p-8"
              >
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>

                <p className="mt-4 leading-8 text-zinc-400">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/20 bg-red-600/10 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Επικοινωνία για θέματα απορρήτου
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Για οποιαδήποτε ερώτηση σχετικά με τα στοιχεία σας, μπορείτε να
            επικοινωνήσετε μαζί μας στο email:
          </p>

          <a
            href="mailto:odyssixdigital@gmail.com"
            className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-500"
          >
            odyssixdigital@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
