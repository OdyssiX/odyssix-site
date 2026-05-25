const faqs = [
  {
    question: "Πόσο κοστίζει ένα Smart Website;",
    answer:
      "Το κόστος εξαρτάται από το μέγεθος της σελίδας, τις λειτουργίες, τον κλάδο και το επίπεδο προσαρμογής. Για αυτό ξεκινάμε πάντα με μια σύντομη συζήτηση και μετά δίνουμε καθαρή πρόταση.",
  },
  {
    question: "Πόσο χρόνο χρειάζεται για να ολοκληρωθεί;",
    answer:
      "Ένα απλό smart website μπορεί να ξεκινήσει σχετικά γρήγορα, ενώ πιο ολοκληρωμένες λύσεις με περισσότερες λειτουργίες χρειάζονται περισσότερο χρόνο. Ο χρόνος εξαρτάται από το υλικό, τις σελίδες και τις λειτουργίες που θα μπουν.",
  },
  {
    question: "Τι χρειάζεται να δώσω από την πλευρά μου;",
    answer:
      "Συνήθως χρειάζονται πληροφορίες για την επιχείρηση, υπηρεσίες, φωτογραφίες, στοιχεία επικοινωνίας, social links και ό,τι υλικό υπάρχει ήδη. Αν δεν υπάρχει υλικό, μπορούμε να σας καθοδηγήσουμε.",
  },
  {
    question: "Μπορώ να ξεκινήσω με κάτι απλό και να το μεγαλώσω μετά;",
    answer:
      "Ναι. Αυτή είναι και η πιο σωστή προσέγγιση για πολλές επιχειρήσεις. Μπορείτε να ξεκινήσετε με μια βασική έκδοση και αργότερα να προστεθούν περισσότερες σελίδες, QR εργαλεία, φόρμες, demo flows ή mini app λειτουργίες.",
  },
  {
    question: "Είναι απλή ιστοσελίδα ή εφαρμογή;",
    answer:
      "Είναι ιστοσελίδα με λογική εφαρμογής. Δηλαδή ανοίγει από browser, αλλά σχεδιάζεται ώστε να λειτουργεί πιο έξυπνα: με mobile εμπειρία, καθαρές ενέργειες, φόρμες, QR εργαλεία και οργανωμένη ροή αιτημάτων.",
  },
  {
    question: "Θα μπορώ να κάνω αλλαγές μετά;",
    answer:
      "Ναι, μπορούν να γίνονται αλλαγές και βελτιώσεις μετά την παράδοση. Ανάλογα με τη λύση, μπορούμε να συμφωνήσουμε υποστήριξη, συντήρηση ή μελλοντικές προσθήκες.",
  },
];

export default function FAQSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Συχνές ερωτήσεις
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Μερικές βασικές απαντήσεις για να καταλάβετε καλύτερα πώς
              δουλεύει μια λύση ODYSSIX πριν επικοινωνήσετε μαζί μας.
            </p>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-white/10 bg-[#0D111A] p-5 transition hover:border-red-500/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-bold text-white [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/20 text-red-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
