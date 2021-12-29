import React, { useEffect, useState } from "react";
import { csv, csvFormat, max, scaleBand, scaleLinear, format } from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { Border } from "./Border";
import "./chart.css";

export const Episode24 = () => {
  const data = useData();
  const width = window.innerWidth * 0.9;
  const height = 600;
  const margin = {
    top: 40,
    right: 30,
    bottom: 120,
    left: 220,
  };
  const xAxisLabelOffset = 40;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

  if (!data) {
    return <pre>Loading Episode 24...</pre>;
  }
  const yValue = (d) => d.COUNTRY;
  const xValue = (d) => d.POPULATION;
  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.1);

  return (
    <>
      <h1>Episode 24</h1>
      <p>Stylized Bar Chart</p>
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
          <AxisLeft yScale={yScale} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            style={{ textAnchor: "middle" }}
          >
            Population
          </text>
          <text
            className="title"
            x={innerWidth / 2}
            y={-8}
            style={{ textAnchor: "middle" }}
          >
            Populations by Country 2020
          </text>
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
          />
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
