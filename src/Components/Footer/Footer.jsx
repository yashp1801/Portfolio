import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <h1>
            Lets work <br /> together
          </h1>
          <Link to={"/resume"} className="footer__link">
            Resume
          </Link>
        </div>
        <div className="footer__span">
          <span>
            Portfolio 2022 <br /> developed by me
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
