import React, { useState, useMemo } from "react";
import "./CareerQuiz.scss";
import occupationData from "../../assets/spreadsheets/occupation_data.json";
import Header from "../header/Header.jsx";
import youngMan from "../../assets/img/young-man.png";
import vrKid from "../../assets/img/vr_kid.png";
import data from "../../data/ff-occupational-data.json";

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

  const dataMemo = useMemo(() => {
    const start = 0,
      end = 16;
    return data.slice(start, end);
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const max = () => {
      let maxItem = "realistic";
      let maxValue = results[maxItem];
      for (const item in results) {
        let tempValue = results[item]; // gets the value at this step
        if (tempValue > maxValue) maxItem = item;
      }
      return maxItem;
    };
    console.log(max());
    const filter = dataMemo.filter((item) => item.name === max());
    console.log(filter);

    setResultsArray(filter);
    console.log(results);
  };
  console.log(resultsArray);
  return (
    <div className="CareerQuiz__wrapper">
      <div className="CareerQuiz_title">
        <h1>Career Quiz: Explore By Interest</h1>
      </div>

      <div className="CareerQuiz__container--right">
        <form onSubmit={handleSubmit} className="CareerQuiz__form">
          <div className="CareerQuiz__section-one">
            <div className="CareerQuiz__section-one__checkbox-section-wrap">
              <div className="CareerQuiz__section-one__checkbox-section__left">
                <h2>Still Need help Deciding?</h2>
                <h3>Select Items Below That Interest You</h3>

                <div className="CareerQuiz__section-one__checkbox-section__left__checkboxes">
                  <div class="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="realistic"
                        value="Computers"
                      />
                      Computers
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="investigative"
                        value="Video Games"
                      />
                      Video Games
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="realistic"
                        value="Legos"
                      />
                      Legos
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="investigative"
                        value="Coding"
                      />
                      Coding
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="enterprising"
                        value="Leading"
                      />
                      Leading
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="realistic"
                        value="Working Outside"
                      />
                      Working Outside
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="social"
                        value="Helping People"
                      />
                      Helping People
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="investigative"
                        value="Math & Science"
                      />
                      Math & Science
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="investigative"
                        value="Computers"
                      />
                      Computers
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="artistic"
                        value="Sketch, Draw or Paint"
                      />
                      Sketch, Draw or Paint
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="enterprising"
                        value="Running a Business"
                      />
                      Running a Business
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="enterprising"
                        value="Traveling"
                      />
                      Traveling
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="artistic"
                        value="Art"
                      />
                      Art
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="conventional"
                        value="Following a Set Plan"
                      />
                      Following a Set Plan
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="social"
                        value="Team Work"
                      />
                      Team Work
                    </label>
                  </div>

                  <div className="CareerQuiz__checkbox-container">
                    <label>
                      <input
                        onChange={handleChange}
                        type="checkbox"
                        name="investigative"
                        value="Solving a Mystery"
                      />
                      Solving a Mystery
                    </label>
                  </div>
                </div>
              </div>
              {/* Right Container */}
              <div className="CareerQuiz__section-one__checkbox-section__right">
                <img src={youngMan} alt="picture of a young man" />
              </div>
            </div>
          </div>
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
                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="social"
                      value="option17"
                    />
                    Give a Talk or Speech
                  </label>
                </div>

                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="investigative"
                      value="option18"
                    />
                    Use a Microscope
                  </label>
                </div>
                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="realistic"
                      value="option19"
                    />
                    Great with Computers
                  </label>
                </div>
                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="realistic"
                      value="option20"
                    />
                    Playing a Sport
                  </label>
                </div>
                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="realistic"
                      value="option21"
                    />
                    Express Myself Clearly
                  </label>
                </div>
                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="artistic"
                      value="option22"
                    />
                    Plant in a Garden
                  </label>
                </div>
                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="conventional"
                      value="option23"
                    />
                    Do a lot of paperwork in a short period of time
                  </label>
                </div>
                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="investigative"
                      value="option24"
                    />
                    Think Abstractly
                  </label>
                </div>
                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="investigative"
                      value="option25"
                    />
                    Play a Musical Instrumrnt
                  </label>
                </div>
                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="enterprising"
                      value="option26"
                    />
                    Write Business Letters
                  </label>
                </div>
                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="investigative"
                      value="option27"
                    />
                    Likes Animals
                  </label>
                </div>

                <div class="CareerQuiz__checkbox-container">
                  <label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="realistic"
                      value="option28"
                    />
                    Computers
                  </label>
                </div>
              </div>
            </div>
            <div className="CareerQuiz__section-two__col-two">
              {/* 3nd Part of Career Quiz */}
              <div className="CareerQuiz_title">
                {/* Subtitle  */}
                <h2>When I Grow Up I Want To Be...</h2>
              </div>
              <div class="CareerQuiz__checkbox-container">
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="enterprising"
                    value="option29"
                  />
                  Independent
                </label>
              </div>
              <div class="CareerQuiz__checkbox-container">
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="conventional"
                    value="option30"
                  />
                  Think Logically about problems
                </label>
              </div>
              <div class="CareerQuiz__checkbox-container">
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="conventional"
                    value="option31"
                  />
                  Organized
                </label>
              </div>
              <div class="CareerQuiz__checkbox-container">
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="social"
                    value="option32"
                  />
                  Conversate and Make lots of Friends
                </label>
              </div>
              <div class="CareerQuiz__checkbox-container">
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="social"
                    value="option33"
                  />
                  Sociable & Network
                </label>
              </div>
              <div class="CareerQuiz__checkbox-container">
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="conventional"
                    value="option34"
                  />
                  Practical about situations
                </label>
              </div>
              <div class="CareerQuiz__checkbox-container">
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="enterprising"
                    value="option35"
                  />
                  Adventerous
                </label>
              </div>
              <div class="CareerQuiz__checkbox-container">
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="social"
                    value="option36"
                  />
                  Expressive About What I Feel & Percieve About The World
                </label>
              </div>
              <div class="CareerQuiz__checkbox-container">
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name=""
                    value="option37"
                  />
                  Scientific
                </label>
              </div>
              <div class="CareerQuiz__checkbox-container">
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="enterprising"
                    value="option38"
                  />
                  Outgoing
                </label>
              </div>
            </div>
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

      {resultsArray?.length > 0 && (
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
