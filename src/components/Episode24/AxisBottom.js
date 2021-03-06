export const AxisBottom = ({ xScale, innerHeight, tickFormat }) => {

  return xScale.ticks().map((tickValue) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line y2={innerHeight}></line>
      <text y={innerHeight + 3} dy=".71em" style={{ textAnchor: "middle" }}>
        {tickFormat(tickValue)}
      </text>
    </g>
  ));
};
