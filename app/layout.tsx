import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ODYSSIX — Smart Websites & Digital Systems",
    template: "%s | ODYSSIX",
  },
  description:
    "Η ODYSSIX δημιουργεί smart websites, mini apps και ψηφιακά συστήματα για επιχειρήσεις που θέλουν καλύτερη online παρουσία, αιτήματα και κρατήσεις.",
  keywords: [
    "ODYSSIX",
    "Smart Websites",
    "Digital Systems",
    "Mini Apps",
    "Ιστοσελίδες",
    "Web Apps",
    "QR Tools",
    "Tourism Websites",
    "Restaurant Websites",
    "Crete Digital Agency",
  ],
  authors: [{ name: "ODYSSIX" }],
  creator: "ODYSSIX",
  openGraph: {
    title: "ODYSSIX — Smart Websites & Digital Systems",
    description:
      "Ιστοσελίδες που λειτουργούν σαν εφαρμογές. Smart websites, mini apps και ψηφιακά συστήματα για επιχειρήσεις.",
    type: "website",
    locale: "el_GR",
    siteName: "ODYSSIX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
