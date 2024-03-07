import CaseStudy from "@/components/case-study";
import { CurvedText } from "@/components/curved-text";
import FaqSection from "@/components/faq-section";
import { HeaderSection } from "@/components/header-section";
import { LogoCarousel } from "@/components/logo-carousel";
import { Navbar } from "@/components/navbar";
import { OurJourneySection } from "@/components/our-journey-section";
import { ParallaxScrollDemo } from "@/components/parallax-scroll-demo";
import { ServicesSection } from "@/components/services-section";
import { SuccessStories } from "@/components/success-stories";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeaderSection
        title={`We Are Full-Cycle\n Development Agency`}
        description="We specialise in delivering ready-to-use websites, mobile applications, and comprehensive online business services."
      />
      <ParallaxScrollDemo />
      <div className="py-16">
        <LogoCarousel />
      </div>
      <OurJourneySection />
      <ServicesSection />
      <CaseStudy />
      <SuccessStories />
      <FaqSection />
    </main>
  );
}
