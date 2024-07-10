import "./Footer.css";
import React from "react";

const Footer = (props) => {
  return (
    <footer className={`footer ${props.currentSeason}`}>
      <div className="footer__title">
        <span>Developed by Team PB&JAM </span>
      </div>
      <div className={`footer__names ${props.currentSeason}`}>
        <span>Jenny Sukut </span>
        <span>Jerry Jackson</span>
        <span>Anna Vasileva</span>
        <span>Lalla blue</span>
      </div>
      <div className={`footer__year ${props.currentSeason}`}>
        {" "}
        &#x24B8; 2024
      </div>
    </footer>
  );
};

export default Footer;
