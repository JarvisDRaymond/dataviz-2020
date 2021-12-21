import React from 'react';
import { arc } from 'd3';
import { BackgroundCircle } from "./BackgroundCircle"
import { Eyes } from "./Eyes"
import { Mouth } from "./Mouth"


const width = window.innerWidth;
const height = window.innerHeight;
const centerY = height / 2;
const strokeWidth = 20;
const centerX = width / 2;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const mouthWidth = 20;
const eyeRadius = 40;
const mouthRadius = 140;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 1.5);

function Episode9() {
  return (
    <div>
      <h1>Episode 9</h1>
      <svg width={width} height={height} >
        <g transform={`translate(${centerX},${centerY})`}>
          <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
          <Eyes eyeRadius={eyeRadius} eyeOffsetY={eyeOffsetY} eyeOffsetX={eyeOffsetX} />
          <Mouth />
        </g>
      </svg>


    </div>
  );
}

export default Episode9;