import type { Metadata } from "next";
import DemoDetailPage from "../../../components/DemoDetailPage";

export const metadata: Metadata = {
  title: "Villa Smart Site",
  description:
    "Demo smart website για βίλες και καταλύματα με direct booking request, guest mini app, QR welcome guide και local recommendations.",
};

export default function VillaSmartSitePage() {
  return <DemoDetailPage demoKey="villa" />;
}
