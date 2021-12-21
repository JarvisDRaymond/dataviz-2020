import React from 'react';
import { arc } from 'd3';
import BackgroundCircle from "./BackgroundCircle"

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




function Episode8() {
  return (
    <div>
      <h1>Episode 8</h1>
      <svg width={width} height={height} >
        <g transform={`translate(${centerX},${centerY})`}>
          <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth}/>
         
          <circle
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
          />
          <circle
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
        >
         <animate attributeName="r" values="20;50;20" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius/2}
            fill="white"
          />
          <circle
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius/2}
            fill="white"
        />
                  <circle
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius/3}
            fill="darkblue"
          />
          <circle
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius/3}
            fill="darkblue"
        />
          {/* <path d={mouthArc()}></path> */}
          <line x1="-150" y1="60" x2="150" y2="80" stroke-width="20" stroke="black">
          <animate attributeName="x1" values="0;-150;0" dur="10s" repeatCount="indefinite" />
          <animate attributeName="y1" values="50;60;50" dur="10s" repeatCount="indefinite" />
            </line>
            <line x1="-150" y1="-160" x2="-40" y2="-120" stroke-width="20" stroke="black" />
            <line x1="150" y1="-180" x2="40" y2="-130" stroke-width="20" stroke="black" />
  
        </g>
      </svg>


    </div>
  );
}

export default Episode8;