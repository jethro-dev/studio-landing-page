import CaseStudy from "@/components/case-study";
import { CurvedText } from "@/components/curved-text";
import FaqSection from "@/components/faq-section";
import { FeaturedArticles } from "@/components/featured-articles";
import { HeaderSection } from "@/components/header-section";
import { LogoCarousel } from "@/components/logo-carousel";
import { MeshDemo } from "@/components/mesh-demo";
import { Navbar } from "@/components/navbar";
import { OurJourneySection } from "@/components/our-journey-section";
import OurProcess from "@/components/our-process";
import { ParallaxScrollDemo } from "@/components/parallax-scroll-demo";
import { SplineDemo } from "@/components/spline-demo";
import { SuccessStories } from "@/components/success-stories";
import VerticalSlideSection from "@/components/vertical-slide-section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeaderSection />

      <div className="py-8 md:py-12 lg:py-16 bg-white">
        <LogoCarousel />
      </div>

      <VerticalSlideSection />
      <OurProcess />
      <CaseStudy />
      <FaqSection />

      {/*
      <FeaturedArticles />
      <SuccessStories />
      <ServicesSection />
      <OurJourneySection />
       */}
    </main>
  );
}
