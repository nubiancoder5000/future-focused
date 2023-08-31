import React, { useMemo, useState } from "react";
import searchIcon from "../../../src/assets/icons/search-24px.svg";
import "./Searchbar.scss";
import data from "../../data/03_occupation_data_json.json";

const DropDown = () => {
  console.log(data);
  const dataMemo = useMemo(() => {
    const start = 0,
      end = 16;
    return data.slice(start, end);
  }, [data]);
  const [selected, setSelected] = useState("");
  return (
    <div className="SearchBar__wrapper">
      <select
        value={selected}
        // onChange={(e) => console.log(e.target.options)}
        className="SearchBar__input"
      >
        <option>I want to be a:</option>
        {dataMemo.map((occupation) => (
          <option key={occupation.onetsoc_code} value={occupation.title}>
            {occupation.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
