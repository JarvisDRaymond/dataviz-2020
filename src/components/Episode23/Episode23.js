import React, { useEffect, useState } from "react";
import { csv, csvFormat, max, scaleBand, scaleLinear } from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks} from "./Marks";
import { Border } from "./Border";


export const Episode23 = () => {
  const data = useData();
  const width = window.innerWidth * 0.9;
  const height = 500;
  const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 200,
  };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

  if (!data) {
    return <pre>Loading Episode 23...</pre>;
  }

  const yValue = d => d.COUNTRY;
  const xValue = (d) => d.POPULATION;

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight]);

  return (
    <>
      <h1>Episode 23</h1>
      <p>Refactored Bar Chart</p>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.right})`}>          
          <AxisBottom  xScale={xScale} innerHeight={innerHeight}/>
          <AxisLeft yScale={yScale} />
          <Marks data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} />
          <Border innerHeight={innerHeight} innerWidth={innerWidth} />
        </g>
      </svg>
      <div>
        {data &&
          data.map((d) => {
            console.log(data);
            return (
              <div key={d["COUNTRY"]}>
                {d["COUNTRY"]}: {d["2020"]}
              </div>
            );
          })}
      </div>
    </>
  );
};
