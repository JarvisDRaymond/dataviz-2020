import React from 'react';
import { scaleSqrt, max } from 'd3';
import { Marks } from './Marks';

export const BubbleMap = ({ data,filteredData, worldAtlas }) => {
  const sizeValue = d => d['Total Dead and Missing'];
  const maxRadius = 15;

  const sizeScale = scaleSqrt()
    .domain([0, max(data, sizeValue)])
    .range([0, maxRadius]);

  return (
    <Marks
      worldAtlas={worldAtlas}
      data={filteredData}
      sizeScale={sizeScale}
      sizeValue={sizeValue}
    />
  );
};
