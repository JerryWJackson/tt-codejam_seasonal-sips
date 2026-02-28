import React, { useMemo } from "react";
import { drinksList } from "../../utils/drinksList";
import "../Alcohol/Alcohol.css";

const Ingredients = ({ selectedIngredients, toggleIngredient }) => {
  const ingredients = useMemo(() => {
    const list = new Set();
    drinksList.forEach((drink) => {
      drink.ingredients.forEach((ing) => list.add(ing));
    });
    return Array.from(list).sort();
  }, []);

  return (
    <div className="ingredients__container">
      <ul className="ingredients__list">
        {ingredients.map((ingredient, index) => (
          <li key={ingredient}>
            <input
              className="ingredient__checkbox"
              type="checkbox"
              id={`ingredient-${index}`}
              name={ingredient}
              value={ingredient}
              checked={selectedIngredients.includes(ingredient)}
              onChange={() => toggleIngredient(ingredient)}
            />
            <span className="span-for-ingredient">
              <label
                htmlFor={`ingredient-${index}`}
                className="ingredient__checkbox_label"
              >
                {ingredient}
              </label>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
