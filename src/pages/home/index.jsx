import React from "react";
import CareerQuizNavbar from "../../component/careerQuizNavbar/CareerQuizNavbar";
import Header from "../../component/header/Header";
import ExploreCareers from "../../component/exploreCareers/ExploreCareers";
import Hero from "../../component/hero/Hero";
import CareerQuiz from "../../component/careerQuiz/CareerQuiz";
import Footer from "../../component/footer/Footer";
import "./index.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <ExploreCareers />
      <CareerQuiz />
      {/* <CareerQuizNavbar /> */}

      <Footer />
    </div>
  );
};

export default Home;
