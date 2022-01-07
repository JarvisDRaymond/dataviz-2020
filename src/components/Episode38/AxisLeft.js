export const AxisLeft = ({ yScale, innerWidth, tickOffset=-10 }) => {
  return yScale.ticks().map((tickValue,i) => (
    <g className="axisleft" transform={`translate(0,${yScale(tickValue)})`} >
      <line x2={innerWidth} className="axisLeftLine" />
      <text
        key={i}
        dy=".32em"
        x={ tickOffset}
        style={{ textAnchor: "end" }}
      >
        {tickValue}
      </text>
    </g>
  ));
};
