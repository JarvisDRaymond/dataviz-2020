import React, { useEffect, useState } from "react";
import { scaleSqrt, max } from "d3";
import { useData } from "./useData";
import { useLocations } from "./useLocations";
import { Marks } from "./Marks";
import "./chart.css";

export const Episode40 = () => {
  const episodeName = "Episode 40";
  const episodeDesc = "Missing Migrants Map with Points";
  const worldAtlas = useData();
  const locations = useLocations();
  const width = window.innerWidth ;
  const height = 600;

  if (!worldAtlas || !locations) {
    return <pre>Loading {episodeName}...</pre>;
  }

  const sizeValue = d => d.population;
  const maxRadius = 12;
  const sizeScale = scaleSqrt()
    .domain([0, max(locations,sizeValue)])
    .range([0, maxRadius])


  return (
    <>
      <h1>{episodeName}</h1>
      <p>{episodeDesc}</p>

      <svg width={width} height={height}>
        <g>
          <Marks
            worldAtlas={worldAtlas}
            locations={locations}
            sizeScale={sizeScale}
            sizeValue={sizeValue}
          />
        </g>
      </svg>
    </>
  );
};
