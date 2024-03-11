import React from "react";
import { Button } from "./ui/button";

type Props = {};

const articles = [
  {
    title: "Creating the KOTAverse to celebrate 10 years of KOTA",
    categories: ["Culture", "Our Work"],
  },
];

export const FeaturedArticles = (props: Props) => {
  return (
    <section className="bg-black text-white ring-1">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-7xl font-medium font-montserrat tracking-tight">
            Featured articles
          </h2>
          <Button
            variant={"outline"}
            className="bg-transparent text-white border-white"
          >
            View our blog
          </Button>
        </div>
        <div></div>
      </div>
    </section>
  );
};
