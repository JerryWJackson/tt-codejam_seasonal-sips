import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
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

  const time = new Date();
  const curMonth = time.getMonth() + 1;
  console.log(curMonth);

  useEffect(() => {
     const { seasons } = constants;
     const season =
       Object.keys(seasons).find((key) => seasons[key].includes(curMonth)) ||
       "spring";
     setCurrentSeason(season);
  }, [curMonth]);

  return (
    <div className="page">
      <div className={`App ${currentSeason}`}>
        <Home
          setIsLocated={setIsLocated}
          handleScroll={handleScroll}
          setAddress={setAddress}
          setPin={setPin}
          currentSeason={currentSeason}
        />
        <Main currentSeason={currentSeason} />
      </div>
    </div>
  );
}
