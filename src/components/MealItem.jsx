import { useContext } from "react";
//Utils
import { formatter } from "../util/formatter.js";
// Components
import Button from "./UI/Button.jsx";
// Context
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ meal }) {
  const cartContext = useContext(CartContext);
  function handleAddItemToCart() {
    cartContext.addItem(meal, 1);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${meal.image}
        `}
          alt={meal.name}
        />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-price">{formatter.format(meal.price)}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItemToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
