import React from 'react';
export const BackgroundCircle = ({radius, strokeWidth}) => {
    return (
        <circle
            r={radius}
            fill="lightblue"
            stroke="black"
            stroke-width={strokeWidth}
        />
    )
}
