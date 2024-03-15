import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {};

const StartProjectButton = (props: Props) => {
  return (
    <Button
      className="fixed z-10 bottom-5 right-5 lg:bottom-10 lg:right-10 bg-white hover:bg-neutral-300 text-black font-bold text-base border border-border py-6 lg:px-8 rounded-full h-auto shadow "
      size={"lg"}
      asChild
    >
      <Link href={"/contact"}>
        Start a project
        <ArrowRight className="ml-2 h-6 w-6" />
      </Link>
    </Button>
  );
};

export default StartProjectButton;
