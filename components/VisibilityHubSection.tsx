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

export default function VisibilityHubSection() {
  return (
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
  );
}
