import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/ffLogo2.svg";
import fbIcon from "../../assets/icons/fb-icon.png";
import igIcon from "../../assets/icons/ig-icon.png";
import linkedinIcon from "../../assets/icons/linkedin-icon.png";

const Footer = () => {
  const footerLinks = ["Explore Careers","About Future Focused","College, Trade, or a Job?"]
  return (
    <>
      <div className="footer__wrapper">
        <img className="footer__logo" src={logo} alt="logo" />
        <h2 className="footer__text">
          {" "}
          IF YOU SEE IT, <br /> YOU CAN BECOME IT!{" "}
        </h2>
        {/* footer links */}
        <div className="footer__link--wrapper">
          {footerLinks.map((link, index)=><p key={index} className="footer__link">{link}</p>)}
        </div>

        <div className="footer__icons">
          <div>
            {/* <a className="footer__icon--fb href="" > */}
            <img 
            className="footer__icon" 
            src={fbIcon} 
            alt="My Image" />
            {/* </a> */}

            {/* <a className="footer__icon--ig href="" > */}
            <img
              id="footer__icon__ig"
              className="footer__icon"
              src={igIcon}
              alt="My Image"
            />
            {/* </a> */}

            {/* <a className="footer__icon--linkedin href="" > */}
            <img 
            className="footer__icon" 
            src={linkedinIcon} 
            alt="My Image" />
            {/* </a> */}
          </div>
        </div >
      </div>
    </>
  );
};

export default Footer;
