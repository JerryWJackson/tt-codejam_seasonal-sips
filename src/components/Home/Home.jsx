import React, { useState } from "react";
import logo from "/src/images/drinksGallery.png";
// import { CurrentSeasonContext } from "../../contexts/switcherSeason";
import "./Home.css";

const Home = (props) => {
  const setLocation = () => {
    const input = document.querySelector("#search-bar");
    if (input.value.length > 0) {
      props.setIsLocated(true);
      props.handleScroll("main");
      props.setAddress(input.value);
    }
  };

  const handleDetectLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const coords = `${latitude},${longitude}`;
          props.setIsLocated(true);
          props.handleScroll("main");
          props.setAddress(coords);
        },
        (error) => {
          console.error("Error detecting location:", error);
          alert(
            "Unable to retrieve your location. Please enter your ZipCode manually.",
          );
        },
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setLocation();
    }
  };

  console.log(props.currentSeason);

  return (
    <div className="home">
      <div className="home__header">
        <p className={`home__caption ${props.currentSeason}`}>Seasonal Sips</p>
        <p className={`home__caption-byline ${props.currentSeason}`}>
          Curating Seasonal Libations
        </p>
        <div className="home__container">
          <p className={`home__description ${props.currentSeason}`}>
            Have you and your friends gotten tired of going to the same old
            places and drinking the same old things? Use Seasonal Sips to go on
            an adventure in your town tonight!
          </p>
          <p className={`home__description ${props.currentSeason}`}>
            Seasonal Sips offers a curated list of locally popular libations and
            the places to find their ingredients or the places that serve them
            for making your next night in or out with your friends into a new
            and exciting adventure.
          </p>
          <p className={`home__description ${props.currentSeason}`}>
            All while supporting local businesses you might never have thought
            to visit before.
          </p>
          <div className={`home__circle ${props.currentSeason}`}></div>
        </div>
        <div className="home__location-discovery">
          <div className="home__option">
            <button
              type="button"
              className="home__detect-btn"
              onClick={handleDetectLocation}
            >
              DETECT LOCATION
            </button>
          </div>

          <div className="home__divider">
            <span className="home__divider-line"></span>
            <span className="home__divider-text">OR</span>
            <span className="home__divider-line"></span>
          </div>

          <div className="home__option home__option--manual">
            <input
              id="search-bar"
              type="text"
              placeholder="Enter ZipCode"
              className="home__search"
              onKeyDown={handleEnter}
              required
            />
            <button
              type="button"
              id="start-button"
              onClick={setLocation}
              className={`home__submit-inline ${props.currentSeason}`}
            >
              FIND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
