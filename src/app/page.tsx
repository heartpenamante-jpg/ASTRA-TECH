import PhoneNavbar from "@/components/PhoneNavbar";
import PhoneHero from "@/components/PhoneHero";
import DynamicIslandPreview from "@/components/DynamicIslandPreview";
import CameraShowcase from "@/components/CameraShowcase";
import ChipPerformance from "@/components/ChipPerformance";
import BatteryChargeSim from "@/components/BatteryChargeSim";
import Configurator from "@/components/Configurator";
import TechSpecsAccordion from "@/components/TechSpecsAccordion";
import PressReviews from "@/components/PressReviews";
import PhoneFooter from "@/components/PhoneFooter";
import StickyBottomBar from "@/components/StickyBottomBar";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <PhoneNavbar />
      <main id="main-content" style={{ flex: 1 }}>
        <PhoneHero />
        <DynamicIslandPreview />
        <CameraShowcase />
        <ChipPerformance />
        <BatteryChargeSim />
        <PressReviews />
        <Configurator />
        <TechSpecsAccordion />
      </main>
      <StickyBottomBar />
      <PhoneFooter />
    </div>
  );
}
