import React, { useEffect, useState } from "react";
import { csv, csvFormat, max, scaleBand, scaleLinear } from "d3";

export const Episode22 = () => {
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

  const [data, setData] = useState(null);
  const csvUrl =
    "https://gist.githubusercontent.com/JarvisDRaymond/9e6e72a9bbec63603c2dde9fb1ae893c/raw/513b3f8262f6cf2922c6e0d27be5ec609317fd34/gistfile1.txt";

  useEffect(() => {
    const row = (d) => {
      d.POPULATION = +d["2020"];
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 15));
    });
  }, []);

  if (!data) {
    return <pre>Loading Episode 22...</pre>;
  }

  const yScale = scaleBand()
    .domain(data.map((d) => d.COUNTRY))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.POPULATION)])
    .range([0, innerWidth]);

  console.log("ticks: ", xScale.ticks());

  return (
    <>
      <h1>Episode 22</h1>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.right})`}>
          {xScale.ticks().map((tickValue) => (
            <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
              <line stroke="black" y2={innerHeight}></line>
              <text
                y={innerHeight + 3}
                dy=".71em"
                style={{ textAnchor: "middle" }}
              >
                {tickValue}
              </text>
            </g>
          ))}

          {yScale.domain().map((tickValue) => (
            <text
            key={tickValue}
              dy=".32em"
              x="-9"
              y={yScale(tickValue) + yScale.bandwidth() / 2}
              style={{ textAnchor: "end" }}
            >
              {tickValue}
            </text>
          ))}

          {data &&
            data.map((d, i) => {
              return (
                <g key={i}>
                  <rect
                    x="0"
                    y={yScale(d.COUNTRY)}
                    width="0"
                    height={yScale.bandwidth()}
                    fill={
                      "#" + Math.floor(Math.random() * 16777215).toString(16)
                    }
                  >
                    <animate
                      attributeName="width"
                      values={"0;" + xScale(d.POPULATION)}
                      dur="1s"
                      repeatCount="1"
                      fill="freeze"
                    />
                  </rect>
                </g>
              );
            })}
          <line
            x1="0"
            y1={innerHeight}
            x2={innerWidth + 15}
            y2={innerHeight}
            style={{ stroke: "black", strokeWidth: "1" }}
          />
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
