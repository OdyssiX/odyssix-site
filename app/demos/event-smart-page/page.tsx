import type { Metadata } from "next";
import DemoDetailPage from "../../../components/DemoDetailPage";

export const metadata: Metadata = {
  title: "Event Smart Page",
  description:
    "Smart event page demo για γάμους, βαφτίσεις και εκδηλώσεις με digital invitation, RSVP, πρόγραμμα, χάρτη και gallery.",
  openGraph: {
    title: "Event Smart Page | ODYSSIX",
    description:
      "Demo smart event page για προσκλήσεις, RSVP, πρόγραμμα, χάρτη και gallery.",
  },
};

export default function EventSmartPage() {
  return <DemoDetailPage demoKey="event" />;
}
