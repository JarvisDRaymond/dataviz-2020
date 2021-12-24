import React, {useCallback, useState } from "react";

export const Episode14 = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const circleRadius = 10;
  const initMousePos = {x: width / 2, y: height / 2}

  const [mousePos, setMousePos] = useState(initMousePos);
  const [movable,setMovable] = useState(true);

  const handleMouseMove = useCallback(e => {
      if (movable){
        setMousePos({x:e.clientX, y: e.clientY});
      }
  },[movable]);
  const handleClick = (e) => {
    if (movable)
    setMovable(false);
    else setMovable(true);
  };

  return (
    <>
    <div style={{position:"absolute", zIndex:"-1"}}>
    <h1>Episode 14</h1>
      <p>Mouse Follower</p>

    </div>
      <svg
        width={width}
        height={height}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
      >
        <circle cx={mousePos.x} cy={mousePos.y} r={circleRadius} />
      </svg>
    </>
  );
};
