import React, { useState, useEffect } from "react";
import CardImage from "../../assets/img/david-henrichs-72AYEEBJpz4-unsplash.jpg";
import { getUnsplashData } from "../../lib/unsplash";
import "./ExploreCareers.scss";

const ExploreCareers = () => {
  const [data, setData] = useState({});
  const getData = async () => {
    const unsplashData = await getUnsplashData();
    setData(unsplashData);
  };
  useEffect(() => {
    if (Object.keys(data)?.length <= 0) {
      getData();
    }
  }, []);
  console.log(data);
  return (
    <section className="explore-careers">
      <h1 className="explore-careers__title">Explore Careers</h1>
      <div className="explore-careers__card-wrap">
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={CardImage} alt="explore careers" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </section>
  );
};

export default ExploreCareers;
