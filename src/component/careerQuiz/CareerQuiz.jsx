import React, { useState, useMemo } from "react";
import "./CareerQuiz.scss";
import Header from "../header/Header.jsx";
import youngMan from "../../assets/img/young-man.png";
import vrKid from "../../assets/img/vr_kid.png";
import data from "../../data/ff-occupational-data.json";

const CareerQuiz = () => {
  const renderCheckbox = (name, label, value) => (
    <div className="CareerQuiz__checkbox-container" key={name}>
      <label>
        <input
          onChange={handleChange}
          type="checkbox"
          name={name}
          value={value}
        />
        {label}
      </label>
    </div>
  );
  
  const [results, setResults] = useState({
    realistic: 0,
    investigative: 0,
    artistic: 0,
    social: 0,
    enterprising: 0,
    conventional: 0,
  });
  const [resultsArray, setResultsArray] = useState([]);

  const handleChange = (event) => {
    const { name } = event.target;
    setResults((prevResults) => ({
      ...prevResults,
      [name]: event.target.checked
        ? prevResults[name] + 1
        : prevResults[name] - 1,
    }));
  };

  const dataMemo = useMemo(() => data.slice(0, 16), [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const max = () => {
      let maxItem = "realistic";
      let maxValue = results[maxItem];
      for (const item in results) {
        let tempValue = results[item];
        if (tempValue > maxValue) {
          maxItem = item;
          maxValue = tempValue;
        }
      }
      return maxItem;
    };
    const filter = dataMemo.filter((item) => item.name === max());
    setResultsArray(filter);
  };

  return (
    <div className="CareerQuiz__wrapper">
      <div className="CareerQuiz_title">
        <h1>Career Quiz: Explore By Interest</h1>
      </div>

      <div className="CareerQuiz__container--right">
        <form onSubmit={handleSubmit} className="CareerQuiz__form">
          {/* Section One */}
          <div className="CareerQuiz__section-one">
            <div className="CareerQuiz__section-one__checkbox-section-wrap">
              {/* Left Container */}
              <div className="CareerQuiz__section-one__checkbox-section__left">
                <h2>Still Need Help Deciding?</h2>
                <h3>Select Items Below That Interest You</h3>

                <div className="CareerQuiz__section-one__checkbox-section__left__checkboxes">
                  {/* Realistic Interests */}
                  {renderCheckbox("realistic", "Computers", "Computers")}
                  {renderCheckbox("realistic", "Legos", "Legos")}
                  {renderCheckbox("realistic", "Working Outside", "Working Outside")}
                  {renderCheckbox("realistic", "Great with Computers", "Great with Computers")}
                  {renderCheckbox("realistic", "Playing a Sport", "Playing a Sport")}
                  {renderCheckbox("realistic", "Express Myself Clearly", "Express Myself Clearly")}
                  {renderCheckbox("realistic", "Computers", "Computers")}
                  
                  {/* Investigative Interests */}
                  {renderCheckbox("investigative", "Video Games", "Video Games")}
                  {renderCheckbox("investigative", "Coding", "Coding")}
                  {renderCheckbox("investigative", "Math & Science", "Math & Science")}
                  {renderCheckbox("investigative", "Solving a Mystery", "Solving a Mystery")}
                  
                  {/* Artistic Interests */}
                  {renderCheckbox("artistic", "Sketch, Draw or Paint", "Sketch, Draw or Paint")}
                  {renderCheckbox("artistic", "Art", "Art")}
                  
                  {/* Social Interests */}
                  {renderCheckbox("social", "Helping People", "Helping People")}
                  {renderCheckbox("social", "Team Work", "Team Work")}
                  
                  {/* Enterprising Interests */}
                  {renderCheckbox("enterprising", "Leading", "Leading")}
                  {renderCheckbox("enterprising", "Running a Business", "Running a Business")}
                  {renderCheckbox("enterprising", "Traveling", "Traveling")}
                </div>
              </div>
              
              {/* Right Container */}
              <div className="CareerQuiz__section-one__checkbox-section__right">
                <img src={youngMan} alt="picture of a young man" />
              </div>
            </div>
          </div>
          
          {/* Section Two */}
          <div className="CareerQuiz_title">
            <h1>More Interests</h1>
          </div>
          <div className="CareerQuiz__section-two">
            {/* 2nd Part of Career Quiz */}
            <div className="CareerQuiz__section-two__col-one">
              <div className="CareerQuiz_title">
                {/* Subtitle  */}
                <h2>I Can...</h2>
              </div>
              <div className="CareerQuiz__more-interests">
                {/* More checkboxes for interests */}
                {renderCheckbox("social", "Give a Talk or Speech", "option17")}
                {renderCheckbox("investigative", "Use a Microscope", "option18")}
                {/* ... Add more checkboxes here */}
              </div>
            </div>
            
            {/* 3rd Part of Career Quiz */}
            <div className="CareerQuiz__section-two__col-two">
              <div className="CareerQuiz_title">
                {/* Subtitle  */}
                <h2>When I Grow Up I Want To Be...</h2>
              </div>
              <div className="CareerQuiz__more-interests">
                {/* More checkboxes for career aspirations */}
                {renderCheckbox("enterprising", "Independent", "option29")}
                {renderCheckbox("conventional", "Think Logically about problems", "option30")}
                {renderCheckbox("conventional", "Organized", "option31")}
                {renderCheckbox("social", "Converse and Make lots of Friends", "option32")}
                {/* ... Add more checkboxes here */}
              </div>
            </div>
            
            {/* Right Container */}
            <div className="CareerQuiz__section-two__col-three">
              <img src={vrKid} alt="picture of a vr kid" />
            </div>
          </div>
          
          <button
            className="CareerQuiz__submit--button"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>

      {resultsArray.length > 0 && (
        <div className="CareerQuiz__container--submit">
          <section className="explore-careers">
            <h1 className="explore-careers__title">
              You could become any of the following:
            </h1>
            <div className="explore-careers__card-wrap">
              {resultsArray.map((item) => (
                <div key={item.onet_soc_code}>
                  <img src={item.img_url} alt={item.Title} />
                  <p className="explore-careers__title">{item.Title}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CareerQuiz;
