import React, { useEffect, useState } from "react";
import { csv, csvFormat, max, scaleBand, scaleLinear } from "d3";

export const Episode21 = () => {
  const width = window.innerWidth*.9;
  const height = 500;
  const [data, setData] = useState(null);
  const csvUrl =
    "https://gist.githubusercontent.com/JarvisDRaymond/9e6e72a9bbec63603c2dde9fb1ae893c/raw/513b3f8262f6cf2922c6e0d27be5ec609317fd34/gistfile1.txt";

  useEffect(() => {
    const row = (d) => {
      d.POPULATION = +d["2020"];
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return <pre>Loading Episode 21...</pre>;
  }

  console.log(data[0]);

  const yScale = scaleBand()
    .domain(data.map((d) => d.COUNTRY))
    .range([0, height]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.POPULATION)])
    .range([0, width]);

  return (
    <>
      <h1>Episode 21</h1>

      <svg width={width} height={height}>
        {data &&
          data.map((d, i) => {
            return (
              <>
                <rect
                  x="0"
                  y={yScale(d.COUNTRY)}
                  width="0"
                  height={yScale.bandwidth()}
                  fill={"#" + Math.floor(Math.random() * 16777215).toString(16)}
                >
                  <animate
                    attributeName="width"
                    values={"0;"+xScale(d.POPULATION)}
                    dur="1s"
                    repeatCount="1" fill="freeze"
                  />
                </rect>
                <text
                  x="0"
                  y={yScale(d.COUNTRY) + 30}
                  style={{ fontSize: "12px", fill: "white" }}
                >
                  {d.COUNTRY}
                </text>
              </>
            );
          })}
      </svg>

      <div>
        {data &&
          data.map((d) => {
            console.log(data);
            return (
              <div>
                {d["COUNTRY"]}: {d["2020"]}
              </div>
            );
          })}
      </div>
    </>
  );
};
