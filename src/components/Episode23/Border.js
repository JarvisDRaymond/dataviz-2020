export const Border = ({innerHeight, innerWidth}) => (
    <line
    x1="0"
    y1={innerHeight}
    x2={innerWidth + 15}
    y2={innerHeight}
    style={{ stroke: "black", strokeWidth: "1" }}
  />
)