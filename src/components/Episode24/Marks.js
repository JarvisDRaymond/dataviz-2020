export const Marks= ({ data, xScale, yScale, xValue, yValue }) =>
  data &&
  data.map((d, i) => {
    return (
      <g key={i}>
        <rect
          x="0"
          y={yScale(yValue(d))}
          width="0"
          height={yScale.bandwidth()}
          fill={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        >
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
  });
