import React from "react";
import { HeaderSection } from "./_components/header-section";
import { LogoCarousel } from "@/components/logo-carousel";
import StatsSection from "./_components/stats-section";
import { TeamSection } from "./_components/team-section";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <main>
      <HeaderSection />
      <section className="bg-black/50 aspect-video">
        <video
          src="https://www.dstudio.digital/video/bubble-bg.mp4"
          autoPlay
          playsInline
          muted
        ></video>
      </section>

      <div className="py-16">
        <LogoCarousel />
      </div>

      <section className="relative text-black bg-white pt-20 pb-24">
        <div className="container">
          <div className="max-w-[47rem]">
            <h3 className="text-5xl font-semibold font-workSans">
              We pour our utmost dedication and effort into every project we
              undertake.
            </h3>
            <div className="mt-10 text-2xl font-light font-workSans space-y-10">
              <p>
                We are creators, and we excel at it. Dstudio comprises a team of
                seasoned experts who fearlessly tackle the most intricate
                challenges in website and mobile app development.
              </p>
              <p>
                We are creators, and we excel at it. Dstudio comprises a team of
                seasoned experts who fearlessly tackle the most intricate
                challenges in website and mobile app development.
              </p>
              <p>
                We are creators, and we excel at it. Dstudio comprises a team of
                seasoned experts who fearlessly tackle the most intricate
                challenges in website and mobile app development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <TeamSection />

      <section>
        <div className="container mx-auto mb-40 text-center">
          <div className="font-bold text-[60px] md:text-[90px] lg:text-[180px]">
            Join Team
          </div>
          <p className="text-2xl max-w-xl mx-auto mt-4 px-4">
            If you think you might be a good fit for our team, we’d love to hear
            from you!
          </p>
          <p className="text-3xl max-w-xl mx-auto mt-5 px-4 font-semibold">
            <a
              href="mailto:hr@dstudio.digital"
              className="text-blue-700 pt-4 text-[2rem] hover:text-gray-800"
            >
              hr@dstudio.digital
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
