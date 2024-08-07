import React from "react";
import "./CardList.css";
import { drinksList } from "../../utils/drinksList";

const CardList = (props) => {
  let fiveDrinks = [];
  let thisDrinksList = drinksList.slice(0, 5);

  // drinksList.forEach((drink) => {
  //   if drink.seasons.includes(season)
  // })
  thisDrinksList.forEach((drink, index) => {
    let ingredientsList = drink.ingredients.join(", ");
    fiveDrinks.push(
      <li key={index}>
        <div className={`card ${props.currentSeason}`}>
          <input type="radio" name="slide" id={`c${index + 1}`} />
          <label htmlFor={`c${index + 1}`} className="card">
            <div className="column">
              <div className="icon">{index + 1}</div>
              <div className={`description ${props.currentSeason}`}>
                <h4>{drink.name}</h4>
                <p>{ingredientsList}</p>
              </div>
            </div>
          </label>
        </div>
      </li>
    );
  });

  return (
    <div className="wrapper">
      <div className="container__cards">
        <ul className="card-list">{fiveDrinks}</ul>
        <div className="container__card_current-recipe closed"></div>
      </div>
    </div>
  );
};

export default CardList;
