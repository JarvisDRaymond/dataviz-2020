import React, { useEffect, useState } from "react";
import { arc } from "d3";
import { Dropdown } from "./Dropdown";
import "./styles.css"

export const Episode30 = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const options = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "hamster", label: "Hamster" },
    { value: "parrot", label: "Parrot" },
    { value: "spider", label: "Spider" },
    { value: "goldfish", label: "Goldfish" },
  ];
  const initialValue = "hamster";
  const [selectedValue, setSelectedValue] = useState(initialValue);
  console.log(selectedValue);
  return (
    <div>
      <h1>Episode 30</h1>
      <div>
        <label for="pet-select">Choose a pet:</label>
        <Dropdown
          options={options}
          id="pet-select"
          selectedValue={selectedValue}
          onSelectedValueChange={setSelectedValue}
        />
      </div>
    </div>
  );
};
