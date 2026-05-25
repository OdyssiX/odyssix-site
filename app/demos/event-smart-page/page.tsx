import type { Metadata } from "next";
import DemoDetailPage from "../../../components/DemoDetailPage";

export const metadata: Metadata = {
  title: "Event Smart Page",
  description:
    "Demo smart event page για γάμους, βαφτίσεις και εκδηλώσεις με digital invitation, RSVP, πρόγραμμα, χάρτη και gallery.",
};

export default function EventSmartPage() {
  return <DemoDetailPage demoKey="event" />;
}
