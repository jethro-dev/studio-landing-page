import CaseStudy from "@/components/case-study";
import { CurvedText } from "@/components/curved-text";
import FaqSection from "@/components/faq-section";
import { Navbar } from "@/components/navbar";
import { ParallaxScrollDemo } from "@/components/parallax-scroll-demo";
import { ServicesSection } from "@/components/services-section";
import { SuccessStories } from "@/components/success-stories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="relative py-4 my-10 bg-white md:my-20">
        <div className="mx-auto container px-4 pt-4">
          <div className="mb-8">
            <h1 className="font-semibold text-8xl font-workSans">
              We Are Full-Cycle
              <br className="hidden-mobile" /> Development Agency
            </h1>
          </div>
          <div className="flex relative">
            <div className="flex-auto md:flex-1 pe-4 hidden md:inline-block relative">
              <CurvedText />
            </div>
            <div className="flex-auto md:flex-1 pt-20">
              <div className="ml-auto max-w-xl">
                <p className="text-2xl font-light pb-6">
                  We specialise in delivering ready-to-use websites, mobile
                  applications, and comprehensive online business services.
                </p>
                <div className="inline-block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="ring-1 relative w-full h-[20vh] md:h-full bg-black">
        <div className="relative flex bg-gray-400 py-6 sm:py-12 h-full">
          <div className="absolute w-full h-full left-1/2 -translate-x-1/2  flex items-stretch ring-1 justify-center gap-2">
            <div className="w-[50vw] border border-black flex flex-col gap-2 h-full">
              <div className="bg-red-500 aspect-video"></div>
              <div className="bg-red-500 aspect-video"></div>
              <div className="bg-red-500 aspect-video"></div>
            </div>
            <div className="w-[50vw] border border-black flex flex-col gap-2 h-full">
              <div className="bg-green-500 aspect-video h-[32vw]">ss</div>
              <div className="bg-green-500 aspect-video h-[32vw]">ss</div>
              <div className="bg-green-500 aspect-video h-[32vw]">ss</div>
            </div>
            <div className="w-[50vw] border border-black flex flex-col gap-2 h-full">
              <div className="bg-blue-500 aspect-video h-[32vw]">ss</div>
              <div className="bg-blue-500 aspect-video h-[32vw]">ss</div>
              <div className="bg-blue-500 aspect-video h-[32vw]">ss</div>
            </div>
          </div>
        </div>
      </section> */}

      <ParallaxScrollDemo />

      <section className="relative snap-start mt-20 mb-16">
        <div className="mx-auto container px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className="font-semibold text-8xl font-workSans">
              Our Design -
              <br className="hidden-mobile" /> Journey
            </h1>
          </div>
          <div></div>
          <div className="mt-9">
            <video
              src="https://www.dstudio.digital/video/hero-sec.mp4"
              loop
              muted
              autoPlay
              playsInline
              preload="auto"
            />
          </div>
          <div className="max-w-[43rem] mt-16">
            <div data-aos="fade-up" className="aos-init aos-animate">
              <p className="text-2xl font-sans pb-6">
                A globally distributed digital agency uniting remote team
                members and collaborators to offer valuable insights and a
                diverse perspective.
              </p>
            </div>
            <div data-aos="fade-up" className="aos-init aos-animate">
              <p className="text-2xl font-sans pb-6">
                Our strength lies in challenging fundamental assumptions,
                unraveling entrenched behaviors, simplifying intricate
                processes, and crafting impactful products and services that
                enhance the lives of millions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <CaseStudy />

      <SuccessStories />

      <FaqSection />
    </div>
  );
}
