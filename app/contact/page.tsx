import { HeaderSection } from "@/components/header-section";
import { Button } from "@/components/ui/button";
import React from "react";
import { QuoteForm } from "./_components/quote-form";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <main>
      <HeaderSection
        title={`Get \nEstimation`}
        description="We are excited to take on your new project and help you build something amazing!"
      />
      <QuoteForm />
    </main>
  );
};

export default ContactPage;
