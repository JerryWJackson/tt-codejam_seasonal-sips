import { React } from "react";
import "./CardList.css";
import { drinksList } from "../../utils/drinksList";

const CardList = () => {
  let fiveDrinks = [];
  let thisDrinksList = drinksList.slice(0, 5);

  // drinksList.forEach((drink) => {
  //   if drink.seasons.includes(season)
  // })
  thisDrinksList.forEach((drink, index) => {
    let ingredientsList = drink.ingredients.join(", ")
    fiveDrinks.push(
      <li key={index}>
        <div className="card" style={{ backgroundImage: 'url(' + drink.images[0] +')' }}>
        <input type="radio" name="slide" id={`c${index+1}`} />
        <label htmlFor={`c${index+1}`} className="card">
          <div className="column">
            <div className="icon">{index+1}</div>
            <div className="description">
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
        <ul className="cardList">{fiveDrinks}</ul>
        <div className="container__card_current-recipe closed"></div>
      </div>
    </div>
  );
};

export default CardList;