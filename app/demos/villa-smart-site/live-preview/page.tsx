import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villa Elia Live Preview",
  description:
    "Live preview demo για Villa Smart Site με gallery, amenities, booking request, guest guide και local recommendations.",
};

const amenities = [
  "Private pool",
  "Sea view",
  "3 bedrooms",
  "Fully equipped kitchen",
  "Wi-Fi",
  "Private parking",
];

const guideItems = [
  {
    title: "Check-in",
    text: "Οδηγίες άφιξης, κωδικοί πρόσβασης και βασικές πληροφορίες.",
  },
  {
    title: "Wi-Fi & House Rules",
    text: "Όλα όσα χρειάζεται ο επισκέπτης μέσα στη βίλα.",
  },
  {
    title: "Local Tips",
    text: "Παραλίες, εστιατόρια και προτάσεις κοντά στο κατάλυμα.",
  },
];

const recommendations = [
  "Falassarna Beach",
  "Old Town Chania",
  "Local Cretan Tavern",
  "Sunset View Point",
];

export default function VillaLivePreviewPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/demo/villa/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#080A0F]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-6">
          <a
            href="/demos/villa-smart-site"
            className="text-sm font-bold text-red-300 hover:text-red-200"
          >
            ← Back to ODYSSIX demo
          </a>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#amenities" className="hover:text-white">Amenities</a>
            <a href="#guide" className="hover:text-white">Guest Guide</a>
            <a href="#request" className="hover:text-white">Request</a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-5 pb-20 pt-10 md:px-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-300">
              Villa Smart Site Demo
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Villa Elia
            </h1>

            <p className="mt-5 max-w-2xl text-2xl font-semibold leading-9 text-zinc-100">
              Luxury private stay in Crete with smart guest experience.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Ένα demo smart site για βίλες και καταλύματα, με premium παρουσίαση,
              direct booking request, guest guide και local recommendations.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#request"
                className="rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-red-500"
              >
                Request Availability
              </a>

              <a
                href="#guide"
                className="rounded-full border border-white/20 bg-white/[0.08] px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Open Guest Guide
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-black/35 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0D111A]">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: "url('/demo/villa/gallery-1.jpg')" }}
              >
                <div className="flex h-full items-end bg-gradient-to-b from-transparent to-black/85 p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">
                      Featured stay
                    </p>
                    <h2 className="mt-2 text-3xl font-black">
                      Private Villa Experience
                    </h2>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-2xl font-black">4.9</p>
                    <p className="mt-1 text-xs text-zinc-500">Reviews</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-2xl font-black">6</p>
                    <p className="mt-1 text-xs text-zinc-500">Guests</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-2xl font-black">QR</p>
                    <p className="mt-1 text-xs text-zinc-500">Guide</p>
                  </div>
                </div>

                <div className="rounded-full bg-red-600 px-5 py-3 text-center text-sm font-bold text-white">
                  Check availability
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
                Gallery
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Παρουσίαση της βίλας με premium εικόνα
              </h2>
            </div>

            <p className="text-lg leading-8 text-zinc-400">
              Στο πραγματικό project εδώ θα μπουν φωτογραφίες, drone video,
              εσωτερικοί χώροι, εξωτερικοί χώροι και λεπτομέρειες του καταλύματος.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            <div
              className="h-72 rounded-[2rem] border border-white/10 bg-cover bg-center md:col-span-2 md:row-span-2 md:h-auto"
              style={{ backgroundImage: "url('/demo/villa/hero.jpg')" }}
            />
            <div
              className="h-48 rounded-[2rem] border border-white/10 bg-cover bg-center"
              style={{ backgroundImage: "url('/demo/villa/gallery-1.jpg')" }}
            />
            <div
              className="h-48 rounded-[2rem] border border-white/10 bg-cover bg-center"
              style={{ backgroundImage: "url('/demo/villa/gallery-2.jpg')" }}
            />
            <div
              className="h-48 rounded-[2rem] border border-white/10 bg-cover bg-center"
              style={{ backgroundImage: "url('/demo/villa/gallery-3.jpg')" }}
            />
            <div
              className="h-48 rounded-[2rem] border border-white/10 bg-cover bg-center"
              style={{ backgroundImage: "url('/demo/villa/gallery-1.jpg')" }}
            />
          </div>
        </div>
      </section>

      <section id="amenities" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Amenities
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Όλες οι παροχές οργανωμένες καθαρά
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Ο επισκέπτης βλέπει γρήγορα τι προσφέρει η βίλα, χωρίς να ψάχνει
              μέσα σε μεγάλα κείμενα ή εξωτερικές πλατφόρμες.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {amenities.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-zinc-200"
              >
                <span className="text-red-400">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="request" className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Direct Request
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Αίτημα διαθεσιμότητας χωρίς περιττά βήματα
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Ο επισκέπτης μπορεί να στείλει αίτημα κράτησης απευθείας από το
              site. Ο ιδιοκτήτης λαμβάνει πιο καθαρό και οργανωμένο ενδιαφέρον.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0D111A] p-6">
            <div className="grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none" placeholder="Arrival date" />
              <input className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none" placeholder="Departure date" />
              <input className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none" placeholder="Guests" />
              <textarea className="min-h-28 resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none" placeholder="Message" />
              <button className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white">
                Send request
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="guide" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Guest Guide
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              QR οδηγός επισκέπτη μέσα στη βίλα
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Με ένα QR code, ο επισκέπτης ανοίγει οδηγίες check-in, Wi-Fi,
              κανόνες σπιτιού, προτάσεις περιοχής και χρήσιμες πληροφορίες.
            </p>
          </div>

          <div className="grid gap-5">
            {guideItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#0D111A] p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
                Local Recommendations
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Προτάσεις περιοχής για καλύτερη εμπειρία
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {recommendations.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-[#0D111A] p-6"
                >
                  <div className="mb-5 h-12 w-12 rounded-2xl bg-red-600/20 ring-1 ring-red-500/30" />
                  <h3 className="text-lg font-bold">{item}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    Demo πρόταση που μπορεί να αντικατασταθεί με πραγματικές τοπικές επιλογές.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/20 bg-red-600/10 p-8 text-center md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
            ODYSSIX demo
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Αυτό είναι demo. Η τελική σελίδα προσαρμόζεται στη δική σας βίλα.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Φωτογραφίες, κείμενα, γλώσσες, κουμπιά, φόρμες και λειτουργίες
            διαμορφώνονται ανάλογα με το κατάλυμα και τον τρόπο που δουλεύετε.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-500"
          >
            Ζητήστε παρόμοια λύση
          </a>
        </div>
      </section>
    </main>
  );
}
