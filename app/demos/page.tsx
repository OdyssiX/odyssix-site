import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DemoCardsGrid from "../../components/DemoCardsGrid";

export const metadata: Metadata = {
  title: "Demo Projects",
  description:
    "Demo projects της ODYSSIX για smart websites, tourism hubs, restaurant hubs και event smart pages.",
};

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <Header />

      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-20 pt-40 md:px-6 md:pb-24">
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-red-600/20 blur-[110px]" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Demo Projects
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-7xl">
            Demo λύσεις της ODYSSIX
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-9 text-zinc-200">
            Δείτε παραδείγματα smart websites και digital systems που μπορούν
            να προσαρμοστούν σε διαφορετικές επιχειρήσεις.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Τα demo projects δείχνουν πώς μπορεί μια επιχείρηση να αποκτήσει
            όχι απλώς μια ιστοσελίδα, αλλά μια πιο οργανωμένη ψηφιακή εμπειρία
            για πελάτες, επισκέπτες και αιτήματα.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <DemoCardsGrid />
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/20 bg-red-600/10 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Custom demo
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Θέλετε demo για τον δικό σας κλάδο;
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Μπορούμε να δούμε την επιχείρησή σας και να προτείνουμε μια smart
            λύση προσαρμοσμένη στον δικό σας κλάδο.
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
