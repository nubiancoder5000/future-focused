import React, { useMemo, useState } from "react";
import "./Searchbar.scss";
import data from "../../data/ff-occupational-data.json";

// Define the DropDown component
const DropDown = () => {
  // Memoize a portion of the data array to improve performance
  const dataMemo = useMemo(() => {
    const start = 0,
      end = 16;
    return data.slice(start, end);
  }, [data]);

  // Manage the selected option in state
  const [selected, setSelected] = useState("");

  return (
    <div className="SearchBar__wrapper">
      {/* Render the select element */}
      <select
        value={selected}
        //replaced console.log with setSelected
        onChange={(e) => setSelected(e.target.value)}
        className="SearchBar__input"
      >
        {/* Default option */}
        <option>I want to be a:</option>

        {/* Map over the memoized data and generate options */}
        {dataMemo.map((occupation) => (
          <option key={occupation.onet_soc_code} value={occupation.Title}>
            {occupation.Title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
