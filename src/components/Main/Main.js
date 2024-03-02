import "./Main.css";
// eslint-disable-next-line
import React from "react";
import Map from "../Map/Map";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Alcohol from "../Alcohol/Alcohol";
import Ingredients from "../Ingredients/Ingredients";
import CardList from "../CardList/CardList";
// import ResourceCenter from "../ResourceCenter/ResourceCenter";

const Main = (props) => {
  return (
    <>
      <section id="main" className="main">
        <Header address={props.address} />
        <div className="main__tag-selector">
          <p className="main__list_title">Pick your poison...</p>
          <div className="tag_container">
            <Alcohol />
          </div>
          <p className="main__list_title">Pick your mixers...</p>
          <div className="tag_container">
            <Ingredients />
          </div>
        </div>
      </section>
      <section id="cardlist" className="cardlist">
        <CardList />
      </section>
      <section id="map" className="main__map">
        <div className="main__map">
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
