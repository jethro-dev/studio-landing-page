import CaseStudy from "@/components/case-study";
import { CurvedText } from "@/components/curved-text";
import FaqSection from "@/components/faq-section";
import { HeaderSection } from "@/components/header-section";
import { LogoCarousel } from "@/components/logo-carousel";
import { MeshDemo } from "@/components/mesh-demo";
import { Navbar } from "@/components/navbar";
import { OurJourneySection } from "@/components/our-journey-section";
import { ParallaxScrollDemo } from "@/components/parallax-scroll-demo";
import { ServicesSection } from "@/components/services-section";
import { SuccessStories } from "@/components/success-stories";
import VerticalSlideSection from "@/components/vertical-slide-section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <MeshDemo /> */}
      <HeaderSection
        title={`Full-Cycle\n Development\nAgency`}
        description="We specialise in delivering ready-to-use websites, mobile applications, and comprehensive online business services."
      />
      {/* <ParallaxScrollDemo /> */}
      <div className="py-16">
        <LogoCarousel />
      </div>

      <VerticalSlideSection />
      {/* <OurJourneySection />
      <ServicesSection />
      <CaseStudy />
      <SuccessStories />
      <FaqSection />
       */}
    </main>
  );
}
