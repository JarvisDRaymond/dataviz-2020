import {
  curveNatural,
  line,
  geoNaturalEarth1,
  geoPath,
  geoGraticule,
} from "d3";
import { scale } from "vega";

// we need to define projection, then lines
// D3 has utilities: d3-geo
const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({ worldAtlas: { land, interiors }, locations, sizeScale, sizeValue }) => {
 
  return (
    <g className="marks">
      <path className="sphere" d={path({ type: "Sphere" })} />
      <path className="graticules" d={path(graticule())} />

      {land.features.map((feature, i) => {
        console.log(feature.properties.name);
        return (
          <g key={i} className="feature">
            <path d={path(feature)}></path>
          </g>
        );
      })}
      {locations.map((d, i) => {
        // projection takes in an array of lngs and lats
        const [x, y] = projection([d.lng, d.lat]);
        return (
          <circle
            key={i}
            className="populationCircle"
            r={sizeScale(sizeValue(d))}
            style={{ fill: "red", opacity: "0.8" }}
            cx={x}
            cy={y}
          >
            <title>
              Dead and Missing: {d.population}              
            </title>{" "}
          </circle>
        );
      })}

      <path className="interiors" d={path(interiors)} />
    </g>
  );
};
