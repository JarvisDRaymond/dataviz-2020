import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useWorldAtlas } from "./useWorldAtlas";
import { useData } from "./useData";
import { BubbleMap } from "./BubbleMap/Index.js";
import { DateHistogram } from "./DateHistogram/Index.js";

const width = 800;
const height = 500;
const dateHistogramSize = 0.2;

export const Episode44 = () => {
  const worldAtlas = useWorldAtlas();
  const data = useData();
  const xValue = (d) => d["Reported Date"];
  const [BrushExtent, setBrushExtent] = useState(null);
  console.log(BrushExtent);
  if (!worldAtlas || !data) {
    return <pre>Loading Ep. 44...</pre>;
  }
  const filteredData = BrushExtent ? data.filter(d => {
    const date = xValue(d);
    return date > BrushExtent[0] && date < BrushExtent[1];
  }) : data;

  return (
    <svg width={width} height={height}>
      <BubbleMap
        data={filteredData}
        worldAtlas={worldAtlas}
      />
      <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          width={width}
          xValue={xValue}
          height={dateHistogramSize * height}
          setBrushExtent={setBrushExtent}
        />
      </g>
    </svg>
  );
};
