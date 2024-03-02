import { React } from "react";
import { drinksList } from "../../utils/drinksList";

export default function Card(props) {
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
              <p>{drink.ingredients}</p>
            </div>
          </div>
        </label>
      </li>
    );
  });

  return (
    <>
      <div className="card">
        <ul>{fiveDrinks}</ul>
      </div>
    </>
  );
}
