import React, { useEffect, useState } from "react";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  csv,
  csvFormat,
  extent,
  max,
  scaleBand,
  scaleLinear,
  format,
  scaleOrdinal,
} from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { Border } from "./Border";
import { Dropdown } from "./Dropdown";
import { ColorLegend } from "./ColorLegend";
import "./chart.css";

export const Episode35 = () => {
  const data = useData();
  const width = window.innerWidth * 0.8;
  const height = 800;
  const margin = {
    top: 40,
    right: 200,
    bottom: 250,
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

  const [xAttribute, setXAttribute] = useState("petal_length");
  const [yAttribute, setYAttribute] = useState("petal_width");

  const xValue = (d) => d[xAttribute];
  const yValue = (d) => d[yAttribute];

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
  const [hoverValue, setHoverValue] = useState(null);
  const fadeOpacity = 0.25;

  if (!data) {
    return <pre>Loading Episode 35...</pre>;
  }

  const xScale = scaleLinear()
    // using extent is the same as .domain([min(data,xValue), max(data, xValue)])
    .domain(extent(data, xValue))
    .range([0, innerWidth]);
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0]);

  const colorValue = (d) => d.species;

  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(["#E6842A", "#137B80", "#8E6C8A"]);

  const filteredData = data.filter((d) => hoverValue === colorValue(d));
  const onHover = (domainValue) => {
    setHoverValue(domainValue);
    console.log(hoverValue);
  };

  return (
    <>
      <h1>Episode 35</h1>
      <p>Scatter Plot with Interactive Colour legend</p>
      <div className="menus-container">
        <div className="dropdown">
          <span className="dropdown-label">Y</span>
          <ReactDropdown
            options={attributes}
            id="y-select"
            value={yAttribute}
            onChange={({ value }) => setYAttribute(value)}
          />
        </div>

        <div className="dropdown">
          <span className="dropdown-label">X</span>
          <ReactDropdown
            options={attributes}
            id="x-select"
            value={xAttribute}
            onChange={({ value }) => setXAttribute(value)}
          />
        </div>
      </div>

      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
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
          <g transform={`translate(${innerWidth + 50})`}>
            <ColorLegend
              colorScale={colorScale}
              colorValue={colorValue}
              onHover={onHover}
              hoverValue={hoverValue}
              fadeOpacity={fadeOpacity}
            />
          </g>
          <g opacity={hoverValue ? fadeOpacity : 1}>
            <Marks
              data={data}
              xScale={xScale}
              yScale={yScale}
              colorScale={colorScale}
              colorValue={colorValue}
              xValue={xValue}
              yValue={yValue}
            />
          </g>

          {hoverValue && (
            <Marks
              data={filteredData}
              xScale={xScale}
              yScale={yScale}
              colorScale={colorScale}
              colorValue={colorValue}
              xValue={xValue}
              yValue={yValue}
            />
          )}
        </g>
      </svg>
    </>
  );
};
