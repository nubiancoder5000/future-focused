import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/global.scss";
import logo from "../../assets/img/ffLogo2.svg";
import careerQuizButton from "../../assets/icons/careerQuizButton.svg";
import "./Header.scss";

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
];

// Header component
const Header = () => {
  // Function to render navigation links based on the start and end indices
  const renderNavLinks = (start, end) => {
    return navData.slice(start, end).map((item, index) => (
      <NavLink
        key={index}
        className="header__navbar--item"
        to={item.path}
        activeClassName="active"
      >
        {item.name}
      </NavLink>
    ));
  };

  return (
    <header className="header">
      {/* Web navigation */}
      <nav className="header__navbar header__navbar--web">
        {/* Render the first two navigation links */}
        {renderNavLinks(0, 2)}
        <Link to="/">
          <img className="header__navbar--logo" src={logo} alt="logo" />
        </Link>
        {/* Render the remaining navigation links */}
        {renderNavLinks(2, navData.length)}
        <Link to="/career-quiz">
          <img
            className="header__navbar--careerQuizButton"
            src={careerQuizButton}
            alt="Quiz Button"
          />
        </Link>
      </nav>

      {/* Mobile navigation */}
      <nav className="header__navbar__mobile">
        <div className="header__navbar__mobile__hamburgerIcon">
          <div>
            <img src={logo} alt="future focused logo" />
          </div>
          <MenuIcon />
        </div>
        <div className="header__navbar__mobile__item__wrap">
          {/* Render the first two navigation links */}
          {renderNavLinks(0, 2)}
          <Link to="/">
            <img className="header__navbar--logo" src={logo} alt="logo" />
          </Link>
          {/* Render the remaining navigation links */}
          {renderNavLinks(2, navData.length)}
          <Link to="/career-quiz">
            <img
              className="header__navbar--careerQuizButton"
              src={careerQuizButton}
              alt="Quiz Button"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
