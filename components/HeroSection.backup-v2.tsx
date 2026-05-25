import OdyssixLogo from "./OdyssixLogo";

const heroPills = ["Website", "Mini App", "QR Tools", "Dashboard"];

function SmartGridPattern() {
  const blocks = [
    "0-0", "1-0", "5-0", "6-0",
    "1-1", "2-1", "4-1", "5-1",
    "2-2", "3-2", "4-2",
    "3-3",
    "2-4", "3-4", "4-4",
    "1-5", "2-5", "4-5", "5-5",
    "0-6", "1-6", "5-6", "6-6",
  ];

  const redBlocks = ["5-0", "6-0", "4-1", "5-1", "4-2", "4-4", "4-5", "5-5", "5-6", "6-6"];

  return (
    <div className="pointer-events-none absolute right-[1%] top-[54%] hidden -translate-y-1/2 opacity-[0.055] lg:block">
      <div className="grid grid-cols-7 gap-4">
        {Array.from({ length: 49 }).map((_, index) => {
          const x = index % 7;
          const y = Math.floor(index / 7);
          const key = `${x}-${y}`;
          const active = blocks.includes(key);
          const red = redBlocks.includes(key);

          return (
            <div
              key={index}
              className={
                active
                  ? red
                    ? "h-6 w-6 rounded-sm bg-red-500 shadow-[0_0_28px_rgba(239,68,68,0.28)]"
                    : "h-6 w-6 rounded-sm bg-white shadow-[0_0_24px_rgba(255,255,255,0.16)]"
                  : "h-6 w-6 rounded-sm bg-transparent"
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-44 text-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[150px]" />
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/10" />

      <SmartGridPattern />

      <div className="relative z-10 mb-6 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 shadow-[0_0_30px_rgba(220,38,38,0.12)]">
        Smart Websites & Digital Systems
      </div>

      <div className="relative z-10 mb-7 scale-95 md:scale-110">
        <OdyssixLogo />
      </div>

      <h1 className="relative z-10 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
        ODYSSIX Smart Sites
      </h1>

      <p className="relative z-10 mt-6 max-w-3xl text-2xl font-semibold text-zinc-200 md:text-4xl">
        Ιστοσελίδες που λειτουργούν σαν εφαρμογές.
      </p>

      <p className="relative z-10 mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
        Δημιουργούμε smart websites που συνδυάζουν επαγγελματική εικόνα,
        mini app εμπειρία, QR εργαλεία και άμεση επικοινωνία, ώστε η
        επιχείρησή σας να φαίνεται καλύτερα και να δέχεται αιτήματα πιο
        οργανωμένα.
      </p>

      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
        {heroPills.map((pill, index) => (
          <div key={pill} className="flex items-center gap-3">
            {index > 0 && (
              <span className="hidden text-red-500 sm:inline">+</span>
            )}
            <span className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300 shadow-[0_0_24px_rgba(255,255,255,0.04)]">
              {pill}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#contact"
          className="rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(220,38,38,0.28)] transition hover:bg-red-500"
        >
          Ζητήστε δωρεάν εκτίμηση
        </a>

        <a
          href="#solutions"
          className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Δείτε τις λύσεις μας
        </a>
      </div>
    </section>
  );
}

