import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// svg images
import logo from "../../assets/img/ffLogo2.svg";
import careerQuizButton from "../../assets/icons/careerQuizButton.svg";

// css
import "../../styles/global.scss";
// import "./Header.scss";


// Define navigation data with the name and corresponding path
const navData = [
  {
    name: "Careers",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Explore Careers",
    path: "/explore-careers",
  },
  {
    name: "Career Quiz",
    path: "/career-quiz"
  }
];

// Header component
const Header = () => {
  // Function to render navigation links based on the start and end indices
  const renderNavLinks = (start, end) => {
    return navData.slice(start, end).map((item, index) => (
      <NavLink
        key={index}
        className="header__navbar--item text-lg text-center text-white bg-[#3fadf1] rounded-2xl p-6 transfrom translate ease-in-out delay-150 duration-300 hover:bg-[#1b6fa3] scale-1 hover:scale-110"
        to={item.path}
        activeClassName="active"
      >
        {item.name}
      </NavLink>
    ));
  };

  // mobile menu toggle
  const [isOpen, setIsOpen]= useState(false)
  const toggleNavbar=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      {/* Web navigation */}
      <nav className="header__navbar header__navbar--web  top-0 z-[1] mx-auto hidden lg:flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
        {/* Render the first two navigation links */}
        {renderNavLinks(0, 2)}
        <Link to="/">
          <img className="header__navbar--logo max-w-[250px] min-[60px] transition transform ease-in-out delay-150 duration-300 hover:scale-110 hover:translate-y-1 left-[50%] ml-[125px] mr-8" src={logo} alt="logo" />
        </Link>
        {/* Render the remaining navigation links */}
        {renderNavLinks(2, (navData.length-1))}
        <Link to="/career-quiz">
          <img
            className="header__navbar--careerQuizButton w-[200px] transition ease-in-out delay-150 duration-300  hover:scale-110 hover:translate-y-1 "
            src={careerQuizButton}
            alt="Quiz Button"
          />
        </Link>
      </nav>

      {/* Mobile navigation */}
      <nav className="header__navbar__mobile flex flex-col items-center bg-slate-400 w-[100%] px-8 lg:hidden">
        {/* logo and menu icon */}
        <div className="header__navbar__mobile__hamburgerIcon flex w-[100%] h-[60px] justify-between items-center">
          <Link to="/">
            <img className="header__navbar--logo w-[60px] transition transform ease-in-out delay-150 duration-300 hover:scale-110 hover:translate-y-1" src={logo} alt="logo" />
          </Link>

          {/* this opens and closes the menu on click */}
          <button onClick={toggleNavbar}>
            {isOpen ? <CloseOutlinedIcon/> : <MenuIcon/>}
          </button>
        </div>

        {/* navlinks */}
        
        <div className="header__navbar__mobile__item__wrap">
          {isOpen && (
              navData.map((item, index) => (
                <NavLink
                  key={index}
                  className="flex text-base font-bold text-white pb-6 hover:text-[#1b6fa3] uppercase"
                  to={item.path}
                  activeClassName="active"
                >
                  {item.name}
                </NavLink>
              ))
            )}              
        </div>
      </nav>
    </header>
  );
};

export default Header;
