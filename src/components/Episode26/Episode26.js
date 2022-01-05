import React, { useEffect, useState } from "react";
import {
  csv,
  csvFormat,
  extent,
  max,
  scaleTime,
  scaleLinear,
  format,
  timeFormat,
} from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { Border } from "./Border";
import "./chart.css";

export const Episode26 = () => {
  const episodeName = "Episode 26";
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
    return <pre>Loading {episodeName}...</pre>;
  }
  const xValue = (d) => d.timestamp;
  const yValue = (d) => d.temperature;

  const xScale = scaleTime()
    // using extent is the same as .domain([min(data,xValue), max(data, xValue)])
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

  const xAxisLabel = "Time";
  const yAxisLabel = "Temperature";

  const yAxisLabelOffset = 60;

  const formatDate = (date) => {
    const formattedDate = timeFormat("%a");
    return formattedDate(date);
  };
  return (
    <>
      <h1>{episodeName}</h1>
      <p>Line Chart</p>

      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.right})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            formatDate={formatDate}
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
            transform={`translate(${-yAxisLabelOffset}, ${
              innerHeight / 2
            }) rotate(-90) `}
          >
            {yAxisLabel}
          </text>

          <text
            className="title"
            x={innerWidth / 2}
            y={-8}
            style={{ textAnchor: "middle" }}
          >
            {xAxisLabel} vs {yAxisLabel}
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
        <h3>Temperature Over Time</h3>
        {data &&
          data.map((d, i) => {
            console.log(data);
            return (
              <div key={i}>
                {formatDate(d.timestamp)} : {d.temperature}
              </div>
            );
          })}
      </div>
    </>
  );
};
