import React from "react";
import { FaqItem } from "./faq-item";

type Props = {};

const questions = [
  {
    question: "How to begin with the project?",
    answer:
      "To embark on a collaborative project, simply visit our website and access our contact form to get in touch.where we collaborate with you to outline the project scope and determine how we can assist you with our services. We will provide you with a cost estimate, prepare a comprehensive statement of work, and schedule kickoff calls with our respective teams. Once all the necessary paperwork is completed and the deposit payment is settled, we dive right into the project, ready to deliver exceptional results!",
  },
  {
    question: "How do you charge for the project?",
    answer:
      "We provide our clients with a range of flexible billing options tailored to their needs. These include fixed project fees, hourly rates, as well as monthly and yearly retainers for research, design, and development services. Our goal is to ensure that our billing structures align with the specific requirements of each client, fostering transparency and delivering value for the services rendered.",
  },
  {
    question: "What are the services you offer?",
    answer:
      "We provide an extensive array of services encompassing research, UI/UX design, branding, motion design, as well as frontend and backend development for mobile, web, and diverse devices. Our comprehensive offerings cater to a broad spectrum of client needs and ensure holistic solutions for their digital endeavors.",
  },
  {
    question: "Where is Yee Studio Located?",
    answer:
      "We have a strong presence with offices in London and Edinburgh. We also have office in Hong Kong. Our dual locations allow us to cater to clients from diverse regions and provide localized support and expertise.",
  },
];

const FaqSection = (props: Props) => {
  return (
    <section className="relative pb-16 pt-16">
      <div className="container max-w-7xl">
        <h2 className="text-center text-2xl md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 lg:mt-20 max-w-3xl mx-auto flex flex-col gap-3 lg:gap-6">
          {questions.map((question, i) => (
            <FaqItem key={i} {...question} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
