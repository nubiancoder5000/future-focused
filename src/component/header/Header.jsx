//header code//
import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import "../../styles/global.scss";
import logo from "../../assets/img/ffLogo2.svg";
import careerQuizButton from "../../assets/icons/careerQuizButton.svg";
import "./Header.scss";

const NavData = [
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
    path: "/career-quiz",
  },
];

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navbar header__navbar--web">
        {" "}
        <Link className="header__navbar--item" to="/careerList">
          Careers
        </Link>
        <Link className="header__navbar--item" to="/about-us">
          About Us
        </Link>
        {/* {NavData.slice(0, 2).map((item, index) => (<Link className="header__navbar--item" to={item.path}>{item.name}</Link>))} */}
        <Link to="/">
          <img className="header__navbar--logo" src={logo} alt="logo" />
        </Link>
        <Link className="header__navbar--item" to="/explore-careers">
          Explore Careers
        </Link>
        <Link to="/career-quiz">
          <img
            className="header__navbar--careerQuizButton"
            src={careerQuizButton}
            alt="Quiz Button"
          />
        </Link>
        {/* {NavData.slice(2, NavData?.length).map((item, index) => (<Link className="header__navbar--item" to={item.path}>{item.name}</Link>))} */}
      </nav>

      <nav className="header__navbar__mobile">
        <div className="header__navbar__mobile__hamburgerIcon">
          <div>
            <img src={logo} alt="future focused logo" />
          </div>
          <MenuIcon />
        </div>
        <div className="header__navbar__mobile__item__wrap">
          {" "}
          <Link className="header__navbar--item" to="/careerList">
            Careers
          </Link>
          <Link className="header__navbar--item" to="/about-us">
            About Us
          </Link>
          {/* {NavData.slice(0, 2).map((item, index) => (<Link className="header__navbar--item" to={item.path}>{item.name}</Link>))} */}
          <Link to="/">
            <img className="header__navbar--logo" src={logo} alt="logo" />
          </Link>
          <Link className="header__navbar--item" to="/explore-careers">
            Explore Careers
          </Link>
          <Link to="/career-quiz">
            <img
              className="header__navbar--careerQuizButton"
              src={careerQuizButton}
              alt="Quiz Button"
            />
          </Link>
          {/* {NavData.slice(2, NavData?.length).map((item, index) => (<Link className="header__navbar--item" to={item.path}>{item.name}</Link>))} */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
