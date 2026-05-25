import SolutionsSection from "../components/SolutionsSection";
import Footer from "../components/Footer";
import FinalCTASection from "../components/FinalCTASection";
import PackagesSection from "../components/PackagesSection";
import ProcessSection from "../components/ProcessSection";
import DemoProjectsSection from "../components/DemoProjectsSection";
import IndustriesSection from "../components/IndustriesSection";
import VisibilityHubSection from "../components/VisibilityHubSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SmartWebsiteSection from "../components/SmartWebsiteSection";

const solutions = [
  {
    title: "Smart Website",
    text: "Σύγχρονη ιστοσελίδα που λειτουργεί σαν mini εφαρμογή, με φόρμες, άμεση επικοινωνία, QR εργαλεία και mobile-first σχεδιασμό.",
    ideal: "Ιδανικό για τοπικές επιχειρήσεις, επαγγελματίες και μικρές εταιρείες.",
  },
  {
    title: "Tourism Visibility Hub",
    text: "Ψηφιακό hub για βίλες, καταλύματα και τουριστικές επιχειρήσεις με direct booking request, Google, πλατφόρμες, reviews και guest mini app.",
    ideal: "Ιδανικό για βίλες, rooms, μικρά ξενοδοχεία και τουριστικές δραστηριότητες.",
  },
  {
    title: "Restaurant Smart Hub",
    text: "Έξυπνη online παρουσία για εστιατόρια με QR menu, κρατήσεις, Google reviews QR, προσφορές και άμεση επικοινωνία.",
    ideal: "Ιδανικό για εστιατόρια, ταβέρνες, καφέ και beach bars.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <Header />
      <HeroSection />
      <ProblemSection />

      <SmartWebsiteSection />

      <SolutionsSection />

      <VisibilityHubSection />

      <IndustriesSection />

      <DemoProjectsSection />

      <ProcessSection />

      <PackagesSection />

      <FinalCTASection />

      <Footer />
    </main>
  );
}










