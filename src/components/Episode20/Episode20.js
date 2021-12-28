import React, { useEffect, useState } from "react";
import { csv, csvFormat, arc, pie } from "d3";
import { updateMessage } from "./updateMessage";
export const Episode20 = () => {
  const width = 500;
  const height = 900;
  const centerX = width / 2;
  const centerY = height / 2;
  const [data, setData] = useState(null);
  const csvUrl =
    "https://gist.githubusercontent.com/JarvisDRaymond/783b2f60194298b428788cd6e266f0f2/raw/bcd67b18089fabf42fa4df43bc48b9432f1e7a22/CssColorNames.csv";

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  const pieArc = arc().innerRadius(0).outerRadius(width);
  const colorPie = pie().value(1);
  return (
    <>
      <h1>Episode 20</h1>
      <p>Data is {data ? updateMessage(data) : "loading"}</p>

      <div className="pieVizAuto">
        {data && (
          <svg width="500px" height="500px">
            <g transform={`translate(${centerX}, ${centerY})`}>
              {colorPie(data).map((d) => (
                <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
              ))}
            </g>
          </svg>
        )}
      </div>

      <div className="pieVizManually">
        {data && (
          <svg width="1500px" height="1500px">
            <g transform={`translate(${centerX}, ${centerY})`}>
              {data.map((d, i) => {
                return (
                  <path
                    fill={d["RGB hex value"]}
                    d={pieArc({
                      startAngle: (i / data.length) * 2 * Math.PI,
                      endAngle: ((i + 1) / data.length) * 2 * Math.PI,
                    })}
                  />
                );
              })}
            </g>
          </svg>
        )}
      </div>

      <div className="viz">
        {data && (
          <svg height="1500px">
            <rect width="30px" height="10px" fill="red" />
            {data.map((d, i) => {
              return (
                <rect
                  width="500px"
                  y={i * 10}
                  height="10px"
                  fill={d["RGB hex value"]}
                />
              );
            })}
            }
          </svg>
        )}
      </div>

      <div>
        {data &&
          data.map((d) => {
            return (
              <div
                style={{
                  backgroundColor: d["RGB hex value"],
                  "min-height": "4px",
                  width: "100%",
                }}
              >
                {d["Keyword"]}
              </div>
            );
          })}
      </div>
    </>
  );
};
