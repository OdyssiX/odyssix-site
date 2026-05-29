import type { Metadata } from "next";
import DemoDetailPage from "../../../components/DemoDetailPage";

export const metadata: Metadata = {
  title: "Villa Smart Site",
  description:
    "Smart website demo για βίλες, καταλύματα και τουριστικές επιχειρήσεις με direct booking request, guest mini app, QR welcome guide και local recommendations.",
  openGraph: {
    title: "Villa Smart Site | ODYSSIX",
    description:
      "Demo smart website για βίλες και καταλύματα με direct requests, guest guide και QR εργαλεία.",
  },
};

export default function VillaSmartSitePage() {
  return <DemoDetailPage demoKey="villa" />;
}
