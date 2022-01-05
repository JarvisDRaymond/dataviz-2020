import {
  curveNatural,
  line,
  geoNaturalEarth1,
  geoPath,
  geoGraticule,
} from "d3";

// we need to define projection, then lines
// D3 has utilities: d3-geo
const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({ data: { land, interiors } }) => {
  return (
    <g className="marks">
      <path className="sphere" d={path({ type: "Sphere" })} />
      <path className="graticules" d={path(graticule())} />

      {land.features.map((feature) => {
        console.log(feature.properties.name);
        return (
          <g className="feature">
            <path d={path(feature)}></path>
          </g>
        );
      })}
      <path className="interiors" d={path(interiors)} />
    </g>
  );
};
