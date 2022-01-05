import React, { useEffect, useState } from "react";
import {
  csv,
  csvFormat,
  extent,
  max,
  scaleBand,
  scaleLinear,
  format,
} from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { Border } from "./Border";
import "./chart.css";

export const Episode25 = () => {
  const data = useData();
  const width = window.innerWidth * 0.9;
  const height = 600;
  const margin = {
    top: 40,
    right: 30,
    bottom: 120,
    left: 80,
  };
  const xAxisLabelOffset = 40;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

  if (!data) {
    return <pre>Loading Episode 25...</pre>;
  }
  const xValue = (d) => d.sepal_length;
  const yValue = (d) => d.sepal_width;

  const xScale = scaleLinear()
    // using extent is the same as .domain([min(data,xValue), max(data, xValue)])
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    ;
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight,0]);

  const xAxisLabel = "Sepal Height";
  const yAxisLabel = "Sepal Width";
  const yAxisLabelOffset = 60;

  return (
    <>
      <h1>Episode 25</h1>
      <p>Scatter Plot</p>
      <b>See: </b>
      <a href="https://github.com/amycesal/dataviz-style-guide/blob/master/Sunlight-StyleGuide-DataViz.pdf">
        Sunlight Foundation Visual Style Guide
      </a>

      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.right})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={(n) => format(".2s")(n).replace("G", "B")}
          />
          <AxisLeft yScale={yScale} innerWidth={innerWidth} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            style={{ textAnchor: "middle" }}
          >
            {xAxisLabel}
          </text>

          <text
            className="axis-label"

            style={{ textAnchor: "middle" }}
            transform={`translate(${-yAxisLabelOffset}, ${innerHeight/2}) rotate(-90) `}
          >
            {yAxisLabel}
          </text>

          <text
            className="title"
            x={innerWidth / 2}
            y={-8}
            style={{ textAnchor: "middle" }}
          >
            Sepal Width vs Sepal Height
          </text>
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
          />
        </g>
      </svg>

      <div>
        <h3>Sepal Width vs. Sepal Length</h3>
        {data &&
          data.map((d) => {
            console.log(data);
            return (
              <div key={d.sepal_width}>
                {d.sepal_width}: {d.sepal_length}
              </div>
            );
          })}
      </div>
    </>
  );
};
