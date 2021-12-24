import React, { useEffect, useState } from "react";
import {csv, csvFormat} from "d3";
import {updateMessage} from './updateMessage'
export const Episode16 = () => {
  const [data, setData] = useState(null);
  const csvUrl =
    "https://gist.githubusercontent.com/JarvisDRaymond/783b2f60194298b428788cd6e266f0f2/raw/bcd67b18089fabf42fa4df43bc48b9432f1e7a22/CssColorNames.csv";


    useEffect(()=>{
      csv(csvUrl).then(setData);

    },[]);
    

 
  return (
    <>
      <h1>Episode 16</h1>
      <p>Data is {data? updateMessage(data) : 'loading'}</p>



    </>
  );
};
