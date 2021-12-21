import React from 'react';

function BackgroundCircle({radius, strokeWidth}) {


    return (
        <circle
            r={radius}
            fill="lightblue"
            stroke="black"
            stroke-width={strokeWidth}
        />
    )
}

export default BackgroundCircle