import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Smart Hub Live Preview",
  description:
    "Live preview demo για Restaurant Smart Hub με QR menu, κρατήσεις, προσφορές, Google reviews και άμεση επικοινωνία.",
};

const menuItems = [
  {
    title: "Cretan Salad",
    price: "€8",
    text: "Ντομάτα, αγγούρι, κρίθινο παξιμάδι, μυζήθρα και ελαιόλαδο.",
  },
  {
    title: "Seafood Pasta",
    price: "€18",
    text: "Ζυμαρικά με φρέσκα θαλασσινά και αρωματική σάλτσα.",
  },
  {
    title: "Grilled Meat Plate",
    price: "€16",
    text: "Ποικιλία κρεατικών με πατάτες, σαλάτα και σπιτική σάλτσα.",
  },
];

const features = [
  "QR menu",
  "Online reservations",
  "Daily offers",
  "Google reviews",
  "WhatsApp contact",
  "Map & directions",
];

const offers = [
  "Lunch menu από €12",
  "Cocktail happy hour",
  "Family table offer",
];

const reviewPoints = [
  "QR για Google reviews",
  "Κουμπί για άμεση αξιολόγηση",
  "Πιο εύκολη συλλογή feedback",
];

export default function RestaurantLivePreviewPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#17090A] to-black" />
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/25 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-orange-500/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-6">
          <a
            href="/demos/restaurant-smart-hub"
            className="text-sm font-bold text-red-300 hover:text-red-200"
          >
            ← Back to ODYSSIX demo
          </a>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#menu" className="hover:text-white">QR Menu</a>
            <a href="#reservations" className="hover:text-white">Reservations</a>
            <a href="#offers" className="hover:text-white">Offers</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-5 pb-20 pt-10 md:px-6 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-300">
              Restaurant Smart Hub Demo
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Elia Taste Hub
            </h1>

            <p className="mt-5 max-w-2xl text-2xl font-semibold leading-9 text-zinc-100">
              QR menu, reservations, offers and reviews in one smart restaurant experience.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Ένα demo smart hub για εστιατόρια, ταβέρνες και καφέ, με QR menu,
              online κρατήσεις, προσφορές ημέρας, Google reviews και άμεση επικοινωνία.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#menu"
                className="rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-red-500"
              >
                View QR Menu
              </a>

              <a
                href="#reservations"
                className="rounded-full border border-white/20 bg-white/[0.08] px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Book a Table
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-black/35 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0D111A]">
              <div className="h-64 bg-gradient-to-br from-red-950 via-zinc-950 to-black">
                <div className="flex h-full items-end bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.88))] p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">
                      Today’s experience
                    </p>
                    <h2 className="mt-2 text-3xl font-black">Smart Dining Flow</h2>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-2xl font-black">QR</p>
                    <p className="mt-1 text-xs text-zinc-500">Menu</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-2xl font-black">4.8</p>
                    <p className="mt-1 text-xs text-zinc-500">Reviews</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-2xl font-black">24h</p>
                    <p className="mt-1 text-xs text-zinc-500">Booking</p>
                  </div>
                </div>

                <div className="rounded-full bg-red-600 px-5 py-3 text-center text-sm font-bold text-white">
                  Open menu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
                QR Menu
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Ψηφιακό menu που ανοίγει άμεσα από QR
              </h2>
            </div>

            <p className="text-lg leading-8 text-zinc-400">
              Ο πελάτης σκανάρει το QR στο τραπέζι και βλέπει οργανωμένα τις
              κατηγορίες, τα πιάτα, τις τιμές και τις προσφορές χωρίς αναμονή.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {menuItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#0D111A] p-6 transition hover:-translate-y-1 hover:border-red-500/40"
              >
                <div className="mb-5 h-40 rounded-3xl bg-gradient-to-br from-red-950 via-zinc-900 to-black" />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
                    {item.price}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reservations" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Reservations
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Κρατήσεις τραπεζιού χωρίς περιττά βήματα
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Ο πελάτης μπορεί να ζητήσει κράτηση από το κινητό του, ενώ το
              εστιατόριο λαμβάνει πιο καθαρά στοιχεία: ημέρα, ώρα, άτομα και μήνυμα.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0D111A] p-6">
            <div className="grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none" placeholder="Date" />
              <input className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none" placeholder="Time" />
              <input className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none" placeholder="Guests" />
              <textarea className="min-h-28 resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none" placeholder="Message / special request" />
              <button className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white">
                Send reservation request
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
                Daily Offers
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Προσφορές και special menus σε καθαρή προβολή
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Το εστιατόριο μπορεί να προβάλλει προσφορές ημέρας, events,
                happy hour ή seasonal menus χωρίς να μπερδεύεται ο επισκέπτης.
              </p>
            </div>

            <div className="grid gap-4">
              {offers.map((offer) => (
                <div
                  key={offer}
                  className="rounded-3xl border border-white/10 bg-[#0D111A] p-6"
                >
                  <div className="mb-5 h-12 w-12 rounded-2xl bg-red-600/20 ring-1 ring-red-500/30" />
                  <h3 className="text-xl font-bold">{offer}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    Demo προσφορά που μπορεί να αλλάζει ανάλογα με το μενού και τη στρατηγική του χώρου.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Reviews
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Περισσότερα Google reviews με απλή διαδικασία
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Με QR ή κουμπί, ο πελάτης μπορεί να αφήσει αξιολόγηση πιο εύκολα,
              βοηθώντας την online εικόνα του εστιατορίου.
            </p>
          </div>

          <div className="grid gap-4">
            {reviewPoints.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-zinc-200"
              >
                <span className="text-red-400">✓</span> {item}
              </div>
            ))}

            <div className="rounded-[2rem] border border-red-500/20 bg-red-600/10 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">
                Example CTA
              </p>
              <h3 className="mt-4 text-2xl font-bold">
                Enjoyed your meal?
              </h3>
              <p className="mt-3 leading-7 text-zinc-300">
                Scan the QR and leave a quick review on Google.
              </p>
              <div className="mt-6 rounded-full bg-red-600 px-5 py-3 text-center text-sm font-bold text-white">
                Leave a review
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
                Features
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Όλα τα βασικά εργαλεία σε ένα smart hub
              </h2>
            </div>

            <p className="text-lg leading-8 text-zinc-400">
              Το Restaurant Smart Hub μπορεί να προσαρμοστεί σε ταβέρνα,
              εστιατόριο, café, beach bar ή μικρή αλυσίδα εστίασης.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-[#0D111A] p-5 text-zinc-200"
              >
                <span className="text-red-400">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/20 bg-red-600/10 p-8 text-center md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
            ODYSSIX demo
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Αυτό είναι demo. Η τελική λύση προσαρμόζεται στο δικό σας εστιατόριο.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Menu, φωτογραφίες, προσφορές, κρατήσεις, reviews, κουμπιά και
            λειτουργίες διαμορφώνονται ανάλογα με τον χώρο και τον τρόπο λειτουργίας σας.
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
