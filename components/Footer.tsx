import OdyssixLogo from "./OdyssixLogo";

const services = [
  "Smart Websites",
  "Tourism Visibility Hub",
  "Restaurant Smart Hub",
  "Mini Apps",
  "QR Tools",
  "Digital Systems",
];

const links = [
  { label: "Smart Websites", href: "/#smart" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Λύσεις", href: "/#solutions" },
  { label: "Demo Projects", href: "/#demos" },
  { label: "Πακέτα", href: "/#packages" },
  { label: "Επικοινωνία", href: "/#contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07090D] px-5 py-12 md:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <OdyssixLogo />

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
              Η ODYSSIX δημιουργεί smart websites, mini apps και ψηφιακά
              συστήματα για επιχειρήσεις που θέλουν καλύτερη online παρουσία,
              άμεση επικοινωνία και πιο οργανωμένη λειτουργία.
            </p>

            <p className="mt-5 text-sm font-semibold text-red-300">
              Ιστοσελίδες που λειτουργούν σαν εφαρμογές.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-white">
              Υπηρεσίες
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-white">
              Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-white">
              Επικοινωνία
            </h3>

            <div className="mt-5 space-y-3 text-sm text-zinc-400">
              <p>Email: odyssixdigital@gmail.com</p>
              <p>Τηλέφωνο: 6973497371</p>
              <p>Κρήτη, Ελλάδα</p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/20"
            >
              Ζητήστε εκτίμηση
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ODYSSIX. All rights reserved.</p>
          <p>Smart Websites, Mini Apps & Digital Systems</p>
        </div>
      </div>
    </footer>
  );
}








