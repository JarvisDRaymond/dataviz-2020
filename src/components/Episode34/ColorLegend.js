export const ColorLegend = ({
  colorScale,
  colorValue,
  tickSpacing = 40,
  tickTextOffset = 20,
}) => (
  <>
    <text
      x={75}
      y={15}
      text-decoration="underline"
      className="axis-label"
      textAnchor="middle"
    >
     Iris Species
    </text>

    <g className="labels" transform={`translate(30, 40)`}>
      {colorScale.domain().map((domainValue, i) => {
        return (
          <g transform={`translate(0,${tickSpacing * i})`}>
            <circle r="7" fill={colorScale(domainValue)} />
            <text className="tick" dy=".32em" x={tickTextOffset}>
              {domainValue}
            </text>
          </g>
        );
      })}
    </g>
  </>
);
