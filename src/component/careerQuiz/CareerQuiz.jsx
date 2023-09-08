import React, { useState } from "react";
import "./CareerQuiz.scss";
import occupationData from "../../assets/spreadsheets/occupation_data.json";
import Header from "../header/Header.jsx";

const CareerQuiz = () => {
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
    if (event.target.checked) {
      setResults({
        ...results,
        [event.target.name]: results[event.target.name] + 1,
      });
    } else {
      setResults({
        ...results,
        [event.target.name]: results[event.target.name] - 1,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const max = Math.max(...Object.values(results)); // holds the max value
    const filter = results.filter((item) => item === max);
    console.log(filter);
    const resultsArray = occupationData
      .filter((item) => {
        filter.includes(item.name);
      })
      .map((item) => {
        // returning & displaying results section
        return {
          name: item.Title,
          occupation: item.picture,
        };
      });

    setResultsArray(resultsArray);
    console.log(results);
    console.log(resultsArray);
  };

  return (
    // <Header />

    <div className="CareerQuiz__wrapper">
      <div className="careerQuiz_title">
        <h1>Career Quiz: Explore By Interest</h1>
      </div>

      <div className="careerQuiz__container--right">
        <h2>Still Need help Deciding?</h2>

        <form onSubmit={handleSubmit} className="careerQuiz__form">
          <h3>Select Items Below That Interest You</h3>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="realistic" value="option1" />
              Computers
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="investigative" value="option2" />
              Video Games
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="realistic" value="option3" />
              Legos
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="investigative" value="option4" />
              Coding
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="enterprising" value="option5" />
              Leading
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="realistic" value="option6" />
              Working Outside
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="social" value="option7" />
              Helping People
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="investigative" value="option8" />
              Math & Science
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="investigative" value="option9" />
              Computers
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="artistic" value="option10" />
              Sketch, Draw or Paint
            </label>
          </div>
          <label>
            <input type="checkbox" name="enterprising" value="option11" />
            Running a Business
          </label>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="enterprising" value="option12" />
              Traveling
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="artistic" value="option13" />
              Art
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="conventional" value="option14" />
              Following a Set Plan
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="social" value="option15" />
              Team Work
            </label>
          </div>

          <div className="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="investigative" value="option16" />
              Solving a Mystery
            </label>
          </div>

          {/* 2nd Part of Career Quiz */}
          <div className="careerQuiz_title">
            {/* Subtitle  */}
            <h2>I Can...</h2>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="social" value="option17" />
              Give a Talk or Speech
            </label>
          </div>

          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="investigative" value="option18" />
              Use a Microscope
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="realistic" value="option19" />
              Great with Computers
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="realistic" value="option20" />
              Playing a Sport
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="realistic" value="option21" />
              Express Myself Clearly
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="artistic" value="option22" />
              Plant in a Garden
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="conventional" value="option23" />
              Do a lot of paperwork in a short period of time
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="investigative" value="option24" />
              Think Abstractly
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="investigative" value="option25" />
              Play a Musical Instrumrnt
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="enterprising" value="option26" />
              Write Business Letters
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="investigative" value="option27" />
              Likes Animals
            </label>
          </div>

          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="realistic" value="option28" />
              Computers
            </label>
          </div>

          {/* 3nd Part of Career Quiz */}
          <div className="careerQuiz_title">
            {/* Subtitle  */}
            <h2>When I Grow Up I Want To Be...</h2>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="enterprising" value="option29" />
              Independent
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="conventional" value="option30" />
              Think Logically about problems
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="conventional" value="option31" />
              Organized
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="social" value="option32" />
              Conversate and Make lots of Friends
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="social" value="option33" />
              Sociable & Network
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="conventional" value="option34" />
              Practical about situations
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="enterprising" value="option35" />
              Adventerous
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="social" value="option36" />
              Expressive About What I Feel & Percieve About The World
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="" value="option37" />
              Scientific
            </label>
          </div>
          <div class="CareerQuiz__checkbox-container">
            <label>
              <input type="checkbox" name="enterprising" value="option38" />
              Outgoing
            </label>
          </div>

          <button type="submit" value="Submit">
            {"SUBMIT"}
          </button>
        </form>
      </div>

      <div className="CareerQuiz__container--submit">
        <p>Results</p>
      </div>
    </div>
  );
};

export default CareerQuiz;
