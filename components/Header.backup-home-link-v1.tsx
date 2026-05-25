import OdyssixLogo from "./OdyssixLogo";

const navLinks = [
  { label: "Αρχική", href: "/" },
  { label: "Smart Websites", href: "/#smart" },
  { label: "Λύσεις", href: "/#solutions" },
  { label: "Demos", href: "/#demos" },
  { label: "Πακέτα", href: "/#packages" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-[99999] w-full border-b border-white/10 bg-[#080A0F]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" aria-label="ODYSSIX Home">
          <OdyssixLogo />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}

          <a
            href="/#contact"
            className="rounded-full bg-red-600 px-5 py-2 font-semibold text-white shadow-[0_0_24px_rgba(220,38,38,0.22)] transition hover:bg-red-500"
          >
            Επικοινωνία
          </a>
        </nav>

        <details className="relative md:hidden">
          <summary className="list-none rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white active:scale-95 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>

          <div className="absolute right-0 top-14 w-[280px] rounded-3xl border border-white/10 bg-[#080A0F] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.75)]">
            <div className="mb-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                ODYSSIX Menu
              </p>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/#contact"
                className="rounded-2xl bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Επικοινωνία
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
