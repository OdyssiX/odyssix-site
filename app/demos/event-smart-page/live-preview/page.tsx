import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Smart Page Live Preview",
  description:
    "Live preview demo για Event Smart Page με digital invitation, RSVP, πρόγραμμα, χάρτη, gallery και QR invite.",
};

const schedule = [
  {
    time: "17:30",
    title: "Guest arrival",
    text: "Οι καλεσμένοι φτάνουν στον χώρο της εκδήλωσης.",
  },
  {
    time: "18:00",
    title: "Ceremony",
    text: "Η βασική τελετή / έναρξη της εκδήλωσης.",
  },
  {
    time: "20:00",
    title: "Dinner & celebration",
    text: "Δείπνο, μουσική και γιορτή με τους καλεσμένους.",
  },
];

const rsvpFields = [
  "Ονοματεπώνυμο",
  "Αριθμός ατόμων",
  "Τηλέφωνο",
  "Μήνυμα / σημείωση",
];

const features = [
  "Digital invitation",
  "RSVP φόρμα",
  "Πρόγραμμα εκδήλωσης",
  "Χάρτης τοποθεσίας",
  "Gallery",
  "QR πρόσκληση",
];

const galleryCards = [
  "Invitation visual",
  "Venue atmosphere",
  "Dinner setup",
  "Photo gallery",
];

