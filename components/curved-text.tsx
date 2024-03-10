"use client";
import React from "react";
import ReactCurvedText from "react-curved-text";

type Props = {};

export const CurvedText = (props: Props) => {
  return (
    <div className="w-fit h-fit animate-[spin_10s_linear_infinite]">
      {/* @ts-ignore */}
      <ReactCurvedText
        width={80}
        height={80}
        cx={40}
        cy={40}
        rx={35}
        ry={35}
        startOffset={50}
        reversed={false}
        text="Design · Develop · Deliver"
        textProps={{
          style: { fontSize: 12, fontWeight: 400 },
        }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={null}
      />
    </div>
  );
};
