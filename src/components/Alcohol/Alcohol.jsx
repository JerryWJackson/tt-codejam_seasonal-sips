import React, { useMemo } from "react";
import { drinksList } from "../../utils/drinksList";
import "./Alcohol.css";

const Alcohols = ({ selectedAlcohols, toggleAlcohol }) => {
  const alcohols = useMemo(() => {
    const list = new Set();
    drinksList.forEach((drink) => {
      drink.alcohol.forEach((alc) => list.add(alc));
    });
    return Array.from(list).sort();
  }, []);

  return (
    <div className="alcohols__container">
      <ul className="alcohols__list">
        {alcohols.map((alcohol, index) => (
          <li key={alcohol}>
            <input
              className="alcohol__checkbox"
              type="checkbox"
              id={`alcohol-${index}`}
              name={alcohol}
              value={alcohol}
              checked={selectedAlcohols.includes(alcohol)}
              onChange={() => toggleAlcohol(alcohol)}
            />
            <span className="span-for-alcohol">
              <label
                htmlFor={`alcohol-${index}`}
                className="alcohol__checkbox_label"
              >
                {alcohol}
              </label>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alcohols;
