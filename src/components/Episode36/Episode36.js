import React, { useEffect, useState } from "react";
import { scaleSqrt, max } from "d3";
import { useData } from "./useData";
import { useCities } from "./useCities";
import { Marks } from "./Marks";
import "./chart.css";

export const Episode36 = () => {
  const episodeName = "Episode 36";
  const episodeDesc = "Global Map with Points";
  const worldAtlas = useData();
  const cities = useCities();
  console.log("cities", cities);
  const width = window.innerWidth ;
  const height = 600;

  if (!worldAtlas || !cities) {
    return <pre>Loading {episodeName}...</pre>;
  }

  const sizeValue = d => d.population;
  const maxRadius = 12;
  const sizeScale = scaleSqrt()
    .domain([0, max(cities,sizeValue)])
    .range([0, maxRadius])


  return (
    <>
      <h1>{episodeName}</h1>
      <p>{episodeDesc}</p>

      <svg width={width} height={height}>
        <g>
          <Marks
            worldAtlas={worldAtlas}
            cities={cities}
            sizeScale={sizeScale}
            sizeValue={sizeValue}
          />
        </g>
      </svg>
    </>
  );
};
