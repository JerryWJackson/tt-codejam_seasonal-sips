import { React } from "react";
import { drinksList } from "../../utils/drinksList";
import "./Alcohol.css";

const alcohols = [];
const buildAlcoholCloud = () => {
  drinksList.forEach((drink) => {
    drink.alcohol.forEach((alcohol) => {
      if (!alcohols.includes(alcohol)) {
        alcohols.push(alcohol);
        console.log(alcohols);
      }
    });
  });
  console.log(alcohols);
};
buildAlcoholCloud();

alcohols.sort();

const Alcohols = () => {
  let alcoholsList = [];
  alcohols.forEach((alcohol, index) => {
    alcoholsList.push(
      <li key={index}>
        <input
          className="alcohol__checkbox"
          type="checkbox"
          id=""
          name={alcohol}
          value={alcohol}
        />
        <span className="span-for-alcohol">
          <label for="alcohol__checkbox" className="alcohol__checkbox_label">{alcohol}</label>
        </span>
      </li>
    );
  });

  return (
    <div className="alcohols__container">
      <ul>{alcoholsList}</ul>
    </div>
  );
};

export default Alcohols;
