import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Όροι Χρήσης",
  description:
    "Όροι χρήσης της ιστοσελίδας ODYSSIX και βασικές πληροφορίες για τις υπηρεσίες, την επικοινωνία και τις προτάσεις συνεργασίας.",
};

const sections = [
  {
    title: "Χρήση της ιστοσελίδας",
    text: "Η ιστοσελίδα της ODYSSIX παρέχει πληροφορίες για υπηρεσίες smart websites, mini apps, digital systems, QR tools και συναφείς ψηφιακές λύσεις για επιχειρήσεις. Η χρήση της ιστοσελίδας γίνεται για ενημερωτικούς και επικοινωνιακούς σκοπούς.",
  },
  {
    title: "Πληροφορίες υπηρεσιών",
    text: "Οι υπηρεσίες που παρουσιάζονται στην ιστοσελίδα είναι ενδεικτικές και μπορούν να προσαρμοστούν ανάλογα με τις ανάγκες κάθε επιχείρησης. Η τελική πρόταση, το κόστος και το χρονοδιάγραμμα καθορίζονται μετά από συζήτηση και αξιολόγηση του project.",
  },
  {
    title: "Αιτήματα και επικοινωνία",
    text: "Όταν στέλνετε αίτημα μέσω φόρμας, email ή τηλεφώνου, η ODYSSIX χρησιμοποιεί τα στοιχεία σας για να απαντήσει στο αίτημά σας και να προτείνει πιθανή λύση ή επόμενο βήμα.",
  },
  {
    title: "Προσφορές και συνεργασίες",
    text: "Καμία πληροφορία που εμφανίζεται στην ιστοσελίδα δεν αποτελεί δεσμευτική προσφορά. Κάθε συνεργασία ξεκινά μόνο αφού συμφωνηθούν γραπτώς το αντικείμενο, το κόστος, οι χρόνοι, οι παραδόσεις και οι όροι πληρωμής.",
  },
  {
    title: "Περιεχόμενο και πνευματικά δικαιώματα",
    text: "Το περιεχόμενο, η δομή, τα κείμενα, τα σχέδια και τα στοιχεία παρουσίασης της ιστοσελίδας ανήκουν στην ODYSSIX, εκτός αν αναφέρεται διαφορετικά. Δεν επιτρέπεται η αντιγραφή ή αναδημοσίευση χωρίς άδεια.",
  },
  {
    title: "Περιορισμός ευθύνης",
    text: "Η ODYSSIX προσπαθεί να διατηρεί τις πληροφορίες της ιστοσελίδας σωστές και ενημερωμένες, αλλά δεν εγγυάται ότι όλες οι πληροφορίες είναι πάντα πλήρεις ή χωρίς λάθη. Η χρήση των πληροφοριών γίνεται με ευθύνη του επισκέπτη.",
  },
  {
    title: "Αλλαγές στους όρους",
    text: "Η ODYSSIX μπορεί να ενημερώνει ή να τροποποιεί τους παρόντες όρους χρήσης όταν χρειάζεται. Η συνέχιση χρήσης της ιστοσελίδας σημαίνει αποδοχή των ισχυόντων όρων.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <Header />

      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-20 pt-40 md:px-6 md:pb-24">
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-red-600/20 blur-[110px]" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Terms
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-7xl">
            Όροι Χρήσης
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-9 text-zinc-200">
            Οι παρακάτω όροι περιγράφουν τη βασική χρήση της ιστοσελίδας
            ODYSSIX και τον τρόπο με τον οποίο παρουσιάζονται οι υπηρεσίες μας.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Το κείμενο αυτό λειτουργεί ως βασική ενημέρωση για τους επισκέπτες
            της ιστοσελίδας. Για ειδικές συνεργασίες, οι τελικοί όροι
            συμφωνούνται ξεχωριστά πριν την έναρξη κάθε project.
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
            Επικοινωνία για τους όρους χρήσης
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Για οποιαδήποτε ερώτηση σχετικά με τους όρους χρήσης, μπορείτε να
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
