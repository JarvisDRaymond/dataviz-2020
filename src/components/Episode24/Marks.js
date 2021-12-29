export const Marks = ({ data, xScale, yScale, xValue, yValue }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    data &&
    data.map((d, i) => {
      return (
        <g className="mark" key={i}>
          <rect
            x="0"
            y={yScale(yValue(d))}
            width="0"
            height={yScale.bandwidth()}
          >
            <title>{numberWithCommas(xValue(d))}</title>
            <animate
              attributeName="width"
              values={"0;" + xScale(xValue(d))}
              dur="1s"
              repeatCount="1"
              fill="freeze"
            />
          </rect>
        </g>
      );
    })
  );
};
