import React, { useEffect, useState } from "react";

import { useData } from "./useData";

import { Marks } from "./Marks";
import "./chart.css";

export const Episode28 = () => {
  const episodeName = "Episode 28 & 29";
  const episodeDesc = "Global Map";
  const data = useData();
  const width = window.innerWidth * 0.9;
  const height = 600;



  if (!data) {
    return <pre>Loading {episodeName}...</pre>;
  }


  return (
    <>
      <h1>{episodeName}</h1>
      <p>{episodeDesc}</p>

      <svg width={width} height={height}>
        <g >
          <Marks
            data={data}            
          />
        </g>
      </svg>

    </>
  );
};
