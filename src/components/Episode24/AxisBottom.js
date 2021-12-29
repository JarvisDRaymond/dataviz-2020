export const AxisBottom = ({ xScale, innerHeight }) => 
    xScale.ticks().map((tickValue) => (
    <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
      <line stroke="black" y2={innerHeight}></line>
      <text y={innerHeight + 3} dy=".71em" style={{ textAnchor: "middle" }}>
        {tickValue}
      </text>
    </g>
  ))

