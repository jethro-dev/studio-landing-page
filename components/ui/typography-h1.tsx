import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {};

export const TypographyH1 = ({ children, className }: Props) => {
  return (
    <h1 className={cn("font-semibold text-8xl font-workSans", className)}>
      {children}
    </h1>
  );
};
