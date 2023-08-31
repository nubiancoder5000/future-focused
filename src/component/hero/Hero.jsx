import React from "react";

import DroneImg from "../../assets/img/DroneImg.png";
import BluePrintImg from "../../assets/img/BluePrintImg.jpg";
import LaptopImg from "../../assets/img/laptopImg.png";
import gameController from "../../assets/img/gameController.png";

import heroVideo from "../../assets/video/roboticsEngineer.mp4";
// import searchIcon from '../../assets/icons/search-24px.svg'
import SearchBar from "../searchBar/SearchBar";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="Hero__wrapper">
        <div className="Hero__sideImage--container">
          <img className="Hero__sideImage" src={DroneImg} alt="Drone Image" />
          <img
            className="Hero__sideImage"
            src={BluePrintImg}
            alt="Blue Print Image"
          />
        </div>
        {/* <img className="hero__img" src={heroImg} alt="first img" width="320px"/> */}
        <div className="Hero__video--wrapper">
          <video className="Hero__video" autoPlay loop muted>
            <source src={heroVideo} />
            Your Browser isn't compatiable to view our awesome Video! Try
            Logging in on Google Chrome!
          </video>
        </div>
        <div className="Hero__sideImage--container">
          <img className="Hero__sideImage" src={LaptopImg} alt="laptop Image" />
          <img
            className="Hero__sideImage"
            src={gameController}
            alt="Game Controller Image"
          />
        </div>
      </div>
      <SearchBar />
    </>
  );
};

export default Hero;
