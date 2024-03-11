import { HeaderSection } from "@/components/header-section";
import { Button } from "@/components/ui/button";
import React from "react";
import { QuoteForm } from "./_components/quote-form";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Contact Us",
};

const ContactPage = (props: Props) => {
  return (
    <main>
      <QuoteForm />
    </main>
  );
};

export default ContactPage;
