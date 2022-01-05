import { curveNatural, line } from "d3";
export const Marks = ({ data, xScale, yScale, xValue, yValue }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <g         className="marks">

      <path

        d={line()
          
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yValue(d))).curve(curveNatural)(data)}
      ></path>
      {data &&
        data.map((d, i) => {
          return (
            <g className="mark" key={i}>
              <circle
                cx={xScale(xValue(d))}
                cy={yScale(yValue(d))}
                r={2}
              ></circle>
            </g>
          );
        })}
    </g>
  );
};
