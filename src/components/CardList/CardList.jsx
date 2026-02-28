import React from "react";
import "./CardList.css";
import { drinksList } from "../../utils/drinksList";

const CardList = (props) => {
  const filteredDrinks = drinksList.filter((drink) => {
    const seasonMatch = drink.seasons.includes(props.currentSeason);
    const alcoholMatch =
      props.selectedAlcohols.length === 0 ||
      drink.alcohol.some((alc) => props.selectedAlcohols.includes(alc));
    const ingredientMatch =
      props.selectedIngredients.length === 0 ||
      drink.ingredients.some((ing) => props.selectedIngredients.includes(ing));

    return seasonMatch && alcoholMatch && ingredientMatch;
  });

  const displayDrinks = filteredDrinks.slice(0, 5);

  const displayDrinksList = displayDrinks.map((drink, index) => {
    const ingredientsList = drink.ingredients.join(", ");
    const steps = Object.values(drink.steps);

    return (
      <li key={index} className="card-item">
        <input
          type="radio"
          name="slide"
          id={`c${index + 1}`}
          defaultChecked={index === 0}
        />
        <label
          htmlFor={`c${index + 1}`}
          className={`card ${props.currentSeason}`}
          style={{ backgroundImage: drink.images[0] }}
        >
          <div className="card__overlay"></div>
          <div className="column">
            <div className="icon">{index + 1}</div>
            <div className={`description ${props.currentSeason}`}>
              <h4>{drink.name}</h4>
              <p className="ingredients-preview">{ingredientsList}</p>

              <div className="recipe-details">
                <div className="recipe__section">
                  <h5>Ingredients</h5>
                  <p>{ingredientsList}</p>
                </div>
                <div className="recipe__section">
                  <h5>Preparation</h5>
                  <ol className="recipe__steps">
                    {steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
                {drink.recipe && (
                  <a
                    href={drink.recipe.replace('url("', "").replace('")', "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="recipe__link"
                  >
                    View Original Recipe
                  </a>
                )}
              </div>
            </div>
          </div>
        </label>
      </li>
    );
  });

  return (
    <div className="wrapper">
      <div className="container__cards">
        <ul className="card-list">{displayDrinksList}</ul>
      </div>
    </div>
  );
};

export default CardList;
