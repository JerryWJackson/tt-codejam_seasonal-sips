import "./Main.css";
// eslint-disable-next-line
import React from "react";
import Map from "../Map/Map";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Alcohol from "../Alcohol/Alcohol";
import Ingredients from "../Ingredients/Ingredients";
import CardList from "../CardList/CardList";
// import { CurrentSeasonContext } from "../../contexts/switcherSeason";
// import ResourceCenter from "../ResourceCenter/ResourceCenter";

const Main = (props) => {
  return (
    <>
      <section id="main" className="main">
        <Header address={props.address} />
        <div className="main__tag-selector">
          <p className="main__list_title">Pick your poison...</p>
          <form className="alcohol-selector">
            <div className="alcohols_container">
              <Alcohol />
            </div>
          </form>
          <p className="main__list_title">Pick your mixers...</p>
          <div className="ingredients_container">
            <Ingredients />
          </div>
        </div>
      </section>
      <section id="cardlist" className="cardlist">
        <CardList />
      </section>
      <section id="map" className="main__map_container">
        <div className="main__map">
          <h4 className="main__map_title">How do you want to enjoy this drink?</h4>
          <div className="main__map_btn-container">
          <button
            type="button"
            id="home-btn"
            onClick={props.setLocation}
            className="main__home-btn spring"
          >
            Make at Home
          </button>
          <button
            type="button"
            id="away-btn"
            onClick={props.setLocation}
            className="main__away-btn spring"
          >
            Places that Serve
          </button>
          </div>
          <Map
            address={props.address}
            setPin={props.setPin}
            notFound={props.notFound}
            setNotFound={props.setNotFound}
          />
        </div>
      </section>
      <section id="footer" className="footer">
        <Footer />
      </section>
    </>
  );
};

export default Main;
