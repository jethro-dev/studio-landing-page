import HeaderSection from "@/components/header-section";
import { Button } from "@/components/ui/button";
import React from "react";
import { QuoteForm } from "./_components/quote-form";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <main>
      <HeaderSection />

      <QuoteForm />
    </main>
  );
};

export default ContactPage;
