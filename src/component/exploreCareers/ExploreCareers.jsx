import React, { useState, useEffect, useMemo } from "react";
import CardImage from "../../assets/img/david-henrichs-72AYEEBJpz4-unsplash.jpg";
import { getUnsplashData } from "../../lib/unsplash";
import data from "../../data/ff-occupational-data.json";
import "./ExploreCareers.scss";

const ExploreCareers = () => {
  console.log(data);
  const dataMemo = useMemo(() => {
    const start = 0,
      end = 24;
    return data.slice(start, end);
  }, [data]);
  const [selected, setSelected] = useState("");
  console.log(dataMemo);
  return (
    <section className="explore-careers">
      <h1 className="explore-careers__title">Explore Careers</h1>
      <div className="explore-careers__card-wrap">
        {dataMemo.map((item) => (
          <div key={item.onet_soc_code}>
            <img src={item.img_url} alt={item.Title} />
            <p className="explore-careers__title">{item.Title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCareers;
