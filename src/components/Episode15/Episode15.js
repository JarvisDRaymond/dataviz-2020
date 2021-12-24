import React, { useCallback, useState } from "react";
import * as d3 from "d3";
export const Episode15 = () => {
  const [csvMetaData, setCsvMetaData] = useState("");

  // APPROACH WITH ASYNC AWAIT
  const fetchCSV = async (url) => {
    const res = await fetch(url);
    return await res.text();
  };
  const csvUrl =
    "https://gist.githubusercontent.com/JarvisDRaymond/783b2f60194298b428788cd6e266f0f2/raw/bcd67b18089fabf42fa4df43bc48b9432f1e7a22/CssColorNames.csv";

  // Vanilla JS Way
  /* fetchCSV(csvUrl).then((text) => {
    const data = csvParse(text);
    console.log('d3 data:',data);
    console.log('Rows of Data:',data.length);
    console.log('Columns of Data:',data.columns.length);
    console.log('Kilobytes of Data:',Math.round(text.length/1024)+'kB');
    let msg = 'Rows of Data: '+data.length+'\nColumns of Data: '+data.columns.length+'\nKilobytes of Data: '+Math.round(text.length/1024)+'kB';
    setCsvMetaData(msg);
  }); */

  // D3 JS Way
  d3.csv(csvUrl).then((data) => {
    let msg =
      "Rows of Data: " +
      d3.csvFormat(data).length +
      "\nColumns of Data: " +
      data.columns.length +
      "\nKilobytes of Data: " +
      Math.round(d3.csvFormat(data).length / 1024) +
      "kB";
      setCsvMetaData(msg);
  });
  return (
    <>
      <h1>Episode 15</h1>
      <pre>{csvMetaData}</pre>
    </>
  );
};
