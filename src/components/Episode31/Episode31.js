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
import { Dropdown } from "./Dropdown";
import "./chart.css";

export const Episode31 = () => {
  const data = useData();
  const width = window.innerWidth * 0.9;
  const height = 600;
  const margin = {
    top: 40,
    right: 30,
    bottom: 120,
    left: 80,
  };
  const attributes = [
    { value: "sepal_length", label: "Sepal Length" },
    { value: "sepal_width", label: "Sepal Width" },
    { value: "petal_length", label: "Petal Length" },
    { value: "petal_width", label: "Petal Width" },
    { value: "species", label: "Species" },
  ];

  const xAxisLabelOffset = 40;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

  const initialXAttribute = "petal_length";
  const [xAttribute, setXAttribute] = useState(initialXAttribute);

  const initialYAttribute = "petal_width";
  const [yAttribute, setYAttribute] = useState(initialYAttribute);

  const xValue = (d) => d[xAttribute];
  const yValue = (d) => d[yAttribute];
  console.log("xValue", xValue);

  const getLabel = (value) => {
    for (let i = 0; i < attributes.length; i++) {
      if (attributes[i].value === value) {
        return attributes[i].label;
      }
    }
  };

  const xAxisLabel = getLabel(xAttribute);
  const yAxisLabel = getLabel(yAttribute);
  const yAxisLabelOffset = 60;

  if (!data) {
    return <pre>Loading Episode 31...</pre>;
  }
  const xScale = scaleLinear()
    // using extent is the same as .domain([min(data,xValue), max(data, xValue)])
    .domain(extent(data, xValue))
    .range([0, innerWidth]);
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0]);

  return (
    <>
      <h1>Episode 31</h1>
      <p>Scatter Plot with Menus</p>
      <div className="dropdown">
        <label for="y-select">Y:</label>
        <Dropdown
          options={attributes}
          id="y-select"
          selectedValue={yAttribute}
          onSelectedValueChange={setYAttribute}
        />
      </div>
      <div className="dropdown">
        <label for="x-select">X:</label>
        <Dropdown
          options={attributes}
          id="x-select"
          selectedValue={xAttribute}
          onSelectedValueChange={setXAttribute}
        />
      </div>

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
            {yAxisLabel} vs {xAxisLabel}
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


    </>
  );
};
