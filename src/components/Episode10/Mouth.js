import React from "react";
export const Mouth = ({ mouthLeftX, mouthRightX }) => {
  const x1LeftValues = "0;"+mouthLeftX+"; 0";
  const x1RightValues = "50;"+mouthRightX+";50";
  return (
    <>
      <line
        x1={mouthLeftX}
        y1="30"
        x2={mouthRightX}
        y2="40"
        stroke-width="5"
        stroke="black"
      >
        <animate
          attributeName="x1"
          values={x1LeftValues}
          dur={Math.random()*20+10}s
          repeatCount="indefinite"
        />
        <animate
          attributeName="y1"
          values={x1RightValues}
          dur={Math.random()*20+10}s
          repeatCount="indefinite"
        />
      </line>
    </>
  );
};
