import DemoCardsGrid from "./DemoCardsGrid";

export default function DemoProjectsSection() {
  return (
    <section id="demos" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Demo Projects
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Δείτε πώς μπορεί να μοιάζει η δική σας λύση
          </h2>
        </div>

        <p className="text-lg leading-8 text-zinc-400">
          Τα demos δείχνουν πώς ένα smart website μπορεί να προσαρμοστεί σε
          διαφορετικούς κλάδους, με πραγματική εικόνα, λειτουργίες και καθαρή
          εμπειρία για τον πελάτη.
        </p>
      </div>

      <div className="mt-12">
        <DemoCardsGrid />
      </div>
    </section>
  );
}
