import { CaseStudyItem } from "@/components/case-study-item";
import { HeaderSection } from "@/components/header-section";
import { projects } from "@/data";
import React from "react";

type Props = {};

const CaseStudyPage = (props: Props) => {
  return (
    <main>
      <HeaderSection
        title={`Our Case\nStudy`}
        description="We are excited to take on your new project and help you build something amazing!"
      />
      <div className="mx-auto container px-6 pb-16 md:pb-28">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((item, i) => (
            <CaseStudyItem key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CaseStudyPage;
