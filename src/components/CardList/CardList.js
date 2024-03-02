import { React } from "react";
import "./CardList.css";
import drinksList from "../../utils/drinksList";

const CardList = () => {
  let fiveDrinks = [];
  let thisDrinksList = drinksList.slice(0, 5);
  thisDrinksList.forEach((drink, index) => {
    let tagList = drink.tags.join(", ")
    fiveDrinks.push(
      <li key={index}>
        <div className="card" style={{ background: 'url(' + drink.images[0] +')' }}>
        <input type="radio" name="slide" id={`c${index+1}`} />
        <label htmlFor={`c${index+1}`} className="card">
          <div className="row">
            <div className="icon">{drink.name}</div>
            <div className="description">
              <h4>{drink.name}</h4>
              <p>{tagList}</p>
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
        <ul>{fiveDrinks}</ul>
        <div className="container__card_current-recipe closed"></div>
      </div>
    </div>
  );
};

export default CardList;