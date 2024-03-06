"use client";
import React from "react";
import ReactCurvedText from "react-curved-text";

type Props = {};

export const CurvedText = (props: Props) => {
  return (
    <div className="w-fit h-fit animate-[spin_10s_linear_infinite]">
      {/* @ts-ignore */}
      <ReactCurvedText
        width={300}
        height={300}
        cx={150}
        cy={150}
        rx={80}
        ry={80}
        startOffset={50}
        reversed={false}
        text="Design · Develop · Deliver · Design · Develop · Deliver"
        textProps={{
          style: { fontSize: 16, fontWeight: 600 },
        }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={null}
      />
    </div>
  );
};
