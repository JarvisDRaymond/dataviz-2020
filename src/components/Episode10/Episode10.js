import React from 'react';
import { range } from 'd3';
import { Face } from "./Face"

const width = 166;
const height = 166;
const numFaces = 9*20;
const fills=["lightblue","pink","red","darkblue","orange","green","purple"]

function Episode10() {
  const arr = range(numFaces);
  return (
    <div>
      <h1>Episode 10</h1>
      <p><a href="https://datavis.tech/datavis-2020-episode-6-lets-make-a-face-part-ii-with-react/
">https://datavis.tech/datavis-2020-episode-6-lets-make-a-face-part-ii-with-react/
</a></p>
      {arr.map(() => (
        <Face
          height={height}
          width={width}
          fill={fills[Math.floor(Math.random() * fills.length)]}
          strokeWidth={5}
          eyeRadius={1 + Math.random()*10}
          eyeOffsetX={30}
          eyeOffsetY={30}
          mouthLeftX={Math.random()*100 - 50}
          mouthRightX={Math.random()*100 - 50}
        />

      )

      )}

    </div>
  );
}

export default Episode10;