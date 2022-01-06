export const ColorLegend = ({
  colorScale,
  colorValue,
  tickSpacing = 40,
  tickTextOffset = 20,
  onHover,
  hoverValue,
  fadeOpacity
}) => (
  <>
    <text
      x={75}
      y={15}
      textDecoration="underline"
      className="axis-label"
      textAnchor="middle"
    >
      Iris Species
    </text>

    <g className="labels" transform={`translate(30, 40)`}>
      {colorScale.domain().map((domainValue, i) => {
        return (
          <g
            onMouseEnter={()=>{onHover(domainValue)}}
            onMouseOut={()=>{onHover(null)}}
            key={i}
            className="tick"
            transform={`translate(0,${tickSpacing * i})`}
            opacity={hoverValue&& domainValue !==hoverValue? fadeOpacity:1}
          >
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
