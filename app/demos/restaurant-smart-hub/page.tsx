import type { Metadata } from "next";
import DemoDetailPage from "../../../components/DemoDetailPage";

export const metadata: Metadata = {
  title: "Restaurant Smart Hub",
  description:
    "Smart hub demo για εστιατόρια, ταβέρνες και καφέ με QR menu, κρατήσεις, Google reviews QR, προσφορές και άμεση επικοινωνία.",
  openGraph: {
    title: "Restaurant Smart Hub | ODYSSIX",
    description:
      "Demo smart hub για χώρους εστίασης με QR menu, κρατήσεις, προσφορές και reviews.",
  },
};

export default function RestaurantSmartHubPage() {
  return <DemoDetailPage demoKey="restaurant" />;
}
