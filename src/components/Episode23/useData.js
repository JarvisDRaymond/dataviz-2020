import React, { useEffect, useState } from "react";
import { csv } from "d3";
export const useData = () => {
    const csvUrl =
    "https://gist.githubusercontent.com/JarvisDRaymond/9e6e72a9bbec63603c2dde9fb1ae893c/raw/513b3f8262f6cf2922c6e0d27be5ec609317fd34/gistfile1.txt";
  
    const [data, setData] = useState(null);
    useEffect(() => {
      const row = (d) => {
        d.POPULATION = +d["2020"];
        return d;
      };
      csv(csvUrl, row).then((data) => {
        setData(data.slice(0, 15));
      });
    }, []);
    return data;    
  }