import "./App.css";
import React from "react";
import { useState } from "react";
import "../../vendor/fonts.css";
// eslint-disable-next-line
import Home from "../Home/Home";
// eslint-disable-next-line
import Main from "../Main/Main";
// eslint-disable-next-line
import Footer from "../Footer/Footer";
import { constants } from "../../utils/constants";

export default function App() {
  const [hasTag, setHadTag] = useState(false);
  const [forHome, setForHome] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isLocated, setIsLocated] = useState(false);
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [currentSeason, setCurrentSeason] = useState("spring");

  const handleScroll = (elementId) => {
    setIsLocated(true);
    setTimeout(() => {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        console.log("targetElement");
        const { top } = targetElement.getBoundingClientRect();
        window.scrollTo({
          top: window.scrollY + top,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const seasonalElements = constants.seasonalElements;
  const seasons = constants.seasons;

  const time = new Date();
  const curMonth = time.getMonth() + 1;

  if (curMonth == 12 || curMonth == 1 || curMonth == 2) {
    seasonalElements.forEach((element) => {
      if (element.classList.contains("spring")) {
        element.classList.remove("spring");
      }
      if (element.classList.contains("summer")) {
        element.classList.remove("summer");
      }
      if (element.classList.contains("fall")) {
        element.classList.remove("fall");
      }
      element.classList.add("winter");
    });
  } else if (curMonth == 3 || curMonth == 4 || curMonth == 5) {
    seasonalElements.forEach((element) => {
      if (element.classList.contains("winter")) {
        element.classList.remove("winter");
      }
      if (element.classList.contains("summer")) {
        element.classList.remove("summer");
      }
      if (element.classList.contains("fall")) {
        element.classList.remove("fall");
      }
      element.classList.add("spring");
    });
  } else if (curMonth == 6 || curMonth == 7 || curMonth == 8) {
    seasonalElements.forEach((element) => {
      if (element.classList.contains("spring")) {
        element.classList.remove("spring");
      }
      if (element.classList.contains("winter")) {
        element.classList.remove("winter");
      }
      if (element.classList.contains("fall")) {
        element.classList.remove("fall");
      }
      element.classList.add("summer");
    });
  } else {
    seasonalElements.forEach((element) => {
      if (element.classList.contains("spring")) {
        element.classList.remove("spring");
      }
      if (element.classList.contains("summer")) {
        element.classList.remove("summer");
      }
      if (element.classList.contains("winter")) {
        element.classList.remove("winter");
      }
      element.classList.add("fall");
    });
  }

  return (
    <div className="page">
      <CurrentSeasonContext>
        <div className="App">
          <Home
            setIsLocated={setIsLocated}
            handleScroll={handleScroll}
            setAddress={setAddress}
            setPin={setPin}
          />
          <Main />
        </div>
      </CurrentSeasonContext>
    </div>
  );
}
