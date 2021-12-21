import React from 'react';
export const Eyes = ({ eyeRadius, eyeOffsetY, eyeOffsetX }) => {
    return (
        <>
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
        </>
    )
}
