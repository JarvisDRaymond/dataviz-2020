import React from 'react';
export const Mouth = ({mouthLeftX, mouthRightX}) => {
    return (
        <>
          <line x1={mouthLeftX} y1="30" x2={mouthRightX} y2="40" stroke-width="5" stroke="black" />
        </>
    )
}
