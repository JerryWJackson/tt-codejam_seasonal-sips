import { drinksList } from "../../utils/drinksList";

export default function Card(props) {
  const drink1 = drinksList[0];
  const drink2 = drinksList[1];
  const drink3 = drinksList[2];
  const drink4 = drinksList[3];
  const drink5 = drinksList[4];

  let fiveDrinks = [];
  drinksList.forEach((drink, index) => {
    fiveDrinks.push(<li key={index}>
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
    </li>)
  })


  return (
    <>
      <div className="card">
        <ul>{fiveDrinks}</ul>
      </div>
    </>
  );
}
