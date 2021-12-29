export const Border = ({ innerHeight, innerWidth }) => (
  <line
    className="border"
    x1="0"
    y1={innerHeight}
    x2={innerWidth + 15}
    y2={innerHeight}
  />
);
