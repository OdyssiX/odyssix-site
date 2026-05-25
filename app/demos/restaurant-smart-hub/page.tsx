import type { Metadata } from "next";
import DemoDetailPage from "../../../components/DemoDetailPage";

export const metadata: Metadata = {
  title: "Restaurant Smart Hub",
  description:
    "Demo smart hub για εστιατόρια, ταβέρνες και καφέ με QR menu, κρατήσεις, Google reviews QR και άμεση επικοινωνία.",
};

export default function RestaurantSmartHubPage() {
  return <DemoDetailPage demoKey="restaurant" />;
}
