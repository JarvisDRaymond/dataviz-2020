import React from 'react';
import { BackgroundCircle } from "./BackgroundCircle"
import { Eyes } from "./Eyes"
import { Mouth } from "./Mouth"
import { FaceContainer } from "./FaceContainer"


export const Face = ({
    width,
    height,
    strokeWidth,
    fill,
    eyeRadius,
    eyeOffsetX,
    eyeOffsetY,
    mouthLeftX,
    mouthRightX,
}) => {
    const centerX = width / 2;
    const centerY = height / 2;

    return (
        <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>
            <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} fill={fill}/>
            <Eyes eyeRadius={eyeRadius} eyeOffsetY={eyeOffsetY} eyeOffsetX={eyeOffsetX} />
            <Mouth mouthLeftX={mouthLeftX} mouthRightX={mouthRightX} />
        </FaceContainer>
    )
}



