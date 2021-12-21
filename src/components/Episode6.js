import React from 'react';
const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 140;
function Episode6() {
  return (
    <div>
      <svg width={width} height={height} >
        <g transform={`translate(${centerX},${centerY})`}>
          <circle
            r={centerY - strokeWidth / 2}
            fill="lightblue"
            stroke="black"
            stroke-width={strokeWidth}
          />
          <circle
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          />
          <circle
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          />
        </g>
      </svg>


    </div>
  );
}

export default Episode6;