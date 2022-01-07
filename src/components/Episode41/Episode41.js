import React from 'react';
import ReactDOM from 'react-dom';
import { useWorldAtlas } from './useWorldAtlas';
import { useData } from './useData';
import { BubbleMap } from './BubbleMap/Index.js';
import { DateHistogram } from './DateHistogram/Index.js';

const width = 800;
const height = 500;
const dateHistogramSize = 0.2;

export const Episode41 = () => {
  const worldAtlas = useWorldAtlas();
  const data = useData();

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <BubbleMap data={data} worldAtlas={worldAtlas} />
      <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          width={width}
          height={dateHistogramSize * height}
        />
      </g>
    </svg>
  );
};
