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
  bin,
  timeMonths,
  sum,
} from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { Border } from "./Border";
import "./chart.css";

export const Episode38 = () => {
  const episodeName = "Episode 38";
  const data = useData();
  const width = window.innerWidth * 0.9;
  const height = 600;
  const margin = {
    top: 40,
    right: 60,
    bottom: 120,
    left: 100,
  };
  const xAxisLabelOffset = 40;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

  if (!data) {
    return <pre>Loading {episodeName}...</pre>;
  }

  const xValue = (d) => d["Reported Date"];
  const yValue = (d) => d["Total Dead and Missing"];

  const xScale = scaleTime()
    // using extent is the same as .domain([min(data,xValue), max(data, xValue)])
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const [start, stop] = xScale.domain();

  const binnedData = bin()
    .value(xValue)
    .domain(xScale.domain())
    .thresholds(timeMonths(start, stop))(data)
    .map((array) => ({
      y: sum(array, yValue),
      x0: array.x0,
      x1: array.x1,
    }));
    console.log("binned data", binnedData)

  const yScale = scaleLinear()
    .domain([0, max(binnedData, (d) => d.y)])
    .range([innerHeight, 20]);

  console.log(binnedData);

  const xAxisLabel = "Time";
  const yAxisLabel = "Total Dead and Missing";

  const yAxisLabelOffset = 60;

  const formatDate = (date) => {
    const formattedDate = timeFormat("%m/%d/%Y");
    return formattedDate(date);
  };
  return (
    <>
      <h1>{episodeName}</h1>
      <p>Line Chart</p>

      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
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
            y={-18}
            style={{ textAnchor: "middle" }}
          >
            {xAxisLabel} vs {yAxisLabel}
          </text>
          <Marks
            binnedData={binnedData}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            innerHeight={innerHeight}
            yValue={yValue}
          />
        </g>
      </svg>

      <div>
        <h3>Temperature Over Time</h3>
        {data &&
          data.map((d, i) => {
            return (
              <div key={i}>
                {formatDate(d["Reported Date"])} : {d["Total Dead and Missing"]}
              </div>
            );
          })}
      </div>
    </>
  );
};
