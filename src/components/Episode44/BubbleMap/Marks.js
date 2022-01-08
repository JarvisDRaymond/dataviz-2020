import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";
import { useMemo } from "react";
const projection = geoNaturalEarth1().scale(145).translate([400, 250]);
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({
  worldAtlas: { land, interiors },
  data,
  sizeScale,
  sizeValue,
}) => (
  <g className="marks">
    {useMemo(
      () => (
        <>
          <path className="sphere" d={path({ type: "Sphere" })} />
          <path className="graticules" d={path(graticule())} />
          {land.features.map((feature) => (
            <path className="land" d={path(feature)} />
          ))}
          <path className="interiors" d={path(interiors)} />
        </>
      ),
      [path, graticule, land, interiors]
    )}

    {data.map((d) => {
      const [x, y] = projection(d.coords);
      return (
        <circle
          style={{ fill: "red", opacity: "0.76" }}
          cx={x}
          cy={y}
          r={sizeScale(sizeValue(d))}
        />
      );
    })}
  </g>
);
