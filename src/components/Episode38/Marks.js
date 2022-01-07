import { curveNatural, line } from "d3";
export const Marks = ({ binnedData, innerHeight,xScale, yScale, xValue, yValue }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <g className="marks">
    
      {binnedData &&
        binnedData.map((d, i) => {
          return (
            <g className="mark" key={i}>
              <rect
                x={xScale(d.x0)}
                y={yScale(d.y)}
                width={xScale(d.x1) - xScale(d.x0)}
                height={innerHeight - yScale(d.y)}
              ></rect>
            </g>
          );
        })}
    </g>
  );
};
