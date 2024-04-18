import { React } from "react";
import { drinksList } from "../../utils/drinksList";
import "./Ingredients.css";

const ingredients = [];
const buildingredientCloud = () => {
  drinksList.forEach((drink) => {
    drink.ingredients.forEach((ingredient) => {
      if (!ingredients.includes(ingredient)) {
        ingredients.push(ingredient);
      }
    });
  });
  console.log(ingredients);
};
buildingredientCloud();

ingredients.sort();

const Ingredients = () => {
  let ingredientsList = [];
  ingredients.forEach((ingredient, index) => {
    ingredientsList.push(
      <li key={index}>
        <input
          className="ingredient__checkbox"
          type="checkbox"
          id=""
          name={ingredient}
          value={ingredient}
        />
        <span className="span-for-ingredient">
          <label htmlFor="ingredient__checkbox" className="ingredient__checkbox_label">{ingredient}</label>
        </span>
      </li>
    );
  });


  return (
    <div className="ingredients__container">
      <ul>{ingredientsList}</ul>
    </div>
  );
};

export default Ingredients;
