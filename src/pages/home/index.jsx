import React from "react";
import CareerQuizNavbar from "../../component/careerQuizNavbar/CareerQuizNavbar";
import Header from "../../component/header/Header";
import Hero from "../../component/hero/Hero";
import CareerQuiz from "../../component/careerQuiz/CareerQuiz";
import Footer from "../../component/footer/Footer";
import "./index.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      {/* <CareerQuizNavbar />
      <CareerQuiz />
      <Footer /> */}
    </div>
  );
};

export default Home;
