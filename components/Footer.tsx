import OdyssixLogo from "./OdyssixLogo";
import SocialLinks from "./SocialLinks";

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
  { label: "Demo Projects", href: "/demos" },
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

            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
                Social
              </p>
              <SocialLinks />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Υπηρεσίες
            </h3>

            <div className="mt-5 grid gap-3">
              {services.map((service) => (
                <p key={service} className="text-sm text-zinc-400">
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Links
            </h3>

            <div className="mt-5 grid gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Επικοινωνία
            </h3>

            <div className="mt-5 grid gap-3 text-sm text-zinc-400">
              <a
                href="mailto:odyssixdigital@gmail.com"
                className="transition hover:text-white"
              >
                Email: odyssixdigital@gmail.com
              </a>

              <a href="tel:+306973497371" className="transition hover:text-white">
                Τηλέφωνο: 6973497371
              </a>

              <p>Κρήτη, Ελλάδα</p>

              <a
                href="/#contact"
                className="mt-2 inline-flex w-fit rounded-full border border-red-500/40 bg-red-600/10 px-5 py-2 text-xs font-bold text-red-200 transition hover:bg-red-600 hover:text-white"
              >
                Ζητήστε εκτίμηση
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ODYSSIX. All rights reserved.</p>
          <p>Smart Websites, Mini Apps & Digital Systems</p>
        </div>
      </div>
    </footer>
  );
}
