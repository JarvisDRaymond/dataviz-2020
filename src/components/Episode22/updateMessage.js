import {csv, csvFormat} from "d3";
export const updateMessage = (data) => {
    let output =
      "Rows of Data: " +
      csvFormat(data).length +
      "\nColumns of Data: " +
      data.columns.length +
      "\nKilobytes of Data: " +
      Math.round(csvFormat(data).length / 1024) +
      "kB";
    return(output);
  }