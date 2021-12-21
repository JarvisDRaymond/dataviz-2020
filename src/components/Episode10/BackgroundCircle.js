import React from 'react';
export const BackgroundCircle = ({radius, strokeWidth, fill}) => {
    return (
        <circle
            r={radius}
            fill={fill}
            stroke="black"
            stroke-width={strokeWidth}
        />
    )
}