export default function EventLivePreviewPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/demo/event/hero.jpg')" }}
        />
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 rounded-full bg-red-600/25 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-pink-500/15 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#080A0F]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-6">
          <a
            href="/demos/event-smart-page"
            className="text-sm font-bold text-red-300 hover:text-red-200"
          >
            ← Back to ODYSSIX demo
          </a>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#rsvp" className="hover:text-white">RSVP</a>
            <a href="#schedule" className="hover:text-white">Schedule</a>
            <a href="#location" className="hover:text-white">Location</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-5 pb-20 pt-10 md:px-6 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-300">
              Event Smart Page Demo
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Maria & Nikos
            </h1>

            <p className="mt-5 max-w-2xl text-2xl font-semibold leading-9 text-zinc-100">
              A digital invitation with RSVP, schedule, map and gallery.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Ένα demo event smart page για γάμους, βαφτίσεις και εκδηλώσεις,
              με ψηφιακή πρόσκληση, RSVP, πρόγραμμα, χάρτη και QR πρόσβαση.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#rsvp"
                className="rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-red-500"
              >
                RSVP Now
              </a>

              <a
                href="#schedule"
                className="rounded-full border border-white/20 bg-white/[0.08] px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                View Schedule
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-black/35 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0D111A]">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: "url('/demo/event/gallery-1.jpg')" }}
              >
                <div className="flex h-full items-end bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.88))] p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">
                      Digital invite
                    </p>
                    <h2 className="mt-2 text-3xl font-black">Save the Date</h2>
                    <p className="mt-2 text-sm text-zinc-300">Saturday, 20 July · Chania</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-2xl font-black">RSVP</p>
                    <p className="mt-1 text-xs text-zinc-500">Form</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-2xl font-black">MAP</p>
                    <p className="mt-1 text-xs text-zinc-500">Location</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-2xl font-black">QR</p>
                    <p className="mt-1 text-xs text-zinc-500">Invite</p>
                  </div>
                </div>

                <div className="rounded-full bg-red-600 px-5 py-3 text-center text-sm font-bold text-white">
                  Confirm attendance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rsvp" className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              RSVP
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Οι καλεσμένοι απαντούν εύκολα από το κινητό
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Αντί για διάσπαρτα μηνύματα, η εκδήλωση έχει οργανωμένη RSVP
              φόρμα με στοιχεία καλεσμένων, αριθμό ατόμων και σημειώσεις.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0D111A] p-6">
            <div className="grid gap-4">
              {rsvpFields.map((field) => (
                <input
                  key={field}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none"
                  placeholder={field}
                />
              ))}

              <button className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white">
                Send RSVP
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Schedule
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Πρόγραμμα εκδήλωσης σε καθαρή σειρά
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Οι καλεσμένοι βλέπουν ώρα, πρόγραμμα και βασικά σημεία χωρίς να
              ψάχνουν μέσα σε μηνύματα ή φωτογραφίες πρόσκλησης.
            </p>
          </div>

          <div className="grid gap-5">
            {schedule.map((item) => (
              <article
                key={item.time}
                className="grid gap-5 rounded-3xl border border-white/10 bg-[#0D111A] p-6 sm:grid-cols-[0.25fr_1fr]"
              >
                <div className="rounded-2xl bg-red-600/20 px-4 py-3 text-center ring-1 ring-red-500/30">
                  <p className="text-lg font-black text-red-200">{item.time}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Location
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Χάρτης και οδηγίες σε ένα σημείο
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Η smart event page μπορεί να περιλαμβάνει χάρτη, κουμπί οδηγιών,
              χώρο στάθμευσης και χρήσιμες πληροφορίες για την άφιξη.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="rounded-full bg-red-600 px-6 py-3 text-center text-sm font-bold text-white">
                Open directions
              </div>

              <div className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-center text-sm font-bold text-white">
                Parking info
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0D111A] p-5">
            <div className="relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:34px_34px]" />
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-xl font-black text-white shadow-[0_0_60px_rgba(220,38,38,0.45)]">
                PIN
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Gallery
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Gallery πριν και μετά την εκδήλωση
            </h2>
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            Η σελίδα μπορεί να λειτουργήσει πριν την εκδήλωση ως πρόσκληση και
            μετά την εκδήλωση ως σημείο για φωτογραφίες ή αναμνήσεις.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          <div
            className="flex h-72 items-end rounded-[2rem] border border-white/10 bg-cover bg-center p-6 md:col-span-2 md:row-span-2 md:h-auto"
            style={{ backgroundImage: "url('/demo/event/hero.jpg')" }}
          >
            <div className="rounded-2xl bg-black/45 px-4 py-3 backdrop-blur">
              <p className="font-bold text-white">Main event atmosphere</p>
            </div>
          </div>

          <div
            className="flex h-48 items-end rounded-[2rem] border border-white/10 bg-cover bg-center p-5"
            style={{ backgroundImage: "url('/demo/event/gallery-1.jpg')" }}
          >
            <div className="rounded-xl bg-black/45 px-3 py-2 backdrop-blur">
              <p className="text-sm font-bold text-white">Live crowd</p>
            </div>
          </div>

          <div
            className="flex h-48 items-end rounded-[2rem] border border-white/10 bg-cover bg-center p-5"
            style={{ backgroundImage: "url('/demo/event/gallery-2.jpg')" }}
          >
            <div className="rounded-xl bg-black/45 px-3 py-2 backdrop-blur">
              <p className="text-sm font-bold text-white">DJ / stage</p>
            </div>
          </div>

          <div
            className="flex h-48 items-end rounded-[2rem] border border-white/10 bg-cover bg-center p-5"
            style={{ backgroundImage: "url('/demo/event/gallery-3.jpg')" }}
          >
            <div className="rounded-xl bg-black/45 px-3 py-2 backdrop-blur">
              <p className="text-sm font-bold text-white">Lights show</p>
            </div>
          </div>

          <div
            className="flex h-48 items-end rounded-[2rem] border border-white/10 bg-cover bg-center p-5"
            style={{ backgroundImage: "url('/demo/event/gallery-4.jpg')" }}
          >
            <div className="rounded-xl bg-black/45 px-3 py-2 backdrop-blur">
              <p className="text-sm font-bold text-white">Celebration</p>
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
                Όλα τα βασικά στοιχεία μιας event page
              </h2>
            </div>

            <p className="text-lg leading-8 text-zinc-400">
              Η Event Smart Page μπορεί να προσαρμοστεί σε γάμο, βάφτιση,
              εταιρική εκδήλωση ή χώρο εκδηλώσεων.
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
            Αυτό είναι demo. Η τελική σελίδα προσαρμόζεται στη δική σας εκδήλωση.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Κείμενα, χρώματα, φωτογραφίες, RSVP, πρόγραμμα, χάρτης και gallery
            διαμορφώνονται ανάλογα με το event και το ύφος του.
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


