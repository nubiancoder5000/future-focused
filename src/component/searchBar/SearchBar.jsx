import React, { useMemo, useState } from "react";
import searchIcon from "../../../src/assets/icons/search-24px.svg";
import "./Searchbar.scss";
import data from "../../data/ff-occupational-data.json";

const DropDown = () => {
  console.log(data);
  const dataMemo = useMemo(() => {
    const start = 0,
      end = 16;
    return data.slice(start, end);
  }, [data]);
  const [selected, setSelected] = useState("");
  console.log(dataMemo);
  return (
    <div className="SearchBar__wrapper">
      <select
        value={selected}
        // onChange={(e) => console.log(e.target.options)}
        className="SearchBar__input"
      >
        <option>I want to be a:</option>
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
