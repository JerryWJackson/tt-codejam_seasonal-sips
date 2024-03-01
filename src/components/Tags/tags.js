import { React } from "react";
import { drinksList } from "../../utils/drinksList";
import "./tags.css";

const tags = [];
const buildTagCloud = () => {
  drinksList.forEach((drink) => {
    drink.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
        console.log(tag);
      }
    });
  });
  console.log(tags);
};
buildTagCloud();
const Tags = () => {
  let tagsList = [];
  tags.forEach((tag, index) => {
    tagsList.push(
      <li key={index}>
        <input
          className="tag__checkbox"
          type="checkbox"
          id=""
          name={tag}
          value={tag}
        />
        <span className="span-for-tag">
          <label for="tag__checkbox" className="tag__checkbox_label">{tag}</label>
        </span>
      </li>
    );
  });

  return (
    <div className="tag__container">
      <ul>{tagsList}</ul>
    </div>
  );
};

export default Tags;
