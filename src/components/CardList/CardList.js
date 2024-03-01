import { React, useState } from "React";
import "./CardList.css";
import Card from "../Card/Card.js";
import drinksList from "../../utils/drinksList";

export default function CardList(props) {

  return (
    <div className="wrapper">
      <div className="container__cards">
        <Card  />
        <div className="container__card_current-recipe closed"></div>
      </div>
    </div>
  );
}


export default