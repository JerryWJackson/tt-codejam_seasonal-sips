import { React } from "react";
import "./CardList.css";
import drinksList from "../../utils/drinksList";

export default function CardList(props) {
  let fiveDrinks = [];
  let thisDrinksList = drinksList.slice(0, 5);
  thisDrinksList.forEach((drink, index) => {
    fiveDrinks.push(
      <li key={index}>
        <input type="radio" name="slide" id={`c${index}`} checked />
        <label for={`c${index}`} className="card">
          <div className="row">
            <div className="icon">{drink.name}</div>
            <div className="description">
              <h4>{drink.name}</h4>
              <p>{drink.tags}</p>
            </div>
          </div>
        </label>
      </li>
    );
  });

  return (
    <div className="wrapper">
      <div className="container__cards">
      <div className="card">
        <ul>{fiveDrinks}</ul>
      </div>
        <div className="container__card_current-recipe closed"></div>
      </div>
    </div>
  );
};
