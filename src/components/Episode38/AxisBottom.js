export const AxisBottom = ({ xScale, innerHeight,formatDate, tickOffset=5 }) => {

  return xScale.ticks().map((tickValue) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line y2={innerHeight}></line>
      <text y={innerHeight + tickOffset} dy=".71em" style={{ textAnchor: "middle" }}>
        {formatDate((tickValue))}
      </text>
    </g>
  ));
};
