import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/a9656d711a8ad31d812b8f9963ac441c/raw/c22144062566de911ba32509613c84af2a99e8e2/MissingMigrants-Global-2019-10-08T09-47-14-subset.csv";

const row = (d) => {
  const locArr = d["Location Coordinates"].split(",");
  d.lat = +locArr[0].trim();
  d.lng = +locArr[1].trim();
  d.population = +d["Total Dead and Missing"];
  return d;
};

export const useLocations = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
