import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <Header />

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center overflow-hidden px-5 py-40 text-center md:px-6">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[130px]" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 md:block" />

        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">
            Error 404
          </p>

          <h1 className="mt-5 text-6xl font-black tracking-tight md:text-8xl">
            404
          </h1>

          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
            Η σελίδα δεν βρέθηκε.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Το link που ανοίξατε δεν υπάρχει ή έχει αλλάξει. Μπορείτε να
            επιστρέψετε στην αρχική ή να δείτε τις υπηρεσίες της ODYSSIX.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="rounded-full bg-red-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-500"
            >
              Επιστροφή στην αρχική
            </a>

            <a
              href="/services"
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Δείτε τις υπηρεσίες
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
