export const Marks = ({
  data,
  xScale,
  xValue,
  yScale,
  yValue,
  colorScale,
  colorValue,
  tooltipFormat,
  circleRadius
}) => {

  return (
    data &&
    data.map((d, i) => {
      return (
        <g className="mark" key={i}>
          <circle
            style={{ fill: colorScale(colorValue(d))}}
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={7}
          >            
          </circle>
        </g>
      );
    })
  );
};
