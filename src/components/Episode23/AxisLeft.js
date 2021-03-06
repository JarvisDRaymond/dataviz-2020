export const AxisLeft = ({ yScale }) =>
  yScale.domain().map((tickValue) => (
    <text
      key={tickValue}
      dy=".32em"
      x="-9"
      y={yScale(tickValue) + yScale.bandwidth() / 2}
      style={{ textAnchor: "end" }}
    >
      {tickValue}
    </text>
  ));
