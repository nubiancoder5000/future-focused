import React from "react";
import DroneImg from "../../assets/img/DroneImg.png";
import BluePrintImg from "../../assets/img/BluePrintImg.png";
import LaptopImg from "../../assets/img/laptopImg.png";
import gameController from "../../assets/img/gameController.png";
import heroVideo from "../../assets/video/roboticsEngineer.mp4";
import SearchBar from "../searchBar/SearchBar";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="Hero__wrapper">
        {/* Side Images */}
        <div className="Hero__sideImage--container">
          <img className="Hero__sideImage" src={DroneImg} alt="Drone Image" />
          <img
            className="Hero__sideImage"
            src={BluePrintImg}
            alt="Blue Print Image"
          />
        </div>
        
        {/* Video */}
        <div className="Hero__video--wrapper">
          <video className="Hero__video" autoPlay loop muted>
            <source src={heroVideo} type="video/mp4" />
            Your browser isn't compatible to view our awesome video! Try
            logging in on Google Chrome!
          </video>
        </div>
        
        {/* Side Images */}
        <div className="Hero__sideImage--container">
          <img className="Hero__sideImage" src={LaptopImg} alt="Laptop Image" />
          <img
            className="Hero__sideImage"
            src={gameController}
            alt="Game Controller Image"
          />
        </div>
      </div>

      {/* Search Bar Component */}
      <SearchBar />

      {/* Bottom Text */}
      <div className="Hero__bottomText--container">
        <p>
          Future Focused is a web application that allows young people to
          discover potential careers they might be interested in by using our
          career quiz app or exploring the website.
        </p>
      </div>
    </>
  );
};

export default Hero;
