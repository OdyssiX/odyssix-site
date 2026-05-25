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

export default function SmartWebsiteSection() {
  return (
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
  );
}
