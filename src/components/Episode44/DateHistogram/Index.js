import {
  scaleLinear,
  scaleTime,
  max,
  timeFormat,
  extent,
  bin,
  timeMonths,
  sum,
  brushX,
  select,
} from "d3";
import { useRef, useEffect, useMemo } from "react";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";

const margin = { top: 0, right: 30, bottom: 20, left: 45 };
const xAxisLabelOffset = 54;
const yAxisLabelOffset = 30;

export const DateHistogram = ({
  xValue,
  data,
  width,
  height,
  setBrushExtent,
}) => {
  const brushRef = useRef();

  const xAxisLabel = "Time";

  const yValue = (d) => d["Total Dead and Missing"];
  const yAxisLabel = "Total Dead and Missing";

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xAxisTickFormat = timeFormat("%m/%d/%Y");

  const xScale = useMemo(
    () =>
      scaleTime().domain(extent(data, xValue)).range([0, innerWidth]).nice(),
    [data, xValue, innerWidth]
  );

  const [start, stop] = xScale.domain();

  const binnedData = useMemo(
    () =>
      bin()
        .value(xValue)
        .domain(xScale.domain())
        .thresholds(timeMonths(start, stop))(data)
        .map((array) => ({
          y: sum(array, yValue),
          x0: array.x0,
          x1: array.x1,
        })),
    [data]
  );

  const yScale = useMemo(() => scaleLinear()
    .domain([0, max(binnedData, (d) => d.y)])
    .range([innerHeight, 0]), [binnedData]);

  useEffect(() => {
    const brush = brushX().extent([
      [0, 0],
      [innerWidth, innerHeight],
    ]);
    brush(select(brushRef.current));
    brush.on("brush end", (event) => {
      setBrushExtent(
        event.selection ? event.selection.map(xScale.invert) : null
      );
    });
  }, [innerWidth, xScale, stop, start, innerHeight]);

  return (
    <>
      <rect width={width} height={height} fill="white" />
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          style={{ fontSize: "0.6em" }}
          transform={`translate(${-yAxisLabelOffset},${
            innerHeight / 2 - 10
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          binnedData={binnedData}
          xScale={xScale}
          yScale={yScale}
          tooltipFormat={(d) => d}
          circleRadius={2}
          innerHeight={innerHeight}
        />
        <g ref={brushRef}></g>
      </g>
    </>
  );
};
