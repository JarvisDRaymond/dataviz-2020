export const Marks = ({ data, xScale, yScale, xValue, yValue }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    data &&
    data.map((d, i) => {
      return (
        <g className="mark" key={i}>
          <circle
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
