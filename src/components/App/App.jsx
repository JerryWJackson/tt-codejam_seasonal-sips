import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import "../../vendor/fonts.css";
import { constants } from "../../utils/constants";
import Home from "../Home/Home";
import Main from "../Main/Main";

export default function App() {
  const [hasTag, setHadTag] = useState(false);
  const [forHome, setForHome] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isLocated, setIsLocated] = useState(false);
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [currentSeason, setCurrentSeason] = useState("spring");
  const [searchType, setSearchType] = useState("away"); // Default to bars
  const [selectedAlcohols, setSelectedAlcohols] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const toggleFilter = (item, list, setList) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

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
        <Main
          currentSeason={currentSeason}
          address={address}
          setAddress={setAddress}
          pin={pin}
          setPin={setPin}
          notFound={notFound}
          setNotFound={setNotFound}
          setIsLocated={setIsLocated}
          handleScroll={handleScroll}
          searchType={searchType}
          setSearchType={setSearchType}
          selectedAlcohols={selectedAlcohols}
          setSelectedAlcohols={setSelectedAlcohols}
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
          toggleAlcohol={(item) =>
            toggleFilter(item, selectedAlcohols, setSelectedAlcohols)
          }
          toggleIngredient={(item) =>
            toggleFilter(item, selectedIngredients, setSelectedIngredients)
          }
          setLocation={() => handleScroll("map")}
        />
      </div>
    </div>
  );
}
