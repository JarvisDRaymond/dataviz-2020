import React from "react";
export const Eyes = ({ eyeRadius, eyeOffsetY, eyeOffsetX }) => {
  const eyeR = "10;" + Math.random() * eyeRadius +  ";10;";
  const eyeR2 = "10;" + Math.random() * eyeRadius + ";10;";
  return (
    <>
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius}>
        <animate
          attributeName="r"
          values={eyeR}
          dur={Math.random() * 10 + 5}
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius}>
        <animate
          attributeName="r"
          values={eyeR2}
          dur={Math.random() * 10 + 15}
          repeatCount="indefinite"
        />
      </circle>
    </>
  );
};
